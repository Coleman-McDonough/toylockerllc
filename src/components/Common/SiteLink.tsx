"use client"

import type { AnchorHTMLAttributes, MouseEvent } from "react"

/**
 * Same-site links do a real browser load so the Units/Contact pages
 * cannot get stuck in a crashed Next.js client transition.
 */
export default function SiteLink({
  href,
  className,
  children,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const sameSite = href.startsWith("/") && !href.startsWith("//")

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || !sameSite) return
    event.preventDefault()
    window.location.assign(href)
  }

  return (
    <a href={href} className={className} {...rest} onClick={handleClick}>
      {children}
    </a>
  )
}
