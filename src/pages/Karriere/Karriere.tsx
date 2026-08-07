import { NavLink } from "react-router-dom";
import {
  Award,
  Mail,
  ChevronRight,
  Briefcase,
  Stethoscope,
  GraduationCap,
  UserPlus,
  ClipboardCheck,
  HeartPulse,
} from "lucide-react";
import "./Karriere.css";
import praxisteam from "../../assets/images/praxisteam.jpg";

const offeneStellen = [
  {
    icon: <Stethoscope size={22} />,
    title: "Ärztinnen und Ärzte in Weiterbildung",
    text: "Innere Medizin — Weiterbildungsassistenz in einem erfahrenen Team.",
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Medizinische Fachangestellte (MFA)",
    text: "Verstärkung für unser Praxisteam in der medizinischen und organisatorischen Betreuung.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Auszubildende zur/zum MFA",
    text: "Starten Sie Ihre Ausbildung zur Medizinischen Fachangestellten bei uns.",
  },
  {
    icon: <UserPlus size={22} />,
    title: "Nichtärztliche Praxisassistent/-innen (NäPA)",
    text: "Unterstützung des Arztes bei delegierbaren ärztlichen Leistungen.",
  },
  {
    icon: <Award size={22} />,
    title: "Diabetesberater/-innen DDG",
    text: "Fachliche Betreuung und Schulung unserer Patientinnen und Patienten mit Diabetes.",
  },
  {
    icon: <ClipboardCheck size={22} />,
    title: "Diabetesassistent/-innen DDG",
    text: "Unterstützung bei der strukturierten Diabetesbetreuung und -schulung.",
  },
];

export default function Karriere() {
  return (
    <>
      {/* Hero */}
      <section className="karriere-hero">
        <div className="karriere-hero__bg">
          <img src={praxisteam} alt="Team Praxis Dr. Chadli" />
        </div>
        <div className="karriere-hero__overlay" />
        <div className="karriere-hero__deco">
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--1" />
          <div className="karriere-hero__deco-circle karriere-hero__deco-circle--2" />
        </div>
        <div className="karriere-hero__content">
          <div className="karriere-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Karriere</span>
          </div>
          <div className="karriere-hero__tag">
            <Briefcase size={14} />
            Wir suchen Verstärkung
          </div>
          <h1 className="karriere-hero__title">
            Werden Sie Teil der <br></br>Praxis Chadli
          </h1>
          <h2 className="karriere-hero-title2">
            Medizin mit Kompetenz.
            <br /> Zeit für Menschen.
          </h2>
          <p className="karriere-hero__subtitle">
            Sie möchten in einer internistischen Praxis arbeiten, in der
            Teamgeist, Wertschätzung und eine hochwertige Patientenversorgung im
            Mittelpunkt stehen? Dann freuen wir uns darauf, Sie kennenzulernen.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="karriere-main">
        <div className="container">
          <div className="karriere-main__inner">
            {/* Content */}
            <div className="karriere-content">
              <h1 className="karriere-content__intro">Offene Stellen</h1>

              <p className="karriere-content__lead">
                Wir freuen uns auf Bewerbungen engagierter Menschen, die
                gemeinsam mit uns eine moderne internistische und
                diabetologische Praxis mitgestalten möchten.
              </p>

              <p className="karriere-content__subtitle">
                Aktuell suchen wir insbesondere:
              </p>

              <div className="karriere-benefits">
                {offeneStellen.map((b, i) => (
                  <div className="karriere-benefit" key={i}>
                    <div className="karriere-benefit__icon">{b.icon}</div>
                    <div className="karriere-benefit__body">
                      <h3 className="karriere-benefit__title">{b.title}</h3>
                      <p className="karriere-benefit__text">{b.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Jetzt bewerben */}
              <div className="karriere-apply">
                <NavLink
                  to="/karriere/bewerbung"
                  className="karriere-apply__title-link"
                >
                  <h2 className="karriere-apply__title">Jetzt bewerben</h2>
                </NavLink>
                <p className="karriere-apply__text">
                  Haben wir Ihr Interesse geweckt?
                </p>
                <p className="karriere-apply__text">
                  Dann freuen wir uns auf Ihre Bewerbung.
                </p>
                <p className="karriere-apply__text karriere-apply__text--bold">
                  Bitte senden Sie Ihre vollständigen Bewerbungsunterlagen per
                  E-Mail an:
                </p>
                <a
                  href="mailto:bewerbung@praxis-chadli.de"
                  className="karriere-apply__email"
                >
                  <Mail size={17} />
                  bewerbung@praxis-chadli.de
                </a>
                <p className="karriere-apply__text karriere-apply__text--bold">
                  Initiativbewerbungen sind jederzeit herzlich willkommen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="karriere-sidebar">
              {/* CTA Card */}
              <div className="karriere-sidebar__card karriere-sidebar__card--cta">
                <h3 className="karriere-sidebar__title">Online bewerben</h3>
                <p className="karriere-sidebar__text">
                  Nutzen Sie unser Online-Formular — schnell, einfach und direkt
                  mit Datei-Upload.
                </p>
                <NavLink
                  to="/karriere/bewerbung"
                  className="karriere-sidebar__btn"
                >
                  <Mail size={17} />
                  Jetzt bewerben
                </NavLink>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
