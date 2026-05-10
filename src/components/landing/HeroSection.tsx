"use client";

import Image from "next/image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { hero } from "@/content/landingPage";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Container className="text-center">
        <Badge
          pill
          className="hero-badge px-3 py-2 mb-4 text-decoration-none hero-animate hero-animate-1"
        >
          {hero.badge}
        </Badge>

        <h1
          className="mb-4 mx-auto col-lg-10 px-2 hero-animate hero-animate-2"
          style={{ color: "var(--hero-heading)", fontSize: "56px", fontWeight: 600 }}
        >
          {hero.titleBefore}
          <br />
          <span className="text-hero-accent">{hero.titleHighlight}</span>
          {hero.titleAfter}
        </h1>

        <div className="hero-subtext mb-4 mx-auto col-lg-8 hero-animate hero-animate-3">
          {hero.sublines.map((line) => (
            <p key={line} className="mb-0">
              {line}
            </p>
          ))}
        </div>

        <Button
          className="btn-hero-cta px-4 py-2 rounded-3 shadow-sm hero-animate hero-animate-4"
          href="#pricing"
        >
          {hero.cta}
        </Button>

        <div className="hero-showcase-panel rounded-4 mt-5 mx-auto shadow-sm col-xl-11 hero-animate-5">
          <div className="rounded-3 overflow-hidden bg-white bg-opacity-50">
            <Image
              src="/hero_image.png"
              alt="Vidmology product: video lessons, AI coach chat, quizzes, and role-play scores"
              width={5120}
              height={1616}
              className="w-100 h-auto d-block"
              sizes="(max-width: 1200px) 100vw, 1100px"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
