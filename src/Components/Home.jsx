import Nav from "./Nav.jsx";
import About from "./Home-Components/About.jsx";
import Footer from "./Footer.jsx";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faTrophy } from "@fortawesome/free-solid-svg-icons";
import "../style/home.css";

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row vh-100">
                    <div
                        className="col-md-6 left-col"
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="d-flex flex-column align-items-center justify-content-center py-4 px-3 text-center">
                            <div className="mb-3">
                                <img
                                    src="/img/MUNSOCLOGO2-white.png"
                                    alt="DSUMUN Logo"
                                    className="img-fluid home-logo"
                                />
                            </div>
                            <div
                                className="dsumun2-home-img text-center my-3"
                            >
                                <h2 className="cope-title" style={{ color: "#ffffff", fontSize: "2.8rem", fontWeight: "bold" }}>
                                    DSU COPE MUN
                                </h2>
                                <h4 style={{ color: "#74C0FC", fontFamily: "museo", letterSpacing: "2px", textTransform: "uppercase", marginTop: "12px", fontStyle: "italic" }}>
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

                            <div
                                className="home-buttons-container"
                                style={{
                                    display: "flex",
                                    gap: "15px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexWrap: "wrap",
                                    marginTop: "20px",
                                }}
                            >
                                <div style={{ position: "relative" }}>
                                    <Link
                                        to="/cope2"
                                        className="btn btn-register"
                                        id="home-btn"
                                    >
                                        Know More
                                    </Link>
                                </div>
                                <div style={{ position: "relative" }}>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSefJLccrPOvyj62y2XOUEf2DcKMjCCXHyUiga3--k-pj9GiBw/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-register"
                                        id="register-btn"
                                    >
                                        Register Now
                                    </a>
                                </div>
                            </div>
                            {/*
                            <div className="reminder-dsumun2">
                                <h1 style={{ fontFamily: "museo", color: "white", marginTop:"20px", fontSize:"25px" }}>Early bird closes on March 10</h1>
                            </div>
                            */}
                        </div>
                    </div>

                    <div className="col-lg-6 p-0 carousel-container">
                        <Carousel fade interval={3000}>
                            {[1, 2, 3, 4, 5, 6].map((item) => (
                                <Carousel.Item key={item}>
                                    <img
                                        className="d-block w-100"
                                        src={`/img/DsuMun${item}.jpg`}
                                        alt={`Slide ${item}`}
                                        style={{
                                            objectFit: "cover",
                                            height: "100vh",
                                        }}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>

                <div className="container-md mx-auto text-center">
                    <img
                        src="./img/separator2.png"
                        style={{ width: "50px", height: "50px" }}
                    />
                </div>

                <div
                    className="row"
                    style={{
                        paddingTop: "50px",
                        paddingBottom: "50px",
                        minWidth: "300px",
                    }}
                >
                    <About style={{ minWidth: "360px" }} />
                </div>

                <div className="container-md mx-auto text-center">
                    <img
                        src="./img/separator2.png"
                        style={{ width: "50px", height: "50px" }}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
