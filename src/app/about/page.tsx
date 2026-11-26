import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "../../components/ContentPage";
import { PageJsonLd } from "../../components/PageJsonLd";
import {
  SITE_FEATURES,
  SITE_LONG_DESCRIPTION,
  SITE_NAME,
  SITE_UPDATED_AT,
  SITE_URL,
} from "../../lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what CodeArena is: an open-source, server-authoritative JavaScript tank bot arena built with Phaser, WebSockets, and TypeScript.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${SITE_NAME}`,
    description: SITE_LONG_DESCRIPTION,
    url: `${SITE_URL}/about`,
    type: "article",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description: SITE_LONG_DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    dateModified: SITE_UPDATED_AT,
    mainEntity: {
      "@type": "ItemList",
      name: `${SITE_NAME} features`,
      itemListElement: SITE_FEATURES.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: feature.name,
        description: feature.description,
      })),
    },
  };

  return (
    <>
      <PageJsonLd data={jsonLd} />
      <ContentPage
        eyebrow="About"
        title="What is CodeArena?"
        description={SITE_LONG_DESCRIPTION}
      >
        <section aria-labelledby="features-heading">
          <h2
            id="features-heading"
            className="font-display text-2xl text-white sm:text-3xl"
          >
            Core capabilities
          </h2>
          <ul className="mt-6 space-y-6">
            {SITE_FEATURES.map((feature) => (
              <li key={feature.name} className="border-t border-line pt-5">
                <h3 className="font-display text-lg text-accent-soft">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="audience-heading">
          <h2
            id="audience-heading"
            className="font-display text-2xl text-white sm:text-3xl"
          >
            Who it is for
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            CodeArena is built for developers who want a tight bot loop: write
            JavaScript, watch a live Phaser fight, and iterate. It also suits
            open-source contributors who care about simulation fairness, arena
            UX, and clear documentation.
          </p>
        </section>
        <p>
          <Link
            href="/#how-it-works"
            className="font-semibold text-accent-soft underline-offset-4 hover:underline"
          >
            See how it works →
          </Link>
        </p>
      </ContentPage>
    </>
  );
}
