import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "../lib/site";

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(145deg, #08090c 0%, #1a0f12 45%, #3b1212 100%)",
          color: "#f4f1ec",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#ff7a68",
            fontWeight: 700,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: -2,
              textTransform: "uppercase",
              maxWidth: 980,
            }}
          >
            Write your bot. Run the battle.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#c9c3bb",
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Open-source tank arena for developers — JavaScript bots, Phaser
            fights, GitHub + Discord.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#9a968e",
          }}
        >
          <span>MIT · server-authoritative · WebSocket</span>
          <span>codearena-t.vercel.app</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
