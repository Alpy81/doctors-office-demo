import { NavLink } from "react-router-dom";
import {
  Star,
  FlaskConical,
  Droplets,
  FileText,
  Scan,
  Activity,
  ShieldCheck,
  Stethoscope,
  CalendarCheck,
  ArrowRight,
  ChevronRight,
  HeartPulse,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const igel = [
  {
    icon: <FlaskConical size={20} />,
    text: "Erweiterte Blutuntersuchungen: Vitamin- und Mineralstoffbestimmungen (z. B. Vitamin D, B12, Eisen, Zink), Tumormarkerbestimmungen",
  },
  {
    icon: <Droplets size={20} />,
    text: "Infusionen zur Stärkung und Unterstützung der Gesundheit — z. B. Vitamin- und Mineralstoffinfusionen",
  },
  {
    icon: <FileText size={20} />,
    text: "Ausstellung ärztlicher Atteste und Bescheinigungen (z. B. Sporttauglichkeit, Führerschein, Reiseunfähigkeit)",
  },
  {
    icon: <Scan size={20} />,
    text: "Ultraschall der Halsschlagader — Intima-Media-Dicke zur Früherkennung von Arteriosklerose",
  },
  {
    icon: <Activity size={20} />,
    text: "Erweiterte Herz-Kreislauf-Diagnostik: Belastungs-EKG und Langzeit-EKG als Selbstzahlerleistung",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Screening auf Bauchaortenaneurysma — Ultraschalluntersuchung der Hauptschlagader",
  },
  {
    icon: <HeartPulse size={20} />,
    text: "Erweiterte Vorsorgeuntersuchungen über das gesetzliche Maß hinaus — für einen umfassenden Gesundheitscheck",
  },
  {
    icon: <Stethoscope size={20} />,
    text: "Reisemedizinische Beratung und Ausstellung internationaler Impfdokumente",
  },
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "Impfungen", path: "/leistungen/impfungen" },
];

export default function IGeL() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="IGeL-Leistungen" />
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
            <span>IGeL-Leistungen</span>
          </div>
          <div className="leistung-hero__tag">
            <Star size={14} />
            Individuelle Gesundheitsleistungen
          </div>
          <h1 className="leistung-hero__title">IGeL-Leistungen</h1>
          <p className="leistung-hero__subtitle">
            Zusätzlich zu den regulären Leistungen der Krankenkassen bieten wir
            in unserer Praxis ausgewählte Selbstzahlerleistungen an — für alle,
            die mehr für ihre Gesundheit tun möchten. Vorab beraten wir Sie
            selbstverständlich ausführlich über Sinn, Nutzen und Kosten.
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
                Individuelle Gesundheitsleistungen (IGeL) gehen über den
                gesetzlichen Leistungsrahmen hinaus und ermöglichen es Ihnen,
                Ihre Gesundheit noch umfassender im Blick zu behalten. In
                unserer Praxis legen wir großen Wert auf Transparenz — wir
                beraten Sie ehrlich und ausführlich, bevor Sie eine Entscheidung
                treffen.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unsere IGeL-Leistungen im Überblick
                </h2>
                <div className="leistung-list">
                  {igel.map((item, i) => (
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
                <h3 className="leistung-sidebar__title">Beratung anfragen</h3>
                <p className="leistung-sidebar__text">
                  Wir beraten Sie gerne ausführlich zu allen IGeL-Leistungen —
                  transparent, ehrlich und ohne Verpflichtung.
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
