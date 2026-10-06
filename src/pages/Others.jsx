import React from "react";
import { UserCheck } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Others = () => {
  const images = [
    "/img/carouselinaugral1.jpeg",
    "/img/carouselinaugral2.jpeg",
    "/img/carouselinaugral3.jpeg",
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">DIPLOMACY WORKSHOPS & SEMINARS</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            Diplomacy Seminars
          </h1>
          <div className="gold-separator"></div>
        </div>

        {/* Seminar Card */}
        <div className="custom-card p-4 p-md-5 mb-5">
          <span className="subtle-tag mb-2 d-inline-block">INAUGURAL LECTURE</span>

          <h2 className="display-6 fw-bold mb-3" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
            Seminar on 'Dive Into Diplomacy'
          </h2>

          <div className="agenda-block mb-4">
            <span className="agenda-label">Chief Guest & Speaker:</span>
            <p className="agenda-text font-bold mb-0">
              Mr. Pavan, M.A. (Political Science), LL.B., LLM. (Ph.D.)
            </p>
          </div>

          <p style={{ color: "#CBD5E1", lineHeight: "1.8" }}>
            MUNSOC is proud to announce its inaugural event, a seminar on diplomacy. Our chief guest, Mr. Pavan, spoke to the students about the various practices under law and their applications in our day to day lives.
          </p>

          <p className="mb-0" style={{ color: "#9DA5B4", lineHeight: "1.8" }}>
            The talk later revolved around international law and the UN; its various organs and agencies, and ultimately came full circle with the ins and outs of a Model United Nations conference.
          </p>
        </div>

        {/* Horizontal Scroll Photo Gallery */}
        <div>
          <div className="text-center mb-4">
            <span className="eyebrow-text">SEMINAR HIGHLIGHTS</span>
            <h2 className="fw-bold h2" style={{ color: "#FFFFFF" }}>
              Inaugural Event Photos
            </h2>
          </div>

          <HorizontalScrollCards title="Seminar Photo Gallery" subtitle="DIVE INTO DIPLOMACY">
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className="custom-card flex-shrink-0 overflow-hidden"
                style={{ width: "360px", height: "260px" }}
              >
                <img
                  src={imgSrc}
                  alt={`Seminar photo ${idx + 1}`}
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

export default Others;
