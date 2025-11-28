"use server";

import TimelinePageWrapper from "@/src/components/timelinepage";

export default async function TimelineStandalonePage() {
  return (
    <div className="flex flex-col">
      <TimelinePageWrapper />
    </div>
  );
}
