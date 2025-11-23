# Netlify 部署修复指南

## 问题诊断

构建失败是因为Netlify在错误的目录(`/opt/build/repo/packages/database`)尝试构建。

## 解决步骤

### 1. 登录Netlify控制台
访问: https://app.netlify.com

### 2. 进入站点设置
找到你的 `telegram-download-site` 站点 → 点击 **Site settings**

### 3. 修改构建设置
进入 **Build & deploy** → **Continuous Deployment** → **Build settings**

修改以下配置:

| 设置项 | 当前错误值 | 正确值 |
|--------|-----------|--------|
| Base directory | `/opt/build/repo/packages/database` | **留空** (不填写) |
| Build command | `next build` | `npm run build` |
| Publish directory | `.next` | `.next` |

### 4. 清除缓存并重新部署
- 点击 **Deploys** 标签
- 点击 **Trigger deploy** → **Clear cache and deploy site**

### 5. 验证环境变量
在 **Site settings** → **Environment variables** 中确认已设置:

```bash
NEXT_PUBLIC_SITE_NAME=Telegram Download
NEXT_PUBLIC_SITE_URL=https://你的域名.netlify.app
NEXT_PUBLIC_SITE_DOMAIN=你的域名.netlify.app
ADMIN_API_URL=https://adminseohub.xyz
ANDROID_APK_URL=https://bsuvzqihxbgoclfvgbhx.supabase.co/storage/v1/object/public/downloads/Telegram.apk
```

## 为什么会出现这个错误?

Netlify检测到仓库中可能存在monorepo结构(因为有`packages`目录的引用),自动设置了错误的base directory。

但 `telegram-download-site` 是一个**独立的Next.js项目**,不是monorepo的一部分,所以Base directory应该留空。

## 预期结果

修复后,构建日志应该显示:

```
✓ Base directory: (root)
✓ Build command: npm run build
✓ Publish directory: .next
✓ Using Next.js 14.x
✓ Build completed successfully
```

部署成功后,访问你的Netlify URL应该能看到下载页面。
