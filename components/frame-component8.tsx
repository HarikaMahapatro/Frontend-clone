import type { NextPage } from "next";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.687rem] box-border max-w-full text-left text-[2.625rem] text-white font-sarabun lg:pb-[3.063rem] lg:box-border mq825:pb-[2rem] mq825:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-col items-start justify-start pt-[10.937rem] px-[8.75rem] pb-[20.25rem] box-border relative gap-[10rem] max-w-full lg:pt-[7.125rem] lg:pb-[13.188rem] lg:box-border mq825:gap-[2.5rem] mq825:pt-[4.625rem] mq825:px-[2.188rem] mq825:pb-[8.563rem] mq825:box-border mq450:gap-[1.25rem] mq1400:gap-[5rem] mq1400:pl-[4.375rem] mq1400:pr-[4.375rem] mq1400:box-border">
        <div className="w-[65.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit mq825:text-[2.125rem] mq825:leading-[3rem] mq450:text-[1.563rem] mq450:leading-[2.25rem]">
            <span>{`Discover the `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Waitlist
            </span>
          </h1>
        </div>
        <div className="w-[25rem] flex flex-col items-start justify-start gap-[0.937rem] max-w-full text-[2.25rem]">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit mq825:text-[1.813rem] mq825:leading-[3rem] mq450:text-[1.375rem] mq450:leading-[2.25rem]">
            <span>{`About `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Waitlist
            </span>
          </h1>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4.187rem] text-[1rem] text-greytext mq450:gap-[2.063rem]">
            <p className="m-0 self-stretch relative tracking-[-0.04em] leading-[1.375rem] font-bold">
              <span className="block">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue vestibulum posuere. `}</span>
              <span className="block">{` `}</span>
              <span className="block">
                Vestibulum leo diam, efficitur non felis id, feugiat condimentum
                neque.
              </span>
            </p>
            <button className="cursor-pointer py-[0.5rem] px-[0.562rem] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.312rem] border-[1px] border-solid border-border-lines">
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
        <img
          className="w-[8.563rem] h-[8.3rem] absolute !m-[0] right-[16.313rem] bottom-[22.825rem] object-contain"
          loading="lazy"
          alt=""
          src="/shape@2x.png"
        />
        <img
          className="w-[5.85rem] h-[5.669rem] absolute !m-[0] top-[24.938rem] right-[8.025rem] object-contain"
          alt=""
          src="/shape-1@2x.png"
        />
        <img
          className="w-[3.769rem] h-[3.656rem] absolute !m-[0] top-[19.25rem] right-[3.794rem] object-contain"
          alt=""
          src="/shape-2@2x.png"
        />
        <img
          className="w-[3.769rem] h-[3.656rem] absolute !m-[0] top-[13.119rem] right-[-2.519rem] object-contain"
          alt=""
          src="/shape-3@2x.png"
        />
        <img
          className="w-[17.306rem] h-[16.775rem] absolute !m-[0] right-[27.381rem] bottom-[11.556rem] object-contain"
          alt=""
          src="/shape-4@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent8;
