'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function DownloadingContent() {
  const searchParams = useSearchParams()
  const platform = searchParams.get('platform') || 'android'
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    // 倒计时
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // 跳转到下载API
          window.location.href = `/api/download?platform=${platform}`
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [platform])

  return (
    <div className="min-h-screen bg-gradient-to-br from-telegram-blue to-telegram-light flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center">
        {/* Telegram Logo */}
        <div className="flex justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 256 256">
            <defs>
              <linearGradient id="telegramGradient" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#2AABEE"></stop>
                <stop offset="100%" stopColor="#229ED9"></stop>
              </linearGradient>
            </defs>
            <path fill="url(#telegramGradient)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.04 128.04 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51s-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"></path>
            <path fill="#FFF" d="M57.94 126.648q55.98-24.384 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"></path>
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          正在准备下载...
        </h1>

        <p className="text-gray-600 mb-8">
          您的下载即将开始
        </p>

        {/* 倒计时 */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-telegram-blue text-white text-4xl font-bold">
            {countdown}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="flex justify-center mb-6">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-telegram-light border-t-telegram-blue"></div>
        </div>

        <p className="text-sm text-gray-500 mb-4">
          如果下载没有自动开始，请点击下方按钮
        </p>

        <a
          href={`/api/download?platform=${platform}`}
          className="inline-block bg-telegram-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-telegram-dark transition"
        >
          立即下载
        </a>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            <strong>提示：</strong>如果浏览器拦截下载，请允许此网站的弹出窗口
          </p>
        </div>
      </div>
    </div>
  )
}

export default function DownloadingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-telegram-blue to-telegram-light flex items-center justify-center">
        <div className="text-white text-2xl">加载中...</div>
      </div>
    }>
      <DownloadingContent />
    </Suspense>
  )
}
