'use client'

import { useMobile, useDesktop } from '@/hooks'

export default function PlayDownloadPage() {
  // APK 直接下载链接
  const apkUrl = "https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk"
  const isMobile = useMobile()
  const isDesktop = useDesktop()

  return (
    <div className="min-h-screen bg-white">
      {/* Google Play Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none">
            <path d="M9.875 42.875L31.65 21.1l-21.775-21.775c-.85.7-1.375 1.725-1.375 2.9v37.55c0 1.175.525 2.2 1.375 2.9z" fill="#4CAF50"/>
            <path d="M34.875 24.325l-3.225-3.225L9.875 42.875c.35.15.725.225 1.125.225.6 0 1.225-.15 1.775-.475l22.1-12.75v-5.55z" fill="#FFC107"/>
            <path d="M34.875 18.5l7.325-4.225c.5-.3.8-.8.8-1.35 0-.55-.3-1.05-.8-1.35l-7.325-4.225v11.15z" fill="#FF3D00"/>
            <path d="M9.875 1.325L31.65 23.1l3.225-3.225V7.125L12.775.85c-.55-.325-1.175-.475-1.775-.475-.4 0-.775.075-1.125.225z" fill="#03A9F4"/>
          </svg>
          <div className="flex-1">
            <div className="text-sm text-gray-600">Google Play</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - App Info */}
          <div className="lg:col-span-2">
            {/* App Header */}
            <div className={`flex ${isMobile ? 'gap-4' : 'gap-6'} mb-6`}>
              <div className="flex-shrink-0">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2337aee2;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%231e96c8;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='240' height='240' fill='url(%23a)' rx='55'/%3E%3Cpath fill='%23fff' d='M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80'/%3E%3Cpath fill='%23d2e5f1' d='M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035'/%3E%3Cpath fill='%23b5cfe4' d='M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.746-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258'/%3E%3C/svg%3E"
                  alt="Telegram"
                  className={`${isMobile ? 'w-20 h-20' : 'w-24 h-24'} rounded-2xl shadow-md`}
                />
              </div>
              <div className="flex-1">
                <h1 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-normal text-gray-900 mb-2`}>Telegram</h1>
                <div className="text-sm text-[#01875f] mb-1">Telegram FZ-LLC</div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span>内含广告</span>
                  <span>•</span>
                  <span>应用内购买</span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-xl font-medium text-gray-900">4.4 ★</div>
                    <div className="text-xs text-gray-600">1000万 条评价</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-medium text-gray-900">10亿+</div>
                    <div className="text-xs text-gray-600">下载次数</div>
                  </div>
                  <div className="text-center border border-gray-300 rounded px-2 py-1">
                    <div className="text-xs font-medium text-gray-900">3+</div>
                    <div className="text-xs text-gray-600">适合3岁以上</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Install Button */}
            <div className="mb-6">
              <a
                href={apkUrl}
                download="Telegram.apk"
                className={`inline-flex items-center justify-center w-full max-w-xs bg-[#01875f] hover:bg-[#016a4a] text-white font-medium ${isMobile ? 'text-sm px-6 py-2.5' : 'text-base px-8 py-3'} rounded transition-colors shadow-sm`}
              >
                安装
              </a>
              <p className="text-xs text-gray-600 mt-2">此应用与您的设备兼容</p>
            </div>

            {/* Screenshots */}
            <div className="mb-8">
              <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-gray-900 mb-4`}>屏幕截图</h2>
              <div className="flex gap-4 overflow-x-auto pb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex-shrink-0">
                    <div className={`${isMobile ? 'w-40 h-80' : 'w-48 h-96'} bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white`}>
                      <span className={`${isMobile ? 'text-5xl' : 'text-6xl'} opacity-50`}>📱</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">关于此应用</h2>
              <div className="text-sm text-gray-700 space-y-4">
                <p>
                  纯粹的即时通讯——简单、快速、安全，并且可以同时在您的所有设备上同步。目前已有超过 10 亿的活跃用户，Telegram 是全球下载量排名前 10 的应用之一。
                </p>
                <p>
                  <strong>快速：</strong>Telegram 是目前市场上速度最快的通讯应用，通过独特的分布式数据中心网络连接世界各地的用户。
                </p>
                <p>
                  <strong>同步：</strong>您可以在手机、平板电脑甚至电脑上同时访问您的消息，并在所有设备上无缝共享无限数量的照片、视频和文件（每个文件最大 2 GB）。
                </p>
                <p>
                  <strong>群组：</strong>您最多可以创建包含 200,000 名成员的超级群组，并在最多 1,000,000 位订阅者的频道中广播内容，甚至可以为内容添加限制访问链接。
                </p>
                <p>
                  <strong>安全：</strong>我们的使命是为全球用户提供最佳的安全性，结合企业级的可靠性。Telegram 的一切，包括聊天、群组、媒体等，都使用 256 位对称 AES 加密进行保护。
                </p>
                <p>
                  <strong>强大：</strong>您可以创建机器人进行特定任务或使用我们的平台 API 来构建您自己的工具。我们还有一个 Bot API，允许您为自动化任务、通知等构建机器人。
                </p>
                <p>
                  <strong>可靠：</strong>基于时间、数据和隐私，Telegram 是唯一一款真正尊重您的即时通讯应用。
                </p>
              </div>
              <button className="text-[#01875f] text-sm font-medium mt-2">
                查看更多
              </button>
            </div>

            {/* Ratings and Reviews */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">评分和评价</h2>
              <div className="flex items-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-6xl font-light text-gray-900">4.4</div>
                  <div className="flex gap-0.5 my-2">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="text-xs text-gray-600">1000万</div>
                </div>
                <div className="flex-1 space-y-2">
                  {[
                    { stars: 5, percent: 71 },
                    { stars: 4, percent: 12 },
                    { stars: 3, percent: 5 },
                    { stars: 2, percent: 3 },
                    { stars: 1, percent: 9 },
                  ].map((rating) => (
                    <div key={rating.stars} className="flex items-center gap-2">
                      <span className="text-xs text-gray-600 w-3">{rating.stars}</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#01875f]"
                          style={{ width: `${rating.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* What's New */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-4">最新动态</h2>
              <div className="text-sm text-gray-700 space-y-2">
                <p>• 全新的语音消息播放器</p>
                <p>• 改进的群组管理工具</p>
                <p>• 优化的性能和稳定性</p>
                <p>• Bug修复和其他改进</p>
              </div>
              <div className="text-xs text-gray-500 mt-3">2025年11月18日更新</div>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          {isDesktop && (
          <div className="lg:col-span-1">
            {/* App Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-4">应用信息</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-gray-600">版本</div>
                  <div className="text-gray-900">10.5.2</div>
                </div>
                <div>
                  <div className="text-gray-600">更新日期</div>
                  <div className="text-gray-900">2025年11月18日</div>
                </div>
                <div>
                  <div className="text-gray-600">需要 Android 版本</div>
                  <div className="text-gray-900">6.0 及更高版本</div>
                </div>
                <div>
                  <div className="text-gray-600">下载次数</div>
                  <div className="text-gray-900">10,000,000,000+</div>
                </div>
                <div>
                  <div className="text-gray-600">内容分级</div>
                  <div className="text-gray-900">适合3岁以上</div>
                </div>
                <div>
                  <div className="text-gray-600">提供者</div>
                  <div className="text-gray-900">Telegram FZ-LLC</div>
                </div>
              </div>
            </div>

            {/* Download Button (Sticky on Desktop) */}
            <div className="sticky top-20">
              <a
                href={apkUrl}
                download="Telegram.apk"
                className="block text-center bg-[#01875f] hover:bg-[#016a4a] text-white font-medium text-base px-6 py-3 rounded transition-colors shadow-sm"
              >
                安装
              </a>
            </div>
          </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900">关于 Google Play</a>
            <a href="#" className="hover:text-gray-900">开发者服务</a>
            <a href="#" className="hover:text-gray-900">隐私权政策</a>
            <a href="#" className="hover:text-gray-900">服务条款</a>
          </div>
          <div className="text-xs text-gray-500 mt-4">
            © 2025 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA
          </div>
        </div>
      </footer>
    </div>
  )
}
