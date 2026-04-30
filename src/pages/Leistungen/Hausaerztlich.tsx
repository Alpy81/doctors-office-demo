import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  FlaskConical,
  Heart,
  Activity,
  Clock,
  Microscope,
  ShieldCheck,
  Scissors,
  CalendarCheck,
  Brain,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const leistungen = [
  {
    icon: <FlaskConical size={20} />,
    text: "Blutuntersuchungen (Diabetes-Screening, Fettwerte, Stuhl- & Urintests)",
  },
  { icon: <Activity size={20} />, text: "EKG" },
  { icon: <Clock size={20} />, text: "Langzeit-Blutdruckmessung" },
  {
    icon: <Microscope size={20} />,
    text: "Ultraschall der Bauchorgane, Schilddrüse und Halsschlagader",
  },
  { icon: <ShieldCheck size={20} />, text: "Schilddrüsen-Diagnostik" },
  {
    icon: <Heart size={20} />,
    text: "Betreuung bei chronischen Erkrankungen (DMP)",
  },
  { icon: <Scissors size={20} />, text: "Behandlung akuter Wunden" },
  { icon: <CalendarCheck size={20} />, text: "Gesundheits-Check-ups" },
  { icon: <Stethoscope size={20} />, text: "Vorbereitung auf Operationen" },
  { icon: <Brain size={20} />, text: "Psychosomatische Grundversorgung" },
];

const weitereLeistungen = [
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Impfungen", path: "/leistungen/impfungen" },
];

export default function Hausaerztlich() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Behandlungsraum" />
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
            <span>Hausärztliche Versorgung</span>
          </div>
          <div className="leistung-hero__tag">
            <Stethoscope size={14} />
            Hausarzt & Allgemeinmedizin
          </div>
          <h1 className="leistung-hero__title">Hausärztliche Versorgung</h1>
          <p className="leistung-hero__subtitle">
            Unsere Praxis bietet Ihnen eine umfassende und persönliche
            medizinische Betreuung. Wir möchten Sie zuverlässig auf Ihrem Weg zu
            Gesundheit und Wohlbefinden begleiten.
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
                Als Ihre hausärztliche Praxis sind wir erste Anlaufstelle für
                alle gesundheitlichen Anliegen — von der Vorsorge bis zur
                Behandlung akuter Beschwerden. Mit modernster Diagnostik und
                einem offenen Ohr begleiten wir Sie und Ihre Familie langfristig
                und vertrauensvoll.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Angebote im Überblick
                </h2>
                <div className="leistung-list">
                  {leistungen.map((item, i) => (
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
