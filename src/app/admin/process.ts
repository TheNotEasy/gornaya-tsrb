"use server";

import { cookies } from "next/headers";

export async function processAdminPassword(data: FormData) {
  const pass = data.get("pass");
  if (!pass) return;
  const cookieStore = await cookies();
  cookieStore.set("adminPass", pass.toString());
}
