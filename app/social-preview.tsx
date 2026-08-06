export const socialImageAlt =
  "Hugo Hemlin junior fullstack developer portfolio preview";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

const badges = [
  ".NET / React",
  "AWS / Containers",
  "Hands-on projects",
];

export function PortfolioSocialPreview() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "44px",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #27272a",
          borderRadius: "20px",
          background: "#0f0f12",
          padding: "52px 56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Junior Fullstack Developer · .NET · Cloud
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 112,
              fontWeight: 700,
              lineHeight: 1,
              color: "#ffffff",
            }}
          >
            Hugo Hemlin
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 24,
              fontWeight: 500,
              color: "#a1a1aa",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Luunom
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 860,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#d4d4d8",
            }}
          >
            Full-stack applications with a backend and cloud focus.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
            }}
          >
            {badges.map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #3f3f46",
                  borderRadius: "999px",
                  padding: "12px 18px",
                  fontSize: 20,
                  color: "#e4e4e7",
                }}
              >
                {badge}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 20,
              color: "#71717a",
            }}
          >
            Case studies and CV
          </div>
        </div>
      </div>
    </div>
  );
}
