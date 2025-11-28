import { prisma } from "./prisma";

export async function listGalleryImages() {
  const allImages = await prisma.galleryImage.findMany();
}
