"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Phone, Monitor, Users, Clock, Bell } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container relative mx-auto px-4 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">اول مصنع في مصر</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
              نظام انتظار العملاء
              <span className="block text-primary mt-2">كيوسيرف QSERVE</span>
            </h1>

            <p className="text-lg md:text-xl text-background/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة في المستشفيات والبنوك والمؤسسات الحكومية والخاصة
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="gradient-primary hover:opacity-90 text-lg px-8">
                <Link href="/#services">
                  اكتشف خدماتنا
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background/20 text-black hover:bg-background/10 text-lg px-8">
                <a href="https://wa.me/201227993999">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل بنا
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-background/10">
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-primary">+500</div>
                <div className="text-sm text-background/60">عميل سعيد</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-primary">+15</div>
                <div className="text-sm text-background/60">سنة خبرة</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-primary">+1000</div>
                <div className="text-sm text-background/60">مشروع منفذ</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central Display */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-32 bg-card rounded-2xl shadow-2xl flex items-center justify-center animate-float">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">A001</div>
                  <div className="text-sm text-muted-foreground">الرقم الحالي</div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute top-10 right-10 w-32 h-24 bg-card rounded-xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-center p-3">
                  <Monitor className="h-8 w-8 text-primary mx-auto mb-1" />
                  <span className="text-xs text-muted-foreground">شاشات عرض</span>
                </div>
              </div>

              <div className="absolute top-20 left-0 w-32 h-24 bg-card rounded-xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-center p-3">
                  <Users className="h-8 w-8 text-primary mx-auto mb-1" />
                  <span className="text-xs text-muted-foreground">إدارة العملاء</span>
                </div>
              </div>

              <div className="absolute bottom-20 right-0 w-32 h-24 bg-card rounded-xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="text-center p-3">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-1" />
                  <span className="text-xs text-muted-foreground">توفير الوقت</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-10 w-32 h-24 bg-card rounded-xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <div className="text-center p-3">
                  <Bell className="h-8 w-8 text-primary mx-auto mb-1" />
                  <span className="text-xs text-muted-foreground">تنبيهات ذكية</span>
                </div>
              </div>

              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-primary/20 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/10 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/5 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-background/40">
        <span className="text-sm">اكتشف المزيد</span>
        <div className="w-6 h-10 rounded-full border-2 border-background/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-background/40 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
