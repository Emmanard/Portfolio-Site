// All copy on the site comes from this file. Facts are taken from the CV
// (public/Emmanuel_Omunizua_FullStackEngineer_CV.pdf); keep them in sync.

export const profile = {
  name: "Emmanuel Omunizua",
  role: "Full-Stack & React Native Engineer",
  location: "Lagos, Nigeria (WAT, UTC+1)",
  summary:
    "Three years in production. I own the API, job queues, payments, admin console and three live mobile apps for a US-founded delivery platform, and I've shipped a Gemini-powered chat feature to production.",
  email: "emmanuelomunizua@gmail.com",
  cv: "/Emmanuel_Omunizua_FullStackEngineer_CV.pdf",
  links: {
    github: "https://github.com/Emmanard",
    linkedin: "https://www.linkedin.com/in/emmanuel-omunizua-80b380301",
    x: "https://x.com/emmanard9?s=21",
    whatsapp: "https://wa.me/2348086804544",
  },
};

export const navItems = [
  { name: "Work", href: "#work" },
  { name: "Proof", href: "#proof" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// `logo` is optional: drop a real logo into public/logos/ and set the path.
// Entries without one render a monogram tile instead.
export const worksWith = [
  { name: "Mestranow", logo: "/logos/mestranow.jpg" },
  { name: "Uleval Technology", logo: "" },
  { name: "Vorbtech", logo: "" },
  { name: "Okike Consults", logo: "" },
  { name: "Aframp", note: "open source", logo: "/logos/aframp.webp" },
];

export const mestra = {
  title: "Mestra",
  kind: "Food delivery & logistics platform",
  role: "Lead React Native & Full-Stack Engineer · Mestranow",
  intro:
    "Three production mobile apps, a Next.js admin console and the API behind all of them. I'm the sole owner of the backend and work directly with the CEO and CTO.",
  points: [
    "Push delivery on BullMQ with per-recipient idempotency keys, so each FCM notification is processed exactly once.",
    "Order lifecycle as a server-enforced state machine, with live dispatch to drivers over Socket.IO.",
    "Exactly-once Razorpay and RazorpayX refunds and driver payouts.",
    "Expo EAS over-the-air updates and Sentry crash monitoring across the apps.",
  ],
  stack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Socket.IO"],
  apps: [
    {
      name: "Restaurant Owner",
      img: "/mestra-restaurant-owner.jpg",
      appStore:
        "https://apps.apple.com/us/app/mestra-restaurant-owner/id6751174158",
    },
    {
      name: "Consumer",
      img: "/mestra-consumer.jpg",
      appStore: "https://apps.apple.com/us/app/mestra/id6748778830",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.mestra.mestra_app",
    },
    {
      name: "Delivery Partner",
      img: "/mestra-delivery-partner.jpg",
      appStore:
        "https://apps.apple.com/us/app/mestra-delivery-partner/id6749651892",
    },
  ],
};

export const projects = [
  {
    title: "Mestranow Landing Page",
    tag: "Web · Company site",
    des: "Public landing site for Mestranow, the company behind the Mestra apps. Deployed on AWS EC2 behind nginx and PM2.",
    img: "/mestranow-landing.jpg",
    links: [{ label: "Live site", href: "https://mestranow.com/" }],
  },
  {
    title: "Spotter Flights",
    tag: "Web · React, TypeScript, MUI",
    des: "Flight search for Nigeria, Africa and worldwide: live airport suggestions, price-distribution charts, and destination backdrops from Unsplash. Falls back to mock data when live fares aren't available for a route.",
    img: "/spotter-flights.jpg",
    links: [
      { label: "Live site", href: "https://spotterflights-eight.vercel.app/" },
      { label: "Code", href: "https://github.com/Emmanard/Spotterflights" },
    ],
  },
  {
    title: "GRA Foods",
    tag: "Web · Food brand site",
    des: "Brand and ordering site for a Lagos food business: wholemeal pap and soy products, a bakery menu, and WhatsApp ordering.",
    img: "/gra-foods.jpg",
    links: [
      { label: "Live site", href: "https://gra-food.vercel.app/" },
      { label: "Code", href: "https://github.com/Emmanard/gra-food" },
    ],
  },
  {
    title: "EventWave",
    tag: "Full stack · MERN",
    des: "Event booking with seat locking (optimistic locking plus distributed reservation), Paystack webhooks and QR tickets. 100+ concurrent sessions with zero double-bookings.",
    img: "/ew.png",
    links: [
      { label: "Live site", href: "https://event-app-peach-six.vercel.app" },
      { label: "Code", href: "https://github.com/Emmanard/Event-App" },
    ],
  },
  {
    title: "TasteHub",
    tag: "Full stack · MERN, Redis, GraphQL",
    des: "Food ordering with Redis caching that cut query times by 60%, and a live vendor dashboard on WebSockets. 99% uptime at 30+ concurrent users.",
    img: "/th.png",
    links: [
      { label: "Live site", href: "https://tastehub-main-ten.vercel.app" },
      { label: "Code", href: "https://github.com/Emmanard/TasteHub" },
    ],
  },
  {
    title: "Convowave",
    tag: "Mobile · React Native, Socket.IO",
    des: "Real-time chat with automatic reconnection, offline message queuing and Redux persistence. 85%+ Jest coverage on core components.",
    img: "/Convowave.jpg",
    links: [
      { label: "Code", href: "https://github.com/Emmanard/chatty-with-app" },
      {
        label: "Android APK",
        href: "https://expo.dev/artifacts/eas/jbdB4cLxLnR4wTfgBdqfju.apk",
      },
    ],
  },
  {
    title: "DevSpax",
    tag: "Web · Developer challenge platform",
    des: "Responsive layouts, the upcoming-features page and API integrations in React, Tailwind and Redux. Source is private.",
    img: "/okike-devspax.png",
    links: [{ label: "Live site", href: "https://www.devspax.com/" }],
  },
];

export const proof = [
  { value: "3", label: "Production mobile apps shipped on iOS and Android" },
  {
    value: "76",
    label: "Item production security audit, including an SSRF fix",
  },
  { value: "5", label: "Merged open-source pull requests in Aframp" },
  { value: "65 → 90+", label: "Lighthouse score lifted on a client web app (Vorbtech)" },
];

export const openSourceContributions = [
  {
    title: "Offline network resilience",
    description:
      "Bounded, deduplicated retries and idempotent order sync, behind non-blocking offline banners.",
    prUrl: "https://github.com/kellymusk/Aframp/pull/388",
    tech: "TypeScript · React · Jest",
  },
  {
    title: "Network errors vs auth failures",
    description:
      "Session refresh now separates a network failure from an authentication failure, with tests.",
    prUrl: "https://github.com/kellymusk/Aframp/pull/769",
    tech: "TypeScript · React · Jest",
  },
  {
    title: "Live Stellar network status",
    description: "A live network status indicator for the wallet feature.",
    prUrl: "https://github.com/kellymusk/Aframp/pull/778",
    tech: "TypeScript · React",
  },
  {
    title: "PWA install prompt",
    description: "Install prompt for mobile browsers.",
    prUrl: "https://github.com/kellymusk/Aframp/pull/571",
    tech: "TypeScript · Next.js",
  },
  {
    title: "Mobile bottom navigation",
    description: "Responsive bottom navigation bar for mobile viewports.",
    prUrl: "https://github.com/kellymusk/Aframp/pull/570",
    tech: "TypeScript · React · Tailwind",
  },
];

export const skills = {
  strong: [
    "TypeScript",
    "React & Next.js",
    "React Native & Expo",
    "Node.js & Express",
    "REST API design",
    "PostgreSQL & Prisma",
    "Redis",
    "BullMQ job queues",
    "Socket.IO",
    "Zustand & React Query",
    "Payments & webhooks (Razorpay, Paystack)",
    "Security auditing",
  ],
  experienced: [
    "Tailwind CSS",
    "MUI v6",
    "Framer Motion",
    "Redux",
    "Jest & React Testing Library",
    "AWS (EC2, S3)",
    "GitHub Actions",
    "Expo EAS",
    "Sentry",
    "MongoDB",
    "GraphQL",
    "Gemini API",
    "Swift & SwiftUI",
  ],
};

export const principles = [
  {
    title: "The server decides.",
    body: "Order status changes go through an explicit allowed-transition table inside a transaction, so a client can never push an order into a state it shouldn't reach.",
  },
  {
    title: "Money and messages happen once.",
    body: "Idempotency keys on notifications, refunds and payouts, tested against real webhooks, so a retry never double-charges or double-sends.",
  },
  {
    title: "Fast UI, honest state.",
    body: "Optimistic updates with Zustand and React Query that roll back against server state. This cut redundant API calls by an estimated 40%.",
  },
  {
    title: "Ship with a safety net.",
    body: "Over-the-air updates through Expo EAS, source maps and Sentry on release, and Jest in CI, so problems surface before users report them.",
  },
  {
    title: "Async by default.",
    body: "Based in Lagos and working with US and India teams. Written updates and clear handoffs, with overlap for European and US hours.",
  },
];

export const workExperience = [
  {
    role: "Lead React Native & Full-Stack Engineer",
    company: "Mestranow",
    period: "Nov 2025 – Present",
    kind: "Remote, contract",
    points: [
      "Sole owner of a Node.js, Express, Prisma and PostgreSQL API serving three production apps and a Next.js admin console.",
      "Moved all three apps from Expo push to FCM with zero downtime, an estimated 98% delivery rate.",
      "Found and fixed an SSRF hole in an image-fetch endpoint during a 76-item production security audit.",
      "Deployed the admin console and mestranow.com to AWS EC2 behind nginx and PM2, with S3 storage under profile-based IAM.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-employed",
    period: "May 2025 – Present",
    kind: "Remote",
    points: [
      "Built a production gym chatbot on the Gemini API inside a React Native app, with session management and dynamic prompt engineering.",
      "Server-rendered Next.js and TypeScript apps with GitHub Actions and Expo EAS pipelines; caching improved API performance by 40%.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Vorbtech Innovative Solutions",
    period: "Dec 2024 – May 2025",
    kind: "Remote, contract",
    points: [
      "Lifted Lighthouse scores from 65 to 90+ through bundle optimization, lazy loading and code splitting.",
      "Set up Jest, React Testing Library, ESLint and Prettier standards, cutting post-release bugs by 50%.",
    ],
  },
  {
    role: "Mobile Development Intern",
    company: "Uleval Technology",
    period: "Jun 2024 – Dec 2024",
    kind: "Hybrid, Lagos",
    points: [
      "Cut video streaming latency on a React Native app from over 10 seconds to under 2 through caching, FFmpeg compression and CDN delivery.",
      "Added Appwrite auth, real-time sync and storage that carried 1,000+ sign-ups in the first month.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Okike Consults",
    period: "Aug 2023 – May 2024",
    kind: "Remote, contract",
    points: [
      "Shipped responsive layouts, an upcoming-features page and API integrations on DevSpax in React, Tailwind and Redux.",
    ],
  },
];

export const education = {
  degree: "B.Eng. Computer Engineering",
  school: "Caritas University, Enugu, Nigeria",
  year: "2025",
};

export const testimonials = [
  {
    quote:
      "Working with you for the creation of  TasteHub was exceptional. Your ability to create an intuitive food discovery platform that connects our community of food enthusiasts was remarkable. The seamless user experience and customer satisfaction exceeded our expectations. Your attention to detail in building our food ordering and bookmarking system was outstanding.",
    name: "Mr Emeka",
    title: "Owner, TasteHub",
  },
  {
    quote:
      "Your work on EventWave transformed my vision into reality. The comprehensive event management system you built handles everything from user authentication to real-time event booking flawlessly. Your expertise in full-stack development and dedication to delivering a scalable solution made EventWave the success it is today.",
    name: "Mr John Zhiri",
    title: "Owner, EventWave",
  },
  {
    quote:
      "Having you as our intern frontend and mobile developer on the Bayobo betting web app was a game-changer for Uleval. Your technical skills, obedience to leadership, and ability to take charge and deliver complex betting interfaces with precision were instrumental to our success. Your professionalism and innovative approach to development truly elevated our platform.",
    name: "Mr Gbenga",
    title: "CEO, Uleval Tech",
  },
];
