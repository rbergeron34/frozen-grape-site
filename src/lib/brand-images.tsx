/* Metadata images are rendered by Satori, which needs native img elements. */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

async function pipSource() {
  const image = await readFile(join(process.cwd(), "public/brand/pip/hello.png"));
  return `data:image/png;base64,${image.toString("base64")}`;
}

export async function createPipIcon(size: number) {
  const source = await pipSource();
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#f6f0fa", alignItems: "center", justifyContent: "center" }}>
      <img src={source} alt="" width={size * 0.74} height={size * 0.88} style={{ objectFit: "contain" }} />
    </div>,
    { width: size, height: size },
  );
}

export async function createBrandShareImage() {
  const source = await pipSource();
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#faf8fc", color: "#33203e", padding: "60px 66px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: -28, top: 106, width: 456, height: 456, borderRadius: "50%", background: "#eee3f3" }} />
      <div style={{ position: "absolute", right: 39, top: 36, width: 164, height: 164, borderRadius: "50%", background: "#e4eef7" }} />
      <div style={{ display: "flex", flexDirection: "column", width: 725, position: "relative" }}>
        <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1.2 }}>Frozen Grape</div>
        <div style={{ fontSize: 13, letterSpacing: 4, color: "#856e94", marginTop: 8 }}>STUDIOS</div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 66, fontSize: 68, fontWeight: 700, letterSpacing: -3.2, lineHeight: 1.08 }}>
          <span>Worth a spot</span><span style={{ color: "#805091" }}>on your screen.</span>
        </div>
        <div style={{ fontSize: 21, color: "#73667e", marginTop: 26, maxWidth: 570, lineHeight: 1.5 }}>Useful tools. Daily rituals. Games you’ll come back to.</div>
        <div style={{ fontSize: 17, color: "#856e94", marginTop: "auto" }}>frozengrape.app</div>
      </div>
      <img src={source} alt="" width={330} height={420} style={{ position: "absolute", right: 49, top: 143, objectFit: "contain" }} />
    </div>,
    { width: 1200, height: 630 },
  );
}
