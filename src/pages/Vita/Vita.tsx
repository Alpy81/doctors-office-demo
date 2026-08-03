import { NavLink } from "react-router-dom";
import { Users, ChevronRight, User, UserPlus } from "lucide-react";
import "./Vita.css";

export default function Vita() {
  return (
    <>
      {/* Hero */}
      <section className="team-page-hero">
        <div className="team-page-hero__overlay" />
        <div className="team-page-hero__deco">
          <div className="team-page-hero__deco-circle team-page-hero__deco-circle--1" />
          <div className="team-page-hero__deco-circle team-page-hero__deco-circle--2" />
        </div>
        <div className="team-page-hero__content">
          <div className="team-page-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>Team</span>
          </div>
          <div className="team-page-hero__tag">
            <Users size={14} />
            Unser Team
          </div>
          <h1 className="team-page-hero__title">
            Menschen, denen Sie vertrauen können
          </h1>
          <p className="team-page-hero__subtitle">
            Hinter jeder guten Praxis stehen Menschen mit Leidenschaft. Lernen
            Sie das Team der Praxis Dr. Chadli kennen — kompetent, herzlich und
            immer für Sie da.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="team-page-main">
        <div className="container">
          {/* ── Arzt ── */}
          <div className="team-page-section">
            <h2 className="team-page-section-title">Unser Praxisteam</h2>
            <div className="team-page-doctor">
              <div className="team-page-doctor__image">
                <div className="team-page-doctor__image-placeholder">
                  <User size={44} />
                </div>
              </div>
              <div className="team-page-doctor__body">
                <span className="team-page-doctor__role">
                  Arzt & Praxisinhaber
                </span>
                <h2 className="team-page-doctor__name">
                  Heur docteur en médecine Fayçal Chadli
                </h2>
                <div className="team-page-doctor__tags">
                  <span className="team-page-doctor__tag">
                    Facharzt für Innere Medizin
                  </span>
                  <span className="team-page-doctor__tag">
                    Diabetologe DDG/LAK
                  </span>
                  <span className="team-page-doctor__tag">
                    Hypertensiologe DHL
                  </span>
                  <span className="team-page-doctor__tag">
                    Adiposiologe DAG/DDG
                  </span>
                  <span className="team-page-doctor__tag">Notarzt</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Praxismanagement ── */}
          <div className="team-page-section">
            <span className="team-page-eyebrow">Praxismanagement</span>
            <h2 className="team-page-section-title">Organisation & Leitung</h2>
            <div className="team-page-grid team-page-grid--one">
              <div className="team-page-card">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <h3 className="team-page-card__name">Nawel Chiali</h3>
                  <span className="team-page-card__role">
                    Teamleitung Medizinische Fachangestellte
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Diabetesberatung ── */}
          <div className="team-page-section">
            <span className="team-page-eyebrow">Diabetesberatung</span>
            <h2 className="team-page-section-title">Beratung & Schulung</h2>
            <div className="team-page-grid team-page-grid--two">
              <div className="team-page-card">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <span className="team-page-card__role">
                    Diabetesberaterin DDG
                  </span>
                  <h3 className="team-page-card__name">Nawel Chiali</h3>
                  <span className="team-page-card__extra-title">
                    Akademischer Hintergrund
                  </span>
                  <div className="team-page-card__extra-list">
                    <span>M.Sc. Ernährungswissenschaften</span>
                    <span>Master Gesundheitswissenschaften</span>
                    <span>Bachelor Biologie (Zellbiologie und Genetik)</span>
                  </div>
                </div>
              </div>

              {/* Platzhalter — offene Stelle */}
              <div className="team-page-card team-page-card--vacant">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <UserPlus size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <span className="team-page-card__role">Diabetesberatung</span>
                  <h3 className="team-page-card__name">Wir wachsen weiter</h3>
                  <span className="team-page-card__vacant-badge">
                    <UserPlus size={14} />
                    Verstärkung gesucht
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Medizinische Fachangestellte ── */}
          <div className="team-page-section">
            <span className="team-page-eyebrow">
              Medizinische Fachangestellte
            </span>

            <div className="team-page-grid">
              <div className="team-page-card">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <h3 className="team-page-card__name">Diana Masalchi</h3>
                  <span className="team-page-card__role">
                    Medizinische Fachangestellte (in Ausbildung)
                  </span>
                  <p className="team-page-card__extra">
                    Stellvertretende Teamleitung Medizinische Fachangestellte
                  </p>
                </div>
              </div>

              <div className="team-page-card">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <h3 className="team-page-card__name">Karolina Paula</h3>
                  <span className="team-page-card__role">
                    Medizinische Fachangestellte
                  </span>
                </div>
              </div>

              <div className="team-page-card">
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <h3 className="team-page-card__name">Nelja Zgodic</h3>
                  <span className="team-page-card__role">
                    Medizinische Fachangestellte
                  </span>
                  <p className="team-page-card__extra">Derzeit in Elternzeit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
