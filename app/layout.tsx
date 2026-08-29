import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Avaninder Bhaghayath's Portfolio",
    template: "%s | Avaninder Bhaghayath's Portfolio",
  },
  description: "EE & CS student at Yale.",
  applicationName: "Avaninder Bhaghayath",
  keywords: ["Avaninder", "Avaninder Bhaghayath", "Yale", "Phillips Exeter"],
  metadataBase: new URL("https://www.avaninder.com"),
  openGraph: {
    type: "website",
    url: "https://www.avaninder.com",
    siteName: "Avaninder Bhaghayath's Portfolio",
    title: "Avaninder Bhaghayath's Portfolio",
    description: "EE & CS student at Yale."
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
        className={`${plexSans.variable} ${plexMono.variable} antialiased min-h-screen overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
