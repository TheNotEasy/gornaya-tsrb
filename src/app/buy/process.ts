"use server";

import { prisma } from "@/src/crud/prisma";
import s3 from "@/src/crud/s3";
import { v4 as uuid } from "uuid"

export async function processBuy(data: FormData) {
  const attachment = data.get("attachment");
  console.log(attachment);
  if (!attachment || !(attachment instanceof File)) {
    throw TypeError("attachment is not a file");
  }

  const key = `${uuid()}-${attachment.name}`;

  await prisma.paymentRequest.create({
    data: {
      attachment: key
    }
  });

  await s3.putObject({
    Bucket: "attachments",
    Key: key,
    Body: new Uint8Array(await attachment.arrayBuffer()),
    ContentType: attachment.type,
  });
}