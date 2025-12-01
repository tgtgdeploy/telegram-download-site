import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

export const metadata: Metadata = {
  title: 'Telegram小米版下载 - 小米应用商店官方下载 | MIUI',
  description: 'Telegram小米应用商店官方下载。支持小米、红米手机，MIUI系统优化。免费安全的即时通讯应用，端对端加密，云端同步消息。',
  keywords: [
    'Telegram小米下载',
    'Telegram小米应用商店',
    'Telegram红米下载',
    'Telegram MIUI',
    '电报小米下载',
    '纸飞机小米版',
    'Telegram小米手机',
  ],
  alternates: {
    canonical: `${siteUrl}/xiaomi-download`,
  },
  openGraph: {
    type: 'website',
    title: 'Telegram小米版下载 - 小米应用商店',
    description: 'Telegram小米应用商店官方下载，支持MIUI系统。',
    url: `${siteUrl}/xiaomi-download`,
    images: [{
      url: `${siteUrl}/telegram-og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Telegram小米版下载',
    }],
  },
}

export default function XiaomiDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
