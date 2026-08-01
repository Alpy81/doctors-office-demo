import { NavLink } from 'react-router-dom'
import {
  HeartPulse,
  Activity,
  Scale,
  CalendarCheck,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import '../../components/LeistungPage/LeistungPage.css'
import behandlungsraum from '../../assets/images/behandlungsraum2.jpg'

const programme = [
  {
    title: 'Hypertonie-Schulung nach Grüßer/Jörgens',
    audience: 'Für Menschen mit Bluthochdruck',
    points: [
      'Bluthochdruck verstehen und Blutdruck richtig messen',
      'Gesunde Ernährung und regelmäßige Bewegung',
      'Kochsalzreduktion und medikamentöse Behandlung',
      'Risikofaktoren erkennen, hypertensive Krisen vermeiden und Kontrolluntersuchungen',
    ],
  },
  {
    title: 'IPM® – Modulare Hypertonie-Schulung',
    audience: 'Für Menschen mit Bluthochdruck',
    points: [
      'Bluthochdruck verstehen',
      'Blutdruck richtig messen',
      'Nicht-medikamentöse Behandlung',
      'Medikamentöse Behandlung',
      'Metabolisches Syndrom',
    ],
  },
]

const weitereLeistungen = [
  { label: 'Diabetes-Schulungen',       path: '/leistungen/schulungen-diabetes' },
  { label: 'Adipositas & Hypertonie',   path: '/leistungen/adipositas' },
  { label: 'Diabetologie',              path: '/leistungen/diabetologie' },
  { label: 'Vorsorge & Check-up',       path: '/leistungen/vorsorge' },
  { label: 'Internistische Leistungen', path: '/leistungen/internistisch' },
]

export default function SchulungenHypertonie() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Hypertonie-Schulungen" />
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
            <span>Schulungen</span>
            <ChevronRight size={14} />
            <span>Hypertonie-Schulungen</span>
          </div>
          <div className="leistung-hero__tag">
            <HeartPulse size={14} />
            Hypertonie- & Bluthochdruck-Schulungen
          </div>
          <h1 className="leistung-hero__title">
            Gemeinsam zu einem gesunden Blutdruck
          </h1>
          <p className="leistung-hero__subtitle">
            Ein gut eingestellter Blutdruck ist die Grundlage für ein gesundes
            Herz-Kreislauf-System. Unsere strukturierten Bluthochdruck-Schulungen
            helfen Ihnen, Ihre Erkrankung besser zu verstehen und Ihren Blutdruck
            langfristig erfolgreich zu kontrollieren.
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
                Unser erfahrenes Team begleitet Sie Schritt für Schritt —
                individuell, verständlich und nach anerkannten Schulungsprogrammen.
                Ziel ist es, dass Sie Ihren Blutdruck verstehen, selbst kontrollieren
                und langfristig senken können — für ein gesünderes Herz-Kreislauf-System.
              </p>

              <div>
                <h2 className="leistung-content__section-title">
                  <Activity size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Unsere Schulungsprogramme
                </h2>
                <div className="leistung-programs">
                  {programme.map((p, i) => (
                    <div className="leistung-program" key={i}>
                      <h3 className="leistung-program__title">{p.title}</h3>
                      <p className="leistung-program__audience">{p.audience}</p>
                      <div className="leistung-program__points">
                        {p.points.map((point, j) => (
                          <div className="leistung-program__point" key={j}>
                            <span className="leistung-program__point-dot" />
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="leistung-content__section-title">
                  <Scale size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Kombinierte Betreuung
                </h2>
                <p className="leistung-content__intro">
                  Bluthochdruck tritt häufig gemeinsam mit Diabetes oder Übergewicht
                  auf. Daher bieten wir auch eine speziell kombinierte Schulung für
                  Menschen mit Diabetes und Bluthochdruck an — mehr dazu finden Sie
                  bei unseren Diabetes-Schulungen.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="leistung-sidebar">

              {/* CTA Card */}
              <div className="leistung-sidebar__card leistung-sidebar__card--cta">
                <h3 className="leistung-sidebar__title">Interesse an einer Schulung?</h3>
                <p className="leistung-sidebar__text">
                  Wir beraten Sie gerne persönlich und finden gemeinsam das
                  passende Schulungsangebot für Ihre individuelle Situation.
                  Vereinbaren Sie einfach einen Termin.
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
                    <NavLink key={item.path} to={item.path} className="leistung-sidebar__link">
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
  )
}