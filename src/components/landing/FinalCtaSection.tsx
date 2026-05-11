"use client";

import Container from "react-bootstrap/Container";
import { FaCheckCircle } from "react-icons/fa";
import { finalCta } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section
      id="pricing"
      style={{
        background: "radial-gradient(ellipse 120% 80% at 50% 50%, rgba(29,190,91,0.15) 0%, #e8f9ef 60%, #dff5e8 100%)",
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <Container>
        <Reveal>
        <div className="text-center" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
          {/* Badge */}
          <span style={{ display: "inline-block", background: "rgba(29,190,91,0.12)", borderRadius: "999px", padding: "6px 18px", fontSize: "13px", fontWeight: 500, color: "#1DBE5B" }}>
            {finalCta.badge}
          </span>

          {/* Title */}
          <h2 className="final-cta-title" style={{ fontSize: "48px", fontWeight: 600, lineHeight: "120%", color: "#101010", margin: 0, whiteSpace: "pre-line" }}>
            {finalCta.title}
          </h2>

          {/* Subtitle */}
          <p style={{ fontSize: "16px", fontWeight: 400, color: "#878787", margin: 0 }}>
            {finalCta.subtitle}
          </p>

          {/* Benefits row */}
          <div className="final-cta-benefits" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px 40px" }}>
            {finalCta.benefits.map((b) => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 400, color: "#101010" }}>
                <FaCheckCircle size={18} color="#1DBE5B" aria-hidden />
                {b}
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#home"
            className="btn-glow btn-cta-green"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#1DBE5B", color: "#fff", fontSize: "16px", fontWeight: 500, padding: "16px 32px", borderRadius: "10px", textDecoration: "none", marginTop: "8px" }}
          >
            {finalCta.cta} →
          </a>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
