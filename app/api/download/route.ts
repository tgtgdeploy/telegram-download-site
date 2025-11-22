
import { NextRequest, NextResponse } from 'next/server'

// Admin API配置
const ADMIN_API_URL = process.env.ADMIN_API_URL || 'https://adminseohub.xyz'
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || 'localhost:3003'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const platform = searchParams.get('platform') || 'android'
  const ref = searchParams.get('ref') || 'direct' // 追踪来源

  try {
    // 从admin后台API获取下载配置
    const apiUrl = `${ADMIN_API_URL}/api/public/download-config?domain=${SITE_DOMAIN}&platform=${platform}`
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error('Failed to fetch download config')
    }

    const config = await response.json()
    const downloadUrl = config.downloadUrl || config.storeUrl

    if (!downloadUrl) {
      // 如果API没有配置，使用环境变量作为后备
      const fallbackUrl = process.env.ANDROID_APK_URL
      if (fallbackUrl) {
        console.log(`Using fallback URL for ${platform}`)
        return NextResponse.redirect(fallbackUrl, 302)
      }
      return NextResponse.json({ error: 'Download URL not configured' }, { status: 404 })
    }

    // 记录下载统计
    console.log(`Download: platform=${platform}, ref=${ref}, version=${config.version}, ip=${request.headers.get('x-forwarded-for')}`)

    // 重定向到实际下载链接
    return NextResponse.redirect(downloadUrl, 302)
  } catch (error) {
    console.error('Download API error:', error)

    // 错误时使用环境变量作为后备
    const fallbackUrl = process.env.ANDROID_APK_URL
    if (fallbackUrl && platform === 'android') {
      console.log('Using fallback URL due to error')
      return NextResponse.redirect(fallbackUrl, 302)
    }

    return NextResponse.json({ error: 'Failed to get download URL' }, { status: 500 })
  }
}
