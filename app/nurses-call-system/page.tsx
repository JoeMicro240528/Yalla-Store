import { ProductPageLayout } from "@/components/product-page-layout"
import { Bell, Clock, Shield, Wifi, Monitor, Settings, AlertTriangle, HeartPulse } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نظام استدعاء الممرضات | Nurses Call System | Yalla Store",
  description: "نظام استدعاء الممرضات المتطور للمستشفيات والعيادات - حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة للمرضى",
  keywords: "نظام استدعاء الممرضات, Nurses Call System, استدعاء الممرضات, نداء الممرضات, أجهزة المستشفيات",
  alternates: {
    canonical: "https://yalla-store.com/nurses-call-system",
  }
}

const features = [
  {
    icon: Bell,
    title: "استجابة فورية",
    description: "نظام تنبيه فوري يضمن وصول نداء المريض للممرضة في أسرع وقت ممكن"
  },
  {
    icon: Monitor,
    title: "شاشات مراقبة مركزية",
    description: "شاشات عرض مركزية تعرض جميع النداءات ومستوى الأولوية لكل غرفة"
  },
  {
    icon: Wifi,
    title: "اتصال لاسلكي",
    description: "تقنية اتصال لاسلكية متطورة لتغطية جميع أقسام المستشفى"
  },
  {
    icon: AlertTriangle,
    title: "تصنيف الأولويات",
    description: "نظام تصنيف ذكي للنداءات حسب مستوى الطوارئ والأهمية"
  },
  {
    icon: Clock,
    title: "تسجيل الأوقات",
    description: "تسجيل تلقائي لأوقات الاستدعاء والاستجابة لتحسين الأداء"
  },
  {
    icon: HeartPulse,
    title: "تكامل طبي",
    description: "إمكانية التكامل مع أنظمة المستشفى الأخرى وأجهزة المراقبة الطبية"
  },
]

const benefits = [
  "تحسين سرعة الاستجابة للمرضى بنسبة تصل إلى 70%",
  "تقليل الضغط على الطاقم التمريضي وتنظيم العمل",
  "متوافق مع المعايير الدولية للرعاية الصحية",
  "سهولة التركيب والصيانة مع دعم فني متواصل",
  "تقارير وإحصائيات مفصلة لتحسين جودة الخدمة",
  "نظام مرن قابل للتوسعة حسب احتياجات المنشأة",
  "ضمان شامل وقطع غيار متوفرة محلياً",
  "تدريب كامل للطاقم على استخدام النظام",
]

const specs = [
  { label: "نوع الاتصال", value: "سلكي / لاسلكي" },
  { label: "عدد الغرف", value: "غير محدود" },
  { label: "مستويات الأولوية", value: "3-5 مستويات" },
  { label: "الضمان", value: "سنتان" },
  { label: "التركيب", value: "مجاني" },
  { label: "الدعم الفني", value: "24/7" },
]

const applications = [
  "المستشفيات",
  "العيادات الخاصة",
  "دور الرعاية",
  "مراكز إعادة التأهيل",
  "العناية المركزة",
  "غرف العمليات",
]

export default function NursesCallSystemPage() {
  return (
    <ProductPageLayout
      title="نظام استدعاء الممرضات"
      titleEn="Nurses Call System"
      subtitle="حلول متطورة للرعاية الصحية تضمن استجابة سريعة وفعالة للمرضى"
      description="نظام استدعاء الممرضات من Yalla Store هو الحل الأمثل للمستشفيات والعيادات التي تسعى لتحسين جودة الرعاية الصحية. يوفر النظام اتصالاً فورياً بين المرضى والطاقم الطبي مع تصنيف ذكي للأولويات وتسجيل تلقائي للأوقات."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={Bell}
      heroImage="/images/nurses-call-system.jpg"
    />
  )
}
