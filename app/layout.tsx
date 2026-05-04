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
    icon: "/icon.svg",
    shortcut: "/favicon.svg",
  },
  title: {
    default: "Amaraloka Property: Merancang Hunian yang Tenang",
    template: "%s | Amaraloka Property",
  },
  description:
    "Amaraloka Property membangun hunian dengan craftsmanship, ketenangan, dan ritme hidup sehari-hari sebagai dasar.",
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
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <AdminVisibility>{children}</AdminVisibility>
      </body>
    </html>
  );
}
