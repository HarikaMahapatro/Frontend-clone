import type { NextPage } from "next";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import Footer from "../components/footer";

const HomePage1: NextPage = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start bg-[url('/home-page@3x.png')] bg-cover bg-no-repeat bg-[top] leading-[normal] tracking-[normal]">
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent7 />
      <FrameComponent6 />
      <Footer />
    </div>
  );
};

export default HomePage1;
