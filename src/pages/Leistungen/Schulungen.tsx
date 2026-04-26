import { NavLink } from "react-router-dom";
import {
  BookOpen,
  Users,
  Apple,
  ClipboardList,
  Heart,
  Lightbulb,
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Salad,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const schulungen = [
  {
    icon: <GraduationCap size={20} />,
    text: "Diabetes-Schulungen für Typ-1- und Typ-2-Diabetes — strukturiert, praxisnah und verständlich",
  },
  {
    icon: <Users size={20} />,
    text: "Einzel- und Gruppenschulungen für Patienten und Angehörige",
  },
  {
    icon: <Heart size={20} />,
    text: "Schulungen bei Gestationsdiabetes — speziell für werdende Mütter",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Schulungen zur Insulintherapie — sicherer Umgang mit Insulinpen und Insulinpumpe",
  },
  {
    icon: <Lightbulb size={20} />,
    text: "Schulungen zu modernen Blutzuckermesssystemen (CGM / FGM)",
  },
  {
    icon: <BookOpen size={20} />,
    text: "Aufklärung über Folgeerkrankungen und deren Prävention",
  },
];

const ernaehrung = [
  {
    icon: <Salad size={20} />,
    text: "Individuelle Ernährungsberatung bei Diabetes Typ 1 und Typ 2",
  },
  {
    icon: <Apple size={20} />,
    text: "Ernährungsempfehlungen bei Übergewicht, Bluthochdruck und erhöhten Fettwerten",
  },
  {
    icon: <Heart size={20} />,
    text: "Ernährungsberatung bei Schwangerschaftsdiabetes",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Beratung zur kohlenhydratbewussten Ernährung und Mahlzeitenplanung",
  },
  {
    icon: <Lightbulb size={20} />,
    text: "Praktische Tipps für den Alltag — verständlich und umsetzbar",
  },
  {
    icon: <Users size={20} />,
    text: "Gemeinsame Erarbeitung individueller Ernährungsziele",
  },
];

const weitereLeistungen = [
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Adipositas & Hypertonie", path: "/leistungen/adipositas" },
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
];

export default function Schulungen() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Schulungsraum" />
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
            <span>Schulungen & Ernährungsberatung</span>
          </div>
          <div className="leistung-hero__tag">
            <BookOpen size={14} />
            Wissen & Ernährung
          </div>
          <h1 className="leistung-hero__title">
            Schulungen & Ernährungsberatung
          </h1>
          <p className="leistung-hero__subtitle">
            Wissen ist die beste Medizin. In unserer Praxis begleiten wir Sie
            nicht nur medizinisch, sondern stärken auch Ihre Eigenverantwortung
            — mit praxisnahen Schulungen und individueller Ernährungsberatung,
            die Ihren Alltag wirklich verändern.
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
                Chronische Erkrankungen wie Diabetes erfordern mehr als nur
                Medikamente — sie erfordern Wissen, Sicherheit und die richtigen
                Gewohnheiten im Alltag. Unsere Schulungen und
                Ernährungsberatungen sind darauf ausgelegt, Ihnen genau das zu
                vermitteln: verständlich, empathisch und auf Ihre persönliche
                Situation abgestimmt.
              </p>

              {/* Schulungen */}
              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Schulungsangebote
                </h2>
                <div className="leistung-list">
                  {schulungen.map((item, i) => (
                    <div className="leistung-list__item" key={i}>
                      <div className="leistung-list__icon">{item.icon}</div>
                      <span className="leistung-list__text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ernährungsberatung */}
              <div>
                <h2 className="leistung-content__section-title">
                  Ernährungsberatung
                </h2>
                <div className="leistung-list">
                  {ernaehrung.map((item, i) => (
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
                  Wir sind für Sie da — rufen Sie uns an oder schreiben Sie uns.
                  Wir freuen uns auf Sie.
                </p>
                <NavLink to="/kontakt" className="leistung-sidebar__btn">
                  <CalendarCheck size={17} />
                  Jetzt Termin buchen
                </NavLink>
                <a
                  href="tel:+490000000000"
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
