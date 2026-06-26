"use client"

import Link from "next/link"
import { ArrowLeft, Phone, Users, Clock, Award, ChevronDown } from "lucide-react"

const stats = [
  { value: "+500", label: "عميل سعيد" },
  { value: "+15", label: "سنة خبرة" },
  { value: "+1000", label: "مشروع منفذ" },
]

const features = [
  { icon: Users, label: "إدارة العملاء" },
  { icon: Clock, label: "توفير الوقت" },
  { icon: Award, label: "جودة عالية" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden="true"
      />

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-hero/80" aria-hidden="true" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/12 rounded-full blur-[120px] pointer-events-none" />

      {/* Bottom accent glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative mx-auto px-4 pt-28 pb-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          اول مصنع في مصر لتصنيع أنظمة الانتظار
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-tight text-balance max-w-4xl mb-6">
          نظام انتظار العملاء
          <span className="block text-primary mt-1">كيوسيرف QSERVE</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-hero-muted max-w-2xl leading-relaxed mb-10 text-pretty">
          حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة في المستشفيات والبنوك والمؤسسات الحكومية والخاصة
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
          >
            اكتشف خدماتنا
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/201227993999"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm font-semibold text-hero-foreground border border-hero-border hover:bg-white/5 transition-all hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            اتصل بنا
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-px bg-hero-border rounded-2xl overflow-hidden border border-hero-border w-full max-w-xl">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center gap-1 bg-hero py-6 px-4">
              <span className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-xs sm:text-sm text-hero-muted">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-hero-border bg-white/[0.03] text-hero-muted text-sm"
            >
              <Icon className="h-3.5 w-3.5 text-primary" />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-hero-muted/50">
        <span className="text-xs tracking-widest uppercase">اكتشف المزيد</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
