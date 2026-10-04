import React, { useState } from "react";
import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import "../../style/cope.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX,
    faCalendarAlt,
    faTrophy,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

Modal.setAppElement("#root");

const images = ["/img/DISEC.png", "/img/G20Logo.png"];

// Committee data for COPE2
const committeeNames = ["DISEC", "G20"];
const committeeImages = ["/img/DISEC.png", "/img/G20no-bg.png"];
const agendas = [
    "Evaluating the Impact of Autonomous Weapon Systems on Global Security and Peace, with Special Reference to the Middle East",
    "Addressing rising protectionism: balancing global trade and tariffs",
];

const COPE2 = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [pdfUrl, setPdfUrl] = useState("");

    // helper to open PDF modal (keeps previous intent intact)
    const openPdf = (url = "") => {
        setPdfUrl(url);
        setIsOpen(true);
    };

    return (
        <>
            <Nav />

            <div className="container-fluid p-0">
                <div
                    className="cope2-Banner"
                    style={{
                        height: "100vh",
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* Video Background */}
                    <div className="video-background">
                        <video autoPlay muted loop playsInline>
                            <source src="/img/Earth.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-overlay"></div>
                    </div>

                    {/* Content Row */}
                    <div className="row content cope2-landing">
                        {/* Left side - Large Logo */}
                        <div className="col-6 left-logo d-flex flex-column align-items-center">
                            <div
                                className="dsumun2-home-img"
                                style={{ marginBottom: "40px" }}
                            >
                                <h2 className="cope-title" style={{ color: "#ffffff" }}>
                                    DSU COPE MUN
                                </h2>
                                <h4 style={{ color: "#74C0FC", fontFamily: "museo", letterSpacing: "2px", textTransform: "uppercase", marginTop: "10px", fontStyle: "italic" }}>
                                    "A Pass at the Infinite"
                                </h4>
                                <div
                                    className="d-inline-flex justify-content-center align-items-center flex-wrap gap-3 gap-md-4 mt-4 px-4 py-2"
                                    style={{
                                        backgroundColor: "rgba(0, 24, 56, 0.5)",
                                        border: "1px solid rgba(116, 192, 252, 0.25)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <div className="d-flex align-items-center" style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "600" }}>
                                        <FontAwesomeIcon icon={faCalendarAlt} className="me-2" style={{ color: "#74C0FC" }} />
                                        <span>23rd - 24th October</span>
                                    </div>
                                    <div style={{ width: "1px", height: "18px", backgroundColor: "rgba(255, 255, 255, 0.3)" }} className="d-none d-sm-block"></div>
                                    <div className="d-flex align-items-center" style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "600" }}>
                                        <FontAwesomeIcon icon={faTrophy} className="me-2" style={{ color: "#74C0FC" }} />
                                        <span>Prize Pool: Rs. 18,000+</span>
                                    </div>
                                </div>
                            </div>

                            {/* Register Button - Desktop only */}
                            <div
                                className="register-btn-desktop"
                                style={{ marginTop: "20px" }}
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSefJLccrPOvyj62y2XOUEf2DcKMjCCXHyUiga3--k-pj9GiBw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-register"
                                    id="cope2-register-btn"
                                >
                                    Register Now
                                </a>
                            </div>
                        </div>

                        {/* Right side - Large Image (Stacked) */}
                        <div className="col-6 right-images d-flex flex-column align-items-center">
                            <img
                                src="/img/MUNSOCLOGO2-white.png"
                                alt="Top Image"
                                className="img-dsu img-fluid"
                            />
                            <div className="divider p-5">
                                <FontAwesomeIcon
                                    icon={faX}
                                    style={{ color: "#74C0FC" }}
                                />
                            </div>
                            <div
                                className="d-flex justify-content-center align-items-center flex-wrap"
                                style={{ gap: "2rem" }}
                            >
                                <img
                                    src="/img/DISEC.png"
                                    alt="DISEC Logo"
                                    className="img-org img-fluid"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        objectFit: "contain",
                                        padding: "10px",
                                    }}
                                />
                                <img
                                    src="/img/G20no-bg.png"
                                    alt="G20 Logo"
                                    className="img-org img-fluid"
                                    style={{
                                        width: "140px",
                                        height: "140px",
                                        objectFit: "contain",
                                        padding: "10px",
                                    }}
                                />
                            </div>

                            {/* Register Button - Mobile only */}
                            <div
                                className="register-btn-mobile"
                                style={{ marginTop: "30px" }}
                            >
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSefJLccrPOvyj62y2XOUEf2DcKMjCCXHyUiga3--k-pj9GiBw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-register"
                                    id="cope2-register-btn-mobile"
                                >
                                    Register
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: "5%" }}>
                    <div
                        className="row cope-about-container"
                        style={{ marginBottom: "2rem" }}
                    >
                        <div
                            className="col-12 text-center"
                            style={{ marginBottom: "1.5rem" }}
                        >
                            <h1 className="cope-title">
                                COPE Edition II: The Conference of Public
                                Exchange
                            </h1>
                        </div>
                        <br />
                        <div className="cope-cardy col-12 content text-center mt-6">
                            <br />
                            <br />
                            <div
                                className="card cope-about-card mx-auto"
                                style={{
                                    width: "90%",
                                    maxWidth: "900px",
                                    position: "relative",
                                    bottom: "100px",
                                }}
                            >
                                <div
                                    className="cope-card-body"
                                    style={{ padding: "1.5rem 1rem" }}
                                >
                                    <p
                                        className="cope-card-text"
                                        style={{
                                            textAlign: "justify",
                                            lineHeight: "1.6",
                                            fontSize: "1.1rem",
                                            margin: "0",
                                            color: "#333",
                                        }}
                                    >
                                        MUNSOC is proud to announce <strong>DSU COPE MUN</strong> under the theme <em>"A Pass at the Infinite"</em> - our premier intra-MUN conference held on <strong>23rd - 24th October</strong>. This edition features two dynamic committees: the United Nations General Assembly - DISEC and the Group of 20, where participants engage in timely discussions on pressing global issues with an exciting prize pool of <strong>Rs. 18,000+</strong>.
                                        <br />
                                        <br />
                                        Infused with MUNSOC's core values, DSU COPE MUN continues to foster dialogue, critical thinking, and leadership, providing a platform for students to voice their perspectives on matters shaping both our nation and the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "3rem" }}></div>

                <div className="committees-dsumun2">
                    <div
                        className="committee-dsumun2-header text-center"
                        style={{ marginBottom: "3rem" }}
                    >
                        <h1 className="committee-header display-5">
                            Our Committees
                        </h1>
                    </div>

                    {Array.from({ length: Math.ceil(images.length / 3) }).map(
                        (_, rowIndex) => (
                            <div
                                className="row justify-content-center"
                                key={rowIndex}
                            >
                                {[0, 1, 2].map((offset) => {
                                    const index = rowIndex * 3 + offset;
                                    if (index >= images.length) return null;

                                    const committeeName =
                                        committeeNames[index] ?? ""; // safe default
                                    const agendaText = agendas[index] ?? "";

                                    return (
                                        <div
                                            className={`col-lg-4 col-md-6 col-sm-10 col-12 d-flex justify-content-center dsumun2-${committeeName}`}
                                            key={index}
                                        >
                                            <div
                                                className={`card dsumun2-card dsumun2-${committeeName}`}
                                            >
                                                <div className="card-inner">
                                                    <div className="card-front text-center">
                                                        <img
                                                            src={images[index]}
                                                            className="img-fluid card-img-comittee"
                                                            alt={committeeName}
                                                        />
                                                        <h4
                                                            className="card-title"
                                                            style={{
                                                                fontFamily:
                                                                    "museo",
                                                                fontSize:
                                                                    "30px",
                                                                marginTop:
                                                                    "10px",
                                                            }}
                                                        >
                                                            {committeeName}
                                                        </h4>
                                                    </div>
                                                    <div className="card-back text-center">
                                                        <h1
                                                            className="agenda-title"
                                                            style={{
                                                                fontFamily:
                                                                    "museo",
                                                                fontSize:
                                                                    "50px",
                                                            }}
                                                        >
                                                            {committeeName ===
                                                            "G20"
                                                                ? "Agenda"
                                                                : "Agenda"}
                                                        </h1>
                                                        <h2 className="agenda-text">
                                                            {agendaText || ""}
                                                        </h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )
                    )}

                    <div className="committee-dsumun2-broucher text-center">
                        <Modal
                            isOpen={isOpen}
                            onRequestClose={() => setIsOpen(false)}
                            style={{
                                overlay: {
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                },
                                content: {
                                    width: "70%",
                                    height: "80%",
                                    margin: "auto",
                                },
                            }}
                        >
                            <button
                                style={{
                                    position: "absolute",
                                    right: "15px",
                                    top: "10px",
                                    padding: "5px 10px",
                                    border: "none",
                                    background: "red",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                                className="btn btn-warning"
                                onClick={() => setIsOpen(false)}
                            >
                                Close
                            </button>

                            <iframe
                                src={pdfUrl}
                                width="100%"
                                height="90%"
                                style={{ border: "none" }}
                                title="PDF Preview"
                            />
                        </Modal>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="container-md gallery-sep text-center">
                <img
                    src="/img/separator2.png"
                    width="50px"
                    height="50px"
                    alt="separator"
                />
            </div>
            <div className="container-fluid px-0 overflow-hidden mt-5">
                <div className="row text-center">
                    <div className="col-12 col-md-12 mx-auto">
                        <h1 className="dsumun2-prizepool-one text-nowrap w-100">
                            PRIZEPOOL
                        </h1>
                        <h1 className="dsumun2-prizepool-two text-nowrap w-100">
                            Rs. 18,000+
                        </h1>
                    </div>
                </div>
            </div>

            <br />
            <br />

            <div className="container-md gallery-sep text-center">
                <img
                    src="/img/separator2.png"
                    width="50px"
                    height="50px"
                    alt="separator"
                />
            </div>

            {/* EVENT POSTER & REGISTRATION SECTION */}
            <div className="container my-5">
                <div
                    className="p-4 p-md-5 rounded-3 shadow-lg"
                    style={{
                        backgroundColor: "#001838",
                        border: "1px solid rgba(116, 192, 252, 0.3)",
                    }}
                >
                    <h2
                        className="display-5 text-center mb-4"
                        style={{ fontFamily: "museo", color: "#ffffff" }}
                    >
                        Official Event Poster
                    </h2>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
                            <div className="p-2 bg-dark rounded shadow border border-secondary d-inline-block">
                                <img
                                    src="/img/dsu_cope_mun_poster.jpg"
                                    alt="DSU COPE MUN Poster"
                                    className="img-fluid rounded"
                                    style={{ maxHeight: "550px", objectFit: "contain" }}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-white text-lg-start px-md-4">
                            <h3 className="fw-bold mb-2" style={{ fontFamily: "museo", color: "#74C0FC" }}>
                                DSU COPE MUN
                            </h3>
                            <h5 className="fst-italic mb-4" style={{ color: "#b0d4ff" }}>
                                "A Pass at the Infinite"
                            </h5>

                            <div className="d-flex flex-column gap-3 mb-4">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-2 rounded" style={{ backgroundColor: "#00204A", color: "#74C0FC" }}>
                                        <FontAwesomeIcon icon={faCalendarAlt} className="fs-5" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "0.8rem", color: "#74C0FC", textTransform: "uppercase", fontWeight: "700" }}>Date</div>
                                        <div className="fs-6 fw-semibold" style={{ color: "#ffffff" }}>23rd - 24th October</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-2 rounded" style={{ backgroundColor: "#00204A", color: "#74C0FC" }}>
                                        <FontAwesomeIcon icon={faTrophy} className="fs-5" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "0.8rem", color: "#74C0FC", textTransform: "uppercase", fontWeight: "700" }}>Prize Pool</div>
                                        <div className="fs-6 fw-semibold" style={{ color: "#ffffff" }}>Rs. 18,000+</div>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    <div className="p-2 rounded" style={{ backgroundColor: "#00204A", color: "#74C0FC" }}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="fs-5" />
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "0.8rem", color: "#74C0FC", textTransform: "uppercase", fontWeight: "700" }}>Venue</div>
                                        <div className="fs-6 fw-semibold" style={{ color: "#ffffff" }}>Dayananda Sagar University</div>
                                    </div>
                                </div>
                            </div>

                            <div className="my-4">
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSefJLccrPOvyj62y2XOUEf2DcKMjCCXHyUiga3--k-pj9GiBw/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary btn-lg px-4 py-2 fw-bold text-white d-inline-flex align-items-center"
                                    style={{ borderRadius: "6px" }}
                                >
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" />
                                    Click Here to Register
                                </a>
                            </div>

                            <div
                                className="p-3 rounded mt-4"
                                style={{
                                    backgroundColor: "#00204A",
                                    border: "1px solid rgba(116, 192, 252, 0.3)",
                                }}
                            >
                                <h6 className="fw-bold mb-2" style={{ color: "#74C0FC" }}>
                                    For More Details Contact:
                                </h6>
                                <div className="d-flex align-items-center gap-2 mb-1">
                                    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#74C0FC" }} />
                                    <span style={{ color: "#ffffff" }}>Email:</span>
                                    <a href="mailto:dsumunsoc@gmail.com" style={{ color: "#74C0FC" }} className="text-decoration-underline">
                                        dsumunsoc@gmail.com
                                    </a>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <FontAwesomeIcon icon={faPhone} style={{ color: "#74C0FC" }} />
                                    <span style={{ color: "#ffffff" }}>Phone:</span>
                                    <a href="tel:+918618220160" style={{ color: "#74C0FC" }} className="text-decoration-underline">
                                        +91 86182 20160
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />

            {/* GALLERY SECTION */}
            {/* <div className="container cope-gallery">
                <div className="row text-center">
                    <h1 className='display-5' style={{ fontFamily: 'museo', fontWeight: "bold" }}>Gallery</h1>
                </div>

                <br />

                <div className="row text-center">
                    <div className="col-md-8">
                        <img className="gallery-img" src={images[0]} alt="First slide" onClick={() => setSelectedImage(images[0])} />
                    </div>
                    <div className="col-md-4">
                        <img className="gallery-img" src={images[1]} alt="Second slide" onClick={() => setSelectedImage(images[1])} />
                        <img className="gallery-img" src={images[2]} alt="Third slide" onClick={() => setSelectedImage(images[2])} />
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-md-6">
                        <img className="gallery-img" src={images[3]} alt="Fourth slide" onClick={() => setSelectedImage(images[3])} />
                    </div>
                    <div className="col-md-6">
                        <img className="gallery-img" src={images[4]} alt="Fifth slide" onClick={() => setSelectedImage(images[4])} />
                    </div>
                </div>
            </div>
 */}
            {/* MODAL FOR VIEWING IMAGES */}
            {/* {selectedImage && (
                <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Enlarged" className="modal-img" />
                        <button className="close-btn" onClick={() => setSelectedImage(null)}>✖</button>
                    </div>
                </div>
            )} */}

            <Footer />
        </>
    );
};

export default COPE2;
