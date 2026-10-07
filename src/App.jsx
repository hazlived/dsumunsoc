import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cope3 from "./pages/Cope3";
import Cope2 from "./pages/Cope2";
import Cope2Eb from "./pages/Cope2Eb";
import Dsumun2 from "./pages/Dsumun2";
import Dsumun1 from "./pages/Dsumun1";
import Cope1 from "./pages/Cope1";
import Delegation from "./pages/Delegation";
import Secretariat from "./pages/Secretariat";
import Others from "./pages/Others";

// Scroll to top helper on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: "#121417" }}>
        <Navbar />
        <main className="flex-grow-1" style={{ paddingTop: "70px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cope3" element={<Cope3 />} />
            <Route path="/cope2" element={<Cope2 />} />
            <Route path="/cope2/executive-board" element={<Cope2Eb />} />
            <Route path="/events/dsumun2" element={<Dsumun2 />} />
            <Route path="/events/dsumun1" element={<Dsumun1 />} />
            <Route path="/events/cope1" element={<Cope1 />} />
            <Route path="/events/cope" element={<Cope1 />} />
            <Route path="/events/delegation" element={<Delegation />} />
            <Route path="/events/others" element={<Others />} />
            <Route path="/secretariat" element={<Secretariat />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
