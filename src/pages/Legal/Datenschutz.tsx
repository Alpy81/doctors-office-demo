import { NavLink } from "react-router-dom";
import { ShieldCheck, ChevronRight } from "lucide-react";
import "./Legal.css";

export default function Datenschutz() {
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
            <span>Datenschutz</span>
          </div>
          <h1 className="legal-hero__title">
            <ShieldCheck
              size={22}
              style={{
                display: "inline",
                marginRight: "10px",
                verticalAlign: "middle",
              }}
            />
            Datenschutzerklärung
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
              <h2 className="legal-section__title">1. Verantwortlicher</h2>
              <p className="legal-section__text">
                Verantwortlich für die Datenverarbeitung auf dieser Website im
                Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
              </p>
              <p className="legal-section__text">
                Praxis Dr. Chadli
                <br />
                Docteur en médecine Fayçal Chadli
                <br />
                Alt-Fechenheim 76, 1. OG
                <br />
                60386 Frankfurt am Main
                <br />
                Telefon: 069 41 24 30
                <br />
                E-Mail: kontakt@praxis-chadli.de
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="legal-section__text">
                Wir verarbeiten personenbezogene Daten unserer Nutzerinnen und
                Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Verarbeitung erfolgt regelmäßig nur mit
                Einwilligung der Nutzerin bzw. des Nutzers, soweit nicht eine
                gesetzliche Erlaubnis die Verarbeitung gestattet.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                3. Hosting & Server-Logfiles
              </h2>
              <p className="legal-section__text">
                Beim Aufruf dieser Website werden durch den Hosting-Anbieter
                automatisch Informationen in Server-Logfiles gespeichert, die
                Ihr Browser übermittelt. Dies umfasst insbesondere: Browsertyp
                und -version, verwendetes Betriebssystem, Referrer-URL, Hostname
                des zugreifenden Rechners, Uhrzeit der Serveranfrage und
                IP-Adresse. Eine Zusammenführung dieser Daten mit anderen
                Datenquellen erfolgt nicht. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. f DSGVO (berechtigtes Interesse an der technisch
                fehlerfreien Darstellung und der Sicherheit der Website).
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">4. Kontaktformular</h2>
              <p className="legal-section__text">
                Wenn Sie uns über das Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Formular inklusive der von Ihnen
                dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
                für den Fall von Anschlussfragen bei uns gespeichert. Diese
                Daten geben wir nicht ohne Ihre Einwilligung weiter. Die
                Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
                erforderlich ist. In allen übrigen Fällen beruht die
                Verarbeitung auf unserem berechtigten Interesse an der
                effektiven Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO)
                bzw. auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
              <p className="legal-section__text">
                Bitte beachten Sie: Das Kontaktformular ist nicht für die
                Übermittlung medizinischer Notfälle oder besonders sensibler
                Gesundheitsdaten geeignet. Wenn Sie im Kontaktformular
                gesundheitsbezogene Angaben machen, handelt es sich um besondere
                Kategorien personenbezogener Daten gemäß Art. 9 DSGVO, deren
                Verarbeitung nur mit Ihrer ausdrücklichen Einwilligung erfolgt.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                5. Datenverarbeitung bei Online-Bewerbungen
              </h2>
              <p className="legal-section__text">
                Bewerbungsdaten (z. B. Name, Kontaktdaten, Anschreiben,
                Lebenslauf und weitere hochgeladene Unterlagen), die Sie uns
                über unser Bewerbungsformular übermitteln, verarbeiten wir
                ausschließlich zum Zweck der Durchführung des
                Bewerbungsverfahrens. Rechtsgrundlage ist § 26 BDSG i. V. m.
                Art. 6 Abs. 1 lit. b DSGVO. Ihre Daten werden nach Abschluss des
                Bewerbungsverfahrens gelöscht, sofern keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen oder Sie einer längeren
                Speicherung (z. B. für einen Talentpool) ausdrücklich zustimmen.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">6. Cookies</h2>
              <p className="legal-section__text">
                Unsere Website verwendet Cookies. Cookies sind kleine
                Textdateien, die auf Ihrem Endgerät gespeichert werden.
                Technisch notwendige Cookies sind für den Betrieb der Website
                erforderlich und werden auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO gespeichert. Für alle weiteren Cookies, die nicht
                technisch zwingend erforderlich sind, holen wir über unseren
                Cookie-Banner Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO
                ein. Sie können Ihre Einwilligung jederzeit mit Wirkung für die
                Zukunft widerrufen bzw. Ihre Cookie-Einstellungen in Ihrem
                Browser verwalten oder löschen.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">7. Google Maps</h2>
              <p className="legal-section__text">
                Auf unserer Kontaktseite binden wir eine Karte des
                Kartendienstes Google Maps ein, angeboten durch Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland. Bei
                Nutzung von Google Maps können Daten (u. a. Ihre IP-Adresse) an
                Server von Google in den USA übermittelt werden. Die Einbindung
                erfolgt im Interesse einer ansprechenden und leicht auffindbaren
                Darstellung unserer Praxisanschrift (Art. 6 Abs. 1 lit. f
                DSGVO). Weitere Informationen finden Sie in den
                Datenschutzhinweisen von Google unter{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">8. Google Fonts</h2>
              <p className="legal-section__text">
                Diese Website nutzt zur einheitlichen Darstellung von
                Schriftarten sogenannte Google Fonts. Beim Aufruf einer Seite
                lädt Ihr Browser die benötigten Schriftarten in den
                Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                Dabei kann eine Verbindung zu Servern von Google in den USA
                hergestellt werden. Weitere Informationen zu Google Fonts finden
                Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  developers.google.com/fonts/faq
                </a>{" "}
                sowie in der Datenschutzerklärung von Google.
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">9. Ihre Rechte</h2>
              <p className="legal-section__text">
                Ihnen stehen im Rahmen der geltenden gesetzlichen Bestimmungen
                folgende Rechte zu:
              </p>
              <ul className="legal-section__list">
                <li>
                  Recht auf Auskunft über Ihre gespeicherten Daten (Art. 15
                  DSGVO)
                </li>
                <li>
                  Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)
                </li>
                <li>Recht auf Löschung Ihrer Daten (Art. 17 DSGVO)</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>
                  Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)
                </li>
                <li>
                  Recht auf Widerruf einer erteilten Einwilligung mit Wirkung
                  für die Zukunft
                </li>
                <li>
                  Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">
                10. Zuständige Aufsichtsbehörde
              </h2>
              <p className="legal-section__text">
                Der Hessische Beauftragte für Datenschutz und
                Informationsfreiheit
                <br />
                Postfach 3163, 65021 Wiesbaden
                <br />
                Website:{" "}
                <a
                  href="https://datenschutz.hessen.de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  datenschutz.hessen.de
                </a>
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-section__title">11. Speicherdauer</h2>
              <p className="legal-section__text">
                Sofern innerhalb dieser Datenschutzerklärung keine speziellere
                Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen
                Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                Gesetzliche Aufbewahrungsfristen (z. B. für
                Behandlungsunterlagen gemäß § 630f BGB) bleiben hiervon
                unberührt.
              </p>
            </div>

            <div className="legal-section__note">
              Hinweis: Dieser Text ist ein allgemeiner Entwurf und ersetzt keine
              individuelle Rechtsberatung. Wir empfehlen, diese
              Datenschutzerklärung vor Veröffentlichung durch eine
              Rechtsanwältin bzw. einen Rechtsanwalt prüfen zu lassen —
              insbesondere im Hinblick auf die Verarbeitung von Gesundheitsdaten
              und ärztlichen Schweigepflichten.
            </div>
          </div>

          {/* Legal Nav */}
          <div className="legal-nav">
            <NavLink to="/impressum">Impressum</NavLink>
            <NavLink to="/datenschutz" className="active">
              Datenschutz
            </NavLink>
            <NavLink to="/agb">AGB</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}
