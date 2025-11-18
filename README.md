# Telegram Download Site

独立的Telegram下载页面，专为SEO优化设计。

## 功能特点

- ✅ 多平台下载支持（Android、iOS、Windows、Mac、Linux、Web）
- ✅ 版本信息展示
- ✅ 更新日志
- ✅ 功能介绍
- ✅ SEO优化
- ✅ 响应式设计
- ✅ 不自动下载，用户主动点击

## 技术栈

- Next.js 14
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

## 配置

### 修改下载链接和版本信息

#### 1. 编辑版本信息

编辑 `config/download.json` 文件：

```json
{
  "version": "10.5.2",
  "releaseDate": "2025-01-15"
}
```

#### 2. 配置下载链接

编辑 `.env.local` 文件：

```bash
# 方式1：直接使用Supabase链接
ANDROID_APK_URL="https://your-supabase-project.supabase.co/storage/v1/object/public/downloads/Telegram.apk"

# 方式2：使用自定义CDN域名（推荐）
ANDROID_APK_URL="https://cdn.yourapp.com/telegram.apk"
```

### 环境变量

复制 `.env.example` 为 `.env.local` 并填写配置：

```bash
cp .env.example .env.local
```

## 下载流程

### 用户下载流程

```
用户访问下载页 → 点击"APK直接下载" → 跳转页（3秒倒计时）→ 下载API → APK文件
```

### API端点

- `/api/download?platform=android` - Android APK下载
- `/downloading?platform=android` - 下载跳转页

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Cloudflare Pages

1. 连接 GitHub 仓库
2. 构建命令：`npm run build`
3. 输出目录：`.next`
4. 环境变量：参考 `.env.example`

## SEO优化建议

1. **域名选择**
   - 使用包含关键词的域名（如：telegram-download.com）
   - 配置独立域名，避免子域名

2. **内容优化**
   - 定期更新版本信息
   - 添加更多关键词相关内容
   - 保持页面加载速度

3. **技术SEO**
   - 已配置metadata
   - 已配置OpenGraph
   - 建议添加sitemap
   - 建议添加robots.txt

## 许可证

MIT
