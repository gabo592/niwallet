import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/common/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NiWallet",
  description:
    "Aplicación Web dedicada a la administración de finanzas personales.",
  applicationName: "NiWallet",
  authors: [{ name: "Gabriel Avilés", url: "https://github.com/gabo592" }],
  generator: "Next.js",
  keywords: [
    "app",
    "web",
    "ahorro",
    "ni",
    "wallet",
    "niwallet",
    "finanzas",
    "personales",
  ],
  referrer: "no-referrer-when-downgrade",
  creator: "Gabriel Avilés",
  publisher: "Vercel",
  manifest: "/docs/manifest.json",
  formatDetection: {
    address: true,
    date: true,
    email: true,
    telephone: true,
    url: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="NiWallet" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
