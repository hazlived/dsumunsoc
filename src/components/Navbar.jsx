import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copeDropdownOpen, setCopeDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCopeDropdownOpen(false);
    setEventsDropdownOpen(false);
  }, [location]);

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const aboutEl = document.getElementById("about");
        if (aboutEl) {
          aboutEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const aboutEl = document.getElementById("about");
      if (aboutEl) {
        aboutEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed-top transition-all duration-300 ${
        isScrolled
          ? "bg-dark shadow-lg"
          : "bg-dark opacity-95"
      }`}
      style={{
        backgroundColor: "rgba(18, 20, 23, 0.95)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        backdropFilter: "blur(12px)",
        zIndex: 1050,
      }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <div className="d-flex align-items-center justify-content-between py-2">
          {/* Brand Logo & Name */}
          <Link to="/" className="d-flex align-items-center text-decoration-none gap-3">
            <img
              src="/img/logo_white_notext.svg"
              alt="DSU MUNSOC"
              height="44"
              width="44"
              className="d-inline-block align-top"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/MUNSOCLOGO2-white.png";
              }}
            />
            <div className="d-flex flex-column">
              <span
                className="navbar-brand-title"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Cinzel', serif",
                  fontSize: "1.2rem",
                  letterSpacing: "1px",
                }}
              >
                DSU <span style={{ color: "#D4AF37" }}>MUNSOC</span>
              </span>
              <span
                style={{
                  color: "#9DA5B4",
                  fontSize: "0.68rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                }}
              >
                Dayananda Sagar University
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="d-none d-lg-flex align-items-center gap-3">
            <Link
              to="/"
              className={`nav-link-custom ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>

            {/* COPE 3 Direct Link */}
            <Link
              to="/cope3"
              className={`nav-link-custom ${
                location.pathname === "/cope3" ? "active" : ""
              }`}
            >
              COPE III
            </Link>

            {/* DSU COPE MUN Dropdown */}
            <div
              className="position-relative"
              onMouseEnter={() => setCopeDropdownOpen(true)}
              onMouseLeave={() => setCopeDropdownOpen(false)}
            >
              <button
                className={`nav-link-custom ${
                  location.pathname.startsWith("/cope") ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                DSU COPE MUN
                <ChevronDown size={14} className="ms-1" style={{ color: "#D4AF37" }} />
              </button>
              {copeDropdownOpen && (
                <div
                  className="position-absolute py-2 rounded shadow-lg"
                  style={{
                    backgroundColor: "#1A1D22",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    minWidth: "220px",
                    top: "100%",
                    left: 0,
                  }}
                >
                  <Link
                    to="/cope3"
                    className="d-flex align-items-center justify-content-between px-3 py-2 text-decoration-none"
                    style={{ color: "#D4AF37", fontSize: "0.9rem", fontWeight: "600" }}
                  >
                    <span>COPE III (Current)</span>
                    <span className="badge bg-gold text-dark" style={{ fontSize: "0.65rem", padding: "2px 6px" }}>ACTIVE</span>
                  </Link>
                  <div className="dropdown-divider my-1" style={{ borderColor: "rgba(255,255,255,0.1)" }}></div>
                  <Link
                    to="/cope2"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    COPE II (Archive)
                  </Link>
                  <Link
                    to="/cope2/executive-board"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    COPE II Executive Board
                  </Link>
                </div>
              )}
            </div>

            {/* Events Dropdown */}
            <div
              className="position-relative"
              onMouseEnter={() => setEventsDropdownOpen(true)}
              onMouseLeave={() => setEventsDropdownOpen(false)}
            >
              <button
                className={`nav-link-custom ${
                  location.pathname.startsWith("/events") ? "active" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                Past Conferences
                <ChevronDown size={14} className="ms-1" style={{ color: "#D4AF37" }} />
              </button>
              {eventsDropdownOpen && (
                <div
                  className="position-absolute py-2 rounded shadow-lg"
                  style={{
                    backgroundColor: "#1A1D22",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    minWidth: "220px",
                    top: "100%",
                    left: 0,
                  }}
                >
                  <Link
                    to="/events/dsumun2"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    DSUMUN Edition II
                  </Link>
                  <Link
                    to="/events/dsumun1"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    DSUMUN Edition I
                  </Link>
                  <Link
                    to="/events/cope1"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    COPE Edition I
                  </Link>
                  <Link
                    to="/events/delegation"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    MUNSOC Delegations
                  </Link>
                  <Link
                    to="/events/others"
                    className="d-block px-3 py-2 text-decoration-none"
                    style={{ color: "#E2E8F0", fontSize: "0.9rem" }}
                  >
                    Diplomacy Seminars
                  </Link>
                </div>
              )}
            </div>

            <a
              href="#about"
              onClick={handleAboutClick}
              className="nav-link-custom"
              style={{ cursor: "pointer" }}
            >
              About Us
            </a>

            {/* Direct Register CTA */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-decoration-none ms-2"
              style={{ padding: "8px 20px", fontSize: "0.85rem" }}
            >
              Register Now
              <ExternalLink size={14} />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="d-lg-none bg-transparent border-0 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} style={{ color: "#D4AF37" }} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="d-lg-none py-3 border-top"
            style={{
              borderColor: "rgba(212, 175, 55, 0.2)",
              backgroundColor: "#121417",
            }}
          >
            <div className="d-flex flex-column gap-2">
              <Link
                to="/"
                className="text-white text-decoration-none py-2 px-3 fw-semibold"
              >
                Home
              </Link>
              <Link
                to="/cope3"
                className="text-gold text-decoration-none py-2 px-3 fw-bold"
                style={{ color: "#D4AF37" }}
              >
                DSU COPE MUN III (Active)
              </Link>

              <div className="px-3 py-1 text-gold fw-bold mt-2" style={{ color: "#D4AF37", fontSize: "0.85rem" }}>
                DSU COPE MUN EDITIONS
              </div>
              <Link
                to="/cope3"
                className="text-white text-decoration-none ps-4 py-1 fw-bold"
              >
                COPE III (Current Event)
              </Link>
              <Link
                to="/cope2"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                COPE II (Archive)
              </Link>
              <Link
                to="/cope2/executive-board"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                COPE II Executive Board
              </Link>

              <div className="px-3 py-1 text-gold fw-bold mt-2" style={{ color: "#D4AF37", fontSize: "0.85rem" }}>
                PAST CONFERENCES
              </div>
              <Link
                to="/events/dsumun2"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                DSUMUN Edition II
              </Link>
              <Link
                to="/events/dsumun1"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                DSUMUN Edition I
              </Link>
              <Link
                to="/events/cope1"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                COPE Edition I
              </Link>
              <Link
                to="/events/delegation"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                MUNSOC Delegations
              </Link>
              <Link
                to="/events/others"
                className="text-secondary text-decoration-none ps-4 py-1"
              >
                Diplomacy Seminars
              </Link>

              <a
                href="#about"
                onClick={handleAboutClick}
                className="text-white text-decoration-none py-2 px-3 fw-semibold mt-2"
              >
                About Us
              </a>

              <div className="px-3 pt-3">
                <a
                  href={REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-decoration-none w-100 text-center"
                >
                  Register Now for COPE 3
                  <ExternalLink size={16} className="ms-2" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
