import type { Metadata } from "next";
import Link from "next/link";
import { ContentPage } from "../../components/ContentPage";
import { PageJsonLd } from "../../components/PageJsonLd";
import {
  SITE_FAQS,
  SITE_NAME,
  SITE_UPDATED_AT,
  SITE_URL,
} from "../../lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about CodeArena: JavaScript bots, fair sandbox matches, open-source contributing, pricing, and Discord community.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${SITE_NAME} FAQ`,
    description:
      "Answers about CodeArena bots, fairness, stack, contributing, and community.",
    url: `${SITE_URL}/faq`,
    type: "article",
  },
};

export default function FaqPage() {
  const jsonLd = [
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/faq#faqpage`,
      url: `${SITE_URL}/faq`,
      name: `${SITE_NAME} FAQ`,
      dateModified: SITE_UPDATED_AT,
      mainEntity: SITE_FAQS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
          name: "FAQ",
          item: `${SITE_URL}/faq`,
        },
      ],
    },
  ];

  return (
    <>
      <PageJsonLd data={jsonLd} />
      <ContentPage
        eyebrow="FAQ"
        title="Questions"
        description="Straight answers for developers evaluating CodeArena as a coding game, learning tool, or open-source project."
      >
        <div className="divide-y divide-line border-y border-line">
          {SITE_FAQS.map((item) => (
            <section key={item.question} className="py-7">
              <h2 className="font-display text-xl text-white sm:text-2xl">
                {item.question}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.answer}
              </p>
            </section>
          ))}
        </div>
        <p>
          <Link
            href="/contribute"
            className="font-semibold text-accent-soft underline-offset-4 hover:underline"
          >
            Ready to contribute →
          </Link>
        </p>
      </ContentPage>
    </>
  );
}
