import type { NextPage } from "next";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[89.619rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full mt-[-3.75rem] text-left text-[3.625rem] text-white font-sarabun ${className}`}
    >
      <div className="w-[72.119rem] flex flex-row items-start justify-start max-w-full">
        <div className="w-[21.688rem] flex flex-col items-start justify-start pt-[16.375rem] px-[0rem] pb-[0rem] box-border max-w-full mq825:pt-[5rem] mq825:box-border">
          <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
            <h1 className="!m-[0] h-[9.625rem] w-[30.313rem] absolute top-[calc(50%_-_77px)] right-[-8.625rem] text-inherit tracking-[-0.04em] leading-[3.375rem] font-bold font-inherit inline-block z-[1] mq825:text-[2.875rem] mq825:leading-[2.688rem] mq450:text-[2.188rem] mq450:leading-[2rem]">
              REFURBISHING THE REALM OF EXCHANGES
            </h1>
            <div className="flex-1 flex flex-col items-start justify-start gap-[12.937rem] max-w-full text-[1rem] text-darkgray mq450:gap-[6.438rem]">
              <p className="m-0 self-stretch relative tracking-[-0.06em] leading-[1.5rem] font-light">
                <span className="block">The Exchange needed on Xion.</span>
                <span className="block">Everything awesome at one place.</span>
              </p>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.312rem]">
                <button className="cursor-pointer py-[0.5rem] px-[0.875rem] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.312rem] border-[1px] border-solid border-grey">
                  <b className="relative text-[1rem] font-bold font-sarabun text-greytext text-left inline-block min-w-[6.25rem]">
                    Start Building
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.938rem] h-[0.938rem] relative overflow-hidden shrink-0 object-contain"
                      alt=""
                      src="/mingcutearrowleftupline-2.svg"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[53.738rem] flex-1 flex flex-col items-start justify-end pt-[18.875rem] px-[5.312rem] pb-[18.862rem] box-border relative max-w-full ml-[-12.563rem] mq825:pt-[18.875rem] mq825:pb-[12.25rem] mq825:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <img
            className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain"
            alt=""
            src="/vector.svg"
          />
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
    </div>
  );
};

export default FrameComponent4;
