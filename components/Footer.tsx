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

const WhatsAppLogo = () => (
    <svg viewBox="0 0 448 512" width="20" height="20" fill="currentColor">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 pt-20 pb-10 px-4 border-t border-gold/10 dark-section">
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
                        <li><Link href="/projects" className="hover:text-gold transition-colors">مشاريعنا</Link></li>
                        <li><Link href="/collection" className="hover:text-gold transition-colors">مجموعتنا</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors">تواصل معنا</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-bold text-white mb-6 border-r-4 border-gold pr-4">تواصل معنا</h4>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-center gap-3 group">
                            <a href="https://wa.me/966539400846" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <div className="text-gold">
                                    <WhatsAppLogo />
                                </div>
                                <span dir="ltr">+966 53 940 0846</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <a href="mailto:info@almohannadmarble.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <Mail className="w-5 h-5 text-gold" />
                                <span>info@almohannadmarble.com</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <a href="https://instagram.com/almohannadmarbles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <div className="text-gold flex items-center justify-center w-5 h-5">
                                    <InstagramLogo />
                                </div>
                                <span>almohannadmarbles</span>
                            </a>
                        </li>
                        <li className="flex items-center gap-3 group">
                            <a href="https://tiktok.com/@almohannadmarbles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-gold transition-colors">
                                <div className="text-gold flex items-center justify-center w-5 h-5">
                                    <TikTokLogo />
                                </div>
                                <span>almohannadmarbles</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
                <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لمؤسسة المهند للرخام.</p>
            </div>
        </footer>
    );
}
