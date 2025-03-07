import { VelocityScroll } from "../magicui/scroll-based-velocity";
import FloatingSlash from "@/public/assets/svgs/floating";
import Image from "next/image";
import CadDesign from "@/public/assets/svgs/cadDesign";
import RapidProto from "@/public/assets/svgs/RapidProto";
import MoldingCasting from "@/public/assets/svgs/moldingCasting";
import EsdmExpertise from "@/public/assets/svgs/esdmExpertise";
import ThreeDPrinting from "@/public/assets/svgs/threeDPrinting";
import LaserCNC from "@/public/assets/svgs/laserCNC";
import Packing from "@/public/assets/svgs/packing";

// import Slashes from "@/public/assets/svgs/slashs";

const processData = [
  {
    id: 1,
    title: "CAD DESIGN",
    description:
      "Transforming your ideas into precise models for cost-effective, precision-driven development.",
    icon: CadDesign,
  },
  {
    id: 2,
    title: "RAPID PROTOTYPING",
    description:
      "Ensuring the reliability and flawless performance of electronic components in your products.",
    icon: RapidProto, // Replace with RapidPrototype when available
  },
  {
    id: 3,
    title: "ESDM EXPERTISE",
    description:
      "Streamlining the development process for faster time-to-market and cost-efficient production.",
    icon: EsdmExpertise, // Replace with EsdmExpertise when available
  },
  {
    id: 4,
    title: "MOLDING & CASTING",
    description:
      "Bringing your intricate designs to life with precision and impeccable quality.",
    icon: MoldingCasting, // Replace with MoldingJointing when available
  },
  {
    id: 5,
    title: "3D PRINTING",
    description:
      "Rapidly turning ideas into tangible prototypes, saving you time and resources.",
    icon: ThreeDPrinting, // Replace with ThreeDPrinting when available
  },
  {
    id: 6,
    title: "LASER CNC",
    description:
      "Delivering top-quality components with unmatched accuracy and precision.",
    icon: LaserCNC, // Replace with LaserCNC when available
  },
  {
    id: 7,
    title: "PACKING SOLUTIONS",
    description:
      "Enhancing product presentation while protecting your items and elevating your brand image.",
    icon: Packing, // Replace with LaserCNC when available
  },
];

const ProcessCard = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.FC;
}) => (
  <div className="flex flex-col gap-4">
    <div className="flex justify-center items-center h-28 w-28 border border-white rounded-xl bg-white/20 backdrop-blur-lg hover:bg-white/10 transition-all">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold w-28 mb-0">{title}</h3>
    <p className="text-lg font-thin w-60">{description}</p>
  </div>
);

type ScrollDirection = "left" | "right";

interface ScrollItem {
  direction: ScrollDirection;
  text: string;
  span: string;
}

const scrollData: ScrollItem[] = [
  { direction: "left", text: "From", span: "Concept Design" },
  { direction: "right", text: "To", span: "Manufacturing" },
] as const;

const Process = () => {
  return (
    <div className="relative mt-32 w-screen overflow-x-clip">
      {["/assets/images/upperlayer.webp", "/assets/images/lowerlayer.webp"].map(
        (src: string, index: number) => (
          <div
            key={src}
            className={`absolute right-4 sm:right-10 ${
              index === 0
                ? "-top-32 md:-top-60 z-30"
                : "-top-16 md:-top-40 z-10 text-primary"
            }`}
          >
            <Image
              src={src}
              alt="3d illustration"
              width={1200}
              height={1200}
              priority
              className="w-56 md:w-96"
            />
          </div>
        )
      )}

      <div className="relative w-screen left-0 z-20">
        {scrollData.map((item) => (
          <VelocityScroll
            key={item.text}
            numRows={1}
            direction={item.direction}
            defaultVelocity={2}
          >
            <div className="flex justify-center items-center">
              <FloatingSlash />
              <p className="font-light italic sm:text-5xl break-words">
                {item.text} <br className="sm:hidden" />
                <span className="text-primary font-bold sm:font-light">
                  {item.span}
                </span>
              </p>
            </div>
          </VelocityScroll>
        ))}
      </div>

      {/* <div className="relative"> */}
      <div className="absolute -left-28 sm:left-4 top-[630px] sm:top-40 z-30">
        <Image
          src={"/assets/images/hyperbola.webp"}
          alt="hero Image"
          width={1200}
          height={1200}
          priority
          className="w-56 md:w-96"
        />
      </div>
      {/* </div> */}

      <div className="relative z-50 sm:z-30 px-10 sm:px-36 mt-28 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {processData.map(({ id, title, description, icon: Icon }) => (
          <ProcessCard
            key={id}
            title={title}
            description={description}
            Icon={Icon}
          />
        ))}
        <div className="absolute -bottom-32 -left-10 md:left-auto md:bottom-0 md:right-36 z-0">
          <Image
            src={"/assets/images/slashes.webp"}
            alt="hero Image"
            width={1200}
            height={1200}
            priority
            className="w-56 md:w-96"
          />
        </div>
      </div>
      <div className="absolute top-[63%] md:top-auto -right-36 md:left-auto md:-bottom-72 md:-right-32 z-40">
        <Image
          src={"/assets/images/cylander.webp"}
          alt="hero Image"
          width={1200}
          height={1200}
          priority
          className="w-[550px] md:w-[500px]"
        />
      </div>
    </div>
  );
};

export default Process;
