import { paginateListObjectsV2 } from "@aws-sdk/client-s3";
import client from "./s3";

export async function listGalleryImages() {
  const totalFiles = [];
  for await (const data of paginateListObjectsV2(
    { client },
    { Bucket: "gallery" }
  )) {
    totalFiles.push(...(data.Contents ?? []));
  }
  return totalFiles.map(
    (value) =>
      `https://edkgbpquadosqfibilqw.supabase.co/storage/v1/object/public/gallery/${value.Key}`
  );
}
