import React from "react";
import { BookOpen, ExternalLink } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Dsumun1 = () => {
  const committees = [
    {
      title: "UNSC",
      fullName: "United Nations Security Council",
      image: "/img/UNSC2.png",
      agenda: "Turkey's Aggression in Syria and Iraq",
    },
    {
      title: "DISEC",
      fullName: "Disarmament & International Security Committee",
      image: "/img/DISEC2.png",
      agenda: "Cyber Crime Threats During Elections",
    },
    {
      title: "WHO",
      fullName: "World Health Organization",
      image: "/img/WHO2.png",
      agenda: "Patent Pooling for Medicines",
    },
    {
      title: "Lok Sabha",
      fullName: "House of the People - Indian Parliament",
      image: "/img/LokSabha2.png",
      agenda: "Manipur Ethnic Violence",
    },
  ];

  const galleryImages = [
    "/img/DsuMun1.jpg",
    "/img/DsuMun2.jpg",
    "/img/DsuMun3.jpg",
    "/img/DsuMun4.jpg",
    "/img/DsuMun5.jpg",
    "/img/DsuMun6.jpg",
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">INAUGURAL EDITION ARCHIVE</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            DSUMUN Edition I
          </h1>
          <div className="gold-separator"></div>
        </div>

        {/* About Section */}
        <div className="custom-card p-4 p-md-5 mb-5">
          <h3 className="fw-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
            About DSUMUN Edition I
          </h3>
          <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
            Our inaugural Model UN Conference, DSUMUN Edition 1, extended a warm invitation to both seasoned delegates and newcomers alike. Against the backdrop of contemporary global events, we addressed urgent issues across four dynamic committees: UNSC, DISEC, Lok Sabha, and WHO with unwavering dedication and conscientiousness.
          </p>
          <p className="mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8" }}>
            MUN simulations engage thousands of students each year in developing public speaking, writing, and research skills. They act as a vital entry point into international affairs: fostering empathy, championing human dignity, and promoting global progress.
          </p>
        </div>

        {/* Prize Pool */}
        <div className="text-center py-4 mb-5 p-4 rounded" style={{ backgroundColor: "#1A1D22", border: "1px solid rgba(255,255,255,0.08)" }}>
          <span className="eyebrow-text">INAUGURAL PRIZE POOL</span>
          <h2 className="display-4 fw-bold gold-text mb-0">
            Rs. 25,000+
          </h2>
        </div>

        {/* Committees Horizontal Scroll */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <span className="eyebrow-text">4 INAUGURAL COMMITTEES</span>
            <h2 className="fw-bold h2" style={{ color: "#FFFFFF" }}>
              Edition I Committees & Agendas
            </h2>
          </div>

          <HorizontalScrollCards title="Committees Showcase" subtitle="DSUMUN I">
            {committees.map((comm, idx) => (
              <div
                key={idx}
                className="custom-card flex-shrink-0 p-4 d-flex flex-column justify-content-between"
                style={{ width: "340px", minHeight: "350px" }}
              >
                <div>
                  <div className="text-center mb-3">
                    <img src={comm.image} alt={comm.title} height="60" style={{ objectFit: "contain" }} />
                  </div>
                  <h3 className="h4 fw-bold text-center mb-1" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                    {comm.title}
                  </h3>
                  <small style={{ color: "#9DA5B4", display: "block", textAlign: "center", marginBottom: "16px" }}>
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

        {/* Background Guides Link */}
        <div className="text-center py-4 mb-5 p-4 rounded" style={{ backgroundColor: "#1A1D22", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <h4 className="fw-bold mb-2" style={{ color: "#FFFFFF" }}>Background Guides Archive</h4>
          <p style={{ color: "#9DA5B4", marginBottom: "16px" }}>
            Access historical study guides prepared for DSUMUN Edition I.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1wwkfdTZe2HdV3tcoynGPf5eH_HKYro51?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-decoration-none px-4 py-2"
          >
            <BookOpen size={16} className="me-2" />
            View Background Guides
            <ExternalLink size={14} className="ms-2" />
          </a>
        </div>

        {/* Gallery Horizontal Scroll */}
        <div>
          <div className="text-center mb-4">
            <span className="eyebrow-text">CONFERENCE GALLERY</span>
            <h2 className="fw-bold h2" style={{ color: "#FFFFFF" }}>
              Edition I Photo Highlights
            </h2>
          </div>

          <HorizontalScrollCards title="Event Highlights" subtitle="PHOTO GALLERY">
            {galleryImages.map((imgSrc, idx) => (
              <div
                key={idx}
                className="custom-card flex-shrink-0 overflow-hidden"
                style={{ width: "320px", height: "240px" }}
              >
                <img
                  src={imgSrc}
                  alt={`DSUMUN Edition I Photo ${idx + 1}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </HorizontalScrollCards>
        </div>
      </div>
    </div>
  );
};

export default Dsumun1;
