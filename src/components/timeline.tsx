"use client";

import { memo } from "react";

export interface TimelineProps {
    stage: number;
}

function Timeline({ stage }: TimelineProps) {
    return (
        <div className="bg-blue-600 h-1 w-full"></div>
    )
}

export default memo(Timeline);