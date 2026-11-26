import {
  DISCORD_URL,
  GITHUB_ORG_URL,
  LICENSE_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_NAV,
  SITE_YEAR,
} from "../lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-2xl text-white sm:text-3xl">
              {SITE_NAME}
            </p>
            <p className="font-serif-accent mt-1 text-base text-muted sm:text-sm">
              write · battle · iterate
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {SITE_DESCRIPTION}
            </p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-3"
          >
            {SITE_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono-label text-xs text-muted transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-mono-label text-xs text-muted transition hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-mono-label text-xs text-muted transition hover:text-foreground"
            >
              Discord
            </a>
            <a
              href={LICENSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-label text-xs text-muted transition hover:text-foreground"
            >
              MIT License
            </a>
            <a
              href="/llms.txt"
              className="font-mono-label text-xs text-muted transition hover:text-foreground"
            >
              llms.txt
            </a>
          </nav>
        </div>
        <p className="border-t border-line pt-6 text-xs text-muted">
          © {SITE_YEAR} {SITE_NAME}. Open-source tank arena for developers.
        </p>
      </div>
    </footer>
  );
}
