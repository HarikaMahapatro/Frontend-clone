import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[13.5rem] box-border max-w-full shrink-0 text-left text-[2.625rem] text-white font-sarabun mq825:pb-[8.75rem] mq825:box-border ${className}`}
    >
      <div className="w-[53rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full lg:gap-[1.875rem]">
        <div className="w-[46.5rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit mq825:text-[2.125rem] mq825:leading-[3rem] mq450:text-[1.563rem] mq450:leading-[2.25rem]">
            <span>{`Join Our `}</span>
            <span className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#5bc0be)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Community
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-start justify-start py-[0rem] px-[4.937rem] text-center text-[4.5rem] lg:pl-[2.438rem] lg:pr-[2.438rem] lg:box-border">
          <h1 className="m-0 w-[43.125rem] relative text-inherit tracking-[-0.04em] leading-[5rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#052c26)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block mq825:text-[3.625rem] mq825:leading-[4rem] mq450:text-[2.688rem] mq450:leading-[3rem]">
            <p className="m-0">Sign Up and Follow Our</p>
            <p className="m-0">Community Pages</p>
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[0.187rem] pr-[0.375rem] pl-[19.562rem] gap-[7.75rem] lg:flex-wrap lg:gap-[3.875rem] lg:justify-center lg:pl-[9.75rem] lg:box-border mq825:gap-[1.938rem] mq825:pl-[4.875rem] mq825:box-border mq450:gap-[0.938rem] mq450:pl-[1.25rem] mq450:box-border">
          <div className="ml-[-19.625rem] flex flex-col items-start justify-start py-[0rem] pr-[0.375rem] pl-[0rem]">
            <button className="cursor-pointer py-[0.5rem] px-[1.187rem] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.625rem] border-[1px] border-solid border-grey">
              <div className="flex flex-col items-start justify-start pt-[0.343rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/primetwitter@2x.png"
                />
              </div>
              <b className="relative text-[1.5rem] font-bold font-sarabun text-greytext text-left inline-block min-w-[5rem] mq450:text-[1.188rem]">
             <a href="https://x.com/i/flow/login" target="_blank" rel="noopener noreferrer">
             Twitter
              </a>
              </b>

              <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/mingcutearrowleftupline-5.svg"
                />
              </div>
            </button>
          </div>
          <button className="cursor-pointer py-[0.5rem] px-[1.187rem] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.625rem] border-[1px] border-solid border-grey">
            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/mingcutetelegramfill.svg"
              />
            </div>
            <b className="relative text-[1.5rem] font-bold font-sarabun text-greytext text-left inline-block min-w-[6.313rem] mq450:text-[1.188rem]">
            <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
              Telegram
              </a>
            </b>
            
            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer py-[0.5rem] px-[1.187rem] bg-[transparent] shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start gap-[0.625rem] border-[1px] border-solid border-grey">
            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                alt=""
                src="/mingcutemediumline.svg"
              />
            </div>
            <b className="relative text-[1.5rem] font-bold font-sarabun text-greytext text-left inline-block min-w-[5.438rem] mq450:text-[1.188rem]">
            <a href="https://medium.com/m/signin" target="_blank" rel="noopener noreferrer">
            Medium
            </a>
            </b>

            <div className="flex flex-col items-start justify-start pt-[0.218rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 object-contain"
                alt=""
                src="/mingcutearrowleftupline-5.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
