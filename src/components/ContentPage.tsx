import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export function ContentPage({
  eyebrow,
  title,
  description,
  children,
}: ContentPageProps) {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-x-hidden bg-background">
      <SiteHeader />
      <main className="flex-1 px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-32">
        <article className="relative mx-auto max-w-3xl">
          <p className="font-mono-label text-xs text-accent-soft">{eyebrow}</p>
          <h1 className="font-display mt-4 text-[clamp(2.6rem,8vw,4.5rem)] leading-[0.92] text-white">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
          <div className="mt-12 space-y-10 text-foreground/85">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
