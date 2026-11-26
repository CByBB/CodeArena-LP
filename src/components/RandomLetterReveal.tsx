"use client";

import {
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";

type RandomLetterRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p" | "span";
  /** Total window over which letters start appearing (ms). */
  staggerMs?: number;
  /** Per-letter fade/unblur duration (ms). */
  durationMs?: number;
  /** Delay before the scramble starts (ms). */
  startDelayMs?: number;
};

type LetterPlan = {
  char: string;
  key: string;
  delayMs: number;
};

type WordPlan = {
  key: string;
  letters: LetterPlan[];
};

type LinePlan = {
  key: string;
  words: WordPlan[];
};

function shuffleOrder(length: number): number[] {
  const order = Array.from({ length }, (_, i) => i);
  for (let i = order.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = order[i]!;
    order[i] = order[j]!;
    order[j] = tmp;
  }
  return order;
}

function buildLines(
  text: string,
  staggerMs: number,
  startDelayMs: number,
  order: number[] | null,
): LinePlan[] {
  const rawLines = text.split("\n");
  const letterSlots: { line: number; word: number; char: string }[] = [];

  rawLines.forEach((line, lineIndex) => {
    const words = line.split(" ").filter((w) => w.length > 0);
    words.forEach((word, wordIndex) => {
      Array.from(word).forEach((char) => {
        letterSlots.push({ line: lineIndex, word: wordIndex, char });
      });
    });
  });

  const delayBySlot = new Map<number, number>();
  letterSlots.forEach((_, rank) => {
    const shuffledRank = order ? (order[rank] ?? rank) : rank;
    const t =
      letterSlots.length <= 1
        ? 0
        : (shuffledRank / (letterSlots.length - 1)) * staggerMs;
    delayBySlot.set(rank, startDelayMs + t);
  });

  let slot = 0;
  return rawLines.map((line, lineIndex) => {
    const words = line.split(" ").filter((w) => w.length > 0);
    return {
      key: `line-${lineIndex}`,
      words: words.map((word, wordIndex) => {
        const letters = Array.from(word).map((char, charIndex) => {
          const current = slot;
          slot += 1;
          return {
            char,
            key: `${lineIndex}-${wordIndex}-${charIndex}-${char}`,
            delayMs: delayBySlot.get(current) ?? startDelayMs,
          };
        });
        return {
          key: `word-${lineIndex}-${wordIndex}`,
          letters,
        };
      }),
    };
  });
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function RandomLetterReveal({
  text,
  className = "",
  as: Tag = "span",
  staggerMs = 900,
  durationMs = 700,
  startDelayMs = 120,
}: RandomLetterRevealProps) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  const [order, setOrder] = useState<number[] | null>(null);
  const [active, setActive] = useState(false);

  const letterCount = useMemo(
    () => Array.from(text).filter((c) => c !== " " && c !== "\n").length,
    [text],
  );

  const lines = useMemo(
    () => buildLines(text, staggerMs, startDelayMs, order),
    [text, staggerMs, startDelayMs, order],
  );

  useEffect(() => {
    if (reduced) {
      const id = requestAnimationFrame(() => {
        setOrder(Array.from({ length: letterCount }, (_, i) => i));
        setActive(true);
      });
      return () => cancelAnimationFrame(id);
    }

    let frame2 = 0;
    const frame1 = requestAnimationFrame(() => {
      setOrder(shuffleOrder(letterCount));
      frame2 = requestAnimationFrame(() => setActive(true));
    });

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, [letterCount, reduced, text]);

  const letterStyle = (delayMs: number): CSSProperties =>
    reduced
      ? { opacity: 1, filter: "blur(0px)" }
      : {
          opacity: active ? 1 : 0,
          filter: active ? "blur(0px)" : "blur(12px)",
          transitionProperty: "opacity, filter",
          transitionDuration: `${durationMs}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delayMs}ms`,
        };

  const content: ReactNode = lines.map((line) => (
    <span key={line.key} className="block">
      {line.words.map((word, wordIndex) => (
        <span key={word.key}>
          {wordIndex > 0 ? " " : null}
          <span className="letter-word inline-block whitespace-nowrap">
            {word.letters.map((letter) => (
              <span
                key={letter.key}
                aria-hidden
                className="letter-reveal inline-block will-change-[opacity,filter]"
                style={letterStyle(letter.delayMs)}
              >
                {letter.char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  ));

  return (
    <Tag className={className} aria-label={text.replace(/\n/g, " ")}>
      {content}
    </Tag>
  );
}
