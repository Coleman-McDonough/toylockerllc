"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Toy Locker layout error:", error?.message, error?.digest, error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#FCFCFC] px-4 py-28 text-center">
        <h1 className="mb-4 text-2xl font-bold text-black">
          Something went wrong
        </h1>
        <p className="mb-8 text-base text-[#637381]">
          Reload this page, or call (978) 375-7001.
        </p>
        <button
          type="button"
          onClick={() => {
            reset()
            window.location.reload()
          }}
          className="rounded-sm bg-[#063646] px-8 py-3 text-base font-medium text-white"
        >
          Reload page
        </button>
      </body>
    </html>
  )
}
