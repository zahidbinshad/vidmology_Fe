"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import { FaCheck } from "react-icons/fa";
import { levelUpCta } from "@/content/landingPage";

type Filter = keyof typeof levelUpCta.goals;

export function LevelUpCareerCtaSection() {
  const [active, setActive] = useState<Filter>("Career Goals");
  const goals = levelUpCta.goals[active];
  const rows = [goals.slice(0, 3), goals.slice(3)] as const;

  return (
    <section
      style={{
        background: "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(29,190,91,0.12) 0%, #f0fdf4 60%, #f0fdf4 100%)",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <Container>
        {/* Header */}
        <div className="text-center section-header" style={{ marginBottom: "32px" }}>
          <h2 style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "12px" }}>
            {levelUpCta.title}
          </h2>
          <p className="levelup-subtitle" style={{ fontSize: "16px", fontWeight: 400, lineHeight: "140%", color: "#878787", whiteSpace: "pre-line", margin: 0 }}>
            {levelUpCta.subtitle}
          </p>
        </div>

        {/* Filter pills */}
        <div className="pill-row filter-pill-row" style={{ marginBottom: "40px" }}>
          {levelUpCta.filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f as Filter)}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                border: active === f ? "none" : "1.5px solid #d1d5db",
                background: active === f ? "#1DBE5B" : "#fff",
                color: active === f ? "#fff" : "#101010",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.18s ease",
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Goals grid */}
        <div className="goals-grid" style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px", margin: "0 auto" }}>
          {/* Row 1: 3 items */}
          <div className="pill-row">
            {rows[0].map((goal) => (
              <GoalItem key={goal} label={goal} />
            ))}
          </div>
          {/* Row 2: remaining items centered */}
          {rows[1].length > 0 && (
            <div className="pill-row">
              {rows[1].map((goal) => (
                <GoalItem key={goal} label={goal} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function GoalItem({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        background: "#fff",
        border: "1px solid rgba(29,190,91,0.2)",
        borderRadius: "12px",
        padding: "12px 20px",
        fontSize: "15px",
        fontWeight: 500,
        color: "#101010",
      }}
    >
      <div style={{ width: 36, height: 36, background: "rgba(29,190,91,0.1)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <FaCheck size={16} color="#1DBE5B" aria-hidden />
      </div>
      {label}
    </div>
  );
}
