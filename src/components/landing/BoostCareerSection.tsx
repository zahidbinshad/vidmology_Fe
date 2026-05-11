"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { whiteLabelSection } from "@/content/landingPage";

export function BoostCareerSection() {
  const { features } = whiteLabelSection;
  const rows = [features.slice(0, 3), features.slice(3, 6)] as const;

  return (
    <section className="bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <Container>
        {/* Badge */}
        <div className="text-center" style={{ marginBottom: "20px" }}>
          <span style={{ display: "inline-block", border: "1.5px solid rgba(29,190,91,0.4)", borderRadius: "999px", padding: "5px 18px", fontSize: "14px", fontWeight: 500, color: "#1DBE5B" }}>
            {whiteLabelSection.badge}
          </span>
        </div>

        {/* Header */}
        <div className="text-center" style={{ marginBottom: "64px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "16px" }}>
            {whiteLabelSection.title}
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "1.6", color: "#878787", margin: "0 auto", maxWidth: "640px" }}>
            {whiteLabelSection.subtitle}
          </p>
        </div>

        {/* Feature grid: 2 rows x 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "64px" }}>
          {rows.map((row, ri) => (
            <Row key={ri} className="g-4">
              {row.map((feat) => (
                <Col md={4} key={feat.title}>
                  <div style={{ borderLeft: "3px solid #1DBE5B", paddingLeft: "20px" }}>
                    <p style={{ margin: "0 0 8px", fontSize: "20px", fontWeight: 600, lineHeight: "1.3", color: "#101010" }}>
                      {feat.title}
                    </p>
                    <p style={{ margin: 0, fontSize: "15px", fontWeight: 400, lineHeight: "1.6", color: "#878787" }}>
                      {feat.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#pricing"
            className="btn-cta-green"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1DBE5B", color: "#fff", fontSize: "16px", fontWeight: 500, padding: "14px 28px", borderRadius: "8px", textDecoration: "none" }}
          >
            {whiteLabelSection.cta} →
          </a>
        </div>
      </Container>
    </section>
  );
}
