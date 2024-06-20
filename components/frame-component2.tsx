
import type { NextPage } from "next";
import SwapContainer from "./swap-container";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[13.562rem] box-border max-w-full text-left text-[2.625rem] text-white font-sarabun mq825:pb-[8.813rem] mq825:box-border mq450:pb-[5.75rem] mq450:box-border ${className}`}
    >
      <div className="w-[77rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[3.75rem] px-[3.75rem] pb-[6.937rem] box-border relative gap-[3.75rem] max-w-full mq825:gap-[0.938rem] mq825:pt-[2.438rem] mq825:pb-[4.5rem] mq825:box-border mq1400:gap-[1.875rem] mq1400:pl-[1.875rem] mq1400:pr-[1.875rem] mq1400:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
        <div className="w-[37.875rem] h-[10.625rem] !m-[0] absolute top-[30.063rem] left-[50.625rem] flex flex-row items-start justify-start max-w-full">
          <div className="h-[10.625rem] flex-1 relative max-w-full z-[1] flex items-center justify-center">
            <img
              className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(4.668)]"
              loading="lazy"
              alt=""
              src="/rule-description-container.svg"
            />
          </div>
          <img
            className="h-[19.381rem] w-[48.094rem] absolute !m-[0] top-[-7.437rem] left-[-32rem] object-contain z-[2]"
            alt=""
            src="/ecosystem-right@2x.png"
          />
        </div>
        <div className="w-[64.688rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq825:flex-wrap">
          <div className="w-[24.188rem] flex flex-col items-start justify-start max-w-full z-[1]">
            <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit z-[1] mq825:text-[2.125rem] mq825:leading-[3rem] mq450:text-[1.563rem] mq450:leading-[2.25rem]">
              <p className="m-0">Getting Started</p>
              <p className="m-0">with</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.312rem] mt-[-3.75rem]">
              <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq825:text-[2.125rem] mq825:leading-[3rem] mq450:text-[1.563rem] mq450:leading-[2.25rem]">
                Semi Hyphen
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[2.437rem] px-[0rem] pb-[0rem]">
            <button className="cursor-pointer py-[0.5rem] px-[0.562rem] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.312rem] z-[1] border-[1px] border-solid border-border-lines">
              <b className="relative text-[1rem] font-bold font-sarabun text-bg-colour text-left inline-block min-w-[5.688rem]">
                Join Waitlist
              </b>
              <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[0.938rem] h-[0.938rem] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/mingcutearrowleftupline-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[67.5rem] flex flex-row flex-wrap items-start justify-start gap-[3.75rem] max-w-full text-[1.25rem] lg:gap-[1.875rem]">
          <SwapContainer
            materialSymbolsswapCalls="/materialsymbolsswapcalls.svg"
            swap="Swap"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
          />
          <SwapContainer
            materialSymbolsswapCalls="/claritycontainervolumesolid.svg"
            swap="Liquidity"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam."
            propPadding="0rem 0rem 5.25rem"
            propMinWidth="4.625rem"
          />
          <SwapContainer
            materialSymbolsswapCalls="/iconparksolidbridgeone.svg"
            swap="Bridge"
            loremIpsumDolorSitAmetCon="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. Vestibulum leo diam, efficitur non felis id, feugiat condimentum neque."
            propPadding="0rem 0rem 3.875rem"
            propMinWidth="3.438rem"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
