import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-stone-950 text-stone-300 pt-20 pb-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-stone-800 pb-16">
                {/* Brand Column */}
                <div className="md:col-span-2 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 bg-white rounded-full p-2">
                            <Image src="/logo.png" alt="شعار المهند للرخام" fill className="object-contain" />
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
                            <span className="text-gold">📞</span>
                            <span dir="ltr">+966 53 940 0846</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-gold">📧</span>
                            <span>info@almohannadmarble.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-gold">📸</span>
                            <span>almohannadmarbles</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-gold">🎵</span>
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
