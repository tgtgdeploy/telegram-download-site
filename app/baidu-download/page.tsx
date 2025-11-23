import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telegram - 应用宝官方下载',
  description: 'Telegram应用宝官方下载页。腾讯应用宝提供安全下载，免费安全的即时通讯应用，支持端对端加密。',
  keywords: ['Telegram应用宝', 'Telegram腾讯下载', 'Telegram安卓下载', 'Telegram应用宝官网', 'TelegramAPK应用宝'],
}

export default function BaiduDownloadPage() {
  const apkUrl = "https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk"

  return (
    <div className="min-h-screen bg-white">
      {/* Tencent MyApp Header */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <span className="text-blue-600 font-bold text-xl">宝</span>
          </div>
          <div className="flex-1">
            <div className="font-bold text-white text-lg">应用宝</div>
            <div className="text-xs text-white/90">Tencent MyApp</div>
          </div>
          <div className="text-white/80 text-sm">安全 · 便捷 · 精品</div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* App Header */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex gap-6 items-start">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2337aee2'/%3E%3Cstop offset='100%25' style='stop-color:%231e96c8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='240' height='240' fill='url(%23a)' rx='55'/%3E%3Cpath fill='%23fff' d='M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80'/%3E%3Cpath fill='%23d2e5f1' d='M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035'/%3E%3Cpath fill='%23b5cfe4' d='M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258'/%3E%3C/svg%3E"
              alt="Telegram"
              className="w-28 h-28 rounded-3xl shadow-2xl flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-gray-900">Telegram</h1>
                <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">安全认证</span>
              </div>
              <div className="text-base text-gray-600 mb-4">社交通讯 | 全球通 | Telegram FZ-LLC</div>
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4.8分</div>
                  <div className="text-yellow-500 text-lg">★★★★★</div>
                  <div className="text-xs text-gray-500 mt-1">500万人评价</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10亿+</div>
                  <div className="text-sm text-gray-600 mt-1">下载量</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">91.5 MB</div>
                  <div className="text-sm text-gray-600 mt-1">安装包</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={apkUrl}
                  download="Telegram.apk"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-16 py-4 rounded-xl font-bold text-lg transition-all shadow-xl flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2v9.67z"/>
                  </svg>
                  普通下载
                </a>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  收藏
                </button>
              </div>
            </div>
          </div>

          {/* Security Tags */}
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-blue-200">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">安全检测通过</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">腾讯官方认证</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span className="text-sm font-medium text-gray-700">10亿+用户信赖</span>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded"></span>
            应用截图
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-[9/16] bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <span className="text-5xl">📱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded"></span>
            应用介绍
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-lg font-semibold text-blue-600 mb-4">
              📱 Telegram - 全球领先的即时通讯应用
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-6">
              <p className="font-bold text-blue-900 mb-3">🔐 腾讯应用宝安全认证 | 官方渠道 | 正版保证</p>
              <p className="text-blue-800 text-sm">
                Telegram已通过腾讯手机管家安全检测，确保无病毒、无木马、无恶意代码，为您提供安全可靠的下载服务。
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">⚡ 为什么选择Telegram？</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🔒</span>
                <div>
                  <strong className="text-gray-900">端对端加密：</strong>
                  <span className="text-gray-700">秘密聊天采用军用级加密技术，确保您的隐私绝对安全</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">⚡</span>
                <div>
                  <strong className="text-gray-900">超快速度：</strong>
                  <span className="text-gray-700">全球分布式服务器，消息秒传，比其他应用快10倍</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">📁</span>
                <div>
                  <strong className="text-gray-900">大文件传输：</strong>
                  <span className="text-gray-700">支持最大2GB文件传输，视频、文档轻松分享</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">👥</span>
                <div>
                  <strong className="text-gray-900">超级群组：</strong>
                  <span className="text-gray-700">创建最多20万人的超级群组，管理工具强大</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">🆓</span>
                <div>
                  <strong className="text-gray-900">完全免费：</strong>
                  <span className="text-gray-700">无广告、无订阅费、永久免费使用</span>
                </div>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-2xl">
              <p className="font-bold text-lg mb-2">✨ 全球10亿+用户的选择</p>
              <p className="text-white/90">
                被《福布斯》评为"最安全的即时通讯应用"，苹果App Store年度最佳应用，Google Play编辑推荐应用
              </p>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-1 h-6 bg-blue-600 rounded"></span>
            版本信息
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">当前版本</div>
              <div className="text-xl font-bold text-gray-900">10.5.2</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">更新时间</div>
              <div className="text-xl font-bold text-gray-900">2025-11-18</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">支持系统</div>
              <div className="text-xl font-bold text-gray-900">Android 6.0+</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-sm text-gray-600 mb-1">安装包大小</div>
              <div className="text-xl font-bold text-gray-900">91.5 MB</div>
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl shadow-2xl p-10 text-center text-white">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold mb-3">腾讯应用宝官方渠道</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            安全认证 · 正版保证 · 一键安装 · 极速下载
          </p>
          <a
            href={apkUrl}
            download="Telegram.apk"
            className="inline-block bg-white text-blue-600 px-16 py-5 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all shadow-2xl transform hover:scale-105"
          >
            立即安全下载
          </a>
          <p className="text-sm text-white/80 mt-6">
            文件大小：91.5 MB | 需要Android 6.0及以上 | 已通过腾讯安全认证
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <div className="flex justify-center gap-8 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-blue-600">关于应用宝</a>
            <a href="#" className="hover:text-blue-600">隐私政策</a>
            <a href="#" className="hover:text-blue-600">用户协议</a>
            <a href="#" className="hover:text-blue-600">联系我们</a>
          </div>
          <p className="text-xs text-gray-500">
            © 2025 应用宝. 此页面为第三方下载站，非腾讯官方页面。
          </p>
        </div>
      </footer>
    </div>
  )
}
