import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

// Android 优化的关键词策略
const androidKeywords = [
  // 核心关键词
  'Telegram下载',
  'Telegram安卓版',
  'Telegram Android',
  'Telegram APK下载',
  'Telegram中文版',

  // 应用商城关键词
  'Telegram Google Play',
  'Telegram华为应用市场',
  'Telegram小米应用商店',
  'Telegram应用宝',

  // 长尾关键词
  'Telegram安卓最新版',
  'Telegram安卓官方下载',
  'Telegram APK官方',
  'Telegram中文版安卓',
  'Telegram安卓免费下载',
  'Telegram安卓中文版下载',
  'Telegram手机版',
  'Telegram安卓版下载安装',

  // 功能关键词
  '电报下载',
  '纸飞机下载',
  'TG下载',
  'Telegram即时通讯',
  'Telegram加密聊天',

  // 比较关键词
  'Telegram vs WhatsApp',
  'Telegram安卓版本',

  // 其他平台（保留少量）
  'Telegram iOS',
  'Telegram电脑版',
]

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // 基础 SEO
  title: {
    default: 'Telegram安卓下载 - 官方APK最新版免费下载 | Telegram中文版',
    template: '%s | Telegram安卓下载'
  },

  description: 'Telegram安卓版官方下载页面。支持APK直接下载、Google Play、华为应用市场。免费安全的即时通讯应用，端对端加密，2GB大文件传输，20万人超级群组。最新版本v10.5.2。',

  keywords: androidKeywords,

  authors: [{ name: 'Telegram Download Site' }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Open Graph (社交分享优化)
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteUrl,
    siteName: 'Telegram安卓下载站',
    title: 'Telegram安卓版官方下载 - APK最新版免费下载',
    description: 'Telegram安卓版官方下载。支持APK直接安装、Google Play下载。免费安全的即时通讯应用，端对端加密保护隐私。',
    images: [
      {
        url: `${siteUrl}/telegram-og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Telegram安卓版下载',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Telegram安卓版官方下载 - APK最新版',
    description: 'Telegram安卓版官方下载。免费安全的即时通讯应用，支持端对端加密。',
    images: [`${siteUrl}/telegram-og-image.png`],
    creator: '@telegram',
  },

  // 移动应用优化
  appleWebApp: {
    capable: true,
    title: 'Telegram下载',
    statusBarStyle: 'black-translucent',
  },

  // 其他元标签
  alternates: {
    canonical: siteUrl,
  },

  // 应用信息
  applicationName: 'Telegram',

  category: 'Communication',

  // 地理定位（中国市场）
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    // Android 特定
    'theme-color': '#2AABEE',
    'msapplication-TileColor': '#2AABEE',
    'msapplication-navbutton-color': '#2AABEE',
    'apple-mobile-web-app-status-bar-style': '#2AABEE',
  },
}

// 结构化数据 (Schema.org) - Android 应用优化
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Telegram',
  description: 'Telegram是一款免费、安全、快速的即时通讯应用。支持端对端加密、大文件传输、超级群组和强大的Bot生态系统。',
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
    ratingValue: '4.8',
    ratingCount: '5000000',
    bestRating: '5',
    worstRating: '1',
  },
  softwareVersion: '10.5.2',
  datePublished: '2025-01-15',
  fileSize: '91.5 MB',
  screenshot: [
    `${siteUrl}/screenshots/android-1.png`,
    `${siteUrl}/screenshots/android-2.png`,
    `${siteUrl}/screenshots/android-3.png`,
  ],
  downloadUrl: `${siteUrl}/play-download`,
  releaseNotes: '优化性能，修复已知问题，新增主题定制功能',
  author: {
    '@type': 'Organization',
    name: 'Telegram Messenger Inc.',
    url: 'https://telegram.org',
  },
  provider: {
    '@type': 'Organization',
    name: 'Telegram',
    url: 'https://telegram.org',
  },
}

// 面包屑导航
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '首页',
      item: siteUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Telegram安卓下载',
      item: siteUrl,
    },
  ],
}

// 常见问题 (FAQ Schema)
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Telegram安卓版如何下载？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram安卓版有多种下载方式：1) 通过Google Play商店搜索"Telegram"下载；2) 在本页面直接下载APK文件安装；3) 通过华为应用市场、小米应用商店等下载。',
      },
    },
    {
      '@type': 'Question',
      name: 'Telegram APK安全吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram官方APK完全安全。本站提供的APK文件来自官方渠道，使用端对端加密技术保护用户隐私，不含任何恶意代码或广告。',
      },
    },
    {
      '@type': 'Question',
      name: 'Telegram需要付费吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram完全免费，永久免费。没有广告，没有订阅费，也没有隐藏收费项目。所有功能都可以免费使用。',
      },
    },
    {
      '@type': 'Question',
      name: 'Telegram支持哪些安卓系统版本？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram安卓版支持Android 6.0及以上版本。建议使用Android 8.0或更高版本以获得最佳体验。',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 结构化数据 - Software Application */}
        <Script
          id="structured-data-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* 结构化数据 - Breadcrumb */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbData),
          }}
        />

        {/* 结构化数据 - FAQ */}
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />

        {/* DNS 预连接优化 */}
        <link rel="preconnect" href="https://telegram.org" />
        <link rel="dns-prefetch" href="https://telegram.org" />

        {/* 移动应用图标 */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Android 应用关联 */}
        <meta name="google-play-app" content="app-id=org.telegram.messenger" />

        {/* 百度移动适配 */}
        <meta name="mobile-agent" content="format=html5;url={siteUrl}" />
        <meta name="applicable-device" content="mobile" />
      </head>

      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
