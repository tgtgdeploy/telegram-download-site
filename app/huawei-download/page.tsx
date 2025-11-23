import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telegram - 华为应用市场官方下载',
  description: 'Telegram华为应用市场官方下载页。免费安全的即时通讯应用，支持端对端加密，华为手机用户专享优化版本。',
  keywords: ['Telegram华为应用市场', 'Telegram华为下载', 'Telegram鸿蒙', 'Telegram华为手机', 'Telegram AppGallery'],
}

export default function HuaweiDownloadPage() {
  const apkUrl = "https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Huawei AppGallery Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            华
          </div>
          <div>
            <div className="font-bold text-gray-900">华为应用市场</div>
            <div className="text-xs text-gray-500">HUAWEI AppGallery</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* App Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex gap-4 items-start">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2337aee2'/%3E%3Cstop offset='100%25' style='stop-color:%231e96c8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='240' height='240' fill='url(%23a)' rx='55'/%3E%3Cpath fill='%23fff' d='M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80'/%3E%3Cpath fill='%23d2e5f1' d='M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035'/%3E%3Cpath fill='%23b5cfe4' d='M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258'/%3E%3C/svg%3E"
              alt="Telegram"
              className="w-20 h-20 rounded-2xl shadow-md flex-shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Telegram</h1>
              <div className="text-sm text-gray-600 mb-2">社交通讯 | Telegram FZ-LLC</div>
              <div className="flex items-center gap-4 text-sm mb-3">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">4.8</span>
                </div>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">10亿+下载</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-600">91.5 MB</span>
              </div>
              <div className="flex gap-3">
                <a
                  href={apkUrl}
                  download="Telegram.apk"
                  className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-2.5 rounded-full font-medium transition-all shadow-lg"
                >
                  立即下载
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-2.5 rounded-full font-medium hover:border-gray-400 transition-colors">
                  加入收藏
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">应用截图</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex-shrink-0 w-44 h-80 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-white shadow-md">
                <span className="text-5xl">📱</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">应用介绍</h2>
          <div className="text-sm text-gray-700 space-y-3 leading-relaxed">
            <p>
              <strong>Telegram</strong> 是一款专注于速度和安全性的即时通讯应用，它快速、简单且免费。您可以同时在所有设备上使用Telegram - 您的消息可在任意数量的手机、平板电脑或电脑上无缝同步。
            </p>
            <p>
              <strong>华为用户专享优化：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>完美适配鸿蒙系统</li>
              <li>华为推送服务优化，消息更及时</li>
              <li>华为账号快速登录</li>
              <li>适配华为折叠屏</li>
            </ul>
            <p>
              <strong>核心功能：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>🔒 端对端加密的秘密聊天</li>
              <li>⚡ 极速消息传输</li>
              <li>📁 支持2GB大文件传输</li>
              <li>👥 20万人超级群组</li>
              <li>🤖 强大的机器人生态</li>
              <li>🆓 完全免费，无广告</li>
            </ul>
            <p className="text-gray-600 text-xs mt-4">
              版本：10.5.2 | 更新时间：2025-11-18 | 适用系统：Android 6.0+
            </p>
          </div>
        </div>

        {/* Ratings */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <h2 className="text-lg font-bold text-gray-900 mb-4">用户评价</h2>
          <div className="flex items-center gap-8 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900">4.8</div>
              <div className="text-yellow-500 text-2xl my-1">★★★★★</div>
              <div className="text-sm text-gray-600">共500万条评价</div>
            </div>
            <div className="flex-1">
              {[
                { stars: 5, percent: 85, count: '425万' },
                { stars: 4, percent: 10, count: '50万' },
                { stars: 3, percent: 3, count: '15万' },
                { stars: 2, percent: 1, count: '5万' },
                { stars: 1, percent: 1, count: '5万' },
              ].map((rating) => (
                <div key={rating.stars} className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-600 w-16">{rating.stars}星</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 to-pink-500"
                      style={{ width: `${rating.percent}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-12">{rating.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">华为手机用户专享版本</h2>
          <p className="text-white/90 mb-6">针对华为设备深度优化，完美适配鸿蒙系统</p>
          <a
            href={apkUrl}
            download="Telegram.apk"
            className="inline-block bg-white text-red-600 px-10 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl"
          >
            立即下载安装
          </a>
          <p className="text-sm text-white/80 mt-4">文件大小：91.5 MB | 需要Android 6.0及以上</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-xs text-gray-500">
          <p>© 2025 华为应用市场. 此页面为第三方下载站，非华为官方页面。</p>
        </div>
      </footer>
    </div>
  )
}
