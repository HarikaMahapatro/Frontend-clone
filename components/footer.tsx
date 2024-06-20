import type { NextPage } from "next";
export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-bg-colour box-border overflow-hidden flex flex-col items-end justify-start pt-[5.5rem] pb-[1.25rem] pr-[8.75rem] pl-[0rem] gap-[13.25rem] max-w-full shrink-0 text-left text-[0.75rem] text-lightgray font-sarabun border-t-[1px] border-solid border-border-lines mq825:gap-[6.625rem] mq825:pt-[3.563rem] mq825:pr-[4.375rem] mq825:box-border mq450:gap-[3.313rem] mq450:pr-[1.25rem] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.875rem] box-border max-w-full gap-[1.25rem] lg:flex-wrap lg:justify-center">
        <img
          className="h-[6.438rem] w-[9.375rem] relative object-contain"
          loading="lazy"
          alt=""
          src="/logo13-3-1@2x.png"
        />
        <div className="w-[41.25rem] flex flex-row items-start justify-start pt-[0rem] pb-[1.562rem] pr-[2.062rem] pl-[0rem] box-border gap-[17rem] max-w-full mq825:flex-wrap mq825:gap-[8.5rem] mq450:gap-[4.25rem]">
          <div className="flex-1 flex flex-row items-start justify-start gap-[6rem] min-w-[7.688rem]">
            <div className="flex flex-col items-start justify-start gap-[1.875rem]">
              <b className="relative leading-[150%] font-bold inline-block min-w-[2.75rem]">
                Product
              </b>
              <div className="flex flex-col items-start justify-start gap-[0.312rem] text-[0.875rem] text-white">
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[1.5rem]">
                  Doc
                </b>
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[3.125rem]">
                  Waitlist
                </b>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.875rem]">
              <b className="relative leading-[150%] font-bold inline-block min-w-[1.375rem]">
                Info
              </b>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.312rem] text-[0.875rem] text-white">
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[2.375rem]">
                  Home
                </b>
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[3.125rem]">
                  Waitlist
                </b>
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[3.625rem]">
                  About Us
                </b>
                <b className="relative leading-[1.25rem] font-bold inline-block min-w-[4.563rem]">
                  Community
                </b>
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-[0.5rem] px-[0.875rem] bg-sub-primary shadow-[0px_3px_4px_rgba(103,_230,_216,_0.6)] rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-border-lines hover:bg-darkcyan hover:box-border hover:border-[1px] hover:border-solid hover:border-slategray">
            <b className="relative text-[1.25rem] font-bold font-sarabun text-gray-100 text-left inline-block min-w-[6.625rem]">
              Launch App
            </b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.75rem] pl-[0rem] box-border max-w-full text-[12.5rem] text-grey">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1400:flex-wrap">
          <div className="w-[69.188rem] flex flex-row items-start justify-start py-[0rem] pr-[0.625rem] pl-[0rem] box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6fffe9,_#132b28)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block max-w-full mq825:text-[5rem] mq825:leading-[2.25rem] mq450:text-[3.125rem] mq450:leading-[1.5rem]">
              Semi Hyphen
            </h1>
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.312rem] text-[0.5rem]">
            <div className="w-[0.938rem] flex flex-col items-start justify-start pt-[1.406rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch h-[0.938rem] relative">
                <b className="absolute top-[0.188rem] left-[0.313rem] tracking-[-0.04em] leading-[0.625rem] font-bold inline-block min-w-[0.25rem]">
                  c
                </b>
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-grey" />
              </div>
            </div>
            <b className="relative text-[0.875rem] tracking-[-0.04em] leading-[3.75rem] inline-block text-greytext min-w-[6.813rem]">
              Semi Hyphen 2024
            </b>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
