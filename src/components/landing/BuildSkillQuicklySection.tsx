"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRobot } from "react-icons/fa";
import { builtDifferentlyCards, builtDifferentlySectionMeta } from "@/content/landingPage";

export function BuildSkillQuicklySection() {
  return (
    <section
      style={{
        background: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(29,190,91,0.10) 0%, #f0fdf4 60%, #f0fdf4 100%)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Container>
        <div className="text-center" style={{ marginBottom: "56px", maxWidth: "760px", margin: "0 auto 56px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 500, lineHeight: "120%", color: "#101010", marginBottom: "12px" }}>
            {builtDifferentlySectionMeta.title}
          </h2>
          <p style={{ fontSize: "18px", fontWeight: 400, lineHeight: "140%", color: "#878787", margin: 0 }}>
            {builtDifferentlySectionMeta.subtitle}
          </p>
        </div>

        <Row className="g-4">
          {builtDifferentlyCards.map((card) => (
            <Col md={4} key={card.title}>
              <div style={{ background: "#fff", border: "1px solid #d9f4cc", borderRadius: "20px", padding: "32px", height: "100%", display: "flex", flexDirection: "column", gap: "24px", boxShadow: "4px 4px 14px rgba(0,0,0,0.06)" }}>
                {/* Icon */}
                <div style={{ width: 56, height: 56, background: "rgba(29,190,91,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <FaRobot size={24} color="#141B34" aria-hidden />
                </div>

                {/* Text */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ margin: 0, fontSize: "24px", fontWeight: 500, lineHeight: "1.3", letterSpacing: "-1.2px", color: "#101010" }}>
                    {card.title}
                  </p>
                  {card.bodyParagraphs.map((p, i) => (
                    <p key={i} style={{ margin: 0, fontSize: "18px", fontWeight: 400, lineHeight: "140%", color: "#878787" }}>
                      {p}
                    </p>
                  ))}
                  {card.bullets.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {card.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "16px", fontWeight: 400, lineHeight: "150%", color: "#878787" }}>
                          <span style={{ flexShrink: 0, marginTop: "2px" }}>·</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
