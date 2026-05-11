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
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ElementType> = {
  chat: FaCommentDots,
  quiz: FaQuestionCircle,
  phone: FaPhone,
  chart: FaChartBar,
  target: FaBullseye,
  clock: FaClock,
};

export function MeasuringGrowthSection() {
  return (
    <section className="measuring-section section-pad-lg">
      <Container>
        <Reveal>
          <div className="ai-coach-header" style={{ display: "flex", alignItems: "flex-end", gap: "24px", marginBottom: "56px" }}>
            <div className="ai-coach-header-text">
              <p className="section-heading section-title">{aiCoachSectionMeta.title}</p>
              <p className="section-subtitle" style={{ lineHeight: "1.4", whiteSpace: "pre-line" }}>
                {aiCoachSectionMeta.subtitle}
              </p>
            </div>
            <a
              href="#pricing"
              className="btn-cta-link btn-cta-green"
              style={{ padding: "14px 18px", whiteSpace: "nowrap", flexShrink: 0 }}
            >
              {aiCoachSectionMeta.cta} →
            </a>
          </div>
        </Reveal>

        <div className="ai-coach-feature-rows">
          {[aiCoachFeatures.slice(0, 3), aiCoachFeatures.slice(3, 6)].map((row, ri) => (
            <Reveal key={ri} delay={ri * 120}>
              <Row className="g-4">
                {row.map((feat) => {
                  const Icon = iconMap[feat.icon] ?? FaCommentDots;
                  return (
                    <Col key={feat.title} xs={12} md={4}>
                      <div className="card-lift card-base card-p-sm">
                        <div className="icon-badge" style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.1)", borderRadius: "24px", alignSelf: "flex-start" }}>
                          <div className="icon-badge-inner">
                            <Icon size={24} color="#141B34" aria-hidden />
                          </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.4" }}>
                          <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, letterSpacing: "-1.2px", color: "#101010" }}>
                            {feat.title}
                          </p>
                          <p className="section-subtitle" style={{ fontSize: "16px" }}>{feat.description}</p>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
