import { NavLink } from "react-router-dom";
import {
  Brain,
  Heart,
  MessageCircle,
  Search,
  Users,
  Leaf,
  ClipboardList,
  HeartHandshake,
  CalendarCheck,
  Phone,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import sprechzimmer from "../../assets/images/sprechzimmer.jpg";

const leistungen = [
  {
    icon: <ClipboardList size={20} />,
    text: "Detaillierte Anamnese, um Wechselwirkungen zwischen körperlichen und seelischen Beschwerden zu erkennen",
  },
  {
    icon: <MessageCircle size={20} />,
    text: "Gespräche über Lebensumstände, Stressfaktoren und soziale Belastungen",
  },
  {
    icon: <Brain size={20} />,
    text: "Diagnose von psychosomatischen Erkrankungen wie funktionelle oder somatoforme Störungen, chronische Erschöpfung und Schlafstörungen",
  },
  {
    icon: <Search size={20} />,
    text: "Ausschluss organischer Ursachen durch gezielte Untersuchungen",
  },
  {
    icon: <Users size={20} />,
    text: "Bei Bedarf Überweisung an Fachärzte, Psychotherapeuten oder Beratungsstellen",
  },
  {
    icon: <Leaf size={20} />,
    text: "Empfehlungen für unterstützende Maßnahmen wie Physiotherapie, Entspannungstechniken und soziale Hilfen",
  },
  {
    icon: <Heart size={20} />,
    text: "Beratung zu Stressbewältigung und Entspannung im Alltag",
  },
  {
    icon: <HeartHandshake size={20} />,
    text: "Begleitung im Umgang mit chronischen Erkrankungen — einfühlsam und langfristig",
  },
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Schulungen & Ernährung", path: "/leistungen/schulungen" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
];

export default function Psychosomatik() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={sprechzimmer} alt="Sprechzimmer" />
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
            <span>Psychosomatische Grundversorgung</span>
          </div>
          <div className="leistung-hero__tag">
            <Brain size={14} />
            Körper & Seele im Gleichgewicht
          </div>
          <h1 className="leistung-hero__title">
            Psychosomatische Grundversorgung
          </h1>
          <p className="leistung-hero__subtitle">
            Körper und Seele sind eng miteinander verbunden — seelische
            Belastungen können körperliche Beschwerden verstärken und umgekehrt.
            Im Rahmen der psychosomatischen Grundversorgung unterstützen wir Sie
            dabei, diese Zusammenhänge besser zu verstehen und zu bewältigen.
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
                In unserer Praxis nehmen wir uns Zeit für Sie — nicht nur für
                Ihre körperlichen Beschwerden, sondern auch für das, was Sie
                bewegt und belastet. Denn wahre Gesundheit umfasst immer beides:
                Körper und Seele. Mit Empathie, Offenheit und ärztlicher
                Kompetenz begleiten wir Sie auf dem Weg zu mehr Wohlbefinden.
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
                  Wir hören zu — sprechen Sie uns an. Gemeinsam finden wir den
                  richtigen Weg für Sie.
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
