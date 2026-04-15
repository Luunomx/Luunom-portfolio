export const socialImageAlt = "Hugo Hemlin and Luunom portfolio preview";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

const badges = [
  "Cloud Delivery",
  "Backend Systems",
  "Private Projects",
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
            Cloud / DevOps / Full-Stack
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
            Building reliable systems, cloud infrastructure, and modern
            applications.
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
            CV available on request
          </div>
        </div>
      </div>
    </div>
  );
}
