"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUserTie, FaBrain, FaShieldAlt } from "react-icons/fa";
import { builtDifferentlyCards, builtDifferentlySectionMeta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const icons = [FaUserTie, FaBrain, FaShieldAlt];

export function BuildSkillQuicklySection() {
  return (
    <section className="build-skill-section section-pad-sm">
      <Container>
        <Reveal>
          <div className="text-center section-header" style={{ marginBottom: "56px", maxWidth: "760px", margin: "0 auto 56px" }}>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              {builtDifferentlySectionMeta.title}
            </h2>
            <p className="section-subtitle">{builtDifferentlySectionMeta.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Row className="g-4">
            {builtDifferentlyCards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Col md={4} key={card.title}>
                  <div className="card-lift card-base card-p-lg">
                    <div className="icon-badge build-skill-icon">
                      <Icon size={24} color="#141B34" aria-hidden />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, lineHeight: "1.3", letterSpacing: "-1.2px", color: "#101010" }}>
                        {card.title}
                      </p>
                      {card.bodyParagraphs.map((p, i) => (
                        <p key={i} className="section-subtitle" style={{ fontSize: "16px", lineHeight: "140%" }}>
                          {p}
                        </p>
                      ))}
                      {card.bullets.length > 0 && (
                        <ul className="build-skill-bullets">
                          {card.bullets.map((b) => (
                            <li key={b} className="build-skill-bullet">
                              <span style={{ flexShrink: 0, marginTop: "2px" }}>·</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
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
