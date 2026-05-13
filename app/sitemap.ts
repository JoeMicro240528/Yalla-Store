export const dynamic = 'force-static'

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yallastore.com'

  const routes = [
    '',
    '/id-card-printers',
    '/id-card-printing',
    '/mifare-card',
    '/nurses-call-system',
    '/proximity-card',
    '/queuing-system',
    '/self-service-kiosks',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}
