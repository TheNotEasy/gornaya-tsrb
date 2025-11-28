"use client";

import Timeline from "@/src/components/timeline";
import { useState } from "react";

import events from "./events.json";
import Markdown from "react-markdown";

export default function Home() {
  const [stage, setStage] = useState(0);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col align-center justify-center px-12 pt-12">
        <h1 className="text-center text-3xl">Таймлайн</h1>
        {stage}
      </div>
      <div className="flex gap-5 mx-auto">
        <button onClick={() => setStage(stage - 1)} className="">
          Назад
        </button>
        <button onClick={() => setStage(stage + 1)} className="">
          Вперед
        </button>
      </div>
      <Timeline stage={stage}>
        {events.map((value, idx) => (
          <div className="flex flex-col items-center gap-5 w-lg" key={idx}>
            <h1 className="font-bold">{value.title}</h1>
            {value.image && <img src={value.image} alt={value.alt}></img>}
            {value.description && <p>{value.description}</p>}
            {value.markdown && (
              <div className="unset-all">
                <Markdown>{value.markdown}</Markdown>
              </div>
            )}
          </div>
        ))}
      </Timeline>
    </div>
  );
}
