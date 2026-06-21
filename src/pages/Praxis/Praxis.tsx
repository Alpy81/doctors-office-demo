import { NavLink } from "react-router-dom";
import {
  Users,
  Award,
  Clock,
  HeartHandshake,
  ChevronRight,
  Building2,
} from "lucide-react";
import "./Praxis.css";
import praxisteam from "../../assets/images/praxisteam.jpg";
import arztUndAerztin from "../../assets/images/arzt-und-aerztin.jpg";
import behandlungsraum2 from "../../assets/images/behandlungsraum2.jpg";
import tresen from "../../assets/images/tresen.jpg";
import sprechzimmer from "../../assets/images/sprechzimmer.jpg";

const stats = [
  { number: "2025", label: "Praxiseröffnung" },
  { number: "2", label: "Ärzte" },
  { number: "10+", label: "Leistungen" },
  { number: "100%", label: "Engagement für Sie" },
];

const raeume = [
  {
    image: behandlungsraum2,
    title: "Behandlungszimmer",
    text: "Modernste Ausstattung für eine präzise Diagnostik und individuelle Behandlung.",
  },
  {
    image: sprechzimmer,
    title: "Sprechzimmer",
    text: "Ein ruhiger, angenehmer Raum für persönliche Gespräche und Beratungen.",
  },
  {
    image: tresen,
    title: "Empfang & Anmeldung",
    text: "Freundlicher Empfang, Rezeptausgabe und kompetente Beratung — immer für Sie da.",
  },
];

export default function Praxis() {
  return (
    <>
      {/* Hero */}
      <section className="praxis-hero">
        <div className="praxis-hero__bg">
          <img src={praxisteam} alt="Praxisteam" />
        </div>
        <div className="praxis-hero__overlay" />
        <div className="praxis-hero__deco">
          <div className="praxis-hero__deco-circle praxis-hero__deco-circle--1" />
          <div className="praxis-hero__deco-circle praxis-hero__deco-circle--2" />
        </div>
        <div className="praxis-hero__content">
          <div className="praxis-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Praxis</span>
          </div>
          <div className="praxis-hero__tag">
            <Building2 size={14} />
            Über unsere Praxis
          </div>
          <h1 className="praxis-hero__title">
            Willkommen in der Praxis Docteur en Medicine/Univ. Oran Faycal
            Chadli
          </h1>
          <p className="praxis-hero__subtitle">
            Eine neue Praxis mit einem klaren Ziel: Medizin, die den Menschen in
            den Mittelpunkt stellt. Hier verbinden sich Fachkompetenz,
            Leidenschaft und persönliche Fürsorge — für Ihre Gesundheit und Ihr
            Wohlbefinden.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="praxis-stats">
        <div className="container">
          <div className="praxis-stats__inner">
            {stats.map((s, i) => (
              <div className="praxis-stats__item" key={i}>
                <span className="praxis-stats__number">{s.number}</span>
                <span className="praxis-stats__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Über uns */}
      <section className="praxis-about">
        <div className="container">
          <div className="praxis-about__inner">
            {/* Bilder */}
            <div className="praxis-about__images">
              <div className="praxis-about__img-main">
                <img src={arztUndAerztin} alt="Dr. Chadli und seine Frau" />
              </div>
              <div className="praxis-about__img-secondary">
                <img src={behandlungsraum2} alt="Behandlungsraum" />
              </div>
            </div>

            {/* Text */}
            <div className="praxis-about__content">
              <span className="praxis-about__tag">Unsere Geschichte</span>
              <h2 className="praxis-about__title">
                Medizin mit <span>Herz & Kompetenz</span>
              </h2>
              <p className="praxis-about__text">
                Unsere Praxis ist eine neue, modern ausgestattete
                Gemeinschaftspraxis in Frankfurt am Main, die Dr. Faycal Mahmoud
                Chadli gemeinsam mit seiner Frau führt. Als Facharzt für Innere
                Medizin, zertifizierter Diabetologe DDG, Hypertensiologe DHL und
                Adiposiologe bringt Dr. Chadli über 15 Jahre klinische Erfahrung
                aus renommierten Kliniken in Deutschland und Frankreich mit.
              </p>
              <p className="praxis-about__text">
                Wir stehen für eine Medizin, die zuhört. Wir nehmen uns Zeit für
                Sie — für Ihre Fragen, Ihre Sorgen und Ihre Gesundheitsziele.
                Dabei verbinden wir modernste Diagnostik und Therapie mit
                menschlicher Wärme und einem offenen Ohr.
              </p>
              <p className="praxis-about__text">
                Von der hausärztlichen Grundversorgung über spezialisierte
                Diabetologie bis hin zu DMP-Programmen und individuellen
                Vorsorgeuntersuchungen — wir sind Ihre erste Anlaufstelle für
                alle gesundheitlichen Anliegen.
              </p>

              {/* Feature Icons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "0.5rem",
                }}>
                {[
                  {
                    icon: <Award size={20} />,
                    text: "Zertifizierte Fachkompetenz in Diabetologie, Hypertonie & Adipositas",
                  },
                  {
                    icon: <HeartHandshake size={20} />,
                    text: "Persönliche & empathische Betreuung — jeder Patient ist einzigartig",
                  },
                  {
                    icon: <Users size={20} />,
                    text: "Arztehepaar mit Leidenschaft und einem eingespielten Team",
                  },
                  {
                    icon: <Clock size={20} />,
                    text: "Moderne Ausstattung und kurze Wartezeiten",
                  },
                ].map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}>
                    <div
                      style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "10px",
                        background: "rgba(74,184,216,0.12)",
                        color: "var(--color-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                      {f.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "var(--fs-sm)",
                        color: "var(--color-text-light)",
                        lineHeight: 1.7,
                        paddingTop: "10px",
                      }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA zur Vita */}
      <section
        style={{
          padding: "var(--space-3xl) 0",
          background:
            "linear-gradient(135deg, #0d2145 0%, #1A3A6B 60%, #1a5276 100%)",
          textAlign: "center",
        }}>
        <div className="container">
          <p
            style={{
              fontSize: "var(--fs-lg)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-white)",
              marginBottom: "var(--space-sm)",
              lineHeight: 1.4,
            }}>
            Lernen Sie Docteur en Medicine/Univ. Oran Faycal Chadli näher kennen
          </p>
          <p
            style={{
              fontSize: "var(--fs-base)",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "var(--space-lg)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginInline: "auto",
            }}>
            Über 15 Jahre klinische Erfahrung, mehrfache Fachzertifizierungen
            und eine Leidenschaft für seine Patienten — erfahren Sie mehr über
            seinen Werdegang.
          </p>
          <NavLink
            to="/vita"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "15px 40px",
              background: "linear-gradient(135deg, #ed8c63, #c0392b)",
              color: "var(--color-white)",
              borderRadius: "var(--radius-full)",
              fontSize: "var(--fs-sm)",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 6px 20px rgba(192, 57, 43, 0.40)",
            }}>
            Vita des Arztes entdecken →
          </NavLink>
        </div>
      </section>

      {/* Praxisräume */}
      <section className="praxis-rooms">
        <div className="container">
          <div className="praxis-rooms__header">
            <span className="praxis-rooms__tag">Unsere Räume</span>
            <h2 className="praxis-rooms__title">
              Moderne Praxis — angenehme Atmosphäre
            </h2>
          </div>
          <div className="praxis-rooms__grid">
            {raeume.map((r, i) => (
              <div className="praxis-rooms__card" key={i}>
                <div className="praxis-rooms__card-image">
                  <img src={r.image} alt={r.title} />
                </div>
                <div className="praxis-rooms__card-body">
                  <h3 className="praxis-rooms__card-title">{r.title}</h3>
                  <p className="praxis-rooms__card-text">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
