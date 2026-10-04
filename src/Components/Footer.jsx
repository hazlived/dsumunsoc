import "../style/footer.css";

const Footer = () => {
    return (
        <div className="footer text-center">
            <div className="display-8">
                © 2025 Copyright: DSU Model United Nations Society
            </div>
            <div className="display-8">
                "There is nothing stronger than those two: Patience & Time"
            </div>
            <div className="social-links mt-2">
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=dsumunsoc@gmail.com&su=Inquiry%20from%20DSU%20MUN%20Website&body=Hello%20DSU%20MUN%20Team,%0D%0A%0D%0AI%20am%20reaching%20out%20through%20your%20website%20to%20inquire%20about:%0D%0A%0D%0A-%20COPE%20II%20Event%20Registration%0D%0A-%20Executive%20Board%20Positions%0D%0A-%20General%20Information%20about%20DSU%20MUN%20Society%0D%0A%0D%0APlease%20let%20me%20know%20how%20I%20can%20get%20involved!%0D%0A%0D%0ABest%20regards"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i
                        className="fa fa-envelope"
                        style={{
                            fontSize: "30px",
                            color: "white",
                            cursor: "pointer",
                            padding: "10px",
                        }}
                        title="Contact us via email"
                    ></i>
                </a>
            </div>
            <br />
            <img
                src="/img/logo_white.png"
                width="5%"
                height="35%"
                alt="DSU MUN Logo"
                className="footerlogo"
            />
        </div>
    );
};

export default Footer;
