import { NavLink } from 'react-router-dom'
import { Users, ChevronRight, User } from 'lucide-react'
import './Vita.css'

const teamMembers = [
  {
    name: 'Nawel Chiali',
    role: 'Teamleitung MFA · Diabetesberatung',
    extra: 'Diabetesberaterin DDG — M.Sc. Ernährungswissenschaften, Master Gesundheitswissenschaften, Bachelor Biologie (Zellbiologie und Genetik)',
  },
  {
    name: 'Diana Masalchi',
    role: 'Medizinische Fachangestellte (in Ausbildung)',
    extra: 'Stellvertretende Teamleitung Medizinische Fachangestellte',
  },
  {
    name: 'Karolina Paula',
    role: 'Medizinische Fachangestellte',
    extra: '',
  },
  {
    name: 'Nelja Zgodic',
    role: 'Medizinische Fachangestellte',
    extra: 'Derzeit in Elternzeit',
  },
]

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
            Hinter jeder guten Praxis stehen Menschen mit Leidenschaft.
            Lernen Sie das Team der Praxis Dr. Chadli kennen — kompetent,
            herzlich und immer für Sie da.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="team-page-main">
        <div className="container">

          {/* Arzt Feature Card */}
          <div className="team-page-doctor">
            <div className="team-page-doctor__image">
              <div className="team-page-doctor__image-placeholder">
                <User size={44} />
              </div>
            </div>
            <div className="team-page-doctor__body">
              <span className="team-page-doctor__role">Arzt · Praxisleitung</span>
              <h2 className="team-page-doctor__name">
                Dr. med. Fayçal Chadli
              </h2>
              <div className="team-page-doctor__tags">
                <span className="team-page-doctor__tag">Facharzt für Innere Medizin</span>
                <span className="team-page-doctor__tag">Diabetologe DDG/LAK</span>
                <span className="team-page-doctor__tag">Hypertensiologe DHL</span>
                <span className="team-page-doctor__tag">Adiposiologe DAG/DDG</span>
                <span className="team-page-doctor__tag">Notarzt</span>
                <span className="team-page-doctor__tag">Praxismanagement</span>
              </div>
            </div>
          </div>

          {/* Team Grid */}
          <h2 className="team-page-section-title">Unser Praxisteam</h2>
          <div className="team-page-grid">
            {teamMembers.map((member, i) => (
              <div className="team-page-card" key={i}>
                <div className="team-page-card__image">
                  <div className="team-page-card__image-placeholder">
                    <User size={32} />
                  </div>
                </div>
                <div className="team-page-card__body">
                  <span className="team-page-card__role">{member.role}</span>
                  <h3 className="team-page-card__name">{member.name}</h3>
                  {member.extra && (
                    <p className="team-page-card__extra">{member.extra}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}