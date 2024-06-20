import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type GreenBoxesContainerType = {
  className?: string;
  prop?: string;
  waitlist?: string;

  /** Style props */
  propFilter?: CSSProperties["filter"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propLetterSpacing?: CSSProperties["letterSpacing"];
  propMinWidth?: CSSProperties["minWidth"];
  propPadding1?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const GreenBoxesContainer: NextPage<GreenBoxesContainerType> = ({
  className = "",
  prop,
  waitlist,
  propFilter,
  propLeft,
  propPadding,
  propLetterSpacing,
  propMinWidth,
  propPadding1,
  propColor,
  propMinWidth1,
}) => {
  const boxGreenStyle: CSSProperties = useMemo(() => {
    return {
      filter: propFilter,
    };
  }, [propFilter]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      letterSpacing: propLetterSpacing,
      minWidth: propMinWidth,
    };
  }, [propLetterSpacing, propMinWidth]);

  const nftAcquisitionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const waitlistStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  return (
    <div
      className={`self-stretch h-[7.5rem] relative text-left text-[0.831rem] text-primary-colour font-train-one ${className}`}
    >
      <div
        className="absolute top-[0rem] left-[0rem] [filter:drop-shadow(0px_0px_20px_rgba(111,_255,_233,_0.5))] w-full h-full flex flex-row items-start justify-start"
        style={boxGreenStyle}
      >
        <div className="self-stretch flex-1 flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start">
            <div className="self-stretch flex-1 relative shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs bg-gray-200 border-[1px] border-solid border-border-lines" />
          </div>
        </div>
      </div>
      <div
        className="absolute top-[1.75rem] left-[3rem] flex flex-col items-start justify-start gap-[0.312rem] z-[1]"
        style={frameDivStyle}
      >
        <div
          className="flex flex-col items-start justify-start pt-[0.625rem] px-[0.875rem] pb-[0.687rem] relative"
          style={frameDiv1Style}
        >
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] box-border border-[0px] border-solid border-sub-primary" />
          <div className="flex flex-row items-start justify-start relative">
            <div className="h-[2.081rem] w-[2.081rem] absolute !m-[0] bottom-[-0.475rem] left-[-0.669rem] rounded-[50%] box-border z-[1] border-[0px] border-solid border-sub-primary" />
            <div
              className="relative tracking-[-0.16em] inline-block min-w-[0.75rem] z-[2]"
              style={divStyle}
            >
              {prop}
            </div>
          </div>
        </div>
        <div
          className="flex flex-row items-start justify-start py-[0rem] px-[0.25rem] text-sub-primary font-sarabun"
          style={nftAcquisitionStyle}
        >
          <b
            className="relative tracking-[-0.16em] font-bold inline-block min-w-[2rem]"
            style={waitlistStyle}
          >
            {waitlist}
          </b>
        </div>
      </div>
    </div>
  );
};

export default GreenBoxesContainer;
