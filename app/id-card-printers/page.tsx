import { ProductPageLayout } from "@/components/product-page-layout"
import { Printer, Zap, Shield, Settings, Award, Wrench, Box, Headphones } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "طابعات الكروت | ID Card Printers | Yalla Store",
  description: "طابعات كروت الهوية من أفضل العلامات التجارية العالمية - Evolis, Zebra, Fargo, Magicard",
  keywords: "طابعات الكروت, ID Card Printers, طابعة كروت, Evolis, Zebra, Fargo, Magicard",
  alternates: {
    canonical: "https://yalla-store.com/id-card-printers",
  }
}

const features = [
  {
    icon: Award,
    title: "علامات تجارية عالمية",
    description: "وكلاء معتمدون لأفضل العلامات: Evolis, Zebra, Fargo, Magicard, HID"
  },
  {
    icon: Zap,
    title: "سرعة طباعة عالية",
    description: "طباعة تصل إلى 300 كارت في الساعة مع جودة فائقة"
  },
  {
    icon: Shield,
    title: "طباعة آمنة",
    description: "إمكانية طباعة الهولوجرام وعناصر الأمان المتقدمة"
  },
  {
    icon: Settings,
    title: "تقنيات متعددة",
    description: "طباعة حرارية مباشرة وإعادة التحويل للجودة القصوى"
  },
  {
    icon: Box,
    title: "ملحقات أصلية",
    description: "شرائط طباعة وقطع غيار أصلية متوفرة دائماً"
  },
  {
    icon: Wrench,
    title: "صيانة معتمدة",
    description: "مركز صيانة معتمد مع فنيين مدربين ومعتمدين"
  },
]

const benefits = [
  "ضمان رسمي من الشركة المصنعة",
  "تدريب مجاني على استخدام الطابعة",
  "دعم فني محلي على مدار الساعة",
  "قطع غيار وشرائط طباعة أصلية",
  "تركيب وتشغيل مجاني",
  "عقود صيانة سنوية بأسعار تنافسية",
  "برامج تصميم وطباعة مجانية",
  "استبدال فوري في حالة العطل",
]

const specs = [
  { label: "دقة الطباعة", value: "300 - 600 DPI" },
  { label: "سرعة الطباعة", value: "حتى 300 كارت/ساعة" },
  { label: "نوع الطباعة", value: "وجه / وجهين" },
  { label: "التشفير", value: "مغناطيسي / ذكي" },
  { label: "الاتصال", value: "USB / Ethernet" },
  { label: "الضمان", value: "سنة - 3 سنوات" },
]

const applications = [
  "الشركات الكبرى",
  "البنوك",
  "الجامعات",
  "المستشفيات",
  "الفنادق",
  "مراكز الطباعة",
  "الجهات الحكومية",
  "شركات الأمن",
]

export default function IdCardPrintersPage() {
  return (
    <ProductPageLayout
      title="طابعات الكروت"
      titleEn="ID Card Printers"
      subtitle="طابعات كروت الهوية من أفضل العلامات التجارية العالمية"
      description="نوفر مجموعة متكاملة من طابعات الكروت من أشهر العلامات التجارية العالمية مثل Evolis و Zebra و Fargo و Magicard. جميع الطابعات بضمان رسمي مع دعم فني محلي وقطع غيار أصلية."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={Printer}
      heroImage="/images/id-card-printer.jpg"
    />
  )
}
