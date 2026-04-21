import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PosthogInit from "@/components/PosthogInit"; // 👈 Import this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vakeelassist.com"),
  title: {
    default: "Vakeel Assist",
    template: "%s | Vakeel Assist",
  },
  description: "AI-powered legal assistant for drafting, workflow, and case management.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vakeel Assist",
    description: "AI-powered legal assistant for drafting, workflow, and case management.",
    url: "/",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PosthogInit /> {/* 👈 PostHog tracking starts here */}
        {children}
      </body>
    </html>
  );
}
