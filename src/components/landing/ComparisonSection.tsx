"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlusCircle, FaCheckCircle, FaEye, FaBriefcase } from "react-icons/fa";
import { manageWithClarity } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const tagIconMap: Record<string, React.ReactNode> = {
  eye: <FaEye size={14} color="#1DBE5B" aria-hidden />,
  briefcase: <FaBriefcase size={14} color="#1DBE5B" aria-hidden />,
};

export function ComparisonSection() {
  const { left, right } = manageWithClarity;

  return (
    <section className="bg-white" style={{ paddingTop: "96px", paddingBottom: "96px" }}>
      <Container>
        {/* Header */}
        <Reveal>
        <div className="text-center section-header" style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "16px" }}>
            {manageWithClarity.title}
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "#878787", margin: "0 auto 12px", maxWidth: "820px" }}>
            {manageWithClarity.subtitle}
          </p>
          <p style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#101010" }}>
            {manageWithClarity.taglineBold}
          </p>
        </div>
        </Reveal>

        {/* Two cards */}
        <Reveal delay={80}>
        <Row className="g-4">
          {/* Left */}
          <Col md={6}>
            <div className="card-lift" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: "20px", padding: "32px", height: "100%", display: "flex", flexDirection: "column", gap: "28px", boxShadow: "4px 4px 14px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(29,190,91,0.1)", borderRadius: "999px", padding: "6px 14px", alignSelf: "flex-start" }}>
                {tagIconMap[left.icon]}
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#1DBE5B" }}>{left.tag}</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {left.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: 400, color: "#101010", lineHeight: "1.5" }}>
                    <FaPlusCircle size={20} color="#1DBE5B" style={{ flexShrink: 0 }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* Right */}
          <Col md={6}>
            <div className="card-lift" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: "20px", padding: "32px", height: "100%", display: "flex", flexDirection: "column", gap: "28px", boxShadow: "4px 4px 14px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(29,190,91,0.1)", borderRadius: "999px", padding: "6px 14px", alignSelf: "flex-start" }}>
                {tagIconMap[right.icon]}
                <span style={{ fontSize: "13px", fontWeight: 500, color: "#1DBE5B" }}>{right.tag}</span>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
                {right.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "16px", fontWeight: 400, color: "#101010", lineHeight: "1.5" }}>
                    <FaCheckCircle size={20} color="#1DBE5B" style={{ flexShrink: 0 }} aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
        </Reveal>
      </Container>
    </section>
  );
}
