export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'
  const lastmod = new Date().toISOString()

  // 所有下载页面
  const pages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/play-download', changefreq: 'weekly', priority: '0.9' },
    { url: '/huawei-download', changefreq: 'weekly', priority: '0.8' },
    { url: '/xiaomi-download', changefreq: 'weekly', priority: '0.8' },
    { url: '/baidu-download', changefreq: 'weekly', priority: '0.8' },
    { url: '/downloading', changefreq: 'monthly', priority: '0.6' },
  ]

  const urlEntries = pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${urlEntries}
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
