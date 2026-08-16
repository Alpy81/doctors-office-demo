import { NavLink } from "react-router-dom";
import { Wind, ShieldCheck, ArrowRight, ChevronRight } from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const programme = [
  {
    title:
      "NASA® – Nationales Ambulantes Schulungsprogramm für erwachsene Asthmatiker",
    audience: "Für Erwachsene mit Asthma",
    points: [
      "Asthma und die Funktion der Atemwege verstehen",
      "Auslöser und Allergien erkennen",
      "Peak-Flow richtig messen und Werte beurteilen",
      "Inhalationstechniken sicher anwenden",
      "Medikamente und Therapie besser verstehen",
      "Bewegung, Sport und Atemtherapie",
      "Bronchialinfekte richtig einschätzen",
      "Warnzeichen eines Asthmaanfalls erkennen und richtig handeln",
    ],
  },
];

const weitereLeistungen = [
  { label: "Diabetes-Schulungen", path: "/leistungen/schulungen-diabetes" },
  { label: "Hypertonie-Schulungen", path: "/leistungen/schulungen-hypertonie" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
];

export default function SchulungenAsthma() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Asthma-Schulung" />
        </div>
        <div className="leistung-hero__overlay" />
        <div className="leistung-hero__deco">
          <div className="leistung-hero__deco-circle leistung-hero__deco-circle--1" />
          <div className="leistung-hero__deco-circle leistung-hero__deco-circle--2" />
        </div>
        <div className="leistung-hero__content">
          <div className="leistung-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Schulungen</span>
            <ChevronRight size={14} />
            <span>Asthma-Schulung</span>
          </div>
          <div className="leistung-hero__tag">
            <Wind size={14} />
            Asthma-Schulung
          </div>
          <h1 className="leistung-hero__title">
            Sicher durch den Alltag mit Asthma
          </h1>
          <p className="leistung-hero__subtitle">
            Asthma lässt sich mit dem richtigen Wissen und einer gut
            abgestimmten Therapie im Alltag gut kontrollieren. Unsere
            strukturierte Asthmaschulung hilft Ihnen, Ihre Erkrankung besser zu
            verstehen, Beschwerden frühzeitig zu erkennen und sicher zu handeln.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="leistung-main">
        <div className="container">
          <div className="leistung-main__inner">
            {/* Content */}
            <div className="leistung-content">
              <p className="leistung-content__intro">
                Unser erfahrenes Team begleitet Sie Schritt für Schritt —
                verständlich, praxisnah und individuell. Ziel ist es, Ihnen mehr
                Sicherheit im Umgang mit Ihrer Erkrankung und Ihrer Therapie zu
                geben.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Schulungsprogramme
                </h2>
                <div className="leistung-programs">
                  {programme.map((p, i) => (
                    <div className="leistung-program" key={i}>
                      <h3 className="leistung-program__title">{p.title}</h3>
                      <p className="leistung-program__audience">{p.audience}</p>
                      <div className="leistung-program__points">
                        {p.points.map((point, j) => (
                          <div className="leistung-program__point" key={j}>
                            <span className="leistung-program__point-dot" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="leistung-content__section-title">
                  <ShieldCheck
                    size={20}
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                      color: "var(--color-secondary)",
                    }}
                  />
                  Mehr Sicherheit im Alltag
                </h2>
                <p className="leistung-content__intro">
                  Mit dem richtigen Wissen können Sie aktiv zum Erfolg Ihrer
                  Asthmatherapie beitragen. Gemeinsam möchten wir Ihnen helfen,
                  Ihre Beschwerden besser einzuschätzen und auch in besonderen
                  Situationen sicher zu reagieren.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="leistung-sidebar">
              {/* Weitere Leistungen */}
              <div className="leistung-sidebar__card">
                <h3 className="leistung-sidebar__title">Weitere Leistungen</h3>
                <div className="leistung-sidebar__links">
                  {weitereLeistungen.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="leistung-sidebar__link"
                    >
                      <ArrowRight size={15} />
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
