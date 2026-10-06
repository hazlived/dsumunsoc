import React from "react";
import { Users, Award, ExternalLink } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";

const Cope2Eb = () => {
  const ebData = [
    {
      committee: "G20",
      fullName: "Group of Twenty Summit",
      logo: "/img/G20no-bg.png",
      agenda: "Addressing rising protectionism: balancing global trade and tariffs",
      members: [
        {
          name: "Shashwat Saini",
          role: "Chairperson",
          image: "/img/shashwatsaini.jpeg",
          fallbackImg: "/img/shashwatsaini.jpg",
        },
        {
          name: "Aditya Nellithaya",
          role: "Vice Chairperson",
          image: "/img/Eb/G20VCP.jpg",
          fallbackImg: "/img/adityan.jpg",
        },
        {
          name: "Arnav Rao",
          role: "Rapporteur",
          image: "/img/Eb/g20rapp .jpg",
          fallbackImg: "/img/assket.jpg",
        },
      ],
    },
    {
      committee: "DISEC",
      fullName: "Disarmament & International Security Committee",
      logo: "/img/DISEC.png",
      agenda: "Evaluating the Impact of Autonomous Weapon Systems on Global Security and Peace, with Special Reference to the Middle East",
      members: [
        {
          name: "Venkat Nivas Reddy K",
          role: "Chairperson",
          image: "/img/Eb/DISEC ChairPerson.jpg",
          fallbackImg: "/img/suraj.jpg",
        },
        {
          name: "Vijayalakshmi K.",
          role: "Co-Vice Chairperson",
          image: "/img/VijayalakshmiK.jpg",
          fallbackImg: "/img/VijayalakshmiK.jpg",
        },
        {
          name: "Lakshmi Shree",
          role: "Co-Vice Chairperson",
          image: "/img/Eb/DISECVC.jpg",
          fallbackImg: "/img/Thanushree.JPG",
        },
      ],
    },
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">EXECUTIVE BOARD</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            COPE II Executive Board
          </h1>
          <div className="gold-separator"></div>
          <p className="mx-auto" style={{ maxWidth: "650px", color: "#9DA5B4" }}>
            Guiding debates, evaluating diplomatic precision, and ensuring rigorous compliance with Model UN procedures.
          </p>
        </div>

        {/* Committees Loop */}
        {ebData.map((item, idx) => (
          <div key={idx} className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
              <img src={item.logo} alt={item.committee} height="48" style={{ objectFit: "contain" }} />
              <div>
                <h2 className="fw-bold mb-0" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif" }}>
                  {item.committee} Executive Board
                </h2>
                <small style={{ color: "#9DA5B4" }}>{item.fullName}</small>
              </div>
            </div>

            {/* Clean agenda block without left stripe */}
            <div className="agenda-block mb-4">
              <span className="agenda-label">Committee Agenda:</span>
              <p className="agenda-text mb-0">
                "{item.agenda}"
              </p>
            </div>

            {/* Horizontal Scroll Cards for EB Members */}
            <HorizontalScrollCards title={`${item.committee} Board Members`} subtitle="DISTINGUISHED CHAIRS">
              {item.members.map((member, mIdx) => (
                <div
                  key={mIdx}
                  className="custom-card flex-shrink-0 p-3 text-center d-flex flex-column justify-content-between"
                  style={{ width: "270px", minHeight: "350px" }}
                >
                  <div className="overflow-hidden rounded mb-3" style={{ height: "230px", backgroundColor: "#121417" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = member.fallbackImg;
                      }}
                    />
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: "#FFFFFF" }}>
                      {member.name}
                    </h5>
                    <span className="subtle-tag">{member.role}</span>
                  </div>
                </div>
              ))}
            </HorizontalScrollCards>
          </div>
        ))}

        {/* Call to action */}
        <div className="text-center py-4 my-4 p-4 rounded" style={{ backgroundColor: "#1A1D22", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <h3 className="fw-bold mb-2" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
            Ready to Debate Under Their Guidance?
          </h3>
          <p style={{ color: "#9DA5B4", marginBottom: "20px" }}>
            Register now for DSU COPE MUN to represent your country in DISEC or G20.
          </p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-decoration-none px-4 py-2"
          >
            Register Now
            <ExternalLink size={16} className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cope2Eb;
