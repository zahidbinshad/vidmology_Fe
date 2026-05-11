"use client";

import { useState } from "react";
import Container from "react-bootstrap/Container";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { faqItems } from "@/content/landingPage";

export function FaqSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <Container>
        <h2 className="text-center" style={{ fontSize: "40px", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: "120%", color: "#101010", marginBottom: "48px" }}>
          Frequently Asked Questions
        </h2>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.question}
                style={{ border: "1px solid #e5e7eb", borderRadius: "16px", overflow: "hidden", background: "#fff" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="faq-btn"
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "24px 28px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontSize: "16px", fontWeight: 500, lineHeight: "1.4", color: isOpen ? "#1DBE5B" : "#101010" }}>
                    {item.question}
                  </span>
                  {isOpen
                    ? <FaMinusCircle size={22} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
                    : <FaPlusCircle size={22} color="#9ca3af" style={{ flexShrink: 0 }} aria-hidden />
                  }
                </button>
                {isOpen && (
                  <div className="faq-answer" style={{ padding: "0 28px 24px", fontSize: "16px", fontWeight: 400, lineHeight: "1.6", color: "#878787" }}>
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
