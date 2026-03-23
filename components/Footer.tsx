import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const InstagramLogo = () => (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s 102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
);

const TikTokLogo = () => (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
        <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.32c7.87 33.32 31.27 60.33 64.07 72.82c13.33 5.06 27.54 7.6 41.84 7.42V209.91z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 pt-20 pb-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-16">
                {/* Brand Column */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 bg-white rounded-full p-0 border-2 border-stone-800 overflow-hidden">
                            <Image src="/logo-final.png" alt="شعار المهند للرخام" fill className="object-contain" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">مؤسسة المهند للرخام</h3>
                            <p className="text-gold font-medium uppercase tracking-widest text-xs">Almohannad Marble</p>
                        </div>
                    </div>
                    <p className="max-w-md text-stone-400 leading-relaxed text-lg">
                        نحن متخصصون في استيراد وتجارة أجود أنواع الرخام والجرانيت العالمي. نلتزم بتقديم حلول معمارية فاخرة تلبي تطلعات عملائنا في الجودة والتصميم.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-6 border-r-4 border-gold pr-4">روابط سريعة</h4>
                    <ul className="space-y-4 text-lg">
                        <li><Link href="/" className="hover:text-gold transition-colors">الرئيسية</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">منتجاتنا</Link></li>
                        <li><Link href="/projects" className="hover:text-gold transition-colors">مشاريعنا</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">اتصل بنا</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-6 border-r-4 border-gold pr-4">تواصل معنا</h4>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-gold" />
                            <span dir="ltr">+966 53 940 0846</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-gold" />
                            <span>info@almohannadmarble.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="text-gold flex items-center justify-center w-5 h-5">
                                <InstagramLogo />
                            </div>
                            <span>almohannadmarbles</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <div className="text-gold flex items-center justify-center w-5 h-5">
                                <TikTokLogo />
                            </div>
                            <span>almohannadmarbles</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
                <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمؤسسة المهند للرخام.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">سياسة الخصوصية</Link>
                    <Link href="#" className="hover:text-white">الشروط والأحكام</Link>
                </div>
            </div>
        </footer>
    );
}
