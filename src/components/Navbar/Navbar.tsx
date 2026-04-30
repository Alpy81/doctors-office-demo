import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const leistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  {
    label: "Vorsorge- & Check-up-Untersuchungen",
    path: "/leistungen/vorsorge",
  },
  { label: "Impfungen", path: "/leistungen/impfungen" },
  {
    label: "Psychosomatische Grundversorgung",
    path: "/leistungen/psychosomatik",
  },
  { label: "Adipositas-Therapie & Hypertonie", path: "/leistungen/adipositas" },
  { label: "IGeL-Leistungen", path: "/leistungen/igel" },
];

const diabetologie = [
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [diabetologieOpen, setDiabetologieOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-Lock wenn Mobile-Menu offen
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  const handleDropdownItemClick = (path: string) => {
    navigate(path);
    closeMobile();
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <NavLink to="/" className="navbar__logo" onClick={closeMobile}>
          <div className="navbar__logo-wrapper">
            <div className="navbar__logo-row">
              <span className="navbar__logo-name">Praxis</span>
              <img src={logo} alt="Praxis Logo" />
              <span className="navbar__logo-name">Chadli</span>
            </div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          <NavLink to="/praxis" className="navbar__link">
            Praxis
          </NavLink>

          {/* Leistungen Dropdown */}
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-trigger">
              Leistungen
              <ChevronDown className="navbar__dropdown-icon" size={16} />
            </button>
            <div className="navbar__dropdown-menu">
              {leistungen.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="navbar__dropdown-item">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Diabetologie Dropdown */}
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-trigger">
              Diabetologie
              <ChevronDown className="navbar__dropdown-icon" size={16} />
            </button>
            <div className="navbar__dropdown-menu">
              {diabetologie.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="navbar__dropdown-item">
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/vita" className="navbar__link">
            Vita
          </NavLink>
          <NavLink to="/kontakt" className="navbar__link">
            Kontakt
          </NavLink>
          <NavLink to="/karriere" className="navbar__link">
            Karriere
          </NavLink>
        </nav>

        {/* CTA */}
        <NavLink to="/kontakt" className="navbar__cta">
          Termin vereinbaren
        </NavLink>

        {/* Burger */}
        <button
          className={`navbar__burger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen">
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${mobileOpen ? "open" : ""}`}>
        {/* Leistungen Accordion */}
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-trigger"
            onClick={() => setAccordionOpen(!accordionOpen)}>
            Leistungen
            <ChevronDown
              size={18}
              style={{
                transform: accordionOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
          {accordionOpen && (
            <div className="navbar__mobile-accordion-items">
              {leistungen.map((item) => (
                <button
                  key={item.path}
                  className="navbar__mobile-accordion-item"
                  onClick={() => handleDropdownItemClick(item.path)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    width: "100%",
                  }}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <NavLink
          to="/praxis"
          className="navbar__mobile-link"
          onClick={closeMobile}>
          Praxis
        </NavLink>
        <div className="navbar__mobile-accordion">
          <button
            className="navbar__mobile-accordion-trigger"
            onClick={() => setDiabetologieOpen(!diabetologieOpen)}>
            Diabetologie
            <ChevronDown
              size={18}
              style={{
                transform: diabetologieOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            />
          </button>
          {diabetologieOpen && (
            <div className="navbar__mobile-accordion-items">
              {diabetologie.map((item) => (
                <button
                  key={item.path}
                  className="navbar__mobile-accordion-item"
                  onClick={() => handleDropdownItemClick(item.path)}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    cursor: "pointer",
                    width: "100%",
                  }}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <NavLink
          to="/vita"
          className="navbar__mobile-link"
          onClick={closeMobile}>
          Vita
        </NavLink>
        <NavLink
          to="/kontakt"
          className="navbar__mobile-link"
          onClick={closeMobile}>
          Kontakt
        </NavLink>
        <NavLink to="/karriere" className="navbar__link">
          Karriere
        </NavLink>
        <NavLink
          to="/kontakt"
          className="navbar__mobile-cta"
          onClick={closeMobile}>
          Termin vereinbaren
        </NavLink>
      </div>
    </header>
  );
}
