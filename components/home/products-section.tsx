import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const products = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    description: "أنظمة متطورة لاستدعاء الممرضات في المستشفيات والمراكز الصحية، تضمن استجابة سريعة وفعالة للمرضى",
    image: "/images/nurses-call-system.jpg",
    href: "/nurses-call-system"
  },
  {
    title: "أنظمة انتظار العملاء QSERVE",
    titleEn: "Queuing System",
    description: "نظام كيوسيرف لإدارة الطوابير وتنظيم انتظار العملاء في البنوك والمستشفيات والجهات الحكومية",
    image: "/images/queuing-system.jpg",
    href: "/queuing-system"
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    description: "كروت الدخول الذكية للتحكم في الوصول وأنظمة الحضور والانصراف بتقنية RFID",
    image: "/images/proximity-card.jpg",
    href: "/proximity-card"
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    description: "كروت ذكية عالية الأمان تعمل بتقنية NFC للتطبيقات المتعددة والأنظمة المتكاملة",
    image: "/images/mifare-card.jpg",
    href: "/mifare-card"
  },
  {
    title: "طباعة كروت بلاستيك ID",
    titleEn: "ID Card Printing",
    description: "خدمات طباعة كروت الهوية وبطاقات العضوية والموظفين بجودة عالية وتصاميم احترافية",
    image: "/images/id-card-printing.jpg",
    href: "/id-card-printing"
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية العالمية مثل Zebra و Evolis و HID",
    image: "/images/id-card-printer.jpg",
    href: "/id-card-printers"
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    description: "أكشاك وأجهزة خدمة ذاتية تفاعلية للبنوك والفنادق والمطاعم والمؤسسات الحكومية",
    image: "/images/self-service-kiosk.jpg",
    href: "/self-service-kiosks"
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            منتجاتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            تشكيلة واسعة من المنتجات عالية الجودة
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            نوفر مجموعة متنوعة من المنتجات التقنية المتطورة لتلبية احتياجات جميع القطاعات
          </p>
        </div>

        {/* Featured Product - Large */}
        <div className="mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 group">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
              <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div>
                  <span className="text-primary font-medium text-sm">{products[1].titleEn}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{products[1].title}</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {products[1].description}
                </p>
                <Button asChild size="lg" className="w-fit">
                  <Link href={products[1].href} className="flex items-center gap-2">
                    <span>اكتشف المزيد</span>
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <Image
                  src={products[1].image}
                  alt={products[1].title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Other Products Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.filter((_, i) => i !== 1).map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-primary text-xs font-medium">{product.titleEn}</span>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center gap-2 text-primary pt-2">
                  <span className="text-sm font-medium">المزيد</span>
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
