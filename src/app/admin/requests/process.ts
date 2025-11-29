"use server";

import { prisma } from "@/src/crud/prisma";

export default async function processMark(id: number) {
    await prisma.paymentRequest.update({
        where: {
            id,
        },
        data: {
        accepted: true,
        },
    });
};
