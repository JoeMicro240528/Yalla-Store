"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"
import {
  Landmark,
  Hospital,
  Building2,
  Smartphone,
  Plane,
  Scale,
  Zap,
  Droplets,
  Car,
  Ship,
  Briefcase,
  ShoppingBag,
  LayoutGrid,
  ArrowLeft,
} from "lucide-react"

// ─── Real data from QSERVE Customer List 2022 ───────────────────────────────

const sectors = [
  {
    id: "all",
    label: "جميع القطاعات",
    icon: LayoutGrid,
    projects: 4238,
    windows: 21889,
    color: "bg-primary/10 text-primary border-primary/20",
    activeColor: "bg-primary text-primary-foreground",
  },
  {
    id: "hospitals",
    label: "المستشفيات والصحة",
    icon: Hospital,
    projects: 847,
    windows: 7681,
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    activeColor: "bg-rose-500 text-white",
    clients: [
      "مستشفى الميريلاند",
      "مستشفى أبو الريش للأطفال",
      "القصر العيني الفرنساوي",
      "مستشفى الدمرداش",
      "مستشفى العجوزة",
      "مستشفى الهرم",
      "مستشفى الطيران المدني",
      "مستشفى الراعي الصالح",
      "مستشفى جامعة قناة السويس",
      "مستشفى شرق المدينة",
      "مستشفى الناس",
      "كلية طب الأسنان جامعة القاهرة",
      "مستشفيات جامعة المنصورة",
      "مستشفى النيل بدراوي",
      "مستشفى رمد المنصورة",
      "مستشفى دار الصحة بالتجمع",
      "مستشفى تسائم",
      "مستشفى الريان",
      "معهد الكبد القومي",
      "مستشفى الشرطة بالعجوزة",
      "مستشفيات جامعة بنها",
      "مستشفيات جامعة الفيوم",
      "مستشفى العسكري العام بالإسكندرية",
      "مستشفى الحميات بالإسكندرية",
      "كلية طب عين شمس",
    ],
  },
  {
    id: "telecom",
    label: "شركات الاتصالات",
    icon: Smartphone,
    projects: 765,
    windows: 1395,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    activeColor: "bg-orange-500 text-white",
    clients: [
      "Etisalat",
      "Orange",
      "WE",
      "HAWAII",
      "OPPO",
      "mi",
      "htc",
      "APPLE",
      "RAYA",
      "SWITCH",
    ],
  },
  {
    id: "traffic",
    label: "وحدات المرور",
    icon: Car,
    projects: 146,
    windows: 1726,
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    activeColor: "bg-yellow-500 text-white",
    clients: [
      "إدارة مرور الجيزة",
      "إدارة مرور القاهرة",
      "إدارة مرور الإسكندرية",
      "إدارة مرور الفيوم",
      "إدارة مرور المنوفية",
      "إدارة مرور المنيا",
      "إدارة مرور الغربية",
      "إدارة مرور الأقصر",
      "إدارة مرور أسوان",
      "إدارة مرور الإسماعيلية",
      "إدارة مرور سوهاج",
      "إدارة مرور قنا",
      "إدارة مرور بورسعيد",
      "إدارة مرور السويس",
      "إدارة مرور دمياط",
      "أكاديمية الشرطة",
    ],
  },
  {
    id: "supply",
    label: "مكاتب التموين",
    icon: ShoppingBag,
    projects: 287,
    windows: 1651,
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    activeColor: "bg-green-500 text-white",
    clients: ["مكاتب التموين — 287 مشروع على مستوى الجمهورية"],
  },
  {
    id: "services",
    label: "الخدمات والمحاكم",
    icon: Scale,
    projects: 378,
    windows: 1366,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    activeColor: "bg-purple-500 text-white",
    clients: [
      "المحاكم المصرية",
      "تمويلي",
      "الأهلي تمكين",
      "B.Tech",
      "وزارة الخارجية",
      "AMIDEAST",
      "Careem",
      "Caritas",
      "PORTO SOUTH BEACH",
      "جمعية رجال الأعمال المنصورة",
      "ORASCOM",
      "أمان",
    ],
  },
  {
    id: "electricity",
    label: "شركات الكهرباء",
    icon: Zap,
    projects: 127,
    windows: 648,
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    activeColor: "bg-amber-500 text-white",
    clients: [
      "شركة شمال القاهرة لتوزيع الكهرباء",
      "شركة القناة لتوزيع الكهرباء",
      "شركة جنوب الدلتا لتوزيع الكهرباء",
      "شركة شمال الدلتا لتوزيع الكهرباء",
      "شركة توزيع الكهرباء بالبحيرة",
      "شركة توزيع الكهرباء بالإسكندرية",
      "شركة مصر الوسطى لتوزيع الكهرباء",
      "كهرباء السودان",
    ],
  },
  {
    id: "banks",
    label: "البنوك",
    icon: Landmark,
    projects: 99,
    windows: 544,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    activeColor: "bg-blue-500 text-white",
    clients: [
      "Western Union",
      "بنك ناصر الاجتماعي",
      "بنك قناة السويس",
      "SAIB بنك الشركة العربية المصرفية الدولية",
      "البنك الزراعي المصري",
      "بنك مصر",
      "البنك الأهلي المصري",
      "البنك العربي الأفريقي",
      "البنك المصري الخليجي",
      "ATIB Bank",
    ],
  },
  {
    id: "government",
    label: "الجهات الحكومية",
    icon: Building2,
    projects: 117,
    windows: 875,
    color: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    activeColor: "bg-slate-500 text-white",
    clients: [
      "إدارة الجوازات والهجرة",
      "الأحوال المدنية",
      "التأمينات الاجتماعية",
      "مراكز خدمات المواطنين — حياة كريمة",
      "جهاز مدينة الرحاب",
      "جهاز أكتوبر",
      "مجلس مدينة كفر شكر",
      "مركز تكنولوجيا المعلومات بمطروح",
    ],
  },
  {
    id: "water",
    label: "شركات المياه",
    icon: Droplets,
    projects: 42,
    windows: 181,
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    activeColor: "bg-cyan-500 text-white",
    clients: [
      "شركة مياه الشرب بأسيوط",
      "شركة مياه الشرب بالجيزة",
      "شركة مياه الشرب بسوهاج",
      "شركة مياه الشرب بكفر الشيخ",
      "شركة مياه الشرب بمطروح",
      "شركة مياه الشرب بالإسكندرية",
      "شركة مياه الشرب بالقليوبية",
      "هيئة مياه الشرب — أتوبيسات غبور",
    ],
  },
  {
    id: "aviation",
    label: "شركات الطيران",
    icon: Plane,
    projects: 10,
    windows: 65,
    color: "bg-sky-500/10 text-sky-600 border-sky-500/20",
    activeColor: "bg-sky-500 text-white",
    clients: [
      "مصر للطيران",
      "الخطوط الجوية القطرية",
      "الخطوط الجوية العراقية",
    ],
  },
  {
    id: "shipping",
    label: "شركات الملاحة",
    icon: Ship,
    projects: 17,
    windows: 123,
    color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    activeColor: "bg-teal-500 text-white",
    clients: [
      "COSCO SHIPPING LINES",
      "China Shipping",
      "YANG MING SHIPPING",
      "Hamburg Sub",
      "EGMAR للملاحة",
      "PAN Marine",
      "شركة MLH للملاحة",
      "شركة الإسكندرية لتداول الحاويات",
    ],
  },
  {
    id: "companies",
    label: "شركات ومؤسسات",
    icon: Briefcase,
    projects: 31,
    windows: 127,
    color: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
    activeColor: "bg-indigo-500 text-white",
    clients: [
      "نقابة الصيادلة",
      "IKEA",
      "Jumia",
      "العربي جروب",
      "أوليمبك جروب",
      "قناة السويس",
      "نقابة المهندسين",
      "MANTRAC",
      "أسمنت أسيوط",
      "شركة السويس للصلب",
      "شركة جلاكسو ويلكوم للأدوية",
      "المقاولون العرب",
    ],
  },
]

// ─── Ticker component ────────────────────────────────────────────────────────

function ClientTicker({ clients }: { clients: string[] }) {
  const doubled = [...clients, ...clients]
  return (
    <div className="overflow-hidden mt-6 py-4 border-t border-slate-100 ticker-mask">
      <div
        className="flex gap-8 animate-ticker whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-slate-500 shrink-0 hover:text-primary transition-colors duration-200"
          >
            <span className="w-2 h-2 rounded-full bg-primary/60 inline-block animate-pulse" />
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

// ─── Main section ─────────────────────────────────────────────────────────────

export function GallerySection() {
  const [activeSector, setActiveSector] = useState("all")

  const current = sectors.find((s) => s.id === activeSector) ?? sectors[0]
  const displaySectors = sectors.filter((s) => s.id !== "all")

  return (
    <section id="clients" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">

        {/* Header */}
        <AnimatedSection className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider animate-float-fast">
            شركاء النجاح
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight text-balance max-w-3xl mx-auto">
            ثقة أكثر من <span className="text-primary font-black">4,238+</span> مشروع منفذ
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-pretty text-sm sm:text-base leading-relaxed">
            خدمنا كبرى الهيئات والمؤسسات الحكومية والخاصة والبنوك والمستشفيات في مصر والمنطقة بإجمالي يتجاوز <strong className="text-slate-800">21,889 شباك خدمة</strong>.
          </p>
        </AnimatedSection>

        {/* Summary stats with premium cards */}
        <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "إجمالي المشاريع", value: "4,238+", sub: "حتى عام 2026" },
            { label: "شبابيك الخدمة", value: "21,889+", sub: "منفذة بالكامل" },
            { label: "قطاعات مجهزة", value: "12+", sub: "قطاع خدمي" },
            { label: "سنوات خبرة ممتدة", value: "20+", sub: "سنة في تصنيع الأنظمة" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white hover:bg-slate-50 border border-slate-200/80 hover:border-primary/25 rounded-2xl p-5 text-center transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md group"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl md:text-3xl font-black text-primary mb-1 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-850">{stat.label}</div>
              <div className="text-[10px] text-slate-400 mt-1">{stat.sub}</div>
            </div>
          ))}
        </AnimatedSection>

        {/* Sector filter tabs */}
        <AnimatedSection delay={100} className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => {
            const Icon = sector.icon
            const isActive = activeSector === sector.id
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-300 cursor-pointer ${isActive ? sector.activeColor + " border-transparent shadow-lg shadow-primary/10 scale-105" : sector.color + " hover:bg-slate-100 hover:scale-[1.02]"
                  }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {sector.label}
              </button>
            )
          })}
        </AnimatedSection>

        {/* Sector detail card */}
        {activeSector === "all" ? (
          // All sectors grid
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {displaySectors.map((sector) => {
              const Icon = sector.icon
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className="bg-white border border-slate-200/80 rounded-2xl p-5 text-right hover:border-primary/35 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl border ${sector.color} shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0 text-right">
                      <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors mb-1 text-sm sm:text-base">
                        {sector.label}
                      </h3>
                      <div className="flex gap-4 text-xs text-slate-500 font-semibold">
                        <span>{sector.projects.toLocaleString("ar-EG")} مشروع</span>
                        <span>{sector.windows.toLocaleString("ar-EG")} شباك</span>
                      </div>
                    </div>
                  </div>
                  {sector.clients && (
                    <div className="mt-4 flex flex-wrap gap-1.5 justify-start">
                      {sector.clients.slice(0, 3).map((c) => (
                        <span
                          key={c}
                          className="text-[10px] sm:text-xs bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded-lg text-slate-600 border border-slate-200/40 font-medium"
                        >
                          {c}
                        </span>
                      ))}
                      {sector.clients.length > 3 && (
                        <span className="text-[10px] sm:text-xs bg-primary/10 px-2.5 py-1 rounded-lg text-primary font-bold">
                          +{sector.clients.length - 3} آخرين
                        </span>
                      )}
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        ) : (
          // Single sector expanded view
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
            {/* Sector header */}
            <div className="px-6 py-5 flex items-center gap-4 border-b border-slate-100">
              {(() => {
                const Icon = current.icon
                return (
                  <div className={`p-3 rounded-xl border ${current.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                )
              })()}
              <div className="text-right">
                <h3 className="text-base sm:text-lg font-black text-slate-900">{current.label}</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-0.5">
                  {current.projects.toLocaleString("ar-EG")} مشروع مجهّز &nbsp;·&nbsp;{" "}
                  {current.windows.toLocaleString("ar-EG")} شباك خدمة قيد العمل
                </p>
              </div>
            </div>

            {/* Client grid */}
            {current.clients && (
              <div className="p-6">
                <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {current.clients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center gap-2.5 bg-slate-50/50 hover:bg-slate-50 rounded-xl px-3.5 py-3 border border-slate-150 hover:border-primary/25 transition-all text-right"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-slate-705 leading-snug text-right">{client}</span>
                    </div>
                  ))}
                </div>

                {/* Scrolling ticker */}
                <ClientTicker clients={current.clients} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Trust logo board wrapper */}
      <AnimatedSection delay={150} className="container relative mx-auto px-4 mt-20 z-10">
        <div className="bg-white border border-slate-200 rounded-[28px] p-6 sm:p-10 flex flex-col items-center justify-center shadow-sm hover:border-primary/20 transition-all duration-500">
          <p className="text-xs sm:text-sm font-black text-slate-500 uppercase tracking-widest mb-6">بعض كبرى الهيئات والشركات المجهزة بأنظمتنا</p>
          <div className="w-full flex justify-center max-w-4xl hover:scale-[1.01] transition-transform duration-500">
            <img 
              className="rounded-2xl border border-slate-100 shadow-lg opacity-100 object-contain max-h-56 sm:max-h-72" 
              src="/images/logos.png" 
              alt="QSERVE Clients Board Logo" 
              style={{ width: "95%" }}
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
