import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuel-omunizua.vercel.app"),
  title: "Emmanuel Omunizua | React Native & Full Stack Engineer",
  description:
    "React Native and Full Stack Engineer specializing in production mobile apps and modern web platforms",
  openGraph: {
    title: "Emmanuel Omunizua | React Native & Full Stack Engineer",
    description:
      "React Native and Full Stack Engineer specializing in production mobile apps and modern web platforms",
    url: "https://emmanuel-omunizua.vercel.app",
    siteName: "Emmanuel Omunizua Portfolio",
    images: [
      {
        url: "/preview-image.jpg", // ✅ Now resolved to absolute URL
        width: 1200,
        height: 630,
        alt: "Emmanuel Omunizua Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emmanuel Omunizua | React Native & Full Stack Engineer",
    description:
      "React Native and Full Stack Engineer specializing in production mobile apps and modern web platforms",
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
