import { NavLink } from "react-router-dom";
import {
  Syringe,
  ShieldCheck,
  Users,
  Sun,
  Heart,
  ClipboardList,
  CalendarCheck,
  ArrowRight,
  ChevronRight,
  Baby,
  Globe,
} from "lucide-react";
import "../../components/LeistungPage/LeistungPage.css";
import behandlungsraum from "../../assets/images/behandlungsraum2.jpg";

const impfungen = [
  {
    icon: <ShieldCheck size={20} />,
    text: "Grund- und Auffrischimpfungen nach STIKO-Empfehlungen: Tetanus, Diphtherie, Keuchhusten, Masern, Mumps, Röteln, Polio, Hepatitis B, Windpocken, Gürtelrose, HPV",
  },
  {
    icon: <Sun size={20} />,
    text: "Saisonale Impfungen: Grippeschutzimpfung und COVID-19",
  },
  {
    icon: <Users size={20} />,
    text: "Impfungen für Risikogruppen: Hepatitis B, Pneumokokken und weitere",
  },
  {
    icon: <Baby size={20} />,
    text: "HPV-Impfung für Mädchen und Jungen — Schutz vor Gebärmutterhalskrebs und weiteren HPV-bedingten Erkrankungen",
  },
  {
    icon: <Heart size={20} />,
    text: "Meningokokken-Impfung — Schutz vor bakterieller Hirnhautentzündung",
  },
  {
    icon: <Globe size={20} />,
    text: "Reiseimpfungen und Reisemedizinische Beratung — optimal vorbereitet für Ihre Reise",
  },
  {
    icon: <ClipboardList size={20} />,
    text: "Impfpassprüfung und -ergänzung — wir behalten Ihren Impfschutz im Blick",
  },
  {
    icon: <Syringe size={20} />,
    text: "Erstellung eines individuellen Impfplans — abgestimmt auf Ihr Alter, Ihren Gesundheitszustand und Ihre Lebensweise",
  },
];

const weitereLeistungen = [
  { label: "Hausärztliche Versorgung", path: "/leistungen/hausaerztlich" },
  { label: "Vorsorge & Check-up", path: "/leistungen/vorsorge" },
  { label: "Internistische Leistungen", path: "/leistungen/internistisch" },
  { label: "IGeL-Leistungen", path: "/leistungen/igel" },
  { label: "DMP-Programme", path: "/leistungen/dmp" },
];

export default function Impfungen() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Impfungen" />
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
            <span>Impfungen</span>
          </div>
          <div className="leistung-hero__tag">
            <Syringe size={14} />
            Impfschutz & Prävention
          </div>
          <h1 className="leistung-hero__title">Impfungen</h1>
          <p className="leistung-hero__subtitle">
            Ein aktueller Impfschutz ist ein wichtiger Bestandteil der
            Gesundheitsvorsorge. Wir unterstützen Sie dabei, Ihre Impfungen im
            Blick zu behalten, und beraten Sie individuell zu sinnvollen
            Auffrischungen — für Sie und Ihre Familie.
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
                Impfungen schützen nicht nur Sie selbst, sondern auch Ihr Umfeld
                — besonders vulnerable Personen wie Säuglinge, ältere Menschen
                und Immungeschwächte. In unserer Praxis beraten wir Sie
                umfassend zu allen empfohlenen Impfungen und erstellen gemeinsam
                mit Ihnen einen individuellen Impfplan, der zu Ihrem Leben
                passt.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  Unser Impfangebot im Überblick
                </h2>
                <div className="leistung-list">
                  {impfungen.map((item, i) => (
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
                  Sprechen Sie uns gerne an — wir erstellen gemeinsam mit Ihnen
                  einen passenden Impfplan.
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
