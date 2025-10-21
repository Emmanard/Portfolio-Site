"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data";

const RecentProjects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

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
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group w-[19rem] sm:w-[20rem] md:w-[21rem] min-h-[28rem] bg-black flex flex-col justify-between p-5 rounded-xl cursor-pointer overflow-hidden hover:scale-[1.02] transition-transform duration-300"
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
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                {item.type === "mobile"
                  ? ["Download Apk", "iOS Demo", "Code"].map((btn, i) => (
                      <a
                        key={i}
                        href={[item.apk, item.iosDemo, item.repo][i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple border border-purple rounded-md px-3 py-1.5 hover:bg-purple hover:text-white transition"
                      >
                        {btn}
                      </a>
                    ))
                  : ["Live", "Code"].map((btn, i) => (
                      <a
                        key={i}
                        href={[item.link, item.repo][i]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple border border-purple rounded-md px-3 py-1.5 hover:bg-purple hover:text-white transition"
                      >
                        {btn}
                      </a>
                    ))}
              </div>

              {item.type === "mobile" && item.instructions && (
                <div className="text-xs text-gray-400 mt-1 leading-snug text-center">
                  <p>
                    📱 <strong>Android:</strong> {item.instructions.apk}
                  </p>
                  <p>
                    🍎 <strong>iOS:</strong> {item.instructions.iosDemo}
                  </p>
                </div>
              )}

              <motion.div
                className="flex items-center justify-center mt-3 gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {item.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-full bg-[#1a1825] w-8 h-8 flex justify-center items-center"
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
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RecentProjects;
