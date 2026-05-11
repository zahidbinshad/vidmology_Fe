"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaVideo, FaHeadphones, FaCheck } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { dataLearningCards, dataLearningSectionMeta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const iconMap = {
  video: FaVideo,
  headphones: FaHeadphones,
  sparkle: BsStars,
};

export function DataIntoLearningSection() {
  return (
    <section
      id="features"
      className="bg-white"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <Container>
        <Reveal>
        <div className="text-center col-lg-8 mx-auto" style={{ marginBottom: "56px" }}>
          <h2 className="mb-3" style={{ color: "#101010", fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%" }}>
            {dataLearningSectionMeta.title}
          </h2>
          <p className="mb-0" style={{ color: "#878787", fontSize: "16px", fontWeight: 400, lineHeight: "140%" }}>
            {dataLearningSectionMeta.subtitle}
          </p>
        </div>
        </Reveal>

        <Reveal delay={80}>
        <Row className="g-4">
          {dataLearningCards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap] ?? FaVideo;
            return (
              <Col md={4} key={card.title}>
                <div
                  className="card-lift h-100"
                  style={{
                    background: "#fff",
                    border: "1px solid #f0f0f0",
                    borderRadius: "20px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "32px",
                    boxShadow: "4px 4px 14px rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Badge */}
                  <div className="icon-badge" style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.10)", borderRadius: "24px", alignSelf: "flex-start" }}>
                    <div style={{
                      width: 48, height: 48,
                      background: "#fff",
                      borderRadius: "16px",
                      boxShadow: "4px 4px 28px 0px rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <Icon size={24} color="#141B34" aria-hidden />
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, lineHeight: "1.2", letterSpacing: "-1.2px", color: "#101010" }}>
                        {card.title}
                      </p>
                      <p style={{ margin: 0, fontSize: "16px", fontWeight: 400, lineHeight: "1.4", color: "#878787" }}>
                        {card.description}
                      </p>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {card.bullets.map((b) => (
                        <div key={b} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                          <div style={{ paddingTop: "2px", flexShrink: 0 }}>
                            <FaCheck size={16} color="#22c55e" />
                          </div>
                          <span style={{ fontSize: "16px", fontWeight: 500, lineHeight: "1.5", color: "#383838" }}>
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        </Reveal>
      </Container>
    </section>
  );
}
