import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Telegram下载 - 免费安全的即时通讯应用 | 官方下载',
  description: 'Telegram官方下载页面。支持Android、iOS、Windows、Mac、Linux全平台。免费、安全、快速的即时通讯应用，端对端加密保护您的隐私。',
  keywords: ['Telegram下载', 'Telegram安卓版', 'Telegram iOS', 'Telegram电脑版', '电报下载', 'Telegram APK', 'Telegram中文版'],
  openGraph: {
    title: 'Telegram下载 - 免费安全的即时通讯应用',
    description: '支持Android、iOS、Windows、Mac、Linux全平台下载',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
