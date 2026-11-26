import { getImageProps } from "next/image";

const shared = {
  sizes: "100vw",
  quality: 95 as const,
};

export function HeroMedia() {
  const {
    props: { srcSet: landscapeSrcSet },
  } = getImageProps({
    ...shared,
    alt: "CodeArena bird’s-eye tank battle with explosions across the arena",
    width: 1920,
    height: 1317,
    src: "/top-landscape.webp",
  });

  const {
    props: { src: portraitSrc, ...portraitRest },
  } = getImageProps({
    ...shared,
    alt: "Two CodeArena tanks facing off in a neon arena",
    width: 1280,
    height: 1692,
    src: "/top.webp",
    priority: true,
  });

  return (
    <picture>
      <source media="(min-width: 640px)" srcSet={landscapeSrcSet} sizes="100vw" />
      <img
        {...portraitRest}
        src={portraitSrc}
        alt="CodeArena tank arena battle scene"
        className="absolute inset-0 h-full w-full object-cover object-[center_28%] sm:object-[center_35%]"
        decoding="async"
        fetchPriority="high"
      />
    </picture>
  );
}
