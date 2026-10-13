"use client";
import React from "react";
import { motion } from "framer-motion";

const Learning = () => {
  return (
    <section className="py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="heading text-center"
      >
        What I'm <span className="text-silver-400">learning now</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 max-w-2xl mx-auto mt-4"
      >
        Technology moves fast. I stay current by actively learning and applying new skills.
      </motion.p>

      <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="p-6 border border-white/[0.08] rounded-xl bg-black"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Advanced TypeScript Patterns</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Deepening understanding of generics, utility types, and type-safe API design to write more robust and maintainable code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-6 border border-white/[0.08] rounded-xl bg-black"
        >
          <h3 className="text-xl font-semibold text-white mb-3">State Management Patterns</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Exploring Zustand for simpler state management and React Server Components for better performance in Next.js applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="p-6 border border-white/[0.08] rounded-xl bg-black"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Studying bundle analysis, code splitting strategies, and render optimization techniques to improve load times and Core Web Vitals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="p-6 border border-white/[0.08] rounded-xl bg-black"
        >
          <h3 className="text-xl font-semibold text-white mb-3">Testing Strategies</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Building comprehensive test suites with Jest and React Testing Library to catch bugs early and ensure reliable deployments.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
