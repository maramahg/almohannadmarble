import Image from "next/image";
import { Building2, Briefcase, MapPin } from "lucide-react";

const clients = [
  {
    name: "مجموعة العليان",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/%D8%A7%D9%84%D8%B9%D9%84%D9%8A%D8%A7%D9%86-removebg-preview.png",
    description: "تركيب رخام فاخر للمكاتب الرئيسية والمداخل العامة، مع التركيز على التفاصيل الدقيقة والجودة العالية.",
    workType: "أرضيات وجدران",
    location: "الرياض",
  },
  {
    name: "مجموعة البسام",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/bassam-removebg-preview.png",
    description: "توريد وتركيب الرخام الطبيعي للقاعات الكبرى والمكاتب الإدارية، بما يعكس فخامة المكان.",
    workType: "قاعات مؤتمرات",
    location: "الدمام",
  },
  {
    name: "الأحساء إنتركونتيننتال",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/ahsa_inter-removebg-preview.png",
    description: "أعمال تجديد الرخام في الأجنحة الملكية والبهو الرئيسي، باستخدام أرقى أنواع الرخام العالمي.",
    workType: "فنادق ومنتجعات",
    location: "الأحساء",
  },
  {
    name: "الشاطئ مول",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/mall-removebg-preview.png",
    description: "تصميم وتنفيذ الأرضيات الرخامية للممرات الرئيسية ومنطقة المطاعم، مع مراعاة متطلبات الاستخدام الكثيف.",
    workType: "مراكز تجارية",
    location: "الدمام",
  },
  {
    name: "نبراس الخليج",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/%D9%86%D8%A8%D8%B1%D8%A7%D8%B3-removebg-preview.png",
    description: "تنفيذ واجهات خارجية من الحجر والرخام الطبيعي، تجمع بين المتانة والجمال المعماري.",
    workType: "واجهات خارجية",
    location: "الخبر",
  },
  {
    name: "شركة أنماط",
    logo: "https://almohannad.s3.eu-north-1.amazonaws.com/anmatt-removebg-preview.png",
    description: "أعمال فنية بالرخام للتصاميم الداخلية الحديثة، تشمل المغاسل والتكسيات الجدارية المبتكرة.",
    workType: "ديكورات داخلية",
    location: "جدة",
  },
];

export default function ProjectsPage() {
  return (
    <main className="flex-grow pt-32 pb-20 px-4 bg-background">
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
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <h1 className="text-4xl md:text-6xl font-al-qassam text-stone-800 relative z-10">
              مشاريعنا
            </h1>
            <div className="h-2 w-full bg-gold/30 mt-1 relative z-0" />
          </div>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light">
            نستعرض مجموعة من أبرز المشاريع التي قمنا بتنفيذها بأعلى معايير الجودة والدقة والجمال.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-white border border-stone-200 p-8 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 overflow-hidden flex flex-col h-full"
            >
              {/* Gold Accent Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 -mr-8 -mt-8 rotate-45 group-hover:bg-gold/10 transition-all" />
              
              {/* Logo Area */}
              <div className="mb-8 w-36 h-36 bg-stone-50 border border-stone-100 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-500 p-0 overflow-hidden">
                {(client as any).logo ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={(client as any).logo}
                      alt={`${client.name} logo`}
                      fill
                      className={`object-contain ${client.name === "مجموعة العليان" ? "scale-[1.5]" : client.name === "نبراس الخليج" ? "p-1" : "p-4"}`}
                    />
                  </div>
                ) : (
                  <Building2 className="w-10 h-10 text-stone-300 group-hover:text-gold transition-colors" />
                )}
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-2xl font-ibm font-bold text-stone-800 mb-4 group-hover:text-gold-dark transition-colors">
                  {client.name}
                </h3>
                
                <div className="flex items-center gap-4 text-xs text-stone-500 mb-4 font-ibm tracking-wide">
                  <span className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {client.workType}
                  </span>
                  <span className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {client.location}
                  </span>
                </div>

                <p className="text-stone-600 leading-relaxed text-sm md:text-base text-justify">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Call to Action */}
        <div className="mt-24 text-center p-12 glass-gold border border-gold/10 dark-section">
          <h2 className="text-2xl md:text-3xl font-al-qassam text-stone-800 mb-6">هل ترغب في الانضمام إلى قائمة عملائنا المتميزين؟</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            نحن هنا لنحول رؤيتك إلى واقع ملموس بأرقى أنواع الرخام والجرانيت. تواصل معنا اليوم لبدء مشروعك القادم.
          </p>
          <button className="btn-gold px-10 py-4">
            اطلب عرض سعر الآن
          </button>
        </div>
      </div>
    </main>
  );
}
