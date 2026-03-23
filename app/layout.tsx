import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Almarai, Amiri } from "next/font/google";
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

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata = {
  title: "مؤسسة المهند للرخام | Almohannad Marble",
  description: "نجمع بين فخامة الطبيعة ودقة الإنجاز لنرتقي بمساحاتكم. أفضل أنواع الرخام والجرانيت.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${ibmPlex.variable} ${almarai.variable} ${amiri.variable}`}>
      <body className="font-almarai bg-crema text-rich-black min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
