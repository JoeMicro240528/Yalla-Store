import { CheckCircle, Award, Users, Zap, HelpCircle } from "lucide-react"

const features = [
  "تنظيم الدور بشكل آلي ذكي",
  "شاشات عرض ليد عالية الوضوح",
  "تقليل أوقات الانتظار بنسبة 50%",
  "شاشات لمس تفاعلية (Kiosk)",
  "دعم كامل للدفع والخدمة الذاتية",
  "حلول مخصصة للمطاعم والمستشفيات",
  "استجابة لاسلكية فائقة السرعة للنداء",
  "مطابقة تامة لمعايير الجودة الدولية",
]

const stats = [
  { icon: Award, label: "صناعة وطنية بمواصفات عالمية", description: "أول مصنع في مصر يقدم كفالة وضمان حقيقي سنتين مع توفير كافة قطع الغيار محلياً." },
  { icon: Users, label: "فريق دعم وهندسة متخصص", description: "مهندسون وفنيون على أتم الاستعداد للتركيب والصيانة الفورية على مدار الساعة." },
  { icon: Zap, label: "تكامل وتخصيص مرن للبرمجيات", description: "إمكانية دمج وتخصيص الأنظمة برمجياً لتتطابق تماماً مع الهوية البصرية وشبكة المنشأة." },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-12 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 space-y-8 text-right">
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider mb-4 animate-float-fast">
                <HelpCircle className="w-3.5 h-3.5" />
                ريادة وتصنيع وطني
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                كيوسيرف QSERVE
                <span className="block text-primary mt-3 text-2xl sm:text-3xl font-extrabold">الاسم الأول في مصر لأنظمة الانتظار والاستدعاء</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              منذ انطلاقنا كأول مصنع معتمد في جمهورية مصر العربية، كرسنا جهودنا لتطوير وتصنيع بنية تحتية متكاملة (أجهزة وبرمجيات) لإدارة الصفوف وخدمة استدعاء الممرضات. نصمم ونصنع منتجاتنا محلياً بالكامل لتنافس بقوة في الأسواق العالمية وتقدم أفضل قيمة استثمارية ممكنة.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 p-3 rounded-xl hover:border-primary/25 hover:bg-slate-50 transition-all duration-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats & Cards Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Main Premium Card */}
            <div className="bg-slate-50/50 border border-slate-200/85 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden group hover:border-primary/25 hover:shadow-xl transition-all duration-500">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/5 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-8 relative z-10 text-right">لماذا تختار أنظمة كيوسيرف؟</h3>
              
              <div className="space-y-6 relative z-10">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-start gap-4 group/item text-right">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-primary group-hover/item:border-transparent transition-all duration-300">
                      <stat.icon className="h-6 w-6 text-primary group-hover/item:text-white transition-colors" />
                    </div>
                    <div className="text-right space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">{stat.label}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{stat.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub Metric Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-center hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:scale-105 transition-transform duration-300">+500</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 mt-1">عميل تجاري</div>
              </div>
              <div className="bg-blue-50/50 border border-blue-200/60 rounded-2xl p-4 text-center hover:bg-blue-100/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:scale-105 transition-transform duration-300">+20</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 mt-1">عام خبرة</div>
              </div>
              <div className="bg-cyan-50/50 border border-cyan-200/60 rounded-2xl p-4 text-center hover:bg-cyan-100/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:scale-105 transition-transform duration-300">24/7</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-600 mt-1">دعم هندسي</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
