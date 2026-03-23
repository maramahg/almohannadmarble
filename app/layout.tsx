import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Almarai } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ibmPlex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ibm",
});

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
  variable: "--font-almarai",
});

export const metadata = {
  title: "Almohannad Marble",
  description: "نجمع بين فخامة الطبيعة ودقة الإنجاز لنرتقي بمساحاتكم. أفضل أنواع الرخام والجرانيت.",
  icons: {
    icon: "/favicon-branded.svg?v=6",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlex.variable} ${almarai.variable}`}>
      <body className="font-almarai bg-crema text-rich-black min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
