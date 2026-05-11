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
    <footer style={{ background: "#fff", borderTop: "1px solid #f0f0f0" }}>
      {/* Main row */}
      <Container style={{ paddingTop: "56px", paddingBottom: "48px" }}>
        <Row className="g-lg-4 footer-main-row" style={{ rowGap: "32px" }}>
          {/* Brand column */}
          <Col lg={5} md={12}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-vidmology.png" alt="Vidmology" height={40} style={{ marginBottom: "20px", display: "block" }} />
            <p style={{ margin: "0 0 20px", fontSize: "15px", fontWeight: 700, color: "#101010" }}>
              AI-Powered Micro learning platform.
            </p>
            <p style={{ margin: "0 0 24px", fontSize: "14px", fontWeight: 400, lineHeight: "1.6", color: "#878787", maxWidth: "300px" }}>
              Discover the Future of Learning with Our AI-Powered Micro Learning Platform, featuring bite-sized videos, podcasts, and Ai coaching.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {socialLinks.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label} style={{ color: "#101010", display: "flex", alignItems: "center" }}>
                  <Icon size={20} aria-hidden />
                </a>
              ))}
            </div>
          </Col>

          {/* Link columns pushed to right */}
          <Col lg={7} md={12}>
            <Row className="g-sm-4 justify-content-end footer-link-cols" style={{ rowGap: "32px" }}>
              {footerColumns.map((col) => (
                <Col xs={12} sm={4} key={col.title}>
                  <p className="footer-col-heading" style={{ margin: "0 0 20px", fontSize: "15px", fontWeight: 600, color: "#101010" }}>
                    {col.title}
                  </p>
                  <ul className="footer-col-list" style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {col.links.map((link) => (
                      <li key={link}>
                        <a href="#" style={{ fontSize: "14px", fontWeight: 400, color: "#878787", textDecoration: "none" }}>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #f0f0f0" }}>
        <Container style={{ paddingTop: "20px", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <span style={{ fontSize: "14px", color: "#878787" }}>info@vidmology.com</span>
          <span style={{ fontSize: "14px", color: "#878787" }}>© 2025 Vidmology. All Rights Reserved.</span>
        </Container>
      </div>
    </footer>
  );
}
