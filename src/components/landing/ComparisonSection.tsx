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
    <section className="bg-white section-pad">
      <Container>
        <Reveal>
          <div className="text-center section-header" style={{ marginBottom: "56px" }}>
            <h2 className="section-title" style={{ marginBottom: "16px" }}>
              {manageWithClarity.title}
            </h2>
            <p className="section-subtitle" style={{ margin: "0 auto 12px", maxWidth: "820px" }}>
              {manageWithClarity.subtitle}
            </p>
            <p style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#101010" }}>
              {manageWithClarity.taglineBold}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Row className="g-4">
            <Col md={6}>
              <div className="card-lift card-base card-p-cmp">
                <div className="tag-green-pill">
                  {tagIconMap[left.icon]}
                  <span>{left.tag}</span>
                </div>
                <ul className="comparison-list">
                  {left.items.map((item) => (
                    <li key={item} className="comparison-list-item">
                      <FaPlusCircle size={20} color="#1DBE5B" style={{ flexShrink: 0 }} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <div className="card-lift card-base card-p-cmp">
                <div className="tag-green-pill">
                  {tagIconMap[right.icon]}
                  <span>{right.tag}</span>
                </div>
                <ul className="comparison-list">
                  {right.items.map((item) => (
                    <li key={item} className="comparison-list-item">
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
