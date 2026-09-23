// A paper playing card in Count21's palette (card paper #F3F0E7, red suits #B94131).
// Pure markup + inline styles, usable from server and client components.

export type Suit = "♠" | "♥" | "♦" | "♣";

export function hiLo(rank: string): 1 | 0 | -1 {
  if (["2", "3", "4", "5", "6"].includes(rank)) return 1;
  if (["7", "8", "9"].includes(rank)) return 0;
  return -1;
}

export function PlayingCard({
  rank,
  suit,
  size = 88,
  className,
  style,
}: {
  rank: string;
  suit: Suit;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const red = suit === "♥" || suit === "♦";
  return (
    <div
      className={className}
      role="img"
      aria-label={`${rank} of ${{ "♠": "spades", "♥": "hearts", "♦": "diamonds", "♣": "clubs" }[suit]}`}
      style={{
        width: size,
        height: size * 1.4,
        flex: "none",
        borderRadius: size * 0.1,
        background: "#F3F0E7",
        border: "1px solid #E4DFD2",
        boxShadow: "0 10px 24px rgba(0,0,0,.28)",
        color: red ? "#B94131" : "#191A18",
        position: "relative",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
        fontWeight: 700,
        ...style,
      }}
    >
      <span style={{ position: "absolute", top: size * 0.08, left: size * 0.1, fontSize: size * 0.24, lineHeight: 1 }}>
        {rank}
      </span>
      <span style={{ position: "absolute", top: size * 0.34, left: size * 0.11, fontSize: size * 0.18, lineHeight: 1 }}>
        {suit}
      </span>
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          fontSize: size * 0.5,
          paddingTop: size * 0.2,
          paddingLeft: size * 0.2,
        }}
      >
        {suit}
      </span>
    </div>
  );
}
