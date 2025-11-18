import { NextRequest, NextResponse } from 'next/server'

// 下载链接配置（可以从环境变量读取）
const DOWNLOAD_URLS = {
  android: process.env.ANDROID_APK_URL || 'https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk',
  // 可以添加更多平台
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const platform = searchParams.get('platform') || 'android'
  const ref = searchParams.get('ref') || 'direct' // 追踪来源

  // 获取下载URL
  const downloadUrl = DOWNLOAD_URLS[platform as keyof typeof DOWNLOAD_URLS]

  if (!downloadUrl) {
    return NextResponse.json({ error: 'Invalid platform' }, { status: 400 })
  }

  // 记录下载统计（可选）
  console.log(`Download: platform=${platform}, ref=${ref}, ip=${request.headers.get('x-forwarded-for')}`)

  // 重定向到实际下载链接
  return NextResponse.redirect(downloadUrl, 302)
}
