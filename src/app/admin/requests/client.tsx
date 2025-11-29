"use client";

import Link from "next/link";
import processMark from "./process";

export function Request(value: any) {
  return (
    <div className="flex flex-col mx-auto gap-2">
      <p>{value.id}</p>
      <Link
        href={`https://edkgbpquadosqfibilqw.supabase.co/storage/v1/object/public/attachments/${value.attachment}`}
        download
      >
        Прикреп
      </Link>
      <button onClick={() => processMark(value.id)}>Отметить</button>
    </div>
  );
}
