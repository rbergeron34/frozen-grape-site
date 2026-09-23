"use client";

import { useEffect, useState } from "react";
import { PlayingCard, hiLo, type Suit } from "./PlayingCard";

const SUITS: Suit[] = ["♠", "♥", "♦", "♣"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Fixed sequence so server and client render the same first frame.
const DEAL: { rank: string; suit: Suit }[] = [
  { rank: "K", suit: "♠" }, { rank: "5", suit: "♥" }, { rank: "9", suit: "♦" },
  { rank: "2", suit: "♣" }, { rank: "4", suit: "♠" }, { rank: "A", suit: "♥" },
  { rank: "6", suit: "♦" }, { rank: "3", suit: "♣" }, { rank: "Q", suit: "♥" },
  { rank: "7", suit: "♠" }, { rank: "5", suit: "♣" }, { rank: "2", suit: "♦" },
];

const fmt = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${Math.abs(n)}` : "0");

/** Hero: cards deal in one by one while the running count ticks. */
export function HeroDeal() {
  const [shown, setShown] = useState(5);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setShown((s) => (s >= DEAL.length ? 1 : s + 1)), 1500);
    return () => clearInterval(id);
  }, []);

  const dealt = DEAL.slice(0, shown);
  const running = dealt.reduce((sum, c) => sum + hiLo(c.rank), 0);
  const last = dealt[dealt.length - 1];
  const visible = dealt.slice(-5);

  return (
    <div className="c21a-deal">
      <div className="c21a-deal-row" aria-hidden="true">
        {visible.map((c, i) => (
          <div key={`${shown - visible.length + i}`} className="c21a-deal-card">
            <PlayingCard rank={c.rank} suit={c.suit} size={78} />
            <span className={`c21a-chip v${hiLo(c.rank)}`}>{fmt(hiLo(c.rank))}</span>
          </div>
        ))}
      </div>
      <div className="c21a-deal-count" aria-live="off">
        <span>Running count</span>
        <strong key={shown}>{fmt(running)}</strong>
        <small>
          last card {last.rank}
          {last.suit} → {fmt(hiLo(last.rank))}
        </small>
      </div>
    </div>
  );
}

function newHand() {
  return Array.from({ length: 6 }, () => ({
    rank: RANKS[Math.floor(Math.random() * RANKS.length)],
    suit: SUITS[Math.floor(Math.random() * SUITS.length)],
  }));
}

/** A tiny running-count drill, like the app's own. */
export function CountDrill() {
  // First hand is fixed (SSR-safe; its count is +1); "Deal again" randomizes.
  const [hand, setHand] = useState<{ rank: string; suit: Suit }[]>(DEAL.slice(0, 6));
  const [options, setOptions] = useState<number[]>([-1, 0, 1, 2, 3]);
  const [picked, setPicked] = useState<number | null>(null);

  const answer = hand.reduce((s, c) => s + hiLo(c.rank), 0);

  const deal = () => {
    const h = newHand();
    const a = h.reduce((s, c) => s + hiLo(c.rank), 0);
    const shift = Math.floor(Math.random() * 5) - 2;
    setHand(h);
    setOptions([-2, -1, 0, 1, 2].map((d) => a + d + shift).sort((x, y) => x - y));
    setPicked(null);
  };

  const correct = picked === answer;

  return (
    <div className="c21a-drill">
      <div className="c21a-drill-cards">
        {hand.map((c, i) => (
          <div key={i} className="c21a-drill-card">
            <PlayingCard rank={c.rank} suit={c.suit} size={64} />
            {picked !== null && <span className={`c21a-chip v${hiLo(c.rank)}`}>{fmt(hiLo(c.rank))}</span>}
          </div>
        ))}
      </div>

      <p className="c21a-drill-q">What&rsquo;s the running count after these six cards?</p>
      <div className="c21a-drill-opts" role="group" aria-label="Choose the running count">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            disabled={picked !== null}
            onClick={() => setPicked(o)}
            className={
              picked === null ? "" : o === answer ? "is-right" : o === picked ? "is-wrong" : "is-dim"
            }
          >
            {fmt(o)}
          </button>
        ))}
      </div>

      <div className="c21a-drill-result" aria-live="polite">
        {picked !== null && (
          <>
            <p>
              <strong>{correct ? "Right." : `It's ${fmt(answer)}.`}</strong>{" "}
              {correct
                ? "Low cards added one, tens and aces took one away."
                : "2–6 count +1, 7–9 count 0, and 10 through ace count −1. Add them as they land."}
            </p>
            <button type="button" className="c21a-btn c21a-btn-ghost" onClick={deal}>
              Deal again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
