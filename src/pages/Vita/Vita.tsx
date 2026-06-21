import { NavLink } from "react-router-dom";
import {
  GraduationCap,
  Stethoscope,
  Award,
  ChevronRight,
  MapPin,
} from "lucide-react";
import "./Vita.css";
import arzt from "../../assets/images/arzt.jpg";

const werdegang = [
  {
    year: "2003 – 2009",
    title: "Studium der Humanmedizin",
    detail: "Universität Oran, Algerien",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2009 – 2010",
    title: "Klinisches Jahr",
    detail:
      "Rotationen in Kinderheilkunde, Gynäkologie/Geburtshilfe (Krankenhaus Jeanne de Flandre, Lille) sowie Innere Medizin und Neurochirurgie (La Pitié Salpêtrière, Paris)",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2010",
    title: "Abschluss: Diplom als Arzt",
    detail: "Medizinische Fakultät, Frankreich",
    icon: <Award size={18} />,
  },
  {
    year: "2010 – 2011",
    title: "Masterstudium Onkologie",
    detail: "Medizinische Fakultät Kremlin-Bicêtre, Paris, Frankreich",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2012 – 2015",
    title: "Assistenzarzt Innere Medizin & Akutgeriatrie",
    detail: "Gesundheitszentrum Treuchtlingen, Bayern",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2015 – 2016",
    title: "Assistenzarzt Neurologie",
    detail: "Inkl. Stroke Unit und Intensivstation — Klinikum Bamberg, Bayern",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2015",
    title: "Approbation als Arzt in Deutschland",
    detail: "Regierung von Oberbayern",
    icon: <Award size={18} />,
  },
  {
    year: "2016 – 2018",
    title: "Assistenzarzt Innere Medizin, Kardiologie & Gastroenterologie",
    detail: "Inkl. Intensivstation — SLK-Kliniken Baden-Württemberg",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2018 – 2019",
    title: "Ärztlicher Bereitschaftsdienst (ÄBD)",
    detail: "Sitz- und Fahrdienst",
    icon: <MapPin size={18} />,
  },
  {
    year: "2018 – 2020",
    title: "Assistenzarzt Zentrale Notaufnahme",
    detail: "Sana-Klinikum Offenbach",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2019",
    title: "Zusatzweiterbildung Notfallmedizin",
    detail:
      "Seither aktiver Notarztdienst in Frankfurt, Offenbach, Baden-Württemberg und Bayern",
    icon: <Award size={18} />,
  },
  {
    year: "2020 – 2021",
    title: "Assistenzarzt Kardiologie",
    detail: "Rotkreuzklinik Frankfurt",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2021 – 2022",
    title: "Honorararzt Kardiologie",
    detail: "Rotkreuzklinik Wertheim",
    icon: <Stethoscope size={18} />,
  },
  {
    year: "2022",
    title: "Facharzt für Innere Medizin",
    detail: "Urkunde Facharzt für Innere Medizin",
    icon: <Award size={18} />,
  },
  {
    year: "2022 – 2025",
    title: "Weiterbildung Diabetologie",
    detail: "Spezialisierung auf alle Diabetesformen",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2024",
    title: "Zusatzqualifikation Hypertensiologe",
    detail: "Deutsche Hochdruckliga (DHL)",
    icon: <Award size={18} />,
  },
  {
    year: "2025",
    title: "Diabetologe DDG",
    detail: "Deutsche Diabetes Gesellschaft",
    icon: <Award size={18} />,
  },
  {
    year: "2025",
    title: "Diabetologe Landesärztekammer Hessen",
    detail: "Anerkannte Weiterbildung Diabetologie",
    icon: <Award size={18} />,
  },
  {
    year: "2025",
    title: "Zusatzqualifikation Adiposiologe",
    detail: "DAG / DDG — Deutsche Adipositas-Gesellschaft",
    icon: <Award size={18} />,
  },
];

export default function Vita() {
  return (
    <>
      {/* Hero */}
      <section className="vita-hero">
        <div className="vita-hero__overlay" />
        <div className="vita-hero__deco">
          <div className="vita-hero__deco-circle vita-hero__deco-circle--1" />
          <div className="vita-hero__deco-circle vita-hero__deco-circle--2" />
        </div>
        <div className="vita-hero__content">
          <div className="vita-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Vita des Arztes</span>
          </div>
          <div className="vita-hero__tag">
            <GraduationCap size={14} />
            Werdegang & Qualifikationen
          </div>
          <h1 className="vita-hero__title">
            Docteur en Medicine/Univ.Oran Faycal Chadli
          </h1>
          <p className="vita-hero__subtitle">
            Facharzt für Innere Medizin · Diabetologe DDG/LAK · Hypertensiologe
            DHL · Adiposiologe DAG/DDG
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="vita-main">
        <div className="container">
          <div className="vita-main__inner">
            {/* Linke Seite — Bild & Info */}
            <aside className="vita-sidebar">
              <div className="vita-sidebar__image-card">
                <div className="vita-sidebar__image">
                  <img src={arzt} alt="Dr. Faycal Mahmoud Chadli" />
                </div>
                <div className="vita-sidebar__info">
                  <h2 className="vita-sidebar__name">
                    Docteur en Medicine/Univ. Oran Faycal Chadli
                  </h2>
                  <span className="vita-sidebar__role">
                    Facharzt für Innere Medizin
                  </span>
                  <div className="vita-sidebar__divider" />
                  <div className="vita-sidebar__tags">
                    <span className="vita-sidebar__tag">Internist</span>
                    <span className="vita-sidebar__tag">
                      Diabetologe DDG/LAK
                    </span>
                    <span className="vita-sidebar__tag">
                      Hypertensiologe DHL
                    </span>
                    <span className="vita-sidebar__tag">
                      Adiposiologe DAG/DDG
                    </span>
                    <span className="vita-sidebar__tag">Notarzt</span>
                    <span className="vita-sidebar__tag">Innere Medizin</span>
                  </div>
                </div>
              </div>
            </aside>

            {/* Rechte Seite — Timeline */}
            <div className="vita-content">
              <h2 className="vita-content__title">Werdegang</h2>
              <div className="vita-timeline">
                {werdegang.map((item, i) => (
                  <div className="vita-timeline__item" key={i}>
                    <div className="vita-timeline__marker">
                      <div className="vita-timeline__icon">{item.icon}</div>
                      {i < werdegang.length - 1 && (
                        <div className="vita-timeline__line" />
                      )}
                    </div>
                    <div className="vita-timeline__body">
                      <span className="vita-timeline__year">{item.year}</span>
                      <h3 className="vita-timeline__title">{item.title}</h3>
                      <p className="vita-timeline__detail">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
