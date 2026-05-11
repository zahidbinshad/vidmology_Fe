"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { FaStar, FaStarHalfAlt, FaRegStar, FaEye, FaHeadphones } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { getPodcastBySlug, getSeriesPodcasts, getRelatedPodcasts, type Podcast } from "@/app/podcasts/data";
import { ChatWidget } from "@/components/ui/ChatWidget";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="vp-stars">
      {[1, 2, 3, 4, 5].map((n) => {
        if (rating >= n) return <FaStar key={n} size={14} color="#f59e0b" aria-hidden />;
        if (rating >= n - 0.5) return <FaStarHalfAlt key={n} size={14} color="#f59e0b" aria-hidden />;
        return <FaRegStar key={n} size={14} color="#d1d5db" aria-hidden />;
      })}
      <span className="vp-rating-num">{rating.toFixed(1)}</span>
    </div>
  );
}

function EpisodeItem({ podcast, active }: { podcast: Podcast; active: boolean }) {
  return (
    <Link href={`/podcasts/${podcast.slug}`} className={`vp-episode${active ? " vp-episode--active" : ""}`}>
      <div className="vp-episode-thumb">
        <Image src={podcast.image} alt={podcast.title} fill className="object-fit-cover" sizes="76px" />
        <span className="vp-episode-num-badge">Ep {podcast.episode}</span>
        <div className="vp-episode-thumb-overlay">
          <FaHeadphones size={12} color="#fff" />
        </div>
      </div>
      <div className="vp-episode-info">
        <span className={`vp-episode-title${active ? " vp-episode-title--active" : ""}`}>
          {podcast.title}
        </span>
        <span className="vp-episode-meta">
          <FaHeadphones size={10} aria-hidden /> {podcast.duration}
        </span>
      </div>
    </Link>
  );
}

const levelClass: Record<string, string> = {
  Basic:        "badge-blue",
  Intermediate: "badge-purple",
  Advanced:     "badge-orange",
};

function RelatedCard({ podcast }: { podcast: Podcast }) {
  return (
    <Link href={`/podcasts/${podcast.slug}`} className="media-card">
      <div className="media-thumb course-card-thumb">
        <Image src={podcast.image} alt={podcast.title} fill className="object-fit-cover" sizes="(max-width: 768px) 100vw, 400px" />
        <div className="media-thumb-gradient" />
        <div className="podcast-card-headphones">
          <FaHeadphones size={16} color="#fff" aria-hidden />
        </div>
      </div>
      <div className="video-card-content">
        <div className="video-card-meta-row">
          <span className={`badge-pill ${levelClass[podcast.level] ?? "badge-blue"}`}>{podcast.level}</span>
          <span className="badge-pill badge-green">{podcast.tag}</span>
          <span className="video-card-meta">
            <FaHeadphones size={11} aria-hidden /> {podcast.duration}
          </span>
        </div>
        <p className="video-card-title">{podcast.title}</p>
        <p className="video-card-desc">{podcast.description}</p>
      </div>
    </Link>
  );
}

export default function PodcastPlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Overview" | "Reviews" | "Comment">("Overview");

  const podcast = getPodcastBySlug(slug);

  if (!podcast) {
    router.replace("/podcasts");
    return null;
  }

  const seriesPodcasts = podcast.series ? getSeriesPodcasts(podcast.series) : [];
  const hasSeries      = seriesPodcasts.length > 1;
  const related        = getRelatedPodcasts(podcast);

  return (
    <>
      <LandingNavbar />

      <div className="vp-page">
        <Container>
          {/* Breadcrumb */}
          <nav className="vp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/podcasts">Podcasts</Link>
            <span className="vp-breadcrumb-sep" aria-hidden>›</span>
            <span>{podcast.series ?? podcast.title}</span>
          </nav>

          {/* Player + sidebar */}
          <div className={`vp-layout${hasSeries ? " vp-layout--with-sidebar" : ""}`}>
            {/* Audio player */}
            <div className="pa-player-wrap">
              <div className="pa-artwork">
                <Image
                  src={podcast.image}
                  alt={podcast.title}
                  fill
                  className="object-fit-cover"
                  sizes="(max-width: 991px) 100vw, 70vw"
                  priority
                />
                <div className="pa-artwork-overlay" />
                <div className="pa-artwork-badge">
                  <FaHeadphones size={20} color="#fff" aria-hidden />
                  <span>Podcast</span>
                </div>
              </div>
              <div className="pa-controls">
                <audio
                  key={slug}
                  controls
                  className="pa-audio"
                  preload="metadata"
                />
              </div>
            </div>

            {/* Episode sidebar */}
            {hasSeries && (
              <aside className="vp-sidebar">
                <div className="vp-sidebar-header">
                  <p className="vp-sidebar-title">{podcast.series}</p>
                  <p className="vp-sidebar-count">{seriesPodcasts.length} episodes</p>
                </div>
                <div className="vp-episode-list">
                  {seriesPodcasts.map((ep) => (
                    <EpisodeItem key={ep.slug} podcast={ep} active={ep.slug === slug} />
                  ))}
                </div>
              </aside>
            )}
          </div>

          {/* Meta */}
          <div className="vp-meta">
            <h1 className="vp-title">{podcast.title}</h1>
            <div className="vp-meta-row">
              <StarRating rating={podcast.rating} />
              <span className="vp-views"><FaEye size={13} aria-hidden /> {podcast.views} Listened</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="vp-tabs">
            {(["Overview", "Reviews", "Comment"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`vp-tab${activeTab === tab ? " vp-tab--active" : ""}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="vp-tab-divider" />

          {activeTab === "Overview" && (
            <div className="vp-description">
              <h3 className="vp-description-heading">Description</h3>
              <p className="vp-description-body">{podcast.description}</p>
            </div>
          )}
          {activeTab === "Reviews" && (
            <p className="vp-empty-tab">No reviews yet.</p>
          )}
          {activeTab === "Comment" && (
            <p className="vp-empty-tab">No comments yet.</p>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="vp-related">
              <h2 className="vp-related-heading">Related Podcasts</h2>
              <div className="vp-related-grid">
                {related.map((p) => (
                  <RelatedCard key={p.slug} podcast={p} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </div>

      <LandingFooter />
      <ChatWidget />
    </>
  );
}
