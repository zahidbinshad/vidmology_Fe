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
    <section className="levelup-section section-pad">
      <Container>
        <div className="text-center section-header" style={{ marginBottom: "32px" }}>
          <h2 className="section-title" style={{ marginBottom: "12px" }}>{levelUpCta.title}</h2>
          <p className="levelup-subtitle section-subtitle" style={{ whiteSpace: "pre-line" }}>
            {levelUpCta.subtitle}
          </p>
        </div>

        <div className="pill-row filter-pill-row" style={{ marginBottom: "40px" }}>
          {levelUpCta.filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f as Filter)}
              className={`filter-pill-btn${active === f ? " filter-pill-btn--active" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="goals-grid goals-grid-inner">
          <div className="pill-row">
            {rows[0].map((goal) => (
              <GoalItem key={goal} label={goal} />
            ))}
          </div>
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
    <div className="goal-item">
      <div className="goal-item-icon">
        <FaCheck size={16} color="#1DBE5B" aria-hidden />
      </div>
      {label}
    </div>
  );
}
