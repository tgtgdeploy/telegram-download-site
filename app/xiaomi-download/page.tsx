import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telegram - 小米应用商店官方下载',
  description: 'Telegram小米应用商店官方下载页。小米手机专属优化版本，完美适配MIUI系统，免费安全的即时通讯应用。',
  keywords: ['Telegram小米应用商店', 'Telegram小米下载', 'Telegram MIUI', 'Telegram小米手机', 'Telegram红米'],
}

export default function XiaomiDownloadPage() {
  const apkUrl = "https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Xiaomi Store Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-bold text-white">小米应用商店</div>
            <div className="text-xs text-white/80">GetApps</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* App Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-4">
          <div className="flex gap-5 items-start mb-6">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2337aee2'/%3E%3Cstop offset='100%25' style='stop-color:%231e96c8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='240' height='240' fill='url(%23a)' rx='55'/%3E%3Cpath fill='%23fff' d='M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80'/%3E%3Cpath fill='%23d2e5f1' d='M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035'/%3E%3Cpath fill='%23b5cfe4' d='M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258'/%3E%3C/svg%3E"
              alt="Telegram"
              className="w-24 h-24 rounded-3xl shadow-lg flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Telegram</h1>
              <div className="text-sm text-gray-600 mb-3">社交聊天 · Telegram FZ-LLC</div>
              <div className="flex items-center gap-6 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="text-xl font-bold text-gray-900">4.8</span>
                  <span className="text-orange-500">★★★★★</span>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">10亿+</div>
                  <div className="text-xs text-gray-500">下载量</div>
                </div>
                <div>
                  <div className="text-gray-900 font-medium">91.5MB</div>
                  <div className="text-xs text-gray-500">安装包</div>
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={apkUrl}
                  download="Telegram.apk"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-3 rounded-full font-bold text-base transition-all shadow-lg"
                >
                  下载安装
                </a>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">小米优化</span>
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">MIUI专版</span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">免费无广告</span>
            <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">端到端加密</span>
          </div>
        </div>

        {/* Screenshots */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">应用截图</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="aspect-[9/16] bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-md">
                <span className="text-4xl">📱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">应用简介</h2>
          <div className="prose prose-sm max-w-none text-gray-700">
            <p className="mb-3">
              <strong className="text-orange-600">🎯 小米手机专属优化版</strong>
            </p>
            <p className="mb-4">
              Telegram 是全球领先的即时通讯应用，专为小米/红米手机深度优化，完美适配 MIUI 系统，为小米用户带来极致流畅的使用体验。
            </p>

            <p className="mb-2"><strong>🔥 小米用户专享特性：</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-2">
              <li>完美适配 MIUI 14/15 系统</li>
              <li>小米推送服务优化，消息更及时</li>
              <li>小米账号一键登录</li>
              <li>针对小米折叠屏优化</li>
              <li>电池优化，更省电</li>
            </ul>

            <p className="mb-2"><strong>⚡ 核心功能：</strong></p>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-2">
              <li><strong>极速同步：</strong>所有设备实时同步消息</li>
              <li><strong>端对端加密：</strong>秘密聊天模式保护隐私</li>
              <li><strong>大文件传输：</strong>支持最大2GB文件传输</li>
              <li><strong>超级群组：</strong>最多20万人群组</li>
              <li><strong>强大机器人：</strong>丰富的Bot生态系统</li>
              <li><strong>完全免费：</strong>无广告、无订阅费</li>
            </ul>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg mt-4">
              <p className="text-sm text-orange-900">
                <strong>小米用户提示：</strong>下载后请在MIUI安全中心授予Telegram必要权限，以获得最佳使用体验。
              </p>
            </div>
          </div>
        </div>

        {/* Version Info */}
        <div className="bg-white rounded-3xl shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-4">版本信息</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-500 mb-1">当前版本</div>
              <div className="text-gray-900 font-medium">10.5.2</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">更新时间</div>
              <div className="text-gray-900 font-medium">2025-11-18</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">支持系统</div>
              <div className="text-gray-900 font-medium">Android 6.0+</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">开发者</div>
              <div className="text-gray-900 font-medium">Telegram FZ-LLC</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">安装包大小</div>
              <div className="text-gray-900 font-medium">91.5 MB</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">权限要求</div>
              <div className="text-gray-900 font-medium">查看详情</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl shadow-xl p-8 text-center text-white">
          <div className="text-3xl mb-2">📱</div>
          <h2 className="text-2xl font-bold mb-3">小米手机专属版本</h2>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            专为MIUI系统优化，完美适配小米/红米全系列设备
          </p>
          <a
            href={apkUrl}
            download="Telegram.apk"
            className="inline-block bg-white text-orange-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all shadow-2xl"
          >
            立即下载安装
          </a>
          <p className="text-sm text-white/70 mt-4">91.5 MB · Android 6.0+ · 免费无广告</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
          <p>© 2025 小米应用商店. 此页面为第三方下载站，非小米官方页面。</p>
        </div>
      </footer>
    </div>
  )
}
