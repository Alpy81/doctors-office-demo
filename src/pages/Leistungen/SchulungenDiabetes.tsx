import { NavLink } from 'react-router-dom'
import {
  BookOpen,
  Activity,
  Droplets,
  Heart,
  Baby,
  CalendarCheck,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import '../../components/LeistungPage/LeistungPage.css'
import behandlungsraum from '../../assets/images/behandlungsraum2.jpg'

const typ1Programme = [
  {
    title: 'PRIMAS®',
    audience: 'Für Menschen mit Typ-1-Diabetes',
    points: [
      'Selbstständiger Umgang mit dem Diabetes',
      'Insulintherapie im Alltag',
      'Gesunde Ernährung und Bewegung',
      'Vorbeugung von Hypoglykämien',
      'Mehr Sicherheit und Lebensqualität',
    ],
  },
  {
    title: 'ICT- und Insulinpumpentherapie',
    audience: 'Für Patientinnen und Patienten mit intensivierter Insulintherapie (ICT) oder Insulinpumpentherapie',
    points: [
      'Anpassung der Insulindosis',
      'Blutzuckerselbstkontrolle',
      'Kohlenhydratberechnung im Alltag',
      'Vermeidung von Unter- und Überzuckerungen',
      'Alltag, Sport und Reisen mit Insulin',
    ],
  },
]

const typ2Programme = [
  {
    title: 'MEDIAS 2 BASIS',
    audience: 'Für Menschen mit Typ-2-Diabetes ohne Insulintherapie',
    points: [
      'Diabetes verstehen',
      'Gesunde Ernährung',
      'Bewegung im Alltag',
      'Blutzuckerselbstkontrolle',
      'Vorbeugung von Folgeerkrankungen',
    ],
  },
  {
    title: 'MEDIAS 2 ICT',
    audience: 'Für Menschen mit Typ-2-Diabetes mit Insulintherapie',
    points: [
      'Sicherer Umgang mit Insulin',
      'Anpassung der Insulindosis',
      'Blutzuckerselbstkontrolle',
      'Hypoglykämien erkennen und behandeln',
      'Alltag mit Insulin',
    ],
  },
]

const spezialProgramme = [
  {
    title: 'Kontinuierliche Glukosemessung (CGM)',
    audience: 'Einweisung und Schulung zum sicheren Umgang mit modernen Systemen der kontinuierlichen Glukosemessung',
    points: [
      'Funktionsweise moderner CGM-Systeme verstehen',
      'Sensoren sicher anwenden',
      'Glukosewerte richtig interpretieren',
      'Trendpfeile und Alarme verstehen',
      'Therapie anhand der Glukosedaten optimieren',
      'Sicherer Umgang im Alltag',
    ],
  },
  {
    title: 'HyPOS® – Schulung',
    audience: 'Für Menschen mit eingeschränkter Wahrnehmung von Hypoglykämien',
    points: [
      'Hypoglykämien frühzeitig erkennen',
      'Unterzuckerungen vermeiden',
      'Warnsignale besser wahrnehmen',
      'Sicheres Verhalten im Alltag',
    ],
  },
  {
    title: 'IPM® – Hypertonie-Schulung für Menschen mit Diabetes und Bluthochdruck',
    audience: 'Für Menschen mit Diabetes und Bluthochdruck',
    points: [
      'Blutdruck verstehen',
      'Blutdruck richtig messen',
      'Gesunde Ernährung und Bewegung',
      'Medikamentöse Behandlung',
      'Metabolisches Syndrom',
    ],
  },
]

const schwangerschaftsProgramme = [
  {
    title: 'Individuelle Einzelschulung',
    audience: 'Wir begleiten Frauen mit Gestationsdiabetes persönlich und individuell — von der Diagnosestellung bis zur Entbindung',
    points: [
      'Gesunde Ernährung während der Schwangerschaft',
      'Blutzuckerselbstkontrolle',
      'Insulintherapie bei Bedarf',
      'Individuelle Betreuung bis zur Entbindung',
    ],
  },
]

const weitereLeistungen = [
  { label: 'Diabetologie',              path: '/leistungen/diabetologie' },
  { label: 'DMP-Programme',             path: '/leistungen/dmp' },
  { label: 'Hypertonie-Schulungen',     path: '/leistungen/schulungen-hypertonie' },
  { label: 'Vorsorge & Check-up',       path: '/leistungen/vorsorge' },
  { label: 'Adipositas & Hypertonie',   path: '/leistungen/adipositas' },
]

export default function SchulungenDiabetes() {
  return (
    <>
      {/* Hero */}
      <section className="leistung-hero">
        <div className="leistung-hero__bg">
          <img src={behandlungsraum} alt="Diabetes-Schulungen" />
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
            <span>Diabetes-Schulungen</span>
          </div>
          <div className="leistung-hero__tag">
            <BookOpen size={14} />
            Diabetes-Schulungen
          </div>
          <h1 className="leistung-hero__title">
            Gemeinsam zu mehr Sicherheit im Alltag
          </h1>
          <p className="leistung-hero__subtitle">
            Ein gutes Diabetesmanagement bedeutet mehr als Medikamente oder Insulin.
            Unsere strukturierten Diabetes-Schulungen helfen Ihnen, Ihre Erkrankung
            besser zu verstehen und den Alltag sicher und selbstbewusst zu meistern.
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
                individuell, verständlich und nach den aktuellen Leitlinien
                der Deutschen Diabetes Gesellschaft (DDG). Je nach Diabetesform
                und Therapie bieten wir Einzel- und Gruppenschulungen an.
                Unser Ziel ist es, Sie dabei zu unterstützen, eigenverantwortlich
                mit Ihrem Diabetes umzugehen und Ihre Lebensqualität nachhaltig
                zu verbessern.
              </p>

              {/* Typ 1 */}
              <div>
                <h2 className="leistung-content__section-title">
                  <Droplets size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Schulungen bei Typ-1-Diabetes
                </h2>
                <div className="leistung-programs">
                  {typ1Programme.map((p, i) => (
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

              {/* Typ 2 */}
              <div>
                <h2 className="leistung-content__section-title">
                  <Activity size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Schulungen bei Typ-2-Diabetes
                </h2>
                <div className="leistung-programs">
                  {typ2Programme.map((p, i) => (
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

              {/* Spezialisierte Schulungen */}
              <div>
                <h2 className="leistung-content__section-title">
                  <Heart size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Spezialisierte Diabetes-Schulungen
                </h2>
                <div className="leistung-programs">
                  {spezialProgramme.map((p, i) => (
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

              {/* Schwangerschaftsdiabetes */}
              <div>
                <h2 className="leistung-content__section-title">
                  <Baby size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle', color: 'var(--color-secondary)' }} />
                  Schwangerschaftsdiabetes
                </h2>
                <div className="leistung-programs">
                  {schwangerschaftsProgramme.map((p, i) => (
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
            </div>

            {/* Sidebar */}
            <aside className="leistung-sidebar">

              {/* CTA Card */}
              <div className="leistung-sidebar__card leistung-sidebar__card--cta">
                <h3 className="leistung-sidebar__title">Interesse an einer Schulung?</h3>
                <p className="leistung-sidebar__text">
                  Wir beraten Sie gerne persönlich und finden gemeinsam das
                  passende Schulungsangebot. Vereinbaren Sie einfach einen Termin —
                  wir freuen uns darauf, Sie auf Ihrem Weg zu begleiten.
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