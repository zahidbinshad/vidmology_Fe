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
    <section className="bg-white section-pad-sm">
      <Container>
        <Reveal>
          <div className="text-center section-header" style={{ marginBottom: "56px" }}>
            <h2 className="section-title" style={{ marginBottom: "12px" }}>How it works</h2>
            <p className="section-subtitle">{howItWorksSectionMeta.subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Row className="g-4">
            {howItWorks.map((step) => (
              <Col md={4} key={step.title}>
                <div className="card-lift card-base card-p-sm">
                  <div className="icon-badge" style={{ display: "inline-flex", padding: "8px", background: "rgba(29,190,91,0.1)", borderRadius: "24px", alignSelf: "flex-start" }}>
                    <div className="icon-badge-inner">
                      {iconMap[step.icon]}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", lineHeight: "1.4" }}>
                    <p className="card-title-sm" style={{ margin: 0, fontSize: "20px", fontWeight: 500, letterSpacing: "-1.2px", color: "#101010" }}>
                      {step.title}
                    </p>
                    <p className="section-subtitle" style={{ fontSize: "16px" }}>{step.body}</p>
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
