import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const title = "Emmanuel Omunizua | Full-Stack & React Native Engineer";
const description =
  "Full-stack and React Native engineer with three years in production. Owns the API, job queues, payments, admin console and three live mobile apps for a US-founded delivery platform.";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuel-omunizua.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://emmanuel-omunizua.vercel.app",
    siteName: "Emmanuel Omunizua Portfolio",
    images: [
      {
        url: "/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Omunizua — Full-Stack & React Native Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image-v2.jpg"],
  },
  icons: { icon: "/omini-logo.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Skip the welcome screen on repeat views in a session, or with reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.intro="skip"}catch(e){}`,
          }}
        />
        <noscript>
          <style>{`#intro{display:none!important}.tw-rest{visibility:visible!important}`}</style>
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${serif.variable} ${mono.variable} font-sans bg-[#fafafa] text-[#0a0a0a] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
