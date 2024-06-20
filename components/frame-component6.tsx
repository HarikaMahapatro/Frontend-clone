import type { NextPage } from "next";
import GroupComponent from "./group-component";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[28.75rem] pr-[1.25rem] pl-[1.312rem] box-border max-w-full text-left text-[2.625rem] text-white font-sarabun lg:pb-[18.688rem] lg:box-border mq825:pb-[12.125rem] mq825:box-border ${className}`}
    >
      <div className="w-[60.938rem] flex flex-col items-start justify-start gap-[3.75rem] max-w-full lg:gap-[1.875rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem]">
          <h1 className="m-0 relative text-inherit tracking-[-0.04em] leading-[3.75rem] font-bold font-inherit inline-block min-w-[4.938rem] mq825:text-[2.125rem] mq825:leading-[3rem] mq450:text-[1.563rem] mq450:leading-[2.25rem]">
            <span>FA</span>
            <span className="text-primary-colour">Q</span>
          </h1>
        </div>
        <div className="w-[60.938rem] overflow-x-auto flex flex-col items-start justify-start gap-[1.875rem] max-w-full text-[1.5rem]">
          <GroupComponent whoIsTheCEOOfBlazeswap="Who is the CEO of Semi Hyphen?" />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="What are the features and options on Semi Hyphen?"
            propWidth="54.963rem"
            propMinWidth="32.938rem"
          />
          <GroupComponent
            whoIsTheCEOOfBlazeswap="This year growth in Semi Hyphen?"
            propWidth="44.381rem"
            propMinWidth="26.063rem"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
