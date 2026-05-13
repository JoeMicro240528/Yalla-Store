import { ProductPageLayout } from "@/components/product-page-layout"
import { Printer, Palette, Image, Shield, Layers, Sparkles, Clock, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "طباعة كروت بلاستيك ID | ID Card Printing | Yalla Store",
  description: "خدمات طباعة كروت الهوية والعضوية بجودة عالية - تصميم وطباعة كروت بلاستيكية احترافية",
  keywords: "طباعة كروت, ID Card Printing, كروت بلاستيك, كروت الهوية, طباعة بطاقات",
  alternates: {
    canonical: "https://yalla-store.com/id-card-printing",
  }
}

const features = [
  {
    icon: Palette,
    title: "تصميم احترافي",
    description: "فريق تصميم محترف لإنشاء تصميمات مميزة تعكس هوية مؤسستك"
  },
  {
    icon: Image,
    title: "طباعة عالية الجودة",
    description: "طباعة بدقة 300 DPI بألوان زاهية ومقاومة للبهتان"
  },
  {
    icon: Shield,
    title: "عناصر أمان",
    description: "إمكانية إضافة عناصر أمان مثل الهولوجرام والأشعة فوق البنفسجية"
  },
  {
    icon: Layers,
    title: "طباعة متعددة",
    description: "طباعة على وجه واحد أو وجهين مع إمكانية الطباعة على الحواف"
  },
  {
    icon: Sparkles,
    title: "تشطيبات متنوعة",
    description: "تشطيبات مات أو لامعة مع إمكانية النقش والبروز"
  },
  {
    icon: Clock,
    title: "سرعة التنفيذ",
    description: "تنفيذ سريع للطلبات مع إمكانية التسليم خلال 24 ساعة"
  },
]

const benefits = [
  "أسعار تنافسية للكميات الكبيرة والصغيرة",
  "تصميم مجاني مع الطلبات الكبيرة",
  "طباعة على كروت بروكسيمتي وماي فير",
  "إمكانية طباعة الصور الشخصية والباركود",
  "مواد خام عالية الجودة مستوردة",
  "ضمان على جودة الطباعة",
  "توصيل مجاني داخل القاهرة",
  "عينات مجانية قبل الطلب الكبير",
]

const specs = [
  { label: "دقة الطباعة", value: "300 DPI" },
  { label: "الأبعاد", value: "CR80 قياسي" },
  { label: "السُمك", value: "0.76 - 0.86 مم" },
  { label: "المادة", value: "PVC / PET" },
  { label: "الألوان", value: "CMYK كامل" },
  { label: "الحد الأدنى", value: "50 كارت" },
]

const applications = [
  "كروت الموظفين",
  "كروت العضوية",
  "كروت الطلاب",
  "كروت الولاء",
  "بطاقات الهدايا",
  "كروت الزوار",
  "كروت VIP",
  "بطاقات الأعمال",
]

export default function IdCardPrintingPage() {
  return (
    <ProductPageLayout
      title="طباعة كروت بلاستيك ID"
      titleEn="ID Card Printing"
      subtitle="خدمات طباعة كروت الهوية والعضوية بجودة عالية وتصاميم احترافية"
      description="نقدم خدمات طباعة كروت بلاستيكية احترافية للشركات والمؤسسات. نوفر تصميم مجاني وطباعة عالية الجودة مع إمكانية إضافة عناصر الأمان والتقنيات الذكية مثل RFID والباركود."
      features={features}
      benefits={benefits}
      specs={specs}
      applications={applications}
      heroIcon={Printer}
      heroImage="/images/id-card-printing.jpg"
    />
  )
}
