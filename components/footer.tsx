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
    <footer className="bg-neutral-950 text-white/80 border-t border-white/5 relative overflow-hidden">
      {/* Decorative light overlay */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 text-right">
          
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-700 shadow-md">
                <span className="text-lg font-black text-white">Q</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-base font-extrabold text-white">QSERVE</span>
                <span className="text-[10px] text-white/50 uppercase font-bold tracking-widest mt-0.5">Yalla Store</span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              أول مصنع وطني معتمد في جمهورية مصر العربية لتصنيع وتطوير أنظمة انتظار العملاء الرقمية (كيوسيرف) وأنظمة نداء الممرضات المتطورة بمواصفات هندسية أوروبية.
            </p>
            
            <div className="flex gap-3 pt-2 justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase text-white tracking-wider">منتجاتنا وأنظمتنا</h3>
            <ul className="space-y-2.5">
              {products.map((product) => (
                <li key={product.href}>
                  <Link
                    key={product.href}
                    href={product.href}
                    className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase text-white tracking-wider">روابط سريعة</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                  من نحن وقصة المصنع
                </Link>
              </li>
              <li>
                <Link href="/#products" className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                  كتالوج المنتجات الكامل
                </Link>
              </li>
              <li>
                <Link href="/#clients" className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                  أبرز شركاء النجاح
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200">
                  طلب استشارة مجانية
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase text-white tracking-wider">التواصل والمصنع</h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://wa.me/201227993999"
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200 justify-end"
                >
                  <span dir="ltr" className="font-semibold">+20 122 799 3999</span>
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@yallastore.com"
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/60 hover:text-primary transition-colors duration-200 justify-end"
                >
                  <span className="font-semibold">info@yallastore.com</span>
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-xs text-white/60 leading-relaxed justify-end">
                  <span className="text-right">المنطقة الصناعية - منطقة 1000 مصنع، التجمع الثالث، القاهرة الجديدة، القاهرة، مصر</span>
                  <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 pt-8 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 font-semibold order-2 sm:order-1">
            © {new Date().getFullYear()} مصنع كيوسيرف QSERVE (Yalla Store). جميع الحقوق محفوظة ومسجلة في مصر.
          </p>
          <div className="flex gap-4 text-xs text-white/40 font-semibold order-1 sm:order-2">
            <span className="hover:text-white transition-colors cursor-pointer">الشروط والأحكام</span>
            <span>·</span>
            <span className="hover:text-white transition-colors cursor-pointer">سياسة الخصوصية</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
