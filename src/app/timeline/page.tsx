"use client";

import Timeline from "@/src/components/timeline";
import { useEffect, useState } from "react";

import events from "./events.json";
import Markdown from "react-markdown";
import { useSearchParams, useRouter } from "next/navigation";

export default function TimelinePage() {
  const params = useSearchParams();
  const router = useRouter();
  const billboardMode = !!params.get("billboardMode");

  const [stage, setStage] = useState(parseInt(params.get("stage") || "0") || 0);

  useEffect(() => {
    if (!billboardMode) return;
    const interval = setInterval(
      () => setStage((stage + 1) % events.length),
      10000
    );
    return () => clearInterval(interval);
  }, [billboardMode]);

  useEffect(() => {}, [stage]);

  return (
    <div className="flex flex-col gap-12 pb-[900px] pt-20">
      {/* <div className="flex flex-col align-center justify-center px-12 pt-12">
        <h1 className="text-center text-3xl">Таймлайн</h1>
        {stage}
      </div> */}
      {!billboardMode && (
        <div className="flex gap-5 mx-auto">
          <button onClick={() => setStage(Math.max(stage - 1, 0))} className="">
            Назад
          </button>
          <button
            onClick={() => setStage(Math.min(stage + 1, events.length - 1))}
          >
            Вперед
          </button>
        </div>
      )}
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
