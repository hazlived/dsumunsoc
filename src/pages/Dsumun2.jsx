import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Dsumun2 = () => {
  const committees = [
    {
      name: "UNSC",
      fullName: "United Nations Security Council",
      logo: "/img/UNSC.png",
      agenda: "The Situation in Cyprus",
      badge: "Primary Security Organ",
    },
    {
      name: "DISEC",
      fullName: "Disarmament & International Security Committee",
      logo: "/img/DISEC.png",
      agenda: "Nuclear Proliferation with special emphasis on the Middle East",
      badge: "UNGA First Committee",
    },
    {
      name: "UNHRC",
      fullName: "United Nations Human Rights Council",
      logo: "/img/United_Nations_Human_Rights_Council_Logo.svg",
      agenda: "The Myanmar Crisis",
      badge: "Human Rights Body",
    },
    {
      name: "AIPPM",
      fullName: "All India Political Parties Meet",
      logo: "/img/AIPPM.svg",
      agenda: "Assessing policy reforms for gender justice in marriage",
      badge: "Indian Special Committee",
    },
    {
      name: "IPC",
      fullName: "International Press Corps",
      logo: "/img/InternationalPress.svg",
      agenda: "Journalism, Photography, and Media Coverage of Conference Proceedings",
      badge: "Press & Media",
    },
    {
      name: "Special Committee",
      fullName: "Double Delegate Special Committee",
      logo: "/img/G20Logo.png",
      agenda: "Mini-agendas, a new RoP, double delegate team simulations",
      badge: "Crisis & RoP Innovation",
    },
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner Section */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 mb-4 flex-wrap">
            <img
              src="/img/DSUMUN_II_Logo.png"
              alt="DSUMUN II Logo"
              style={{ maxHeight: "80px", maxWidth: "220px", objectFit: "contain", height: "auto" }}
            />
            <span style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "300" }} className="d-none d-sm-inline">|</span>
            <img
              src="/img/MUNSOCLOGO2-white.png"
              alt="MUNSOC Logo"
              style={{ maxHeight: "75px", maxWidth: "160px", objectFit: "contain", height: "auto" }}
            />
            <span style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "300" }} className="d-none d-sm-inline">|</span>
            <img
              src="/img/ORG_FOUNDATION.png"
              alt="ORG Foundation Logo"
              style={{ maxHeight: "70px", maxWidth: "180px", objectFit: "contain", height: "auto" }}
            />
          </div>

          <span className="eyebrow-text">HISTORICAL EDITION ARCHIVE</span>
          <h1 className="display-4 fw-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            DSUMUN Edition II: Beyond Borders
          </h1>
          <div className="gold-separator"></div>
        </div>

        {/* About Section */}
        <div className="custom-card p-4 p-md-5 mb-5">
          <h3 className="fw-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
            About DSUMUN Edition II
          </h3>
          <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
            It is with great enthusiasm and pride that MUNSOC from Dayananda Sagar University, in collaboration with ORG Foundation, hosted the successor conference: <strong>DSUMUN Edition II: Beyond Borders</strong>. Our event aimed to uphold the cornerstone principles of the United Nations in international relations and world peace, inspiring both national and international delegations.
          </p>
          <p className="mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8" }}>
            Staying true to contemporary relevance, our event brought together excitement and diplomacy through six distinct committees, each with its own unique procedures and perspectives on compelling global agendas.
          </p>
        </div>

        {/* Prize Pool Bar */}
        <div className="text-center py-4 mb-5 p-4 rounded" style={{ backgroundColor: "#1A1D22", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="eyebrow-text">HISTORICAL PRIZE POOL</span>
          <h2 className="display-4 fw-bold gold-text mb-0">
            Rs. 75,000+
          </h2>
        </div>

        {/* Committees Horizontal Scroll Showcase */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <span className="eyebrow-text">6 DISTINCT COMMITTEES</span>
            <h2 className="fw-bold h2" style={{ color: "#FFFFFF" }}>
              Edition II Committees & Agendas
            </h2>
          </div>

          <HorizontalScrollCards title="Committees Archive" subtitle="DSUMUN II">
            {committees.map((comm, idx) => (
              <div
                key={idx}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "360px", minHeight: "350px" }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="subtle-tag">{comm.badge}</span>
                    <img src={comm.logo} alt={comm.name} style={{ maxHeight: "48px", maxWidth: "90px", objectFit: "contain" }} />
                  </div>
                  <h3 className="h4 fw-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    {comm.name}
                  </h3>
                  <small style={{ color: "#9DA5B4", display: "block", marginBottom: "14px" }}>
                    {comm.fullName}
                  </small>

                  <div className="agenda-block">
                    <span className="agenda-label">Agenda</span>
                    <p className="agenda-text">
                      "{comm.agenda}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </HorizontalScrollCards>
        </div>

        {/* Background Guides Resource Link */}
        <div className="text-center py-4 p-4 rounded" style={{ backgroundColor: "#1A1D22", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <h4 className="fw-bold mb-2" style={{ color: "#FFFFFF" }}>Background Guides & Resources</h4>
          <p style={{ color: "#9DA5B4", marginBottom: "16px" }}>
            Access official study materials, rules of procedure, and background guides prepared for DSUMUN Edition II.
          </p>
          <a
            href="https://drive.google.com/drive/folders/16SWPBO5t5i6Nh9eX3J9NdxYTTG6OOxG6?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-decoration-none px-4 py-2"
          >
            <BookOpen size={16} className="me-2" />
            Access Background Guides
            <ExternalLink size={14} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dsumun2;
