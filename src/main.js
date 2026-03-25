import './styles.css';

const navItems = [
  { label: 'Home', href: '#about' },
  { label: 'About Us', href: '#mission' },
  { label: 'Product', href: '#innovation' },
  { label: 'Sustainability', href: '#commitment' },
  { label: 'Support', href: '#footer' },
];

const stats = [
  { value: '300B', label: 'Plastic Bottles Saved' },
  { value: '0', label: 'Plastic in Product' },
  { value: '90%', label: 'Recyclable Materials' },
];

const commitmentCards = [
  {
    image: '/assets/548ff2a7-e293-494a-9d38-7b203a549332.png',
    title: 'Responsible Production',
    body:
      'Automated, precise manufacturing reduces waste while keeping every Velora product consistent and built to last.',
  },
  {
    image: '/assets/955ed416-b1c3-4820-a851-87916f44b3b7.png',
    title: 'Inclusive Workplace',
    body:
      'We invest in teams where different experiences lead to better decisions, stronger systems, and smarter design.',
  },
  {
    image: '/assets/cd797bfc-b14b-4101-9b29-914b8e99f2da.png',
    title: 'Modern Factory Operations',
    body:
      'Our production floor is built around reliability, repeatability, and transparent quality control from line to shelf.',
  },
];

const innovationFeatures = [
  {
    title: 'Smart Hydration App',
    body:
      'A companion app helps you monitor intake, build habits, and stay connected to daily hydration goals with a clear dashboard.',
  },
  {
    title: 'Vacuum-Sealed Insulation',
    body:
      'Double-wall stainless steel keeps water cold for longer while maintaining a rugged, everyday-ready form factor.',
  },
  {
    title: 'Advanced Materials Technology',
    body:
      'Durable recycled inputs, impact-resistant finishes, and modular parts help extend product life and reduce replacement waste.',
  },
];

const footerColumns = [
  {
    title: 'Product',
    links: ['Overview', 'Technology', 'App Experience', 'Smart Bottle'],
  },
  {
    title: 'Support',
    links: ['Track Order', 'Returns', 'Care Guide', 'Shipping'],
  },
  {
    title: 'Company',
    links: ['About Velora', 'Our Mission', 'Sustainability', 'Privacy Policy'],
  },
];

const utilityIcons = {
  search: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 18a7 7 0 1 1 0-14a7 7 0 0 1 0 14Zm9 3-5.2-5.2" />
    </svg>
  `,
  account: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z" />
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 4l6.4 7.8L4.4 20H7l4.6-5.4L16 20h4L13.2 12 19.2 4h-2.6l-4 4.8L8.7 4Z" />
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.5H3.5V20h3Zm-1.5-5a1.8 1.8 0 1 0 0 3.6a1.8 1.8 0 0 0 0-3.6ZM20.5 20v-6.2c0-3.3-1.8-4.8-4.2-4.8c-1.9 0-2.8 1.1-3.2 1.8v-1.5h-3V20h3v-5.6c0-1.5.3-2.9 2.2-2.9c1.9 0 1.9 1.8 1.9 3V20Z" />
    </svg>
  `,
  youtube: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.5 8.2a2.8 2.8 0 0 0-2-2C17.8 5.7 12 5.7 12 5.7s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .5 3.8a2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.5-3.8ZM10 15.5v-7l6 3.5Z" />
    </svg>
  `,
};

const paymentMethods = ['Mastercard', 'VISA', 'Apple Pay', 'Google Pay', 'Klarna'];

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <div class="container">
        <div class="nav-wrap">
          <a class="wordmark" href="#about" aria-label="Velora home">VELORA</a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
            <div class="nav-links">
              ${navItems
                .map((item) => `<a href="${item.href}">${item.label}</a>`)
                .join('')}
            </div>
            <div class="nav-utilities">
              <a class="nav-icon" href="#about" aria-label="Search">
                ${utilityIcons.search}
              </a>
              <a class="nav-icon" href="#about" aria-label="Account">
                ${utilityIcons.account}
              </a>
              <a class="nav-cta" href="#innovation">Shop Now</a>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <section class="hero" id="about">
        <div class="hero-media"></div>
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="hero-copy">
            <p class="eyebrow">Designed for your life</p>
            <h1>About Velora</h1>
            <p class="lead">
              Intelligent hydration products built for everyday rituals, engineered with cleaner materials, and designed to reduce single-use waste.
            </p>
            <div class="hero-actions">
              <a class="button button-primary" href="#mission">Our Mission</a>
              <a class="button button-secondary" href="#commitment">See the Impact</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section intro" id="mission">
        <div class="container narrow">
          <p class="section-kicker">Our Mission</p>
          <h2>Making healthy hydration effortless for you and for the planet.</h2>
          <p class="section-copy">
            We build reusable systems that fit daily routines while lowering waste, supporting better habits, and making sustainable choices easier to keep.
          </p>
        </div>
      </section>

      <section class="section philosophy" id="philosophy">
        <div class="container split-card">
          <div class="split-visual">
            <img src="/assets/868f2a4b-5c0f-46aa-86c2-5dbe3ef72d9b.png" alt="Water flowing through stone with embedded circuitry details" />
          </div>
          <div class="split-copy">
            <p class="section-kicker">Our Philosophy</p>
            <h2>Thoughtful design shaped by nature, data, and durability.</h2>
            <p>
              Velora products are built around a simple idea: sustainable tools only matter when people actually want to use them every day.
            </p>
            <p>
              That means balancing tactile comfort, long-term performance, and visible environmental responsibility in every product decision.
            </p>
            <p>
              From material selection to digital guidance, we focus on systems that feel intuitive, measurable, and built to endure.
            </p>
          </div>
        </div>
      </section>

      <section class="section commitment" id="commitment">
        <div class="container narrow">
          <p class="section-kicker">Our Commitment</p>
          <h2>Sustainability, ethics, and positive impact shape every decision we make.</h2>
        </div>
        <div class="container stats-grid">
          ${stats
            .map(
              (stat) => `
                <article class="stat-card">
                  <strong>${stat.value}</strong>
                  <span>${stat.label}</span>
                </article>
              `,
            )
            .join('')}
        </div>
        <div class="container action-row">
          <a class="button button-tertiary" href="#innovation">See Our Story</a>
        </div>
        <div class="container card-grid">
          ${commitmentCards
            .map(
              (card) => `
                <article class="info-card">
                  <img src="${card.image}" alt="${card.title}" />
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="section environment">
        <div class="container">
          <figure class="feature-image">
            <img src="/assets/19b673cb-4670-475f-ae06-ffe20ecb018a.png" alt="School of fish swimming through illuminated ocean water" />
            <figcaption>Inspired by ecosystems that depend on cleaner water and less waste.</figcaption>
          </figure>
        </div>
      </section>

      <section class="section innovation" id="innovation">
        <div class="container narrow">
          <p class="section-kicker">Intelligent Innovation</p>
          <h2>Tools to help you stay hydrated and reduce waste.</h2>
        </div>
        <div class="container innovation-layout">
          <article class="innovation-panel app-panel">
            <img class="device-shot" src="/assets/Innovation2.png" alt="Velora hydration tracking mobile app" />
            <div>
              <h3>${innovationFeatures[0].title}</h3>
              <p>${innovationFeatures[0].body}</p>
            </div>
          </article>
          <article class="innovation-panel tech-panel">
            <div>
              <h3>${innovationFeatures[1].title}</h3>
              <p>${innovationFeatures[1].body}</p>
            </div>
            <img class="product-shot" src="/assets/commitment2.png" alt="Metal bottle components showing insulated construction" />
          </article>
          <article class="innovation-panel material-panel">
            <img src="/assets/Innovation3.png" alt="Close-up of cold ice cubes representing cooling performance" />
            <div>
              <h3>${innovationFeatures[2].title}</h3>
              <p>${innovationFeatures[2].body}</p>
            </div>
          </article>
          <article class="innovation-panel accent-panel">
            <img src="/assets/cd797bfc-b14b-4101-9b29-914b8e99f2da.png" alt="Velora production line assembling reusable bottles" />
            <div>
              <p class="mini-label">Precision manufacturing</p>
              <p>Production systems are tuned for repeatable quality, cleaner output, and dependable long-term performance.</p>
            </div>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer" id="footer">
      <div class="container footer-card">
        <div class="footer-top">
          <div class="footer-brand-block">
            <a class="wordmark footer-wordmark" href="#about">VELORA</a>
            <p class="footer-description">
              Your everyday hydration companion, thoughtfully built for modern routines, cleaner habits, and lower-impact materials.
            </p>
            <form class="subscribe-form">
              <label class="sr-only" for="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div class="socials" aria-label="Social media">
              <a href="#about" aria-label="Instagram">${utilityIcons.instagram}</a>
              <a href="#about" aria-label="Facebook">${utilityIcons.facebook}</a>
              <a href="#about" aria-label="X">${utilityIcons.x}</a>
              <a href="#about" aria-label="LinkedIn">${utilityIcons.linkedin}</a>
              <a href="#about" aria-label="YouTube">${utilityIcons.youtube}</a>
            </div>
          </div>
          <div class="footer-columns">
            ${footerColumns
              .map(
                (column) => `
                  <div class="footer-column">
                    <h3>${column.title}</h3>
                    ${column.links.map((link) => `<a href="#about">${link}</a>`).join('')}
                  </div>
                `,
              )
              .join('')}
          </div>
        </div>
        <div class="footer-bottom">
          <p class="legal-copy">©2026 Velora. All rights reserved.</p>
          <div class="payment-row" aria-label="Payment methods">
            ${paymentMethods.map((method) => `<span class="payment-chip">${method}</span>`).join('')}
          </div>
          <div class="legal-links">
            <a href="#about">Privacy Policy</a>
            <a href="#about">Terms &amp; Conditions</a>
            <a href="#about">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');
const subscribeForm = document.querySelector('.subscribe-form');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav?.classList.toggle('is-open');
  document.body.classList.toggle('nav-open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
});
