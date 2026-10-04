import React, { useState } from "react";
import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import "../../style/cope.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
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
                                <h2 className="cope-title yellow">
                                    COPE <br />{" "}
                                    <span className="title-sub break-if-wide">
                                        CONFERENCE OF <br /> PUBLIC EXCHANGE
                                    </span>
                                </h2>
                                <h3 className="cope-title yellow">
                                    EDITION II
                                </h3>
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
                                    Register
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
                                        MUNSOC is proud to announce COPE Edition
                                        II, the Conference of Public
                                        Exchange—our premier intra-MUN, which
                                        will be held on November 15th, 2025. This edition will feature
                                        two dynamic committees: the United
                                        Nations General Assembly – DISEC and the
                                        Group of 20, where participants will
                                        engage in timely discussions on pressing
                                        global issues.
                                        <br />
                                        <br />
                                        Infused with MUNSOC’s core values, COPE
                                        Edition II will continue to foster
                                        dialogue, critical thinking, and
                                        leadership, providing a platform for
                                        students to voice their perspectives on
                                        matters shaping both our nation and the
                                        world.
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
                        {/*                         <a href="https://drive.google.com/drive/folders/16SWPBO5t5i6Nh9eX3J9NdxYTTG6OOxG6?usp=sharing" className="btn btn-register" id="dsumun2_background_btn" style={{ width: "300px", fontSize: "20px", margin: "30px" }}>
                            Background Guides
                        </a> */}

                        {/* Modal for displaying the PDF */}
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

            {/* After the top container-fluid (closed above), these are sibling sections */}
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
                            Rs. 6,000+
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
