"use client";

import Timeline from "@/src/components/timeline";
import useInterval from "@/src/hooks/useInterval";
import events from "./events.json";

import Markdown from "react-markdown";
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";

// export const dynamic = "force-dynamic";

export default function TimelinePageWrapper() {
  return (
    <Suspense fallback={"Загрузка..."}>
      <TimelinePage />
    </Suspense>
  );
}

function TimelinePage() {
  const params = useSearchParams();
  const router = useRouter();
  const [billboardMode, setBillboardMode] = useState(
    !!params.get("billboardMode")
  );

  const [stage, setStage] = useState(parseInt(params.get("stage") || "0") || 0);

  useInterval(
    useCallback(() => setStage((stage + 1) % events.length), [stage, events]),
    10000,
    billboardMode
  );

  useEffect(() => {
    const currentParams = new URLSearchParams(params.toString());
    if (!billboardMode) {
      currentParams.delete("billboardMode");
    } else {
      currentParams.set("billboardMode", "true");
    }
    router.replace(`?${currentParams.toString()}`, { scroll: false });
  }, [billboardMode]);

  useEffect(() => {
    const currentParams = new URLSearchParams(params.toString());
    currentParams.set("stage", stage.toString());
    router.replace(`?${currentParams.toString()}`, { scroll: false });
  }, [stage]);

  return (
    <div className="flex flex-col gap-12">
      {/* <div className="flex flex-col align-center justify-center px-12 pt-12">
        <h1 className="text-center text-3xl">Таймлайн</h1>
        {stage}
      </div> */}
      {!billboardMode && (
        <div className="flex gap-5 mx-auto items-center">
          <button
            onClick={() => setStage(Math.max(stage - 1, 0))}
            className="cursor-pointer group bg-gray-100 p-2 rounded-full"
          >
            <ChevronLeft className="group-active:scale-90 transition" />
          </button>
          <span className="select-none w-4 text-center">{stage + 1}</span>
          <button
            onClick={() => setStage(Math.min(stage + 1, events.length - 1))}
            className="cursor-pointer group bg-gray-100 p-2 rounded-full"
          >
            <ChevronRight className="group-active:scale-90 transition" />
          </button>
        </div>
      )}
      <Timeline stage={stage} className="mb-[600px]">
        {events.map((value, idx) => (
          <div
            className="flex flex-col items-center gap-5 w-lg max-w-[100vw] px-5"
            key={idx}
          >
            <h1 className="font-bold">{value.title}</h1>
            {value.image && <img src={value.image} alt={value.alt}></img>}
            {value.description && <p>{value.description}</p>}
            {value.markdown && (
              <div className="unset-all">
                <Markdown>{value.markdown}</Markdown>
              </div>
            )}

            <audio
              controls
              src={value.audio}
              className="w-full px-4"
              onEnded={() =>
                stage != events.length - 1 && stage != 0 && setStage(stage + 1)
              }
              ref={(el) => {
                if (!el) return;
                if (idx === stage) {
                  el.play();
                } else {
                  el.pause();
                  el.currentTime = 0;
                }
              }}
            ></audio>
          </div>
        ))}
      </Timeline>
    </div>
  );
}
