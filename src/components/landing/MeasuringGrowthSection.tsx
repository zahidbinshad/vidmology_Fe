"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaCommentDots,
  FaQuestionCircle,
  FaPhone,
  FaChartBar,
  FaBullseye,
  FaClock,
} from "react-icons/fa";
import { aiCoachSectionMeta, aiCoachFeatures } from "@/content/landingPage";

const iconMap: Record<string, React.ElementType> = {
  chat: FaCommentDots,
  quiz: FaQuestionCircle,
  phone: FaPhone,
  chart: FaChartBar,
  target: FaBullseye,
  clock: FaClock,
};

const cardStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #d9f4cc",
  borderRadius: "20px",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  height: "100%",
  boxShadow: "4px 4px 14px rgba(0,0,0,0.06)",
};

export function MeasuringGrowthSection() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, rgba(29,190,91,0.06) 0%, #fff 100%)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Container>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "24px", marginBottom: "56px" }}>
          <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <p style={{ margin: 0, fontSize: "48px", fontWeight: 500, lineHeight: "1.2", color: "#101010" }}>
              {aiCoachSectionMeta.title}
            </p>
            <p style={{ margin: 0, fontSize: "18px", fontWeight: 400, lineHeight: "1.4", color: "#878787", whiteSpace: "pre-line" }}>
              {aiCoachSectionMeta.subtitle}
            </p>
          </div>
          <a
            href="#pricing"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#1DBE5B",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "1.5",
              padding: "14px 18px",
              borderRadius: "8px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              boxShadow: "0 0 12px rgba(0,0,0,0.06), inset 0 -2px 5px rgba(0,0,0,0.1)",
              flexShrink: 0,
            }}
          >
            {aiCoachSectionMeta.cta} →
          </a>
        </div>

        {/* Feature grid: 2 rows × 3 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[aiCoachFeatures.slice(0, 3), aiCoachFeatures.slice(3, 6)].map((row, ri) => (
            <Row key={ri} className="g-0" style={{ gap: "24px", flexWrap: "nowrap" }}>
              {row.map((feat) => {
                const Icon = iconMap[feat.icon] ?? FaCommentDots;
                return (
                  <Col key={feat.title} style={{ flex: "1 0 0", minWidth: 0 }}>
                    <div style={cardStyle}>
                      {/* Icon badge */}
                      <div style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.1)", borderRadius: "24px", alignSelf: "flex-start" }}>
                        <div style={{ width: 48, height: 48, background: "#fff", borderRadius: "16px", boxShadow: "4px 4px 28px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <Icon size={24} color="#141B34" aria-hidden />
                        </div>
                      </div>

                      {/* Text */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.4" }}>
                        <p style={{ margin: 0, fontSize: "24px", fontWeight: 500, letterSpacing: "-1.2px", color: "#101010" }}>
                          {feat.title}
                        </p>
                        <p style={{ margin: 0, fontSize: "18px", fontWeight: 400, color: "#878787" }}>
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
