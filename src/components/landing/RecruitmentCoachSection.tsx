"use client";

import Container from "react-bootstrap/Container";
import { recruitmentCoach } from "@/content/landingPage";

export function RecruitmentCoachSection() {
  return (
    <section
      id="about"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(29,190,91,0.08) 0%, #fff 70%)",
        paddingTop: "96px",
        overflow: "hidden",
      }}
    >
      <Container>
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>

          {/* Left: text */}
          <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "28px", paddingBottom: "96px" }}>
            <div>
              <p style={{ margin: 0, fontSize: "48px", fontWeight: 500, lineHeight: "1.2", color: "#101010" }}>
                {recruitmentCoach.titleLine1}
              </p>
              <p style={{ margin: 0, fontSize: "48px", fontWeight: 500, lineHeight: "1.2", color: "#1DBE5B" }}>
                {recruitmentCoach.titleLine2}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p style={{ margin: 0, fontSize: "32px", fontWeight: 500, lineHeight: "1.2", letterSpacing: "-1.6px", color: "#101010" }}>
                {recruitmentCoach.subtitle}
              </p>
              <p style={{ margin: 0, fontSize: "18px", fontWeight: 400, lineHeight: "1.4", color: "#878787" }}>
                {recruitmentCoach.body}
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {recruitmentCoach.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ background: "rgba(29,190,91,0.1)", color: "#1DBE5B", fontSize: "14px", fontWeight: 500, lineHeight: "1.5", padding: "4px 12px", borderRadius: "12px" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stacked images */}
          <div style={{ flexShrink: 0, position: "relative", width: "604px", height: "397px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={recruitmentCoach.image}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={recruitmentCoach.imageOverlay}
              alt="Your personal recruitment coach — Elden+ BOT"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
            {/* Fade to background at bottom */}
            <div style={{ position: "absolute", inset: 0, borderRadius: "8px", background: "linear-gradient(to bottom, transparent 70%, rgba(255,255,255,0.55) 88%, rgba(255,255,255,0.85) 100%)" }} />
          </div>

        </div>
      </Container>
    </section>
  );
}
