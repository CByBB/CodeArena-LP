export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://codearena-t.vercel.app";

/** Stable for prerender / cacheComponents — bump when content ships. */
export const SITE_YEAR = 2026;
export const SITE_UPDATED_AT = "2026-11-26";

export const SITE_NAME = "CodeArena";

export const SITE_TAGLINE = "Write your bot. Run the battle.";

/** Primary meta description (~155 chars sweet spot, keyword-led). */
export const SITE_DESCRIPTION =
  "CodeArena is a free open-source tank arena for developers: write JavaScript bots, fight in a live Phaser sim, and contribute on GitHub.";

/** Longer crawlable summary for on-page + JSON-LD. */
export const SITE_LONG_DESCRIPTION =
  "CodeArena is an MIT-licensed, server-authoritative tank battle platform for developers. Author synchronous JavaScript bot controllers, run fair sandboxed matches over WebSockets, watch continuous physics in a fixed 10×10 Phaser arena with fog and cover, then iterate. Join the Discord community and contribute engine, UX, or docs on GitHub.";

export const SITE_KEYWORDS = [
  "CodeArena",
  "open source coding game",
  "JavaScript tank bot",
  "Phaser arena",
  "bot programming game",
  "server-authoritative multiplayer",
  "WebSocket tank battle",
  "TypeScript game engine",
  "developer Discord community",
  "MIT open source game",
  "AI tank battle",
  "learn game AI with JavaScript",
  "contribute open source",
  "sandboxed bot controllers",
  "coding game for developers",
  "browser tank battle simulator",
] as const;

export const GITHUB_ORG_URL = "https://github.com/CodeArenaT";
export const GITHUB_REPO_URL = "https://github.com/CodeArenaT/CodeArenaT";
export const DISCORD_URL = "https://discord.gg/wGAR7QutNH";
export const LICENSE_URL =
  "https://github.com/CodeArenaT/CodeArenaT/blob/main/LICENSE";
export const CONTRIBUTING_URL =
  "https://github.com/CodeArenaT/CodeArenaT/blob/main/CONTRIBUTING.md";

export const SITE_FEATURES = [
  {
    name: "JavaScript bot controllers",
    description:
      "Write synchronous controllers that read arena state and return a discrete action each tick—ideal for learning game AI loops.",
  },
  {
    name: "Server-authoritative simulation",
    description:
      "Every match tick is owned by the server with sandboxed execution and CPU budgets so clients cannot cheat outcomes.",
  },
  {
    name: "Phaser bird’s-eye arena",
    description:
      "Watch continuous physics in a fixed 10×10 play space with turrets, projectiles, cover, and optional fog of war.",
  },
  {
    name: "WebSocket multiplayer rooms",
    description:
      "Create or join lobbies with share codes and battle other developers’ bots in real time from the browser.",
  },
  {
    name: "Open-source MIT license",
    description:
      "Fork freely, ship improvements to the TypeScript engine, Phaser UX, or docs, and grow with the community.",
  },
] as const;

export const SITE_FAQS = [
  {
    question: "What is CodeArena?",
    answer:
      "CodeArena is an open-source tank arena where developers write JavaScript bot controllers and battle in a live, server-authoritative Phaser simulation with continuous physics.",
  },
  {
    question: "Do I need to pay to use CodeArena?",
    answer:
      "No. CodeArena is free and MIT-licensed. You can play, fork the code, and contribute without a paid plan.",
  },
  {
    question: "What language are bots written in?",
    answer:
      "Bots are synchronous JavaScript controllers: they read stage state and return one discrete action per tick. TypeScript can be compiled to JavaScript before paste or deploy.",
  },
  {
    question: "How are matches kept fair?",
    answer:
      "Bot code runs in a sandboxed server environment with CPU budgets. The server is authoritative for every simulation tick, so clients cannot cheat physics or outcomes.",
  },
  {
    question: "Is CodeArena good for learning game AI?",
    answer:
      "Yes. The tight write–run–watch loop, discrete actions, and visible Phaser replay make it a practical way to practice pathing, targeting, and decision logic in JavaScript.",
  },
  {
    question: "What stack does CodeArena use?",
    answer:
      "The monorepo uses TypeScript, a custom simulation engine, Phaser for the bird’s-eye view, WebSockets for live matches, and MongoDB for users and bots.",
  },
  {
    question: "How can I contribute to CodeArena?",
    answer:
      "Read CONTRIBUTING.md on GitHub, open focused pull requests for the TypeScript engine, Phaser arena UX, or documentation, and discuss larger ideas in issues or Discord first.",
  },
  {
    question: "Where can I talk with other bot authors?",
    answer:
      "Join the CodeArena Discord to share bots, ask setup questions, and help shape the roadmap with maintainers.",
  },
] as const;

export const HOW_TO_STEPS = [
  {
    name: "Clone or open the project",
    text: "Get the CodeArena monorepo from GitHub and follow the setup guide for Node, pnpm, and MongoDB.",
  },
  {
    name: "Write a JavaScript bot",
    text: "Implement a synchronous controller that maps arena state to a discrete action enum—no async I/O inside the bot.",
  },
  {
    name: "Start a match",
    text: "Launch a room from the dashboard, share the lobby code, and watch the Phaser bird’s-eye fight live.",
  },
  {
    name: "Iterate and contribute",
    text: "Tune your bot after each run, then improve the open-source engine, UX, or docs with a focused pull request.",
  },
] as const;

export const CONTRIBUTE_PATHS = [
  {
    title: "Engine & simulation",
    body: "Physics, combat rules, fog, and fairness live in the TypeScript engine—tight tests and rule clarity are high-impact contributions.",
  },
  {
    title: "Arena UX & Phaser",
    body: "Improve bird’s-eye clarity, replays, lobby flow, and the feedback loop that makes developers re-run matches.",
  },
  {
    title: "Docs & first issues",
    body: "Setup guides, diagrams, bug reports, and good-first-issue triage help the next contributor ship faster.",
  },
] as const;

/** Primary nav — real routes for indexable pages + home anchors. */
export const SITE_NAV = [
  { href: "/about", label: "About" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contribute", label: "Contribute" },
  { href: "/faq", label: "FAQ" },
  { href: "/#community", label: "Community" },
] as const;
