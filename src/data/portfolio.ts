export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Metric {
  key: string;
  value: string;
}

export interface Project {
  id: string;
  kicker: string;
  title: string;
  shot: string;
  blurb: string;
  problem: string;
  features: string[];
  metrics: Metric[];
  stack: string[];
}

export interface Role {
  span: string;
  role: string;
  org: string;
  blurb: string;
  tags: string[];
}

export interface Post {
  title: string;
  date: string;
  read: string;
}

export interface Portfolio {
  name: string;
  tagline: string;
  location: string;
  email: string;
  domain: string;
  links: { github: string; linkedin: string };
  skills: SkillGroup[];
  projects: Project[];
  experience: Role[];
  posts: Post[];
}

export const PORTFOLIO_DATA: Portfolio = {
  name: 'Lance Thompson',
  tagline: 'Full-stack web developer with a front-end heart.',
  location: 'Sacramento, CA',
  email: 'hello@lancethompson.dev',
  domain: 'lancethompson.dev',
  links: {
    github: 'github.com/tance77',
    linkedin: 'linkedin.com/in/sirlancealot',
  },

  skills: [
    {
      group: 'Front-end',
      items: ['Vue.js', 'Astro', 'Svelte', 'Vite'],
    },
    {
      group: 'Back-end',
      items: ['PHP', 'Node', 'MySql', 'Python'],
    },
    {
      group: 'Frameworks',
      items: ['Laravel', 'Yii'],
    },
    {
      group: 'Cloud & DevOps',
      items: ['AWS', 'Terraform', 'Docker', 'Aurora'],
    },
    {
      group: 'Desktop',
      items: ['Rust', 'Tauri', 'Electon'],
    },
  ],

  projects: [
    {
      id: 'soql-studio',
      kicker: 'Desktop · Salesforce data loader',
      title: 'SOQL Studio',
      shot: 'soql-studio.png',
      blurb: 'A cross-platform Salesforce Data Loader — bulk CSV uploads, an object browser, and auto column mapping that persists across sessions, with zero JVM to install.',
      problem: "Salesforce's official Data Loader needs Java and only runs comfortably on Windows. Admins on macOS and Linux were stuck wrestling the JVM just to push a CSV — and remapping columns every single run.",
      features: ['Bulk CSV import/export — no JVM required', 'Auto column mapping that persists across sessions', 'Object browser with quick access to field formulas', 'Remembered logins, one-click sandbox or production'],
      metrics: [
        { key: '0', value: 'JVM required' },
        { key: '~12MB', value: 'install size' },
        { key: '3', value: 'platforms' },
      ],
      stack: ['Rust', 'Tauri', 'TypeScript'],
    },
    {
      id: 'productivity-tracker',
      kicker: 'Desktop · Productivity tracking',
      title: 'Productivity Tracker',
      shot: 'productivity-tracker.png',
      blurb: 'A non-intrusive productivity tracker — surfaces focus and activity trends without screenshots or invasive monitoring. Rebuilt from Electron to Tauri for a lighter, native footprint.',
      problem: 'Most time-tracking tools are surveillance ware — screenshots, invasive monitoring, constant nagging. People wanted insight into their own work patterns without feeling watched.',
      features: ['Activity trends without screenshots or invasive monitoring', 'Private by default — data stays on the device', 'Quiet background tracking, no nagging popups', '90% smaller install after the Tauri port'],
      metrics: [
        { key: '-90%', value: 'install size' },
        { key: 'Electron', value: '→ Tauri' },
        { key: '3', value: 'platforms' },
      ],
      stack: ['Rust', 'Tauri', 'TypeScript'],
    },
  ],

  experience: [
    {
      span: 'Feb 2025 — now',
      role: 'Senior Software Engineer',
      org: 'MyOutDesk',
      blurb: 'Lead front-end architecture and ship tooling end-to-end — Vue.js apps backed by PHP services on AWS, plus native desktop tools in Rust + Tauri.',
      tags: ['Vue.js', 'PHP', 'AWS', 'Rust', 'Tauri'],
    },
    {
      span: 'Aug 2018 — Feb 2025',
      role: 'Junior Software Engineer',
      org: 'MyOutDesk',
      blurb: 'Grew from the front end into the full stack — building features across Vue.js, PHP services, and AWS infrastructure.',
      tags: ['Vue.js', 'PHP', 'AWS', 'TypeScript'],
    },
    {
      span: 'Feb 2016 — Aug 2018',
      role: 'Software Engineer Intern',
      org: 'MyOutDesk',
      blurb: 'Started as an intern — turning designs into fast, accessible interfaces and learning the stack behind them.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],

  posts: [
    {
      title: 'Porting our Electron app to Tauri',
      date: '2026 · 04',
      read: '8 min',
    },
    {
      title: 'Building a cross-platform Salesforce Data Loader',
      date: '2026 · 02',
      read: '11 min',
    },
    {
      title: 'Terraform patterns Aurora',
      date: '2025 · 11',
      read: '9 min',
    },
  ],
};
