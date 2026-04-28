import { NavLink } from "react-router-dom";
import {
  ShieldCheck,
  Droplets,
  FlaskConical,
  Activity,
  Microscope,
  Heart,
  Stethoscope,
  ClipboardList,
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const vorsorge = [
  {
    icon: <Droplets size={20} />,
    text: "Blutzuckermessung (Nüchternblutzucker)",
  },
  {
    icon: <FlaskConical size={20} />,
    text: "Oraler Glukosetoleranztest (OGTT): Messung des Blutzuckers über mehrere Stunden nach Einnahme einer Glukoselösung",
  },
  {
    icon: <Activity size={20} />,
    text: "Berechnung des HOMA-Index zur Abklärung einer möglichen Insulinresistenz",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Screening bei Risikopatienten zur frühzeitigen Erkennung von Prädiabetes oder metabolischem Syndrom",
  },
  {
    icon: <Heart size={20} />,
    text: "Herz-Kreislauf-Vorsorge: Blutdruckmessung, EKG und Langzeit-Blutdruckmessung",
  },
  {
    icon: <Microscope size={20} />,
    text: "Laboruntersuchungen: Blutbild, Cholesterin, Schilddrüsenwerte und weitere Stoffwechselparameter",
  },
  {
    icon: <Stethoscope size={20} />,
    text: "Gesundheits-Check-up ab 35 Jahren gemäß gesetzlicher Krankenkasse",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Krebsfrüherkennung und Darmkrebsvorsorge (immunologischer Stuhltest / iFOBT)",
  },
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "IGeL-Leistungen", path: "/leistungen/igel" },
];

export default function Vorsorge() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Vorsorge & Check-up" />
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
            <span>Vorsorge & Check-up</span>
          </div>
          <div className="leistung-hero__tag">
            <ShieldCheck size={14} />
            Früherkennung & Prävention
          </div>
          <h1 className="leistung-hero__title">
            Vorsorge- & Check-up-Untersuchungen
          </h1>
          <p className="leistung-hero__subtitle">
            Vorsorge ist der beste Schutz — denn viele Erkrankungen lassen sich
            frühzeitig erkennen und behandeln, bevor sie sich ernsthaft
            entwickeln. Wir begleiten Sie mit umfassenden Check-ups und
            individuellen Vorsorgeuntersuchungen für jede Lebensphase.
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
                Zusätzlich zu den regulären Untersuchungen bieten wir in unserer
                Praxis verschiedene Vorsorge- und Kontrolluntersuchungen zur
                Früherkennung von Stoffwechselstörungen und weiteren
                Erkrankungen an. Unser Ziel ist es, Risiken frühzeitig zu
                erkennen und gemeinsam mit Ihnen gegenzusteuern — für ein langes
                und gesundes Leben.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Vorsorge- & Check-up-Leistungen
                </h2>
                <div className="leistung-list">
                  {vorsorge.map((item, i) => (
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
