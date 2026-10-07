import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Award, MapPin, Mail, Phone, Users, ShieldCheck } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Cope2 = () => {
  const committees = [
    {
      id: "disec",
      name: "DISEC",
      fullName: "Disarmament & International Security Committee",
      logo: "/img/DISEC.png",
      agenda: "Evaluating the Impact of Autonomous Weapon Systems on Global Security and Peace, with Special Reference to the Middle East",
      type: "UNGA Committee",
    },
    {
      id: "g20",
      name: "G20",
      fullName: "Group of Twenty Summit",
      logo: "/img/G20no-bg.png",
      agenda: "Addressing rising protectionism: balancing global trade and tariffs",
      type: "Economic Summit",
    },
  ];

  return (
    <div className="section-dark">
      {/* Banner / Hero Section with Video/Image Background */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-center py-5"
        style={{ minHeight: "85vh", overflow: "hidden" }}
      >
        <div className="video-background position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
          <video autoPlay muted loop playsInline style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.35 }}>
            <source src="/img/Earth.mp4" type="video/mp4" />
          </video>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "radial-gradient(circle, rgba(18,20,23,0.6) 0%, rgba(18,20,23,0.95) 100%)",
            }}
          ></div>
        </div>

        <div className="container position-relative px-4" style={{ zIndex: 2 }}>
          <div className="d-flex justify-content-center align-items-center gap-3 gap-md-4 mb-4 flex-wrap">
            <img
              src="/img/MUNSOCLOGO2-white.png"
              alt="DSU MUNSOC"
              style={{ maxHeight: "80px", maxWidth: "160px", objectFit: "contain", height: "auto" }}
            />
            <span style={{ color: "#D4AF37", fontSize: "1.2rem", fontWeight: "300" }} className="d-none d-sm-inline">|</span>
            <img
              src="/img/DISEC.png"
              alt="DISEC"
              style={{ maxHeight: "65px", maxWidth: "120px", objectFit: "contain", height: "auto" }}
            />
            <img
              src="/img/G20no-bg.png"
              alt="G20"
              style={{ maxHeight: "65px", maxWidth: "120px", objectFit: "contain", height: "auto" }}
            />
          </div>

          <span className="eyebrow-text mb-2">PAST INTRA-MUN EDITION ARCHIVE</span>

          <h1
            className="display-3 fw-bold mb-2"
            style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF", letterSpacing: "1px" }}
          >
            DSU COPE MUN (Edition II)
          </h1>

          <h4
            className="fst-italic mb-4"
            style={{ color: "#D4AF37", letterSpacing: "2px", textTransform: "uppercase" }}
          >
            "A Pass at the Infinite"
          </h4>

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mb-4 py-2">
            <div className="d-flex align-items-center gap-2" style={{ color: "#FFFFFF", fontWeight: "600" }}>
              <Calendar size={18} style={{ color: "#D4AF37" }} />
              <span>Concluded Event</span>
            </div>
            <span style={{ color: "rgba(255,255,255,0.2)" }} className="d-none d-sm-inline">•</span>
            <div className="d-flex align-items-center gap-2" style={{ color: "#FFFFFF", fontWeight: "600" }}>
              <Award size={18} style={{ color: "#D4AF37" }} />
              <span>Prize Pool: Rs. 18,000+</span>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center flex-wrap gap-3">
            <div
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded"
              style={{ backgroundColor: "rgba(212, 175, 55, 0.15)", border: "1px solid #D4AF37", color: "#D4AF37", fontSize: "0.9rem" }}
            >
              <ShieldCheck size={18} />
              <span>Event Concluded</span>
            </div>
            <Link to="/cope2/executive-board" className="btn-outline-gold text-decoration-none">
              View Executive Board Archive
              <Users size={16} className="ms-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About COPE Edition II Section */}
      <section className="py-5 section-charcoal">
        <div className="container px-4">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="custom-card p-4 p-md-5">
                <div className="text-center mb-4">
                  <span className="eyebrow-text">CONFERENCE ARCHIVE OVERVIEW</span>
                  <h2 className="display-6 fw-bold" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                    COPE Edition II: The Conference of Public Exchange
                  </h2>
                  <div className="gold-separator"></div>
                </div>

                <p className="lead text-justify" style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
                  MUNSOC hosted <strong>DSU COPE MUN Edition II</strong> under the theme <em>"A Pass at the Infinite"</em>. This edition featured two dynamic committees: the United Nations General Assembly - DISEC and the Group of 20, where participants engaged in timely discussions on pressing global issues with an exciting prize pool of <strong>Rs. 18,000+</strong>.
                </p>

                <p className="text-justify mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8" }}>
                  Infused with MUNSOC's core values, DSU COPE MUN Edition II fostered dialogue, critical thinking, and leadership, providing a platform for students to voice their perspectives on matters shaping both our nation and the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Showcase with Horizontal Scroll */}
      <section className="py-5 section-dark">
        <div className="container px-4">
          <div className="text-center mb-4">
            <span className="eyebrow-text">COMMITTEE ARCHIVES</span>
            <h2 className="display-6 fw-bold" style={{ color: "#FFFFFF" }}>
              Edition II Committees & Agendas
            </h2>
            <div className="gold-separator"></div>
          </div>

          <HorizontalScrollCards title="Archived Committees" subtitle="COPE II">
            {committees.map((comm) => (
              <div
                key={comm.id}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "380px", minHeight: "320px" }}
              >
                <div>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <span className="subtle-tag">{comm.type}</span>
                    <img src={comm.logo} alt={comm.name} style={{ maxHeight: "50px", maxWidth: "100px", objectFit: "contain" }} />
                  </div>
                  <h3 className="h4 fw-bold mb-1" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    {comm.name}
                  </h3>
                  <small style={{ color: "#9DA5B4", display: "block", marginBottom: "14px" }}>
                    {comm.fullName}
                  </small>

                  <div className="agenda-block">
                    <span className="agenda-label">Historical Agenda</span>
                    <p className="agenda-text">
                      "{comm.agenda}"
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-top border-secondary text-center">
                  <span style={{ color: "#9DA5B4", fontSize: "0.82rem" }}>Concluded Edition</span>
                </div>
              </div>
            ))}
          </HorizontalScrollCards>
        </div>
      </section>

      {/* Prize Pool Display */}
      <section className="py-5 section-charcoal text-center border-top border-bottom border-secondary">
        <div className="container px-4">
          <span className="eyebrow-text">HISTORICAL REWARDS</span>
          <h2 className="display-4 fw-bold gold-text mb-2">
            PRIZE POOL: Rs. 18,000+
          </h2>
          <p style={{ color: "#9DA5B4" }}>
            Awarded across Best Delegate, High Commendation, Special Mention, and Best School/Institutional Delegations.
          </p>
        </div>
      </section>

      {/* Event Poster & Information */}
      <section className="py-5 section-dark">
        <div className="container px-4">
          <div className="custom-card p-4 p-md-5">
            <div className="row align-items-center g-4">
              <div className="col-12 col-lg-5 text-center">
                <div className="p-2 bg-dark rounded d-inline-block" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                  <img
                    src="/img/dsu_cope_mun_poster.jpg"
                    alt="DSU COPE MUN Edition II Poster"
                    className="img-fluid rounded"
                    style={{ maxHeight: "480px", objectFit: "contain" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/poster.jpeg";
                    }}
                  />
                </div>
              </div>

              <div className="col-12 col-lg-7">
                <span className="eyebrow-text">EDITION ARCHIVE</span>
                <h3 className="h2 fw-bold mb-2" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  DSU COPE MUN Edition II
                </h3>
                <p style={{ color: "#9DA5B4", marginBottom: "20px" }}>
                  This conference has concluded. Check our home page for active current events like COPE 3!
                </p>

                <div className="my-4">
                  <Link to="/cope3" className="btn-gold text-decoration-none px-4 py-3">
                    View Current Active Event (COPE 3)
                  </Link>
                </div>

                <div className="pt-3 border-top border-secondary">
                  <span className="agenda-label">Contact Secretariat:</span>
                  <div className="d-flex flex-column gap-2 mt-2" style={{ fontSize: "0.92rem", color: "#CBD5E1" }}>
                    <div className="d-flex align-items-center gap-2">
                      <Mail size={16} style={{ color: "#D4AF37" }} />
                      <span>Email:</span>
                      <a href="mailto:dsumunsoc@gmail.com" style={{ color: "#D4AF37" }} className="text-decoration-underline">
                        dsumunsoc@gmail.com
                      </a>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <MapPin size={16} style={{ color: "#D4AF37" }} />
                      <span>Location:</span>
                      <span>Dayananda Sagar University, Bangalore</span>
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

export default Cope2;
