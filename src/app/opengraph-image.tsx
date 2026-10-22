import { ImageResponse } from "next/og";

export const alt =
  "Samuel Maucaille - Full Stack Software Engineer";

export const size = {
  width: 1200,
  height: 630,
};

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
          justifyContent: "center",
          padding: "90px",
          backgroundColor: "#0B1120",
          color: "#F1F5F9",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#22D3EE",
            marginBottom: 28,
          }}
        >
          FULL STACK SOFTWARE ENGINEER
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 78,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          Samuel Maucaille
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 35,
            color: "#94A3B8",
          }}
        >
          C# · .NET · React · TypeScript
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 55,
            fontSize: 24,
            color: "#22D3EE",
          }}
        >
          Based in Peru · Open to Remote Opportunities
        </div>
      </div>
    ),
    size
  );
}
