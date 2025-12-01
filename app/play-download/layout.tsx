import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

export const metadata: Metadata = {
  title: 'Telegram APK下载 - 安卓官方最新版 | Google Play风格下载页',
  description: 'Telegram安卓APK官方下载。直接下载最新版APK文件，支持Android 6.0及以上。免费安全的即时通讯应用，端对端加密，无广告。版本10.5.2，文件大小91.5MB。',
  keywords: [
    'Telegram APK下载',
    'Telegram安卓APK',
    'Telegram APK官方',
    'Telegram安卓最新版',
    'Telegram APK直接下载',
    'Telegram APK安装',
    '电报APK下载',
    '纸飞机APK',
  ],
  alternates: {
    canonical: `${siteUrl}/play-download`,
  },
  openGraph: {
    type: 'website',
    title: 'Telegram APK下载 - 安卓官方最新版',
    description: 'Telegram安卓APK官方下载，直接下载最新版APK文件安装。',
    url: `${siteUrl}/play-download`,
    images: [{
      url: `${siteUrl}/telegram-og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Telegram APK下载',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram APK下载 - 安卓官方最新版',
    description: 'Telegram安卓APK官方下载，直接下载最新版APK文件安装。',
    images: [`${siteUrl}/telegram-og-image.png`],
  },
}

// 针对APK下载页的JSON-LD结构化数据
const downloadPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Telegram',
  applicationCategory: 'CommunicationApplication',
  operatingSystem: 'Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.4',
    ratingCount: '10000000',
    bestRating: '5',
    worstRating: '1',
  },
  softwareVersion: '10.5.2',
  fileSize: '91.5 MB',
  downloadUrl: `${siteUrl}/play-download`,
  author: {
    '@type': 'Organization',
    name: 'Telegram FZ-LLC',
  },
}

export default function PlayDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadPageSchema) }}
      />
      {children}
    </>
  )
}
