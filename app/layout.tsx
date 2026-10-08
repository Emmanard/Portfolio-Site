import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuel-omunizua.vercel.app"),
  title: "Emmanuel Omunizua | Full-Stack Web & Mobile Engineer",

  description:
    "Full-Stack Web & Mobile Engineer building production products across React, Next.js, React Native, TypeScript and Node.js — from APIs and real-time systems to polished user interfaces.",

  openGraph: {
    title: "Emmanuel Omunizua | Full-Stack Web & Mobile Engineer",

    description:
      "Full-Stack Web & Mobile Engineer building production products across React, Next.js, React Native, TypeScript and Node.js — from APIs and real-time systems to polished user interfaces.",

    url: "https://emmanuel-omunizua.vercel.app",
    siteName: "Emmanuel Omunizua Portfolio",
    images: [
      {
        url: "/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Emmanuel Omunizua — Full-Stack Web & Mobile Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Omunizua | Full-Stack Web & Mobile Engineer",

    description:
      "Full-Stack Web & Mobile Engineer building production products across React, Next.js, React Native, TypeScript and Node.js — from APIs and real-time systems to polished user interfaces.",

    images: ["/preview-image.jpg"],
  },
  icons: {
    icon: "/omini-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
