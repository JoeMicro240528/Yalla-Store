"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    title: "نظام استدعاء الممرضات",
    titleEn: "Nurses Call System",
    href: "/nurses-call-system",
    description: "حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة للمرضى"
  },
  {
    title: "أنظمة انتظار العملاء كيوسيرف",
    titleEn: "QSERVE Queuing System",
    href: "/queuing-system",
    description: "نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء"
  },
  {
    title: "كروت بروكسيمتي",
    titleEn: "Proximity Card",
    href: "/proximity-card",
    description: "كروت الدخول الذكية للتحكم في الوصول والحضور"
  },
  {
    title: "كروت ماي فير",
    titleEn: "Mifare Card",
    href: "/mifare-card",
    description: "كروت ذكية عالية الأمان للتطبيقات المتعددة"
  },
  {
    title: "طباعة كروت بلاستيك",
    titleEn: "ID Card Printing",
    href: "/id-card-printing",
    description: "خدمات طباعة كروت الهوية والعضوية بجودة عالية"
  },
  {
    title: "طابعات الكروت",
    titleEn: "ID Card Printers",
    href: "/id-card-printers",
    description: "طابعات كروت الهوية من أفضل العلامات التجارية"
  },
  {
    title: "أجهزة الخدمات الذاتية",
    titleEn: "Self Service Kiosks",
    href: "/self-service-kiosks",
    description: "أجهزة خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة"
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg gradient-primary">
            <span className="text-xl font-bold text-primary-foreground">Q</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">QSERVE</span>
            <span className="text-xs text-muted-foreground">Yalla Store</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  الرئيسية
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>منتجاتنا</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products.map((product) => (
                    <li key={product.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={product.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-bold leading-none text-foreground">{product.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {product.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/#about" className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  من نحن
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/#contact" className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                )}>
                  تواصل معنا
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild className="gradient-primary hover:opacity-90">
            <a href="https://wa.me/201227993999" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>اتصل بنا</span>
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">فتح القائمة</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-6">
              <Link
                href="/"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                الرئيسية
              </Link>
              <div className="space-y-3">
                <span className="text-lg font-medium">منتجاتنا</span>
                <div className="flex flex-col gap-2 pr-4">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/#about"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/#contact"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                تواصل معنا
              </Link>
              <Button asChild className="gradient-primary hover:opacity-90 mt-4">
                <a href="https://wa.me/201227993999" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>اتصل بنا</span>
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
