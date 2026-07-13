"use client"

import Link from "next/link"
import { 
  ArrowLeft, 
  Phone, 
  Users, 
  Clock, 
  Award, 
  ChevronDown, 
  Bell, 
  Tv, 
  TrendingUp, 
  CheckCircle,
  Sparkles
} from "lucide-react"
import { WhatsApp } from "@/lib/utils"

const stats = [
  { value: "+500", label: "عميل سعيد", sub: "في أنحاء الجمهورية" },
  { value: "+20", label: "سنة خبرة", sub: "في تصنيع الأنظمة" },
  { value: "+1000", label: "مشروع منفذ", sub: "بمختلف القطاعات" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-24 lg:pt-28 pb-16">
      {/* Background image & gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.04] scale-105 transition-all duration-1000"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        aria-hidden="true"
      />
      
      {/* Ultra light modern mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 via-white to-slate-100/30" aria-hidden="true" />

      {/* Futuristic glow meshes */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-12 left-10 w-[450px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Grid Overlays */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,103,203,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,103,203,0.08) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="container relative mx-auto px-4 z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-8 text-right order-2 lg:order-1">
            {/* Pulsing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-bold shadow-sm animate-float-fast">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-80" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <Sparkles className="h-4 w-4 text-primary shrink-0" />
              أول مصنع في مصر متخصص في تصنيع نظام استدعاء الممرضات ونظام انتظار العملاء
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 leading-[1.2] tracking-tight">
              نظام انتظار العملاء و <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cyan-600">
                استدعاء الممرضات كيوسيرف
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-semibold">
              حلول تقنية وهندسية متطورة لإدارة وتوجيه انتظار العملاء، وتحسين تجربة الخدمة في المستشفيات، البنوك، والمؤسسات الحكومية والخاصة بجودة تصنيع محلية بمعايير دولية.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-start">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary/95 transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-primary/55 hover:-translate-y-0.5 active:translate-y-0"
              >
                اكتشف منتجاتنا
                <ArrowLeft className="h-4 w-4 shrink-0" />
              </Link>
              <a
                href="https://wa.me/201227993999"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold text-slate-700 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <WhatsApp size={18} className="text-green-600 shrink-0" />
                تواصل سريع
              </a>
            </div>

            {/* Premium statistics strip */}
            <div className="grid grid-cols-3 gap-4 p-1.5 bg-slate-50/50 border border-slate-200/80 rounded-2xl max-w-xl shadow-sm backdrop-blur-md">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-white/80 transition-all duration-300 group border border-transparent hover:border-slate-100">
                  <span className="text-2xl sm:text-3xl font-black text-primary group-hover:scale-105 transition-transform duration-300">{stat.value}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{stat.label}</span>
                  <span className="text-[10px] text-slate-400 mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column: Stunning Interactive 3D Mockup Visuals */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[480px] lg:h-[550px] order-1 lg:order-2">
            
            {/* Visual glow backdrop behind the mockup */}
            <div className="absolute w-[350px] h-[350px] bg-primary/10 rounded-full blur-[80px] animate-pulse-glow" />

            {/* Central Mock Kiosk Device Frame (kept dark/futuristic for hardware representation) */}
            <div className="relative w-72 h-[380px] bg-neutral-900 border border-white/10 rounded-[32px] p-4 shadow-2xl shadow-black/45 flex flex-col justify-between overflow-hidden animate-float-slow">
              
              {/* Screen Top Status bar */}
              <div className="flex justify-between items-center px-1.5 text-[10px] text-white/50 font-mono">
                <span>02:45 PM</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>QSERVE OS</span>
              </div>

              {/* Main kiosk screen UI */}
              <div className="flex-1 bg-black/50 border border-white/5 rounded-[20px] p-3.5 mt-2 flex flex-col justify-between">
                <div className="text-center space-y-1">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider">نظام انتظار العملاء</p>
                  <h4 className="text-xs font-extrabold text-white">الرجاء اختيار الخدمة</h4>
                </div>

                {/* Dummy Buttons inside kiosk screen */}
                <div className="space-y-2 my-4">
                  <div className="w-full py-2 px-2.5 bg-primary/10 border border-primary/30 rounded-lg text-right text-[10px] font-bold text-white flex items-center justify-between">
                    <span>A</span>
                    <span>خدمة العملاء</span>
                  </div>
                  <div className="w-full py-2 px-2.5 bg-white/5 border border-white/5 rounded-lg text-right text-[10px] font-bold text-white/70 flex items-center justify-between">
                    <span>B</span>
                    <span>الحسابات والفرع</span>
                  </div>
                  <div className="w-full py-2 px-2.5 bg-white/5 border border-white/5 rounded-lg text-right text-[10px] font-bold text-white/70 flex items-center justify-between">
                    <span>C</span>
                    <span>الاستعلامات والشكاوى</span>
                  </div>
                </div>

                {/* Footer brand inside screen */}
                <div className="text-center text-[8px] text-white/40">
                  <span>QSERVE YALLA STORE</span>
                </div>
              </div>

              {/* Physical ticket printer slot mock */}
              <div className="h-6 bg-neutral-800 border-t border-white/10 mt-3 rounded-b-xl flex items-center justify-center relative">
                <div className="w-20 h-1.5 bg-black rounded-full" />
                {/* Emerging Virtual Ticket */}
                <div className="absolute -top-1 w-16 h-8 bg-white border border-neutral-300 rounded-t shadow-md p-1 flex flex-col justify-between font-mono animate-float-fast">
                  <span className="text-[6px] font-black text-black">A-104</span>
                  <span className="text-[4px] text-neutral-500">QSERVE TICKET</span>
                </div>
              </div>
            </div>

            {/* FLOATING CARD 1: Live Status Counter (Float Speed: Regular) */}
            <div className="absolute top-12 right-0 sm:-right-6 w-48 p-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/40 flex items-center gap-3.5 animate-float text-right">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center shrink-0">
                <Tv className="h-5 w-5 text-cyan-600" />
              </div>
              <div className="text-right flex-1">
                <p className="text-[10px] text-slate-400 font-bold">الرقم الحالي</p>
                <p className="text-base font-black text-slate-900">A-103</p>
                <span className="text-[9px] text-cyan-600 font-bold">شباك الخدمة 2</span>
              </div>
            </div>

            {/* FLOATING CARD 2: Active Nurse Calling Status (Float Speed: Fast) */}
            <div className="absolute bottom-16 left-0 sm:-left-6 w-52 p-4 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/40 flex items-center gap-3.5 animate-float-fast text-right">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center shrink-0 animate-pulse">
                <Bell className="h-5 w-5 text-rose-600" />
              </div>
              <div className="text-right flex-1">
                <p className="text-[10px] text-rose-600 font-extrabold flex items-center gap-1 justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600 animate-ping" />
                  نداء عاجل
                </p>
                <p className="text-sm font-black text-slate-900">غرفة مريض 205</p>
                <span className="text-[9px] text-slate-400">استجابة فورية</span>
              </div>
            </div>

            {/* FLOATING CARD 3: Analytics Trend Indicator (Float Speed: Slow) */}
            <div className="absolute top-1/2 left-4 w-36 p-3 bg-white/90 backdrop-blur-md border border-slate-200/60 rounded-xl shadow-lg flex items-center gap-2.5 animate-float-slow text-right">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </div>
              <div className="text-right flex-1">
                <p className="text-[8px] text-slate-400 font-bold">كفاءة الخدمة</p>
                <p className="text-xs font-black text-slate-900">تحسن بنسبة 45%</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Scroll indicator with nice visual weight */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest">اكتشف المزيد</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  )
}
