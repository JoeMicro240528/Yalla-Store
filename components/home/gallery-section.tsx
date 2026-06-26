"use client"

import { useState } from "react"
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

// ─── Featured delighted customers (last page of the PDF) ────────────────────

const delightedCustomers = [
  // Banks
  { name: "Western Union", sector: "البنوك", color: "#FFD700", bg: "#7B3F00" },
  { name: "بنك ناصر الاجتماعي", sector: "البنوك", color: "#1E40AF", bg: "#DBEAFE" },
  { name: "SAIB Bank", sector: "البنوك", color: "#1E40AF", bg: "#DBEAFE" },
  { name: "بنك قناة السويس", sector: "البنوك", color: "#1E40AF", bg: "#DBEAFE" },
  { name: "البنك الزراعي المصري", sector: "البنوك", color: "#15803D", bg: "#DCFCE7" },
  // Telecom
  { name: "Etisalat", sector: "الاتصالات", color: "#00A651", bg: "#F0FDF4" },
  { name: "Orange", sector: "الاتصالات", color: "#FF6900", bg: "#FFF7ED" },
  { name: "WE", sector: "الاتصالات", color: "#7C3AED", bg: "#F5F3FF" },
  { name: "APPLE", sector: "الاتصالات", color: "#111827", bg: "#F9FAFB" },
  { name: "OPPO", sector: "الاتصالات", color: "#1D6534", bg: "#DCFCE7" },
  { name: "Xiaomi (mi)", sector: "الاتصالات", color: "#FF6900", bg: "#FFF7ED" },
  // Hospitals
  { name: "القصر العيني الفرنساوي", sector: "الصحة", color: "#BE123C", bg: "#FFF1F2" },
  { name: "مستشفى أبو الريش", sector: "الصحة", color: "#BE123C", bg: "#FFF1F2" },
  { name: "مستشفى الدمرداش", sector: "الصحة", color: "#BE123C", bg: "#FFF1F2" },
  { name: "مستشفى الطيران المدني", sector: "الصحة", color: "#BE123C", bg: "#FFF1F2" },
  { name: "معهد الكبد القومي", sector: "الصحة", color: "#BE123C", bg: "#FFF1F2" },
  // Government / Traffic
  { name: "إدارة مرور الجيزة", sector: "المرور", color: "#B45309", bg: "#FFFBEB" },
  { name: "إدارة مرور القاهرة", sector: "المرور", color: "#B45309", bg: "#FFFBEB" },
  { name: "الأحوال المدنية", sector: "الحكومة", color: "#374151", bg: "#F3F4F6" },
  { name: "حياة كريمة", sector: "الحكومة", color: "#374151", bg: "#F3F4F6" },
  // Electricity
  { name: "شركة القناة للكهرباء", sector: "الكهرباء", color: "#92400E", bg: "#FFFBEB" },
  { name: "شمال القاهرة للكهرباء", sector: "الكهرباء", color: "#92400E", bg: "#FFFBEB" },
  { name: "جنوب الدلتا للكهرباء", sector: "الكهرباء", color: "#92400E", bg: "#FFFBEB" },
  // Aviation & Shipping
  { name: "مصر للطيران", sector: "الطيران", color: "#1D4ED8", bg: "#EFF6FF" },
  { name: "الخطوط الجوية القطرية", sector: "الطيران", color: "#6B0F1A", bg: "#FFF1F2" },
  { name: "COSCO SHIPPING", sector: "الملاحة", color: "#0E7490", bg: "#ECFEFF" },
  { name: "YANG MING SHIPPING", sector: "الملاحة", color: "#0E7490", bg: "#ECFEFF" },
  // Services & Companies
  { name: "IKEA", sector: "شركات", color: "#0051BA", bg: "#FFDA1A" },
  { name: "Jumia", sector: "شركات", color: "#F97316", bg: "#FFF7ED" },
  { name: "Careem", sector: "شركات", color: "#1DBF73", bg: "#F0FDF4" },
  { name: "B.Tech", sector: "شركات", color: "#EF4444", bg: "#FFF1F2" },
  { name: "العربي جروب", sector: "شركات", color: "#DC2626", bg: "#FFF1F2" },
  { name: "أوليمبك جروب", sector: "شركات", color: "#1E40AF", bg: "#DBEAFE" },
  { name: "ORASCOM", sector: "شركات", color: "#15803D", bg: "#DCFCE7" },
  { name: "نقابة الصيادلة", sector: "مؤسسات", color: "#6D28D9", bg: "#F5F3FF" },
  { name: "قناة السويس", sector: "مؤسسات", color: "#0E7490", bg: "#ECFEFF" },
  { name: "مكاتب التموين", sector: "التموين", color: "#15803D", bg: "#DCFCE7" },
]

// ─── Logo card ────────────────────────────────────────────────────────────────

function LogoCard({ customer }: { customer: typeof delightedCustomers[0] }) {
  const initials = customer.name
    .replace(/[\u0600-\u06FF\s]+/g, (m) => m.trim().charAt(0))
    .substring(0, 2)
    .toUpperCase() || customer.name.substring(0, 2).toUpperCase()

  return (
    <div className="flex-shrink-0 w-44 h-24 rounded-xl border border-border bg-card flex flex-col items-center justify-center gap-1.5 px-3 mx-2 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200">
      {/* Colored initial badge */}
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0"
        style={{ backgroundColor: customer.bg, color: customer.color }}
      >
        {customer.name.charAt(0)}
      </div>
      <p className="text-xs font-medium text-foreground text-center leading-tight line-clamp-2">
        {customer.name}
      </p>
    </div>
  )
}

// ─── Infinite marquee row ─────────────────────────────────────────────────────

function MarqueeRow({
  customers,
  reverse = false,
  speed = 30,
}: {
  customers: typeof delightedCustomers
  reverse?: boolean
  speed?: number
}) {
  const doubled = [...customers, ...customers]
  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          animation: `marquee ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
          width: "max-content",
        }}
      >
        {doubled.map((c, i) => (
          <LogoCard key={i} customer={c} />
        ))}
      </div>
    </div>
  )
}

// ─── Ticker component ────────────────────────────────────────────────────────

function ClientTicker({ clients }: { clients: string[] }) {
  const doubled = [...clients, ...clients]
  return (
    <div className="overflow-hidden mt-6 py-3 border-t border-border/50">
      <div
        className="flex gap-6 animate-ticker whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 inline-block" />
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
    <section id="clients" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            عملاؤنا
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            ثقة أكثر من <span className="text-primary">4,238</span> مشروع منفذ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            خدمنا أكبر المؤسسات والشركات في مصر والوطن العربي عبر مختلف القطاعات بإجمالي أكثر من{" "}
            <strong className="text-foreground">21,889 شباك خدمة</strong> حتى عام 2022
          </p>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "إجمالي المشاريع", value: "4,238+", sub: "حتى 2022" },
            { label: "شبابيك الخدمة", value: "21,889+", sub: "منفذة" },
            { label: "قطاعات مختلفة", value: "12+", sub: "قطاع" },
            { label: "سنوات خبرة", value: "10+", sub: "سنة في السوق" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Sector filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sectors.map((sector) => {
            const Icon = sector.icon
            const isActive = activeSector === sector.id
            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer ${
                  isActive ? sector.activeColor + " border-transparent shadow-md" : sector.color
                }`}
              >
                <Icon className="w-4 h-4" />
                {sector.label}
              </button>
            )
          })}
        </div>

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
                  className="bg-card border border-border rounded-xl p-5 text-start hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg border ${sector.color} shrink-0`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                        {sector.label}
                      </h3>
                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span>{sector.projects.toLocaleString("ar-EG")} مشروع</span>
                        <span>{sector.windows.toLocaleString("ar-EG")} شباك</span>
                      </div>
                    </div>
                  </div>
                  {sector.clients && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {sector.clients.slice(0, 3).map((c) => (
                        <span
                          key={c}
                          className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                      {sector.clients.length > 3 && (
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
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
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            {/* Sector header */}
            <div className={`px-6 py-5 flex items-center gap-4 border-b border-border`}>
              {(() => {
                const Icon = current.icon
                return (
                  <div className={`p-3 rounded-xl border ${current.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                )
              })()}
              <div>
                <h3 className="text-lg font-bold text-foreground">{current.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {current.projects.toLocaleString("ar-EG")} مشروع &nbsp;·&nbsp;{" "}
                  {current.windows.toLocaleString("ar-EG")} شباك خدمة
                </p>
              </div>
            </div>

            {/* Client grid */}
            {current.clients && (
              <div className="p-6">
                <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {current.clients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center gap-2.5 bg-muted/50 rounded-lg px-3 py-2.5 border border-border/50"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary/70 shrink-0" />
                      <span className="text-sm text-foreground leading-snug">{client}</span>
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

      {/* ── Logo Wall ──────────────────────────────────────────────────── */}
      <div className="mt-20 border-t border-border pt-16">
        <div className="container mx-auto px-4 mb-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
            QSERVE&apos;s delighted customers
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            عملاء سعداء بخدماتنا
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed text-sm">
            من البنوك والمستشفيات إلى شركات الاتصالات والطيران — ثقة كبرى المؤسسات في مصر والمنطقة
          </p>
        </div>

        {/* Marquee rows with edge fades */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute inset-y-0 start-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
          {/* Right fade */}
          <div className="absolute inset-y-0 end-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

          <div className="flex flex-col gap-4 py-2">
            <MarqueeRow customers={delightedCustomers.slice(0, 19)} speed={35} />
            <MarqueeRow customers={delightedCustomers.slice(19)} reverse speed={28} />
          </div>
        </div>
      </div>
    </section>
  )
}
