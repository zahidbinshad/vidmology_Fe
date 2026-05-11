"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { whiteLabelSection } from "@/content/landingPage";

export function BoostCareerSection() {
  const { features } = whiteLabelSection;
  const rows = [features.slice(0, 3), features.slice(3, 6)] as const;

  return (
    <section className="bg-white section-pad">
      <Container>
        <div className="text-center" style={{ marginBottom: "20px" }}>
          <span className="badge-outline-green">{whiteLabelSection.badge}</span>
        </div>

        <div className="text-center section-header" style={{ marginBottom: "64px" }}>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>{whiteLabelSection.title}</h2>
          <p className="section-subtitle" style={{ margin: "0 auto", maxWidth: "640px" }}>
            {whiteLabelSection.subtitle}
          </p>
        </div>

        <div className="boost-rows boost-cta-row">
          {rows.map((row, ri) => (
            <Row key={ri} className="g-4">
              {row.map((feat) => (
                <Col md={4} key={feat.title}>
                  <div className="feature-item">
                    <p className="feature-title">{feat.title}</p>
                    <p className="feature-desc">{feat.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          ))}
        </div>

        <div className="text-center">
          <a href="#pricing" className="btn-cta-link btn-cta-green">
            {whiteLabelSection.cta} →
          </a>
        </div>
      </Container>
    </section>
  );
}
