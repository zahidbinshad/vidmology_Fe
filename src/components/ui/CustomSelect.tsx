"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
  label: string;
}

export function CustomSelect({ value, options, onChange, label }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="custom-select-group" ref={ref}>
      <label className="filter-label">{label}</label>
      <div className="custom-select-wrap">
        <button
          type="button"
          className={`custom-select-trigger${open ? " custom-select-trigger--open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span className="custom-select-value">{value}</span>
          <svg
            className={`custom-select-chevron${open ? " custom-select-chevron--open" : ""}`}
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path d="M1 1l5 5 5-5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <ul className="custom-select-list" role="listbox">
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                className={`custom-select-option${opt === value ? " custom-select-option--active" : ""}`}
                onClick={() => { onChange(opt); setOpen(false); }}
              >
                {opt}
                {opt === value && (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2 7l3.5 3.5L12 3" stroke="#1DBE5B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
