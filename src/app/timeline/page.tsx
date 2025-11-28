"use client";

import Timeline from "@/src/components/timeline";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [stage, setStage] = useState(1);

  return (
    <>
      <div className="flex flex-col align-center justify-center px-12 pt-12">
        <h1 className="text-center text-3xl">Таймлайн</h1>

      </div>
      <Timeline stage={stage}></Timeline>
    </>
  );
}
