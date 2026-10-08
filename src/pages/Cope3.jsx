import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, MapPin, ExternalLink, Mail, Phone, FileText, Cpu, Sparkles, FileSpreadsheet } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";
import UncswPortfolioMatrix from "../components/UncswPortfolioMatrix";


const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";
const BROCHURE_URL = "https://canva.link/u5xb1eib41mbb63";

const Cope3 = () => {
  const committees = [
    {
      id: "aippm",
      name: "AIPPM",
      fullName: "All India Political Parties Meet",
      logo: "/img/AIPPM.svg",
      agenda: "One Nation, One Election: Ensuring Timely and Inclusive Elections, with Special Emphasis on Electoral-Roll Management, Local Self-Government and Administrative Reforms",
      description: "The All India Political Parties Meet (AIPPM) is a dynamic committee that brings the world of Indian politics into the MUN setting. Instead of representing countries, delegates take on the roles of prominent Indian politicians and debate national issues from their assigned political perspectives. You will be expected to understand your politician’s views, party ideology, policies, and public statements while negotiating, forming alliances, and defending your stance on the floor. AIPPM is fast paced, engaging, and ideal for anyone interested in Indian politics and lively debate.",
      badge: "Indian Special Committee",
    },
    {
      id: "uncsw",
      name: "UNCSW",
      fullName: "United Nations Commission on the Status of Women",
      logo: "/img/United_Nations_Human_Rights_Council_Logo.svg",
      agenda: "Empowerment of Women through Improvements in Gender Equality and Economic Independence",
      description: "The United Nations Commission on the Status of Women (UNCSW) focuses on advancing gender equality and empowering women around the world. As a delegate, you will represent a country and discuss issues affecting women and girls, ranging from access to education and healthcare to economic opportunities, safety, and political participation. You will research your country’s policies, collaborate with other nations, and work towards practical solutions through formal debate and negotiation. UNCSW is a great choice for delegates interested in social issues, human rights, and constructive diplomacy.",
      badge: "UN Gender & Rights Organ",
    },
    {
      id: "unodc",
      name: "UNODC",
      fullName: "United Nations Office on Drugs and Crime",
      logo: "/img/UNSC.png",
      agenda: "Preventing human and drug trafficking through cross border cooperation",
      description: "The United Nations Office on Drugs and Crime (UNODC) addresses some of the most pressing international challenges involving organised crime, drug trafficking, corruption, terrorism, and the criminal justice system. As a double delegate committee, you will work as a team of two, representing the same country and combining your research, strategy, and speaking skills to contribute effectively to the debate. You will collaborate with other nations, negotiate solutions, and work towards developing policies that can tackle these issues on an international scale. UNODC is well suited for delegates who enjoy research, problem solving, and strategic teamwork.",
      badge: "Double Delegate Committee",
    },
    {
      id: "ipc",
      name: "IPC",
      fullName: "International Press Corps",
      logo: "/img/InternationalPress.svg",
      agenda: "Report, conduct press conferences, and question delegates.",
      description: "The International Press (IP) gives you the opportunity to experience MUN from a completely different perspective. Instead of representing a country or politician, you become part of the conference’s media team, observing committees, interviewing delegates, covering important developments, and reporting on the events taking place throughout the conference. Depending on your role, you may work on articles, photography, interviews, or creative media to capture the story of the conference. IP is perfect for those interested in journalism, writing, photography, media, or simply looking at MUN from outside the debate floor.",
      badge: "Press & Media Corps",
    },
  ];

  return (
    <div className="section-dark">
      {/* Banner / Hero Section with background.png */}
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

          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-decoration-none"
            >
              Register Now
              <ExternalLink size={16} />
            </a>
            {/* <a
              href={BROCHURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-decoration-none"
            >
              <FileText size={16} className="me-2" />
              Download Brochure
            </a> */}
          </div>
        </div>
      </section>

      {/* DSU Vision & Letter Section */}
      <section className="py-5 section-charcoal">
        <div className="container px-4">
          <div className="row justify-content-center g-4">
            <div className="col-12 col-lg-6">
              <div className="custom-card p-4 p-md-5 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Cpu size={22} style={{ color: "#D4AF37" }} />
                  <span className="eyebrow-text mb-0">DSU INSTITUTIONAL VISION</span>
                </div>
                <h3 className="h3 fw-bold mb-3" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  AI-First. Future-Ready.
                </h3>
                <p style={{ color: "#CBD5E1", lineHeight: "1.8", fontSize: "0.95rem" }}>
                  Dayananda Sagar University is building an AI-first ecosystem where learning goes beyond classrooms. By integrating Artificial Intelligence into education, research, and real-world innovation, DSU empowers students to explore new possibilities, create meaningful solutions, and take on the challenges of tomorrow.
                </p>
                <p className="mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8", fontSize: "0.92rem" }}>
                  At the heart of this vision is a commitment to creating future-ready graduates — thinkers, innovators, and problem-solvers equipped to lead in an increasingly intelligent and connected world. <strong style={{ color: "#D4AF37" }}>Learn. Innovate. Lead.</strong> — The Future is Being Built at DSU.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="custom-card p-4 p-md-5 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <Sparkles size={22} style={{ color: "#D4AF37" }} />
                  <span className="eyebrow-text mb-0">SECRETARY-GENERAL'S ADDRESS</span>
                </div>
                <h3 className="h3 fw-bold mb-3" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  Welcome to COPE Edition III
                </h3>
                <p style={{ color: "#CBD5E1", lineHeight: "1.8", fontSize: "0.95rem" }}>
                  Distinguished Delegates, Welcome to DSU Intra MUN 2026 — COPE Edition III. COPE 3 brings intellectual rigor, biting wit, and substantive diplomacy to the forefront across four specialized committees.
                </p>
                <p className="mb-4" style={{ color: "#9DA5B4", lineHeight: "1.8", fontSize: "0.92rem" }}>
                  Whether you choose to navigate the heated floor of Indian domestic politics in AIPPM, fight for gender equity in UNCSW, dismantle criminal networks in UNODC, or report on the breaking headlines in IPC, COPE 3 promises an unforgettable arena for leadership.
                </p>
                <div className="pt-3 border-top border-secondary text-end">
                  <span className="fw-bold d-block" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    Aditiya Bidappa
                  </span>
                  <small style={{ color: "#9DA5B4" }}>Secretary-General, DSU COPE MUN III</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Showcase with Detailed Cards */}
      <section className="py-5 section-dark">
        <div className="container px-4">
          <div className="text-center mb-4">
            <span className="eyebrow-text">COMMITTEES & AGENDAS</span>
            <h2 className="display-6 fw-bold" style={{ color: "#FFFFFF" }}>
              COPE III Featured Committees
            </h2>
            <div className="gold-separator"></div>
            <p className="mx-auto" style={{ maxWidth: "700px", color: "#9DA5B4" }}>
              Explore our four specialized committees designed to challenge delegates in diplomacy, critical research, strategy, and journalistic reporting.
            </p>
          </div>

          <HorizontalScrollCards title="Active COPE III Committees" subtitle="INTRA MUN 2026">
            {committees.map((comm) => (
              <div
                key={comm.id}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "390px", minHeight: "440px" }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="subtle-tag">{comm.badge}</span>
                    <img src={comm.logo} alt={comm.name} style={{ maxHeight: "48px", maxWidth: "100px", objectFit: "contain" }} />
                  </div>
                  <h3 className="h4 fw-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    {comm.name}
                  </h3>
                  <small style={{ color: "#9DA5B4", display: "block", marginBottom: "12px", fontWeight: "500" }}>
                    {comm.fullName}
                  </small>

                  <div className="agenda-block mb-3">
                    <span className="agenda-label">Committee Agenda & Scope</span>
                    <p className="agenda-text">
                      "{comm.agenda}"
                    </p>
                  </div>

                  <p style={{ color: "#9DA5B4", fontSize: "0.86rem", lineHeight: "1.6" }}>
                    {comm.description}
                  </p>
                </div>

                <div className="pt-3 border-top border-secondary mt-3 d-flex flex-column gap-2">
                  {comm.id === "uncsw" && (
                    <a
                      href="#uncsw-matrix"
                      className="btn-outline-gold text-decoration-none w-100 text-center"
                      style={{ fontSize: "0.82rem", padding: "7px 14px" }}
                    >
                      <FileSpreadsheet size={14} className="me-1" />
                      View Portfolio Matrix (39 Available)
                    </a>
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
          </HorizontalScrollCards>

          {/* Embedded Portfolio Matrix for UNCSW */}
          <UncswPortfolioMatrix />
        </div>
      </section>


      {/* Prize Pool Section */}
      <section className="py-5 section-charcoal text-center border-top border-bottom border-secondary">
        <div className="container px-4">
          <span className="eyebrow-text">CASH REWARDS & RECOGNITION</span>
          <h2 className="display-4 fw-bold gold-text mb-2">
            PRIZE POOL: ₹ 18,000+
          </h2>
          <p className="mx-auto mb-0" style={{ color: "#9DA5B4", maxWidth: "600px" }}>
            Cash prizes, awards, and certificates presented across Best Delegate, High Commendation, Special Mention, and Outstanding Press positions.
          </p>
        </div>
      </section>

      {/* Official Poster & Secretariat Contacts */}
      <section className="py-5 section-dark">
        <div className="container px-4">
          <div className="custom-card p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-5 text-center">
                <div className="p-2 bg-dark rounded d-inline-block shadow-lg" style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}>
                  <img
                    src="/img/cope3_poster.png"
                    alt="DSU COPE MUN III Official Poster"
                    className="img-fluid rounded"
                    style={{ maxHeight: "520px", objectFit: "contain" }}
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <span className="eyebrow-text">EVENT CONTACTS & ORGANISING TEAM</span>
                <h3 className="h2 fw-bold mb-2" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  Join DSU COPE MUN III
                </h3>
                <p style={{ color: "#9DA5B4", marginBottom: "20px" }}>
                  Delegate allocations are granted on a first-come, first-served basis. Secure your committee role today.
                </p>

                <div className="d-flex flex-wrap gap-3 my-4">
                  <a
                    href={REGISTRATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold text-decoration-none px-4 py-3"
                  >
                    Click Here to Register Now
                    <ExternalLink size={18} className="ms-2" />
                  </a>
                  {/* <a
                    href={BROCHURE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-gold text-decoration-none px-4 py-3"
                  >
                    <FileText size={18} className="me-2" />
                    Open Canva Brochure
                  </a> */}
                </div>

                <div className="pt-4 border-top border-secondary">
                  <span className="agenda-label">Secretariat & Organising Team Contacts:</span>
                  <div className="d-flex flex-column gap-2 mt-3" style={{ fontSize: "0.92rem", color: "#CBD5E1" }}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 p-2 rounded" style={{ backgroundColor: "#181A1D" }}>
                      <div>
                        <strong>Aditiya Bidappa</strong> <span style={{ color: "#9DA5B4" }}>(Secretary-General)</span>
                      </div>
                      <a href="tel:+918618220160" style={{ color: "#D4AF37" }} className="text-decoration-none">
                        +91 86182 20160
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 p-2 rounded" style={{ backgroundColor: "#181A1D" }}>
                      <div>
                        <strong>Lakshmi Shree</strong> <span style={{ color: "#9DA5B4" }}>(Chief Advisor)</span>
                      </div>
                      <a href="tel:+917406332416" style={{ color: "#D4AF37" }} className="text-decoration-none">
                        +91 74063 32416
                      </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 p-2 rounded" style={{ backgroundColor: "#181A1D" }}>
                      <div>
                        <strong>K Suchith</strong> <span style={{ color: "#9DA5B4" }}>(Head of Delegate Affairs)</span>
                      </div>
                      <a href="tel:+917349395902" style={{ color: "#D4AF37" }} className="text-decoration-none">
                        +91 73493 95902
                      </a>
                    </div>
                  </div>

                  <div className="d-flex flex-wrap gap-4 mt-3 pt-2" style={{ fontSize: "0.9rem" }}>
                    <div className="d-flex align-items-center gap-2">
                      <Mail size={16} style={{ color: "#D4AF37" }} />
                      <a href="mailto:dsumunsoc@gmail.com" style={{ color: "#CBD5E1" }} className="text-decoration-underline">
                        dsumunsoc@gmail.com
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <MapPin size={16} style={{ color: "#D4AF37" }} />
                      <span style={{ color: "#CBD5E1" }}>Dayananda Sagar University Campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cope3;
