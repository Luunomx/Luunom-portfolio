export function SiteIcon({
  fontSize,
}: {
  fontSize: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "sans-serif",
        fontSize,
        fontWeight: 700,
        borderRadius: "22%",
        border: "2px solid #27272a",
      }}
    >
      H
    </div>
  );
}
