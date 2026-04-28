import { NavLink } from "react-router-dom";
import {
  Heart,
  Microscope,
  Activity,
  FlaskConical,
  Wind,
  Clock,
  ShieldCheck,
  Scan,
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const leistungen = [
  {
    icon: <Scan size={20} />,
    text: "Ultraschalluntersuchungen (Bauch, Schilddrüse u. v. m.)",
  },
  {
    icon: <Heart size={20} />,
    text: "Ultraschall der Halsschlagader — Intima-Media-Dicke",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Screening auf Bauchaortenaneurysma",
  },
  { icon: <Activity size={20} />, text: "EKG-Diagnostik" },
  {
    icon: <FlaskConical size={20} />,
    text: "Blutentnahme und spezielle Labordiagnostik",
  },
  { icon: <Wind size={20} />, text: "Lungenfunktionsprüfung" },
  {
    icon: <Microscope size={20} />,
    text: "Immunologischer Stuhltest / iFOBT (Test auf Blut im Stuhl)",
  },
  { icon: <Clock size={20} />, text: "Langzeit-Blutdruckmessung" },
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "IGeL-Leistungen", path: "/leistungen/igel" },
];

export default function Internistisch() {
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
            <span>Internistische Leistungen</span>
          </div>
          <div className="leistung-hero__tag">
            <Heart size={14} />
            Innere Medizin
          </div>
          <h1 className="leistung-hero__title">Internistische Leistungen</h1>
          <p className="leistung-hero__subtitle">
            In unserer Praxis bieten wir Ihnen verschiedene internistische
            Untersuchungen und Behandlungen an. Wir informieren Sie gerne,
            welche Leistungen von den gesetzlichen Krankenkassen übernommen
            werden und welche als Selbstzahler- bzw. Privatleistungen gelten.
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
                Die Innere Medizin bildet das Herzstück unserer Praxis. Mit
                modernster Diagnostik und langjähriger Erfahrung erkennen wir
                Erkrankungen frühzeitig und leiten gezielte Therapien ein —
                individuell auf Sie abgestimmt.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Leistungen im Überblick
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
