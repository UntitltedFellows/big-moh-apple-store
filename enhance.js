document.documentElement.classList.add('enhanced');

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

// One quiet entrance language. IntersectionObserver avoids a per-frame scroll handler.
const revealItems = [...document.querySelectorAll('[data-reveal]')];
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('in-view'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
}

// The signature interaction: switch a real, licensed GLB on the inspection counter.
const heroPhone = document.querySelector('#hero-phone');
const heroName = document.querySelector('#hero-model-name');
const heroCredit = document.querySelector('#hero-model-credit');
const docketModel = document.querySelector('#docket-model');
const inspectionStamp = document.querySelector('.inspection-stamp');
const heroSwitches = [...document.querySelectorAll('[data-hero-src]')];
heroSwitches.forEach((button) => {
  button.addEventListener('click', () => {
    if (!heroPhone || button.classList.contains('is-active')) return;
    heroSwitches.forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    heroPhone.setAttribute('src', button.dataset.heroSrc);
    heroPhone.setAttribute('alt', `Interactive 3D model of ${button.dataset.heroName}`);
    heroPhone.setAttribute('orientation', button.dataset.heroName === 'iPhone Duo' ? '0deg 90deg 0deg' : '0deg 0deg 0deg');
    heroName.textContent = button.dataset.heroName;
    if (docketModel) docketModel.textContent = button.dataset.heroName;
    heroCredit.textContent = `3D model by ${button.dataset.heroCredit}`;
    inspectionStamp?.classList.remove('is-stamped');
    requestAnimationFrame(() => inspectionStamp?.classList.add('is-stamped'));
  });
});

heroPhone?.addEventListener('pointerdown', () => inspectionStamp?.classList.add('is-stamped'));

// Catalog controls work on the already-rendered 34-item release shelf.
const search = document.querySelector('#catalog-search');
const only3d = document.querySelector('#catalog-3d');
const count = document.querySelector('#catalog-count');
const cards = [...document.querySelectorAll('.pick')];

function filterCatalog() {
  const query = (search?.value || '').trim().toLowerCase();
  const require3d = only3d?.getAttribute('aria-pressed') === 'true';
  let visible = 0;
  cards.forEach((card) => {
    const matchesText = !query || card.dataset.name.includes(query);
    const matches3d = !require3d || card.dataset.has3d === 'true';
    card.hidden = !(matchesText && matches3d);
    if (!card.hidden) visible += 1;
  });
  if (count) count.textContent = `${visible} ${visible === 1 ? 'phone' : 'phones'}`;
}

search?.addEventListener('input', filterCatalog);
only3d?.addEventListener('click', () => {
  const next = only3d.getAttribute('aria-pressed') !== 'true';
  only3d.setAttribute('aria-pressed', String(next));
  only3d.textContent = next ? 'Showing 3D-ready' : 'Show 3D-ready only';
  filterCatalog();
});
filterCatalog();

// Return focus to the exact shelf card that opened the product dialog.
let phoneTrigger = null;
document.querySelector('.shelf')?.addEventListener('click', (event) => {
  phoneTrigger = event.target.closest('.pick');
});
document.querySelector('#phone')?.addEventListener('close', () => {
  if (phoneTrigger?.isConnected) phoneTrigger.focus();
});

// The selected GPT Taste motion pair: reveal motion and stacked counter cards.
if (!reduceMotion && window.gsap && window.ScrollTrigger) {
  window.gsap.registerPlugin(window.ScrollTrigger);
  const motion = window.gsap.matchMedia();

  document.querySelectorAll('.counter-card').forEach((card, index, cardsList) => {
    window.gsap.fromTo(card,
      { y: 110, scale: 0.94, opacity: 0.72 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          start: 'top 92%',
          end: 'top 28%',
          scrub: 0.65
        }
      }
    );
    const next = cardsList[index + 1];
    if (next) {
      window.gsap.to(card, {
        scale: 0.965,
        filter: 'brightness(.72)',
        ease: 'none',
        scrollTrigger: {
          trigger: next,
          start: 'top 88%',
          end: 'top 24%',
          scrub: 0.65
        }
      });
    }
  });

  addEventListener('load', () => window.ScrollTrigger.refresh(), { once: true });
}
