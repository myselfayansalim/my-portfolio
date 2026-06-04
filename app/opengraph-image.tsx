import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #09090b 0%, #18181b 60%, #09090b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px 80px",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#a78bfa",
            borderRadius: "2px",
            marginBottom: "40px",
          }}
        />

        {/* Name */}
        <span
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          Ayan Shaikh
        </span>

        {/* Title */}
        <span
          style={{
            fontSize: "32px",
            color: "#a78bfa",
            marginTop: "20px",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Senior Software Developer
        </span>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "22px",
            color: "#71717a",
            marginTop: "16px",
            textAlign: "center",
          }}
        >
          Full Stack · AI Tools · Browser Automation
        </span>

        {/* Bottom accent line */}
        <div
          style={{
            width: "80px",
            height: "4px",
            background: "#a78bfa",
            borderRadius: "2px",
            marginTop: "40px",
          }}
        />

        {/* URL */}
        <span
          style={{
            fontSize: "20px",
            color: "#52525b",
            marginTop: "24px",
          }}
        >
          my-portfolio-phi-seven-24.vercel.app
        </span>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
