import type { Metadata } from "next";
import { HeroMedia } from "../components/HeroMedia";
import { RandomLetterReveal } from "../components/RandomLetterReveal";
import { Reveal } from "../components/Reveal";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import {
  CONTRIBUTE_PATHS,
  DISCORD_URL,
  GITHUB_ORG_URL,
  HOW_TO_STEPS,
  SITE_DESCRIPTION,
  SITE_FAQS,
  SITE_LONG_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "../lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — Open-Source JavaScript Tank Bot Arena`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "CodeArena",
    "JavaScript tank bot",
    "open source coding game",
    "Phaser arena",
    "contribute open source",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_LONG_DESCRIPTION,
    url: SITE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
};

const marqueeItems = [
  "JavaScript bots",
  "Server-authoritative",
  "Phaser arena",
  "Open source",
  "WebSocket matches",
  "10×10 physics",
  "Fog of war",
  "MIT licensed",
] as const;

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="top" className="flex-1" itemScope itemType="https://schema.org/WebPage">
        <h1 className="sr-only">
          {SITE_NAME} — {SITE_TAGLINE}. Open-source JavaScript tank bot arena for
          developers.
        </h1>
        <section
          className="relative isolate min-h-[100svh] overflow-hidden"
          aria-label="CodeArena hero"
        >
          <div className="absolute inset-0 -z-10">
            <HeroMedia />
            {/* Mobile: keep mid-frame open for the duel; stronger bottom scrim for copy */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,9,12,0.22)_0%,rgba(8,9,12,0.05)_24%,rgba(8,9,12,0.2)_48%,rgba(8,9,12,0.72)_78%,#08090c_100%)] sm:bg-[linear-gradient(180deg,rgba(8,9,12,0.28)_0%,rgba(8,9,12,0.08)_32%,rgba(8,9,12,0.35)_62%,rgba(8,9,12,0.82)_88%,#08090c_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_18%,rgba(226,61,61,0.12),transparent_55%)] sm:bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(226,61,61,0.16),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_95%_55%_at_50%_100%,rgba(8,9,12,0.55),transparent_60%)] sm:hidden" aria-hidden />
            <div className="arena-grid absolute inset-0 opacity-25 sm:opacity-40" aria-hidden />
            <div className="scan-overlay absolute inset-0 opacity-40 sm:opacity-60" aria-hidden />
          </div>

          <div className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32">
            <RandomLetterReveal
              as="p"
              text="CodeArena"
              className="font-mono-label text-xs text-accent-soft sm:text-[11px]"
              staggerMs={520}
              durationMs={560}
              startDelayMs={40}
            />

            <p className="mt-4 w-full min-w-0 sm:mt-4" aria-hidden="true">
              <RandomLetterReveal
                as="span"
                text={"Write\nyour\nbot."}
                className="font-display giant-type block text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.65)] sm:hidden"
                staggerMs={1100}
                durationMs={780}
                startDelayMs={80}
              />
              <RandomLetterReveal
                as="span"
                text={"Write your\nbot."}
                className="font-display giant-type-desktop hidden text-white sm:block"
                staggerMs={1100}
                durationMs={780}
                startDelayMs={80}
              />
            </p>
            <RandomLetterReveal
              as="p"
              text="Run the battle."
              className="font-serif-accent mt-3 text-[clamp(2.5rem,12vw,3.75rem)] leading-[1.05] text-accent-soft sm:mt-4 sm:text-[clamp(2.6rem,5vw,4.25rem)]"
              staggerMs={900}
              durationMs={720}
              startDelayMs={420}
            />

            <div className="animate-draw mt-6 h-px w-28 bg-accent sm:mt-6 sm:w-36" />

            <RandomLetterReveal
              as="p"
              text="Open-source tank arena for developers — ship JavaScript controllers, contribute code, fight live."
              className="mt-6 max-w-md text-base leading-relaxed break-words text-foreground/80 sm:mt-6 sm:text-base"
              staggerMs={1400}
              durationMs={650}
              startDelayMs={700}
            />

            <div className="animate-rise-delay-3 mt-9 flex w-full flex-col gap-3.5 sm:mt-9 sm:flex-row sm:items-center">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic animate-cta-glow inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-base font-semibold text-white sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <DiscordIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                Join the community
              </a>
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-black/40 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm hover:border-white/45 sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <GitHubIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden border-y border-line bg-surface/40 py-3.5 sm:py-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap px-4">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="font-mono-label flex items-center gap-10 text-xs text-muted sm:text-[10px]"
              >
                {item}
                <span className="text-accent" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_10%,rgba(226,61,61,0.14),transparent_55%)]"
            aria-hidden
          />
          <p
            className="font-display giant-watermark absolute -right-4 top-8 text-white sm:right-8"
            aria-hidden
          >
            01
          </p>

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">About</p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="about-heading"
                className="font-display mt-4 max-w-4xl text-[clamp(2.85rem,11vw,5.5rem)] leading-[0.92] text-white sm:text-[clamp(2.4rem,7vw,5.5rem)]"
              >
                What is
                <br />
                <span className="font-serif-accent normal-case tracking-normal text-accent-soft">
                  CodeArena?
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p
                className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-base"
                itemProp="description"
              >
                {SITE_LONG_DESCRIPTION}
              </p>
            </Reveal>

            <ul className="mt-16 grid gap-10 sm:grid-cols-3 sm:gap-8">
              {[
                {
                  num: "01",
                  label: "Code",
                  text: "Synchronous JS controllers: stage state in, one discrete action out.",
                },
                {
                  num: "02",
                  label: "Battle",
                  text: "Movement, turrets, shots, cover, fog—rendered live while you watch.",
                },
                {
                  num: "03",
                  label: "Fair",
                  text: "Tight CPU budgets and a server that owns every tick.",
                },
              ].map((item, index) => (
                <Reveal
                  key={item.label}
                  as="li"
                  delay={(index + 1) as 1 | 2 | 3}
                  className="relative border-t border-line pt-6"
                >
                  <span
                    className="font-display absolute -top-1 right-0 text-5xl text-white/10 sm:text-5xl"
                    aria-hidden
                  >
                    {item.num}
                  </span>
                  <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">
                    {item.label}
                  </p>
                  <p className="mt-4 max-w-[18rem] text-base leading-relaxed text-foreground/80 sm:text-sm">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32"
        >
          <p
            className="font-display giant-watermark absolute -right-4 top-8 text-white sm:right-8"
            aria-hidden
          >
            02
          </p>
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">
                Getting started
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="how-heading"
                className="font-display mt-4 max-w-3xl text-[clamp(2.85rem,11vw,5.25rem)] leading-[0.92] text-white sm:text-[clamp(2.4rem,7vw,5.25rem)]"
              >
                How it
                <br />
                <span className="font-serif-accent normal-case tracking-normal text-accent-soft">
                  works
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                From zero to a live tank fight: set up locally, ship a JavaScript
                controller, run a room, then iterate—or contribute upstream.
              </p>
            </Reveal>
            <ol className="mt-14 space-y-0 border-y border-line">
              {HOW_TO_STEPS.map((step, index) => (
                <Reveal
                  key={step.name}
                  as="li"
                  delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)}
                  className="grid gap-3 border-b border-line py-7 last:border-b-0 sm:grid-cols-[5rem_1fr] sm:gap-8"
                >
                  <span className="font-display text-3xl text-accent-soft/80 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-white sm:text-2xl">
                      {step.name}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted sm:text-sm">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contribute"
          aria-labelledby="contribute-heading"
          className="relative overflow-hidden border-t border-line bg-surface/55 px-5 py-24 sm:px-8 sm:py-32"
        >
          <p
            className="font-display giant-watermark absolute -left-6 bottom-0 text-white sm:left-4"
            aria-hidden
          >
            03
          </p>

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <Reveal>
                  <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">
                    Open source
                  </p>
                </Reveal>
                <Reveal delay={1}>
                  <h2
                    id="contribute-heading"
                    className="font-display mt-4 text-[clamp(2.85rem,11vw,5.25rem)] leading-[0.92] text-white sm:text-[clamp(2.4rem,7vw,5.25rem)]"
                  >
                    Build
                    <br />
                    with us
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="max-w-md text-base leading-relaxed text-muted sm:text-base lg:pb-2">
                  MIT-licensed. Looking for contributors. Keep PRs focused—open an
                  issue for larger shifts.
                </p>
              </Reveal>
            </div>

            <ol className="mt-16 space-y-0 border-y border-line">
              {CONTRIBUTE_PATHS.map((path, index) => (
                <Reveal
                  key={path.title}
                  as="li"
                  delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}
                  className="group grid items-baseline gap-3 border-b border-line py-7 last:border-b-0 sm:grid-cols-[7rem_10rem_1fr] sm:gap-8 sm:py-7"
                >
                  <span className="font-display text-4xl text-accent-soft/80 transition group-hover:translate-x-1 sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-white sm:text-2xl">
                    {path.title}
                  </h3>
                  <p className="max-w-xl text-base leading-relaxed text-muted sm:text-sm">
                    {path.body}
                  </p>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={3} className="mt-10 sm:mt-12">
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex w-full max-w-full items-center justify-center gap-2.5 rounded-xl bg-white px-5 py-4 text-base font-semibold text-black hover:bg-[#e8e6e1] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm"
                style={{ color: "#08090c" }}
              >
                <GitHubIcon className="h-6 w-6 shrink-0 sm:h-5 sm:w-5" />
                <span className="truncate" style={{ color: "#08090c" }}>
                  github.com/CodeArenaT
                </span>
              </a>
            </Reveal>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32"
        >
          <p
            className="font-display giant-watermark absolute -left-4 top-10 text-white"
            aria-hidden
          >
            04
          </p>
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">
                FAQ
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="faq-heading"
                className="font-display mt-4 max-w-3xl text-[clamp(2.85rem,11vw,5.25rem)] leading-[0.92] text-white sm:text-[clamp(2.4rem,7vw,5.25rem)]"
              >
                Questions
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
                Straight answers for developers evaluating CodeArena as a coding
                game, learning tool, or open-source project.
              </p>
            </Reveal>
            <div className="mt-12 divide-y divide-line border-y border-line">
              {SITE_FAQS.map((item, index) => (
                <Reveal
                  key={item.question}
                  delay={(Math.min((index % 4) + 1, 4) as 1 | 2 | 3 | 4)}
                  className="py-7"
                >
                  <h3 className="font-display text-lg text-white sm:text-xl">
                    {item.question}
                  </h3>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted sm:text-sm">
                    {item.answer}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="community"
          aria-labelledby="community-heading"
          className="relative overflow-hidden border-t border-line px-5 py-24 sm:px-8 sm:py-32"
        >
          <div
            className="animate-float pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
            aria-hidden
          />
          <p
            className="font-display giant-watermark absolute right-0 top-10 text-white"
            aria-hidden
          >
            05
          </p>

          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              <p className="font-mono-label text-xs text-accent-soft sm:text-[10px]">
                Community
              </p>
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="community-heading"
                className="font-display mt-4 max-w-3xl text-[clamp(2.85rem,11vw,5.25rem)] leading-[0.92] text-white sm:text-[clamp(2.4rem,7vw,5.25rem)]"
              >
                Join the
                <br />
                <span className="font-serif-accent normal-case tracking-normal text-[#8ea1ff]">
                  Discord
                </span>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-7 max-w-md text-base leading-relaxed text-muted sm:text-base">
                Meet maintainers and bot authors—share builds, ask questions, shape
                the roadmap live.
              </p>
            </Reveal>
            <Reveal delay={3} className="mt-12">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex w-full items-center gap-3 rounded-xl border border-[#5865F2]/55 bg-[#5865F2]/15 px-6 py-4 text-base font-semibold text-white hover:bg-[#5865F2]/28 sm:w-auto sm:px-7 sm:text-sm"
              >
                <DiscordIcon className="h-7 w-7 text-[#8ea1ff] sm:h-6 sm:w-6" />
                <span className="flex flex-col items-start gap-0.5">
                  <span className="font-mono-label text-[11px] text-[#8ea1ff]/90 sm:text-[9px]">
                    Invite
                  </span>
                  <span>discord.gg/wGAR7QutNH</span>
                </span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
