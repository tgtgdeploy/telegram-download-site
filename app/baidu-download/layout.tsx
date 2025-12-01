import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

export const metadata: Metadata = {
  title: 'Telegram百度版下载 - 百度手机助手/应用宝下载 | 国内下载',
  description: 'Telegram百度手机助手、应用宝官方下载。国内用户推荐下载渠道，免费安全的即时通讯应用，支持端对端加密和大文件传输。',
  keywords: [
    'Telegram百度下载',
    'Telegram百度手机助手',
    'Telegram应用宝',
    'Telegram国内下载',
    '电报百度下载',
    '纸飞机百度版',
    'Telegram中国下载',
  ],
  alternates: {
    canonical: `${siteUrl}/baidu-download`,
  },
  openGraph: {
    type: 'website',
    title: 'Telegram百度版下载 - 百度手机助手',
    description: 'Telegram百度手机助手官方下载，国内用户推荐渠道。',
    url: `${siteUrl}/baidu-download`,
    images: [{
      url: `${siteUrl}/telegram-og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Telegram百度版下载',
    }],
  },
}

export default function BaiduDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
