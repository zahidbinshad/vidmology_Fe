"use client";

import Container from "react-bootstrap/Container";
import { builtToStayAhead } from "@/content/landingPage";
import { Reveal } from "@/components/ui/Reveal";

export function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <Container>
        <Reveal>
          <div className="testimonial-card testimonial-card-wrap">
            <h2 className="testimonial-title">{builtToStayAhead.title}</h2>
            <p className="testimonial-subtitle section-subtitle" style={{ maxWidth: "680px", margin: "0 auto 32px" }}>
              {builtToStayAhead.subtitle}
            </p>
            <p className="testimonial-tagline">{builtToStayAhead.tagline}</p>
            <p className="testimonial-tagline-bold">{builtToStayAhead.taglineBold}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
