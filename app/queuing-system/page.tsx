import { ProductPageLayout } from "@/components/product-page-layout"
import { Users, Monitor, Ticket, BarChart3, Smartphone, Globe, Clock, Settings } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "نظام انتظار العملاء كيوسيرف | QSERVE Queuing System | Yalla Store",
  description: "نظام انتظار العملاء QSERVE - نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء بكفاءة عالية",
  keywords: "نظام انتظار العملاء, Queue Management System, QSERVE, كيوسيرف, إدارة الطوابير, نظام الدور",
  alternates: {
    canonical: "https://yalla-store.com/queuing-system",
  }
}

const features = [
  {
    icon: Ticket,
    title: "موزع التذاكر الذكي",
    description: "جهاز توزيع تذاكر بشاشة لمس يدعم اللغة العربية والإنجليزية مع خيارات متعددة للخدمات"
  },
  {
    icon: Monitor,
    title: "شاشات عرض متطورة",
    description: "شاشات LED/LCD عالية الوضوح لعرض أرقام الانتظار مع إمكانية عرض الإعلانات"
  },
  {
    icon: BarChart3,
    title: "تقارير وإحصائيات",
    description: "نظام تقارير شامل لقياس الأداء وتحليل أوقات الانتظار وتحسين الخدمة"
  },
  {
    icon: Smartphone,
    title: "تطبيق الهاتف",
    description: "إمكانية حجز الدور عبر تطبيق الهاتف المحمول وتتبع حالة الانتظار"
  },
  {
    icon: Globe,
    title: "إدارة عن بُعد",
    description: "لوحة تحكم مركزية لإدارة جميع الفروع من مكان واحد عبر الإنترنت"
  },
  {
    icon: Settings,
    title: "تخصيص كامل",
    description: "إمكانية تخصيص النظام حسب احتياجات المؤسسة والعلامة التجارية"
  },
]

const benefits = [
  "تقليل وقت الانتظار بنسبة تصل إلى 50%",
  "تحسين تجربة العملاء ورضاهم عن الخدمة",
  "زيادة كفاءة الموظفين وتنظيم العمل",
  "تقارير مفصلة لاتخاذ قرارات مستنيرة",
  "دعم فني متواصل وصيانة دورية",
  "تصنيع محلي بجودة عالمية",
  "ضمان شامل لمدة سنتين",
  "تكامل مع أنظمة المؤسسة الأخرى",
]

const specs = [
  { label: "أنواع الخدمات", value: "غير محدود" },
  { label: "عدد الكاونترات", value: "حتى 100 كاونتر" },
  { label: "حجم الشاشات", value: "32 - 75 بوصة" },
  { label: "اللغات", value: "عربي / إنجليزي" },
  { label: "الضمان", value: "سنتان" },
  { label: "التركيب", value: "مجاني" },
]

const applications = [
  "البنوك",
  "المستشفيات",
  "الجهات الحكومية",
  "شركات الاتصالات",
  "المطارات",
  "السفارات",
  "مراكز خدمة العملاء",
  "العيادات",
]

export default function QueuingSystemPage() {
  return (
    <ProductPageLayout
      title="نظام انتظار العملاء كيوسيرف"
      titleEn="QSERVE Queuing System"
      subtitle="نظام متكامل لإدارة طوابير الانتظار وتحسين تدفق العملاء"
      description="نظام QSERVE هو الحل الأمثل لإدارة انتظار العملاء في جميع القطاعات. يوفر النظام تجربة سلسة للعملاء مع تحسين كفاءة الموظفين من خلال تقنيات متطورة لتوزيع التذاكر وعرض الأرقام والتقارير التحليلية."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={Users}
      heroImage="/images/queuing-system.jpg"
    />
  )
}
