"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
  number: number;
}

const Count = ({ number }: CountType) => {
  const [mounted, setMounted] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <CountUp
      start={0}
      end={start ? number : 0}
      duration={2.75}
      decimals={number % 1 !== 0 ? 1 : 0}
    >
      {({ countUpRef }) => (
        <>
          <span ref={countUpRef} />

          <InView
            as="span"
            onChange={(inView: boolean) => {
              if (inView) {
                setStart(true);
              }
            }}
          />
        </>
      )}
    </CountUp>
  );
};

export default Count;