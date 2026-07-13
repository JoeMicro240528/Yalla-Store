import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yalla Store | نظام انتظار العملاء في مصر | Queue Management System',
  description: 'اول مصنع في مصر لتصنيع نظام انتظار العملاء كيوسيرف QSERVE - حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة',
  keywords: 'نظام انتظار العملاء, Queue Management System, QSERVE, كيوسيرف, استدعاء الممرضات, كروت بروكسيمتي, طباعة كروت, أجهزة الخدمات الذاتية',
  alternates: {
    canonical: "https://yallastore.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" className="bg-background" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
