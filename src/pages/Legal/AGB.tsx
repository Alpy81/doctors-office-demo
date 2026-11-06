import { NavLink } from "react-router-dom";
import { FileText, ChevronRight } from "lucide-react";
import "./Legal.css";

export default function AGB() {
  return (
    <>
      {/* Hero */}
      <section className="legal-hero">
        <div className="legal-hero__overlay" />
        <div className="legal-hero__deco">
          <div className="legal-hero__deco-circle legal-hero__deco-circle--1" />
        </div>
        <div className="legal-hero__content">
          <div className="legal-hero__breadcrumb">
            <NavLink to="/">Startseite</NavLink>
            <ChevronRight size={14} />
            <span>AGB</span>
          </div>
          <h1 className="legal-hero__title">
            <FileText
              size={22}
              style={{
                display: "inline",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            />
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      {/* Main */}
      <section className="legal-main">
        <div className="container">
          <div className="legal-content">
            <span className="legal-content__updated">
              Stand: [Datum einfügen]
            </span>

            <div className="legal-section">
              <h2 className="legal-section__title">1. Geltungsbereich</h2>
              <p className="legal-section__text">
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die
                Inanspruchnahme von Leistungen der Praxis Dr. Chadli
                (nachfolgend „Praxis") durch Patientinnen und Patienten sowie
                für die Nutzung der Website der Praxis. Sie ergänzen die
                gesetzlichen Regelungen zum Behandlungsvertrag (§§ 630a ff. BGB)
                und gehen diesen nicht vor.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">2. Behandlungsvertrag</h2>
              <p className="legal-section__text">
                Mit der Vereinbarung eines Termins bzw. mit dem Erscheinen zur
                Behandlung kommt zwischen der Praxis und der Patientin bzw. dem
                Patienten ein Behandlungsvertrag gemäß §§ 630a ff. BGB zustande.
                Art und Umfang der Behandlung richten sich nach der
                medizinischen Indikation sowie den anerkannten fachlichen
                Standards.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                3. Terminvereinbarung & Terminausfall
              </h2>
              <p className="legal-section__text">
                Termine können telefonisch, per E-Mail oder über das
                Kontaktformular der Website vereinbart werden. Bei Verhinderung
                bitten wir um eine frühzeitige Absage — nach Möglichkeit
                spätestens 24 Stunden vor dem vereinbarten Termin.
              </p>
              <p className="legal-section__text">
                Wird ein vereinbarter Termin ohne rechtzeitige Absage nicht
                wahrgenommen, kann die Praxis in begründeten Fällen ein
                angemessenes Ausfallhonorar in Rechnung stellen, sofern der
                reservierte Termin nicht anderweitig genutzt werden konnte. Dies
                gilt nicht bei Verhinderung aus unvorhersehbaren, dringenden
                Gründen (z. B. akute gesundheitliche Notfälle).
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                4. Leistungen der gesetzlichen Krankenversicherung
              </h2>
              <p className="legal-section__text">
                Leistungen, die im Rahmen der gesetzlichen Krankenversicherung
                (GKV) erbracht werden, rechnet die Praxis direkt mit der
                zuständigen Krankenkasse ab. Eine gesonderte Berechnung
                gegenüber der Patientin bzw. dem Patienten erfolgt in diesen
                Fällen nicht.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                5. Individuelle Gesundheitsleistungen (IGeL) &
                Selbstzahlerleistungen
              </h2>
              <p className="legal-section__text">
                Leistungen, die nicht zum Leistungskatalog der gesetzlichen
                Krankenversicherung gehören (z. B. IGeL-Leistungen), werden als
                individuelle Gesundheitsleistungen angeboten. Vor Durchführung
                einer solchen Leistung wird die Patientin bzw. der Patient über
                Inhalt, Nutzen, Risiken sowie die voraussichtlichen Kosten
                aufgeklärt. Diese Leistungen werden nur nach ausdrücklichem
                Einverständnis erbracht und gemäß der Gebührenordnung für Ärzte
                (GOÄ) privat in Rechnung gestellt.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">6. Zahlungsbedingungen</h2>
              <p className="legal-section__text">
                Rechnungen für privat zu zahlende Leistungen sind, sofern nicht
                anders vereinbart, innerhalb von 14 Tagen nach Rechnungsstellung
                ohne Abzug fällig. Bei Zahlungsverzug ist die Praxis berechtigt,
                die gesetzlichen Verzugsfolgen geltend zu machen.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                7. Verhalten in der Praxis
              </h2>
              <ul className="legal-section__list">
                <li>
                  Wir bitten um pünktliches Erscheinen zum vereinbarten Termin.
                </li>
                <li>
                  Aus organisatorischen und medizinischen Gründen kann es trotz
                  Terminvereinbarung zu Wartezeiten kommen — wir bitten hierfür
                  um Verständnis.
                </li>
                <li>
                  Wir bitten alle Patientinnen und Patienten um einen
                  respektvollen Umgang mit dem gesamten Praxisteam.
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">8. Nutzung der Website</h2>
              <p className="legal-section__text">
                Die Inhalte dieser Website dienen ausschließlich der allgemeinen
                Information und ersetzen keine persönliche ärztliche Beratung,
                Diagnose oder Behandlung. Über das Kontaktformular versendete
                Nachrichten sind nicht für medizinische Notfälle geeignet. Bei
                akuten gesundheitlichen Beschwerden wenden Sie sich bitte
                telefonisch an die Praxis, den ärztlichen Bereitschaftsdienst
                (116 117) oder im Notfall an die 112.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">9. Haftung</h2>
              <p className="legal-section__text">
                Die Praxis haftet nach den allgemeinen gesetzlichen
                Bestimmungen. Für die Inhalte externer, über Links erreichbarer
                Websites übernimmt die Praxis keine Haftung; für deren Inhalte
                ist ausschließlich der jeweilige Anbieter verantwortlich.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">10. Datenschutz</h2>
              <p className="legal-section__text">
                Informationen zur Verarbeitung personenbezogener Daten finden
                Sie in unserer{" "}
                <NavLink to="/datenschutz">Datenschutzerklärung</NavLink>.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">11. Schlussbestimmungen</h2>
              <p className="legal-section__text">
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon
                unberührt. Es gilt das Recht der Bundesrepublik Deutschland.
              </p>
            </div>

            <div className="legal-section__note">
              Hinweis: Dieser Text ist ein allgemeiner Entwurf und ersetzt keine
              individuelle Rechtsberatung. Wir empfehlen, diese AGB vor
              Veröffentlichung durch eine Rechtsanwältin bzw. einen Rechtsanwalt
              prüfen zu lassen.
            </div>
          </div>

          {/* Legal Nav */}
          <div className="legal-nav">
            <NavLink to="/impressum">Impressum</NavLink>
            <NavLink to="/datenschutz">Datenschutz</NavLink>
            <NavLink to="/agb" className="active">
              AGB
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
