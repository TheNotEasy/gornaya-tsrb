"use server";

import { ImageGallery } from "react-image-grid-gallery";
import TimelinePageWrapper from "../components/timelinepage";

import { prisma } from "../crud/prisma";
import { ComponentProps } from "react";

function Gallery(props: ComponentProps<typeof ImageGallery>) {
  return <ImageGallery {...props} />;
}

export default async function Home() {
  const allImages = (await prisma.galleryImage.findMany()).map((value) => ({
    id: value.id,
    src: value.url,
    caption: value.caption,
    alt: value.caption,
  }));

  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold mx-auto">Хронология</h1>
        <TimelinePageWrapper />
      </div>

      <div className="flex flex-col gap-10 container">
        <h1 className="text-3xl font-semibold mx-auto">Галерея</h1>
        <ImageGallery imagesInfoArray={allImages} />
      </div>
    </div>
  );
}
