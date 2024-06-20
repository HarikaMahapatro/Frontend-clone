import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SwapContainerType = {
  className?: string;
  materialSymbolsswapCalls?: string;
  swap?: string;
  loremIpsumDolorSitAmetCon?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const SwapContainer: NextPage<SwapContainerType> = ({
  className = "",
  materialSymbolsswapCalls,
  swap,
  loremIpsumDolorSitAmetCon,
  propPadding,
  propMinWidth,
}) => {
  const swapContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const swapStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.875rem] box-border relative gap-[1rem] min-w-[15rem] z-[3] text-left text-[1.25rem] text-white font-sarabun ${className}`}
      style={swapContainerStyle}
    >
      <div className="w-[2.813rem] h-[2.813rem] relative rounded-3xs bg-button-green" />
      <img
        className="w-[1.5rem] h-[1.5rem] absolute !m-[0] top-[0.688rem] left-[0.625rem] overflow-hidden shrink-0 z-[1]"
        loading="lazy"
        alt=""
        src={materialSymbolsswapCalls}
      />
      <b
        className="relative tracking-[-0.04em] leading-[1.375rem] font-bold inline-block min-w-[2.813rem] mq450:text-[1rem] mq450:leading-[1.125rem]"
        style={swapStyle}
      >
        {swap}
      </b>
      <p className="m-0 self-stretch relative text-[1rem] tracking-[-0.04em] leading-[1.375rem] font-bold text-greytext">
        {loremIpsumDolorSitAmetCon}
      </p>
    </div>
  );
};

export default SwapContainer;
