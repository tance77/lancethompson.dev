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

export interface Portfolio {
  name: string;
  tagline: string;
  /** First-person bio used on the home About band and the About page. */
  bio: string;
  /** Third-person bio for crawlers/LLMs (schema.org Person description). */
  bioLd: string;
  location: string;
  email: string;
  domain: string;
  links: { github: string; linkedin: string };
  skills: SkillGroup[];
  projects: Project[];
  experience: Role[];
}

export const PORTFOLIO_DATA: Portfolio = {
  name: 'Lance Thompson',
  tagline: 'Full-stack web developer with a front-end heart.',
  bio: "I'm a full-stack web developer with a front-end heart. I lead front-end architecture and ship tooling end-to-end at MyOutDesk, building Vue.js apps backed by PHP services on AWS, plus native desktop tools in Rust and Tauri. I grew from intern to senior engineer there, picking up the full stack along the way.",
  bioLd:
    'Lance Thompson is a full-stack web developer with a front-end heart. He leads front-end architecture and ships tooling end-to-end at MyOutDesk, building Vue.js apps backed by PHP services on AWS, plus native desktop tools in Rust and Tauri. He grew from intern to senior engineer there, picking up the full stack along the way.',
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
      items: ['Rust', 'Tauri', 'Electron'],
    },
  ],

  projects: [
    {
      id: 'soql-studio',
      kicker: 'Desktop · Salesforce data loader',
      title: 'SOQL Studio',
      shot: 'SOQL_Studio_collage.png',
      blurb: 'A cross-platform Salesforce Data Loader with bulk CSV uploads, an object browser, and auto column mapping that persists across sessions, all with zero Java to install.',
      problem: "Salesforce's official Data Loader needs Java and only runs comfortably on Windows. Admins on macOS and Linux were stuck wrestling the JVM just to push a CSV, and remapping columns every single run.",
      features: ['Bulk CSV import/export, no Java required', 'Auto column mapping that persists across sessions', 'Object browser with quick access to field formulas', 'Remembered logins, one-click sandbox or production'],
      metrics: [
        { key: '0', value: 'Java required' },
        { key: '~12MB', value: 'install size' },
        { key: '3', value: 'platforms' },
      ],
      stack: ['Rust', 'Tauri', 'TypeScript'],
    },
    {
      id: 'productivity-tracker',
      kicker: 'Desktop · Productivity tracking',
      title: 'Productivity Tracker',
      shot: 'Productivity_App_collage.png',
      blurb: 'A non-intrusive productivity tracker that surfaces focus and activity trends without screenshots or invasive monitoring. Rebuilt from Electron to Tauri for a lighter, native footprint.',
      problem: 'Most time-tracking tools are surveillance ware, all screenshots, invasive monitoring, and constant nagging. People wanted insight into their own work patterns without feeling watched.',
      features: ['Activity trends without screenshots or invasive monitoring', 'Private by default, data stays on the device', 'Quiet background tracking, no nagging popups', '90% smaller install after the Tauri port'],
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
      span: 'Feb 2025 to now',
      role: 'Senior Software Engineer',
      org: 'MyOutDesk',
      blurb: 'Lead front-end architecture and ship tooling end-to-end, Vue.js apps backed by PHP services on AWS, plus native desktop tools in Rust + Tauri.',
      tags: ['Vue.js', 'PHP', 'AWS', 'Rust', 'Tauri'],
    },
    {
      span: 'Aug 2018 to Feb 2025',
      role: 'Junior Software Engineer',
      org: 'MyOutDesk',
      blurb: 'Grew from the front end into the full stack, building features across Vue.js, PHP services, and AWS infrastructure.',
      tags: ['Vue.js', 'PHP', 'AWS', 'TypeScript'],
    },
    {
      span: 'Feb 2016 to Aug 2018',
      role: 'Software Engineer Intern',
      org: 'MyOutDesk',
      blurb: 'Started as an intern, turning designs into fast, accessible interfaces and learning the stack behind them.',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ],
};
