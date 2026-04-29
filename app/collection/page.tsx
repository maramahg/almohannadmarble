import Image from "next/image";
import Link from "next/link";
import { Droplet, Box, Hammer, MapPin, ArrowLeft } from "lucide-react";

const samples = [
  {
    name: "Maikel Angelo",
    origin: "إيطاليا",
    description: "رخام إيطالي فاخر يتميز بعروقه الرمادية والذهبية المتداخلة على خلفية بيضاء نقية، مثالي للأرضيات والجدران الراقية.",
    specs: {
      compressiveStrength: "2620 KG/CM2",
      bulkDensity: "2200 KG/M",
      waterAbsorption: "0.2%",
    }
  },
  {
    name: "Calacatta",
    origin: "إيطاليا",
    description: "من أرقى أنواع الرخام العالمي، يتميز بعروقه الواسعة والجريئة، يضفي لمسة من الفخامة والاتساع على المساحات الداخلية.",
    specs: {
      compressiveStrength: "1610 KG/CM",
      bulkDensity: "2669 KG/M",
      waterAbsorption: "0.4%",
    }
  },
  {
    name: "Statuary",
    origin: "إيطاليا",
    description: "رخام كلاسيكي عالي الجودة، معروف بسطحه الأملس وعروقه الرقيقة، المفضل لدى المصممين للمشاريع المعمارية الكبرى.",
    specs: {
      compressiveStrength: "2100 KG/CM2",
      bulkDensity: "2710 KG/M",
      waterAbsorption: "0.15%",
    }
  },
  {
    name: "Crema Marfil",
    origin: "إسبانيا",
    description: "رخام كريمي دافئ يمنح شعوراً بالراحة والهدوء، يتناسب مع مختلف أنواع الديكورات المودرن والكلاسيكية.",
    specs: {
      compressiveStrength: "1850 KG/CM2",
      bulkDensity: "2680 KG/M",
      waterAbsorption: "0.3%",
    }
  },
  {
    name: "Emperador Dark",
    origin: "إسبانيا",
    description: "رخام بني داكن بعروق بيضاء متقاطعة، يجسد القوة والفخامة، رائع للتصاميم التي تتطلب تبايناً لونياً جذاباً.",
    specs: {
      compressiveStrength: "1980 KG/CM2",
      bulkDensity: "2730 KG/M",
      waterAbsorption: "0.25%",
    }
  },
  {
    name: "Volakas",
    origin: "اليونان",
    description: "رخام يوناني أبيض ناعم مع عروق رمادية هادئة، يجمع بين البساطة والأناقة، مثالي للحمامات والمطابخ العصرية.",
    specs: {
      compressiveStrength: "1550 KG/CM2",
      bulkDensity: "2820 KG/M",
      waterAbsorption: "0.35%",
    }
  }
];

export default function CollectionPage() {
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
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl font-al-qassam text-stone-800 relative z-10">
              مجموعتنا
            </h1>
            <div className="h-2 w-full bg-gold/30 mt-1 relative z-0" />
          </div>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mt-6 font-light">
            استكشف تشكيلة واسعة من أجود أنواع الرخام الطبيعي المستورد، المختار بعناية ليلبي تطلعاتكم نحو الفخامة والجودة.
          </p>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-stone-200 p-0 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5 overflow-hidden flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                {/* Placeholder Image Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-stone-200/50">
                  <span className="text-stone-400 font-ibm text-sm">MARBLE TEXTURE PREVIEW</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4 bg-stone-900/80 backdrop-blur-md text-white text-[10px] px-3 py-1 uppercase tracking-widest font-ibm z-10">
                  {sample.origin}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-ibm font-bold text-stone-800 mb-3 group-hover:text-gold transition-colors">
                  {sample.name}
                </h3>
                
                <p className="text-stone-500 text-sm leading-relaxed mb-8 flex-grow">
                  {sample.description}
                </p>

                {/* Technical Specifications Grid */}
                <div className="grid grid-cols-1 gap-3 pt-6 border-t border-stone-100">
                  <div className="flex items-center justify-between text-[11px] font-ibm text-stone-400 uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <Hammer className="w-3.5 h-3.5 text-gold" />
                      Compressive Strength
                    </span>
                    <span className="text-stone-700 font-bold">{sample.specs.compressiveStrength}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] font-ibm text-stone-400 uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <Box className="w-3.5 h-3.5 text-gold" />
                      Bulk Density
                    </span>
                    <span className="text-stone-700 font-bold">{sample.specs.bulkDensity}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-ibm text-stone-400 uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                      <Droplet className="w-3.5 h-3.5 text-gold" />
                      Water Absorption
                    </span>
                    <span className="text-stone-700 font-bold">{sample.specs.waterAbsorption}</span>
                  </div>
                </div>

                <Link 
                  href="https://wa.me/966539400846" 
                  target="_blank"
                  className="mt-8 py-3 border border-stone-800 text-stone-800 font-ibm text-xs uppercase tracking-widest text-center hover:bg-stone-900 hover:text-white transition-all duration-300"
                >
                  Request Sample Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home CTA */}
        <div className="mt-20 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-gold transition-colors font-ibm text-sm uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
