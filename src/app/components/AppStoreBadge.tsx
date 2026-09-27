// Apple's official "Download on the App Store" badge, served unmodified by
// Apple Marketing Tools (the embed Apple offers for developer websites).
// Apple's rules for it: don't modify, angle, or animate it; keep it at least
// 40px tall onscreen with clear space of a quarter of its height; link it to
// the app's product page; and only show it for apps that can be downloaded.
// The site footer carries the trademark credit line the badge requires.

const BADGE_SRC =
  "https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us";
const BADGE_RATIO = 119.66407 / 40; // the badge SVG's viewBox

export function AppStoreBadge({
  href,
  height = 44,
  className = "",
}: {
  href: string;
  height?: number;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`app-store-badge ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- Apple's hosted SVG, shown as provided */}
      <img
        src={BADGE_SRC}
        alt="Download on the App Store"
        width={Math.round(height * BADGE_RATIO)}
        height={height}
      />
    </a>
  );
}
