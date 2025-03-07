/* eslint-disable react/display-name */
import Image from "next/image";
import React from "react";
import { ContactForm } from "./contact-form";

// Memoize company logos to prevent unnecessary re-renders
const companyLogos = [
  { src: "/assets/images/tessol.webp", alt: "Tessol" },
  { src: "/assets/images/thinktac.webp", alt: "ThinkTac" },
  { src: "/assets/images/nosh.webp", alt: "Nosh" },
  { src: "/assets/images/scikraft.webp", alt: "Scikraft" },
  { src: "/assets/images/vayavya.webp", alt: "Vayavya" },
  { src: "/assets/images/iitg.webp", alt: "IITG" },
  { src: "/assets/images/etherwhere.webp", alt: "EtherWhere" },
  { src: "/assets/images/yudurobotics.webp", alt: "Yudu Robotics" },
  { src: "/assets/images/anexgate.webp", alt: "AnexGATE" },
];

const Companies = () => {
  // Memoize the logo grid to prevent unnecessary re-renders
  const LogoGrid = React.memo(() => (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-x-4 md:gap-y-12">
      {companyLogos.map((logo, index) => (
        <Image
          key={`company-logo-${
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            index
          }`}
          src={logo.src}
          alt={logo.alt}
          width={500}
          height={500}
          priority={index < 4}
          loading={index < 4 ? "eager" : "lazy"}
          className="w-[calc(50%-1rem)] md:w-[calc(25%-1rem)] object-contain h-12"
        />
      ))}
    </div>
  ));

  return (
    <div className="bg-primary/20 px-10 sm:px-36 py-28 mt-20 space-y-16 relative">
      <div className="flex text-primary font-bold items-center justify-center gap-4">
        <p>/</p>
        <p className="text-right uppercase">
          Tech Titans <br className="md:hidden" /> We Serve
        </p>
        <p>/</p>
      </div>

      {/* company icons */}
      <LogoGrid />

      {/* form contact */}
      <div className="flex flex-col relative max-h-[500px] sm:max-h-52 sm:flex-row gap-8">
        <div className="flex flex-1 flex-col items-start text-left space-y-4">
          <h1 className="font-bold">
            Got a product that <br className="md:hidden" />
            we can help you design?
          </h1>
          <h1 className="text-primary font-bold">Let&apos;s talk!</h1>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Companies;
