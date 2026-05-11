"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaUserAlt, FaPhone } from "react-icons/fa";
import Image from "next/image";
import { howItWorks, howItWorksSectionMeta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: Record<string, React.ReactNode> = {
  comment: <Image src="/comment-02.svg" alt="" width={24} height={24} aria-hidden />,
  user: <FaUserAlt size={24} color="#141B34" aria-hidden />,
  phone: <FaPhone size={24} color="#141B34" aria-hidden />,
};

export function HowItWorksSection() {
  return (
    <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <Reveal>
        <div className="text-center section-header" style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "12px" }}>
            How it works
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "#878787", margin: 0 }}>
            {howItWorksSectionMeta.subtitle}
          </p>
        </div>
        </Reveal>

        <Reveal delay={80}>
        <Row className="g-4">
          {howItWorks.map((step) => (
            <Col md={4} key={step.title}>
              <div className="card-lift" style={{ background: "#fff", border: "1px solid #f0f0f0", borderRadius: "20px", padding: "24px", height: "100%", display: "flex", flexDirection: "column", gap: "32px", boxShadow: "4px 4px 14px rgba(0,0,0,0.06)" }}>
                {/* Icon badge — same style as MeasuringGrowthSection */}
                <div className="icon-badge" style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.1)", borderRadius: "24px", alignSelf: "flex-start" }}>
                  <div style={{ width: 48, height: 48, background: "#fff", borderRadius: "16px", boxShadow: "4px 4px 28px rgba(0,0,0,0.06)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {iconMap[step.icon]}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.4" }}>
                  <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, letterSpacing: "-1.2px", color: "#101010" }}>
                    {step.title}
                  </p>
                  <p style={{ margin: 0, fontSize: "16px", fontWeight: 400, color: "#878787" }}>
                    {step.body}
                  </p>
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
