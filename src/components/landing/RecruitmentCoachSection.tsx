"use client";

import Container from "react-bootstrap/Container";
import { recruitmentCoach } from "@/content/landingPage";

export function RecruitmentCoachSection() {
  return (
    <section id="about" className="coach-section">
      <Container>
        <div className="coach-layout">

          <div className="coach-text">
            <div>
              <p className="section-heading section-title">{recruitmentCoach.titleLine1}</p>
              <p className="section-heading section-title" style={{ color: "#1DBE5B" }}>{recruitmentCoach.titleLine2}</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <p className="recruit-subtitle" style={{ margin: 0, fontSize: "32px", fontWeight: 500, lineHeight: "1.2", letterSpacing: "-1.6px", color: "#101010" }}>
                {recruitmentCoach.subtitle}
              </p>
              <p className="section-subtitle" style={{ fontSize: "16px", lineHeight: "1.4" }}>
                {recruitmentCoach.body}
              </p>
              <div className="coach-tags-row">
                {recruitmentCoach.tags.map((tag) => (
                  <span key={tag} className="coach-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="coach-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={recruitmentCoach.image} alt="" className="coach-img" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={recruitmentCoach.imageOverlay} alt="Your personal recruitment coach — Elden+ BOT" className="coach-img" />
            <div className="coach-img-fade" />
          </div>

        </div>
      </Container>
    </section>
  );
}
