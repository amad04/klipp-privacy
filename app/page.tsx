"use client";

import { useEffect, useState } from "react";

type Language = "sv" | "en";

const copy = {
  sv: {
    langName: "Svenska",
    otherLang: "English",
    badge: "Integritetspolicy",
    title: "Din data.\nDitt Klipp.",
    subtitle:
      "Det du sparar är ditt. Innehållet stannar på din enhet eller i din privata iCloud och är inte tillgängligt för oss bakom Klipp.",
    updated: "Senast uppdaterad 24 juli 2026",
    summary: [
      ["Privat på riktigt", "Vi bakom Klipp kan inte se eller komma åt det du sparar — varken lokalt eller i iCloud."],
      ["Ingen reklam", "Klipp använder inte reklam och samlar inte in IDFA för annonsprofilering."],
      ["Du väljer", "Foton och iCloud används bara när du väljer de funktionerna."],
    ],
    navTitle: "På den här sidan",
    nav: [
      ["overview", "Översikt"],
      ["data", "Det Klipp behandlar"],
      ["services", "Tjänster vi använder"],
      ["rights", "Dina val"],
      ["contact", "Kontakt"],
    ],
    overviewTitle: "Översikt",
    overview:
      "Klipp organiserar innehållet du själv väljer att spara. Innehållet skickas inte till oss och vi kan inte se eller komma åt det. Vi säljer inte personuppgifter och använder inte ditt innehåll för reklam.",
    controllerLabel: "Personuppgiftsansvarig",
    controller:
      "Klipp utvecklas och tillhandahålls av Walid Apps. Frågor om integritet kan skickas till walid.apps@outlook.com.",
    dataTitle: "Det Klipp behandlar",
    contentTitle: "Det du sparar",
    contentBody:
      "Bilder, länkar, anteckningar och taggar används för att organisera och söka i ditt bibliotek. När du sparar en länk kan webbplatsen kontaktas för att hämta en förhandsvisning.",
    contentNote:
      "Innehållet lagras på din enhet eller i din privata iCloud om du aktiverar synk. Vi bakom Klipp har inte tillgång till det och det används inte för statistik eller kraschrapporter.",
    photosTitle: "2. Åtkomst till Foton",
    photosBody:
      "Klipp använder bara åtkomst till Foton för att importera de bilder du väljer. Du kan ändra behörigheten när som helst i iOS.",
    analyticsTitle: "Användning och stabilitet",
    analyticsBody:
      "Firebase används för anonym användningsstatistik och tekniska kraschrapporter som hjälper oss att förbättra Klipp.",
    analyticsNo:
      "Ditt sparade innehåll skickas inte med.",
    crashTitle: "4. Firebase Crashlytics",
    crashBody:
      "Crashlytics samlar in teknisk information om krascher, appversion och enhet för att hjälpa oss att åtgärda fel. Ditt sparade innehåll ingår inte.",
    spreadTitle: "Sprid ordet",
    spreadBody:
      "Om du använder Sprid ordet sparas uppgifterna du själv skickar in för att vi ska kunna granska ansökan.",
    purchaseTitle: "6. Köp och Klipp Pro",
    purchaseBody:
      "Köp hanteras av Apple. Klipp får köpstatus men inte dina kort- eller betalningsuppgifter.",
    linksTitle: "7. Länkförhandsvisningar",
    linksBody:
      "När du sparar en länk kan Klipp kontakta webbplatsen för att hämta titel och förhandsvisningsbild.",
    servicesTitle: "Tjänster vi använder",
    servicesIntro:
      "Klipp använder följande leverantörer endast för funktionerna som beskrivs här:",
    services: [
      ["Apple", "Foton, köp via App Store och valfri synk i din privata iCloud-databas."],
      ["Google Firebase", "Anonym användningsstatistik, kraschrapporter och frivilliga Sprid ordet-ansökningar."],
    ],
    safeguards:
      "Apple och Google behandlar information enligt sina egna integritetspolicyer och tillämpliga dataskyddsregler.",
    legalTitle: "Varför vi behandlar information",
    legalItems: [
      ["Leverera Klipp", "Spara, organisera, söka och synkronisera det du väljer."],
      ["Dina val", "Åtkomst till Foton, iCloud och Sprid ordet används bara när du väljer funktionerna."],
      ["Förbättra appen", "Begränsad statistik och kraschdiagnostik hjälper oss att hitta fel."],
    ],
    retentionTitle: "Lagring och radering",
    retentionItems: [
      ["Ditt innehåll", "Sparas tills du raderar det i Klipp eller via iCloud."],
      ["Teknisk data", "Sparas bara så länge den behövs för statistik och felsökning."],
      ["Sprid ordet", "Sparas så länge ansökan behöver hanteras."],
    ],
    rightsTitle: "Dina val",
    rightsIntro:
      "Du har kontroll över ditt innehåll och de behörigheter Klipp använder.",
    rights: [
      "Ändra eller återkalla åtkomst till Foton i iOS Inställningar.",
      "Välj På enheten eller iCloud-synk i Klipps inställningar.",
      "Radera sparade objekt och samlingar direkt i appen.",
      "Kontakta oss för frågor eller begäran om radering av en Sprid ordet-ansökan.",
    ],
    rightsNote:
      "Beroende på var du bor kan du också ha rätt att få tillgång till, rätta eller radera personuppgifter.",
    childrenTitle: "Barn",
    childrenBody:
      "Klipp riktar sig inte särskilt till barn under 13 år.",
    changesTitle: "Ändringar",
    changesBody:
      "Policyn kan uppdateras när appen förändras. Datumet högst upp visar den senaste versionen.",
    contactTitle: "Kontakt",
    contactBody:
      "Har du en fråga eller vill begära radering? Kontakta oss gärna.",
    emailLabel: "E-post",
    responseLabel: "Svarstid",
    response: "Vanligtvis inom 1–3 arbetsdagar",
    supportButton: "Kontakta oss",
    providersTitle: "Leverantörernas policyer",
    appleLink: "Apples integritetspolicy",
    firebaseLink: "Firebase – integritet och säkerhet",
    googleLink: "Googles integritetspolicy",
    footer: "© 2026 Klipp · Walid Apps",
    disclaimer:
      "Den här sidan beskriver Klipps nuvarande funktioner och är inte juridisk rådgivning.",
  },
  en: {
    langName: "English",
    otherLang: "Svenska",
    badge: "Privacy Policy",
    title: "Your data.\nYour Klipp.",
    subtitle:
      "What you save belongs to you. It stays on your device or in your private iCloud and is not accessible to us at Klipp.",
    updated: "Last updated July 24, 2026",
    summary: [
      ["Private by design", "We at Klipp cannot see or access what you save — locally or in iCloud."],
      ["No advertising", "Klipp does not use ads or collect IDFA for advertising profiles."],
      ["You choose", "Photos and iCloud are used only when you choose those features."],
    ],
    navTitle: "On this page",
    nav: [
      ["overview", "Overview"],
      ["data", "What Klipp processes"],
      ["services", "Services we use"],
      ["rights", "Your choices"],
      ["contact", "Contact"],
    ],
    overviewTitle: "Overview",
    overview:
      "Klipp organizes the content you choose to save. It is not sent to us, and we cannot see or access it. We do not sell personal data or use your content for advertising.",
    controllerLabel: "Data controller",
    controller:
      "Klipp is developed and provided by Walid Apps. Privacy questions can be sent to walid.apps@outlook.com.",
    dataTitle: "What Klipp processes",
    contentTitle: "What you save",
    contentBody:
      "Images, links, notes, and tags are used to organize and search your library. When you save a link, the website may be contacted to retrieve a preview.",
    contentNote:
      "Content is stored on your device or in your private iCloud when sync is enabled. We at Klipp do not have access to it, and it is not used for statistics or crash reports.",
    photosTitle: "2. Photos access",
    photosBody:
      "Klipp uses Photos access only to import the images you select. You can change this permission at any time in iOS.",
    analyticsTitle: "Usage and stability",
    analyticsBody:
      "Firebase provides anonymous usage statistics and technical crash reports that help us improve Klipp.",
    analyticsNo:
      "Your saved content is not included.",
    crashTitle: "4. Firebase Crashlytics",
    crashBody:
      "Crashlytics collects technical crash, app version, and device information to help us fix errors. Your saved content is not included.",
    spreadTitle: "Spread the Word",
    spreadBody:
      "If you use Spread the Word, the information you submit is stored so we can review the application.",
    purchaseTitle: "6. Purchases and Klipp Pro",
    purchaseBody:
      "Purchases are processed by Apple. Klipp receives the purchase status, but not your card or payment details.",
    linksTitle: "7. Link previews",
    linksBody:
      "When you save a link, Klipp may contact the website to retrieve its title and preview image.",
    servicesTitle: "Services we use",
    servicesIntro:
      "Klipp uses the following providers only for the purposes described here:",
    services: [
      ["Apple", "Photos, App Store purchases, and optional sync in your private iCloud database."],
      ["Google Firebase", "Anonymous usage statistics, crash reports, and voluntary Spread the Word applications."],
    ],
    safeguards:
      "Apple and Google process information under their own privacy policies and applicable data-protection rules.",
    legalTitle: "Why we process information",
    legalItems: [
      ["Provide Klipp", "Store, organize, search, and sync what you choose."],
      ["Your choices", "Photos, iCloud, and Spread the Word are used only when you choose those features."],
      ["Improve the app", "Limited statistics and crash diagnostics help us identify errors."],
    ],
    retentionTitle: "Retention and deletion",
    retentionItems: [
      ["Your content", "Stored until you delete it in Klipp or through iCloud."],
      ["Technical data", "Kept only as long as needed for statistics and troubleshooting."],
      ["Spread the Word", "Kept as long as needed to process the application."],
    ],
    rightsTitle: "Your choices",
    rightsIntro:
      "You control your content and the permissions Klipp uses.",
    rights: [
      "Change or revoke Photos access in iOS Settings.",
      "Choose On Device or iCloud Sync in Klipp settings.",
      "Delete saved items and collections directly in the app.",
      "Contact us with questions or to request deletion of a Spread the Word application.",
    ],
    rightsNote:
      "Depending on where you live, you may also have rights to access, correct, or delete personal data.",
    childrenTitle: "Children",
    childrenBody:
      "Klipp is not specifically directed to children under 13.",
    changesTitle: "Changes",
    changesBody:
      "We may update this policy when the app changes. The date at the top shows the latest version.",
    contactTitle: "Contact",
    contactBody:
      "Have a question or want to request deletion? Please contact us.",
    emailLabel: "Email",
    responseLabel: "Response time",
    response: "Usually within 1–3 business days",
    supportButton: "Contact us",
    providersTitle: "Provider policies",
    appleLink: "Apple Privacy Policy",
    firebaseLink: "Firebase Privacy and Security",
    googleLink: "Google Privacy Policy",
    footer: "© 2026 Klipp · Walid Apps",
    disclaimer:
      "This page describes Klipp’s current features and does not constitute legal advice.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("sv");
  const t = copy[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("klipp-privacy-language");
    const preferred =
      saved === "sv" || saved === "en"
        ? saved
        : window.navigator.language.toLowerCase().startsWith("sv")
          ? "sv"
          : "en";
    setLanguage(preferred);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("klipp-privacy-language", language);
  }, [language]);

  return (
    <main>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <div className="shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="Klipp">
            <img src="/klipp-icon.png" alt="" />
            <span>Klipp</span>
          </a>
          <div className="language" aria-label="Language selector">
            {(["sv", "en"] as const).map((value) => (
              <button
                key={value}
                className={language === value ? "active" : ""}
                type="button"
                onClick={() => setLanguage(value)}
                aria-pressed={language === value}
              >
                {value === "sv" ? "Svenska" : "English"}
              </button>
            ))}
          </div>
        </header>

        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">{t.badge}</div>
            <h1>{t.title}</h1>
            <p className="hero-subtitle">{t.subtitle}</p>
            <p className="updated">{t.updated}</p>
          </div>
          <div className="folder-art" aria-hidden="true">
            <div className="photo photo-one" />
            <div className="photo photo-two" />
            <div className="folder-tab">K</div>
            <div className="folder">
              <span>Klipp</span>
              <i />
            </div>
          </div>
        </section>

        <section className="promise-grid" aria-label={t.overviewTitle}>
          {t.summary.map(([title, body], index) => (
            <article className="promise" key={title}>
              <span className={`promise-icon icon-${index + 1}`} aria-hidden="true">
                {index === 0 ? "✓" : index === 1 ? "—" : "◆"}
              </span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="content-grid">
          <aside className="side">
            <nav className="card toc" aria-label={t.navTitle}>
              <h2>{t.navTitle}</h2>
              {t.nav.map(([href, label], index) => (
                <a href={`#${href}`} key={href}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              ))}
            </nav>

          </aside>

          <div className="policy">
            <section className="card section-card" id="overview">
              <div className="section-number">01</div>
              <h2>{t.overviewTitle}</h2>
              <p>{t.overview}</p>
              <div className="notice">
                <strong>{t.controllerLabel}</strong>
                <p>{t.controller}</p>
              </div>
            </section>

            <section className="card section-card" id="data">
              <div className="section-number">02</div>
              <h2>{t.dataTitle}</h2>
              <PolicyBlock title={t.contentTitle} body={t.contentBody} note={t.contentNote} />
              <PolicyBlock title={t.analyticsTitle} body={t.analyticsBody} note={t.analyticsNo} />
              <PolicyBlock title={t.spreadTitle} body={t.spreadBody} />
            </section>

            <section className="card section-card" id="services">
              <div className="section-number">03</div>
              <h2>{t.servicesTitle}</h2>
              <p>{t.servicesIntro}</p>
              <div className="service-list">
                {t.services.map(([name, description]) => (
                  <div className="service" key={name}>
                    <span>{name.charAt(0)}</span>
                    <div>
                      <h3>{name}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="small-print">{t.safeguards}</p>
            </section>

            <section className="card section-card" id="rights">
              <div className="section-number">04</div>
              <h2>{t.rightsTitle}</h2>
              <p>{t.rightsIntro}</p>
              <ul className="check-list">
                {t.rights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p className="small-print">{t.rightsNote}</p>
              <div className="subsection">
                <h2>{t.retentionTitle}</h2>
                <div className="definition-list">
                  {t.retentionItems.map(([title, body]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="split">
                <div>
                  <h3>{t.childrenTitle}</h3>
                  <p>{t.childrenBody}</p>
                </div>
                <div>
                  <h3>{t.changesTitle}</h3>
                  <p>{t.changesBody}</p>
                </div>
              </div>
            </section>

            <section className="card contact-card" id="contact">
              <div>
                <div className="section-number">05</div>
                <h2>{t.contactTitle}</h2>
                <p>{t.contactBody}</p>
              </div>
              <div className="contact-details">
                <div>
                  <span>{t.emailLabel}</span>
                  <a href="mailto:walid.apps@outlook.com?subject=Klipp%20Privacy">
                    walid.apps@outlook.com
                  </a>
                </div>
                <div>
                  <span>{t.responseLabel}</span>
                  <strong>{t.response}</strong>
                </div>
                <a
                  className="button"
                  href="mailto:walid.apps@outlook.com?subject=Klipp%20Privacy"
                >
                  {t.supportButton}<span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </div>
        </div>

        <footer>
          <p>{t.footer}</p>
          <p>{t.disclaimer}</p>
        </footer>
      </div>
    </main>
  );
}

function PolicyBlock({
  title,
  body,
  note,
}: {
  title: string;
  body: string;
  note?: string;
}) {
  return (
    <div className="policy-block">
      <h3>{title}</h3>
      <p>{body}</p>
      {note ? <p className="inline-note">{note}</p> : null}
    </div>
  );
}
