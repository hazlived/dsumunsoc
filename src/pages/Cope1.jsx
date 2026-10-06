import React from "react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Cope1 = () => {
  const images = [
    "/img/COPE1pic2.jpg",
    "/img/COPE1pic1.jpg",
    "/img/COPE1pic3.jpg",
    "/img/COPE1pic4.jpg",
    "/img/COPE1pic5.jpg",
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">INTRA-COLLEGIATE ARCHIVE</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            COPE Edition I: Conference of Public Exchange
          </h1>
          <div className="gold-separator"></div>
        </div>

        {/* About Section */}
        <div className="custom-card p-4 p-md-5 mb-5">
          <h3 className="fw-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
            About COPE Edition I
          </h3>
          <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
            MUNSOC proudly unveils the triumph of COPE Edition I, the Conference of Public Exchange: an intra-collegiate debate competition held on <strong>March 22nd & 23rd, 2024</strong>. Across three dynamic committees: the Vidhan Soudha, the Lok Sabha, and the United Nations General Assembly, participants immersed themselves in timely discussions, delving into issues shaping both our nation and the global landscape.
          </p>
          <p className="mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8" }}>
            Infused with our society's core values of diplomacy, constructive discourse, and leadership, COPE Edition I emerged as an unequivocal success on multiple fronts.
          </p>
        </div>

        {/* Gallery Horizontal Scroll Showcase */}
        <div>
          <div className="text-center mb-4">
            <span className="eyebrow-text">CONFERENCE GALLERY</span>
            <h2 className="fw-bold h2" style={{ color: "#FFFFFF" }}>
              COPE Edition I Moments
            </h2>
          </div>

          <HorizontalScrollCards title="Event Photo Gallery" subtitle="COPE EDITION I">
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="custom-card flex-shrink-0 overflow-hidden"
                style={{ width: "360px", height: "260px" }}
              >
                <img
                  src={imgSrc}
                  alt={`COPE Edition I Photo ${idx + 1}`}
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

export default Cope1;
