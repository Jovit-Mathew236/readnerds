import Image from "next/image";
import React from "react";

const companyLogos = [
  { src: "/assets/images/tessol.png", alt: "Tessol" },
  { src: "/assets/images/thinktac.png", alt: "ThinkTac" },
  { src: "/assets/images/nosh.png", alt: "Nosh" },
  { src: "/assets/images/scikraft.png", alt: "Scikraft" },
  { src: "/assets/images/vayavya.png", alt: "Vayavya" },
  { src: "/assets/images/iitg.png", alt: "IITG" },
  { src: "/assets/images/etherwhere.png", alt: "EtherWhere" },
  { src: "/assets/images/yudurobotics.png", alt: "Yudu Robotics" },
  { src: "/assets/images/anexgate.png", alt: "AnexGATE" },
];

const Companies = () => {
  return (
    <div className="bg-primary/20 px-10 sm:px-36 py-28 mt-20 space-y-16">
      <div className="flex text-primary font-bold items-center justify-center gap-4">
        <p>/</p>
        <p className="text-right uppercase">
          Tech Titans <br className="md:hidden" /> We Serve
        </p>
        <p>/</p>
      </div>

      {/* company icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {companyLogos.map((logo, index) => (
          <Image
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={500}
            height={500}
            priority
            className="w-full object-contain h-12"
          />
        ))}
      </div>

      {/* form contact */}
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-1 flex-col items-start text-left space-y-4">
          <h1 className=" font-bold">
            Gotta product that <br className="md:hidden" />
            we can help you design?
          </h1>
          <h1 className="text-primary font-bold">Let&apos;s talk!</h1>
        </div>
        <div className="flex-1">form</div>
      </div>
    </div>
  );
};

export default Companies;
