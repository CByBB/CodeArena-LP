import {
  DISCORD_URL,
  GITHUB_ORG_URL,
  GITHUB_REPO_URL,
  HOW_TO_STEPS,
  LICENSE_URL,
  SITE_DESCRIPTION,
  SITE_FAQS,
  SITE_FEATURES,
  SITE_LONG_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_UPDATED_AT,
  SITE_URL,
} from "../lib/site";

export function JsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_NAME,
    url: SITE_URL,
    description: SITE_LONG_DESCRIPTION,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/top-landscape.png`,
    sameAs: [GITHUB_ORG_URL, GITHUB_REPO_URL, DISCORD_URL],
    foundingDate: "2025",
    knowsAbout: [
      "JavaScript bot programming",
      "Phaser game development",
      "server-authoritative multiplayer",
      "open source collaboration",
      "game AI education",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    alternateName: ["Code Arena", "CodeArenaT"],
    description: SITE_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
    copyrightHolder: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "JoinAction",
      target: DISCORD_URL,
      name: "Join CodeArena Discord",
    },
  };

  const software = {
    "@type": ["SoftwareApplication", "WebApplication"],
    "@id": `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: "GameApplication",
    applicationSubCategory: "CodingGame",
    operatingSystem: "Any (Web)",
    browserRequirements: "Requires JavaScript",
    description: SITE_LONG_DESCRIPTION,
    url: SITE_URL,
    image: [
      `${SITE_URL}/top-landscape.png`,
      `${SITE_URL}/top.png`,
      `${SITE_URL}/icon-512.png`,
    ],
    screenshot: `${SITE_URL}/top-landscape.png`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    isAccessibleForFree: true,
    license: LICENSE_URL,
    downloadUrl: GITHUB_REPO_URL,
    installUrl: SITE_URL,
    softwareVersion: "0.1.0",
    programmingLanguage: ["JavaScript", "TypeScript"],
    featureList: SITE_FEATURES.map((f) => f.name),
    keywords:
      "CodeArena, JavaScript tank bot, Phaser, open source coding game, WebSocket",
  };

  const sourceCode = {
    "@type": "SoftwareSourceCode",
    "@id": `${SITE_URL}/#source`,
    name: `${SITE_NAME} source`,
    url: GITHUB_REPO_URL,
    codeRepository: GITHUB_REPO_URL,
    programmingLanguage: ["TypeScript", "JavaScript"],
    runtimePlatform: "Node.js",
    license: LICENSE_URL,
    isAccessibleForFree: true,
    creator: { "@id": `${SITE_URL}/#organization` },
  };

  const learningResource = {
    "@type": "LearningResource",
    "@id": `${SITE_URL}/#learn`,
    name: `Learn game AI with ${SITE_NAME}`,
    description:
      "Practice bot programming in JavaScript with a visible Phaser arena, discrete actions, and a fast write–run–watch loop.",
    url: SITE_URL,
    learningResourceType: "Interactive resource",
    educationalLevel: "Beginner to intermediate developers",
    teaches: [
      "Game AI decision loops",
      "JavaScript bot controllers",
      "Server-authoritative multiplayer concepts",
    ],
    isAccessibleForFree: true,
    inLanguage: "en",
    provider: { "@id": `${SITE_URL}/#organization` },
  };

  const featureList = {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#features`,
    name: `${SITE_NAME} features`,
    numberOfItems: SITE_FEATURES.length,
    itemListElement: SITE_FEATURES.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.name,
      description: feature.description,
      url: `${SITE_URL}/about`,
    })),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: [
      { "@id": `${SITE_URL}/#software` },
      { "@id": `${SITE_URL}/#source` },
      { "@id": `${SITE_URL}/#learn` },
    ],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/top-landscape.png`,
      width: 1920,
      height: 1317,
    },
    inLanguage: "en-US",
    dateModified: SITE_UPDATED_AT,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#about-heading", "#faq-heading"],
    },
    significantLink: [
      `${SITE_URL}/about`,
      `${SITE_URL}/faq`,
      `${SITE_URL}/contribute`,
      DISCORD_URL,
      GITHUB_REPO_URL,
    ],
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
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
        name: "About",
        item: `${SITE_URL}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "FAQ",
        item: `${SITE_URL}/faq`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contribute",
        item: `${SITE_URL}/contribute`,
      },
    ],
  };

  const howTo = {
    "@type": "HowTo",
    "@id": `${SITE_URL}/#howto`,
    name: "How to get started with CodeArena",
    description:
      "Write a JavaScript tank bot, run a live match, and contribute to the open-source arena.",
    totalTime: "PT30M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    tool: [
      { "@type": "HowToTool", name: "Node.js 20+" },
      { "@type": "HowToTool", name: "pnpm" },
      { "@type": "HowToTool", name: "MongoDB" },
    ],
    step: HOW_TO_STEPS.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      url: `${SITE_URL}/#how-it-works`,
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faqpage`,
    url: `${SITE_URL}/faq`,
    mainEntity: SITE_FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      software,
      sourceCode,
      learningResource,
      featureList,
      webPage,
      breadcrumb,
      howTo,
      faqPage,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
