
import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1120",
          borderRadius: "14px",
          border: "2px solid #22D3EE",
          color: "#22D3EE",
          fontSize: "29px",
          fontWeight: 800,
          letterSpacing: "-2px",
        }}
      >
        SM.
      </div>
    ),
    size
  );
}
