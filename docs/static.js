const app = document.getElementById("app");
let copy;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const block = (title, body, note = "") => `
  <div class="policy-block">
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(body)}</p>
    ${note ? `<p class="inline-note">${escapeHtml(note)}</p>` : ""}
  </div>
`;

function render(language) {
  const t = copy[language];
  document.documentElement.lang = language;
  localStorage.setItem("klipp-privacy-language", language);

  app.innerHTML = `
    <div class="ambient ambient-one" aria-hidden="true"></div>
    <div class="ambient ambient-two" aria-hidden="true"></div>
    <div class="shell">
      <header class="topbar">
        <a class="brand" href="#top" aria-label="Klipp">
          <img src="./klipp-icon.png" alt="" />
          <span>Klipp</span>
        </a>
        <div class="language" aria-label="Language selector">
          <button class="${language === "sv" ? "active" : ""}" type="button" data-language="sv" aria-pressed="${language === "sv"}">Svenska</button>
          <button class="${language === "en" ? "active" : ""}" type="button" data-language="en" aria-pressed="${language === "en"}">English</button>
        </div>
      </header>

      <section class="hero" id="top">
        <div class="hero-copy">
          <div class="eyebrow">${escapeHtml(t.badge)}</div>
          <h1>${escapeHtml(t.title)}</h1>
          <p class="hero-subtitle">${escapeHtml(t.subtitle)}</p>
          <p class="updated">${escapeHtml(t.updated)}</p>
        </div>
        <div class="folder-art" aria-hidden="true">
          <div class="photo photo-one"></div>
          <div class="photo photo-two"></div>
          <div class="folder-tab">K</div>
          <div class="folder"><span>Klipp</span><i></i></div>
        </div>
      </section>

      <section class="promise-grid" aria-label="${escapeHtml(t.overviewTitle)}">
        ${t.summary.map(([title, body], index) => `
          <article class="promise">
            <span class="promise-icon icon-${index + 1}" aria-hidden="true">${index === 0 ? "✓" : index === 1 ? "—" : "◆"}</span>
            <div><h2>${escapeHtml(title)}</h2><p>${escapeHtml(body)}</p></div>
          </article>
        `).join("")}
      </section>

      <div class="content-grid">
        <aside class="side">
          <nav class="card toc" aria-label="${escapeHtml(t.navTitle)}">
            <h2>${escapeHtml(t.navTitle)}</h2>
            ${t.nav.map(([href, label], index) => `
              <a href="#${escapeHtml(href)}"><span>${String(index + 1).padStart(2, "0")}</span>${escapeHtml(label)}</a>
            `).join("")}
          </nav>
          <div class="card providers">
            <h2>${escapeHtml(t.providersTitle)}</h2>
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">${escapeHtml(t.appleLink)}<span aria-hidden="true">↗</span></a>
            <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noreferrer">${escapeHtml(t.firebaseLink)}<span aria-hidden="true">↗</span></a>
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">${escapeHtml(t.googleLink)}<span aria-hidden="true">↗</span></a>
          </div>
        </aside>

        <div class="policy">
          <section class="card section-card" id="overview">
            <div class="section-number">01</div>
            <h2>${escapeHtml(t.overviewTitle)}</h2>
            <p>${escapeHtml(t.overview)}</p>
            <div class="notice"><strong>${escapeHtml(t.controllerLabel)}</strong><p>${escapeHtml(t.controller)}</p></div>
          </section>

          <section class="card section-card" id="data">
            <div class="section-number">02</div>
            <h2>${escapeHtml(t.dataTitle)}</h2>
            ${block(t.contentTitle, t.contentBody, t.contentNote)}
            ${block(t.photosTitle, t.photosBody)}
            ${block(t.analyticsTitle, t.analyticsBody, t.analyticsNo)}
            ${block(t.crashTitle, t.crashBody)}
            ${block(t.spreadTitle, t.spreadBody)}
            ${block(t.purchaseTitle, t.purchaseBody)}
            ${block(t.linksTitle, t.linksBody)}
          </section>

          <section class="card section-card" id="services">
            <div class="section-number">03</div>
            <h2>${escapeHtml(t.servicesTitle)}</h2>
            <p>${escapeHtml(t.servicesIntro)}</p>
            <div class="service-list">
              ${t.services.map(([name, description]) => `
                <div class="service">
                  <span>${escapeHtml(name.charAt(0))}</span>
                  <div><h3>${escapeHtml(name)}</h3><p>${escapeHtml(description)}</p></div>
                </div>
              `).join("")}
            </div>
            <p class="small-print">${escapeHtml(t.safeguards)}</p>
            <div class="subsection">
              <h2>${escapeHtml(t.legalTitle)}</h2>
              <div class="definition-list">
                ${t.legalItems.map(([title, body]) => `
                  <div><strong>${escapeHtml(title)}</strong><p>${escapeHtml(body)}</p></div>
                `).join("")}
              </div>
            </div>
          </section>

          <section class="card section-card" id="retention">
            <div class="section-number">04</div>
            <h2>${escapeHtml(t.retentionTitle)}</h2>
            <div class="timeline">
              ${t.retentionItems.map(([title, body]) => `
                <div class="timeline-row"><span aria-hidden="true"></span><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(body)}</p></div></div>
              `).join("")}
            </div>
          </section>

          <section class="card section-card" id="rights">
            <div class="section-number">05</div>
            <h2>${escapeHtml(t.rightsTitle)}</h2>
            <p>${escapeHtml(t.rightsIntro)}</p>
            <ul class="check-list">${t.rights.map((right) => `<li>${escapeHtml(right)}</li>`).join("")}</ul>
            <p class="small-print">${escapeHtml(t.rightsNote)}</p>
            <div class="split">
              <div><h3>${escapeHtml(t.childrenTitle)}</h3><p>${escapeHtml(t.childrenBody)}</p></div>
              <div><h3>${escapeHtml(t.changesTitle)}</h3><p>${escapeHtml(t.changesBody)}</p></div>
            </div>
          </section>

          <section class="card contact-card" id="contact">
            <div>
              <div class="section-number">06</div>
              <h2>${escapeHtml(t.contactTitle)}</h2>
              <p>${escapeHtml(t.contactBody)}</p>
            </div>
            <div class="contact-details">
              <div><span>${escapeHtml(t.emailLabel)}</span><a href="mailto:walid.apps@outlook.com?subject=Klipp%20Privacy">walid.apps@outlook.com</a></div>
              <div><span>${escapeHtml(t.responseLabel)}</span><strong>${escapeHtml(t.response)}</strong></div>
              <a class="button" href="mailto:walid.apps@outlook.com?subject=Klipp%20Privacy">${escapeHtml(t.supportButton)}<span aria-hidden="true">↗</span></a>
            </div>
          </section>
        </div>
      </div>

      <footer><p>${escapeHtml(t.footer)}</p><p>${escapeHtml(t.disclaimer)}</p></footer>
    </div>
  `;

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => render(button.dataset.language));
  });
}

fetch("./privacy-copy.json")
  .then((response) => {
    if (!response.ok) throw new Error("Privacy text could not be loaded.");
    return response.json();
  })
  .then((data) => {
    copy = data;
    const saved = localStorage.getItem("klipp-privacy-language");
    const language =
      saved === "sv" || saved === "en"
        ? saved
        : navigator.language.toLowerCase().startsWith("sv")
          ? "sv"
          : "en";
    render(language);
  })
  .catch(() => {
    app.innerHTML = '<div class="loading">Klipp privacy policy could not be loaded.</div>';
  });
