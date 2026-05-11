"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegClock } from "react-icons/fa";
import { practiceScenarios, practiceScenariosSectionMeta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const difficultyClass: Record<string, string> = {
  Easy:   "badge-easy",
  Medium: "badge-medium",
  Hard:   "badge-hard",
};

export function PracticeScenariosSection() {
  return (
    <section className="bg-white section-pad">
      <Container>
        <Reveal>
          <div className="text-center section-header" style={{ marginBottom: "56px" }}>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>
              {practiceScenariosSectionMeta.title}
            </h2>
            <p className="section-subtitle">{practiceScenariosSectionMeta.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Row className="g-4">
            {practiceScenarios.map((s) => (
              <Col md={4} key={s.title}>
                <div className="card-lift card-base card-p-scn">
                  <div className="scenario-card-top">
                    <span className="scenario-category">{s.category}</span>
                    <span className={`scenario-difficulty ${difficultyClass[s.difficulty] ?? "badge-easy"}`}>
                      {s.difficulty}
                    </span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                    <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, lineHeight: "1.3", letterSpacing: "-1.2px", color: "#101010" }}>
                      {s.title}
                    </p>
                    <p className="section-subtitle" style={{ fontSize: "15px", lineHeight: "1.5" }}>{s.description}</p>
                  </div>

                  <div className="scenario-duration">
                    <FaRegClock size={14} aria-hidden />
                    {s.duration}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Reveal>
      </Container>
    </section>
  );
}
