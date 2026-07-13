"use client";
import React, { useCallback } from "react";
import {
  PhoneCall,
  Mail,
  MessageCircle,
  Clock,
  LinkedinIcon,
  LucideTwitter,
  GithubIcon,
} from "lucide-react";
import { Button } from "./ui/MovingBorders";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";

const CONTACT_ITEMS = [
  {
    id: "phone",
    title: "Call Us",
    value: "+234 8086804544",
    subtitle: "Available Mon-Sat, 9am - 6pm",
    action: "Tap to call",
    bgClass: "bg-green-500",
    icon: <PhoneCall size={20} />,
  },
  {
    id: "email",
    title: "Email Support",
    value: "emmanuelomunizua@gmail.com",
    subtitle: "We typically respond within 24 hours",
    action: "Send email",
    bgClass: "bg-blue-500",
    icon: <Mail size={20} />,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Chat",
    value: "https://wa.me/2348086804544",
    subtitle: "Chat with us instantly on WhatsApp",
    action: "Start chat",
    bgClass: "bg-green-400",
    icon: <MessageCircle size={20} />,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/emmanuel-omunizua-80b380301",
    subtitle: "Connect with me instantly on LinkedIn",
    action: "Connect",
    bgClass: "bg-blue-800",
    icon: <LinkedinIcon size={20} />,
  },
  {
    id: "twitter",
    title: "X",
    value: "https://x.com/emmanard9?s=21",
    subtitle: "Connect with me instantly on X",
    action: "Follow on X",
    bgClass: "bg-neutral-900",
    icon: <LucideTwitter size={20} />,
  },
  {
    id: "github",
    title: "GitHub",
    value: "https://github.com/Emmanard",
    subtitle: "Connect with me instantly on GitHub",
    action: "Star on GitHub",
    bgClass: "bg-neutral-900",
    icon: <GithubIcon size={20} />,
  },
];

const Contact: React.FC = () => {
  const handleContactClick = useCallback((type: string, value: string) => {
    const actions: Record<string, () => void> = {
      phone: () => window.open(`tel:${value}`, "_self"),
      email: () =>
        window.open(
          `mailto:${value}?subject=Support%20Request&body=Hello,%20I%20need%20help%20with...`,
          "_blank"
        ),
      whatsapp: () => window.open(value, "_blank", "noopener,noreferrer"),
      github: () => window.open(value, "_blank", "noopener,noreferrer"),
      twitter: () => window.open(value, "_blank", "noopener,noreferrer"),
      linkedin: () => window.open(value, "_blank", "noopener,noreferrer"),
    };
    actions[type]?.();
  }, []);

  // Framer Motion variants for card animations
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.10,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="flex flex-col items-center gap-8 px-6 md:px-8 lg:px-12 py-12 bg-black-100 min-h-screen relative" id="contact">
      <div className="flex flex-col items-center relative z-[1]">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div className="cursor-pointer relative z-[1]">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>

        {/* Contact Cards */}
        <div className="flex flex-wrap justify-center items-stretch gap-10 mt-14 p-6 relative z-[1]">
          {CONTACT_ITEMS.map(
            ({ id, title, value, subtitle, action, bgClass, icon }, i) => (
              <motion.div
                key={id}
                className="bg-black-100 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-purple/40 hover:shadow-purple/10 transform hover:-translate-y-1 transition-all flex flex-col gap-4 w-[300px]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`${bgClass} w-12 h-12 flex items-center justify-center rounded-lg text-white`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                </div>

                <div className="text-muted text-sm flex flex-col gap-1">
                  <div className="text-base font-medium text-foreground">
                    {value.includes("http") ? "Quick Support" : value}
                  </div>
                  {id === "phone" ? (
                    <div className="flex text-purple items-center gap-1 text-sm text-muted">
                      <Clock size={16} />
                      {subtitle}
                    </div>
                  ) : (
                    <div className="text-purple">{subtitle}</div>
                  )}
                </div>

                {/* Action Button with border defined */}
                <Button
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  className="mt-4 w-full relative z-[1] border border-purple/40"
                >
                  <span
                    onClick={() => handleContactClick(id, value)}
                    className="inline-block font-medium text-primary hover:text-primary/80 cursor-pointer px-4 py-2"
                  >
                    {action}
                  </span>
                </Button>
              </motion.div>
            )
          )}
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-10 relative z-[1]">
          <a
            href="/EMMANUEL OMUNIZUA -  FRONTEND & MOBILE APP ENGINEER CV .pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <MagicButton
              title="Download CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
