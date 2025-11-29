"use client";

import * as VKID from "@vkid/sdk";
import { useRef } from "react";

function renderVkOneTap(div: HTMLDivElement) {
  VKID.Config.init({
    app: 54366025,
    redirectUrl: "https://gornaya-tsrb.vercel.app/admin/oauth",
    responseMode: VKID.ConfigResponseMode.Callback,
    source: VKID.ConfigSource.LOWCODE,
    scope: "", // Заполните нужными доступами по необходимости
  });
  const oneTap = new VKID.OneTap();
  oneTap
    .render({
      container: div,
      showAlternativeLogin: true,
    })
    .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload: any) {
      const code = payload.code;
      const deviceId = payload.device_id;

      VKID.Auth.exchangeCode(code, deviceId);
    });
}

export default function AdminPage() {
  return (
    <div className="flex container flex-col h-full items-center py-10">
      <div ref={renderVkOneTap} className="w-md"></div>
    </div>
  );
}
