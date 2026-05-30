function initNav() {
  const navigation = document.querySelector<HTMLElement>('[data-nav]');
  if (!navigation) {
    return;
  }
  const onScroll = () => {
    const on = window.scrollY > 40;
    navigation.classList.toggle('nav--scrolled', on);
    if (on) {
      navigation.setAttribute('data-scrolled', '');
    } else {
      navigation.removeAttribute('data-scrolled');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initMobileNav() {
  const navigation = document.querySelector<HTMLElement>('[data-nav]');
  const toggle = document.querySelector<HTMLElement>('[data-nav-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-nav-menu]');
  if (!navigation || !toggle || !menu) {
    return;
  }

  const set = (open: boolean) => {
    if (open) {
      navigation.setAttribute('data-open', '');
    } else {
      navigation.removeAttribute('data-open');
    }
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => set(!navigation.hasAttribute('data-open')));
  // Close after picking a link, or when the viewport grows back to desktop.
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) set(false);
  });
}

function reveal(element: Element) {
  element.classList.add('in');
  element.setAttribute('data-revealed', '');
}

function initReveal() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal, [data-reveal]'));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    elements.forEach(reveal);
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((element) => {
        if (element.isIntersecting) {
          reveal(element.target);
          observer.unobserve(element.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  elements.forEach((element) => {
    observer.observe(element);
    // Safety net: reveal even if the observer never fires.
    window.setTimeout(() => reveal(element), 1600);
  });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>('.hero');
  if (!hero) {
    return;
  }
  const observer = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        hero.classList.add('hero--in');
        observer.disconnect();
      }
    },
    { threshold: 0.05 }
  );
  observer.observe(hero);
}

function initCodeTabs() {
  const panel = document.querySelector<HTMLElement>('[data-code-panel]');
  if (!panel) {
    return;
  }
  const tabs = panel.querySelectorAll<HTMLButtonElement>('[data-tab]');
  const views = panel.querySelectorAll<HTMLElement>('[data-view]');
  const language = panel.querySelector<HTMLElement>('[data-status-lang]');
  const pos = panel.querySelector<HTMLElement>('[data-status-pos]');
  const META: Record<string, { lang: string; pos: string }> = {
    caps: { lang: 'TypeScript', pos: 'Ln 9, Col 1' },
    about: { lang: 'Markdown', pos: 'Ln 11, Col 1' },
  };

  const select = (name: string) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.tab === name;
      tab.classList.toggle('active', active);
      if (active) tab.setAttribute('data-active', '');
      else tab.removeAttribute('data-active');
    });
    views.forEach((view) => {
      view.hidden = view.dataset.view !== name;
    });
    if (language) {
      language.textContent = '● ' + META[name].lang;
    }
    if (pos) {
      pos.textContent = META[name].pos;
    }
  };

  tabs.forEach((tab) => tab.addEventListener('click', () => select(tab.dataset.tab as string)));
}

initNav();
initMobileNav();
initReveal();
initHero();
initCodeTabs();
