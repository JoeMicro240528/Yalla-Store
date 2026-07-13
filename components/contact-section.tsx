"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 850))
    setIsSubmitted(true)
    setIsLoading(false)

    // Build elegant WhatsApp template
    const text = `🔔 *طلب عرض سعر واستفسار جديد* 🔔\n\n👤 *الاسم:* ${name}\n📱 *رقم الهاتف:* ${phone}\n✉️ *البريد الإلكتروني:* ${email}\n📌 *الموضوع:* ${subject}\n\n💬 *محتوى الرسالة:*\n${message}\n\n*المرسل:* موقع كيوسيرف QSERVE`
    window.open(`https://wa.me/201227993999?text=${encodeURIComponent(text)}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container relative mx-auto px-4 z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider animate-float-fast">
            <MessageSquare className="w-3.5 h-3.5" />
            استشارة وعروض أسعار
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            دعنا نساعدك في تنظيم أعمالك
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-pretty text-sm sm:text-base leading-relaxed">
            تواصل مع المهندسين الاستشاريين لدينا الآن للحصول على دراسة مجانية لاحتياجات منشأتك وعرض سعر دقيق.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          
          {/* Contact Info (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-6 text-right">معلومات الاتصال المباشر</h3>
              
              <div className="space-y-6">
                <a
                  href="https://wa.me/201227993999"
                  className="flex items-center gap-4 group/item text-right justify-end"
                >
                  <div className="space-y-1 mr-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">الهاتف والواتس اب</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 group-hover/item:text-primary transition-colors" dir="ltr">+20 122 799 3999</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-emerald-500 transition-all duration-300 shrink-0">
                    <Phone className="h-5 w-5 text-emerald-600 group-hover/item:text-white transition-colors" />
                  </div>
                </a>

                <a
                  href="mailto:info@yallastore.com"
                  className="flex items-center gap-4 group/item text-right justify-end"
                >
                  <div className="space-y-1 mr-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">البريد الإلكتروني الرسمي</p>
                    <p className="text-sm sm:text-base font-bold text-slate-900 group-hover/item:text-primary transition-colors">info@yallastore.com</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover/item:scale-110 group-hover/item:bg-primary transition-all duration-300 shrink-0">
                    <Mail className="h-5 w-5 text-primary group-hover/item:text-white transition-colors" />
                  </div>
                </a>

                <div className="flex items-start gap-4 text-right justify-end">
                  <div className="space-y-1 mr-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">عنوان الإدارة والمصنع</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                      المنطقة الصناعية - منطقة 1000 مصنع، التجمع الثالث، القاهرة الجديدة، القاهرة، مصر
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame (Premium rounded card) */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl overflow-hidden shadow-md h-60 relative group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.5!2d31.4!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMcKwMjQnMDAuMCJF!5e0!3m2!1sen!2seg!4v1600000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QSERVE Factory Location Map"
              />
            </div>
          </div>

          {/* Contact Form (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-50/50 border border-slate-200/85 rounded-3xl p-6 sm:p-8 shadow-md">
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-6 text-right">أرسل استفسارك برمز الخدمة</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 animate-bounce">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">تم تجهيز طلبك بنجاح!</h4>
                <p className="text-slate-500 text-sm max-w-sm">
                  تم توجيهك إلى تطبيق WhatsApp لإتمام إرسال الطلب مباشرة إلى مهندسي المبيعات والدعم الفني لدينا.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6 rounded-xl border-slate-250 hover:bg-slate-50 text-slate-800 hover:text-slate-900"
                >
                  إرسال استفسار آخر
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-right">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      الاسم الكامل
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="اسمك أو اسم شركتك"
                      required
                      className="bg-white border-slate-200 rounded-xl text-slate-900 focus-visible:ring-primary h-11 text-sm text-right"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      رقم الموبايل
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="رقم الهاتف للتواصل المباشر"
                      required
                      className="bg-white border-slate-200 rounded-xl text-slate-900 focus-visible:ring-primary h-11 text-sm text-right"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    البريد الإلكتروني
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@yourdomain.com"
                    required
                    className="bg-white border-slate-200 rounded-xl text-slate-900 focus-visible:ring-primary h-11 text-sm text-right"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    موضوع الطلب
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="مثال: طلب عرض سعر لنظام انتظار 3 كاونتر"
                    required
                    className="bg-white border-slate-200 rounded-xl text-slate-900 focus-visible:ring-primary h-11 text-sm text-right"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    تفاصيل الاستفسار والكميات المطلوبة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="اكتب تفاصيل مشروعك أو عدد كاونترات الخدمة والغرف للنداء الممرضات هنا..."
                    rows={5}
                    required
                    className="bg-white border-slate-200 rounded-xl text-slate-900 focus-visible:ring-primary text-sm text-right resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full h-12 rounded-xl font-bold bg-primary hover:bg-primary/95 shadow-lg shadow-primary/20 hover:shadow-primary/45 transition-all text-white flex items-center justify-center gap-2 mt-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent shrink-0" />
                      جاري معالجة وإعداد الطلب...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 shrink-0" />
                      إرسال الطلب والتوجيه للواتساب
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  )
}
