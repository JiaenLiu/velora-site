import './styles.css';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Commitment', href: '#commitment' },
  { label: 'Innovation', href: '#innovation' },
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
    title: 'Company',
    links: ['About', 'Mission', 'Impact', 'Contact'],
  },
  {
    title: 'Product',
    links: ['Bottle', 'App', 'Materials', 'Care'],
  },
  {
    title: 'Resources',
    links: ['Sustainability', 'Support', 'Privacy', 'Terms'],
  },
];

const app = document.querySelector('#app');

app.innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="#about" aria-label="Velora home">
          <span class="brand-mark">V</span>
          <span class="brand-name">VELORA</span>
        </a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
          ${navItems
            .map((item) => `<a href="${item.href}">${item.label}</a>`)
            .join('')}
          <a class="nav-cta" href="#innovation">Learn More</a>
        </nav>
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

    <footer class="site-footer">
      <div class="container footer-top">
        <div>
          <a class="brand footer-brand" href="#about">
            <span class="brand-mark">V</span>
            <span class="brand-name">VELORA</span>
          </a>
          <p class="footer-tagline">Designed for your life. Built for the planet.</p>
          <div class="socials" aria-label="Social media">
            <a href="#about" aria-label="Instagram">IG</a>
            <a href="#about" aria-label="LinkedIn">LI</a>
            <a href="#about" aria-label="X">X</a>
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
    </footer>
  </div>
`;

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

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
