"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-12 lg:px-24 bg-black-100 text-white flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          I'm{" "}
          <span className="text-white font-semibold">Emmanuel Omunizua</span>, a
          Frontend & Mobile App Engineer passionate about transforming complex
          ideas into intuitive digital experiences. I specialize in building
          scalable and interactive products with{" "}
          <span className="text-purple font-semibold">React</span>,{" "}
          <span className="text-purple font-semibold">React Native</span>,{" "}
          <span className="text-purple font-semibold">Next.js</span>, and{" "}
          <span className="text-purple font-semibold">TypeScript</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          My experience spans both web and mobile development — from designing
          and implementing rich, responsive UIs to optimizing performance and
          integrating scalable backend systems. I've built products like{" "}
          <span className="text-white font-medium">TasteHub</span> (a MERN food
          ordering platform),{" "}
          <span className="text-white font-medium">EventWave</span> (ticketing
          and payment platform with Paystack integration),{" "}
          <span className="text-white font-medium">Aora</span> (a video sharing
          app powered by Appwrite), and{" "}
          <span className="text-white font-medium">Chatty</span> (a real-time
          chat system using Socket.io).
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          At{" "}
          <span className="text-white font-semibold">
            Vorbtech Innovative Solutions
          </span>
          , I enhanced user engagement by 15% through interactive UI updates and
          improved load times by 15% using bundling and lazy loading. During my
          internship at <span className="text-white font-semibold">Uleval</span>
          , I helped scale mobile performance and reduced streaming latency by
          over 80% using React Native caching and Appwrite integrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-300"
        >
          <p>⚡ React / Next.js</p>
          <p>⚡ React Native (Expo)</p>
          <p>⚡ TypeScript / JavaScript</p>
          <p>⚡ Tailwind CSS</p>
          <p>⚡ Node.js / Express</p>
          <p>⚡ MongoDB / Supabase</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-base mt-10"
        >
          I'm driven by curiosity and precision — always seeking to build
          interfaces that are not only beautiful but also robust, accessible,
          and performance-focused. Let's create something meaningful together.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
