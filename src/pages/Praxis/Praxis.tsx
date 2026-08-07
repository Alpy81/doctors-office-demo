import { NavLink } from "react-router-dom";
import {
  HeartHandshake,
  Stethoscope,
  Droplets,
  ShieldCheck,
  ChevronRight,
  Building2,
} from "lucide-react";
import "./Praxis.css";
import praxisteam from "../../assets/images/praxisteam.jpg";
import arztUndAerztin from "../../assets/images/arzt-und-aerztin.jpg";
import behandlungsraum2 from "../../assets/images/behandlungsraum2.jpg";
import tresen from "../../assets/images/tresen.jpg";
import sprechzimmer from "../../assets/images/sprechzimmer.jpg";

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

const philosophie = [
  {
    icon: <HeartHandshake size={22} />,
    title: "Persönliche Betreuung",
    text: "Wir nehmen uns Zeit für Ihre Fragen und begleiten Sie individuell und langfristig.",
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Moderne Diagnostik",
    text: "Zeitgemäße Untersuchungsverfahren ermöglichen eine präzise Diagnostik und optimale Therapie.",
  },
  {
    icon: <Droplets size={22} />,
    title: "Diabetologie & Prävention",
    text: "Spezialisierte Betreuung bei Diabetes sowie strukturierte Schulungs- und DMP-Programme.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Hausärztliche Versorgung",
    text: "Von Vorsorge und Impfungen bis zur Behandlung chronischer Erkrankungen — alles unter einem Dach.",
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
            Innere Medizin · Diabetologie · Hausärztliche Versorgung ·
            Notfallmedizin
          </div>
          <h1 className="praxis-hero__title">
            Willkommen in der Praxis Chadli in Frankfurt-Fechenheim
          </h1>
          <p className="praxis-hero__subtitle">
            Wir verbinden moderne internistische Medizin mit persönlicher und
            vertrauensvoller Betreuung. Unser Ziel ist es, Patientinnen und
            Patienten in jeder Lebensphase kompetent, verständlich und
            langfristig zu begleiten.
          </p>
        </div>
      </section>

      {/* Unsere Philosophie */}
      <section className="praxis-about">
        <div className="container">
          <div className="praxis-about__inner">
            {/* Bilder */}
            <div className="praxis-about__images">
              <div className="praxis-about__img-main">
                <img src={arztUndAerztin} alt="Dr. Chadli und Frau Chadli" />
              </div>
              <div className="praxis-about__img-secondary">
                <img src={behandlungsraum2} alt="Behandlungsraum" />
              </div>
            </div>

            {/* Text */}
            <div className="praxis-about__content">
              <span className="praxis-about__tag">Unsere Philosophie</span>
              <h2 className="praxis-about__title">
                Medizin mit&nbsp;Kompetenz.
                <br />
                <span>Zeit für Menschen.</span>
              </h2>
              <p className="praxis-about__text">
                Ob Vorsorgeuntersuchung, Behandlung akuter Beschwerden oder
                Betreuung chronischer Erkrankungen — wir nehmen uns Zeit für
                Ihre individuellen Anliegen und entwickeln gemeinsam mit Ihnen
                die passende Therapie.
              </p>
              <p className="praxis-about__text">
                Durch moderne Diagnostik, leitliniengerechte Medizin und eine
                enge Zusammenarbeit mit Fachärztinnen und Fachärzten bieten wir
                Ihnen eine umfassende medizinische Versorgung aus einer Hand.
              </p>

              {/* Feature Icons */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginTop: "0.5rem",
                }}
              >
                {philosophie.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "14px",
                    }}
                  >
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
                      }}
                    >
                      {f.icon}
                    </div>
                    <div style={{ paddingTop: "6px" }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "var(--fs-sm)",
                          fontWeight: 700,
                          color: "var(--color-primary)",
                          marginBottom: "3px",
                        }}
                      >
                        {f.title}
                      </h3>
                      <span
                        style={{
                          fontSize: "var(--fs-sm)",
                          color: "var(--color-text-light)",
                          lineHeight: 1.7,
                        }}
                      >
                        {f.text}
                      </span>
                    </div>
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
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: "var(--fs-lg)",
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-white)",
              marginBottom: "var(--space-sm)",
              lineHeight: 1.4,
            }}
          >
            Lernen Sie unser Team näher kennen
          </p>
          <p
            style={{
              fontSize: "var(--fs-base)",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "var(--space-lg)",
              lineHeight: 1.8,
              maxWidth: "520px",
              marginInline: "auto",
            }}
          >
            Über 15 Jahre klinische Erfahrung, mehrfache Fachzertifizierungen
            und ein engagiertes Praxisteam — erfahren Sie mehr über die Menschen
            hinter der Praxis Chadli.
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
            }}
          >
            Unser Team entdecken →
          </NavLink>
        </div>
      </section>

      {/* Praxisräume */}
      <section className="praxis-rooms">
        <div className="container">
          <div className="praxis-rooms__header">
            <span className="praxis-rooms__tag">Unsere Räume</span>
            <h2 className="praxis-rooms__title">
              Moderne Praxis —<br /> angenehme Atmosphäre
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
