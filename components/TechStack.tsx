"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiRedux,
  SiFirebase,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiGithub,
} from "react-icons/si";

const TechStack = () => {
  const techCategories = [
    {
      title: "Mobile",
      items: [
        { name: "React Native", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Expo", icon: SiReact, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
        { name: "Express", icon: SiExpress, color: "text-gray-300" },
        { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#336791]" },
        { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
        { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      ],
    },
  ];

  return (
    <section className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        Tech <span className="text-silver-400">Stack</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mt-4"
      >
        The tools and technologies I use to build production applications.
      </motion.p>

      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        {techCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 border border-white/[0.08] rounded-xl bg-black"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/[0.05] rounded-lg border border-white/[0.1]"
                >
                  <item.icon className={item.color} size={20} />
                  <span className="text-sm text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
