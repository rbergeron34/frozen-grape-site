import { createBrandShareImage } from "@/lib/brand-images";

export const alt = "Frozen Grape — Worth a spot on your screen. Pip, our frosted grape mascot, beside the studio wordmark.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return createBrandShareImage();
}
