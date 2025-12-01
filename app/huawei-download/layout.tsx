import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tg-downloads.com'

export const metadata: Metadata = {
  title: 'Telegram华为版下载 - 华为应用市场官方下载 | 鸿蒙HarmonyOS',
  description: 'Telegram华为应用市场官方下载。支持华为手机、鸿蒙HarmonyOS系统。免费安全的即时通讯应用，端对端加密保护隐私，支持大文件传输。',
  keywords: [
    'Telegram华为下载',
    'Telegram华为应用市场',
    'Telegram鸿蒙版',
    'Telegram HarmonyOS',
    'Telegram华为手机',
    '电报华为下载',
    '纸飞机华为版',
    'Telegram华为商店',
  ],
  alternates: {
    canonical: `${siteUrl}/huawei-download`,
  },
  openGraph: {
    type: 'website',
    title: 'Telegram华为版下载 - 华为应用市场',
    description: 'Telegram华为应用市场官方下载，支持鸿蒙HarmonyOS系统。',
    url: `${siteUrl}/huawei-download`,
    images: [{
      url: `${siteUrl}/telegram-og-image.png`,
      width: 1200,
      height: 630,
      alt: 'Telegram华为版下载',
    }],
  },
}

export default function HuaweiDownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
