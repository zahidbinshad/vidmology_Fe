"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { FaStar, FaStarHalfAlt, FaRegStar, FaEye, FaClock, FaPlay } from "react-icons/fa";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { ChatWidget } from "@/components/ui/ChatWidget";
import { getVideoBySlug, getSeriesVideos, getRelatedVideos, type Video } from "@/app/videos/data";

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

function EpisodeItem({ video, active }: { video: Video; active: boolean }) {
  return (
    <Link href={`/videos/${video.slug}`} className={`vp-episode${active ? " vp-episode--active" : ""}`}>
      <div className="vp-episode-thumb">
        <Image src={video.image} alt={video.title} fill className="object-fit-cover" sizes="76px" />
        <span className="vp-episode-num-badge">Ep {video.episode}</span>
        <div className="vp-episode-thumb-overlay">
          <FaPlay size={12} color="#fff" style={{ marginLeft: 2 }} />
        </div>
      </div>
      <div className="vp-episode-info">
        <span className={`vp-episode-title${active ? " vp-episode-title--active" : ""}`}>
          {video.title}
        </span>
        <span className="vp-episode-meta">
          <FaClock size={10} aria-hidden /> {video.duration}
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

function RelatedCard({ video }: { video: Video }) {
  return (
    <Link href={`/videos/${video.slug}`} className="media-card" style={{ textDecoration: "none" }}>
      <div className="media-thumb course-card-thumb">
        <Image src={video.image} alt={video.title} fill className="object-fit-cover" sizes="(max-width: 768px) 100vw, 400px" />
        <div className="media-thumb-gradient" />
      </div>
      <div className="video-card-content" style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
          <span className={`badge-pill ${levelClass[video.level] ?? "badge-blue"}`}>{video.level}</span>
          <span className="badge-pill badge-green">{video.tag}</span>
          <span className="video-card-meta">
            <FaClock size={11} aria-hidden /> {video.duration}
          </span>
        </div>
        <p className="video-card-title">{video.title}</p>
        <p className="video-card-desc">{video.description}</p>
      </div>
    </Link>
  );
}

export default function VideoPlayerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"Overview" | "Reviews" | "Comment">("Overview");

  const video = getVideoBySlug(slug);

  if (!video) {
    router.replace("/videos");
    return null;
  }

  const seriesVideos = video.series ? getSeriesVideos(video.series) : [];
  const hasSeries    = seriesVideos.length > 1;
  const related      = getRelatedVideos(video);

  return (
    <>
      <LandingNavbar />

      <div className="vp-page">
        <Container>
          {/* Breadcrumb */}
          <nav className="vp-breadcrumb" aria-label="Breadcrumb">
            <Link href="/videos">Videos</Link>
            <span className="vp-breadcrumb-sep" aria-hidden>›</span>
            <span>{video.series ?? video.title}</span>
          </nav>

          {/* Player + sidebar */}
          <div className={`vp-layout${hasSeries ? " vp-layout--with-sidebar" : ""}`}>
            {/* Video player */}
            <div className="vp-player-wrap">
              <video
                key={slug}
                controls
                poster={video.image}
                className="vp-player"
                preload="metadata"
              >
                <source src="" type="video/mp4" />
              </video>
            </div>

            {/* Episode sidebar */}
            {hasSeries && (
              <aside className="vp-sidebar">
                <div className="vp-sidebar-header">
                  <p className="vp-sidebar-title">{video.series}</p>
                  <p className="vp-sidebar-count">{seriesVideos.length} episodes</p>
                </div>
                <div className="vp-episode-list">
                  {seriesVideos.map((ep) => (
                    <EpisodeItem key={ep.slug} video={ep} active={ep.slug === slug} />
                  ))}
                </div>
              </aside>
            )}
          </div>

          {/* Meta */}
          <div className="vp-meta">
            <h1 className="vp-title">{video.title}</h1>
            <div className="vp-meta-row">
              <StarRating rating={video.rating} />
              <span className="vp-views"><FaEye size={13} aria-hidden /> {video.views} Viewed</span>
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

          {/* Tab content */}
          {activeTab === "Overview" && (
            <div className="vp-description">
              <h3 className="vp-description-heading">Description</h3>
              <p className="vp-description-body">{video.description}</p>
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
              <h2 className="vp-related-heading">Related Videos</h2>
              <div className="vp-related-grid">
                {related.map((v) => (
                  <RelatedCard key={v.slug} video={v} />
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
