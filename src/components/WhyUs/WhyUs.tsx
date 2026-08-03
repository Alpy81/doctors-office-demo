import { NavLink } from "react-router-dom";
import {
  HeartHandshake,
  Stethoscope,
  Droplets,
  Languages,
  ArrowRight,
} from "lucide-react";
import "./WhyUs.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";
import sprechzimmer from "../../assets/images/sprechzimmer.jpg";

const features = [
  {
    icon: <HeartHandshake size={24} />,
    iconBg: "icon--red",
    title: "Persönliche Betreuung",
    text: "Wir nehmen uns Zeit für Ihre Anliegen und entwickeln individuelle Behandlungskonzepte.",
  },
  {
    icon: <Stethoscope size={24} />,
    iconBg: "icon--blue",
    title: "Internistische Kompetenz",
    text: "Umfassende internistische Versorgung — von der Vorsorge bis zur langfristigen Betreuung chronischer Erkrankungen.",
  },
  {
    icon: <Droplets size={24} />,
    iconBg: "icon--navy",
    title: "Diabetologische Spezialisierung",
    text: "Betreuung aller Diabetesformen — von der Diagnose bis zur langfristigen Therapie.",
  },
  {
    icon: <Languages size={24} />,
    iconBg: "icon--teal",
    title: "Mehrsprachige Beratung",
    text: "Beratung auf Deutsch, Französisch, Englisch und Arabisch.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us__inner">
          {/* Linke Seite — Bilder */}
          <div className="why-us__images">
            <div className="why-us__img-main">
              <img src={behandlungsraum} alt="Behandlungsraum" />
            </div>
            <div className="why-us__img-secondary">
              <img src={sprechzimmer} alt="Sprechzimmer" />
            </div>
            <div className="why-us__badge">
              <span className="why-us__badge-number">100%</span>
              <span className="why-us__badge-label">
                Engagement
                <br />
                für Sie
              </span>
            </div>
          </div>

          {/* Rechte Seite */}
          <div className="why-us__right">
            <span className="why-us__tag">Warum wir?</span>

            <h2 className="why-us__title">Warum Praxis Chadli?</h2>

            <p className="why-us__text">
              Medizin bedeutet für uns mehr als Diagnosen und Behandlungen. Sie
              beginnt mit Zuhören, Vertrauen und dem gemeinsamen Ziel, für jeden
              Menschen den bestmöglichen Weg zu finden.
            </p>

            {/* Features */}
            <div className="why-us__features">
              {features.map((f, i) => (
                <div className="why-us__feature" key={i}>
                  <div className={`why-us__feature-icon ${f.iconBg}`}>
                    {f.icon}
                  </div>
                  <div className="why-us__feature-body">
                    <h3 className="why-us__feature-title">{f.title}</h3>
                    <p className="why-us__feature-text">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <NavLink to="/praxis" className="why-us__cta">
              Mehr über uns erfahren
              <ArrowRight size={18} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
