"use client";

import React, { JSX, memo, PropsWithChildren } from "react";
import classnames from "classnames";

export interface TimelineProps {
  stage: number;
  // texts: string[];
}

function Timeline({ stage, children }: PropsWithChildren<TimelineProps>) {
  return (
    <div className="bg-blue-600 h-1 relative w-full px-12">
      <div
        className="absolute left-1/2 h-1 flex gap-96 items-center transition duration-1000"
        style={{ translate: -stage * 400 }}
      >
        {React.Children.map(children, (child, idx) => {
          const className = classnames({
            "w-8": idx == stage,
            "h-8": idx == stage,
          });
          console.log(idx, idx == stage);
          const textClass = classnames({
            "opacity-0": idx != stage,
          });
          return (
            <div key={idx} className="relative -translate-x-1/2 w-4 h-4">
              <div
                className={
                  "w-4 h-4 bg-blue-600 rounded-full transition-all duration-1000 absolute top-1/2 left-1/2 -translate-1/2 " +
                  className
                }
              />
              <div
                className={
                  "absolute top-10 left-1/2 -translate-x-1/2 duration-1000 w-fit " +
                  textClass
                }
              >
                {child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default memo(Timeline);
