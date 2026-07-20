"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Phone, 
  ChevronDown, 
  X, 
  Bell, 
  Users, 
  CreditCard, 
  Layers, 
  Printer, 
  Settings, 
  Cpu,
  Monitor,
  ArrowLeft
} from "lucide-react"
import { cn } from "@/lib/utils"
import { WhatsApp } from "@/lib/utils"

const products = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    href: "/nurses-call-system",
    description: "حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة",
    icon: Bell,
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "أنظمة انتظار العملاء كيوسيرف",
    titleEn: "QSERVE Queuing System",
    href: "/queuing-system",
    description: "نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء",
    icon: Users,
    color: "text-cyan-600 bg-cyan-50"
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    href: "/proximity-card",
    description: "كروت الدخول الذكية للتحكم في الوصول والحضور",
    icon: CreditCard,
    color: "text-emerald-600 bg-emerald-50"
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    href: "/mifare-card",
    description: "كروت ذكية عالية الأمان للتطبيقات المتعددة",
    icon: Layers,
    color: "text-indigo-600 bg-indigo-50"
  },
  {
    title: "طباعة كروت بلاستيك",
    titleEn: "ID Card Printing",
    href: "/id-card-printing",
    description: "خدمات طباعة كروت الهوية والعضوية بجودة عالية",
    icon: Printer,
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    href: "/id-card-printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية",
    icon: Settings,
    color: "text-amber-600 bg-amber-50"
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    href: "/self-service-kiosks",
    description: "أجهزة خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة",
    icon: Cpu,
    color: "text-rose-600 bg-rose-50"
  },
  {
    title: "شاشات تفاعلية ذكية",
    titleEn: "Smart Interactive Boards",
    href: "/smart-boards",
    description: "شاشات لمس ذكية للتعليم والاجتماعات بتقنية 4K وتعاون فوري",
    icon: Monitor,
    color: "text-teal-600 bg-teal-50"
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-2.5 shadow-md shadow-slate-100/30"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-700 shadow-lg shadow-primary/30 transition-all duration-300 group-hover:shadow-primary/65 group-hover:scale-105">
            <span className="text-lg font-black text-white tracking-wider">Q</span>
            <span className="absolute -inset-0.5 rounded-xl bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div> */}
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold text-primary tracking-wide transition-colors group-hover:text-shadow-sidebar-primary-foreground">QSERVE</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-0.5">Yalla Store</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1.5 text-slate-700">
          <Link
            href="/"
            className="relative px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg hover:bg-slate-100/80 transition-all duration-200"
          >
            الرئيسية
          </Link>

          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button 
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg hover:bg-slate-100/80 transition-all duration-200 cursor-pointer"
            >
              منتجاتنا
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", productsOpen && "rotate-180")} />
            </button>
            
            <div className={cn(
              "absolute top-full right-0 mt-3 w-[620px] bg-white/95 backdrop-blur-2xl border border-slate-200/80 rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-2 transition-all duration-300 origin-top-right",
              productsOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            )}>
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <Link
                    key={product.href}
                    href={product.href}
                    onClick={() => setProductsOpen(false)}
                    className="flex gap-4 p-3.5 rounded-xl hover:bg-slate-50 transition-all duration-200 group/item border border-transparent hover:border-slate-100"
                  >
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 group-hover/item:scale-110", product.color)}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                      <span className="text-sm font-bold text-slate-800 group-hover/item:text-primary transition-colors flex items-center gap-1 justify-end">
                        {product.title}
                        <ArrowLeft className="h-3.5 w-3.5 opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-[-4px] transition-all" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{product.description}</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          <Link
            href="/#about"
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg hover:bg-slate-100/80 transition-all duration-200"
          >
            من نحن
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary rounded-lg hover:bg-slate-100/80 transition-all duration-200"
          >
            تواصل معنا
          </Link>
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/201227993999"
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary/95 rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/45 hover:-translate-y-0.5 active:translate-y-0"
          >
            <WhatsApp size={18} className="text-green-300 animate-pulse" />
            اتصل بنا
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-slate-800 cursor-pointer hover:bg-slate-100 rounded-xl">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[310px] bg-white text-slate-800 border-0 p-0 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Sheet Header */}
              <div className="flex items-center justify-between p-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">Q</span>
                  </div>
                  <span className="text-base font-bold text-slate-800">QSERVE</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 rounded-lg hover:bg-slate-50">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Sheet Links */}
              <nav className="flex flex-col gap-1 p-5 overflow-y-auto flex-1 text-right">
                <Link
                  href="/"
                  className="px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  الرئيسية
                </Link>

                <div className="space-y-1 mt-2">
                  <span className="px-3 py-2 block text-xs font-bold text-slate-400 uppercase tracking-wider">منتجاتنا</span>
                  <div className="flex flex-col gap-1 pr-1">
                    {products.map((product) => {
                      const Icon = product.icon
                      return (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="flex items-center justify-between px-3 py-3 rounded-xl text-sm text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", product.color)}>
                              <Icon className="h-4 w-4" />
                            </div>
                            <span>{product.title}</span>
                          </div>
                          <ArrowLeft className="h-3.5 w-3.5 opacity-40" />
                        </Link>
                      )
                    })}
                  </div>
                </div>

                <div className="border-t border-slate-100 my-3" />

                <Link
                  href="/#about"
                  className="px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  من نحن
                </Link>
                <Link
                  href="/#contact"
                  className="px-3 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تواصل معنا
                </Link>
              </nav>

              {/* Sheet Footer */}
              <div className="p-5 border-t border-slate-100 bg-slate-50/50">
                <a
                  href="https://wa.me/201227993999"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 text-sm font-bold text-white bg-primary hover:bg-primary/95 rounded-xl transition-all shadow-lg shadow-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  <WhatsApp size={18} className="text-green-300 animate-pulse" />
                  اتصل بنا
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
