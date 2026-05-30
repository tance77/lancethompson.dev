// ============================================================
//  Client behaviors ported from the mockup's React hooks:
//  - Nav goes translucent past 40px of scroll
//  - .reveal elements fade/slide in on first view (with fallback)
//  - .hero gains .hero--in to trigger entrance animations
//  - Code panel tabs swap capabilities.ts <-> about.md
// ============================================================

function initNav() {
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("nav--scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initReveal() {
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach((el) => {
    io.observe(el);
    // Safety net: reveal even if the observer never fires.
    window.setTimeout(() => el.classList.add("in"), 1600);
  });
}

function initHero() {
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!hero) return;
  const io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        hero.classList.add("hero--in");
        io.disconnect();
      }
    },
    { threshold: 0.05 }
  );
  io.observe(hero);
}

function initCodeTabs() {
  const panel = document.querySelector<HTMLElement>("[data-code-panel]");
  if (!panel) return;
  const tabs = panel.querySelectorAll<HTMLButtonElement>(".code-tab[data-tab]");
  const views = panel.querySelectorAll<HTMLElement>("[data-view]");
  const lang = panel.querySelector<HTMLElement>("[data-status-lang]");
  const pos = panel.querySelector<HTMLElement>("[data-status-pos]");
  const META: Record<string, { lang: string; pos: string }> = {
    caps: { lang: "TypeScript", pos: "Ln 9, Col 1" },
    about: { lang: "Markdown", pos: "Ln 11, Col 1" },
  };

  const select = (name: string) => {
    tabs.forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
    views.forEach((v) => {
      v.hidden = v.dataset.view !== name;
    });
    if (lang) lang.textContent = "● " + META[name].lang;
    if (pos) pos.textContent = META[name].pos;
  };

  tabs.forEach((t) =>
    t.addEventListener("click", () => select(t.dataset.tab as string))
  );
}

initNav();
initReveal();
initHero();
initCodeTabs();
