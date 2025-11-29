"use server";

import Form from "next/form";
import { processBuy } from "./process";
import { cookies } from "next/headers";
import { prisma } from "@/src/crud/prisma";

export default async function BuyPage() {
  const cookiesStore = await cookies();
  const id = cookiesStore.get("id");
  if (id) {
    const request = await prisma.paymentRequest.findFirstOrThrow({
      where: {
        id: parseInt(id.value),
      },
    });
    if (request.accepted) {
      return <div>Ваша заявка прошла модерацию успешно!</div>;
    } else {
      return <div>Ваша заявка еще не прошла модерацию...</div>;
    }
  }

  return (
    <Form action={processBuy} className="mx-auto flex flex-col">
      <p>Отправьте 1000 руб на номер карты: 1234 1234 1234 1234</p>
      <p>И прикрепите файл</p>
      <p>
        После модерации вашего платежа скан книги будет доступна в этой же
        странице
      </p>
      <input
        type="file"
        name="attachment"
        id="attachment"
        className="border p-2"
        required
      />
      <input
        type="submit"
        value="Отправить на модерацию"
        className="border p-2"
      />
    </Form>
  );
}
