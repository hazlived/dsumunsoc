import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container px-4 px-lg-5">
        <div className="row g-4 justify-content-between">
          {/* Brand Info */}
          <div className="col-12 col-md-5 col-lg-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <img
                src="/img/logo_white_notext.svg"
                alt="DSU MUNSOC Logo"
                height="45"
                width="45"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/img/MUNSOCLOGO2-white.png";
                }}
              />
              <div>
                <h5 className="mb-0" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
                  DSU <span style={{ color: "#D4AF37" }}>MUNSOC</span>
                </h5>
                <small style={{ color: "#9DA5B4" }}>Model United Nations Society</small>
              </div>
            </div>
            <p className="mb-3" style={{ fontSize: "0.92rem", color: "#9DA5B4", lineHeight: "1.6" }}>
              Established in 2023, the Model United Nations Society at Dayananda Sagar University is committed to fostering diplomacy, critical research, leadership, and public speaking.
            </p>
            <div className="fst-italic" style={{ color: "#D4AF37", fontSize: "0.88rem" }}>
              "There is nothing stronger than those two: Patience & Time"
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="text-uppercase mb-3 fw-bold" style={{ color: "#D4AF37", letterSpacing: "1px", fontSize: "0.85rem" }}>
              Navigation
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "0.9rem" }}>
              <li>
                <Link to="/" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cope3" className="text-decoration-none fw-semibold" style={{ color: "#D4AF37" }}>
                  COPE III (Active)
                </Link>
              </li>
              <li>
                <Link to="/cope2" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  COPE II Archive
                </Link>
              </li>
              <li>
                <a href="#about" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Past Conferences */}
          <div className="col-6 col-md-4 col-lg-3">
            <h6 className="text-uppercase mb-3 fw-bold" style={{ color: "#D4AF37", letterSpacing: "1px", fontSize: "0.85rem" }}>
              Conferences
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ fontSize: "0.9rem" }}>
              <li>
                <Link to="/cope3" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  DSU COPE MUN III
                </Link>
              </li>
              <li>
                <Link to="/cope2" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  DSU COPE MUN II
                </Link>
              </li>
              <li>
                <Link to="/events/dsumun2" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  DSUMUN Edition II
                </Link>
              </li>
              <li>
                <Link to="/events/dsumun1" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  DSUMUN Edition I
                </Link>
              </li>
              <li>
                <Link to="/events/cope1" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  COPE Edition I
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="text-uppercase mb-3 fw-bold" style={{ color: "#D4AF37", letterSpacing: "1px", fontSize: "0.85rem" }}>
              Contact & Registration
            </h6>
            <div className="d-flex flex-column gap-2 mb-3" style={{ fontSize: "0.9rem", color: "#CBD5E1" }}>
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} style={{ color: "#D4AF37" }} />
                <a href="mailto:dsumunsoc@gmail.com" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  dsumunsoc@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} style={{ color: "#D4AF37" }} />
                <a href="tel:+918618220160" className="text-decoration-none" style={{ color: "#CBD5E1" }}>
                  +91 86182 20160
                </a>
              </div>
              <div className="d-flex align-items-start gap-2">
                <MapPin size={16} style={{ color: "#D4AF37", marginTop: "3px" }} />
                <span>Dayananda Sagar University, Bangalore</span>
              </div>
            </div>
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-decoration-none d-inline-flex align-items-center w-100 text-center justify-content-center"
              style={{ fontSize: "0.82rem", padding: "8px 16px" }}
            >
              Register For DSU COPE MUN III
              <ExternalLink size={14} className="ms-2" />
            </a>
          </div>
        </div>

        <div className="gold-separator my-4"></div>

        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start" style={{ fontSize: "0.85rem", color: "#64748B" }}>
          <div>
            © {new Date().getFullYear()} DSU Model United Nations Society. All Rights Reserved.
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>Dayananda Sagar University</span>
            <span>|</span>
            <span style={{ color: "#D4AF37" }}>MUNSOC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
