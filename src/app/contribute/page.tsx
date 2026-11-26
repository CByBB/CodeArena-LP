import type { Metadata } from "next";
import { ContentPage } from "../../components/ContentPage";
import { PageJsonLd } from "../../components/PageJsonLd";
import {
  CONTRIBUTING_URL,
  CONTRIBUTE_PATHS,
  DISCORD_URL,
  GITHUB_ORG_URL,
  GITHUB_REPO_URL,
  SITE_NAME,
  SITE_UPDATED_AT,
  SITE_URL,
} from "../../lib/site";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Contribute to CodeArena open source: improve the TypeScript engine, Phaser arena UX, or docs. MIT-licensed — start on GitHub.",
  alternates: { canonical: "/contribute" },
  openGraph: {
    title: `Contribute to ${SITE_NAME}`,
    description:
      "Help build the open-source JavaScript tank bot arena — engine, UX, and docs welcome.",
    url: `${SITE_URL}/contribute`,
    type: "article",
  },
};

export default function ContributePage() {
  const jsonLd = [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/contribute#webpage`,
      url: `${SITE_URL}/contribute`,
      name: `Contribute to ${SITE_NAME}`,
      description:
        "Open-source contribution paths for CodeArena: engine, arena UX, and documentation.",
      dateModified: SITE_UPDATED_AT,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: {
        "@type": "ItemList",
        name: "Contribution paths",
        itemListElement: CONTRIBUTE_PATHS.map((path, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: path.title,
          description: path.body,
        })),
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contribute",
          item: `${SITE_URL}/contribute`,
        },
      ],
    },
  ];

  return (
    <>
      <PageJsonLd data={jsonLd} />
      <ContentPage
        eyebrow="Open source"
        title="Build with us"
        description="CodeArena is MIT-licensed and looking for focused contributors. Keep pull requests small, match existing TypeScript style, and open an issue before large design shifts."
      >
        <section aria-labelledby="paths-heading">
          <h2
            id="paths-heading"
            className="font-display text-2xl text-white sm:text-3xl"
          >
            High-impact paths
          </h2>
          <ol className="mt-6 space-y-6">
            {CONTRIBUTE_PATHS.map((path, index) => (
              <li key={path.title} className="border-t border-line pt-5">
                <p className="font-mono-label text-xs text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-xl text-white">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {path.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="links-heading" className="space-y-4">
          <h2
            id="links-heading"
            className="font-display text-2xl text-white sm:text-3xl"
          >
            Start here
          </h2>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <a
                href={CONTRIBUTING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-soft underline-offset-4 hover:underline"
              >
                Read CONTRIBUTING.md
              </a>
            </li>
            <li>
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-soft underline-offset-4 hover:underline"
              >
                Browse the repository
              </a>
            </li>
            <li>
              <a
                href={GITHUB_ORG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-soft underline-offset-4 hover:underline"
              >
                GitHub organization
              </a>
            </li>
            <li>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-soft underline-offset-4 hover:underline"
              >
                Ask in Discord
              </a>
            </li>
          </ul>
        </section>
      </ContentPage>
    </>
  );
}
