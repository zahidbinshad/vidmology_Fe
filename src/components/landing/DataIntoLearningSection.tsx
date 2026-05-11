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
    <section id="features" className="bg-white section-pad">
      <Container>
        <Reveal>
          <div className="text-center col-lg-8 mx-auto section-header" style={{ marginBottom: "56px" }}>
            <h2 className="section-title mb-3">{dataLearningSectionMeta.title}</h2>
            <p className="section-subtitle mb-0">{dataLearningSectionMeta.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Row className="g-4">
            {dataLearningCards.map((card) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap] ?? FaVideo;
              return (
                <Col md={4} key={card.title}>
                  <div className="card-lift card-base card-p-sm">
                    <div className="icon-badge" style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.10)", borderRadius: "24px", alignSelf: "flex-start" }}>
                      <div className="icon-badge-inner">
                        <Icon size={24} color="#141B34" aria-hidden />
                      </div>
                    </div>

                    <div className="data-card-content" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, lineHeight: "1.2", letterSpacing: "-1.2px", color: "#101010" }}>
                          {card.title}
                        </p>
                        <p className="section-subtitle" style={{ fontSize: "16px", lineHeight: "1.4" }}>
                          {card.description}
                        </p>
                      </div>

                      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {card.bullets.map((b) => (
                          <div key={b} className="data-check-row">
                            <div className="data-check-icon">
                              <FaCheck size={16} color="#22c55e" />
                            </div>
                            <span className="data-check-label">{b}</span>
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
