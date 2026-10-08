"use client";
import { motion } from "framer-motion";
import { openSourceContributions } from "@/data";
import { FaCodeBranch, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const OpenSource = () => {
  return (
    <section id="opensource" className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        Open Source{" "}
        <span className="text-purple">Contributions</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mt-4"
      >
        Merged pull requests to a public repository. Anyone can open these links.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center items-stretch gap-10 mt-14 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {openSourceContributions.map((item) => (
          <motion.div
            style={{
              background: "linear-gradient(90deg, #04071D 0%, #0C0E23 100%)",
            }}
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group w-[19rem] sm:w-[20rem] md:w-[21rem] min-h-[22rem] bg-black flex flex-col justify-between p-5 rounded-xl cursor-pointer overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(148,163,184,0.2)] transition-all duration-300 border border-white/[0.08]"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FaCheckCircle className="text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium">Merged</span>
                <span className="text-xs text-gray-500 ml-auto">{item.mergedDate}</span>
              </div>

              <h2 className="text-lg lg:text-xl font-semibold text-white mt-2">
                {item.title}
              </h2>

              <div className="h-[6.5rem] overflow-y-auto mt-3 text-sm text-gray-400 leading-relaxed scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                <p>{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {item.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs text-gray-300 border border-gray-600/40 bg-gray-700/20 rounded-md px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <FaCodeBranch />
                <span>PR</span>
              </div>
              <a
                href={item.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-300 hover:text-white transition"
              >
                <span>View on GitHub</span>
                <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default OpenSource;
