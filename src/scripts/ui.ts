function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const onScroll = () => {
    const on = window.scrollY > 40;
    nav.classList.toggle('nav--scrolled', on);
    if (on) nav.setAttribute('data-scrolled', '');
    else nav.removeAttribute('data-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-nav-menu]');
  if (!nav || !toggle || !menu) return;

  const set = (open: boolean) => {
    if (open) nav.setAttribute('data-open', '');
    else nav.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => set(!nav.hasAttribute('data-open')));
  // Close after picking a link, or when the viewport grows back to desktop.
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) set(false);
  });
}

function reveal(el: Element) {
  el.classList.add('in');
  el.setAttribute('data-revealed', '');
}

function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal, [data-reveal]'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    els.forEach(reveal);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => {
    io.observe(el);
    // Safety net: reveal even if the observer never fires.
    window.setTimeout(() => reveal(el), 1600);
  });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) return;
  const io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        hero.classList.add('hero--in');
        io.disconnect();
      }
    },
    { threshold: 0.05 }
  );
  io.observe(hero);
}

function initCodeTabs() {
  const panel = document.querySelector<HTMLElement>('[data-code-panel]');
  if (!panel) return;
  const tabs = panel.querySelectorAll<HTMLButtonElement>('[data-tab]');
  const views = panel.querySelectorAll<HTMLElement>('[data-view]');
  const lang = panel.querySelector<HTMLElement>('[data-status-lang]');
  const pos = panel.querySelector<HTMLElement>('[data-status-pos]');
  const META: Record<string, { lang: string; pos: string }> = {
    caps: { lang: 'TypeScript', pos: 'Ln 9, Col 1' },
    about: { lang: 'Markdown', pos: 'Ln 11, Col 1' },
  };

  const select = (name: string) => {
    tabs.forEach((t) => {
      const active = t.dataset.tab === name;
      t.classList.toggle('active', active);
      if (active) t.setAttribute('data-active', '');
      else t.removeAttribute('data-active');
    });
    views.forEach((v) => {
      v.hidden = v.dataset.view !== name;
    });
    if (lang) lang.textContent = '● ' + META[name].lang;
    if (pos) pos.textContent = META[name].pos;
  };

  tabs.forEach((t) => t.addEventListener('click', () => select(t.dataset.tab as string)));
}

initNav();
initMobileNav();
initReveal();
initHero();
initCodeTabs();
