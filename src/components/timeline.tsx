"use client";

import React, { JSX, memo, PropsWithChildren, ComponentProps } from "react";
import classnames from "classnames";

export type TimelineProps = PropsWithChildren<{
  stage: number;
}> &
  ComponentProps<"div">;

function Timeline({ stage, children, ...divProps }: TimelineProps) {
  return (
    <div
      {...divProps}
      className={"bg-blue-600 h-1 relative w-full px-12 " + divProps.className}
    >
      <div
        className="absolute left-1/2 h-1 flex gap-96 items-center transition duration-1000"
        style={{ translate: -stage * 400 }}
      >
        {React.Children.map(children, (child, idx) => {
          const className = classnames({
            "w-8": idx == stage,
            "h-8": idx == stage,
          });
          const textClass = classnames({
            "opacity-25 scale-75 origin-top": idx != stage,
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
                  "absolute left-1/2 top-10 -translate-x-1/2 duration-1000 w-fit " +
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
