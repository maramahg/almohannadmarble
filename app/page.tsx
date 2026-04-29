import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, Utensils, Bath, Layers } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-stockcake.jpg"
            alt="StockCake Marble Texture Swirls"
            fill
            unoptimized={true}
            quality={100}
            className="object-cover opacity-100"
            priority
          />
          {/* Sophisticated Overlays for Legibility */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/10" />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.3)_0%,_transparent_70%)]" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-al-qassam text-white mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            مؤسسة المهند للرخام
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            نجمع بين فخامة الطبيعة ودقة الإنجاز لنرتقي بمساحاتكم
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-16">
            <Link href="/projects" className="btn-gold text-lg px-8 py-3">
              استكشف مشاريعنا
            </Link>
            <Link href="https://wa.me/966539400846" target="_blank" className="bg-gold text-dark-brown px-8 py-3 rounded-none hover:bg-dark-brown hover:text-gold transition-all text-lg font-bold">
              تواصل معنا
            </Link>
          </div>
        </div>

      </section>

      {/* Who Are We Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-10 w-fit">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-al-qassam text-stone-800 leading-tight mb-2">
                من نحن؟
              </h2>
              <div className="w-[90%] h-1 bg-gold mx-auto" />
            </div>
            <div className="space-y-6 text-stone-700 leading-relaxed text-base md:text-lg text-justify">
              <p>
                <span className="font-black text-stone-950 text-xl md:text-2xl block mb-2">في مؤسسة المهند للرخام،</span>
                نفخر بتقديم أعمال استثنائية من الرخام والجرانيت الطبيعي. أعمالنا تلفت الانتباه وهي مقصد لكل ذوّاق أنيق.
              </p>
              <p>
                ما يميزنا هو موظفونا الذين يبذلون جهوداً لضمان ظهور أفكارك. شغفنا وإصرارنا لا مثيل لهما، وحبنا للروائع الطبيعية ما يجعلنا نتعمق في البحث عن أفضل أنواع الرخام والجرانيت لتلبية جميع الاحتياجات والرغبات.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 md:flex md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-ibm text-gold">+10</div>
                <div className="text-[10px] md:text-sm text-stone-500 uppercase tracking-tighter">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-ibm text-gold">+50</div>
                <div className="text-[10px] md:text-sm text-stone-500 uppercase tracking-tighter">نوع رخام</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold font-ibm text-gold">+100</div>
                <div className="text-[10px] md:text-sm text-stone-500 uppercase tracking-tighter">مشروع ناجح</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-square max-w-md mx-auto md:max-w-none w-full">
            <div className="absolute inset-0 border-2 border-gold translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 z-0" />
            <div className="absolute inset-0 bg-stone-200 z-10 overflow-hidden shadow-2xl border border-stone-800/10">
              <Image
                src="/about-marble.jpg"
                alt="مصنع الرخام"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-stone-900 text-white overflow-hidden relative dark-section">
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-12 md:mb-16">
            <div className="w-fit mx-auto">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-al-qassam mb-4">مجموعتنا وحلولنا المتميزة</h2>
              <div className="w-[90%] h-1 bg-gold mx-auto" />
            </div>
            <p className="mt-6 text-stone-400 text-sm md:text-base max-w-2xl mx-auto">
              نقدم حلولاً مثالية في الهندسة المعمارية والتصميمات الداخلية والخارجية الحديثة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { title: "أرضيات", icon: <LayoutGrid className="w-12 h-12" />, desc: "تصاميم أرضيات فريدة تعكس الفخامة" },
              { title: "مطابخ", icon: <Utensils className="w-12 h-12" />, desc: "أسطح مطابخ مقاومة وعصرية" },
              { title: "مغاسل", icon: <Bath className="w-12 h-12" />, desc: "لمسات فنية في دورات المياه" },
              { title: "تكسيات", icon: <Layers className="w-12 h-12" />, desc: "تكسيات جدارية داخلية وخارجية" },
            ].map((service, i) => (
              <div key={i} className="p-8 md:p-10 bg-stone-950/60 hover:bg-stone-950/80 transition-all duration-300 group cursor-pointer border border-stone-800 flex flex-col items-center text-center">
                <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-ibm font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
