import WhoAreWe from "@/public/assets/svgs/whoAreWe";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="px-10 sm:px-20 w-screen overflow-x-clip">
        <div className="flex flex-col max-w-[100vw]  overflow-x-clip sm:overflow-x-visible sm:flex-row min-h-[180vw] sm:min-h-[250px] sm:max-h-[500px]">
          <div className="flex-1 flex justify-between flex-col">
            <h1 className="sm:w-[80%]">
              Empowering You Through Engineering Brilliance
            </h1>
          </div>{" "}
          <div className="flex-1 absolute -left-10 overflow-x-clip sm:overflow-x-visible sm:-right-0 sm:relative">
            <Image
              src={"/assets/images/hero.webp"}
              alt="hero Image"
              width={1200}
              height={1200}
              priority
              className="w-[120vw] sm:w-[120%] relative sm:absolute -right-[70px] top-[180px] sm:top-0 h-auto sm:-right-48"
            />
          </div>
        </div>

        <div className="w-full sm:mt-10">
          <p className="text-primary text-md">RECOGNIZED & AWARDED BY</p>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full sm:w-fit gap-4 mt-4">
            {["award1.webp", "award2.webp", "award3.webp"].map(
              (image, index) => (
                <Image
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={index}
                  src={`/assets/images/${image}`}
                  alt={`Award ${index + 1}`}
                  width={100}
                  height={24}
                  priority
                  className="h-16 sm:h-16 w-auto object-contain"
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="mx-10 sm:mx-14 my-10 sm:my-20 ml-5">
        <WhoAreWe />
      </div>
      <div className="w-80 text-xl font-light mx-10 sm:mx-36 mt-4 sm:my-28">
        <p>
          At Red Nerds, we are a team of passionate design engineers dedicated
          to turning visionary concepts into reality. We thrive on challenges,
          turning them into opportunities to create innovative solutions.
        </p>
        <p className="mt-10 text-primary">
          Our mission is simple - to engineer excellence in every project we
          undertake.
        </p>
      </div>
    </>
  );
};

export default Hero;
