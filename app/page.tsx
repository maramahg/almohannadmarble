import Image from "next/image";

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
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            مؤسسة المهند للرخام
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            نجمع بين فخامة الطبيعة ودقة الإنجاز لنرتقي بمساحاتكم
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-gold text-lg px-8 py-3">
              استكشف منتجاتنا
            </button>
            <button className="glass text-white px-8 py-3 rounded-sm border-white/40 hover:bg-white/10 transition-all text-lg">
              تواصل معنا
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-gold-dark mb-8">
              من نحن؟
            </h2>
            <div className="space-y-6 text-stone-700 leading-relaxed text-lg text-justify">
              <p>
                في مؤسسة المهند للرخام، نفخر بتقديم منتجات استثنائية من الرخام والجرانيت الطبيعي. منتجاتنا تلفت الانتباه وهي مقصد لكل ذوّاق أنيق.
              </p>
              <p>
                ما يميزنا هو موظفونا الذين يبذلون جهوداً لضمان ظهور أفكارك. شغفنا وإصرارنا لا مثيل لهما، وحبنا للروائع الطبيعية ما يجعلنا نتعمق في البحث عن أفضل أنواع الرخام والجرانيت لتلبية جميع الاحتياجات والرغبات.
              </p>
            </div>
            <div className="mt-10 flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold italic">+10</div>
                <div className="text-sm text-stone-500">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold italic">+50</div>
                <div className="text-sm text-stone-500">نوع رخام</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold italic">+100</div>
                <div className="text-sm text-stone-500">مشروع ناجح</div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative aspect-square">
            <div className="absolute inset-0 border-2 border-gold translate-x-4 translate-y-4 z-0" />
            <div className="absolute inset-0 bg-stone-200 z-10 overflow-hidden shadow-2xl">
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

      {/* Services/Specs Highlight */}
      <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">خدماتنا وحلولنا المثالية</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
            <p className="mt-6 text-stone-400 max-w-2xl mx-auto">
              نقدم حلولاً مثالية في الهندسة المعمارية والتصميمات الداخلية والخارجية الحديثة
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "أرضيات", icon: "🏢" },
              { title: "مطابخ", icon: "🍽️" },
              { title: "مغاسل", icon: "🚿" },
              { title: "تكسيات", icon: "🧱" },
            ].map((service, i) => (
              <div key={i} className="p-8 glass hover:bg-white/10 transition-all group cursor-pointer border-none shadow-xl">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold text-gold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
