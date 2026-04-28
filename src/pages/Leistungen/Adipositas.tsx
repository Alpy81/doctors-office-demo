import { NavLink } from "react-router-dom";
import {
  Scale,
  Heart,
  Activity,
  ShieldCheck,
  Salad,
  ClipboardList,
  TrendingDown,
  Stethoscope,
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronRight,
  BarChart2,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const adipositas = [
  {
    icon: <ClipboardList size={20} />,
    text: "Gründliche Diagnostik und Einschätzung persönlicher Risikofaktoren",
  },
  {
    icon: <Salad size={20} />,
    text: "Individuelle Beratung zu Ernährung, Bewegung und gesundem Alltag",
  },
  {
    icon: <TrendingDown size={20} />,
    text: "Unterstützung bei der Gewichtsreduktion mit strukturierten Programmen",
  },
  {
    icon: <Heart size={20} />,
    text: "Begleitung bei bestehenden Begleiterkrankungen wie Diabetes, Bluthochdruck und Fettstoffwechselstörungen",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Anerkannte Zusatzqualifikation Adipositas (DAG/DDG) — fachgerechte und zertifizierte Betreuung",
  },
  {
    icon: <Activity size={20} />,
    text: "Langfristige Begleitung auf dem Weg zu einem gesünderen Lebensstil",
  },
];

const hypertonie = [
  {
    icon: <BarChart2 size={20} />,
    text: "Diagnostik und Klassifizierung des Bluthochdrucks — Ursachenabklärung und Risikobewertung",
  },
  {
    icon: <Activity size={20} />,
    text: "Langzeit-Blutdruckmessung (24-Stunden-ABDM) zur präzisen Verlaufskontrolle",
  },
  {
    icon: <Stethoscope size={20} />,
    text: "Individuelle medikamentöse Therapie und regelmäßige Anpassung der Behandlung",
  },
  {
    icon: <Salad size={20} />,
    text: "Beratung zu blutdrucksenkenden Lebensstilfaktoren: Ernährung, Bewegung, Stressreduktion",
  },
  {
    icon: <Scale size={20} />,
    text: "Gewichtsmanagement als wichtiger Bestandteil der Blutdrucktherapie",
  },
  {
    icon: <Heart size={20} />,
    text: "Prävention von Folgeerkrankungen wie Herzinfarkt, Schlaganfall und Niereninsuffizienz",
  },
];

const weitereLeistungen = [
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
];

export default function Adipositas() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Adipositas & Hypertonie" />
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
            <span>Leistungen</span>
            <ChevronRight size={14} />
            <span>Adipositas & Hypertonie</span>
          </div>
          <div className="leistung-hero__tag">
            <Scale size={14} />
            Gewicht & Blutdruck im Griff
          </div>
          <h1 className="leistung-hero__title">
            Adipositas-Therapie &<br />
            Arterielle Hypertonie
          </h1>
          <p className="leistung-hero__subtitle">
            Übergewicht und Bluthochdruck gehören zu den häufigsten
            Risikofaktoren für schwerwiegende Folgeerkrankungen. In unserer
            Praxis begleiten wir Sie mit individuellen Therapiekonzepten,
            moderner Diagnostik und nachhaltiger Unterstützung — für mehr
            Gesundheit und Lebensqualität.
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
                Übergewicht und Adipositas können die Gesundheit erheblich
                belasten und das Risiko für Folgeerkrankungen wie Diabetes,
                Bluthochdruck oder Herz-Kreislauf-Erkrankungen deutlich erhöhen.
                Unsere Praxis verfügt über die anerkannte Zusatzqualifikation
                Adipositas (DAG/DDG) und bietet Ihnen eine fachgerechte sowie
                individuelle Betreuung an.
              </p>

              {/* Adipositas */}
              <div>
                <h2 className="leistung-content__section-title">
                  Adipositas-Therapie
                </h2>
                <div className="leistung-list">
                  {adipositas.map((item, i) => (
                    <div className="leistung-list__item" key={i}>
                      <div className="leistung-list__icon">{item.icon}</div>
                      <span className="leistung-list__text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hypertonie */}
              <div>
                <h2 className="leistung-content__section-title">
                  Arterielle Hypertonie (Bluthochdruck)
                </h2>
                <div className="leistung-list">
                  {hypertonie.map((item, i) => (
                    <div className="leistung-list__item" key={i}>
                      <div className="leistung-list__icon">{item.icon}</div>
                      <span className="leistung-list__text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="leistung-sidebar">
              {/* CTA Card */}
              <div className="leistung-sidebar__card leistung-sidebar__card--cta">
                <h3 className="leistung-sidebar__title">Termin vereinbaren</h3>
                <p className="leistung-sidebar__text">
                  Unser Ziel ist es, Sie langfristig auf Ihrem Weg zu einem
                  gesünderen Lebensstil zu unterstützen.
                </p>
                <NavLink to="/kontakt" className="leistung-sidebar__btn">
                  <CalendarCheck size={17} />
                  Jetzt Termin buchen
                </NavLink>
                <a
                  href="tel:+4969412430"
                  className="leistung-sidebar__btn leistung-sidebar__btn--outline">
                  <Phone size={17} />
                  Anrufen
                </a>
              </div>

              {/* Weitere Leistungen */}
              <div className="leistung-sidebar__card">
                <h3 className="leistung-sidebar__title">Weitere Leistungen</h3>
                <div className="leistung-sidebar__links">
                  {weitereLeistungen.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className="leistung-sidebar__link">
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
