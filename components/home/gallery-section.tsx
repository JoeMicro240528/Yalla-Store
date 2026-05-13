"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Building, Hospital, ShoppingBag, Landmark, Utensils } from "lucide-react"

const categories = [
  { id: "all", label: "الكل", icon: Monitor },
  { id: "banks", label: "البنوك", icon: Landmark },
  { id: "hospitals", label: "المستشفيات", icon: Hospital },
  { id: "government", label: "الحكومة", icon: Building },
  { id: "retail", label: "التجزئة", icon: ShoppingBag },
  { id: "restaurants", label: "المطاعم", icon: Utensils },
]

const galleryItems = [
  { 
    id: 1, 
    category: "banks", 
    title: "بنك مصر", 
    description: "نظام انتظار العملاء متكامل",
    image: "/images/gallery/bank-queue.jpg"
  },
  { 
    id: 2, 
    category: "hospitals", 
    title: "مستشفى القاهرة", 
    description: "نظام استدعاء الممرضات",
    image: "/images/gallery/hospital-nurses.jpg"
  },
  { 
    id: 3, 
    category: "government", 
    title: "الشهر العقاري", 
    description: "نظام إدارة الطوابير",
    image: "/images/gallery/government-queue.jpg"
  },
  { 
    id: 4, 
    category: "retail", 
    title: "كارفور", 
    description: "أكشاك الخدمة الذاتية",
    image: "/images/gallery/retail-kiosk.jpg"
  },
  { 
    id: 5, 
    category: "banks", 
    title: "البنك الأهلي", 
    description: "شاشات العرض الرقمية",
    image: "/images/gallery/bank-display.jpg"
  },
  { 
    id: 6, 
    category: "restaurants", 
    title: "ماكدونالدز", 
    description: "أجهزة طلب الطعام",
    image: "/images/gallery/restaurant-kiosk.jpg"
  },
  { 
    id: 7, 
    category: "hospitals", 
    title: "مستشفى السلام", 
    description: "نظام متكامل للرعاية",
    image: "/images/gallery/hospital-system.jpg"
  },
  { 
    id: 8, 
    category: "government", 
    title: "السجل المدني", 
    description: "نظام انتظار متطور",
    image: "/images/gallery/civil-registry.jpg"
  },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            معرض الصور
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            صور حقيقية من مشاريعنا المنفذة
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            QSERVE Customer Reference - مشاريعنا المنفذة في مختلف القطاعات
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={activeCategory === category.id ? "gradient-primary" : ""}
            >
              <category.icon className="h-4 w-4 ml-2" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-background font-medium">عرض التفاصيل</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
