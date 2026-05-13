import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const services = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    description: "حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة للمرضى في المستشفيات والعيادات",
    href: "/nurses-call-system",
    image: "/images/nurses-call-system.jpg",
    color: "from-red-500/20 to-red-600/20"
  },
  {
    title: "أنظمة انتظار العملاء QSERVE",
    titleEn: "Queuing System",
    description: "نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء بكفاءة عالية",
    href: "/queuing-system",
    image: "/images/queuing-system.jpg",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    description: "كروت الدخول الذكية للتحكم في الوصول والحضور والانصراف",
    href: "/proximity-card",
    image: "/images/proximity-card.jpg",
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    description: "كروت ذكية عالية الأمان للتطبيقات المتعددة والأنظمة المتكاملة",
    href: "/mifare-card",
    image: "/images/mifare-card.jpg",
    color: "from-amber-500/20 to-amber-600/20"
  },
  {
    title: "طباعة كروت بلاستيك ID",
    titleEn: "ID Card Printing",
    description: "خدمات طباعة كروت الهوية والعضوية بجودة عالية وتصاميم احترافية",
    href: "/id-card-printing",
    image: "/images/id-card-printing.jpg",
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية العالمية",
    href: "/id-card-printers",
    image: "/images/id-card-printer.jpg",
    color: "from-cyan-500/20 to-cyan-600/20"
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    description: "أجهزة خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة ومريحة",
    href: "/self-service-kiosks",
    image: "/images/self-service-kiosk.jpg",
    color: "from-orange-500/20 to-orange-600/20"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            خدماتنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            نقدم مجموعة متكاملة من الحلول التقنية
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            حلول تقنية متطورة تساعد المؤسسات في مصر على تنظيم العمل وتحسين تجربة العملاء
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Card 
              key={service.href} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} to-transparent opacity-60`} />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground">
                  {service.titleEn}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  <Link href={service.href} className="flex items-center gap-2">
                    <span>المزيد</span>
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
