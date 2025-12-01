/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 图片优化
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },

  // 性能优化
  compress: true,
  poweredByHeader: false,

  // SEO和安全头
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // APK下载文件缓存
      {
        source: '/downloads/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },

  // 重定向 - SEO友好的URL
  async redirects() {
    return [
      {
        source: '/android',
        destination: '/play-download',
        permanent: true,
      },
      {
        source: '/apk',
        destination: '/play-download',
        permanent: true,
      },
      {
        source: '/ios',
        destination: 'https://apps.apple.com/app/telegram-messenger/id686449807',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
