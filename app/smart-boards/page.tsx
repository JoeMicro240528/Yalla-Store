import { ProductPageLayout } from "@/components/product-page-layout"
import {
  Monitor,
  Wifi,
  Pen,
  Users,
  Volume2,
  ScreenShare,
  Zap,
  Globe,
  Shield,
  Camera,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "شاشات تفاعلية ذكية | Smart Interactive Boards | Yalla Store",
  description:
    "شاشات تفاعلية ذكية عالية الجودة للمدارس والجامعات وقاعات الاجتماعات - تقنية متطورة تجمع بين العرض واللمس والتعاون في الوقت الحقيقي",
  keywords:
    "شاشات تفاعلية, Smart Board, لوح ذكي, شاشة لمس, Interactive Display, شاشات مدارس, شاشات اجتماعات",
  alternates: {
    canonical: "https://yalla-store.com/smart-boards",
  },
}

const features = [
  {
    icon: Pen,
    title: "تقنية اللمس المتعدد",
    description:
      "دعم 20 نقطة لمس متزامنة تتيح التفاعل لأكثر من مستخدم في نفس الوقت بدقة عالية",
  },
  {
    icon: ScreenShare,
    title: "مشاركة الشاشة اللاسلكية",
    description:
      "إمكانية عرض محتوى أي جهاز (هاتف، لابتوب، تابلت) على الشاشة لاسلكياً بدون كابلات",
  },
  {
    icon: Wifi,
    title: "اتصال لاسلكي سريع",
    description:
      "اتصال WiFi 6 مدمج يضمن نقل البيانات بسرعة فائقة وتجربة تفاعلية سلسة دون انقطاع",
  },
  {
    icon: Users,
    title: "تعاون في الوقت الحقيقي",
    description:
      "منصة تعاون رقمية تتيح للمشاركين الكتابة والتعليق والمشاركة من أي مكان في العالم",
  },
  {
    icon: Volume2,
    title: "صوت محيطي عالي الجودة",
    description:
      "مكبرات صوت مدمجة بتقنية Dolby Audio لتجربة صوتية واضحة تملأ الغرفة بأكملها",
  },
  {
    icon: Camera,
    title: "كاميرا 4K مدمجة",
    description:
      "كاميرا عالية الدقة مدمجة مع ميكروفون حساس للاجتماعات المرئية والتعليم عن بُعد",
  },
  {
    icon: Zap,
    title: "معالج عالي الأداء",
    description:
      "معالج Octa-Core مدمج يضمن تشغيل التطبيقات والمحتوى الثقيل بسرعة وسلاسة تامة",
  },
  {
    icon: Globe,
    title: "دعم متعدد الأنظمة",
    description:
      "متوافق مع Windows وAndroid وiOS ويتكامل مع Google Workspace وMicrosoft 365",
  },
  {
    icon: Shield,
    title: "أمان وحماية البيانات",
    description:
      "تشفير من طرف إلى طرف لجميع الجلسات مع خيارات إدارة مركزية وحماية بكلمة مرور",
  },
]

const benefits = [
  "رفع مستوى التفاعل في الفصول الدراسية بنسبة تصل إلى 80%",
  "توفير تجربة اجتماعات هجينة سلسة بين الحضور والبُعد",
  "توفير الوقت مع مزامنة المحتوى الفورية لجميع المشاركين",
  "سهولة الاستخدام بدون تدريب مكثف بفضل واجهة بديهية",
  "توفير تكاليف الطباعة والورق بالاعتماد على المحتوى الرقمي",
  "تكامل كامل مع أنظمة إدارة التعلم (LMS) الشائعة",
  "ضمان شامل لمدة 3 سنوات مع صيانة دورية مجانية",
  "دعم فني متخصص ومتاح على مدار الساعة طوال أيام الأسبوع",
]

const specs = [
  { label: "أحجام الشاشات", value: "65 / 75 / 86 / 98 بوصة" },
  { label: "دقة العرض", value: "4K UHD (3840×2160)" },
  { label: "نقاط اللمس", value: "20 نقطة متزامنة" },
  { label: "نظام التشغيل", value: "Android 13 + Windows" },
  { label: "الضمان", value: "3 سنوات" },
  { label: "التركيب", value: "مجاني + تدريب" },
]

const applications = [
  "المدارس والجامعات",
  "قاعات الاجتماعات",
  "مراكز التدريب",
  "غرف العمليات",
  "المستشفيات",
  "الفنادق",
  "المؤتمرات",
  "المراكز الحكومية",
]

export default function SmartBoardsPage() {
  return (
    <ProductPageLayout
      title="شاشات تفاعلية ذكية"
      titleEn="Smart Interactive Boards"
      subtitle="تقنية ذكية تحوّل التعلم والاجتماعات إلى تجربة تفاعلية لا تُنسى"
      description="شاشاتنا التفاعلية الذكية تجمع بين عرض 4K الفائق الوضوح وتقنية اللمس المتعدد والاتصال اللاسلكي في جهاز واحد متكامل. مثالية للمدارس والجامعات والشركات التي تسعى لرفع مستوى التفاعل والإنتاجية إلى أقصاه."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={Monitor}
      heroImage="/images/gallery/smart-boards2.jpg"
    />
  )
}
