import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GroupComponentType = {
  className?: string;
  whoIsTheCEOOfBlazeswap?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  whoIsTheCEOOfBlazeswap,
  propWidth,
  propMinWidth,
}) => {
  const fAQAnswerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`w-[60.938rem] flex flex-row items-start justify-start text-left text-[1.5rem] text-white font-sarabun ${className}`}
    >
      <div className="h-[6.25rem] flex-1 flex flex-col items-start justify-start relative gap-[0.312rem] max-w-full mq825:h-auto mq825:min-h-[100]">
        <div className="w-full h-full absolute !m-[0] top-[0rem] left-[0rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-xl bg-bg-colour box-border w-full h-full border-[1px] border-solid border-border-lines" />
        </div>
        <div
          className="w-[44.381rem] !m-[0] absolute top-[1.875rem] left-[1.25rem] flex flex-row flex-wrap items-start justify-start gap-[1.875rem] max-w-full z-[1]"
          style={fAQAnswerStyle}
        >
          <img
            className="h-[2.5rem] w-[2.4rem] relative"
            alt=""
            src="/group-292.svg"
          />
          <div
            className="flex-1 flex flex-col items-start justify-start pt-[0.281rem] px-[0rem] pb-[0rem] box-border min-w-[26.063rem] max-w-full mq825:min-w-full"
            style={frameDiv2Style}
          >
            <b className="self-stretch relative [-webkit-text-stroke:1px_#fff] mq450:text-[1.188rem]">
              {whoIsTheCEOOfBlazeswap}
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
