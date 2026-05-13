import { ProductPageLayout } from "@/components/product-page-layout"
import { CreditCard, Shield, Clock, Users, Wifi, Lock, Fingerprint, Building } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "كروت بروكسيمتي | Proximity Card | Yalla Store",
  description: "كروت بروكسيمتي للتحكم في الدخول والحضور والانصراف - كروت ذكية عالية الجودة بأسعار تنافسية",
  keywords: "كروت بروكسيمتي, Proximity Card, كروت الدخول, كروت الحضور والانصراف, بطاقات التعريف",
  alternates: {
    canonical: "https://yalla-store.com/proximity-card",
  }
}

const features = [
  {
    icon: Wifi,
    title: "تقنية RFID",
    description: "تقنية التعريف بموجات الراديو للقراءة السريعة والدقيقة بدون تلامس"
  },
  {
    icon: Shield,
    title: "أمان عالي",
    description: "نظام تشفير متقدم لحماية البيانات ومنع التزوير والنسخ"
  },
  {
    icon: Clock,
    title: "سرعة القراءة",
    description: "قراءة فورية للكارت في أقل من ثانية مع دقة عالية"
  },
  {
    icon: Lock,
    title: "التحكم في الوصول",
    description: "تحديد صلاحيات الدخول لكل موظف حسب الأقسام والأوقات"
  },
  {
    icon: Users,
    title: "إدارة الحضور",
    description: "تسجيل تلقائي لأوقات الحضور والانصراف مع تقارير مفصلة"
  },
  {
    icon: Building,
    title: "تكامل شامل",
    description: "التكامل مع أنظمة HR وبرامج إدارة الموارد البشرية"
  },
]

const benefits = [
  "متانة عالية ومقاومة للماء والحرارة",
  "عمر افتراضي طويل يصل إلى 10 سنوات",
  "سهولة الاستخدام بدون تلامس مباشر",
  "إمكانية الطباعة عليها بجودة عالية",
  "متوافقة مع معظم أجهزة القراءة",
  "أسعار تنافسية للكميات الكبيرة",
  "تسليم سريع وتوصيل لجميع المحافظات",
  "إمكانية التخصيص حسب طلب العميل",
]

const specs = [
  { label: "التردد", value: "125 KHz" },
  { label: "مسافة القراءة", value: "3-10 سم" },
  { label: "المادة", value: "PVC عالي الجودة" },
  { label: "الأبعاد", value: "85.5 × 54 مم" },
  { label: "السُمك", value: "0.76 - 0.86 مم" },
  { label: "العمر الافتراضي", value: "100,000 قراءة" },
]

const applications = [
  "الشركات والمصانع",
  "المستشفيات",
  "الفنادق",
  "الجامعات",
  "النوادي الرياضية",
  "المجمعات السكنية",
  "البنوك",
  "الجهات الحكومية",
]

export default function ProximityCardPage() {
  return (
    <ProductPageLayout
      title="كروت بروكسيمتي"
      titleEn="Proximity Card"
      subtitle="كروت الدخول الذكية للتحكم في الوصول والحضور والانصراف"
      description="كروت بروكسيمتي من Yalla Store هي الحل المثالي للتحكم في الدخول وتسجيل الحضور والانصراف. تعمل بتقنية RFID المتطورة وتوفر أماناً عالياً مع سهولة الاستخدام والمتانة."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={CreditCard}
      heroImage="/images/proximity-card.jpg"
    />
  )
}
