import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

const products = [
  { title: "نظام استدعاء الممرضات", href: "/nurses-call-system" },
  { title: "أنظمة انتظار العملاء", href: "/queuing-system" },
  { title: "كروت بروكسيمتي", href: "/proximity-card" },
  { title: "كروت ماي فير", href: "/mifare-card" },
  { title: "طباعة كروت بلاستيك", href: "/id-card-printing" },
  { title: "طابعات الكروت", href: "/id-card-printers" },
  { title: "أجهزة الخدمات الذاتية", href: "/self-service-kiosks" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">Q</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">QSERVE</span>
                <span className="text-xs text-muted">Yalla Store</span>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              اول مصنع في مصر لتصنيع نظام انتظار العملاء كيوسيرف - حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">منتجاتنا</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.href}>
                  <Link
                    href={product.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-sm text-muted hover:text-primary transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted hover:text-primary transition-colors">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="text-sm text-muted hover:text-primary transition-colors">
                  معرض الصور
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-muted hover:text-primary transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">معلومات التواصل</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/201227993999"
                  className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span dir="ltr">+20 122 799 3999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yallastore.com"
                  className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@yallastore.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-muted">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>المنطقة الصناعية - منطقة 1000 مصنع, التجمع الثالث, القاهرة الجديدة, القاهرة</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Yalla Store - QSERVE. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
