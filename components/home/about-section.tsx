import { CheckCircle, Award, Users, Zap } from "lucide-react"

const features = [
  "تنظيم الدور بشكل آلي",
  "شاشات عرض عالية الوضوح",
  "تقليل وقت الانتظار",
  "شاشات تاتش تفاعلية",
  "دعم الدفع الإلكتروني",
  "حلول للمطاعم والبنوك",
  "استجابة سريعة للنداءات",
  "متوافق مع المعايير الدولية",
]

const stats = [
  { icon: Award, label: "جودة عالية", description: "منتجات مصنعة محلياً بمعايير عالمية" },
  { icon: Users, label: "دعم فني", description: "فريق متخصص لخدمة العملاء على مدار الساعة" },
  { icon: Zap, label: "تركيب سريع", description: "فريق تركيب محترف في جميع أنحاء مصر" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                من نحن
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                كيوسيرف QSERVE
                <span className="block text-primary mt-2">حلول ذكية لنظام انتظار العملاء في مصر</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                كيوسيرف (QSERVE) تقدم حلول تقنية متطورة تساعد المؤسسات في مصر على تنظيم الدور وتحسين تجربة العملاء من خلال نظام انتظار العملاء، شاشات انتظار العملاء، أجهزة الكيوسك للخدمات الذاتية، ونظام استدعاء الممرضات.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* Main Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">لماذا تختارنا؟</h3>
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{stat.label}</h4>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary text-primary-foreground rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">+500</div>
                <div className="text-xs opacity-80">عميل</div>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">+15</div>
                <div className="text-xs opacity-80">سنة</div>
              </div>
              <div className="bg-accent text-accent-foreground rounded-xl p-4 text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-xs opacity-80">دعم</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
