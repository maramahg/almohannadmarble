import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex-grow pt-32 pb-20 px-4 bg-background relative min-h-screen">
      {/* Background Subtle Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none overflow-hidden">
        <Image
          src="/hero-stockcake.jpg"
          alt="background pattern"
          fill
          className="object-cover grayscale"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl font-al-qassam text-stone-800 relative z-10">
              تواصل معنا
            </h1>
            <div className="h-2 w-full bg-gold/30 mt-1 relative z-0" />
          </div>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light leading-relaxed">
            نحن هنا لخدمتكم والإجابة على جميع استفساراتكم حول أفضل أنواع الرخام والجرانيت. تواصلوا معنا اليوم لنبدأ في تحويل رؤيتكم إلى واقع.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Card - Now Location with Map */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-stone-200 h-full flex flex-col overflow-hidden">
              <div className="p-8 border-b border-stone-100 bg-stone-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-stone-800">مقر المصنع</h2>
                    <p className="text-stone-500 text-sm">المملكة العربية السعودية، الدمام</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-grow min-h-[400px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.7189717582005!2d50.03719129999996!3d26.464786199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ffd4faeca0f5%3A0x52b2c530a2c54f86!2z2KfZhNmF2YfZhtivINmE2YTYsdiu2KfZhQ!5e0!3m2!1sar!2ssa!4v1777486263740!5m2!1sar!2ssa"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

              <div className="p-6 bg-white flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3 text-stone-600 bg-stone-50 px-4 py-2 rounded-full border border-stone-100">
                  <Clock className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium">ساعات العمل: 8:00 ص - 7:00 م (السبت - الخميس)</span>
                </div>
                <Link 
                  href="https://maps.app.goo.gl/Fna21Xg69tTTeAXS7" 
                  target="_blank"
                  className="text-gold font-bold flex items-center gap-2 hover:translate-x-[-5px] transition-transform"
                >
                  فتح في خرائط جوجل <span className="text-lg">←</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* WhatsApp - Now First and Featured */}
            <Link 
              href="https://wa.me/966539400846" 
              target="_blank"
              className="block bg-stone-900 border border-stone-800 p-8 hover:border-gold transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bg-gold text-stone-900 text-[10px] font-bold px-3 py-1 uppercase tracking-tighter">
                التواصل الرئيسي
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.6-6.5 8.3-9.7 2.8-3.2 3.7-5.6 5.6-9.3 1.9-3.7 1-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-bold text-white">واتساب</h4>
                  <p className="text-stone-400 text-sm" dir="ltr">+966 53 940 0846</p>
                </div>
              </div>
            </Link>

            {/* Instagram */}
            <Link 
              href="https://instagram.com/almohannadmarbles" 
              target="_blank"
              className="block bg-white border border-stone-200 p-8 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-800">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s 102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-bold text-stone-800">إنستقرام</h4>
                  <p className="text-stone-500 text-sm" dir="ltr">@almohannadmarbles</p>
                </div>
              </div>
            </Link>

            {/* TikTok */}
            <Link 
              href="https://tiktok.com/@almohannadmarbles" 
              target="_blank"
              className="block bg-white border border-stone-200 p-8 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-800">
                  <svg viewBox="0 0 448 512" width="24" height="24" fill="currentColor">
                    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.32c7.87 33.32 31.27 60.33 64.07 72.82c13.33 5.06 27.54 7.6 41.84 7.42V209.91z" />
                  </svg>
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-bold text-stone-800">تيك توك</h4>
                  <p className="text-stone-500 text-sm" dir="ltr">@almohannadmarbles</p>
                </div>
              </div>
            </Link>

            {/* Email */}
            <Link 
              href="mailto:info@almohannadmarble.com"
              className="block bg-white border border-stone-200 p-8 hover:border-gold/50 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-stone-800">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-bold text-stone-800">البريد الإلكتروني</h4>
                  <p className="text-stone-500 text-sm">info@almohannadmarble.com</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
