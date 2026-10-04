import React from "react";
import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import "../../style/eb.css";

const Cope2Eb = () => {
    // Committee data for COPE-II
    const committeeNames = ["G20", "DISEC"];
    const agendas = [
        "Addressing rising protectionism: balancing global trade and tariffs",
        "Evaluating the Impact of Autonomous Weapon Systems on Global Security and Peace, with Special Reference to the Middle East"
    ];
    const images = [
        "/img/G20Logo.png",
        "/img/DISEC.png"
    ];

    // Executive Board images
    const ebImages = [
        "/img/shashwatsaini.jpeg",
        "/img/Eb/G20VCP.jpg",
        "/img/Eb/g20rapp .jpg",
        "/img/Eb/DISEC ChairPerson.jpg",
        "/img/VijayalakshmiK.jpg",
        "/img/Eb/DISECVC.jpg",
    ];

    // Names of Executive Board members
    const names = [
        "Shashwat Saini", "Aditya Nellithaya", "Arnav Rao",
        "Venkat Nivas Reddy K", "Vijayalakshmi K.",  "Lakshmi Shree",
    ];

    // Role mappings for each committee
    const rolesMap = {
        G20: ["Chairperson", "Vice Chairperson", "Rapporteur"],
        DISEC: ["Chairperson", "Co-Vice Chairperson", "Co-Vice Chairperson"]
    };

    const defaultRoles = ["Chairperson", "Vice Chairperson", "Rapporteur"];

    let ebImageIndex = 0; // Counter for unique images

    return (
        <>
            <Nav />
            <div className="container-fluid p-0">
                {/* Header Section with proper navbar clearance and uniform spacing */}
                <div className="row text-center">
                    <div
                        className="eb-header"
                        style={{ margin: "8rem 0 8rem 0" }}
                    >
                        <h1
                            style={{
                                fontFamily: "museo",
                                fontSize: "50px",
                                marginBottom: "-50px",
                                marginTop: "20px",
                            }}
                        >
                            COPE-II Executive Board
                        </h1>
                    </div>
                </div>

                {/* Main Content with reasonable spacing */}
                <div className="container-lg" style={{ padding: "0 2rem" }}>
                    {committeeNames.map((committee, index) => (
                        <div
                            className="row text-center eb-row"
                            key={index}
                            style={{ marginBottom: "4rem" }}
                        >
                            {/* Mobile View: Title Above EB Cards */}
                            <div
                                className="d-block d-lg-none col-12 d-flex flex-column align-items-center justify-content-center"
                                style={{ marginBottom: "2rem" }}
                            >
                                <h4
                                    className="mobile-committee-title"
                                    style={{
                                        fontFamily: "museo",
                                        fontSize: "30px",
                                    }}
                                >
                                    {committee}
                                </h4>
                            </div>
                            {/* Left side - Committee Card (Hidden in Mobile) */}
                            <div
                                className="col-5 d-none d-lg-flex justify-content-center committee-col-eb"
                                style={{ padding: "2rem" }}
                            >
                                <div
                                    className={`card dsumun2-card-eb dsumun2-${committee}-eb`}
                                >
                                    <div className="card-inner-eb">
                                        <div className="card-front-eb text-center">
                                            <img
                                                src={images[index]}
                                                className="img-fluid card-img-comittee-eb"
                                                alt={committee}
                                            />
                                            <h4
                                                className="card-title-eb"
                                                style={{
                                                    fontFamily: "museo",
                                                    fontSize: "30px",
                                                }}
                                            >
                                                {committee}
                                            </h4>
                                        </div>
                                        <div className="card-back-eb text-center">
                                            <h1
                                                className="agenda-title-eb"
                                                style={{
                                                    fontFamily: "museo",
                                                    fontSize: "50px",
                                                }}
                                            >
                                                {committee === "G20"
                                                    ? "Special Committee"
                                                    : "Agenda"}
                                            </h1>
                                            <h2
                                                className="agenda-text-eb"
                                                style={{
                                                    fontFamily: "museo",
                                                    fontSize: "30px",
                                                }}
                                            >
                                                {agendas[index] || ""}
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right side - Individual EB Member Cards */}
                            <div
                                className="col-12 col-lg-7 d-flex justify-content-center"
                                style={{ padding: "2rem" }}
                            >
                                <div className="eb-members-container">
                                    {(
                                        rolesMap[committee] || [...defaultRoles]
                                    ).map((role, i) => {
                                        const ebImage =
                                            ebImages[ebImageIndex] ||
                                            "https://ui-avatars.com/api/?name=EB&background=9ca3af&color=ffffff&size=400&format=png"; // Fallback
                                        const name =
                                            names[ebImageIndex] || "TBA";
                                        ebImageIndex++; // Ensure unique images
                                        return (
                                            <div
                                                key={i}
                                                className={`eb-member-card text-center ${
                                                    i === 2 ? "third-card" : ""
                                                }`}
                                            >
                                                <div className="eb-overlay">
                                                    <p className="eb-name">
                                                        {name}
                                                    </p>
                                                </div>
                                                <img
                                                    src={ebImage}
                                                    alt={role}
                                                    className="eb-member-card-img"
                                                    loading="lazy"
                                                />
                                                <h5 className="eb-role">
                                                    {role}
                                                </h5>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Separator with consistent spacing */}
                            {index < committeeNames.length - 1 && (
                                <div
                                    className="col-12 text-center"
                                    style={{ margin: "3rem 0" }}
                                >
                                    <img
                                        src="/img/separator2.png"
                                        width="50px"
                                        height="50px"
                                        alt="separator"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom spacing */}
                <div style={{ marginBottom: "2rem" }}></div>
            </div>
            <Footer />
        </>
    );
};

export default Cope2Eb;
