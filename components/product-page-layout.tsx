import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { AnimatedSection } from "@/components/animated-section"
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { WhatsApp } from "@/lib/utils"

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface ProductSpec {
  label: string
  value: string
}

interface ProductPageLayoutProps {
  title: string
  titleEn: string
  subtitle: string
  description: string
  features: Feature[]
  benefits: string[]
  specs?: ProductSpec[]
  applications?: string[]
  heroIcon: LucideIcon
  heroImage: string
  accentColor?: string
}

export function ProductPageLayout({
  title,
  titleEn,
  subtitle,
  description,
  features,
  benefits,
  specs,
  applications,
  heroIcon: HeroIcon,
  heroImage,
}: ProductPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">

        {/* ── HERO SECTION ───────────────────────────────────────── */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-tr from-slate-50 via-white to-blue-50/30 pt-24 pb-20">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,103,203,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,103,203,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          {/* Glow blobs */}
          <div className="absolute top-10 right-20 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[350px] h-[300px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />


          <div className="container relative mx-auto px-4 z-10">
            {/* Breadcrumb */}
            <nav className="mb-10">
              <ol className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                <li><Link href="/" className="hover:text-primary transition-colors duration-200">الرئيسية</Link></li>
                <li><ArrowLeft className="h-3.5 w-3.5" /></li>
                <li className="text-primary font-semibold">{title}</li>
              </ol>
            </nav>

            <div className="grid gap-16 lg:grid-cols-2 items-center">
              {/* Left: Content */}
              <div className="space-y-8 text-right order-2 lg:order-1" style={{ animation: 'fadeSlideUp 0.7s ease both' }}>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6 animate-float-fast">
                    <HeroIcon className="h-4 w-4" />
                    <span>{titleEn}</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-black text-slate-900 leading-[1.2] tracking-tight mb-5">
                    {title}
                  </h1>

                  <p className="text-xl text-primary font-bold mb-4">{subtitle}</p>

                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg max-w-2xl">{description}</p>
                </div>

                <div className="flex flex-wrap gap-4 justify-end" style={{ animation: 'fadeSlideUp 0.7s ease 0.15s both' }}>
                  <a
                    href="https://wa.me/201227993999"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/95 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <WhatsApp size={18} className="text-green-300" />
                    اتصل للاستفسار
                  </a>
                  <Link
                    href="https://wa.me/201227993999"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-700 border border-slate-200 bg-white hover:bg-slate-50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  >
                    طلب عرض سعر
                    <ArrowLeft className="h-4 w-4" />
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-3 justify-end" style={{ animation: 'fadeSlideUp 0.7s ease 0.3s both' }}>
                  {[
                    { label: "ضمان سنتين", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                    { label: "تركيب مجاني", color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { label: "دعم 24/7", color: "bg-purple-50 text-purple-700 border-purple-200" },
                  ].map((tag) => (
                    <span key={tag.label} className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold border ${tag.color}`}>
                      <CheckCircle className="h-3.5 w-3.5" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Hero Image */}
              <div className="order-1 lg:order-2 relative flex items-center justify-center" style={{ animation: 'fadeSlideUp 0.9s ease 0.1s both' }}>
                <div className="relative w-full max-w-lg">
                  <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200/80 aspect-[4/3] group">
                    <Image
                      src={heroImage}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
                  </div>

                  {/* Floating icon badge */}
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-2xl bg-white shadow-xl border border-slate-200/80 flex items-center justify-center animate-float">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-lg shadow-primary/30">
                      <HeroIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Floating stat badge */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl border border-slate-200/80 px-5 py-3 animate-float-slow">
                    <p className="text-xs text-slate-400 font-semibold">عملاء راضون</p>
                    <p className="text-2xl font-black text-slate-900">+500</p>
                    <p className="text-[10px] text-primary font-bold">في أنحاء مصر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES SECTION ───────────────────────────────────── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[400px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-5 animate-float-fast">
                مميزات النظام
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                لماذا تختار <span className="text-primary">{title}</span>؟
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                نوفر أحدث التقنيات والحلول المتكاملة لتلبية احتياجاتك بأعلى مستويات الجودة والموثوقية
              </p>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 80}>
                  <div className="group relative bg-white border border-slate-200/80 rounded-2xl p-7 hover:border-primary/25 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full overflow-hidden text-right">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-700 group-hover:border-transparent transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                        <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-base font-black text-slate-900 mb-2.5 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── BENEFITS + SPECS SECTION ───────────────────────────── */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-primary/[0.04] rounded-full blur-[110px] pointer-events-none" />

          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-start">

              {/* Benefits */}
              <AnimatedSection>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
                  الفوائد والمزايا
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 text-right leading-tight">
                  ما الذي ستحصل عليه؟
                </h2>
                <div className="space-y-3.5">
                  {benefits.map((benefit, index) => (
                    <AnimatedSection key={index} delay={index * 55}>
                      <div className="flex items-start gap-4 bg-white border border-slate-200/80 rounded-xl p-4 hover:border-primary/25 hover:shadow-md transition-all duration-300 group text-right">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300 mt-0.5">
                          <CheckCircle className="h-4 w-4 text-emerald-600 group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-slate-700 font-semibold text-sm leading-relaxed">{benefit}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </AnimatedSection>

              {/* Specs + Applications + Quick Contact */}
              <AnimatedSection delay={150}>
                <div className="space-y-6">
                  {/* Specs Card */}
                  {specs && specs.length > 0 && (
                    <div className="bg-white border border-slate-200/80 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-500">
                      <div className="px-6 py-5 border-b border-slate-100 bg-gradient-to-r from-primary/5 to-transparent">
                        <h3 className="text-lg font-black text-slate-900 text-right">المواصفات الفنية</h3>
                      </div>
                      <div className="p-2">
                        {specs.map((spec, index) => (
                          <div
                            key={index}
                            className={`flex justify-between items-center px-4 py-3.5 rounded-xl hover:bg-slate-50 transition-colors group/spec ${index < specs.length - 1 ? 'border-b border-slate-100' : ''}`}
                          >
                            <span className="font-black text-sm bg-primary/5 text-primary px-3 py-1 rounded-lg border border-primary/15 group-hover/spec:bg-primary group-hover/spec:text-white group-hover/spec:border-primary transition-all duration-200">{spec.value}</span>
                            <span className="text-slate-500 font-semibold text-sm">{spec.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Applications */}
                  {applications && applications.length > 0 && (
                    <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-500">
                      <h3 className="text-lg font-black text-slate-900 mb-5 text-right">مجالات التطبيق</h3>
                      <div className="flex flex-wrap gap-2.5 justify-end">
                        {applications.map((app, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-default"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Contact Card */}
                  <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-6 text-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-primary/20">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-blue-400/15 rounded-full blur-xl" />
                    <div className="relative z-10 text-right">
                      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">تواصل معنا الآن</p>
                      <h4 className="text-xl font-black mb-2">هل تحتاج مساعدة؟</h4>
                      <p className="text-white/75 text-sm mb-5 leading-relaxed">مهندسونا متاحون على مدار الساعة</p>
                      <a
                        href="https://wa.me/201227993999"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-primary font-bold rounded-xl text-sm hover:bg-slate-50 transition-colors shadow-lg"
                      >
                        <WhatsApp size={16} className="text-green-600" />
                        ابدأ المحادثة
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── CTA SECTION ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-br from-primary via-blue-700 to-blue-900 shadow-2xl shadow-primary/25">
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/15 rounded-full blur-2xl" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />
                <div className="absolute top-8 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-float" />
                <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-float-fast" />

                <div className="relative z-10 px-8 py-16 sm:px-16 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-float-fast">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    متاحون الآن للرد
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                    هل تحتاج إلى <span className="text-yellow-300">{title}</span>؟
                  </h2>
                  <p className="text-white/75 mb-10 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                    تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجات منشأتك
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a
                      href="https://wa.me/201227993999"
                      className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-primary font-bold rounded-xl text-sm hover:bg-slate-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5"
                    >
                      <WhatsApp size={18} className="text-green-600" />
                      اتصل الآن عبر واتساب
                    </a>
                    <Link
                      href="/#contact"
                      className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 border border-white/25 text-white font-bold rounded-xl text-sm hover:bg-white/20 transition-all duration-200 hover:-translate-y-0.5"
                    >
                      <MessageCircle className="h-4 w-4" />
                      أرسل استفسارك
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
