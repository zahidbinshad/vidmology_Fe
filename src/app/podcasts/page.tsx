"use client";

import { useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Link from "next/link";
import { FaHeadphones, FaSearch } from "react-icons/fa";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { CustomSelect } from "@/components/ui/CustomSelect";
import { podcasts, type Podcast } from "@/app/podcasts/data";

const levelClass: Record<string, string> = {
  Basic:        "badge-blue",
  Intermediate: "badge-purple",
  Advanced:     "badge-orange",
};

const ALL_CATEGORIES = "All Categories";
const ALL_LEVELS     = "All Skills";
const categories     = [ALL_CATEGORIES, ...Array.from(new Set(podcasts.map((p) => p.tag)))];
const levels         = [ALL_LEVELS, "Basic", "Intermediate", "Advanced"];
const sortOptions    = ["Default sorting", "Duration (short–long)", "Duration (long–short)"];

function PodcastCard({ podcast }: { podcast: Podcast }) {
  return (
    <Link href={`/podcasts/${podcast.slug}`} className="media-card" style={{ textDecoration: "none" }}>
      <div className="media-thumb course-card-thumb">
        <Image
          src={podcast.image}
          alt={podcast.title}
          fill
          className="object-fit-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="media-thumb-gradient" />
        <div className="podcast-card-headphones">
          <FaHeadphones size={18} color="#fff" aria-hidden />
        </div>
      </div>

      <div className="video-card-content" style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span className={`badge-pill ${levelClass[podcast.level] ?? "badge-blue"}`}>
            {podcast.level}
          </span>
          <span className="badge-pill badge-green">
            {podcast.tag}
          </span>
          <span className="video-card-meta">
            <FaHeadphones size={11} aria-hidden />
            {podcast.duration}
          </span>
        </div>

        <p className="video-card-title">{podcast.title}</p>
        <p className="video-card-desc">{podcast.description}</p>
      </div>
    </Link>
  );
}

const PAGE_SIZE = 9;

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  if (totalPages <= 1) return null;

  const pages: (number | "…")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (page > 3) pages.push("…");
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
    if (page < totalPages - 2) pages.push("…");
    pages.push(totalPages);
  }

  return (
    <div className="pagination-wrap">
      <button onClick={() => onChange(page - 1)} disabled={page === 1} className="pagination-btn" aria-label="Previous page">
        &#8592;
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="pagination-ellipsis">…</span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`pagination-btn${p === page ? " pagination-btn--active" : ""}`}
            aria-current={p === page ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}
      <button onClick={() => onChange(page + 1)} disabled={page === totalPages} className="pagination-btn" aria-label="Next page">
        &#8594;
      </button>
    </div>
  );
}

export default function PodcastsPage() {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [level,    setLevel]    = useState(ALL_LEVELS);
  const [sort,     setSort]     = useState(sortOptions[0]);
  const [page,     setPage]     = useState(1);

  const filtered = useMemo(() => {
    let result = podcasts.filter((p) => {
      const matchCat    = category === ALL_CATEGORIES || p.tag === category;
      const matchLevel  = level === ALL_LEVELS || p.level === level;
      const matchSearch = search.trim() === "" || p.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchLevel && matchSearch;
    });
    if (sort === "Duration (short–long)") result = [...result].sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    if (sort === "Duration (long–short)") result = [...result].sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration));
    return result;
  }, [search, category, level, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (setter: (v: string) => void) => (v: string) => { setter(v); setPage(1); };
  const handlePageChange   = (p: number) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <LandingNavbar />

      <section className="videos-hero">
        <Container>
          <div className="videos-hero-hd">
            <h1 className="videos-hero-title">
              Podcasts That Fit Into Your Commute and Career
            </h1>
            <p className="videos-hero-sub">
              Deep-dive audio sessions with top recruitment experts — listen anywhere, anytime.
            </p>
          </div>

          <div className="videos-search-wrap">
            <div className="videos-search-box">
              <FaSearch size={15} color="#9ca3af" aria-hidden />
              <input
                type="text"
                placeholder="Search podcasts"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="videos-search-input"
              />
            </div>
            <button onClick={() => {}} className="btn-cta-green videos-search-btn">
              <FaSearch size={14} aria-hidden /> Search
            </button>
          </div>
        </Container>
      </section>

      <section className="bg-white videos-filters-section">
        <Container>
          <div className="videos-filter-row">
            <CustomSelect label="Categories" value={category} options={categories} onChange={handleFilterChange(setCategory)} />
            <CustomSelect label="Levels"     value={level}    options={levels}     onChange={handleFilterChange(setLevel)}    />
            <CustomSelect label="Sort By"    value={sort}     options={sortOptions} onChange={handleFilterChange(setSort)}    />
          </div>

          {filtered.length > 0 && (
            <p className="videos-count">
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} podcasts
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="text-center videos-empty">No podcasts found matching your filters.</div>
          ) : (
            <div className="course-grid">
              {paginated.map((p) => <PodcastCard key={p.slug} podcast={p} />)}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
        </Container>
      </section>

      <LandingFooter />
    </>
  );
}
