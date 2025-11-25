import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDock } from "@/components/layout/floating-dock";
import { FooterNew } from "@/components/layout/footer-new";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { NoiseOverlay } from "@/components/ui/noise-overlay";
import { AuroraBackground } from "@/components/ui/aurora-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dileep Kumar C | Full Stack Developer",
  description: "Portfolio of Dileep Kumar C — showcasing full stack development and AI-based projects.",
  keywords: ["Dileep Kumar C", "Full Stack Developer", "Portfolio", "Web Developer", "Java Developer", "AI Tools"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NoiseOverlay />
          <CustomCursor />
          <AuroraBackground className="dark:hidden" />
          <main className="min-h-screen font-sans">
            {children}
          </main>
          <FloatingDock />
          <FooterNew />
        </ThemeProvider>
      </body>
    </html>
  );
}
