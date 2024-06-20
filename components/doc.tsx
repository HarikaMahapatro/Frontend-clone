import type { NextPage } from "next";

export type DocType = {
  className?: string;
};

const Doc: NextPage<DocType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start pt-[0rem] pb-[0.125rem] pr-[0.312rem] pl-[0rem] text-left text-[1.25rem] text-greytext font-sarabun ${className}`}
    >
      <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[2.188rem]">
        Doc
      </a>
    </div>
  );
};
                                                                                                                                                                              
export default Doc;
