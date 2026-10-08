import React, { useState, useMemo } from "react";
import { Search, Grid, List, ExternalLink, Sparkles, FileSpreadsheet, Info } from "lucide-react";

const REGISTRATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeLck_D2M8_dn_pv1fMxjKPZ4hm-fCqzOpyMCIhU5qAticMpw/viewform";

// Initial UNCSW Country Portfolio Matrix Data from official allocation list with ISO codes and flag emojis
const UNCSW_PORTFOLIOS = [
  { id: 1, country: "China", code: "cn", flag: "🇨🇳", status: "Available" },
  { id: 2, country: "United States", code: "us", flag: "🇺🇸", status: "Available" },
  { id: 3, country: "Russia", code: "ru", flag: "🇷🇺", status: "Available" },
  { id: 4, country: "Iran", code: "ir", flag: "🇮🇷", status: "Available" },
  { id: 5, country: "United Kingdom", code: "gb", flag: "🇬🇧", status: "Available" },
  { id: 6, country: "France", code: "fr", flag: "🇫🇷", status: "Available" },
  { id: 7, country: "India", code: "in", flag: "🇮🇳", status: "Available" },
  { id: 8, country: "Israel", code: "il", flag: "🇮🇱", status: "Available" },
  { id: 9, country: "Saudi Arabia", code: "sa", flag: "🇸🇦", status: "Available" },
  { id: 10, country: "Germany", code: "de", flag: "🇩🇪", status: "Available" },
  { id: 11, country: "South Korea", code: "kr", flag: "🇰🇷", status: "Available" },
  { id: 12, country: "Singapore", code: "sg", flag: "🇸🇬", status: "Available" },
  { id: 13, country: "Brazil", code: "br", flag: "🇧🇷", status: "Available" },
  { id: 14, country: "Turkey", code: "tr", flag: "🇹🇷", status: "Available" },
  { id: 15, country: "Japan", code: "jp", flag: "🇯🇵", status: "Available" },
  { id: 16, country: "United Arab Emirates", code: "ae", flag: "🇦🇪", status: "Available" },
  { id: 17, country: "South Africa", code: "za", flag: "🇿🇦", status: "Available" },
  { id: 18, country: "Mexico", code: "mx", flag: "🇲🇽", status: "Available" },
  { id: 19, country: "Pakistan", code: "pk", flag: "🇵🇰", status: "Available" },
  { id: 20, country: "Egypt", code: "eg", flag: "🇪🇬", status: "Available" },
  { id: 21, country: "Vietnam", code: "vn", flag: "🇻🇳", status: "Available" },
  { id: 22, country: "Nigeria", code: "ng", flag: "🇳🇬", status: "Available" },
  { id: 23, country: "Indonesia", code: "id", flag: "🇮🇩", status: "Available" },
  { id: 24, country: "Thailand", code: "th", flag: "🇹🇭", status: "Available" },
  { id: 25, country: "Cuba", code: "cu", flag: "🇨🇺", status: "Available" },
  { id: 26, country: "North Korea", code: "kp", flag: "🇰🇵", status: "Available" },
  { id: 27, country: "Ethiopia", code: "et", flag: "🇪🇹", status: "Available" },
  { id: 28, country: "Myanmar", code: "mm", flag: "🇲🇲", status: "Available" },
  { id: 29, country: "Bangladesh", code: "bd", flag: "🇧🇩", status: "Available" },
  { id: 30, country: "Argentina", code: "ar", flag: "🇦🇷", status: "Available" },
  { id: 31, country: "Chile", code: "cl", flag: "🇨🇱", status: "Available" },
  { id: 32, country: "Ukraine", code: "ua", flag: "🇺🇦", status: "Available" },
  { id: 33, country: "Colombia", code: "co", flag: "🇨🇴", status: "Available" },
  { id: 34, country: "Italy", code: "it", flag: "🇮🇹", status: "Available" },
  { id: 35, country: "Spain", code: "es", flag: "🇪🇸", status: "Available" },
  { id: 36, country: "Canada", code: "ca", flag: "🇨🇦", status: "Available" },
  { id: 37, country: "Australia", code: "au", flag: "🇦🇺", status: "Available" },
  { id: 38, country: "Ireland", code: "ie", flag: "🇮🇪", status: "Available" },
  { id: 39, country: "Kuwait", code: "kw", flag: "🇰🇼", status: "Available" },
];

const CountryFlag = ({ code, country, flag }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span style={{ fontSize: "1.1rem", lineHeight: 1 }} role="img" aria-label={country}>
        {flag}
      </span>
    );
  }

  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      srcSet={`https://flagcdn.com/w80/${code}.png 2x`}
      alt={`${country} Flag`}
      width="24"
      height="16"
      style={{
        objectFit: "cover",
        borderRadius: "2px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        display: "inline-block",
        flexShrink: 0,
      }}
      onError={() => setImgError(true)}
    />
  );
};

const UncswPortfolioMatrix = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'

  const filteredPortfolios = useMemo(() => {
    return UNCSW_PORTFOLIOS.filter((item) => {
      const matchesSearch = item.country.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" ||
        (statusFilter === "AVAILABLE" && item.status.toLowerCase() === "available") ||
        (statusFilter === "OCCUPIED" && item.status.toLowerCase() !== "available");
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const totalCount = UNCSW_PORTFOLIOS.length;
  const availableCount = UNCSW_PORTFOLIOS.filter((p) => p.status.toLowerCase() === "available").length;
  const occupiedCount = totalCount - availableCount;

  return (
    <div id="uncsw-matrix" className="portfolio-matrix-wrapper my-5 scroll-margin-top">
      <div
        className="custom-card p-4 p-md-5"
        style={{
          border: "1px solid rgba(212, 175, 55, 0.35)",
          boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
          backgroundColor: "#16191E",
        }}
      >
        {/* Matrix Header Title & Branding */}
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 mb-4 pb-4 border-bottom border-secondary">
          <div className="d-flex align-items-center gap-3">
            <div
              className="p-3 rounded-circle d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "rgba(212, 175, 55, 0.12)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                minWidth: "56px",
                minHeight: "56px",
              }}
            >
              <FileSpreadsheet size={26} style={{ color: "#D4AF37" }} />
            </div>
            <div>
              <div className="d-flex align-items-center gap-2 flex-wrap">
                <span className="subtle-tag">OFFICIAL MATRIX</span>
                <span
                  className="badge bg-gold text-dark fw-bold"
                  style={{ fontSize: "0.72rem", padding: "4px 8px" }}
                >
                  DSU COPE MUN III
                </span>
              </div>
              <h2
                className="h2 fw-bold mb-1 mt-1"
                style={{ fontFamily: "'Cinzel', serif", color: "#FFFFFF" }}
              >
                United Nations Commission on the Status of Women
              </h2>
              <p className="mb-0" style={{ color: "#9DA5B4", fontSize: "0.92rem" }}>
                Official Country Portfolio Matrix & Availability Status
              </p>
            </div>
          </div>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-decoration-none text-nowrap"
          >
            Register & Claim Portfolio
            <ExternalLink size={16} />
          </a>
        </div>

        {/* Committee Agenda Banner */}
        <div
          className="p-3 p-md-4 rounded mb-4"
          style={{
            backgroundColor: "rgba(26, 29, 34, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="d-flex align-items-center gap-2 mb-1">
            <Sparkles size={16} style={{ color: "#D4AF37" }} />
            <span
              className="fw-bold text-uppercase"
              style={{ color: "#D4AF37", fontSize: "0.78rem", letterSpacing: "1.2px" }}
            >
              UNCSW Committee Agenda
            </span>
          </div>
          <p className="mb-0" style={{ color: "#F1F3F5", fontSize: "0.95rem", lineHeight: "1.6" }}>
            "Advancing global gender equality, women empowerment, safety, education, and political representation."
          </p>
        </div>

        {/* Quick Stats Counter Cards */}
        <div className="row g-3 mb-4">
          <div className="col-4 col-md-4">
            <div
              className="p-3 rounded text-center"
              style={{ backgroundColor: "#1C2026", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="fw-bold gold-text" style={{ fontSize: "1.6rem" }}>
                {totalCount}
              </div>
              <small className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.72rem", letterSpacing: "0.8px" }}>
                Total Portfolios
              </small>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div
              className="p-3 rounded text-center"
              style={{ backgroundColor: "#1C2026", border: "1px solid rgba(46, 204, 113, 0.25)" }}
            >
              <div className="fw-bold" style={{ color: "#2ECC71", fontSize: "1.6rem" }}>
                {availableCount}
              </div>
              <small className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.72rem", letterSpacing: "0.8px" }}>
                Available
              </small>
            </div>
          </div>
          <div className="col-4 col-md-4">
            <div
              className="p-3 rounded text-center"
              style={{ backgroundColor: "#1C2026", border: "1px solid rgba(255, 255, 255, 0.06)" }}
            >
              <div className="fw-bold" style={{ color: "#CBD5E1", fontSize: "1.6rem" }}>
                {occupiedCount}
              </div>
              <small className="text-uppercase" style={{ color: "#9DA5B4", fontSize: "0.72rem", letterSpacing: "0.8px" }}>
                Assigned
              </small>
            </div>
          </div>
        </div>

        {/* Controls Bar: Search Input, Status Filters, View Toggle */}
        <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center justify-content-between gap-3 mb-4">
          {/* Search Bar */}
          <div className="position-relative flex-grow-1" style={{ maxWidth: "450px" }}>
            <Search
              size={18}
              className="position-absolute"
              style={{ left: "14px", top: "50%", transform: "translateY(-50%)", color: "#9DA5B4" }}
            />
            <input
              type="text"
              placeholder="Search portfolio / country name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{
                backgroundColor: "#121417",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                paddingLeft: "42px",
                fontSize: "0.92rem",
                borderRadius: "4px",
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="btn btn-sm btn-link position-absolute end-0 top-50 translate-middle-y text-secondary text-decoration-none me-2"
                style={{ fontSize: "0.8rem" }}
              >
                Clear
              </button>
            )}
          </div>

          {/* Filter Pills & View Mode Buttons */}
          <div className="d-flex align-items-center justify-content-between justify-content-md-end gap-2 flex-wrap">
            {/* Filter Pills */}
            <div className="btn-group" role="group" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px" }}>
              <button
                type="button"
                className={`btn btn-sm ${statusFilter === "ALL" ? "btn-gold" : "btn-dark text-secondary"}`}
                onClick={() => setStatusFilter("ALL")}
                style={{ fontSize: "0.8rem", padding: "6px 14px" }}
              >
                All ({totalCount})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${statusFilter === "AVAILABLE" ? "btn-gold" : "btn-dark text-secondary"}`}
                onClick={() => setStatusFilter("AVAILABLE")}
                style={{ fontSize: "0.8rem", padding: "6px 14px" }}
              >
                Available ({availableCount})
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="btn-group" role="group" style={{ border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px" }}>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === "grid" ? "btn-gold" : "btn-dark text-secondary"}`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
                style={{ padding: "6px 12px" }}
              >
                <Grid size={16} />
              </button>
              <button
                type="button"
                className={`btn btn-sm ${viewMode === "table" ? "btn-gold" : "btn-dark text-secondary"}`}
                onClick={() => setViewMode("table")}
                title="Table View"
                style={{ padding: "6px 12px" }}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Counter Notice */}
        {searchQuery && (
          <div className="mb-3" style={{ color: "#9DA5B4", fontSize: "0.88rem" }}>
            Showing {filteredPortfolios.length} of {totalCount} portfolios matching "{searchQuery}"
          </div>
        )}

        {/* Portfolio Content Display */}
        {filteredPortfolios.length === 0 ? (
          <div className="text-center py-5 rounded" style={{ backgroundColor: "#121417", border: "1px dashed rgba(255,255,255,0.1)" }}>
            <h5 style={{ color: "#CBD5E1" }}>No country portfolios found</h5>
            <p className="mb-0 text-muted" style={{ fontSize: "0.88rem" }}>
              Try adjusting your search query or filter.
            </p>
          </div>
        ) : viewMode === "grid" ? (
          /* CLEAN GRID VIEW WITH FLAGS */
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {filteredPortfolios.map((item) => {
              const isAvailable = item.status.toLowerCase() === "available";
              return (
                <div key={item.id} className="col">
                  <div
                    className="p-3 rounded h-100 d-flex flex-column justify-content-between"
                    style={{
                      backgroundColor: "#1A1D22",
                      border: "1px solid rgba(255, 255, 255, 0.09)",
                      borderRadius: "6px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      transition: "border-color 0.2s ease, transform 0.2s ease",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span
                        style={{
                          color: "#D4AF37",
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: "700",
                          letterSpacing: "0.5px",
                        }}
                      >
                        #{String(item.id).padStart(2, "0")}
                      </span>
                      <span
                        className="d-inline-flex align-items-center px-2 py-1 rounded"
                        style={{
                          backgroundColor: isAvailable ? "rgba(46, 204, 113, 0.12)" : "rgba(255, 255, 255, 0.08)",
                          border: isAvailable ? "1px solid rgba(46, 204, 113, 0.35)" : "1px solid rgba(255, 255, 255, 0.15)",
                          color: isAvailable ? "#2ECC71" : "#9DA5B4",
                          fontSize: "0.72rem",
                          fontWeight: "600",
                          letterSpacing: "0.5px",
                          textTransform: "uppercase",
                        }}
                      >
                        {item.status}
                      </span>
                    </div>

                    <div className="d-flex align-items-center gap-2 pt-1">
                      <CountryFlag code={item.code} country={item.country} flag={item.flag} />
                      <h5
                        className="fw-bold mb-0 text-truncate"
                        style={{
                          color: "#FFFFFF",
                          fontFamily: "'Cinzel', serif",
                          fontSize: "1.02rem",
                          letterSpacing: "0.3px",
                        }}
                        title={item.country}
                      >
                        {item.country}
                      </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* CLEAN TABLE VIEW WITH FLAGS */
          <div className="table-responsive rounded" style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <table className="table table-dark table-hover mb-0" style={{ backgroundColor: "#1A1D22" }}>
              <thead>
                <tr style={{ backgroundColor: "#121417", borderBottom: "2px solid #D4AF37" }}>
                  <th scope="col" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif", width: "80px", padding: "12px 18px" }}>
                    #
                  </th>
                  <th scope="col" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif", padding: "12px 18px" }}>
                    PORTFOLIO (COUNTRY)
                  </th>
                  <th scope="col" className="text-end" style={{ color: "#D4AF37", fontFamily: "'Cinzel', serif", width: "160px", padding: "12px 18px" }}>
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPortfolios.map((item) => {
                  const isAvailable = item.status.toLowerCase() === "available";
                  return (
                    <tr key={item.id} style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)" }}>
                      <td style={{ color: "#D4AF37", fontWeight: "700", fontSize: "0.88rem", padding: "12px 18px" }}>
                        #{String(item.id).padStart(2, "0")}
                      </td>
                      <td style={{ color: "#FFFFFF", fontFamily: "'Cinzel', serif", fontWeight: "600", fontSize: "0.98rem", padding: "12px 18px" }}>
                        <div className="d-flex align-items-center gap-2">
                          <CountryFlag code={item.code} country={item.country} flag={item.flag} />
                          <span>{item.country}</span>
                        </div>
                      </td>
                      <td className="text-end" style={{ padding: "12px 18px" }}>
                        <span
                          className="d-inline-flex align-items-center px-2.5 py-1 rounded"
                          style={{
                            backgroundColor: isAvailable ? "rgba(46, 204, 113, 0.12)" : "rgba(255, 255, 255, 0.08)",
                            border: isAvailable ? "1px solid rgba(46, 204, 113, 0.35)" : "1px solid rgba(255, 255, 255, 0.15)",
                            color: isAvailable ? "#2ECC71" : "#9DA5B4",
                            fontSize: "0.72rem",
                            fontWeight: "600",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Delegate Guidance Note */}
        <div className="mt-4 pt-3 border-top border-secondary d-flex align-items-center gap-2" style={{ color: "#9DA5B4", fontSize: "0.85rem" }}>
          <Info size={16} style={{ color: "#D4AF37", flexShrink: 0 }} />
          <span>
            <strong>Delegate Note:</strong> Country portfolios are allocated on a first-come, first-served basis upon submitting the official registration form. Specify your preferred country in the registration form.
          </span>
        </div>
      </div>
    </div>
  );
};

export default UncswPortfolioMatrix;
