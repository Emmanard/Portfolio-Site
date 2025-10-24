"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data";
import {
  SiReact,
  SiTailwindcss,
  SiExpo,
  SiAppwrite,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiSanity,
  SiNextdotjs,
  SiSocketdotio,
  SiCloudinary,
} from "react-icons/si";
import {
  FaCode,
  FaDownload,
  FaExternalLinkAlt,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { useState } from "react";

const iconMap: Record<string, any> = {
  "/re.svg": SiReact,
  "/tail.svg": SiTailwindcss,
  "/expo.svg": SiExpo,
  "/app.svg": SiAppwrite,
  "/node.svg": SiNodedotjs,
  "/mongo.svg": SiMongodb,
  "/express.svg": SiExpress,
  "/ts.svg": SiTypescript,
  "/sanity.svg": SiSanity,
  "/next.svg": SiNextdotjs,
  "/socket-io.svg": SiSocketdotio,
  "/cloud.svg": SiCloudinary,
};

const iconColors: Record<string, string> = {
  "/re.svg": "text-[#61DAFB]",
  "/tail.svg": "text-[#06B6D4]",
  "/expo.svg": "text-white",
  "/app.svg": "text-[#FD366E]",
  "/node.svg": "text-[#339933]",
  "/mongo.svg": "text-[#47A248]",
  "/express.svg": "text-gray-300",
  "/ts.svg": "text-[#3178C6]",
  "/sanity.svg": "text-[#F03E2F]",
  "/next.svg": "text-white",
  "/socket-io.svg": "text-white",
  "/cloud.svg": "text-[#3448C5]",
  "/rapid.svg": "text-[#0055DA]",
};

const RecentProjects = () => {
  const [expandedInstructions, setExpandedInstructions] = useState<
    number | null
  >(null);

  return (
    <section id="projects" className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </motion.h1>

      <motion.div
        className="flex flex-wrap justify-center items-stretch gap-10 mt-14 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {projects.map((item) => (
          <motion.div
            style={{
              background: "linear-gradient(90deg, #04071D 0%, #0C0E23 100%)",
            }}
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-[19rem] sm:w-[20rem] md:w-[21rem] min-h-[28rem] bg-black flex flex-col justify-between p-5 rounded-xl cursor-pointer overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 border border-white/[0.08]"
          >
            <div>
              <div className="relative w-full h-[12rem] overflow-hidden rounded-lg">
                <Image
                  src="/bg.png"
                  alt="bg"
                  fill
                  className="absolute w-full h-full object-cover opacity-30"
                  priority
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="absolute bottom-0 w-full object-contain z-10"
                    priority
                  />
                </motion.div>
              </div>

              <h2 className="text-lg lg:text-xl font-semibold text-white mt-4">
                {item.title}
              </h2>
              {item.category && (
                <p className="text-xs text-purple mt-1 font-medium">
                  {item.category}
                </p>
              )}
              {item.role && (
                <p className="text-xs text-gray-400 mt-1 italic">{item.role}</p>
              )}
              <div className="h-[6.5rem] overflow-y-auto mt-2 text-sm text-gray-400 leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <p>{item.des}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {item.type === "mobile" ? (
                  <>
                    <a
                      href={item.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-emerald-400 border border-emerald-400/40 bg-emerald-500/10 rounded-md px-3 py-1.5 hover:bg-emerald-500/20 hover:border-emerald-400 transition"
                    >
                      <FaAndroid className="text-sm" /> APK
                    </a>
                    <a
                      href={item.iosDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-300 border border-gray-500/40 bg-gray-500/10 rounded-md px-3 py-1.5 hover:bg-gray-500/20 hover:border-gray-400 transition"
                    >
                      <FaApple className="text-sm" /> iOS Demo
                    </a>
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-purple border border-purple/40 bg-purple/10 rounded-md px-3 py-1.5 hover:bg-purple/20 hover:border-purple transition"
                    >
                      <FaCode className="text-sm" /> Code
                    </a>
                  </>
                ) : (
                  <>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-blue-400 border border-blue-400/40 bg-blue-500/10 rounded-md px-3 py-1.5 hover:bg-blue-500/20 hover:border-blue-400 transition"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live
                    </a>
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-purple border border-purple/40 bg-purple/10 rounded-md px-3 py-1.5 hover:bg-purple/20 hover:border-purple transition"
                    >
                      <FaCode className="text-sm" /> Code
                    </a>
                  </>
                )}
              </div>

              {item.type === "mobile" && item.instructions && (
                <div className="relative">
                  <button
                    onClick={() =>
                      setExpandedInstructions(
                        expandedInstructions === item.id ? null : item.id
                      )
                    }
                    className="text-xs text-gray-400 hover:text-purple transition underline decoration-dotted mx-auto block"
                  >
                    {expandedInstructions === item.id ? "Hide" : "View"} setup
                    guide
                  </button>
                  {expandedInstructions === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-gray-400 mt-2 leading-snug bg-black/40 rounded-lg p-3 border border-white/5"
                    >
                      <p className="flex items-start gap-2">
                        <FaAndroid className="text-emerald-400 mt-0.5 flex-shrink-0" />{" "}
                        <span>
                          <strong>Android:</strong> {item.instructions.apk}
                        </span>
                      </p>
                      <p className="flex items-start gap-2 mt-1.5">
                        <FaApple className="text-gray-300 mt-0.5 flex-shrink-0" />{" "}
                        <span>
                          <strong>iOS:</strong> {item.instructions.iosDemo}
                        </span>
                      </p>
                    </motion.div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-center mt-3 gap-1.5 flex-wrap">
                {item.iconLists.map((icon, index) => {
                  const IconComponent = iconMap[icon] || null;
                  const color = iconColors[icon] || "text-white";
                  return IconComponent ? (
                    <div
                      key={index}
                      className="border border-white/10 rounded-lg bg-[#10132E]/60 backdrop-blur-sm w-9 h-9 flex justify-center items-center hover:scale-110 hover:border-purple/40 transition-all duration-300 group/icon"
                    >
                      <IconComponent
                        className={`${color} text-xl drop-shadow-[0_0_6px_currentColor] group-hover/icon:scale-110 transition-transform`}
                      />
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="border border-white/10 rounded-lg bg-[#1a1825] w-9 h-9 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <Image
                        src={icon}
                        alt="tech"
                        width={24}
                        height={24}
                        className="p-1.5"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
