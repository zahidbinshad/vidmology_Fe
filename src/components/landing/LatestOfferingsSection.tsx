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

const levelStyle: Record<string, React.CSSProperties> = {
  Beginner:     { background: "rgba(59,130,246,0.1)",  color: "#2563eb" },
  Intermediate: { background: "rgba(139,92,246,0.1)",  color: "#7c3aed" },
  Advance:      { background: "rgba(251,146,60,0.1)",  color: "#ea580c" },
};

function CourseCard({ item, isPodcast }: { item: Item; isPodcast: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #eeeeee",
        borderRadius: "12px",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered ? "0 20px 44px rgba(0,0,0,0.11)" : "0 2px 14px rgba(0,0,0,0.06)",
        transition: "transform 0.22s ease, box-shadow 0.22s ease",
      }}
    >
      {/* Thumbnail */}
      <div style={{ height: "196px", position: "relative", flexShrink: 0, background: isPodcast ? "#1a1a2e" : "#e5e7eb" }}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-fit-cover"
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ opacity: isPodcast ? 0.65 : 1 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 55%)" }} />

        {/* Play / headphone button */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: `translate(-50%,-50%) scale(${hovered ? 1.08 : 1})`,
          transition: "transform 0.22s ease",
          width: 46, height: 46,
          background: isPodcast ? "#1DBE5B" : "rgba(255,255,255,0.96)",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: isPodcast ? "0 4px 18px rgba(29,190,91,0.4)" : "0 4px 18px rgba(0,0,0,0.2)",
        }}>
          {isPodcast
            ? <FaHeadphones size={17} color="#fff" />
            : <FaPlay size={14} color="#1DBE5B" style={{ marginLeft: 2 }} />
          }
        </div>

        {/* Duration */}
        <div style={{ position: "absolute", bottom: 12, left: 14, display: "flex", alignItems: "center", gap: 5, background: "rgba(0,0,0,0.52)", backdropFilter: "blur(6px)", borderRadius: "999px", padding: "4px 11px" }}>
          <FaClock size={10} color="#fff" />
          <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{item.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 22px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        {/* Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 12, fontWeight: 600, padding: "4px 11px", borderRadius: "999px", ...(levelStyle[item.level] ?? levelStyle.Beginner) }}>
            {item.level}
          </span>
          <span style={{ fontSize: 12, fontWeight: 500, padding: "4px 11px", borderRadius: "999px", background: "rgba(29,190,91,0.1)", color: "#1DBE5B" }}>
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <p style={{ margin: 0, fontSize: 17, fontWeight: 600, lineHeight: "1.45", color: "#101010", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {item.title}
        </p>

        {/* Description */}
        <p style={{ margin: 0, fontSize: 14, fontWeight: 400, lineHeight: "1.55", color: "#9ca3af", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", flex: 1 }}>
          {item.description}
        </p>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14, fontWeight: 600, color: "#1DBE5B", paddingTop: 4 }}>
          {isPodcast ? "Listen now" : "Watch now"}
          <span style={{ display: "inline-block", transform: hovered ? "translateX(4px)" : "translateX(0)", transition: "transform 0.2s ease" }}>→</span>
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
    <section className="bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <h2 style={{ color: "#101010", fontSize: "48px", fontWeight: 500, lineHeight: "120%", margin: 0, textAlign: "center" }}>
            Our latest offerings
          </h2>
          <div style={{ display: "flex", gap: "4px", background: "#f5f5f5", padding: "4px", borderRadius: "999px" }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "8px 20px", borderRadius: "999px", border: "none", cursor: "pointer",
                  fontSize: "14px", fontWeight: 500,
                  background: active === f ? "#fff" : "transparent",
                  color: active === f ? "#101010" : "#878787",
                  boxShadow: active === f ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.18s ease",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "28px" }}>
          {items.slice(0, 6).map((item) => (
            <CourseCard key={item.title} item={item} isPodcast={isPodcast} />
          ))}
        </div>
      </Container>
    </section>
  );
}
