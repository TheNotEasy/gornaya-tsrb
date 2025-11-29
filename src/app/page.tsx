"use server";

import TimelinePageWrapper from "../components/timelinepage";

import { listGalleryImages } from "../crud/galleryImages";
import Gallery from "../components/gallery";

export default async function Home() {
  const allImages = (await listGalleryImages()).map((value) => ({
    id: value,
    src: value,
    alt: value,
  }));

  return (
    <div className="flex flex-col py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold mx-auto">Хронология</h1>
        <TimelinePageWrapper />
      </div>

      <div className="flex flex-col gap-10 container justify-center">
        <h1 className="text-3xl font-semibold mx-auto">Галерея</h1>
        <Gallery imagesInfoArray={allImages} />
      </div>
    </div>
  );
}
