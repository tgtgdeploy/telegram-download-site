import downloadConfig from '@/config/download.json'

export default function DownloadPage() {
  const { version, releaseDate, changelog, downloads } = downloadConfig

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          {/* Telegram Logo */}
          <div className="flex justify-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 256 256">
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

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Telegram 下载
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            免费、安全、快速的即时通讯应用
          </p>

          {/* Version Badge */}
          <div className="inline-flex items-center gap-2 bg-telegram-blue text-white px-6 py-2 rounded-full mb-8">
            <span className="font-semibold">最新版本：v{version}</span>
            <span className="opacity-80">|</span>
            <span className="opacity-90">{releaseDate}</span>
          </div>
        </div>
      </section>

      {/* Download Buttons Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            选择您的平台
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Android */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10" fill="white">
                  <path d="M21.005 43.003c-4.053-.002-7.338 3.291-7.339 7.341l.005 30.736a7.34 7.34 0 0 0 7.342 7.343a7.33 7.33 0 0 0 7.338-7.342V50.34a7.345 7.345 0 0 0-7.346-7.337m59.193-27.602l5.123-9.355a1.023 1.023 0 0 0-.401-1.388a1.02 1.02 0 0 0-1.382.407l-5.175 9.453c-4.354-1.938-9.227-3.024-14.383-3.019c-5.142-.005-10.013 1.078-14.349 3.005L44.45 5.075a1.01 1.01 0 0 0-1.378-.406a1.007 1.007 0 0 0-.404 1.38l5.125 9.349c-10.07 5.193-16.874 15.083-16.868 26.438l66.118-.008c.002-11.351-6.79-21.221-16.845-26.427M48.942 29.858a2.772 2.772 0 0 1 .003-5.545a2.78 2.78 0 0 1 2.775 2.774a2.776 2.776 0 0 1-2.778 2.771m30.106-.005a2.77 2.77 0 0 1-2.772-2.771a2.793 2.793 0 0 1 2.773-2.778a2.79 2.79 0 0 1 2.767 2.779a2.767 2.767 0 0 1-2.768 2.77M31.195 44.39l.011 47.635a7.82 7.82 0 0 0 7.832 7.831l5.333.002l.006 16.264c-.001 4.05 3.291 7.342 7.335 7.342c4.056 0 7.342-3.295 7.343-7.347l-.004-16.26l9.909-.003l.004 16.263c0 4.047 3.293 7.346 7.338 7.338c4.056.003 7.344-3.292 7.343-7.344l-.005-16.259l5.352-.004a7.835 7.835 0 0 0 7.836-7.834l-.009-47.635zm83.134 5.943a7.34 7.34 0 0 0-7.341-7.339c-4.053-.004-7.337 3.287-7.337 7.342l.006 30.738a7.334 7.334 0 0 0 7.339 7.339a7.337 7.337 0 0 0 7.338-7.343z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Android</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.android.fileSize} • {downloads.android.minVersion}</p>
              <div className="space-y-3">
                <a
                  href={downloads.android.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Google Play 下载
                </a>
                <a
                  href="/downloading?platform=android"
                  className="block w-full bg-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
                >
                  APK 直接下载
                </a>
              </div>
            </div>

            {/* iOS */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-10 h-10" fill="white">
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258s.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854s-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116c-.508.139-1.653.589-1.968.607c-.316.018-1.256-.522-2.267-.665c-.647-.125-1.333.131-1.824.328c-.49.196-1.422.754-2.074 2.237c-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472c.357.013 1.061.154 1.782.539c.571.197 1.111.115 1.652-.105c.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">iOS</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.ios.fileSize} • {downloads.ios.minVersion}</p>
              <a
                href={downloads.ios.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                App Store 下载
              </a>
            </div>

            {/* Windows */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10" fill="white">
                  <path d="m126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404l50.791 6.983l-.04-49.057zm56.82.68l.094 49.465l67.376 9.509l.016-58.863zM1.61 19.297l.047 42.383l50.791-.289l-.023-49.016z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Windows</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.windows.fileSize} • {downloads.windows.minVersion}</p>
              <a
                href={downloads.windows.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
              >
                立即下载
              </a>
            </div>

            {/* Mac */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="w-10 h-10" fill="white">
                  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258s.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854s-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116c-.508.139-1.653.589-1.968.607c-.316.018-1.256-.522-2.267-.665c-.647-.125-1.333.131-1.824.328c-.49.196-1.422.754-2.074 2.237c-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472c.357.013 1.061.154 1.782.539c.571.197 1.111.115 1.652-.105c.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">macOS</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.mac.fileSize} • {downloads.mac.minVersion}</p>
              <a
                href={downloads.mac.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-700 text-white text-center py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                立即下载
              </a>
            </div>

            {/* Linux */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-10 h-10" fill="white">
                  <path d="M84.52 99.909c-1.682-.683-3.304.148-4.225 1.743c-1.044 2.235-2.92 3.71-4.684 3.71c-.06 0-.118-.001-.177-.004c-2.066-.088-3.943-1.642-4.92-4.072c-.908-2.257-.778-4.498.356-6.141c1.078-1.563 2.844-2.4 5.114-2.42h.05c.748 0 1.397-.507 1.577-1.233l1.032-4.153c.213-.858-.322-1.726-1.195-1.939a1.752 1.752 0 0 0-.375-.04c-3.627 0-6.895 1.395-8.934 3.824c-2.121 2.529-2.996 5.925-2.399 9.31c.844 4.799 4.272 8.506 8.498 9.195c.339.056.681.083 1.017.083c3.719 0 7.205-2.399 9.107-6.272c.812-1.654.14-3.647-1.495-4.441zm21.467-20.792l-5.758-.93c-.867-.14-1.692.432-1.843 1.276a1.73 1.73 0 0 0 .04.749l1.348 4.102c.236.717 1.017 1.13 1.776.935c3.428-.877 6.68.485 8.916 3.732c2.175 3.16 2.495 7.257.834 10.677c-1.502 3.092-4.403 5.042-7.564 5.084h-.066c-2.317 0-4.478-1.156-5.922-3.17c-1.298-1.81-1.84-4.071-1.485-6.2c.121-.719-.36-1.4-1.073-1.52l-4.118-.7c-.718-.122-1.397.36-1.517 1.074c-.727 4.317.285 8.679 2.771 11.96a12.8 12.8 0 0 0 10.182 4.983l.163-.001c5.215-.07 9.872-3.287 12.17-8.401c2.75-6.126 1.794-13.302-2.49-18.714c-2.802-3.539-6.634-5.552-10.502-5.552c-.885 0-1.777.086-2.655.258z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Linux</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.linux.fileSize} • {downloads.linux.minVersion}</p>
              <a
                href={downloads.linux.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                立即下载
              </a>
            </div>

            {/* Web */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-10 h-10" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Web版</h3>
              <p className="text-gray-600 text-center mb-4">{downloads.web.description}</p>
              <a
                href={downloads.web.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                立即使用
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            为什么选择 Telegram
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">端对端加密</h3>
              <p className="text-gray-600">
                秘密聊天采用端对端加密技术，确保只有您和对方能看到消息内容，保护您的隐私安全。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">极速同步</h3>
              <p className="text-gray-600">
                基于云端的消息系统，让您在所有设备上无缝同步对话，随时随地保持连接。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">📁</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">大文件传输</h3>
              <p className="text-gray-600">
                支持最大2GB的文件传输，轻松分享视频、文档和其他大型文件，无需压缩。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">超级群组</h3>
              <p className="text-gray-600">
                创建最多20万成员的超级群组，支持管理工具、投票、主题标签等高级功能。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">强大机器人</h3>
              <p className="text-gray-600">
                丰富的Bot生态系统，提供游戏、工具、服务等各种功能，让聊天更加智能有趣。
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-5xl mb-4">🆓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">完全免费</h3>
              <p className="text-gray-600">
                永久免费，无广告，无订阅费。Telegram承诺始终为用户提供免费的服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Changelog Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            更新日志
          </h2>

          <div className="space-y-6">
            {changelog.map((release, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-telegram-blue">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    版本 {release.version}
                  </h3>
                  <span className="text-gray-500">{release.date}</span>
                </div>
                <ul className="space-y-2">
                  {release.changes.map((change, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-telegram-blue mr-2">•</span>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Telegram 下载</h3>
              <p className="text-gray-400 text-sm">
                全球领先的即时通讯应用，为您提供安全、快速、可靠的通讯服务。
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">支持平台</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Android / iOS</li>
                <li>Windows / Mac / Linux</li>
                <li>Web 浏览器版本</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">相关链接</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    官方网站
                  </a>
                </li>
                <li>
                  <a href="https://telegram.org/faq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    常见问题
                  </a>
                </li>
                <li>
                  <a href="https://telegram.org/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    隐私政策
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2025 Telegram Download Site. 本站为第三方下载页面，所有商标归其各自所有者。</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
