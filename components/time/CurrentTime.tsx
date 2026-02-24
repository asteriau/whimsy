"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import AnimatedCounter from "./Ticker";

interface CurrentTimeProps {
  className?: string;
  displayMs?: boolean;
  msPrecision?: number;
}

function getDate(timeZone: string) {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone,
    })
  );
}

export default function CurrentTime({ className, displayMs, msPrecision }: CurrentTimeProps) {
  const [time, setTime] = useState(getDate("Europe/Bucharest"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getDate("Europe/Bucharest"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={clsx("flex items-center gap-2 font-sans text-paradise-200", className)}>
      <span className="opacity-0 animate-[fadeIn_0.5s_ease-out_0.1s_forwards]">
        It’s currently:
      </span>
      <div className="flex gap-1 opacity-0 animate-[fadeIn_0.5s_ease-out_0.25s_forwards]">
        <AnimatedCounter
          value={time.getHours()}
          className="font-mono text-paradise-300"
          decimalPrecision={0}
          padNumber={2}
          showColorsWhenValueChanges={false}
        />
        :
        <AnimatedCounter
          value={time.getMinutes()}
          className="font-mono text-paradise-300"
          decimalPrecision={0}
          padNumber={2}
          showColorsWhenValueChanges={false}
        />
        :
        <AnimatedCounter
          value={time.getSeconds()}
          className="font-mono text-paradise-300"
          decimalPrecision={0}
          padNumber={2}
          showColorsWhenValueChanges={false}
        />
        {displayMs && (
          <>
            .
            <AnimatedCounter
              value={time.getMilliseconds()}
              className="font-mono text-paradise-300"
              decimalPrecision={msPrecision}
              padNumber={3}
              showColorsWhenValueChanges={false}
            />
          </>
        )}
      </div>
    </div>
  );
}