"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DISCORD_URL, SITE_NAV } from "../lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#08090c]/80 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
        <Link href="/" className="inline-flex min-w-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="CodeArena — open-source tank bot arena"
            width={168}
            height={40}
            className="h-9 w-auto max-w-[11rem] object-contain object-left sm:h-9 sm:max-w-none"
            priority
          />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          {SITE_NAV.filter((item) => !item.href.includes("community")).map(
            (item) => {
              const className =
                "font-mono-label hidden text-xs text-foreground/60 transition hover:text-foreground md:inline";
              if (item.href.startsWith("/#")) {
                return (
                  <a key={item.href} href={item.href} className={className}>
                    {item.label}
                  </a>
                );
              }
              return (
                <Link key={item.href} href={item.href} className={className}>
                  {item.label}
                </Link>
              );
            },
          )}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="me noopener noreferrer"
            className="btn-magnetic rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono-label text-[11px] text-foreground transition hover:border-white/35 hover:bg-white/10 sm:px-3.5 sm:py-1.5 sm:text-[10px]"
          >
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
