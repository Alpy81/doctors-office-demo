import { NavLink } from "react-router-dom";
import {
  Droplets,
  Stethoscope,
  Baby,
  Activity,
  Heart,
  BookOpen,
  ClipboardList,
  FlaskConical,
  Microscope,
  ShieldCheck,
  CalendarCheck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import instrument from "../../assets/images/instrument.jpg";

const schwerpunkte = [
  {
    icon: <Microscope size={20} />,
    text: "Diagnostik: Feststellung des Diabetestyps – Typ 1, Typ 2, Schwangerschaftsdiabetes sowie Sonderformen (LADA, MODY, pankreopriver Diabetes)",
  },
  {
    icon: <Stethoscope size={20} />,
    text: "Individuelle Therapie: Lebensstilberatung, Tabletten, GLP-1-Rezeptor-Agonisten bis hin zu verschiedenen Insulintherapien (konventionell, intensiviert, Insulinpumpe)",
  },
  {
    icon: <Baby size={20} />,
    text: "Kinderwunsch & Schwangerschaft: Beratung bei Kinderwunsch sowie Behandlung und Schulung bei vorbestehendem Diabetes und Gestationsdiabetes",
  },
  {
    icon: <Activity size={20} />,
    text: "Moderne Glukosemessung: Einsatz von rtCGM- und FGM-Systemen für eine präzise Blutzuckerkontrolle",
  },
  {
    icon: <Heart size={20} />,
    text: "Folge- & Begleiterkrankungen: Früherkennung von diabetischem Fußsyndrom, Neuropathie, Gefäß-, Herz- und Nierenerkrankungen sowie Bluthochdruck und Fettstoffwechselstörungen",
  },
  {
    icon: <BookOpen size={20} />,
    text: "Schulungen: Praxisnahe Einzel- und Gruppenschulungen für Patienten und Angehörige zur Stärkung von Wissen und Handlungssicherheit",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Diabetische Fußsprechstunde, regelmäßige Kontrollen, Führung des Diabetes-Passes sowie Teilnahme an DMP für Typ-1- und Typ-2-Diabetes",
  },
];

const checkups = [
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
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
];

export default function Diabetologie() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={instrument} alt="Medizinische Geräte" />
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
            <span>Diabetologie</span>
          </div>
          <div className="leistung-hero__tag">
            <Droplets size={14} />
            Alle Diabetesformen inkl. Schwangerschaftsdiabetes
          </div>
          <h1 className="leistung-hero__title">Diabetologie</h1>
          <p className="leistung-hero__subtitle">
            In unserer Praxis begleiten wir Menschen mit allen Formen von
            Diabetes — von der ersten Diagnose bis zur langfristigen
            Therapieanpassung. Wir verbinden moderne Medizin mit verständlicher
            Aufklärung und persönlicher Unterstützung, damit Sie im Alltag
            sicher und selbstbestimmt handeln können.
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
                Als spezialisierte Diabetologiepraxis bieten wir Ihnen eine
                ganzheitliche Betreuung — von der Diagnose über die Therapie bis
                hin zur Schulung und Begleitung im Alltag. Unser Ziel ist es,
                dass Sie Ihren Diabetes verstehen und sicher damit leben können.
              </p>

              {/* Schwerpunkte */}
              <div>
                <h2 className="leistung-content__section-title">
                  Unsere Schwerpunkte im Überblick
                </h2>
                <div className="leistung-list">
                  {schwerpunkte.map((item, i) => (
                    <div className="leistung-list__item" key={i}>
                      <div className="leistung-list__icon">{item.icon}</div>
                      <span className="leistung-list__text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Check-ups */}
              <div>
                <h2 className="leistung-content__section-title">
                  Weitere Check-ups
                </h2>
                <div className="leistung-list">
                  {checkups.map((item, i) => (
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
