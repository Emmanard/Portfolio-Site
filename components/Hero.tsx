import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="pb-20 pt-36">
      <div>
        {/* Subtle silver spotlights — keeps the premium black/silver identity */}
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="rgba(255, 255, 255, 0.16)"
        />

        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="rgba(203, 213, 225, 0.10)"
        />

        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="rgba(148, 163, 184, 0.08)"
        />
      </div>

      {/* Background grid */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial fade */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Emmanuel Omunizua
          </h1>

          {/* Professional identity */}
          <p className="uppercase tracking-widest text-xs text-center text-gray-400 max-w-80 mb-6">
            Full-Stack Web & Mobile Engineer
          </p>

          {/* Main positioning statement */}
          <div className="text-center">
            <TextGenerateEffect
              words="I build products"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <TextGenerateEffect
              words="from the API to the interface."
              className="text-center text-[40px] md:text-5xl lg:text-6xl text-slate-400"
            />
          </div>

          {/* Core technologies */}
          <p className="tracking-widest text-xs text-center text-gray-400 max-w-80 mt-4">
            React · TypeScript · Next.js · React Native · Node.js
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <div
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer"
            >
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
                variant="mono"
              />
            </div>

            <a
              href="/Emmanuel_Omunizua_FullStackEngineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <MagicButton
                title="Resume"
                icon={<FaLocationArrow />}
                position="right"
                variant="mono"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
