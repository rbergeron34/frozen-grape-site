import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Hoops Trivia 2.0 — Know the game. Build your court. Coming soon.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const icon = await readFile(path.join(process.cwd(), "public/assets/apps/hoopstrivia2/icon.png"));
  const font = await readFile(path.join(process.cwd(), "src/fonts/barlow-condensed-black.ttf"));
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: 70, gap: 60, background: "#fff3da", color: "#101820", fontFamily: "Barlow" }}>
      <img src={`data:image/png;base64,${icon.toString("base64")}`} width={300} height={300} alt="" style={{ borderRadius: 64 }} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ color: "#1152b8", fontSize: 32, letterSpacing: 4 }}>COMING SOON</div>
        <div style={{ color: "#1152b8", fontSize: 76, lineHeight: 1.1, marginTop: 20 }}>HOOPS TRIVIA 2.0</div>
        <div style={{ fontSize: 46, marginTop: 24 }}>Know the game.</div>
        <div style={{ fontSize: 46 }}>Build your court.</div>
        <div style={{ color: "#626052", fontSize: 24, marginTop: 36 }}>FROZEN GRAPE STUDIOS</div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "Barlow", data: font, weight: 900, style: "normal" }] },
  );
}
