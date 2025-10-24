"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import { motion, useAnimation } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiChakraui,
  SiJquery,
  SiFirebase,
  SiAmazon,
  SiJest,
  SiRedux,
  SiFramer,
  SiVercel,
  SiGit,
  SiDocker,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
      className
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("emmanard9@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 min-h-[22rem]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
              fill
              sizes="100%"
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
              fill
              sizes="100%"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>
          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="relative w-full overflow-hidden py-4">
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-white font-bold text-xl tracking-wide">
                  Tech Stack
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-400 font-medium">
                    15+ Technologies
                  </span>
                </div>
              </div>
              <TechStackCarousel />
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                  height={200}
                  width={400}
                />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TechStackCarousel = () => {
  const stacks = [
    {
      name: "React",
      Icon: SiReact,
      color: "text-[#61DAFB]",
      level: "expert",
      category: "Frontend",
    },
    {
      name: "Next.js",
      Icon: SiNextdotjs,
      color: "text-white",
      level: "expert",
      category: "Frontend",
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
      color: "text-[#3178C6]",
      level: "expert",
      category: "Frontend",
    },
    {
      name: "React Native",
      Icon: TbBrandReactNative,
      color: "text-[#61DAFB]",
      level: "advanced",
      category: "Mobile",
    },
    {
      name: "Tailwind",
      Icon: SiTailwindcss,
      color: "text-[#06B6D4]",
      level: "expert",
      category: "Styling",
    },
    {
      name: "Chakra UI",
      Icon: SiChakraui,
      color: "text-[#319795]",
      level: "advanced",
      category: "Styling",
    },
    {
      name: "Framer",
      Icon: SiFramer,
      color: "text-[#0055FF]",
      level: "advanced",
      category: "Animation",
    },
    {
      name: "Node.js",
      Icon: SiNodedotjs,
      color: "text-[#339933]",
      level: "advanced",
      category: "Backend",
    },
    {
      name: "Express",
      Icon: SiExpress,
      color: "text-gray-300",
      level: "advanced",
      category: "Backend",
    },
    {
      name: "MongoDB",
      Icon: SiMongodb,
      color: "text-[#47A248]",
      level: "advanced",
      category: "Database",
    },
    {
      name: "Firebase",
      Icon: SiFirebase,
      color: "text-[#FFCA28]",
      level: "intermediate",
      category: "Cloud",
    },
    {
      name: "AWS",
      Icon: SiAmazon,
      color: "text-[#FF9900]",
      level: "intermediate",
      category: "Cloud",
    },
    {
      name: "Vercel",
      Icon: SiVercel,
      color: "text-white",
      level: "advanced",
      category: "Deployment",
    },
    {
      name: "Git",
      Icon: SiGit,
      color: "text-[#F05032]",
      level: "expert",
      category: "Tools",
    },
    {
      name: "Docker",
      Icon: SiDocker,
      color: "text-[#2496ED]",
      level: "intermediate",
      category: "DevOps",
    },
    {
      name: "Jest",
      Icon: SiJest,
      color: "text-[#C21325]",
      level: "intermediate",
      category: "Testing",
    },
    {
      name: "Redux",
      Icon: SiRedux,
      color: "text-[#764ABC]",
      level: "advanced",
      category: "State",
    },
    {
      name: "jQuery",
      Icon: SiJquery,
      color: "text-[#0769AD]",
      level: "intermediate",
      category: "Legacy",
    },
  ];
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    if (!isHovered)
      controls.start({
        x: [0, -2000],
        transition: { duration: 30, ease: "linear", repeat: Infinity },
      });
    else controls.stop();
  }, [isHovered, controls]);

  const colors = {
    expert: "bg-emerald-500/20 border-emerald-500/40",
    advanced: "bg-blue-500/20 border-blue-500/40",
    intermediate: "bg-purple-500/20 border-purple-500/40",
  };
  const dots = {
    expert: "bg-emerald-400",
    advanced: "bg-blue-400",
    intermediate: "bg-purple-400",
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-3 whitespace-nowrap"
        animate={controls}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...stacks, ...stacks, ...stacks].map((s, i) => (
          <motion.div
            key={i}
            className={`relative flex items-center gap-3 bg-[#10132E]/80 backdrop-blur-md border ${
              colors[s.level as keyof typeof colors]
            } rounded-xl px-4 py-2.5 shadow-lg hover:scale-110 hover:shadow-[0_0_20px_rgba(90,95,255,0.3)] transition-all duration-300 cursor-pointer group`}
            onMouseEnter={() => setHoveredTech(s.name + i)}
            onMouseLeave={() => setHoveredTech(null)}
            whileHover={{ y: -5 }}
          >
            {s.level === "expert" && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse"></div>
            )}
            <s.Icon
              className={`${s.color} text-2xl flex-shrink-0 drop-shadow-[0_0_8px_currentColor] group-hover:scale-110 transition-transform`}
            />
            <div className="flex flex-col">
              <span className="font-semibold text-sm text-white/90">
                {s.name}
              </span>
              <span className="text-[10px] text-gray-400 capitalize">
                {s.category}
              </span>
            </div>
            {hoveredTech === s.name + i && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[#0d0d1f] border border-white/10 rounded-lg px-3 py-1.5 shadow-xl z-50 whitespace-nowrap"
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      dots[s.level as keyof typeof dots]
                    }`}
                  ></div>
                  <span className="text-xs text-white capitalize">
                    {s.level}
                  </span>
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0d0d1f] border-l border-t border-white/10 rotate-45"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#04071d] to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#04071d] to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default TechStackCarousel;
