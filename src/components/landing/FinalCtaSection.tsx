"use client";

import Container from "react-bootstrap/Container";
import { FaCheckCircle } from "react-icons/fa";
import { finalCta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section id="pricing" className="section-final-cta">
      <Container>
        <Reveal>
          <div className="text-center final-cta-inner">
            <span className="badge-soft-green">{finalCta.badge}</span>

            <h2 className="final-cta-title section-title" style={{ fontSize: "48px", fontWeight: 600, whiteSpace: "pre-line" }}>
              {finalCta.title}
            </h2>

            <p className="section-subtitle">{finalCta.subtitle}</p>

            <div className="final-cta-benefits" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 40px" }}>
              {finalCta.benefits.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 400, color: "#101010" }}>
                  <FaCheckCircle size={18} color="#1DBE5B" aria-hidden />
                  {b}
                </div>
              ))}
            </div>

            <a
              href="#home"
              className="btn-glow btn-cta-link btn-cta-green"
              style={{ padding: "16px 32px", borderRadius: "10px", marginTop: "8px" }}
            >
              {finalCta.cta} →
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
