import type { NextPage } from "next";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border max-w-full text-left text-[1.25rem] text-primary-colour font-sarabun ${className}`}
    >
      <div className="flex-1 [background:linear-gradient(180deg,_#040404,_rgba(4,_4,_4,_0.8))] overflow-hidden flex flex-row items-start justify-start pt-[1.25rem] px-[3.75rem] pb-[1.312rem] box-border max-w-full mq1400:pl-[1.875rem] mq1400:pr-[1.875rem] mq1400:box-border">
        <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
          <img
            className="w-[2.625rem] h-[1.813rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/logo13-1@2x.png"
          />
        </div>
        <div className="w-[14.375rem] flex flex-col items-start justify-start pt-[0.625rem] pb-[0rem] pr-[0.312rem] pl-[0rem] box-border mq1400:w-[0.313rem]">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq1400:hidden">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7.375rem] whitespace-nowrap">
              Semi Hyphen
            </a>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-greytext">
              <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[2.188rem]">
                Doc
              </a>
            </div>
          </div>
        </div>
        <div className="w-[5rem] flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border">
          <img
            className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain"
            loading="lazy"
            alt=""
            src="/mingcutearrowleftupline.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.75rem] pb-[0rem] pr-[0.312rem] pl-[0rem] text-greytext">
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[4.438rem]">
            Waitlist
          </a>
        </div>
        <div className="w-[43.625rem] flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <img
            className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain"
            alt=""
            src="/mingcutearrowleftupline.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.375rem] pb-[0rem] pr-[0.937rem] pl-[0rem]">
          <img
            className="w-[1.875rem] h-[1.875rem] relative object-contain"
            loading="lazy"
            alt=""
            src="/frame-2085660409@2x.png"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.375rem] pb-[0rem] pr-[1.875rem] pl-[0rem]">
          <img
            className="w-[1.875rem] h-[1.875rem] relative"
            loading="lazy"
            alt=""
            src="/frame-2085660408.svg"
          />
        </div>
        <button className="cursor-pointer py-[0.25rem] px-[0.875rem] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
          <a className="[text-decoration:none] relative text-[1.25rem] font-bold font-sarabun text-gray-100 text-left inline-block min-w-[6.625rem]">
            Launch App
          </a>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent10;
