# Telegram Download Site

Telegram下载页面，专为SEO优化设计。

## 功能特点

- 多平台下载支持（Android、iOS、Windows、Mac、Linux、Web）
- Google Play风格下载页面 (`/play-download`)
- 各应用商店专属下载页（华为、小米、百度）
- 版本信息展示和更新日志
- 响应式设计，支持移动端

## SEO优化

已完成的SEO优化：

- **Sitemap**: 动态生成sitemap.xml，包含所有下载页面
- **Robots.txt**: 多搜索引擎支持（Google、Bing、Baidu、Yandex）
- **Open Graph**: 完整的OG标签配置
- **Twitter Cards**: 社交分享优化
- **Canonical URLs**: 规范链接防止重复内容
- **JSON-LD Schema**: SoftwareApplication结构化数据
- **图片优化**: AVIF/WebP格式，响应式尺寸
- **安全头部**: X-Content-Type-Options, Referrer-Policy等

## 技术栈

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3003

### 构建生产版本

```bash
npm run build
npm start
```

## 页面结构

| 路径 | 说明 |
|------|------|
| `/` | 主页，所有平台下载入口 |
| `/play-download` | Google Play风格APK下载页 |
| `/huawei-download` | 华为应用市场下载页 |
| `/xiaomi-download` | 小米应用商店下载页 |
| `/baidu-download` | 百度手机助手下载页 |
| `/downloading` | 下载跳转页（倒计时） |

## 配置

### 环境变量

复制 `.env.example` 为 `.env.local` 并填写配置：

```bash
# 站点配置
NEXT_PUBLIC_SITE_NAME=Telegram Download
NEXT_PUBLIC_SITE_URL=https://你的域名

# APK下载链接
ANDROID_APK_URL=https://your-storage/Telegram.apk

# Admin API（可选）
ADMIN_API_URL=https://adminseohub.xyz
```

### 下载链接配置

编辑 `config/download.json` 文件更新版本信息：

```json
{
  "version": "10.5.2",
  "releaseDate": "2025-01-15"
}
```

## 下载流程

```
用户访问下载页 → 点击下载按钮 → 跳转页（3秒倒计时）→ 下载API → APK文件
```

### API端点

- `/api/download?platform=android` - Android APK下载
- `/downloading?platform=android` - 下载跳转页

## 部署

### Vercel（推荐）

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 发布目录：`.next`
4. 配置环境变量

### Cloudflare Pages

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 输出目录：`.next`

## 许可证

MIT
