import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Avaninder Bhaghayath's Portfolio",
    template: "%s | Avaninder Bhaghayath's Portfolio",
  },
  description: "A collection of my projects and other works.",
  applicationName: "Avaninder Bhaghayath",
  keywords: ["Avaninder", "Avaninder Bhaghayath", "Phillips Exeter"],
  metadataBase: new URL("https://www.avaninder.com"),
  openGraph: {
    type: "website",
    url: "https://www.avanider.com",
    siteName: "Avaninder Bhaghayath's Portfolio",
    title: "Avaninder Bhaghayath's Portfolio",
    description: "A collection of my projects and other works."
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
