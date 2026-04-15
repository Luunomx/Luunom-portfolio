import { ImageResponse } from "next/og";
import { SiteIcon } from "./site-icon";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<SiteIcon fontSize={36} />, {
    ...size,
  });
}
