import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'Yalla Store | نظام انتظار العملاء في مصر | Queue Management System',
  description: 'اول مصنع في مصر لتصنيع نظام انتظار العملاء كيوسيرف QSERVE - حلول تقنية متطورة لإدارة انتظار العملاء وتحسين تجربة الخدمة',
  keywords: 'نظام انتظار العملاء, Queue Management System, QSERVE, كيوسيرف, استدعاء الممرضات, كروت بروكسيمتي, طباعة كروت, أجهزة الخدمات الذاتية',
  alternates: {
    canonical: "https://yallastore.com",
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
