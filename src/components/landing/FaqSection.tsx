"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { faqItems } from "@/content/landingPage";

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-white section-pad-sm">
      <Container>
        <h2 className="text-center section-title" style={{ marginBottom: "48px" }}>
          Frequently Asked Questions
        </h2>

        <div className="faq-list">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="faq-item">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="faq-btn"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span className={`faq-question${isOpen ? " faq-question--open" : ""}`}>
                    {item.question}
                  </span>
                  {isOpen
                    ? <FaMinusCircle size={22} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
                    : <FaPlusCircle size={22} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
                  }
                </button>
                {isOpen && (
                  <div className="faq-answer section-subtitle" style={{ lineHeight: "1.6" }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
