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
    links: ['New Smart Bottle', 'App Integration', 'Sustainability'],
  },
  {
    title: 'Support',
    links: ['Contact', 'Support Center', 'Delivery & Returns'],
  },
  {
    title: 'Company',
    links: ['About Velora', 'Our Mission', 'Our Commitment', 'Intelligent Innovation'],
  },
];

const figmaAssets = {
  search: 'https://www.figma.com/api/mcp/asset/0d089f54-1372-4715-914f-56fd31c57b56',
  searchHandle: 'https://www.figma.com/api/mcp/asset/2b59b228-4003-49b7-9fc9-0117d25ad46c',
  userBody: 'https://www.figma.com/api/mcp/asset/5bc5f48f-d0e1-4584-bf57-ee12015ba79e',
  userHead: 'https://www.figma.com/api/mcp/asset/f0fb0ed9-3619-410c-b2e9-7a480a36fb7b',
  cartTop: 'https://www.figma.com/api/mcp/asset/01d52984-eea5-41a5-8009-b9992fab6c28',
  cartBasket: 'https://www.figma.com/api/mcp/asset/7cd36a62-303c-4495-a498-2a97c4abc575',
  cartBody: 'https://www.figma.com/api/mcp/asset/54f34ee8-721d-4899-bce3-a0f5bef3c927',
  cartWheel: 'https://www.figma.com/api/mcp/asset/1beb3d8f-50ec-4481-91e9-33e1c9cef4ac',
  instagram: 'https://www.figma.com/api/mcp/asset/2bdfe3d9-c449-4d03-80c9-9b2306f6cb6b',
  instagramInner: 'https://www.figma.com/api/mcp/asset/838f840f-3c65-4448-959c-76fb3fbb35e2',
  instagramDot: 'https://www.figma.com/api/mcp/asset/f6a0cf10-7c52-4372-8b02-1f5dd687566c',
  x: 'https://www.figma.com/api/mcp/asset/f49c3f68-772c-452d-bd3f-a632c6168799',
  tiktok: 'https://www.figma.com/api/mcp/asset/9f2d7499-2990-4ba0-b3c2-b308659afca6',
  facebook: 'https://www.figma.com/api/mcp/asset/d7b75623-032a-453e-abd7-a175d4e628d2',
  linkedin: 'https://www.figma.com/api/mcp/asset/fd3e3fe2-1a97-4cec-a0a2-8dab056c5095',
  mastercard: 'https://www.figma.com/api/mcp/asset/ed841a9e-54a0-4bcb-bf5c-048a74ce4663',
  visa: 'https://www.figma.com/api/mcp/asset/bec0b29f-0360-4039-941f-f0a8269a3b15',
  applePay: 'https://www.figma.com/api/mcp/asset/2dbca9ba-a9a5-4c75-b510-839f2ec47985',
  alipay: 'https://www.figma.com/api/mcp/asset/fb3e5bfd-1a2b-4442-9a05-482a0a43936f',
  paypal: 'https://www.figma.com/api/mcp/asset/afbd1820-d05e-49cc-b4e8-c4b44d04b994',
  klarna: 'https://www.figma.com/api/mcp/asset/93b3e439-a5e7-4b2f-b7ee-edf75cb0cd52',
};

const paymentMethods = [
  { name: 'Mastercard', src: figmaAssets.mastercard, theme: 'light' },
  { name: 'Visa', src: figmaAssets.visa, theme: 'light' },
  { name: 'Apple Pay', src: figmaAssets.applePay, theme: 'light' },
  { name: 'Alipay', src: figmaAssets.alipay, theme: 'light' },
  { name: 'PayPal', src: figmaAssets.paypal, theme: 'light' },
  { name: 'Klarna', src: figmaAssets.klarna, theme: 'pink' },
];

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
              <a class="nav-icon nav-search" href="#about" aria-label="Search">
                <img class="search-circle" src="${figmaAssets.search}" alt="" />
                <img class="search-handle" src="${figmaAssets.searchHandle}" alt="" />
              </a>
              <a class="nav-icon nav-user" href="#about" aria-label="Account">
                <img class="user-body" src="${figmaAssets.userBody}" alt="" />
                <img class="user-head" src="${figmaAssets.userHead}" alt="" />
              </a>
              <a class="nav-icon nav-cart" href="#about" aria-label="Cart">
                <img class="cart-top" src="${figmaAssets.cartTop}" alt="" />
                <img class="cart-basket" src="${figmaAssets.cartBasket}" alt="" />
                <img class="cart-body" src="${figmaAssets.cartBody}" alt="" />
                <img class="cart-wheel cart-wheel-left" src="${figmaAssets.cartWheel}" alt="" />
                <img class="cart-wheel cart-wheel-right" src="${figmaAssets.cartWheel}" alt="" />
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
          <div class="innovation-top">
            <article class="device-column">
              <img class="device-shot" src="/assets/Innovation2.png" alt="Velora hydration tracking mobile app" />
              <div class="innovation-copy-block">
                <h3>${innovationFeatures[1].title}</h3>
                <p>${innovationFeatures[1].body}</p>
              </div>
            </article>
            <article class="innovation-copy-block smart-copy">
              <h3>${innovationFeatures[0].title}</h3>
              <p>${innovationFeatures[0].body}</p>
            </article>
            <figure class="product-column">
              <img class="product-shot" src="/assets/commitment2.png" alt="Metal bottle components showing insulated construction" />
            </figure>
          </div>
          <div class="innovation-bottom">
            <figure class="innovation-ice">
              <img src="/assets/Innovation3.png" alt="Close-up of cold ice cubes representing cooling performance" />
            </figure>
            <article class="innovation-copy-block advanced-copy">
              <h3>${innovationFeatures[2].title}</h3>
              <p>${innovationFeatures[2].body}</p>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer" id="footer">
      <div class="container footer-card">
        <div class="footer-top">
          <div class="footer-brand-block">
            <a class="wordmark footer-wordmark" href="#about">VELORA</a>
            <p class="footer-description">
              Smart hydration for a sustainable lifestyle.
              <br />
              Track your water intake, reduce plastic waste, and stay healthy with our intelligent water bottle.
            </p>
            <form class="subscribe-form">
              <label class="sr-only" for="email">Email address</label>
              <input id="email" name="email" type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
            <div class="socials" aria-label="Social media">
              <a class="social-icon instagram-icon" href="#about" aria-label="Instagram">
                <img class="instagram-outline" src="${figmaAssets.instagram}" alt="" />
                <img class="instagram-inner" src="${figmaAssets.instagramInner}" alt="" />
                <img class="instagram-dot" src="${figmaAssets.instagramDot}" alt="" />
              </a>
              <a class="social-icon" href="#about" aria-label="X">
                <img src="${figmaAssets.x}" alt="" />
              </a>
              <a class="social-icon" href="#about" aria-label="TikTok">
                <img src="${figmaAssets.tiktok}" alt="" />
              </a>
              <a class="social-icon" href="#about" aria-label="Facebook">
                <img src="${figmaAssets.facebook}" alt="" />
              </a>
              <a class="social-icon" href="#about" aria-label="LinkedIn">
                <img src="${figmaAssets.linkedin}" alt="" />
              </a>
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
          <p class="legal-copy">© 2026 Velora. All rights reserved.</p>
          <div class="payment-row" aria-label="Payment methods">
            ${paymentMethods
              .map(
                (method) => `
                  <span class="payment-chip payment-chip-${method.theme}">
                    <img src="${method.src}" alt="${method.name}" />
                  </span>
                `,
              )
              .join('')}
          </div>
          <div class="legal-links">
            <a href="#about">Privacy Policy</a>
            <a href="#about">Use of Cookies</a>
            <a href="#about">Terms of Use</a>
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
