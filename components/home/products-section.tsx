import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Shield, Cpu, Award } from "lucide-react"

const products = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    description: "أنظمة متطورة لاستدعاء الممرضات في المستشفيات والمراكز الصحية، تضمن استجابة سريعة وفعالة للمرضى",
    image: "/images/nurses-call-system.jpg",
    href: "/nurses-call-system",
  },
  {
    title: "أنظمة انتظار العملاء QSERVE",
    titleEn: "Queuing System",
    description: "نظام كيوسيرف لإدارة الطوابير وتنظيم انتظار العملاء في البنوك والمستشفيات والجهات الحكومية",
    image: "/images/queuing-system.jpg",
    href: "/queuing-system",
    
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    description: "كروت الدخول الذكية للتحكم في الوصول وأنظمة الحضور والانصراف بتقنية RFID",
    image: "/images/proximity-card.jpg",
    href: "/proximity-card",
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    description: "كروت ذكية عالية الأمان تعمل بتقنية NFC للتطبيقات المتعددة والأنظمة المتكاملة",
    image: "/images/mifare-card.jpg",
    href: "/mifare-card",
  },
  {
    title: "طباعة كروت بلاستيك ID",
    titleEn: "ID Card Printing",
    description: "خدمات طباعة كروت الهوية وبطاقات العضوية والموظفين بجودة عالية وتصاميم احترافية",
    image: "/images/id-card-printing.jpg",
    href: "/id-card-printing",
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية العالمية مثل Zebra و Evolis و HID",
    image: "/images/id-card-printer.jpg",
    href: "/id-card-printers",
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    description: "أكشاك وأجهزة خدمة ذاتية تفاعلية للبنوك والفنادق والمطاعم والمؤسسات الحكومية",
    image: "/images/self-service-kiosk.jpg",
    href: "/self-service-kiosks",
  },
  {
    title: "شاشات تفاعلية ذكية",
    titleEn: "Smart Interactive Boards",
    description: "شاشات لمس ذكية بتقنية 4K ومعالج مدمج للتعليم والاجتماعات وقاعات التدريب",
    image: "/images/gallery/smart-boards2.jpg",
    href: "/smart-boards",
 
  },

]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background visual helpers */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider animate-float-fast">
            <Cpu className="w-3.5 h-3.5" />
            خطوط الإنتاج والحلول
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight text-balance max-w-3xl mx-auto text-center">
            منتجات هندسية متطورة تضمن الكفاءة والسرعة
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-pretty text-sm sm:text-base leading-relaxed">
            نوفر حلولاً وطنية مدمجة بالبرمجيات والمعدات الذكية المصممة لمطابقة الاحتياجات المتنامية لشركائنا.
          </p>
        </div>

        {/* FEATURED PRODUCT 1 (Nurses Call System) */}
        <div className="mb-14 text-right">
          <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white hover:border-primary/25 hover:shadow-2xl hover:shadow-slate-100/50 transition-all duration-500 group">
            {/* Visual Glass backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-primary/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12 relative z-10 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-2 lg:order-1 text-right">
                <div className="space-y-2">
                  
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">{products[0].titleEn}</p>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">{products[0].title}</h3>
                </div>
                <p className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {products[0].description}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/15 hover:shadow-primary/35 transition-all text-white">
                    <Link href={products[0].href} className="flex items-center gap-2">
                      <span>اكتشف تفاصيل النظام</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[340px] order-1 lg:order-2 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <Image
                  src={products[0].image}
                  alt={products[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* FEATURED PRODUCT 2 (Queuing System) */}
        <div className="mb-20 text-right">
          <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white hover:border-primary/25 hover:shadow-2xl hover:shadow-slate-100/50 transition-all duration-500 group">
            {/* Visual Glass backdrop */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-12 relative z-10 items-center">
              <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-2 lg:order-1 text-right">
                <div className="space-y-2">
                  
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">{products[1].titleEn}</p>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">{products[1].title}</h3>
                </div>
                <p className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {products[1].description}
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-xl shadow-lg shadow-primary/15 hover:shadow-primary/35 transition-all text-white">
                    <Link href={products[1].href} className="flex items-center gap-2">
                      <span>اكتشف تفاصيل النظام</span>
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[340px] order-1 lg:order-2 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                <Image
                  src={products[1].image}
                  alt={products[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Other Products Grid Title */}
        <div className="mb-10 text-right">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 flex items-center gap-2">
            <span className="w-2.5 h-6 rounded-full bg-primary inline-block" />
            أنظمة ومنتجات مكملة
          </h3>
        </div>

        {/* Other Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.filter((_, i) => i !== 0 && i !== 1).map((product) => {
            const isInteractive = product.href !== "";

            const content = (
              <div className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 hover:border-primary/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full p-0 cursor-pointer text-right">
                <div>
                  <div className="relative h-52 overflow-hidden border-b border-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-2 text-right">
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{product.titleEn}</span>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {product.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
                {isInteractive && (
                  <div className="px-6 pb-6 pt-0 flex items-center justify-end text-primary gap-1.5 mt-auto">
                    <span className="text-xs font-bold group-hover:underline">عرض المزيد</span>
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                  </div>
                )}
              </div>
            );

            return isInteractive ? (
              <Link key={product.title} href={product.href} className="block">
                {content}
              </Link>
            ) : (
              <div key={product.title}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
