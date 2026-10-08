import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, MapPin, ExternalLink, ArrowRight, Shield, Globe, Users, Mail, Phone, FileText, FileSpreadsheet } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";


const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";
const BROCHURE_URL = "https://canva.link/u5xb1eib41mbb63";

const Home = () => {
  const copeCommittees = [
    {
      id: "aippm",
      name: "AIPPM",
      fullName: "All India Political Parties Meet",
      logo: "/img/AIPPM.svg",
      agenda: "One Nation, One Election: Ensuring Timely and Inclusive Elections, with Special Emphasis on Electoral-Roll Management, Local Self-Government and Administrative Reforms",
      badge: "Indian Special Committee"
    },
    {
      id: "uncsw",
      name: "UNCSW",
      fullName: "United Nations Commission on the Status of Women",
      logo: "/img/United_Nations_Human_Rights_Council_Logo.svg",
      agenda: "Empowerment of Women through Improvements in Gender Equality and Economic Independence",
      badge: "UN Gender & Rights Organ"
    },
    {
      id: "unodc",
      name: "UNODC",
      fullName: "United Nations Office on Drugs and Crime",
      logo: "/img/UNSC.png",
      agenda: "Preventing human and drug trafficking through cross border cooperation",
      badge: "Double Delegate Committee"
    },
    {
      id: "ipc",
      name: "IPC",
      fullName: "International Press Corps",
      logo: "/img/InternationalPress.svg",
      agenda: "Report, conduct press conferences, and question delegates.",
      badge: "Press & Media Corps"
    }
  ];

  const historicalConferences = [
    {
      title: "DSU COPE MUN (Edition II)",
      date: "Past Edition Archive",
      prize: "Rs. 18,000+",
      theme: "A Pass at the Infinite",
      committees: "DISEC & G20",
      link: "/cope2",
    },
    {
      title: "DSUMUN Edition II",
      date: "Beyond Borders",
      prize: "Rs. 75,000+",
      theme: "Beyond Borders",
      committees: "6 Committees (UNSC, DISEC, UNHRC, AIPPM, IPC, Special)",
      link: "/events/dsumun2",
    },
    {
      title: "DSUMUN Edition I",
      date: "Inaugural Edition",
      prize: "Rs. 25,000+",
      theme: "Foundational Diplomacy",
      committees: "4 Committees (UNSC, DISEC, WHO, Lok Sabha)",
      link: "/events/dsumun1",
    },
    {
      title: "COPE Edition I",
      date: "March 22nd & 23rd, 2024",
      prize: "Intra-MUN Excellence",
      theme: "Conference of Public Exchange",
      committees: "3 Committees (Vidhan Soudha, Lok Sabha, UNGA)",
      link: "/events/cope1",
    }
  ];

  return (
    <div className="section-dark">
      {/* Landing Page Hero Section */}
      <section className="hero-container">
        <div className="hero-overlay"></div>
        <div className="container hero-content text-center py-5 px-4">
          <div className="d-flex justify-content-center mb-4">
            <img
              src="/img/MUNSOCLOGO2-white.png"
              alt="DSU MUNSOC Logo"
              style={{ maxHeight: "120px", width: "auto" }}
              className="img-fluid"
            />
          </div>

          <span className="eyebrow-text mb-2">
            DAYANANDA SAGAR UNIVERSITY PRESENTS
          </span>

          <h1
            className="display-3 fw-bold mb-2"
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#FFFFFF",
              letterSpacing: "1px",
              textShadow: "0 4px 20px rgba(0,0,0,0.8)",
            }}
          >
            DSU COPE MUN III
          </h1>

          <h4
            className="fst-italic mb-4"
            style={{
              color: "#D4AF37",
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontSize: "1.15rem",
            }}
          >
            "A Pass at the Infinite"
          </h4>

          {/* Clean Quick Info Grid */}
          <div className="d-flex align-items-center justify-content-center flex-wrap gap-4 mb-4 py-2">
            <div className="d-flex align-items-center gap-2" style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>
              <Calendar size={18} style={{ color: "#D4AF37" }} />
              <span>October 23rd - 24th</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.2)" }} className="d-none d-sm-inline">•</span>
            <div className="d-flex align-items-center gap-2" style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>
              <Award size={18} style={{ color: "#D4AF37" }} />
              <span>Prize Pool: ₹ 18,000+</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.2)" }} className="d-none d-sm-inline">•</span>
            <div className="d-flex align-items-center gap-2" style={{ color: "#FFFFFF", fontSize: "0.95rem" }}>
              <MapPin size={18} style={{ color: "#D4AF37" }} />
              <span>Dayananda Sagar University</span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3 mt-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-decoration-none"
            >
              Register Now
              <ExternalLink size={16} />
            </a>
            <Link to="/cope3" className="btn-outline-gold text-decoration-none">
              Explore COPE 3 Details
              <ArrowRight size={16} />
            </Link>
            {/* <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-decoration-none"
            >
              <FileText size={16} className="me-2" />
              Brochure
            </a> */}
          </div>
        </div>
      </section>

      {/* Conference Quick Highlights Bar */}
      <section className="section-charcoal py-4 border-top border-bottom border-secondary">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-6 col-md-3">
              <div className="p-2">
                <h2 className="fw-bold gold-text mb-0" style={{ fontSize: "2.2rem" }}>4</h2>
                <span className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.78rem", letterSpacing: "1px" }}>
                  COPE III Committees
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2">
                <h2 className="fw-bold gold-text mb-0" style={{ fontSize: "2.2rem" }}>₹ 18k+</h2>
                <span className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.78rem", letterSpacing: "1px" }}>
                  COPE III Prize Pool
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2">
                <h2 className="fw-bold gold-text mb-0" style={{ fontSize: "2.2rem" }}>Oct 23-24</h2>
                <span className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.78rem", letterSpacing: "1px" }}>
                  Conference Dates
                </span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="p-2">
                <h2 className="fw-bold gold-text mb-0" style={{ fontSize: "2.2rem" }}>AI-First</h2>
                <span className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.78rem", letterSpacing: "1px" }}>
                  DSU Campus Vision
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Committees Section with Horizontal Scroll Cards */}
      <section className="py-5" style={{ backgroundColor: "#15181C" }}>
        <div className="container px-4">
          <div className="text-center mb-4">
            <span className="eyebrow-text">COPE III COMMITTEES</span>
            <h2 className="display-6 fw-bold" style={{ color: "#FFFFFF" }}>
              Featured Committee Agendas
            </h2>
            <div className="gold-separator"></div>
            <p className="mx-auto" style={{ maxWidth: "680px", color: "#9DA5B4" }}>
              Participate in intense parliamentary debates and shape solutions across our four flagship committees: AIPPM, UNCSW, UNODC (Double Delegate), and IPC.
            </p>
          </div>

          <HorizontalScrollCards title="Committees Showcase" subtitle="COPE III EDITION">
            {copeCommittees.map((comm) => (
              <div
                key={comm.id}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "380px", minHeight: "360px" }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="subtle-tag">{comm.badge}</span>
                    <img src={comm.logo} alt={comm.name} height="48" style={{ objectFit: "contain" }} />
                  </div>
                  <h3 className="h4 fw-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    {comm.name}
                  </h3>
                  <small style={{ color: "#9DA5B4", display: "block", marginBottom: "14px" }}>
                    {comm.fullName}
                  </small>

                  <div className="agenda-block">
                    <span className="agenda-label">Official Agenda</span>
                    <p className="agenda-text">
                      "{comm.agenda}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-top border-secondary d-flex flex-column gap-2">
                  {comm.id === "uncsw" && (
                    <Link
                      to="/cope3#uncsw-matrix"
                      className="btn-outline-gold text-decoration-none w-100 text-center"
                      style={{ fontSize: "0.82rem", padding: "7px 14px" }}
                    >
                      <FileSpreadsheet size={14} className="me-1" />
                      View Portfolio Matrix (39 Available)
                    </Link>
                  )}
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-decoration-none w-100 text-center"
                    style={{ fontSize: "0.85rem", padding: "8px 16px" }}
                  >
                    Register for {comm.name}
                    <ExternalLink size={14} className="ms-2" />
                  </a>
                </div>
              </div>
            ))}


            {/* Quick Detailed Page Link Card */}
            <div
              className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between text-center"
              style={{ width: "320px", minHeight: "360px", backgroundColor: "#1A1D22" }}
            >
              <div>
                <div className="p-3 rounded-circle d-inline-flex mb-3" style={{ backgroundColor: "rgba(212, 175, 55, 0.08)" }}>
                  <Users size={36} style={{ color: "#D4AF37" }} />
                </div>
                <h4 className="fw-bold mb-2" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  More Info
                </h4>
                <p style={{ color: "#9DA5B4", fontSize: "0.9rem" }}>
                  Explore complete committee descriptions, Secretary-General address, poster, and registration details.
                </p>
              </div>
              <Link to="/cope3" className="btn-outline-gold text-decoration-none w-100">
                View More Info
                <ArrowRight size={16} className="ms-2" />
              </Link>
            </div>
          </HorizontalScrollCards>
        </div>
      </section>

      {/* Official Poster & Event Registration Highlight Section */}
      <section className="py-5 section-charcoal">
        <div className="container px-4">
          <div className="custom-card p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-5 text-center">
                <div className="p-2 bg-dark rounded d-inline-block" style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}>
                  <img
                    src="/img/cope3_poster.png"
                    alt="DSU COPE MUN III Official Poster"
                    className="img-fluid rounded"
                    style={{ maxHeight: "480px", objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7 text-white">
                <span className="eyebrow-text">CURRENT ACTIVE EVENT BULLETIN</span>
                <h2 className="display-6 fw-bold mb-1" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
                  DSU COPE MUN III
                </h2>
                <h5 className="fst-italic mb-4" style={{ color: "#D4AF37" }}>
                  "A Pass at the Infinite"
                </h5>

                <div className="d-flex flex-column gap-3 mb-4">
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded" style={{ backgroundColor: "#252830", color: "#D4AF37" }}>
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#D4AF37", textTransform: "uppercase", fontWeight: "700" }}>Dates</div>
                      <div className="fw-semibold" style={{ color: "#FFFFFF" }}>October 23rd - 24th</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded" style={{ backgroundColor: "#252830", color: "#D4AF37" }}>
                      <Award size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#D4AF37", textTransform: "uppercase", fontWeight: "700" }}>Prize Pool</div>
                      <div className="fw-semibold" style={{ color: "#FFFFFF" }}>₹ 18,000+</div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 rounded" style={{ backgroundColor: "#252830", color: "#D4AF37" }}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "#D4AF37", textTransform: "uppercase", fontWeight: "700" }}>Venue</div>
                      <div className="fw-semibold" style={{ color: "#FFFFFF" }}>Dayananda Sagar University Campus</div>
                    </div>
                  </div>
                </div>

                <div className="d-flex flex-wrap gap-3 mb-4">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-decoration-none"
                  >
                    Click Here to Register
                    <ExternalLink size={16} className="ms-2" />
                  </a>
                  <Link to="/cope3" className="btn-outline-gold text-decoration-none">
                    Detailed Event Page
                  </Link>
                  {/* <a
                    href={BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold text-decoration-none"
                  >
                    Canva Brochure
                  </a> */}
                </div>

                <div className="pt-3 border-top border-secondary">
                  <span className="agenda-label">For More Details Contact:</span>
                  <div className="d-flex flex-wrap gap-4 mt-1" style={{ fontSize: "0.9rem" }}>
                    <div className="d-flex align-items-center gap-2">
                      <Mail size={16} style={{ color: "#D4AF37" }} />
                      <span style={{ color: "#CBD5E1" }}>dsumunsoc@gmail.com</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Phone size={16} style={{ color: "#D4AF37" }} />
                      <span style={{ color: "#CBD5E1" }}>+91 86182 20160</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About DSU MUNSOC Section */}
      <section className="section-light py-5" id="about">
        <div className="container px-4">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-12 col-md-10">
              <span className="subtle-tag-dark mb-2 d-inline-block">ABOUT THE SOCIETY</span>
              <h2 className="display-5 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#1A1D22" }}>
                Model United Nations Society
              </h2>
              <div className="gold-separator"></div>
              <p className="lead" style={{ color: "#475569", fontWeight: "500" }}>
                Dayananda Sagar University
              </p>
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-12 col-md-6">
              <div className="custom-card light-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-dark" style={{ color: "#D4AF37" }}>
                    <Globe size={22} />
                  </div>
                  <h4 className="fw-bold mb-0" style={{ color: "#1A1D22" }}>Our Founding Mission</h4>
                </div>
                <p style={{ color: "#475569", lineHeight: "1.7" }}>
                  Established in 2023, the Model United Nations Society at Dayananda Sagar University is committed to raising awareness about global events and influential personalities. Our mission centers on cultivating indispensable skills: diplomacy, leadership, research, and eloquence, crucial in navigating today's complex world.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="custom-card light-card p-4 h-100">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="p-2 rounded bg-dark" style={{ color: "#D4AF37" }}>
                    <Shield size={22} />
                  </div>
                  <h4 className="fw-bold mb-0" style={{ color: "#1A1D22" }}>Democratic Principles</h4>
                </div>
                <p style={{ color: "#475569", lineHeight: "1.7" }}>
                  In an era fraught with challenges, it is imperative to develop a perspective that accommodates all parties. Attacks on free speech must be consigned to history. As torchbearers of the next generation, we bear the responsibility of safeguarding principles bestowed upon us by democratic institutions, a free press, and international cooperation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Conferences Horizontal Scroll Showcase */}
      <section className="py-5 section-dark">
        <div className="container px-4">
          <div className="text-center mb-4">
            <span className="eyebrow-text">LEGACY & ARCHIVES</span>
            <h2 className="display-6 fw-bold" style={{ color: "#FFFFFF" }}>
              Our Conference Portfolio
            </h2>
            <div className="gold-separator"></div>
          </div>

          <HorizontalScrollCards title="Conferences & Archives" subtitle="DSU MUNSOC EDITIONS">
            {historicalConferences.map((conf, index) => (
              <div
                key={index}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "330px", minHeight: "330px" }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="subtle-tag">{conf.prize}</span>
                    <small style={{ color: "#D4AF37", fontWeight: "600" }}>{conf.date}</small>
                  </div>

                  <h4 className="fw-bold mb-1" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                    {conf.title}
                  </h4>
                  <p className="fst-italic" style={{ color: "#D4AF37", fontSize: "0.85rem", marginBottom: "12px" }}>
                    "{conf.theme}"
                  </p>

                  <div className="p-2 rounded mb-3" style={{ backgroundColor: "#181A1D", fontSize: "0.85rem", color: "#CBD5E1" }}>
                    <strong>Committees:</strong> {conf.committees}
                  </div>
                </div>

                <div className="pt-2 border-top border-secondary">
                  <Link to={conf.link} className="btn-outline-gold text-decoration-none w-100 text-center">
                    Explore Archive Details
                    <ArrowRight size={14} className="ms-2" />
                  </Link>
                </div>
              </div>
            ))}
          </HorizontalScrollCards>
        </div>
      </section>
    </div>
  );
};

export default Home;
