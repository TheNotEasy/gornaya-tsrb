"use client";

import { ComponentProps } from "react";
import { ImageGallery } from "react-image-grid-gallery";

export default function Gallery(props: ComponentProps<typeof ImageGallery>) {
  return <ImageGallery {...props} />;
}
