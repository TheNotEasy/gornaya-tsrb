"use client";

import { useRef } from "react";

type Interval = ReturnType<typeof setInterval>;

export default function useInterval(
  callback: () => any,
  time: number,
  active: boolean
) {
  const interval = useRef<Interval>(null);
  const callbackRef = useRef<typeof callback>(callback);
  callbackRef.current = callback;

  if (!active) {
    if (interval.current) clearInterval(interval.current);
    console.log(interval.current);
    interval.current = null;
    return;
  }
  if (!interval.current)
    interval.current = setInterval(() => callbackRef.current(), time);
}
