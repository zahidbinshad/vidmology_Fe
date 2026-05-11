"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const footerColumns = [
  {
    title: "Company",
    links: ["Videos", "Podcast", "Ai Coach", "White label", "About US"],
  },
  {
    title: "Resources",
    links: ["FAQ", "Case Studies"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Cookie Settings"],
  },
] as const;

const socialLinks = [
  { icon: FaInstagram, label: "Instagram" },
  { icon: BsTwitterX, label: "X" },
  { icon: FaFacebook, label: "Facebook" },
  { icon: FaYoutube, label: "YouTube" },
] as const;

export function LandingFooter() {
  return (
    <footer className="footer-root">
      <Container className="footer-main">
        <Row className="g-lg-4 footer-main-row" style={{ rowGap: "32px" }}>
          <Col lg={5} md={12}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-vidmology.png" alt="Vidmology" height={40} style={{ marginBottom: "20px", display: "block" }} />
            <p className="footer-brand-tagline">AI-Powered Micro learning platform.</p>
            <p className="footer-brand-desc">
              Discover the Future of Learning with Our AI-Powered Micro Learning Platform, featuring bite-sized videos, podcasts, and Ai coaching.
            </p>
            <div className="footer-social">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} className="footer-social-link">
                  <Icon size={20} aria-hidden />
                </a>
              ))}
            </div>
          </Col>

          <Col lg={7} md={12}>
            <Row className="g-sm-4 justify-content-end footer-link-cols" style={{ rowGap: "32px" }}>
              {footerColumns.map((col) => (
                <Col xs={12} sm={4} key={col.title}>
                  <p className="footer-col-heading" style={{ margin: "0 0 20px" }}>{col.title}</p>
                  <ul className="footer-col-list" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom">
        <Container className="footer-bottom-inner">
          <span className="footer-meta">info@vidmology.com</span>
          <span className="footer-meta">© 2025 Vidmology. All Rights Reserved.</span>
        </Container>
      </div>
    </footer>
  );
}
