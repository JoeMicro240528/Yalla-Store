import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

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
  accentColor = "primary"
}: ProductPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden gradient-hero">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="container relative mx-auto px-4">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-background/60">
                <li>
                  <Link href="/" className="hover:text-background transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>/</li>
                <li className="text-background">{title}</li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <HeroIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">{titleEn}</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-background leading-tight">
                  {title}
                </h1>

                <p className="text-xl text-background/70">
                  {subtitle}
                </p>

                <p className="text-background/60 leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="gradient-primary hover:opacity-90">
                    <a href="https://wa.me/201227993999">
                      <Phone className="ml-2 h-5 w-5" />
                      اتصل للاستفسار
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-background/20 text-black hover:bg-background/10">
                    <Link href="/#contact">
                      طلب عرض سعر
                      <ArrowLeft className="mr-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Hero Visual */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImage}
                      alt={title}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                  </div>
                  {/* Floating icon badge */}
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-card shadow-xl flex items-center justify-center animate-float">
                    <HeroIcon className="h-10 w-10 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                المميزات
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                مميزات {title}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  الفوائد
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  لماذا تختار {title}؟
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats/Specs Card */}
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                {specs && specs.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold text-foreground mb-6">المواصفات الفنية</h3>
                    <div className="space-y-4">
                      {specs.map((spec, index) => (
                        <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-0">
                          <span className="text-muted-foreground">{spec.label}</span>
                          <span className="font-medium text-foreground">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {applications && applications.length > 0 && (
                  <div className={specs && specs.length > 0 ? "mt-8" : ""}>
                    <h3 className="text-xl font-bold text-foreground mb-6">مجالات التطبيق</h3>
                    <div className="flex flex-wrap gap-2">
                      {applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              هل تحتاج إلى {title}؟
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://wa.me/201227993999">
                  <Phone className="ml-2 h-5 w-5" />
                  اتصل الآن
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/20 text-black hover:bg-primary-foreground/10">
                <Link href="/#contact">
                  أرسل استفسارك
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
