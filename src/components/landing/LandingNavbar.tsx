"use client";
/**
 * Fluid full-width header: 3-column grid on lg — brand | centered menus | CTAs.
 * (Equal thirds so “middle” is the geometric center of the bar.)
 */
import { useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { mainNavLinks } from "@/content/landingPage";
import { LearnNavDropdown } from "@/components/landing/LearnNavDropdown";

/** Single brand lockup — image only (no duplicate wordmark text beside it) */
function BrandLogo() {
  return (
    <Image
      src="/logo-vidmology.png"
      alt="Vidmology — Mentoring platform for recruiters"
      width={228}
      height={64}
      className="navbar-brand-logo-img flex-shrink-0"
      priority
    />
  );
}

function MainNav({
  className,
  onItemClick,
}: {
  className?: string;
  onItemClick: () => void;
}) {
  return (
      <Nav navbar className={className}>
      <LearnNavDropdown onNavigate={onItemClick} />
      {mainNavLinks.map((link) => (
        <Nav.Link
          key={link.label}
          href={link.href}
          className="nav-navbar-item"
          onClick={onItemClick}
        >
          {link.label}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export function LandingNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="site-header site-header--hero sticky-top">
      <Navbar
        expand="lg"
        variant="light"
        className="navbar-vidmology py-1 py-lg-2"
        expanded={expanded}
        onToggle={setExpanded}
        collapseOnSelect
      >
        <Container fluid className="navbar-fluid px-3 px-sm-4 px-lg-5">
          <Row className="align-items-center w-100 g-0 gx-lg-2 gx-xl-3">
            <Col xs={6} md={6} lg={4} className="d-flex align-items-center">
              <Navbar.Brand
                as={Link}
                href="#home"
                className="d-flex align-items-center text-decoration-none py-1 me-0 min-w-0 max-w-100 overflow-visible"
                onClick={() => setExpanded(false)}
              >
                <BrandLogo />
              </Navbar.Brand>
            </Col>

            <Col
              lg={4}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <MainNav
                onItemClick={() => setExpanded(false)}
                className="nav-cluster justify-content-center align-items-center gap-lg-1 gap-xl-2 flex-row flex-nowrap"
              />
            </Col>

            <Col
              xs={6}
              md={6}
              lg={4}
              className="d-flex justify-content-end align-items-center gap-2 gap-sm-3"
            >
              <div className="d-none d-lg-flex align-items-center gap-3 flex-nowrap">
                <Button
                  className="btn-nav-cta rounded-3 py-2 text-nowrap"
                  style={{ paddingLeft: "16px", paddingRight: "16px" }}
                  href="#pricing"
                  onClick={() => setExpanded(false)}
                >
                  Start Free Trial
                </Button>
                <Link
                  href="#pricing"
                  className="nav-signin-link text-decoration-none text-nowrap"
                  onClick={() => setExpanded(false)}
                >
                  Sign In
                </Link>
              </div>
              <Navbar.Toggle
                aria-controls="landing-navbar-nav"
                className="border-secondary-subtle d-lg-none"
              />
            </Col>
          </Row>

          {/* Mobile / tablet: stacked menu — hidden on lg+ (desktop uses middle column above) */}
          <Navbar.Collapse
            id="landing-navbar-nav"
            className="navbar-vidmology-collapse-mobile d-lg-none w-100"
          >
            <div className="d-flex flex-column align-items-center gap-3 pt-3 pb-2">
              <MainNav
                onItemClick={() => setExpanded(false)}
                className="nav-cluster flex-column align-items-center text-center gap-1 w-100"
              />
              <div className="d-flex align-items-center justify-content-center gap-3 pb-2 w-100">
                <Button
                  className="btn-nav-cta rounded-3 px-4 py-2"
                  href="#pricing"
                  onClick={() => setExpanded(false)}
                >
                  Start Free Trial
                </Button>
                <Link
                  href="#pricing"
                  className="nav-signin-link text-decoration-none"
                  onClick={() => setExpanded(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
