'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(query)

    // 设置初始值
    setMatches(media.matches)

    // 监听变化
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // 兼容旧版和新版浏览器
    if (media.addEventListener) {
      media.addEventListener('change', listener)
    } else {
      media.addListener(listener)
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', listener)
      } else {
        media.removeListener(listener)
      }
    }
  }, [query])

  // 在服务端或首次渲染时返回 false，避免闪烁
  return mounted ? matches : false
}

// 移动设备：小于 768px (Tailwind 的 md 断点)
export function useMobile(): boolean {
  return useMediaQuery('(max-width: 767px)')
}

// 平板设备：768px - 1023px
export function useTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)')
}

// 桌面设备：大于等于 1024px (Tailwind 的 lg 断点)
export function useDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)')
}

// 小桌面：1024px - 1279px
export function useSmallDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px) and (max-width: 1279px)')
}

// 大桌面：大于等于 1280px
export function useLargeDesktop(): boolean {
  return useMediaQuery('(min-width: 1280px)')
}
