import Image from "next/image";

type PipProps = {
  pose?: "hello" | "happy" | "macbook";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Decorative companion to nearby brand text, never a replacement for a label. */
export function Pip({ pose = "hello", className, priority = false, sizes = "96px" }: PipProps) {
  const dimensions = pose === "happy" ? { width: 1145, height: 1374 } : { width: 1155, height: 1362 };
  return (
    <Image
      src={`/brand/pip/${pose}.png`}
      alt=""
      aria-hidden="true"
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
