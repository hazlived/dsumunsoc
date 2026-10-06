import React from "react";
import { Calendar } from "lucide-react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Delegation = () => {
  const delegations = [
    {
      title: "BITSMUN'24 at BITS Pilani, Goa Campus",
      date: "February 16th - 18th, 2024",
      location: "BITS Pilani, Goa",
      description:
        "MUNSOC takes great pride in highlighting its esteemed participation at BITSMUN’24, hosted by the Birla Institute of Technology & Science, Goa. This marked a significant milestone for our society as we delved into the world of diplomacy, faced intense competition, and forged enduring memories.",
      images: ["/img/carouselbits1.jpeg", "/img/carouselbits2.jpg"],
    },
    {
      title: "Unicon'24 at PES University Electronic City Campus",
      date: "March 8th & 9th, 2024",
      location: "PES University Electronic City",
      description:
        "MUNSOC takes great pride in announcing the triumphant participation of its delegation at Unicon’24. Boasting an expansive representation across five committees, our delegation emerged as one of the largest on campus, leaving an indelible mark in every session.",
      images: ["/img/carouselpes1.jpeg", "/img/carouselpes2.jpeg"],
    },
    {
      title: "Pecon '24 by PES MUN Society & PES University",
      date: "2024 Edition",
      location: "PES University, Bangalore",
      description:
        "Representing the largest delegation in our society's history, we had a strong presence across all committees with eighteen delegates participating.",
      delegates: [
        "Aditya Bidappa M.V.", "Akash Nair A. Nair", "Arjit Kulkarni", "Anaga Balakrishna",
        "Anudeep B.J.", "Ateendra Girish", "Bibi K. Kubra", "B.N. Jayesh", "Clifford T.",
        "K. Sai Suchith", "Lakshmi V.", "Shashwat Saini", "Srijita Choudhury", "Suraj S.",
        "Thanushree B.R.", "Venkat Nivas Reddy K.", "Vijayalakshmi Iyer", "Yash Choudhary"
      ],
      images: ["/img/Peacon5.jpg", "/img/Peacon1.jpg"],
    },
    {
      title: "DSIMUN 3.0 at Dayananda Sagar College of Engineering",
      date: "2024 Edition",
      location: "DSCE, Bangalore",
      description:
        "Our delegation engaged in insightful discussions across all three committees. Special commendation is extended to Head Delegate Vijayalakshmi Iyer for her exceptional contributions in DISEC, earning a Verbal Mention.",
      delegates: [
        "Aditya Bidappa", "Lakshmi V.", "Lakshmi Shree C.", "Venkat Nivas Reddy", "Vinuraj Vamshi", "Vijayalakshmi Iyer (Head Delegate - Verbal Mention)"
      ],
      images: ["/img/DSIMUN1.jpg", "/img/DSIMUN2.jpg"],
    },
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">INTER-COLLEGIATE EXCELLENCE</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            MUNSOC Delegations
          </h1>
          <div className="gold-separator"></div>
          <p className="mx-auto" style={{ maxWidth: "650px", color: "#9DA5B4" }}>
            Representing Dayananda Sagar University across prestigious national Model UN conferences.
          </p>
        </div>

        {/* Delegations Loop */}
        {delegations.map((item, idx) => (
          <div key={idx} className="custom-card p-4 p-md-5 mb-5">
            <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap gap-2">
              <div>
                <span className="subtle-tag mb-2 d-inline-block">{item.location}</span>
                <h3 className="h3 fw-bold mb-1" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  {item.title}
                </h3>
              </div>
              <div className="d-flex align-items-center gap-2" style={{ color: "#D4AF37", fontSize: "0.88rem" }}>
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
            </div>

            <p style={{ color: "#CBD5E1", lineHeight: "1.7" }}>{item.description}</p>

            {item.delegates && (
              <div className="p-3 rounded mb-4" style={{ backgroundColor: "#181A1D", border: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <span className="agenda-label mb-2" style={{ fontSize: "0.78rem" }}>DELEGATION MEMBERS:</span>
                <div className="d-flex flex-wrap gap-2">
                  {item.delegates.map((d, dIdx) => (
                    <span key={dIdx} className="subtle-tag-dark" style={{ fontSize: "0.8rem", color: "#E2E8F0" }}>
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Horizontal Scroll Cards for Delegation Photos */}
            <HorizontalScrollCards title="Delegation Gallery" subtitle="OFFICIAL MOMENTS">
              {item.images.map((imgSrc, imgIdx) => (
                <div
                  key={imgIdx}
                  className="custom-card flex-shrink-0 overflow-hidden"
                  style={{ width: "360px", height: "260px" }}
                >
                  <img
                    src={imgSrc}
                    alt={`${item.title} photo ${imgIdx + 1}`}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </HorizontalScrollCards>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delegation;
