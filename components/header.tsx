"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    href: "/nurses-call-system",
    description: "حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة",
  },
  {
    title: "أنظمة انتظار العملاء كيوسيرف",
    titleEn: "QSERVE Queuing System",
    href: "/queuing-system",
    description: "نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء",
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    href: "/proximity-card",
    description: "كروت الدخول الذكية للتحكم في الوصول والحضور",
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    href: "/mifare-card",
    description: "كروت ذكية عالية الأمان للتطبيقات المتعددة",
  },
  {
    title: "طباعة كروت بلاستيك",
    titleEn: "ID Card Printing",
    href: "/id-card-printing",
    description: "خدمات طباعة كروت الهوية والعضوية بجودة عالية",
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    href: "/id-card-printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية",
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    href: "/self-service-kiosks",
    description: "أجهزة خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-nav/95 backdrop-blur-md border-b border-nav-border shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary shadow-md shadow-primary/30 transition-shadow group-hover:shadow-primary/50">
            <span className="text-base font-bold text-primary-foreground">Q</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold text-nav-foreground tracking-wide">QSERVE</span>
            <span className="text-[10px] text-nav-muted uppercase tracking-widest">Yalla Store</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-nav-foreground/80 hover:text-nav-foreground hover:bg-white/5 rounded-md transition-colors"
          >
            الرئيسية
          </Link>

          {/* Products Dropdown */}
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-nav-foreground/80 hover:text-nav-foreground hover:bg-white/5 rounded-md transition-colors">
              منتجاتنا
              <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", productsOpen && "rotate-180")} />
            </button>
            {productsOpen && (
              <div className="absolute top-full right-0 mt-2 w-[580px] bg-nav-surface border border-nav-border rounded-xl shadow-2xl shadow-black/40 p-4 grid grid-cols-2 gap-1">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="flex flex-col gap-0.5 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-nav-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </span>
                    <span className="text-xs text-nav-muted line-clamp-1">{product.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#about"
            className="px-4 py-2 text-sm font-medium text-nav-foreground/80 hover:text-nav-foreground hover:bg-white/5 rounded-md transition-colors"
          >
            من نحن
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-2 text-sm font-medium text-nav-foreground/80 hover:text-nav-foreground hover:bg-white/5 rounded-md transition-colors"
          >
            تواصل معنا
          </Link>
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/201227993999"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-all shadow-md shadow-primary/20 hover:shadow-primary/40"
          >
            <Phone className="h-3.5 w-3.5" />
            اتصل بنا
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-nav-foreground hover:bg-white/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-nav-surface border-nav-border p-0">
            <div className="flex flex-col h-full">
              {/* Sheet Header */}
              <div className="flex items-center justify-between p-5 border-b border-nav-border">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">Q</span>
                  </div>
                  <span className="text-sm font-bold text-nav-foreground">QSERVE</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="text-nav-muted hover:text-nav-foreground transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Sheet Links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                <Link
                  href="/"
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-nav-foreground hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  الرئيسية
                </Link>

                <div className="space-y-1">
                  <span className="px-3 py-2.5 block text-sm font-semibold text-nav-foreground">منتجاتنا</span>
                  <div className="flex flex-col gap-0.5 pr-2">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="px-3 py-2 rounded-lg text-sm text-nav-muted hover:text-nav-foreground hover:bg-white/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/#about"
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-nav-foreground hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  من نحن
                </Link>
                <Link
                  href="/#contact"
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-nav-foreground hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  تواصل معنا
                </Link>
              </nav>

              {/* Sheet Footer */}
              <div className="p-4 border-t border-nav-border">
                <a
                  href="https://wa.me/201227993999"
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4" />
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
