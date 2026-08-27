"use client"

import Link from "next/link"
import type { MouseEvent, ReactNode } from "react"

function chromeNeedsFullLoad() {
  const ua = navigator.userAgent
  if (/Firefox|FxiOS/i.test(ua)) return false
  if (/Safari/i.test(ua) && !/Chrome|CriOS|Chromium|Edg|OPR/i.test(ua)) {
    return false
  }
  return /Chrome|CriOS|Chromium|Edg|OPR|Brave/i.test(ua)
}

export default function SiteLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  const sameSite = href.startsWith("/") && !href.startsWith("//")

  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!sameSite || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    if (!chromeNeedsFullLoad()) return
    event.preventDefault()
    event.nativeEvent.stopImmediatePropagation()
    window.location.assign(href)
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}
