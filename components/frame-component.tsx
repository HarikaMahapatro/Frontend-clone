import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[6.937rem] box-border max-w-full shrink-0 text-left text-[1.25rem] text-white font-cpmono_v07 mq825:pb-[4.5rem] mq825:box-border ${className}`}
    >
      <div className="h-[25rem] w-[77rem] overflow-hidden shrink-0 flex flex-col items-end justify-start py-[7.312rem] px-[6.25rem] box-border relative gap-[10.312rem] max-w-full lg:h-auto mq825:gap-[2.563rem] mq825:py-[4.75rem] mq825:px-[1.563rem] mq825:box-border mq450:gap-[1.313rem] mq1400:gap-[5.125rem] mq1400:pl-[3.125rem] mq1400:pr-[3.125rem] mq1400:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [backdrop-filter:blur(31.2px)] rounded-xl bg-gray-200 box-border border-[1px] border-solid border-border-lines" />
        <div className="self-stretch flex flex-row items-end justify-between shrink-0 [debug_commit:bf4bc93] max-w-full gap-[1.25rem] text-[3rem] font-sarabun lg:flex-wrap">
          <div className="w-[33.063rem] flex flex-col items-start justify-start gap-[1.125rem] min-w-[33.063rem] max-w-full z-[1] lg:flex-1 mq825:min-w-full">
            <img
              className="w-[7.5rem] h-[0.125rem] relative rounded-12xs"
              loading="lazy"
              alt=""
              src="/vector-115.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[1.625rem] gap-[0.375rem]">
              <h1 className="m-0 relative text-inherit font-bold font-inherit mq825:text-[2.375rem] mq450:text-[1.813rem]">
                Newsletter
              </h1>
              <p className="m-0 self-stretch relative text-[1.25rem] font-bold text-greytext mq450:text-[1rem]">
                <span className="block">{`Subscribe to the Semi Hyphen newsletter `}</span>
                <span className="block">to be updated with the ecosystem.</span>
              </p>
            </div>
          </div>
          <div className="w-[21.875rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem] box-border min-w-[21.875rem] max-w-full text-[1.25rem] text-greytext lg:flex-1 mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
              <b className="relative z-[1] mq450:text-[1rem]">
                Your email address
              </b>
              <input
                className="[outline:none] bg-gray-200 self-stretch h-[2.5rem] relative rounded-3xs box-border min-w-[13.125rem] z-[1] border-[1px] border-solid border-border-lines"
                type="text"
              />
              <div className="w-[6.313rem] flex flex-row items-start justify-start py-[0rem] px-[0.312rem] box-border">
                <button className="cursor-pointer py-[0.5rem] px-[0.875rem] bg-sub-primary flex-1 shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
                  <b className="relative text-[1.25rem] font-bold font-sarabun text-gray-100 text-left inline-block min-w-[3.813rem]">
                    Sign in
                  </b>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[20rem] h-[15.563rem] relative hidden z-[2]">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-button-green w-[2.813rem] h-[2.813rem]" />
          <img
            className="absolute top-[0.688rem] left-[0.625rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/materialsymbolsswapcalls.svg"
          />
          <b className="absolute top-[3.813rem] left-[0rem] tracking-[-0.04em] leading-[1.375rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
            Swap
          </b>
          <div className="absolute top-[6.188rem] left-[0rem] text-[1rem] tracking-[-0.04em] leading-[5.5rem] text-greytext inline-block w-[20rem] h-[5.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className="w-[20rem] h-[15.563rem] relative hidden z-[3]">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-button-green w-[2.813rem] h-[2.813rem]" />
          <img
            className="absolute top-[0.688rem] left-[0.625rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/claritycontainervolumesolid.svg"
          />
          <b className="absolute top-[3.813rem] left-[0rem] tracking-[-0.04em] leading-[1.375rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
            Liquidity
          </b>
          <div className="absolute top-[6.188rem] left-[0rem] text-[1rem] tracking-[-0.04em] leading-[4.125rem] text-greytext inline-block w-[20rem] h-[4.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam.
          </div>
        </div>
        <div className="w-[20rem] h-[15.563rem] relative hidden z-[4]">
          <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-button-green w-[2.813rem] h-[2.813rem]" />
          <img
            className="absolute top-[0.688rem] left-[0.625rem] w-[1.5rem] h-[1.5rem] overflow-hidden"
            alt=""
            src="/iconparksolidbridgeone.svg"
          />
          <b className="absolute top-[3.813rem] left-[0rem] tracking-[-0.04em] leading-[1.375rem] mq450:text-[1rem] mq450:leading-[1.125rem]">
            Bridge
          </b>
          <div className="absolute top-[6.188rem] left-[0rem] text-[1rem] tracking-[-0.04em] leading-[5.5rem] text-greytext inline-block w-[20rem] h-[5.5rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue
            vestibulum posuere. Vestibulum leo diam, efficitur non felis id,
            feugiat condimentum neque.
          </div>
        </div>
        <div className="mr-[-21.375rem] w-[37.875rem] h-[10.625rem] flex flex-row items-start justify-start relative max-w-full shrink-0">
          <div className="h-[10.625rem] flex-1 relative max-w-full shrink-0 [debug_commit:bf4bc93] flex items-center justify-center z-[0]">
            <img
              className="h-full flex-1 overflow-hidden shrink-0 [debug_commit:bf4bc93] object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(4.668)]"
              loading="lazy"
              alt=""
              src="/rule-description-container.svg"
            />
          </div>
          <img
            className="h-[19.381rem] w-[48.094rem] absolute !m-[0] top-[-7.437rem] left-[-32rem] object-contain z-[1]"
            alt=""
            src="/ecosystem-right@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
