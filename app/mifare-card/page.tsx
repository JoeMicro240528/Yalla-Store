import { ProductPageLayout } from "@/components/product-page-layout"
import { CreditCard, Shield, Cpu, Wallet, Key, Database, Zap, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "كروت ماي فير | Mifare Card | Yalla Store",
  description: "كروت ماي فير الذكية عالية الأمان للتطبيقات المتعددة - أنظمة الدفع والتحكم في الوصول والعضويات",
  keywords: "كروت ماي فير, Mifare Card, كروت ذكية, Smart Card, كروت الدفع الإلكتروني",
  alternates: {
    canonical: "https://yalla-store.com/mifare-card",
  }
}

const features = [
  {
    icon: Cpu,
    title: "شريحة ذكية",
    description: "شريحة إلكترونية متطورة مع ذاكرة داخلية لتخزين البيانات بأمان"
  },
  {
    icon: Shield,
    title: "تشفير متقدم",
    description: "نظام تشفير AES و DES ثلاثي لحماية قصوى للبيانات"
  },
  {
    icon: Wallet,
    title: "محفظة إلكترونية",
    description: "إمكانية استخدام الكارت كمحفظة إلكترونية للدفع والشحن"
  },
  {
    icon: Key,
    title: "تحكم متعدد",
    description: "صلاحيات متعددة المستويات للتحكم في الوصول والخدمات"
  },
  {
    icon: Database,
    title: "سعة تخزين",
    description: "سعة تخزين تصل إلى 4KB للبيانات والتطبيقات المتعددة"
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "سرعة نقل بيانات عالية تصل إلى 106 kbit/s"
  },
]

const benefits = [
  "أمان عالي مع تشفير 128-bit",
  "إمكانية تخزين تطبيقات متعددة على كارت واحد",
  "متوافقة مع معايير ISO 14443 الدولية",
  "مقاومة للتزوير والاستنساخ",
  "عمر افتراضي يتجاوز 200,000 عملية كتابة",
  "إمكانية إعادة البرمجة والتحديث",
  "دعم التطبيقات المتعددة في نفس الكارت",
  "توافق مع أنظمة الدفع الإلكتروني",
]

const specs = [
  { label: "التردد", value: "13.56 MHz" },
  { label: "مسافة القراءة", value: "حتى 10 سم" },
  { label: "الذاكرة", value: "1KB - 4KB" },
  { label: "التشفير", value: "AES / 3DES" },
  { label: "المعيار", value: "ISO 14443A" },
  { label: "دورات الكتابة", value: "200,000" },
]

const applications = [
  "أنظمة الدفع",
  "النقل العام",
  "التحكم في الدخول",
  "العضويات",
  "بطاقات الولاء",
  "أنظمة الحضور",
  "الخدمات الحكومية",
  "البطاقات الجامعية",
]

export default function MifareCardPage() {
  return (
    <ProductPageLayout
      title="كروت ماي فير"
      titleEn="Mifare Card"
      subtitle="كروت ذكية عالية الأمان للتطبيقات المتعددة والأنظمة المتكاملة"
      description="كروت ماي فير من Yalla Store توفر حلولاً ذكية ومتكاملة للدفع الإلكتروني والتحكم في الوصول والعضويات. تتميز بتشفير متقدم وسعة تخزين عالية مع إمكانية دمج تطبيقات متعددة في كارت واحد."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={CreditCard}
      heroImage="/images/mifare-card.jpg"
    />
  )
}
