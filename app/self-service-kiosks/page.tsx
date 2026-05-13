import { ProductPageLayout } from "@/components/product-page-layout"
import { MonitorSmartphone, CreditCard, Fingerprint, Printer, Scan, Wallet, UtensilsCrossed, Building2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "أجهزة الخدمات الذاتية | Self Service Kiosks | Yalla Store",
  description: "أجهزة خدمة ذاتية تفاعلية للبنوك والمطاعم والفنادق - أجهزة الدفع الذاتي وطلب الطعام",
  keywords: "أجهزة الخدمات الذاتية, Self Service Kiosks, كيوسك, أجهزة الدفع الذاتي, أجهزة طلب الطعام",
  alternates: {
    canonical: "https://yalla-store.com/self-service-kiosks",
  }
}

const features = [
  {
    icon: MonitorSmartphone,
    title: "شاشات لمس تفاعلية",
    description: "شاشات لمس عالية الدقة بأحجام متعددة من 15 إلى 55 بوصة"
  },
  {
    icon: CreditCard,
    title: "الدفع الإلكتروني",
    description: "دعم جميع وسائل الدفع: بطاقات، NFC، كود QR، نقدي"
  },
  {
    icon: Fingerprint,
    title: "التحقق من الهوية",
    description: "قارئ بطاقات، ماسح بصمة، كاميرا للتعرف على الوجه"
  },
  {
    icon: Printer,
    title: "طابعة مدمجة",
    description: "طابعة حرارية لطباعة الإيصالات والتذاكر"
  },
  {
    icon: Scan,
    title: "ماسح الباركود",
    description: "ماسح ضوئي لقراءة الباركود وأكواد QR"
  },
  {
    icon: Wallet,
    title: "تصميم مرن",
    description: "إمكانية تخصيص التصميم والوظائف حسب احتياجات العميل"
  },
]

const benefits = [
  "تقليل الطوابير وأوقات الانتظار",
  "خدمة على مدار 24 ساعة دون توقف",
  "تقليل تكاليف العمالة والتشغيل",
  "تحسين تجربة العملاء ورضاهم",
  "تصنيع محلي بمواصفات عالمية",
  "برمجة وتخصيص حسب الطلب",
  "صيانة ودعم فني محلي",
  "تكامل مع أنظمة ERP و POS",
]

const specs = [
  { label: "حجم الشاشة", value: "15 - 55 بوصة" },
  { label: "نوع الشاشة", value: "لمس سعوي" },
  { label: "الدقة", value: "Full HD / 4K" },
  { label: "نظام التشغيل", value: "Windows / Android" },
  { label: "الاتصال", value: "WiFi / 4G / Ethernet" },
  { label: "الضمان", value: "سنة - سنتان" },
]

const applications = [
  "البنوك وماكينات الصراف",
  "المطاعم وطلب الطعام",
  "الفنادق وتسجيل الدخول",
  "المستشفيات",
  "المطارات",
  "مراكز التسوق",
  "الجهات الحكومية",
  "محطات الوقود",
]

export default function SelfServiceKiosksPage() {
  return (
    <ProductPageLayout
      title="أجهزة الخدمات الذاتية"
      titleEn="Self Service Kiosks"
      subtitle="أجهزة خدمة ذاتية تفاعلية توفر تجربة مستخدم سلسة ومريحة"
      description="نوفر مجموعة متكاملة من أجهزة الخدمات الذاتية للبنوك والمطاعم والفنادق والمستشفيات. تشمل أجهزة الدفع الذاتي وطلب الطعام وتسجيل الدخول مع إمكانية التخصيص الكامل حسب احتياجات العميل."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={MonitorSmartphone}
      heroImage="/images/self-service-kiosk.jpg"
    />
  )
}
