"use client";

import { useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import { FaClock, FaSearch } from "react-icons/fa";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { CustomSelect } from "@/components/ui/CustomSelect";

const levelClass: Record<string, string> = {
  Basic:        "badge-blue",
  Intermediate: "badge-purple",
  Advanced:     "badge-orange",
};

const videos = [
  { level: "Intermediate", tag: "Contract/Freelance", duration: "6m",   title: "How can someone overcome fear in real life from objections", description: "Test description",                                                                                                              image: "/thumb-1.png" },
  { level: "Advanced",     tag: "Leadership",         duration: "10m",  title: "Nihil id optio saep",                                        description: "adfsf",                                                                                                                        image: "/thumb-2.png" },
  { level: "Intermediate", tag: "Permanent",          duration: "10m",  title: "Test Title1",                                                description: "textfsdf",                                                                                                                     image: "/thumb-1%20(1).png" },
  { level: "Intermediate", tag: "Client Success",     duration: "11m",  title: "How to Overcome Objections When Selling a Candidate",        description: "Master the art of responding to client objections during the candidate submission stage. Learn how to position candidates.",    image: "/thumb-2%20(1).png" },
  { level: "Basic",        tag: "Client Success",     duration: "4.52", title: "Handling Difficult Clients",                                 description: "Learn how to navigate challenging client interactions with professionalism and confidence. This includes setting...",           image: "/thumb-1.png" },
  { level: "Basic",        tag: "Client Success",     duration: "6.35", title: "Account Management For Recruiters.",                         description: "Understand how effective account management helps recruiters build long-term client relationships, maintain...",               image: "/thumb-2.png" },
  { level: "Basic",        tag: "Client Success",     duration: "5.06", title: "Turning No into Yes",                                        description: "Learn how to transform objections and rejections into opportunities by using persuasive communication, activ...",              image: "/thumb-1%20(1).png" },
  { level: "Intermediate", tag: "Leadership",         duration: "5.12", title: "Coaching & Developing Recruitment",                          description: "Unlock the potential of your recruitment team through structured coaching, continuous skill development, and...",             image: "/thumb-2%20(1).png" },
  { level: "Intermediate", tag: "Leadership",         duration: "5.21", title: "Effective Communication for Recruitment Leaders",            description: "Master the art of clear, confident, and strategic communication to lead teams, manage clients, and alig...",                 image: "/thumb-1.png" },
  { level: "Basic",        tag: "Leadership",         duration: "6.21", title: "The Duel Role- Balancing Leadership & Billing",              description: "Learn the challenges and strategies of managing both leadership responsibilities and personal billing targets...",             image: "/thumb-2.png" },
  { level: "Intermediate", tag: "Leadership",         duration: "6.52", title: "The Power of Role Plays- Developing a Winning...",           description: "Learn how structured role plays can strengthen recruiter skills, boost confidence, and prepare teams for real...",            image: "/thumb-1%20(1).png" },
  { level: "Intermediate", tag: "Leadership",         duration: "6.52", title: "The Shift from Billing to Leader",                           description: "Explore how recruiters transition from individual billing success to becoming effective team leaders. This shift...",        image: "/thumb-2%20(1).png" },
  { level: "Basic",        tag: "Core Skills",        duration: "6.57", title: "Time Management & Productivity for Recruiters.",             description: "Master essential time management techniques and productivity hacks tailored for recruiters. Learn how to...",                image: "/thumb-1.png" },
  { level: "Basic",        tag: "Core Skills",        duration: "5.11", title: "Why Data Matters",                                           description: "Understand how leveraging recruitment data can improve decision-making, track performance, identify...",                    image: "/thumb-2.png" },
  { level: "Basic",        tag: "Core Skills",        duration: "5.33", title: "Why Data is Your Secret Weapon",                             description: "Discover how data empowers recruiters to gain a competitive edge by enhancing decision-making...",                          image: "/thumb-1%20(1).png" },
  { level: "Advanced",     tag: "BD",                 duration: "12m",  title: "Winning & Developing Clients",                               description: "Proven techniques to win new clients and grow existing accounts sustainably.",                                                image: "/thumb-2%20(1).png" },
  { level: "Intermediate", tag: "Sourcing",           duration: "8m",   title: "Data Driven Recruitment & Market Intelligence",              description: "Use data and market insight to find and attract the right candidates faster.",                                              image: "/thumb-1.png" },
  { level: "Advanced",     tag: "Client Success",     duration: "15m",  title: "Building a Successful Recruitment Desk",                     description: "Learn how to build a high-performing Recruitment Desk that drives hiring success.",                                          image: "/thumb-2.png" },
];

const ALL_CATEGORIES = "All Categories";
const ALL_LEVELS = "All Skills";
const categories = [ALL_CATEGORIES, ...Array.from(new Set(videos.map((v) => v.tag)))];
const levels = [ALL_LEVELS, "Basic", "Intermediate", "Advanced"];
const sortOptions = ["Default sorting", "Duration (short–long)", "Duration (long–short)"];

function VideoCard({ video }: { video: typeof videos[number] }) {
  return (
    <div className="media-card">
      <div className="media-thumb course-card-thumb">
        <Image
          src={video.image}
          alt={video.title}
          fill
          className="object-fit-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="media-thumb-gradient" />
      </div>

      <div className="video-card-content" style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span className={`badge-pill ${levelClass[video.level] ?? "badge-blue"}`}>
            {video.level}
          </span>
          <span className="badge-pill badge-green">
            {video.tag}
          </span>
          <span className="video-card-meta">
            <FaClock size={11} aria-hidden />
            {video.duration}
          </span>
        </div>

        <p className="video-card-title">{video.title}</p>
        <p className="video-card-desc">{video.description}</p>
      </div>
    </div>
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
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="pagination-btn"
        aria-label="Previous page"
      >
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

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="pagination-btn"
        aria-label="Next page"
      >
        &#8594;
      </button>
    </div>
  );
}

export default function VideosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(ALL_CATEGORIES);
  const [level, setLevel] = useState(ALL_LEVELS);
  const [sort, setSort] = useState(sortOptions[0]);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let result = videos.filter((v) => {
      const matchCat    = category === ALL_CATEGORIES || v.tag === category;
      const matchLevel  = level === ALL_LEVELS || v.level === level;
      const matchSearch = search.trim() === "" || v.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchLevel && matchSearch;
    });
    if (sort === "Duration (short–long)") result = [...result].sort((a, b) => parseFloat(a.duration) - parseFloat(b.duration));
    if (sort === "Duration (long–short)") result = [...result].sort((a, b) => parseFloat(b.duration) - parseFloat(a.duration));
    return result;
  }, [search, category, level, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilterChange = (setter: (v: string) => void) => (v: string) => {
    setter(v);
    setPage(1);
  };

  const handlePageChange = (p: number) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <LandingNavbar />

      <section className="videos-hero">
        <Container>
          <div className="videos-hero-hd">
            <h1 className="videos-hero-title">
              Find the Video Topic That Matches Your Goals and Interests
            </h1>
            <p className="videos-hero-sub">
              Choose from a growing library of bite sized videos no longer than 10 minutes.
            </p>
          </div>

          <div className="videos-search-wrap">
            <div className="videos-search-box">
              <FaSearch size={15} color="#9ca3af" aria-hidden />
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="videos-search-input"
              />
            </div>
            <button
              onClick={() => {}}
              className="btn-cta-green videos-search-btn"
            >
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
              Showing {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} videos
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="text-center videos-empty">
              No videos found matching your filters.
            </div>
          ) : (
            <div className="course-grid">
              {paginated.map((v) => (
                <VideoCard key={v.title} video={v} />
              ))}
            </div>
          )}

          <Pagination page={page} totalPages={totalPages} onChange={handlePageChange} />
        </Container>
      </section>

      <LandingFooter />
    </>
  );
}
