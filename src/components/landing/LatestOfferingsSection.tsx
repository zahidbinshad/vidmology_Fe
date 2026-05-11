"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { FaClock, FaPlay, FaHeadphones } from "react-icons/fa";
import { latestOfferings, latestPodcasts } from "@/content/landingPage";

const filters = ["Bite size Videos", "Podcasts"] as const;
type Filter = (typeof filters)[number];

type Item = {
  level: string;
  tag: string;
  duration: string;
  lessons: number;
  title: string;
  description: string;
  image: string;
};

const levelClass: Record<string, string> = {
  Beginner:     "badge-blue",
  Intermediate: "badge-purple",
  Advance:      "badge-orange",
};

function CourseCard({ item, isPodcast }: { item: Item; isPodcast: boolean }) {
  return (
    <div className="media-card">
      <div className={`media-thumb course-card-thumb${isPodcast ? " media-thumb--podcast" : ""}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className={`object-fit-cover${isPodcast ? " media-thumb-img--podcast" : ""}`}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="media-thumb-gradient" />

        <div className={`media-play-btn${isPodcast ? " media-play-btn--podcast" : ""}`}>
          {isPodcast
            ? <FaHeadphones size={17} color="#fff" />
            : <FaPlay size={14} color="#1DBE5B" style={{ marginLeft: 2 }} />
          }
        </div>

        <div className="media-duration-chip">
          <FaClock size={10} color="#fff" />
          {item.duration}
        </div>
      </div>

      <div className="media-card-body course-card-content">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className={`badge-pill badge-pill-md ${levelClass[item.level] ?? "badge-blue"}`}>
            {item.level}
          </span>
          <span className="badge-pill badge-pill-md badge-green">
            {item.tag}
          </span>
        </div>

        <p className="media-card-title">{item.title}</p>
        <p className="media-card-desc">{item.description}</p>

        <div className="media-card-cta">
          {isPodcast ? "Listen now" : "Watch now"}
          <span className="media-card-cta-arrow">→</span>
        </div>
      </div>
    </div>
  );
}

export function LatestOfferingsSection() {
  const [active, setActive] = useState<Filter>("Bite size Videos");
  const isPodcast = active === "Podcasts";
  const items = (isPodcast ? latestPodcasts : latestOfferings) as unknown as Item[];

  return (
    <section className="bg-white section-pad">
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            Our latest offerings
          </h2>
          <div className="tab-group">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`tab-btn${active === f ? " tab-btn--active" : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="course-grid">
          {items.slice(0, 6).map((item) => (
            <CourseCard key={item.title} item={item} isPodcast={isPodcast} />
          ))}
        </div>
      </Container>
    </section>
  );
}
