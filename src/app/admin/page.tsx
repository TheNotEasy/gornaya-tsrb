"use client";

import * as VKID from "@vkid/sdk";
import Form from "next/form";
import { useRef } from "react";
import { processAdminPassword } from "./process";

export default function AdminPage() {
  return (
    <Form
      action={processAdminPassword}
      className="flex container flex-col h-full items-center py-10"
    >
      <input type="password" name="pass" id="pass" />
      <input type="submit" value="Отправить" />
    </Form>
  );
}
