import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const HomePage: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.75rem] box-border bg-[url('/home-page@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <div className="w-[37.875rem] h-[10.625rem] !m-[0] absolute top-[22.563rem] left-[70.875rem] flex flex-row items-start justify-start max-w-full">
        <div className="h-[10.625rem] flex-1 relative max-w-full z-[1] flex items-center justify-center">
          <img
            className="h-full flex-1 overflow-hidden z-[1] object-contain absolute left-[0rem] top-[0rem] w-full [transform:scale(5.851)]"
            alt=""
            src="/frame-2085660371.svg"
          />
        </div>
        <img
          className="h-[14.375rem] w-[14.375rem] absolute !m-[0] top-[-2.562rem] left-[0.5rem] z-[2]"
          loading="lazy"
          alt=""
          src="/emblem2.svg"
        />
      </div>
      <div className="w-[37.875rem] h-[10.625rem] absolute !m-[0] top-[21.563rem] left-[-18.937rem] flex items-center justify-center z-[1]">
        <img
          className="w-full h-full object-contain absolute left-[0rem] top-[0rem] [transform:scale(5.851)]"
          alt=""
          src="/frame-2085660373.svg"
        />
      </div>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full shrink-0">
        <FrameComponent5 />
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default HomePage;
