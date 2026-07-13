export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I turn client visions into responsive, high-performing UIs through clear collaboration and modern tooling.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Collaborate effectively with teams across multiple time zones — delivering on deadlines with async precision.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Core Stack",
    description:
      "Building fast, scalable, and accessible apps with a modern JavaScript ecosystem.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Frontend engineer passionate about creating scalable design systems and cross-platform apps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title:
      "Currently building a custom JS animation library to push UI motion boundaries.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const projects = [
  {
    id: 7,
    title: "Mestra — Consumer App",
    category: "Mobile · React Native · Full Stack",
    role: "React Native & Frontend Developer",
    des: "One of three production apps I helped architect for a food delivery and logistics platform — live order tracking, real-time sync, push notifications.",
    img: "/mestra-consumer.jpg",
    iconLists: ["/re.svg", "/ts.svg", "/socket-io.svg", "/cloud.svg"],
    appStore:
      "https://apps.apple.com/us/app/mestra/id6748778830",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.mestra.mestra_app",
    type: "store",
  },
  {
    id: 8,
    title: "Mestra — Restaurant Owner App",
    category: "Mobile · React Native · Dashboard",
    role: "React Native & Frontend Developer",
    des: "Merchant-facing dashboard app for order and menu management, part of the same 3-app ecosystem.",
    img: "/mestra-restaurant-owner.jpg",
    iconLists: ["/re.svg", "/ts.svg", "/socket-io.svg", "/cloud.svg"],
    appStore:
      "https://apps.apple.com/us/app/mestra-restaurant-owner/id6751174158",
    caption: "Available on the India App Store",
    type: "store",
  },
  {
    id: 1,
    title: "Aora -  Video Sharing App",
    category: "Mobile · React Native + Appwrite · Full Stack",
    role: "Sole developer (frontend + backend)",
    des: "Designed and built a cross-platform video-sharing app using React Native, Expo, and Appwrite for authentication and data storage. Achieved ~2s average video load (tested on mid-range Android) and delivered Android APK plus iOS demo for production preview.",
    img: "/Alora.png",
    iconLists: ["/re.svg", "/tail.svg", "/expo.svg", "/app.svg"],
    repo: "https://github.com/Emmanard/Alora",
    apk: "https://expo.dev/artifacts/eas/hjbb8fT8JVyN3uP8F18jKQ.apk",
    iosDemo: "https://youtube.com/shorts/SSzcSXc731I?si=O01TV44JfI0xdWHt",
    instructions: {
      apk: "Download and install on Android → enable unknown sources.",
      iosDemo: "Watch demo video (Expo preview not available).",
    },
    type: "mobile",
  },
  {
    id: 2,
    title: "EventWave - Full Stack Event Management Platform",
    category: "Full Stack · MERN",
    role: "Full-stack developer",
    des: "Developed an end-to-end event booking platform with JWT auth, Cloudinary media management, and analytics dashboard. Improved API latency by ~25% (measured via Postman) and built responsive organizer UI using React, Ant Design, and Redux Toolkit.",
    img: "/ew.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    link: "https://event-app-peach-six.vercel.app",
    repo: "https://github.com/Emmanard/Event-App",
    type: "web",
  },
  {
    id: 3,
    title: "TasteHub - Social Food Discovery Platform",
    category: "Full Stack · MERN ",
    role: "Full-stack developer (backend leaning)",
    des: "Built a scalable food ordering app with real-time orders, JWT-based auth, and Stripe payments. Optimized MongoDB queries to reduce page load time by ~30% (tested using Lighthouse) and improved checkout reliability with refined UI flows.",
    img: "/th.png",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/express.svg"],
    link: "https://tastehub-main-ten.vercel.app",
    repo: "https://github.com/Emmanard/TasteHub",
    type: "web",
  },
  {
    id: 4,
    title: "YC Directory - Startup Discovery Platform",
    category: "Full Stack · Next.js + Sanity + NextAuth",
    role: "Frontend + CMS integration developer",
    des: "Developed a content-driven web app using Next.js, Sanity CMS, and NextAuth for secure authentication. Implemented advanced startup search and dynamic filtering for 2,000+ entries, achieving sub-1s search latency (verified via Chrome DevTools).",
    img: "/yc.png",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/sanity.svg"],
    link: "https://yc-app-five.vercel.app",
    repo: "https://github.com/Emmanard/Yc-app",
    type: "web",
  },
  {
    id: 5,
    title: "💬 Convowave – Real-Time Chat Application",
    category: "Cross Platform · React Native + MERN + Socket.io · Full Stack",
    role: "Sole developer (frontend + backend)",
    des: "Built a real-time chat app using Expo, React Native, and Socket.io with a secure Node backend. Achieved sub-1s message delivery (tested locally via socket logs) and supported up to 500 simulated concurrent sessions using k6 load tests.",
    img: "/Convowave.jpg",
    iconLists: [
      "/re.svg",
      "/node.svg",
      "/mongo.svg",
      "/express.svg",
      "/ts.svg",
      "/cloud.svg",
      "/expo.svg",
      "/socket-io.svg",
    ],
    repo: "https://github.com/Emmanard/chatty-with-app",
    apk: "https://expo.dev/artifacts/eas/jbdB4cLxLnR4wTfgBdqfju.apk",
    iosDemo: "https://youtube.com/shorts/JaBC16RQzsw?si=FFfK1qYHKvSk7hXl",
    instructions: {
      apk: "Download and install on Android → enable unknown sources.",
      iosDemo: "Watch demo video (Expo preview not available).",
    },
    type: "mobile",
  },
  {
    id: 6,
    title: "Fitness App - Personal Health App",
    category: "Frontend · React + RapidAPI",
    role: "Frontend developer",
    des: "Created a responsive fitness dashboard using RapidAPI integrations for workout tracking and analytics. Implemented chart caching with React Query, reducing API calls by ~40% and improving session retention through visual progress tracking.",
    img: "/fa.png",
    iconLists: ["/re.svg", "/rapid.svg"],
    link: "https://fitness-app-wrmv.vercel.app",
    repo: "https://github.com/Emmanard/fitness-app",
    type: "web",
  },
];



// "@/data" file
export const testimonials = [
  {
    id: 1, // Add a unique id
    quote:
      "Working with you for the creation of  TasteHub was exceptional. Your ability to create an intuitive food discovery platform that connects our community of food enthusiasts was remarkable. The seamless user experience and customer satisfaction exceeded our expectations. Your attention to detail in building our food ordering and bookmarking system was outstanding.",
    name: " Mr Emeka",
    title: "Owner of TasteHub- abarikwuchukwuemeka@gmail.com",
  },
  {
    id: 2, // Add a unique id
    quote:
      "Your work on EventWave transformed my vision into reality. The comprehensive event management system you built handles everything from user authentication to real-time event booking flawlessly. Your expertise in full-stack development and dedication to delivering a scalable solution made EventWave the success it is today.",
    name: "Mr John Zhiri",
    title: "Owner of EventWave- johnzhiri8@gmail.com",
  },
  {
    id: 3, // Add a unique id
    quote:
      "Having you as our intern  frontend and mobile developer on the Bayobo betting web app and Aora was a game-changer for Uleval. Your technical skills,obidence to leadership, and ability to take charge and  deliver complex betting interfaces with precision were instrumental to our success. Your professionalism and innovative approach to  development truly elevated our platform.",
    name: "Mr Gbenga",
    title: "CEO of Uleval Tech - info@uleval.com",
  },
];
export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 4,
    title:
      "React Native & Frontend Developer | Mestra - Food Delivery & Logistics Platform (Contract)",
    location: "Remote | Nov 2025 - Present",
    desc: "Architected and shipped 3 production TypeScript + React Native apps (Consumer, Merchant, Delivery Partner) for iOS and Android, working directly with the CEO and CTO. Built real-time order tracking with Socket.io, optimistic UI updates with Zustand + React Query, and FCM push notification infrastructure across all three apps.",
    thumbnail: "/exp4.svg",
  },
  {
    id: 1,
    title: "Frontend Developer | Vorbtech Innovative Solutions",
    location: "Remote, Nigeria",
    desc: "Enhanced app performance by 15% through code splitting and lazy loading, improved engagement with dynamic React interfaces, and led Agile collaboration that boosted delivery speed and client satisfaction.",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Mobile Development Intern | Uleval Technology",
    location: "Hybrid, Lagos",
    desc: "Built cross-platform video and chat features with React Native and Appwrite, reducing latency from 10s to under 2s and supporting 1,000+ sign-ups. Delivered polished mobile UX with pull-to-refresh and real-time search.",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance Frontend & Mobile Developer | Self-Employed",
    location: "Remote",
    desc: "Delivered React and React Native solutions for multiple clients, integrating APIs and Redux for smoother data handling (2–3 s faster loads) and achieving 95% cross-browser compatibility in deployed projects.",
    thumbnail: "/exp3.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
