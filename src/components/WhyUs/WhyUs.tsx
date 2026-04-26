import { NavLink } from "react-router-dom";
import { Award, Users, Clock, HeartHandshake, ArrowRight } from "lucide-react";
import "./WhyUs.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";
import sprechzimmer from "../../assets/images/sprechzimmer.jpg";

const features = [
  {
    icon: <Award size={24} />,
    iconBg: "icon--blue",
    title: "Spezialisierte Fachkompetenz",
    text: "Als zertifizierter Diabetologe bringt Dr. Chadli jahrelange Expertise in der Behandlung aller Diabetesformen mit — für Ihre bestmögliche Versorgung.",
  },
  {
    icon: <HeartHandshake size={24} />,
    iconBg: "icon--red",
    title: "Persönliche & empathische Betreuung",
    text: "Wir nehmen uns Zeit für Sie. Jeder Patient ist einzigartig — unsere Behandlung ist es auch. Vertrauen und Offenheit stehen bei uns an erster Stelle.",
  },
  {
    icon: <Users size={24} />,
    iconBg: "icon--navy",
    title: "Ein Team, das zusammenhält",
    text: "Als Arztehepaar führen Dr. Chadli und seine Frau die Praxis mit Leidenschaft. Unser eingespieltes Team begleitet Sie von der Anmeldung bis zur Nachsorge.",
  },
  {
    icon: <Clock size={24} />,
    iconBg: "icon--teal",
    title: "Moderne Ausstattung & kurze Wege",
    text: "Modernste Diagnostik, digitale Akten und eine freundliche Atmosphäre — in unserer neuen Praxis erwartet Sie Medizin auf dem neuesten Stand.",
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

            <h2 className="why-us__title">
              Ihre Gesundheit ist
              <span> unsere Berufung</span>
            </h2>

            <p className="why-us__text">
              In der Praxis Dr. Chadli verbinden wir medizinische Exzellenz mit
              menschlicher Wärme. Wir glauben, dass gute Medizin dann entsteht,
              wenn Arzt und Patient einander vertrauen.
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
