import Image from "next/image";
import Link from "next/link";
import { Droplet, Box, Hammer, ArrowLeft } from "lucide-react";

const samples = [
  {
    name: "Maikel Angelo",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/maikel.png",
    origin: "إيطاليا",
    description: "رخام فاخر يتميز بتشكيلات عروق فنية فريدة، يضفي لمسة إبداعية استثنائية على المساحات المعمارية.",
    specs: {
      compressiveStrength: "2620 KG/CM2",
      bulkDensity: "2200 KG/M",
      waterAbsorption: "0.2%",
    }
  },
  {
    name: "Calacatta",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/calacatta.png",
    origin: "إيطاليا",
    description: "من أرقى أنواع الرخام الإيطالي، يتميز بخلفية بيضاء ناصعة وعروق جريئة تمنح المكان فخامة لا تضاهى.",
    specs: {
      compressiveStrength: "1610 KG/CM",
      bulkDensity: "2669 KG/M",
      waterAbsorption: "0.4%",
    }
  },
  {
    name: "Statuario",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Statuario.png",
    origin: "إيطاليا",
    description: "رخام كلاسيكي عالي القيمة، يشتهر بجماله الخالد وعروقه الرمادية المتناسقة التي تناسب أرقى التصاميم.",
    specs: {
      compressiveStrength: "1209 KG/CM",
      bulkDensity: "2700 KG/M",
      waterAbsorption: "0.16%",
    }
  },
  {
    name: "Bianco Sevic",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Bianco+Sevic.png",
    origin: "مقدونيا",
    description: "يتميز بلونه الأبيض الهادئ والمتجانس، وهو خيار مثالي للمشاريع التي تبحث عن الأناقة العصرية والبساطة.",
    specs: {
      compressiveStrength: "1408 KG/CM",
      bulkDensity: "2795 KG/M",
      waterAbsorption: "0.23%",
    }
  },
  {
    name: "Greek Crystal",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Greek+Crystal.png",
    origin: "اليونان",
    description: "رخام كريستالي يتمتع بلمعان طبيعي وجاذبية خاصة، يعكس الضوء بشكل رائع ويمنح المكان حيوية وإشراقاً.",
    specs: {
      compressiveStrength: "1855 KG/CM",
      bulkDensity: "2714 KG/M",
      waterAbsorption: "0.2%",
    }
  },
  {
    name: "Greece Venus",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Greece+Venus.png",
    origin: "اليونان",
    description: "رخام يوناني بلمسات جمالية رقيقة، يجمع بين القوة والمتانة مع مظهر ناعم يليق بالقصور والفلل الفاخرة.",
    specs: {
      compressiveStrength: "1937 KG/CM",
      bulkDensity: "2840 KG/M",
      waterAbsorption: "0.3%",
    }
  },
  {
    name: "Bianco White",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Bianco+White.png",
    origin: "تركيا",
    description: "رخام تركي أبيض نقي، يوفر خلفية مثالية لمختلف أنواع الديكورات، ويتميز بخصائص فيزيائية ممتازة.",
    specs: {
      compressiveStrength: "1295 KG/CM",
      bulkDensity: "2710 KG/M",
      waterAbsorption: "0.1%",
    }
  },
  {
    name: "Aqua Bianca",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Aqua+Bianca.png",
    origin: "إيطاليا",
    description: "رخام إيطالي فريد يجمع بين النقاء والقوة، يتميز بنمط عروق هادئ يبعث على الراحة والسكينة.",
    specs: {
      compressiveStrength: "1947 KG/CM",
      bulkDensity: "2669 KG/M",
      waterAbsorption: "1.79%",
    }
  },
  {
    name: "Kamal Basha",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Kamal+Basha.png",
    origin: "تركيا",
    description: "رخام تركي عريق يتمتع بشهرة واسعة لمتانته العالية وألوانه الدافئة التي تضفي حميمية على التصاميم.",
    specs: {
      compressiveStrength: "1610 KG/CM",
      bulkDensity: "2669 KG/M",
      waterAbsorption: "0.4%",
    }
  },
  {
    name: "Tundra Gray",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Tundra+Gray.png",
    origin: "تركيا",
    description: "رخام رمادي عصري للغاية، يحظى بشعبية كبيرة في التصاميم الحديثة بفضل لونه المحايد وعروقه الجذابة.",
    specs: {
      compressiveStrength: "1610 KG/CM",
      bulkDensity: "2669 KG/M",
      waterAbsorption: "0.4%",
    }
  },
  {
    name: "Crema Marfil",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Crema+Marfil.png",
    origin: "إسبانيا",
    description: "أشهر أنواع الرخام الكريمي في العالم، يوفر دفئاً طبيعياً ويتماشى بانسجام مع الأثاث الخشبي والمعدني.",
    specs: {
      compressiveStrength: "1624 KG/CM",
      bulkDensity: "2671 KG/M",
      waterAbsorption: "0.2%",
    }
  },
  {
    name: "Travertine",
    image: "https://almohannad.s3.eu-north-1.amazonaws.com/Travertine.png",
    origin: "تركيا",
    description: "حجر طبيعي كلاسيكي يمتاز بمساميته الجمالية وتنوع ألوانه، مثالي للتكسيات الخارجية والأرضيات الخارجية.",
    specs: {
      compressiveStrength: "2440 KG/CM",
      bulkDensity: "2550 KG/M",
      waterAbsorption: "0.32%",
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
                {sample.image ? (
                  <Image 
                    src={sample.image}
                    alt={sample.name}
                    fill
                    className="object-cover scale-[1.15] transition-transform duration-700"
                  />
                ) : (
                  /* Placeholder Image Overlay */
                  <div className="absolute inset-0 flex items-center justify-center bg-stone-200/50">
                    <span className="text-stone-400 font-ibm text-sm">MARBLE TEXTURE PREVIEW</span>
                  </div>
                )}
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
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center p-12 glass-gold border border-gold/10 dark-section">
          <h2 className="text-2xl md:text-3xl font-al-qassam text-stone-800 mb-6">
            هل تبحث عن خامة محددة لمشروعك؟
          </h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">
            فريقنا المتخصص مستعد لمساعدتك في اختيار أجود أنواع الرخام التي تناسب ذوقك واحتياجاتك المعمارية. تواصل معنا اليوم لبدء رحلة التميز.
          </p>
          <Link href="https://wa.me/966539400846" target="_blank" className="btn-gold px-10 py-4">
            تواصل معنا للبدء
          </Link>
        </div>
      </div>
    </main>
  );
}
