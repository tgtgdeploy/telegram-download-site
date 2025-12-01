export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

  const robotsTxt = `# Telegram Download Site Robots.txt
# https://tg-downloads.com

User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# 允许搜索引擎完整索引
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: Yandexbot
Allow: /

# 站点地图
Sitemap: ${siteUrl}/sitemap.xml

# 主机
Host: ${siteUrl}`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
