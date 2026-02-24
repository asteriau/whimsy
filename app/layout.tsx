import "./globals.css";
import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Figtree } from "next/font/google";
import { Suspense } from "react";
import GrainientLoader from "@/components/background/useGrainient";

export const metadata: Metadata = {
  title: "whimsy",
  description: "world's worst startpage",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#8DA3B9",
};

const mono = IBM_Plex_Mono({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const figtree = Figtree({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-figtree",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mono.variable} ${figtree.variable}`}
    >
      <body>
        <div className="text-paradise-fg min-h-screen overflow-x-hidden flex items-center justify-center">
          <div className="fixed left-0 top-0 w-screen h-screen bg-paradise-bg -z-30" />
          <Suspense>
            <GrainientLoader />
          </Suspense>
          <div className="w-full max-w-5xl px-6">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
