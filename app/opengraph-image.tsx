import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const imgBuffer = readFileSync(join(process.cwd(), "public/hero.png"));
  const imgBase64 = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 60%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Left: profile photo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "64px",
            flexShrink: 0,
          }}
        >
          <img
            src={imgBase64}
            width={220}
            height={220}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "center top",
              border: "5px solid #a78bfa",
            }}
          />
        </div>

        {/* Right: text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Ayan Shaikh
          </span>

          <span
            style={{
              fontSize: "30px",
              color: "#a78bfa",
              marginTop: "14px",
              fontWeight: 500,
            }}
          >
            Senior Software Developer
          </span>

          <span
            style={{
              fontSize: "22px",
              color: "#71717a",
              marginTop: "16px",
            }}
          >
            Full Stack · AI Tools · Browser Automation
          </span>

          {/* Divider */}
          <div
            style={{
              width: "80px",
              height: "3px",
              background: "#a78bfa",
              marginTop: "28px",
              borderRadius: "2px",
            }}
          />

          <span
            style={{
              fontSize: "22px",
              color: "#52525b",
              marginTop: "20px",
            }}
          >
            ayansalim.dev
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
