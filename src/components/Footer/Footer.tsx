import { NavLink } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

const leistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Impfungen", path: "/leistungen/impfungen" },
  { label: "Psychosomatik", path: "/leistungen/psychosomatik" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Adipositas & Hypertonie", path: "/leistungen/adipositas" },
  { label: "IGeL-Leistungen", path: "/leistungen/igel" },
];

const navigation = [
  { label: "Praxis", path: "/praxis" },
  { label: "Vita", path: "/vita" },
  { label: "Check-Up", path: "/check-up" },
  { label: "Kontakt", path: "/kontakt" },
];

const legalLinks = [
  { label: "Impressum", path: "/impressum" },
  { label: "Datenschutz", path: "/datenschutz" },
  { label: "AGB", path: "/agb" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent" />
      <div className="container">
        <div className="footer__main">
          {/* Brand */}
          <div className="footer__brand">
            <NavLink to="/" className="footer__logo">
              <img src={logo} alt="Praxis Dr. Chadli Logo" />
              <div className="footer__logo-text">
                <span className="footer__logo-name">Praxis Dr. Chadli</span>
                <span className="footer__logo-subtitle">
                  Diabetologie · Hausarzt · Innere Medizin
                </span>
              </div>
            </NavLink>
            <div className="footer__divider" />
            <p className="footer__brand-text">
              Ihre Praxis für Diabetologie und hausärztliche Versorgung in
              Frankfurt am Main — mit Kompetenz, Fürsorge und modernster
              Medizin.
            </p>
            <div className="footer__brand-badge">
              <span className="footer__brand-badge-dot" />
              <span className="footer__brand-badge-text">
                Praxis aktuell geöffnet
              </span>
            </div>
          </div>

          {/* Leistungen */}
          <div className="footer__col">
            <h4 className="footer__col-title">Leistungen</h4>
            <nav className="footer__col-links">
              {leistungen.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="footer__col-link">
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Navigation */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <nav className="footer__col-links">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="footer__col-link">
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__bottom-copy">
            © {new Date().getFullYear()} Praxis Dr. Chadli · Alle Rechte
            vorbehalten
          </span>
          <div className="footer__bottom-links">
            {legalLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="footer__bottom-link">
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
