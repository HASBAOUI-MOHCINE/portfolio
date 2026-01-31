import React from "react";
import { ImageResponse } from "@vercel/og";
import { getProjectBySlug } from "../../src/data/projects.js";

function hexToRgb(hex) {
  const normalized = String(hex || "")
    .trim()
    .replace(/^#/, "")
    .toLowerCase();

  if (!/^[0-9a-f]{6}$/.test(normalized)) return null;

  const r = parseInt(normalized.slice(0, 2), 16);
  const g = parseInt(normalized.slice(2, 4), 16);
  const b = parseInt(normalized.slice(4, 6), 16);
  return { r, g, b };
}

function clampByte(value) {
  return Math.max(0, Math.min(255, value));
}

function mix(hex, mixWithHex, t) {
  const a = hexToRgb(hex);
  const b = hexToRgb(mixWithHex);
  if (!a || !b) return hex;

  const r = clampByte(Math.round(a.r + (b.r - a.r) * t));
  const g = clampByte(Math.round(a.g + (b.g - a.g) * t));
  const b2 = clampByte(Math.round(a.b + (b.b - a.b) * t));

  return `rgb(${r}, ${g}, ${b2})`;
}

function getAccentPalette(accent) {
  // Generates a subtle gradient palette from a single accent.
  const base = accent || "#F43F5E";
  return {
    a: mix(base, "#000000", 0.15),
    b: mix(base, "#ffffff", 0.15),
    glow: mix(base, "#ffffff", 0.45),
  };
}

export async function handler(event) {
  try {
    const slug = event?.queryStringParameters?.slug;
    const project = slug ? getProjectBySlug(slug) : null;

    const title = project?.title || "Mohcine Hasbaoui";
    const tech = project?.techStack || ["React", "Tailwind", "Vite"];
    const accent = project?.accent || "#F43F5E";
    const palette = getAccentPalette(accent);

    const image = new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            background: `radial-gradient(circle at 18% 22%, ${palette.glow}, rgba(255,255,255,0) 52%), linear-gradient(135deg, ${palette.a}, ${palette.b})`,
            padding: 56,
            boxSizing: "border-box",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 28,
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.78), rgba(0,0,0,0.88))",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: 44,
              boxSizing: "border-box",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "rgba(255,255,255,0.78)",
                  fontSize: 22,
                  letterSpacing: 0.2,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    background: accent,
                    boxShadow: `0 0 0 6px rgba(255,255,255,0.08), 0 0 26px ${accent}`,
                  }}
                />
                <span>Portfolio Project</span>
              </div>

              <div
                style={{
                  color: "#ffffff",
                  fontSize: 72,
                  lineHeight: 1.05,
                  fontWeight: 800,
                  letterSpacing: -1.4,
                  maxWidth: 980,
                }}
              >
                {title}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 8,
                  maxWidth: 980,
                }}
              >
                {tech.slice(0, 8).map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "10px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      color: "rgba(255,255,255,0.86)",
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.72)",
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                hasbaoui.uk
              </div>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.66)",
                  fontSize: 20,
                }}
              >
                /projects/{project?.slug || "..."}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );

    const arrayBuffer = await image.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString("base64");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
      isBase64Encoded: true,
      body: base64,
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: "OG image generation failed.",
    };
  }
}
