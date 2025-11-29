"use server";

import { prisma } from "@/src/crud/prisma";
import { cookies } from "next/headers";

import Link from "next/link";
import { redirect } from "next/navigation";
import { Request } from "./client";

export default async function RequestView() {
  const cookiesStore = await cookies();
  if (cookiesStore.get("adminPass")?.value !== "admin") {
    redirect("/");
    return <></>;
  }

  const requests = (
    await prisma.paymentRequest.findMany({ where: { accepted: false } })
  ).map((value) => <Request value={value} key={value.id} />);
  return <div className="flex flex-col gap-5">{requests}</div>;
}
