import { NavLink } from "react-router-dom";
import {
  ClipboardList,
  Heart,
  Activity,
  Users,
  CalendarCheck,
  ShieldCheck,
  BookOpen,
  Stethoscope,
  Phone,
  ArrowRight,
  ChevronRight,
  Droplets,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const dmpTyp1 = [
  {
    icon: <Droplets size={20} />,
    text: "Regelmäßige HbA1c-Kontrollen und individuelle Therapieanpassung",
  },
  {
    icon: <Activity size={20} />,
    text: "Optimierung der Insulintherapie — konventionell, intensiviert oder per Insulinpumpe",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Früherkennung und Behandlung von Folgeerkrankungen wie Neuropathie, Nephropathie und Retinopathie",
  },
  {
    icon: <BookOpen size={20} />,
    text: "Strukturierte Schulungen zur Stärkung der Eigenverantwortung und Handlungssicherheit",
  },
  {
    icon: <Heart size={20} />,
    text: "Betreuung bei Begleiterkrankungen wie Bluthochdruck und Fettstoffwechselstörungen",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Führung und Aktualisierung des Diabetes-Passes sowie vollständige Dokumentation",
  },
];

const dmpTyp2 = [
  {
    icon: <Stethoscope size={20} />,
    text: "Umfassende Erstuntersuchung und Einschreibung ins DMP mit individuellem Behandlungsplan",
  },
  {
    icon: <Droplets size={20} />,
    text: "Regelmäßige Blutzucker- und HbA1c-Kontrollen sowie Anpassung der medikamentösen Therapie",
  },
  {
    icon: <Activity size={20} />,
    text: "Beratung zu Lebensstiländerungen: Ernährung, Bewegung und Gewichtsreduktion",
  },
  {
    icon: <ShieldCheck size={20} />,
    text: "Vorsorgeuntersuchungen zur Früherkennung diabetischer Folgeschäden an Augen, Nieren, Nerven und Gefäßen",
  },
  {
    icon: <Users size={20} />,
    text: "Einbeziehung von Angehörigen und koordinierte Zusammenarbeit mit Fachärzten und Therapeuten",
  },
  {
    icon: <BookOpen size={20} />,
    text: "Teilnahme an Schulungsprogrammen zur Stärkung von Wissen und Eigenverantwortung",
  },
];

const weitereLeistungen = [
  { label: "Diabetologie", path: "/leistungen/diabetologie" },
  { label: "Schulungen & Ernährungsberatung", path: "/leistungen/schulungen" },
  { label: "Adipositas & Hypertonie", path: "/leistungen/adipositas" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
];

export default function DMP() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="DMP-Programme" />
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
            <span>DMP-Programme</span>
          </div>
          <div className="leistung-hero__tag">
            <ClipboardList size={14} />
            Strukturierte Behandlung & Langzeitbetreuung
          </div>
          <h1 className="leistung-hero__title">
            DMP-Programme
            <br />
            Diabetes Typ 1 & Typ 2
          </h1>
          <p className="leistung-hero__subtitle">
            Disease-Management-Programme (DMP) sind strukturierte
            Behandlungsprogramme für Menschen mit chronischen Erkrankungen. Sie
            ermöglichen eine gezielte, langfristige und koordinierte Betreuung —
            für mehr Lebensqualität und Sicherheit im Alltag.
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
                Als spezialisierte Diabetologiepraxis sind wir offiziell für die
                Durchführung von DMP-Programmen für Diabetes Typ 1 und Typ 2
                zertifiziert. Unser Ziel ist eine kontinuierliche,
                evidenzbasierte Betreuung, die weit über den einzelnen
                Arztbesuch hinausgeht — individuell, strukturiert und auf Sie
                abgestimmt.
              </p>

              {/* DMP Typ 1 */}
              <div>
                <h2 className="leistung-content__section-title">
                  DMP Diabetes Typ 1
                </h2>
                <div className="leistung-list">
                  {dmpTyp1.map((item, i) => (
                    <div className="leistung-list__item" key={i}>
                      <div className="leistung-list__icon">{item.icon}</div>
                      <span className="leistung-list__text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DMP Typ 2 */}
              <div>
                <h2 className="leistung-content__section-title">
                  DMP Diabetes Typ 2
                </h2>
                <div className="leistung-list">
                  {dmpTyp2.map((item, i) => (
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
                <h3 className="leistung-sidebar__title">Jetzt einschreiben</h3>
                <p className="leistung-sidebar__text">
                  Sprechen Sie uns an — wir prüfen gemeinsam, ob eine
                  Einschreibung ins DMP für Sie sinnvoll ist.
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
