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
      "Klipp är byggt för att samla det du vill hitta igen — utan att göra ditt privata innehåll till en produkt.",
    updated: "Senast uppdaterad 24 juli 2026",
    summary: [
      ["Lokal först", "Ditt bibliotek lagras på enheten om du inte själv aktiverar iCloud."],
      ["Ingen reklam", "Klipp använder inte reklam och samlar inte in IDFA för annonsprofilering."],
      ["Du väljer", "Foton och iCloud används bara när du väljer de funktionerna."],
    ],
    navTitle: "På den här sidan",
    nav: [
      ["overview", "Översikt"],
      ["data", "Information vi behandlar"],
      ["services", "Tjänster och delning"],
      ["retention", "Lagring och radering"],
      ["rights", "Dina val och rättigheter"],
      ["contact", "Kontakt"],
    ],
    overviewTitle: "Översikt",
    overview:
      "Den här policyn beskriver hur Klipp behandlar information när du använder appen, delningstillägget, iCloud-synk, Klipp Pro och funktionen Sprid ordet. Klipp säljer inte personuppgifter och använder inte ditt sparade innehåll för annonsering.",
    controllerLabel: "Personuppgiftsansvarig",
    controller:
      "Klipp utvecklas och tillhandahålls av Walid Apps. Frågor om integritet kan skickas till walid.apps@outlook.com.",
    dataTitle: "Information vi behandlar",
    contentTitle: "1. Innehåll du sparar",
    contentBody:
      "När du väljer att spara något kan Klipp behandla skärmdumpar, bilder, länkar, titlar, anteckningar, taggar, samlingsnamn, källdata, datum, miniatyrbilder och text som appen känner igen i bilder. Innehållet används för att organisera, visa och söka i ditt bibliotek.",
    contentNote:
      "Detta innehåll lagras lokalt på din enhet eller i din privata iCloud-databas om du aktiverar iCloud-synk. Det skickas inte till Firebase Analytics eller Crashlytics.",
    photosTitle: "2. Åtkomst till Foton",
    photosBody:
      "Klipp begär åtkomst till Foton för att visa och importera de bilder eller skärmdumpar du väljer. Du kan ge begränsad åtkomst i iOS. Om du väljer funktionen för att radera originalet använder Klipp också behörigheten för att begära radering från ditt fotobibliotek efter att en kopia sparats i Klipp.",
    analyticsTitle: "3. Firebase Analytics",
    analyticsBody:
      "Klipp använder Google Firebase Analytics för att förstå hur funktioner används och förbättra appen. Telemetrin består av fasta händelsenamn och begränsade kategorier, till exempel objekttyp, generell källappskategori, om en samling valdes, sökfilter, paywall-källa och produkt-id.",
    analyticsNo:
      "Klipp skickar inte titlar, anteckningar, URL:er eller domäner, samlingsnamn, sökord, igenkänd bildtext, bildfiler eller ett eget användar-id till Analytics.",
    crashTitle: "4. Firebase Crashlytics",
    crashBody:
      "Crashlytics tar emot tekniska krasch- och feldiagnoser, såsom stack traces, appversion, enhets- och operativsysteminformation, kraschens tidpunkt, relevant programstatus samt fasta tekniska loggar och icke-fatala fel. Det används för att hitta och åtgärda problem. Klipp lägger inte ditt sparade innehåll i Crashlytics-loggar.",
    spreadTitle: "5. Sprid ordet",
    spreadBody:
      "Om du frivilligt skickar in en ansökan via Sprid ordet skapas ett anonymt Firebase Authentication-id. Firebase Firestore lagrar detta id tillsammans med vald plattform, den offentliga länk du skickar in, ett valfritt meddelande, tidpunkt och ansökans status. Uppgifterna används för att granska ansökan och hantera eventuell Pro-belöning.",
    purchaseTitle: "6. Köp och Klipp Pro",
    purchaseBody:
      "Köp hanteras av Apple via StoreKit och ditt App Store-konto. Klipp får information om vald produkt, köpstatus och aktiva rättigheter, men tar inte emot ditt kortnummer eller fullständiga betalningsuppgifter.",
    linksTitle: "7. Länkförhandsvisningar",
    linksBody:
      "När du sparar en publik länk kan Klipp kontakta webbplatsen för att hämta titel, förhandsvisningsbild, ikon och kanonisk URL. Webbplatsen och dess leverantörer kan då ta emot teknisk information som normalt följer med en webbförfrågan, exempelvis IP-adress.",
    servicesTitle: "Var information lagras och delas",
    servicesIntro:
      "Klipp använder följande leverantörer endast för funktionerna som beskrivs här:",
    services: [
      ["Apple", "App Store och StoreKit för köp, Foton för vald åtkomst samt CloudKit för valfri synk i användarens privata iCloud-databas."],
      ["Google Firebase", "Analytics för användningsstatistik, Crashlytics för diagnostik samt Authentication och Firestore för frivilliga Sprid ordet-ansökningar."],
      ["Länkade webbplatser", "När en användare sparar en publik länk och Klipp hämtar länkmetadata."],
    ],
    safeguards:
      "Vi kräver att tjänsteleverantörer behandlar information med skydd som motsvarar denna policy och tillämpliga krav. Data kan behandlas i andra länder enligt respektive leverantörs villkor och lagliga överföringsmekanismer.",
    legalTitle: "Varför vi behandlar information",
    legalItems: [
      ["För att leverera tjänsten", "Lagra, organisera, söka, synkronisera och visa det innehåll du själv väljer."],
      ["Med ditt val eller samtycke", "Åtkomst till Foton, iCloud-synk och frivillig inskickning via Sprid ordet."],
      ["Berättigat intresse", "Begränsad analys och diagnostik för att förstå användning, förebygga fel och förbättra stabiliteten."],
      ["Rättsliga skyldigheter", "När lag kräver att vi sparar eller lämnar ut information."],
    ],
    retentionTitle: "Lagring och radering",
    retentionItems: [
      ["Lokalt innehåll", "Finns kvar tills du raderar objektet, rensar appens data eller avinstallerar appen. Innehåll i en delad appgrupp kan omfattas av iOS lagringshantering."],
      ["iCloud", "Finns kvar i din privata iCloud-databas tills du raderar innehållet eller hanterar Klipps iCloud-data. Att bara stänga av synk raderar inte den befintliga iCloud-kopian."],
      ["Analytics", "Google Analytics lagrar data på användar- och händelsenivå enligt projektets inställda lagringstid, normalt 2 eller 14 månader. Sammanställda rapporter kan sparas längre."],
      ["Crashlytics", "Firebase anger att kraschdata och tillhörande identifierare behålls i 90 dagar innan borttagning påbörjas."],
      ["Sprid ordet", "Ansökningsuppgifter sparas så länge de behövs för granskning, status och Pro-belöning, eller tills de raderas efter en giltig begäran."],
    ],
    rightsTitle: "Dina val och rättigheter",
    rightsIntro:
      "Beroende på var du bor kan du ha rätt att få tillgång till, rätta, radera, begränsa eller invända mot behandling av personuppgifter samt få ut vissa uppgifter.",
    rights: [
      "Ändra eller återkalla åtkomst till Foton i iOS Inställningar.",
      "Välj På enheten eller iCloud-synk i Klipps inställningar.",
      "Radera sparade objekt och samlingar direkt i appen.",
      "Avinstallera Klipp för att stoppa framtida Analytics- och Crashlytics-insamling från appen.",
      "Kontakta oss för frågor eller begäran om radering av en Sprid ordet-ansökan.",
    ],
    rightsNote:
      "Eftersom Klipp inte sätter ett eget användar-id i Analytics kan det vara omöjligt att koppla anonym användningsstatistik till en viss person. Vi kan be om information som behövs för att verifiera och genomföra en begäran.",
    childrenTitle: "Barn",
    childrenBody:
      "Klipp riktar sig inte särskilt till barn under 13 år. Kontakta oss om du tror att ett barn har lämnat personuppgifter via en funktion som Sprid ordet.",
    changesTitle: "Ändringar",
    changesBody:
      "Vi kan uppdatera policyn när appen eller lagkrav förändras. Datumet högst upp visar när den senast ändrades. Väsentliga förändringar meddelas på lämpligt sätt.",
    contactTitle: "Kontakt",
    contactBody:
      "Har du en fråga, vill utöva en rättighet eller begära radering? Kontakta oss och skriv gärna “Klipp Privacy” i ämnesraden.",
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
      "Klipp is built to collect what you want to find again — without turning your private content into a product.",
    updated: "Last updated July 24, 2026",
    summary: [
      ["Local first", "Your library stays on your device unless you choose to enable iCloud."],
      ["No advertising", "Klipp does not use ads or collect IDFA for advertising profiles."],
      ["You choose", "Photos and iCloud are used only when you choose those features."],
    ],
    navTitle: "On this page",
    nav: [
      ["overview", "Overview"],
      ["data", "Information we process"],
      ["services", "Services and sharing"],
      ["retention", "Retention and deletion"],
      ["rights", "Your choices and rights"],
      ["contact", "Contact"],
    ],
    overviewTitle: "Overview",
    overview:
      "This policy explains how Klipp processes information when you use the app, Share Extension, iCloud sync, Klipp Pro, and the Spread the Word feature. Klipp does not sell personal data or use your saved content for advertising.",
    controllerLabel: "Data controller",
    controller:
      "Klipp is developed and provided by Walid Apps. Privacy questions can be sent to walid.apps@outlook.com.",
    dataTitle: "Information we process",
    contentTitle: "1. Content you save",
    contentBody:
      "When you choose to save something, Klipp may process screenshots, images, links, titles, notes, tags, collection names, source information, dates, thumbnails, and text recognized in images. This content is used to organize, display, and search your library.",
    contentNote:
      "This content is stored locally on your device or in your private iCloud database if you enable iCloud sync. It is not sent to Firebase Analytics or Crashlytics.",
    photosTitle: "2. Photos access",
    photosBody:
      "Klipp requests Photos access to display and import the images or screenshots you select. You can grant limited access in iOS. If you choose to delete originals, Klipp also uses this permission to request deletion from your photo library after a copy has been saved in Klipp.",
    analyticsTitle: "3. Firebase Analytics",
    analyticsBody:
      "Klipp uses Google Firebase Analytics to understand feature usage and improve the app. Telemetry consists of fixed event names and bounded categories, such as item type, general source-app category, whether a collection was selected, search scope, paywall source, and product ID.",
    analyticsNo:
      "Klipp does not send titles, notes, URLs or domains, collection names, search terms, recognized image text, image files, or a developer-assigned user ID to Analytics.",
    crashTitle: "4. Firebase Crashlytics",
    crashBody:
      "Crashlytics receives technical crash and error diagnostics, such as stack traces, app version, device and operating-system information, crash time, relevant application state, and fixed technical logs and non-fatal errors. It is used to identify and fix problems. Klipp does not place your saved content in Crashlytics logs.",
    spreadTitle: "5. Spread the Word",
    spreadBody:
      "If you voluntarily submit an application through Spread the Word, an anonymous Firebase Authentication ID is created. Firebase Firestore stores this ID with your selected platform, the public post URL you submit, an optional message, submission time, and application status. The data is used to review the submission and manage any Pro reward.",
    purchaseTitle: "6. Purchases and Klipp Pro",
    purchaseBody:
      "Purchases are processed by Apple through StoreKit and your App Store account. Klipp receives information about the selected product, purchase status, and active entitlements, but does not receive your card number or complete payment details.",
    linksTitle: "7. Link previews",
    linksBody:
      "When you save a public link, Klipp may contact the website to retrieve its title, preview image, icon, and canonical URL. The website and its providers may then receive technical information normally included in a web request, such as an IP address.",
    servicesTitle: "Where information is stored and shared",
    servicesIntro:
      "Klipp uses the following providers only for the purposes described here:",
    services: [
      ["Apple", "App Store and StoreKit for purchases, Photos for selected access, and CloudKit for optional sync in the user’s private iCloud database."],
      ["Google Firebase", "Analytics for usage statistics, Crashlytics for diagnostics, and Authentication and Firestore for voluntary Spread the Word applications."],
      ["Linked websites", "When a user saves a public link and Klipp retrieves link metadata."],
    ],
    safeguards:
      "We require service providers to protect information to a standard equivalent to this policy and applicable requirements. Data may be processed in other countries under each provider’s terms and lawful transfer mechanisms.",
    legalTitle: "Why we process information",
    legalItems: [
      ["To provide the service", "Store, organize, search, sync, and display content you choose."],
      ["With your choice or consent", "Photos access, iCloud sync, and voluntary Spread the Word submissions."],
      ["Legitimate interests", "Limited analytics and diagnostics to understand usage, prevent errors, and improve stability."],
      ["Legal obligations", "When the law requires us to retain or disclose information."],
    ],
    retentionTitle: "Retention and deletion",
    retentionItems: [
      ["Local content", "Remains until you delete the item, clear the app’s data, or uninstall the app. Content in a shared App Group may be subject to iOS storage management."],
      ["iCloud", "Remains in your private iCloud database until you delete the content or manage Klipp’s iCloud data. Simply disabling sync does not delete the existing iCloud copy."],
      ["Analytics", "Google Analytics retains user- and event-level data according to the project’s configured retention period, normally 2 or 14 months. Aggregated reports may be retained longer."],
      ["Crashlytics", "Firebase states that crash data and associated identifiers are retained for 90 days before removal begins."],
      ["Spread the Word", "Application data is retained as needed for review, status, and the Pro reward, or until deleted following a valid request."],
    ],
    rightsTitle: "Your choices and rights",
    rightsIntro:
      "Depending on where you live, you may have rights to access, correct, delete, restrict, or object to the processing of personal data, and to receive certain data.",
    rights: [
      "Change or revoke Photos access in iOS Settings.",
      "Choose On Device or iCloud Sync in Klipp settings.",
      "Delete saved items and collections directly in the app.",
      "Uninstall Klipp to stop future Analytics and Crashlytics collection from the app.",
      "Contact us with questions or to request deletion of a Spread the Word application.",
    ],
    rightsNote:
      "Because Klipp does not set its own user ID in Analytics, it may be impossible to link anonymous usage statistics to a particular person. We may request information needed to verify and complete a request.",
    childrenTitle: "Children",
    childrenBody:
      "Klipp is not specifically directed to children under 13. Contact us if you believe a child has submitted personal data through a feature such as Spread the Word.",
    changesTitle: "Changes",
    changesBody:
      "We may update this policy when the app or legal requirements change. The date at the top shows the latest revision. Material changes will be communicated as appropriate.",
    contactTitle: "Contact",
    contactBody:
      "Have a question, want to exercise a right, or request deletion? Contact us and consider using “Klipp Privacy” as the subject.",
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

            <div className="card providers">
              <h2>{t.providersTitle}</h2>
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
                {t.appleLink}<span aria-hidden="true">↗</span>
              </a>
              <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noreferrer">
                {t.firebaseLink}<span aria-hidden="true">↗</span>
              </a>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                {t.googleLink}<span aria-hidden="true">↗</span>
              </a>
            </div>
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
              <PolicyBlock title={t.photosTitle} body={t.photosBody} />
              <PolicyBlock title={t.analyticsTitle} body={t.analyticsBody} note={t.analyticsNo} />
              <PolicyBlock title={t.crashTitle} body={t.crashBody} />
              <PolicyBlock title={t.spreadTitle} body={t.spreadBody} />
              <PolicyBlock title={t.purchaseTitle} body={t.purchaseBody} />
              <PolicyBlock title={t.linksTitle} body={t.linksBody} />
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

              <div className="subsection">
                <h2>{t.legalTitle}</h2>
                <div className="definition-list">
                  {t.legalItems.map(([title, body]) => (
                    <div key={title}>
                      <strong>{title}</strong>
                      <p>{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="card section-card" id="retention">
              <div className="section-number">04</div>
              <h2>{t.retentionTitle}</h2>
              <div className="timeline">
                {t.retentionItems.map(([title, body]) => (
                  <div className="timeline-row" key={title}>
                    <span aria-hidden="true" />
                    <div>
                      <h3>{title}</h3>
                      <p>{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="card section-card" id="rights">
              <div className="section-number">05</div>
              <h2>{t.rightsTitle}</h2>
              <p>{t.rightsIntro}</p>
              <ul className="check-list">
                {t.rights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p className="small-print">{t.rightsNote}</p>
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
                <div className="section-number">06</div>
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
