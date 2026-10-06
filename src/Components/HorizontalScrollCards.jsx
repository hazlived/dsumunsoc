import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HorizontalScrollCards = ({ children, title, subtitle, className = "" }) => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={`horizontal-scroll-wrapper my-4 ${className}`}>
      {(title || subtitle) && (
        <div className="d-flex align-items-end justify-content-between mb-3 px-2">
          <div>
            {subtitle && (
              <span
                style={{
                  color: "#D4AF37",
                  fontSize: "0.82rem",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {subtitle}
              </span>
            )}
            {title && (
              <h3 className="mb-0" style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}>
                {title}
              </h3>
            )}
          </div>
          <div className="d-none d-md-flex align-items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="scroll-btn position-static transform-none"
              aria-label="Scroll Left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="scroll-btn position-static transform-none"
              aria-label="Scroll Right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <div className="position-relative">
        <button
          onClick={() => scroll("left")}
          className="scroll-btn scroll-btn-left"
          aria-label="Scroll Left"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="horizontal-scroll-container" ref={containerRef}>
          {children}
        </div>

        <button
          onClick={() => scroll("right")}
          className="scroll-btn scroll-btn-right"
          aria-label="Scroll Right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
