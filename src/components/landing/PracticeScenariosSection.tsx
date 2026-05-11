"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegClock } from "react-icons/fa";
import { practiceScenarios, practiceScenariosSectionMeta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const difficultyStyle: Record<string, React.CSSProperties> = {
  Easy: { background: "rgba(29,190,91,0.12)", color: "#15803d" },
  Medium: { background: "rgba(251,191,36,0.15)", color: "#b45309" },
  Hard: { background: "rgba(239,68,68,0.12)", color: "#dc2626" },
};

export function PracticeScenariosSection() {
  return (
    <section className="bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <Container>
        <Reveal>
        <div className="text-center" style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "12px" }}>
            {practiceScenariosSectionMeta.title}
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "#878787", margin: 0 }}>
            {practiceScenariosSectionMeta.subtitle}
          </p>
        </div>
        </Reveal>

        <Reveal delay={80}>
        <Row className="g-4">
          {practiceScenarios.map((s) => (
            <Col md={4} key={s.title}>
              <div className="card-lift" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: "20px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "4px 4px 14px rgba(0,0,0,0.06)" }}>
                {/* Top row: category + difficulty */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", color: "#1DBE5B", textTransform: "uppercase" }}>
                    {s.category}
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: 500, padding: "3px 12px", borderRadius: "999px", flexShrink: 0, ...difficultyStyle[s.difficulty] }}>
                    {s.difficulty}
                  </span>
                </div>

                {/* Title + description */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, lineHeight: "1.3", letterSpacing: "-1.2px", color: "#101010" }}>
                    {s.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: 400, lineHeight: "1.5", color: "#878787" }}>
                    {s.description}
                  </p>
                </div>

                {/* Duration */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#9ca3af", fontSize: "14px" }}>
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
