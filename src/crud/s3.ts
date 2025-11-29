import { S3Client, S3ClientConfig } from "@aws-sdk/client-s3";

const s3Config = {
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY!,
    secretAccessKey: process.env.S3_SECRET_KEY!,
  },
  region: "eu-central-1",
  endpoint: "https://edkgbpquadosqfibilqw.storage.supabase.co/storage/v1/s3",
  forcePathStyle: true,
} satisfies S3ClientConfig;

export default new S3Client(s3Config);
