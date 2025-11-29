"use server";

import Form from "next/form";
import { processBuy } from "./process";

export default async function BuyPage() {
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
