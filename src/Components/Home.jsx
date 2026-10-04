import Nav from "./Nav.jsx";
import About from "./Home-Components/About.jsx";
import Footer from "./Footer.jsx";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../style/home.css";

const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="row vh-100">
                    <div
                        className="col-md-6 left-col"
                        style={{ maxHeight: "100vh" }}
                    >
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <img
                                    src="/img/MUNSOCLOGO2-white.png"
                                    alt="DSUMUN II"
                                    className="img-fluid mb-2 home-logo"
                                />
                            </div>
                            <br />
                            <br />
                            <br />
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
                                    <svg
                                        className="button-sketch"
                                        viewBox="0 0 300 100"
                                        style={{
                                            position: "absolute",
                                            top: "-50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: "140%",
                                            height: "200%",
                                            pointerEvents: "none",
                                        }}
                                    ></svg>
                                    <Link
                                        to="/cope2"
                                        className="btn btn-register"
                                        id="home-btn"
                                    >
                                        Know More
                                    </Link>
                                </div>
                                <div style={{ position: "relative" }}>
                                    <svg
                                        className="button-sketch"
                                        viewBox="0 0 300 100"
                                        style={{
                                            position: "absolute",
                                            top: "-50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            width: "140%",
                                            height: "200%",
                                            pointerEvents: "none",
                                        }}
                                    ></svg>
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSefJLccrPOvyj62y2XOUEf2DcKMjCCXHyUiga3--k-pj9GiBw/viewform"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-register"
                                        id="register-btn"
                                    >
                                        Register
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
