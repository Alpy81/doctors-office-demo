import { NavLink } from "react-router-dom";
import {
  Stethoscope,
  Heart,
  Droplets,
  BookOpen,
  ShieldCheck,
  Syringe,
  Brain,
  ClipboardList,
  Scale,
  Star,
  ArrowRight,
} from "lucide-react";
import "./LeistungenPreview.css";

const leistungen = [
  {
    icon: <Stethoscope size={26} />,
    iconClass: "icon--navy",
    title: "Hausärztliche Versorgung",
    text: "Umfassende Grundversorgung für Ihre Gesundheit — von der Diagnose bis zur Nachsorge.",
    path: "/leistungen/hausaerztlich",
  },
  {
    icon: <Heart size={26} />,
    iconClass: "icon--red",
    title: "Internistische Leistungen",
    text: "Innere Medizin auf höchstem Niveau — präzise Diagnostik und individuelle Therapie.",
    path: "/leistungen/internistisch",
  },
  {
    icon: <Droplets size={26} />,
    iconClass: "icon--blue",
    title: "Diabetologie",
    text: "Alle Diabetesformen inkl. Schwangerschaftsdiabetes — spezialisierte und einfühlsame Betreuung.",
    path: "/leistungen/diabetologie",
  },
  {
    icon: <BookOpen size={26} />,
    iconClass: "icon--teal",
    title: "Schulungen & Ernährungsberatung",
    text: "Wissen ist Gesundheit — wir begleiten Sie mit Schulungen und praktischer Ernährungsberatung.",
    path: "/leistungen/schulungen",
  },
  {
    icon: <ShieldCheck size={26} />,
    iconClass: "icon--green",
    title: "Vorsorge & Check-up",
    text: "Früherkennung schützt — professionelle Vorsorgeuntersuchungen für jede Lebensphase.",
    path: "/leistungen/vorsorge",
  },
  {
    icon: <Syringe size={26} />,
    iconClass: "icon--purple",
    title: "Impfungen",
    text: "Sicher und gut beraten — alle empfohlenen Schutzimpfungen für Kinder und Erwachsene.",
    path: "/leistungen/impfungen",
  },
  {
    icon: <Brain size={26} />,
    iconClass: "icon--orange",
    title: "Psychosomatik",
    text: "Körper und Seele im Gleichgewicht — einfühlsame psychosomatische Grundversorgung.",
    path: "/leistungen/psychosomatik",
  },
  {
    icon: <ClipboardList size={26} />,
    iconClass: "icon--navy",
    title: "DMP-Programme",
    text: "Strukturierte Behandlungsprogramme für Diabetes Typ 1 & Typ 2 — langfristig und wirksam.",
    path: "/leistungen/dmp",
  },
  {
    icon: <Scale size={26} />,
    iconClass: "icon--teal",
    title: "Adipositas & Hypertonie",
    text: "Gewicht und Blutdruck im Griff — nachhaltige Therapiekonzepte für mehr Lebensqualität.",
    path: "/leistungen/adipositas",
  },
  {
    icon: <Star size={26} />,
    iconClass: "icon--pink",
    title: "IGeL-Leistungen",
    text: "Individuelle Gesundheitsleistungen — für alle, die mehr für ihre Gesundheit tun möchten.",
    path: "/leistungen/igel",
  },
];

export default function LeistungenPreview() {
  return (
    <section className="leistungen-preview">
      <div className="container">
        {/* Header */}
        <div className="leistungen-preview__header">
          <span className="leistungen-preview__tag">Unser Angebot</span>
          <h2 className="leistungen-preview__title">
            Leistungen für Ihre Gesundheit
          </h2>
          <p className="leistungen-preview__subtitle">
            Von der hausärztlichen Grundversorgung bis zur spezialisierten
            Diabetologie — wir sind für Sie da.
          </p>
        </div>

        {/* Grid */}
        <div className="leistungen-preview__grid">
          {leistungen.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="leistungen-preview__card">
              <div className={`leistungen-preview__icon ${item.iconClass}`}>
                {item.icon}
              </div>
              <h3 className="leistungen-preview__card-title">{item.title}</h3>
              <p className="leistungen-preview__card-text">{item.text}</p>
              <span className="leistungen-preview__card-link">
                Mehr erfahren <ArrowRight size={14} />
              </span>
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <div className="leistungen-preview__cta">
          <NavLink
            to="/leistungen/hausaerztlich"
            className="leistungen-preview__cta-btn">
            Alle Leistungen entdecken
            <ArrowRight size={18} />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
