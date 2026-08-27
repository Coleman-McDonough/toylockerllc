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
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#FCFCFC] px-4 py-28 text-center">
        <h1 className="mb-4 text-2xl font-bold text-black">
          This page did not finish loading
        </h1>
        <p className="mb-8 text-base text-[#637381]">
          Reload it and try the menu again.
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.assign(window.location.pathname)
          }}
          className="rounded-sm bg-[#063646] px-8 py-3 text-base font-medium text-white"
        >
          Reload page
        </button>
      </body>
    </html>
  )
}
