import React from "react";
import HorizontalScrollCards from "../components/HorizontalScrollCards";

const Secretariat = () => {
  const secretariatSections = [
    {
      title: "Executive Directorate",
      department: "EXECUTIVE",
      members: [
        { name: "Shashwat Saini", role: "Secretary General", img: "/img/shashwatsaini.jpg" },
        { name: "Suraj S.", role: "Director General", img: "/img/suraj.jpg" },
        { name: "Aditya N.", role: "Charge d'affaires", img: "/img/adityan.jpg" },
      ],
    },
    {
      title: "Outreach & Public Relations",
      department: "OUTREACH",
      members: [
        { name: "Vijayalakshmi K", role: "Head of Outreach", img: "/img/VijayalakshmiK.jpg" },
        { name: "Akash A. Nair", role: "Under-Secretary-General: Outreach", img: "/img/fatman.jpg" },
        { name: "Thanushree", role: "Under-Secretary-General: Outreach", img: "/img/Thanushree.JPG" },
      ],
    },
    {
      title: "Graphics & Technicals",
      department: "TECHNOLOGY & MEDIA",
      members: [
        { name: "Uddhav Bhat", role: "Head of Technicals", img: "/img/uddhavN.jpg" },
        { name: "Akshay M. Davanageri", role: "Head of Graphics", img: "/img/assket.jpg" },
        { name: "Sunaina Mohapatra", role: "Under-Secretary-General: Graphics", img: "/img/SunainaMohapatra.jpg" },
      ],
    },
    {
      title: "Socials & Community Engagement",
      department: "SOCIAL MEDIA",
      members: [
        { name: "Purab Mohit Jha", role: "Under-Secretary-General: Socials", img: "/img/Purab Mohit Jha.jpg" },
        { name: "Rudra Dubey", role: "Under-Secretary-General: Socials", img: "/img/Rudra Dubey.JPG" },
      ],
    },
    {
      title: "Finance & Treasury",
      department: "FINANCE",
      members: [
        { name: "Aditya Bidappa", role: "Under-Secretary-General: Finance", img: "/img/biddapa_aditya.jpg" },
        { name: "Snehalini Dutta", role: "Under-Secretary-General: Finance", img: "/img/SnehaliniDutta.jpg" },
      ],
    },
    {
      title: "Delegate Affairs",
      department: "DELEGATE RELATIONS",
      members: [
        { name: "Anudeep B. J.", role: "Under-Secretary-General: Delegate Affairs", img: "/img/anudeepbj.jpg" },
        { name: "K Sai Suchith", role: "Under-Secretary-General: Delegate Affairs", img: "/img/K Sai Suchith.JPG" },
      ],
    },
    {
      title: "Documentation & Archives",
      department: "DOCUMENTATION",
      members: [
        { name: "Clifford Thiyam", role: "Under-Secretary-General: Documentation", img: "/img/Clifford.jpg" },
      ],
    },
    {
      title: "Sponsorships & Partnerships",
      department: "SPONSORSHIPS",
      members: [
        { name: "Devesh M.", role: "Under-Secretary-General: Sponsorships", img: "/img/devesh.jpg" },
      ],
    },
  ];

  return (
    <div className="section-dark py-5">
      <div className="container px-4 mt-4">
        {/* Banner */}
        <div className="text-center mb-5">
          <span className="eyebrow-text">LEADERSHIP & ADMINISTRATION</span>
          <h1 className="display-4 fw-bold" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
            The Secretariat
          </h1>
          <div className="gold-separator"></div>
          <p className="mx-auto" style={{ maxWidth: "650px", color: "#9DA5B4" }}>
            Meet the dedicated student leaders orchestrating conferences, delegations, outreach, and technical operations at DSU MUNSOC.
          </p>
        </div>

        {/* Secretariat Departments Loop */}
        {secretariatSections.map((sec, sIdx) => (
          <div key={sIdx} className="mb-5">
            <div className="d-flex align-items-center justify-content-between mb-3 border-bottom border-secondary pb-2">
              <div>
                <span className="eyebrow-text mb-1">{sec.department}</span>
                <h3 className="h3 fw-bold mb-0" style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif" }}>
                  {sec.title}
                </h3>
              </div>
            </div>

            <HorizontalScrollCards title={`${sec.title} Team`} subtitle={sec.department}>
              {sec.members.map((member, mIdx) => (
                <div
                  key={mIdx}
                  className="custom-card flex-shrink-0 p-3 text-center d-flex flex-column justify-content-between"
                  style={{ width: "270px", minHeight: "350px" }}
                >
                  <div className="overflow-hidden rounded mb-3" style={{ height: "230px", backgroundColor: "#181A1D" }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-100 h-100"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(member.name) + "&background=202329&color=D4AF37&size=300";
                      }}
                    />
                  </div>

                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: "#FFFFFF", fontSize: "1.05rem" }}>
                      {member.name}
                    </h5>
                    <span className="subtle-tag" style={{ fontSize: "0.75rem" }}>
                      {member.role.replace("Under-Secretary-General:", "USG:")}
                    </span>
                  </div>
                </div>
              ))}
            </HorizontalScrollCards>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Secretariat;
