"use client";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { mainNavLinks, learnDropdownPanels } from "@/content/landingPage";
import { LearnNavDropdown } from "@/components/landing/LearnNavDropdown";

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

function MainNav({ className, onItemClick }: { className?: string; onItemClick: () => void }) {
  return (
    <Nav navbar className={className}>
      <LearnNavDropdown onNavigate={onItemClick} />
      {mainNavLinks.map((link) => (
        <Nav.Link key={link.label} href={link.href} className="nav-navbar-item" onClick={onItemClick}>
          {link.label}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export function LandingNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const close = () => setDrawerOpen(false);

  return (
    <header className="site-header site-header--hero sticky-top">
      <Navbar expand="lg" variant="light" className="navbar-vidmology py-1 py-lg-2">
        <Container fluid className="navbar-fluid px-3 px-sm-4 px-lg-5">
          <Row className="align-items-center w-100 g-0 gx-lg-2 gx-xl-3">
            {/* Brand */}
            <Col xs={6} md={6} lg={4} className="d-flex align-items-center">
              <Navbar.Brand
                as={Link}
                href="/"
                className="d-flex align-items-center text-decoration-none py-1 me-0 min-w-0 max-w-100 overflow-visible"
                onClick={close}
              >
                <BrandLogo />
              </Navbar.Brand>
            </Col>

            {/* Desktop center nav */}
            <Col lg={4} className="d-none d-lg-flex justify-content-center align-items-center">
              <MainNav
                onItemClick={close}
                className="nav-cluster justify-content-center align-items-center gap-lg-1 gap-xl-2 flex-row flex-nowrap"
              />
            </Col>

            {/* Desktop CTAs + mobile hamburger */}
            <Col xs={6} md={6} lg={4} className="d-flex justify-content-end align-items-center gap-2 gap-sm-3">
              <div className="d-none d-lg-flex align-items-center gap-3 flex-nowrap">
                <Button
                  className="btn-nav-cta rounded-3 py-2 text-nowrap"
                  style={{ paddingLeft: "16px", paddingRight: "16px" }}
                  href="#pricing"
                  onClick={close}
                >
                  Start Free Trial
                </Button>
                <Link href="#pricing" className="nav-signin-link text-decoration-none text-nowrap" onClick={close}>
                  Sign In
                </Link>
              </div>

              {/* Hamburger — plain button, no Bootstrap toggle */}
              <button
                className="d-lg-none navbar-toggle-custom"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <RiMenu3Line size={24} color="#101010" />
              </button>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Backdrop */}
      <div
        className="d-lg-none"
        onClick={close}
        style={{
          position: "fixed", inset: 0, zIndex: 1049,
          background: "rgba(0,0,0,0.42)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Side drawer */}
      <div
        className="d-lg-none"
        style={{
          position: "fixed", top: 0, right: 0,
          width: "min(300px, 86vw)",
          height: "100dvh",
          background: "#fff",
          zIndex: 1050,
          display: "flex",
          flexDirection: "column",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
          boxShadow: "-8px 0 40px rgba(0,0,0,0.13)",
        }}
      >
        {/* Drawer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid #f0f0f0" }}>
          <BrandLogo />
          <button
            onClick={close}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", borderRadius: "8px" }}
            aria-label="Close menu"
          >
            <RiCloseLine size={22} color="#101010" />
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: "2px", overflowY: "auto" }}>
          {/* Learn section */}
          <p style={{ margin: "4px 12px 6px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", color: "#9ca3af", textTransform: "uppercase" }}>
            Learn
          </p>
          {learnDropdownPanels.map((panel) => (
            <Link
              key={panel.title}
              href={panel.href}
              onClick={close}
              style={{ display: "block", padding: "11px 12px", fontSize: "15px", fontWeight: 500, color: "#101010", textDecoration: "none", borderRadius: "10px", transition: "background 0.15s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              {panel.title}
            </Link>
          ))}

          {/* Divider */}
          <div style={{ height: "1px", background: "#f0f0f0", margin: "10px 12px" }} />

          {/* Main links */}
          {mainNavLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={close}
              style={{ display: "block", padding: "11px 12px", fontSize: "15px", fontWeight: 500, color: "#101010", textDecoration: "none", borderRadius: "10px", transition: "background 0.15s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f5f5f5"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ padding: "16px 20px 24px", borderTop: "1px solid #f0f0f0", display: "flex", flexDirection: "column", gap: "10px" }}>
          <a
            href="#pricing"
            className="btn-cta-green"
            onClick={close}
            style={{ display: "block", textAlign: "center", padding: "13px", borderRadius: "8px", color: "#fff", textDecoration: "none", fontWeight: 500, fontSize: "15px", background: "#1DBE5B" }}
          >
            Start Free Trial
          </a>
          <a
            href="#pricing"
            onClick={close}
            style={{ display: "block", textAlign: "center", padding: "13px", fontSize: "15px", fontWeight: 600, color: "#101010", textDecoration: "none" }}
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
