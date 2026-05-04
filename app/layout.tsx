import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import AdminVisibility from "./components/AdminVisibility";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.svg',
  },
  title: {
    default: "Amaraloka Property: Crafting Quiet Estates",
    template: "%s | Amaraloka Property",
  },
  description:
    "Amaraloka Property builds residences that honor craftsmanship, calm, and the rituals of everyday life.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://amaraloka-property.vercel.app"
  ),
  openGraph: {
    siteName: "Amaraloka Property",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AdminVisibility>{children}</AdminVisibility>
      </body>
    </html>
  );
}
