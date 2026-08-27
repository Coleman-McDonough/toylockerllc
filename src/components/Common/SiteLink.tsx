import type { ReactNode } from "react"

/** Real browser links so Chrome, Firefox, and Safari all load the next page. */
export default function SiteLink({
  href,
  className,
  children,
}: {
  href: string
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}
