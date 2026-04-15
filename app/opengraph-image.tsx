import { ImageResponse } from "next/og";
import {
  PortfolioSocialPreview,
  socialImageAlt,
  socialImageSize,
} from "./social-preview";

export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<PortfolioSocialPreview />, {
    ...size,
  });
}
