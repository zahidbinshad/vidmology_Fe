"use client";

import Container from "react-bootstrap/Container";
import { builtToStayAhead } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialSection() {
  return (
    <section
      style={{
        background: "#f0fdf4",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <Container>
        <Reveal>
        <div
          className="testimonial-card"
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "16px",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "16px" }}>
            {builtToStayAhead.title}
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "#878787", maxWidth: "680px", margin: "0 auto 32px" }}>
            {builtToStayAhead.subtitle}
          </p>
          <p style={{ margin: "0", fontSize: "16px", fontWeight: 400, lineHeight: "160%", color: "#878787" }}>
            {builtToStayAhead.tagline}
          </p>
          <p style={{ margin: "0", fontSize: "16px", fontWeight: 700, lineHeight: "160%", color: "#101010" }}>
            {builtToStayAhead.taglineBold}
          </p>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}
