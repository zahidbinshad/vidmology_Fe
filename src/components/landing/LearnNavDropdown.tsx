"use client";
/**
 * Learn mega-menu: hover opens (desktop), padded white shell, mint cell hover.
 */
import {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { learnDropdownPanels } from "@/content/landingPage";

type LearnNavDropdownProps = {
  onNavigate: () => void;
};

const CLOSE_DELAY_MS = 200;

export function LearnNavDropdown({ onNavigate }: LearnNavDropdownProps) {
  const [show, setShow] = useState(false);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current != null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setShow(false);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [cancelClose]);

  const open = useCallback(() => {
    cancelClose();
    setShow(true);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  return (
    <NavDropdown
      title="Learn"
      id="nav-dropdown-learn"
      className="nav-learn-dropdown learn-dropdown-animated"
      show={show}
      onToggle={(next) => setShow(next)}
      autoClose="outside"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
    >
      <div
        className="learn-dropdown-menu-wrap"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
      >
        <Row className="g-0 learn-dropdown-inner-row">
          {learnDropdownPanels.map((panel) => (
            <Col xs={12} md={6} key={panel.title}>
              <Link
                href={panel.href}
                className="learn-dropdown-link d-block h-100 text-decoration-none learn-dropdown-panel"
                onClick={() => {
                  setShow(false);
                  onNavigate();
                }}
              >
                <h3 className="learn-dropdown-title mb-2">{panel.title}</h3>
                <p className="learn-dropdown-desc mb-0">
                  {panel.descriptionLines.map((line, i) => (
                    <Fragment key={`${panel.title}-${i}`}>
                      {i > 0 ? <br /> : null}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </NavDropdown>
  );
}
