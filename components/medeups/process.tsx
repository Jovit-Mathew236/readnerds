import React from "react";
import { VelocityScroll } from "../magicui/scroll-based-velocity";
import FloatingSlash from "@/public/assets/svgs/floating";

const Process = () => {
  return (
    <div className="px-10 sm:px-20 relative">
      <div className="absolute w-screen left-0">
        <VelocityScroll numRows={1} direction="left" defaultVelocity={2}>
          <div className="flex justify-center items-center">
            <FloatingSlash />
            <p className="font-light italic text-5xl">
              From <span className="text-primary">Concept Design</span>
            </p>{" "}
          </div>
        </VelocityScroll>

        <VelocityScroll numRows={1} direction="right" defaultVelocity={2}>
          <div className="flex justify-center items-center">
            <FloatingSlash />
            <p className="font-light italic text-5xl">
              To <span className="text-primary">Manufacturing</span>
            </p>{" "}
          </div>
        </VelocityScroll>
      </div>
    </div>
  );
};

export default Process;
