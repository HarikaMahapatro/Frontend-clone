import type { NextPage } from "next";
import { useCallback } from "react";
import Doc from "./doc";
import { useRouter } from "next/router";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  const router = useRouter();

  const onLaunchAppContainerClick = useCallback(() => {
    router.push("/home-page1");
  }, [router]);

  return (
    <header
      className={`self-stretch [background:linear-gradient(180deg,_#040404,_rgba(4,_4,_4,_0.8))] overflow-hidden flex flex-row items-end justify-between pt-[1.25rem] pb-[1.312rem] pr-[5.312rem] pl-[3.75rem] box-border top-[0] z-[99] sticky max-w-full gap-[1.25rem] text-left text-[1.25rem] text-greytext font-sarabun mq825:pl-[1.875rem] mq825:pr-[2.625rem] mq825:box-border mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start gap-[3.75rem] max-w-full mq450:gap-[1.875rem]">
        <div className="flex flex-row items-start justify-start py-[0rem] pr-[0.75rem] pl-[0rem] text-primary-colour">
          <img
            className="self-stretch w-[2.625rem] relative max-h-full object-cover min-h-[1.813rem]"
            loading="lazy"
            alt=""
            src="/logo13-1@2x.png"
          />
          <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7.375rem] whitespace-nowrap">
            Semi Hyphen
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <div className="flex flex-row items-start justify-start gap-[0.312rem]">
            <Doc />
            <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline.svg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem]">
          <div
            className="flex flex-row items-start justify-start gap-[0.312rem] cursor-pointer"
            onClick={onLaunchAppContainerClick}
          >
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[4.438rem]">
              Waitlist
            </a>
            <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[1.25rem] h-[1.25rem] relative overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/mingcutearrowleftupline.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.062rem]">
        <div className="flex flex-row items-end justify-start gap-[1.875rem]">
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem]">
            <div className="flex flex-row items-start justify-start gap-[0.937rem]">
              <img
                className="h-[1.875rem] w-[1.875rem] relative object-cover min-h-[1.875rem]"
                loading="lazy"
                alt=""
                src="/frame-2085660409@2x.png"
              />
              <img
                className="h-[1.875rem] w-[1.875rem] relative min-h-[1.875rem]"
                loading="lazy"
                alt=""
                src="/frame-2085660408.svg"
              />
            </div>
          </div>
          <button className="cursor-pointer py-[0.25rem] px-[0.875rem] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
            <a className="[text-decoration:none] relative text-[1.25rem] font-bold font-sarabun text-gray-100 text-left inline-block min-w-[6.625rem]">
              Launch App
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent5;
