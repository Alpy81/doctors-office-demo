import { NavLink } from "react-router-dom";
import { CalendarCheck, Activity } from "lucide-react";
import "./Hero.css";
import praxisteam from "../../assets/images/praxisteam.jpg";
import arztUndAerztin from "../../assets/images/arzt-und-aerztin.jpg";

export default function Hero() {
  return (
    <section className="hero">
      {/* Hintergrundbild */}
      <div className="hero__bg">
        <img src={praxisteam} alt="Praxisteam" />
      </div>

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Dekorative Kreise */}
      <div className="hero__deco">
        <div className="hero__deco-circle hero__deco-circle--1" />
        <div className="hero__deco-circle hero__deco-circle--2" />
        <div className="hero__deco-circle hero__deco-circle--3" />
      </div>

      {/* Content */}
      <div className="hero__content">
        {/* Linke Seite */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Ihre Praxis in guten Händen
          </div>

          <h1 className="hero__title">
            Medizin mit
            <span className="hero__title-accent">
              <span style={{ color: "var(--color-accent)" }}>Herz</span>
              <span style={{ color: "var(--color-white)" }}> & </span>
              Kompetenz
            </span>
          </h1>

          <p className="hero__subtitle">
            Willkommen in der Praxis Docteur en Medicine/Univ. Oran Faycal
            Chadli Chadli — Ihr erfahrener Diabetologe und Hausarzt. Wir
            begleiten Sie mit modernster Medizin, persönlicher Fürsorge und
            einem Team, das Sie kennt.
          </p>

          {/* Statistiken */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">15+</span>
              <span className="hero__stat-label">Jahre Erfahrung</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">10+</span>
              <span className="hero__stat-label">Leistungen</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">2</span>
              <span className="hero__stat-label">Ärzte</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero__actions">
            <NavLink to="/kontakt" className="hero__btn hero__btn--primary">
              <CalendarCheck size={18} />
              Termin vereinbaren
            </NavLink>
            <NavLink
              to="/leistungen/diabetologie"
              className="hero__btn hero__btn--outline">
              <Activity size={18} />
              Unsere Leistungen
            </NavLink>
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="hero__right">
          <div className="hero__image-card">
            {/* Hauptbild */}
            <div className="hero__image-frame">
              <img src={arztUndAerztin} alt="Arzt und Ärztin" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
