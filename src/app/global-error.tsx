"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(
      "Toy Locker layout error:",
      error?.message,
      error?.digest,
      error,
    )
    if (
      error?.digest === "BAILOUT_TO_CLIENT_SIDE_RENDERING" ||
      error?.digest === "NEXT_NOT_FOUND" ||
      error?.digest === "NEXT_REDIRECT"
    ) {
      return
    }
    const key = `tl-recover:${window.location.pathname}`
    if (sessionStorage.getItem(key) === "1") return
    sessionStorage.setItem(key, "1")
    window.location.replace(window.location.href)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#FCFCFC] px-4 py-28 text-center">
        <h1 className="mb-4 text-2xl font-bold text-black">Loading…</h1>
        <p className="text-base text-[#637381]">
          If this does not continue, call (978) 375-7001.
        </p>
      </body>
    </html>
  )
}
