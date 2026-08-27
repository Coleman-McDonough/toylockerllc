"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Toy Locker page error:", error?.message, error?.digest, error)
  }, [error])

  return (
    <section className="relative z-10 px-4 py-28 text-center">
      <h1 className="mb-4 text-2xl font-bold text-black dark:text-white">
        Something went wrong
      </h1>
      <p className="mb-8 text-body-color">
        Reload this page, or call (978) 375-7001.
      </p>
      <button
        type="button"
        onClick={() => {
          reset()
          window.location.reload()
        }}
        className="rounded-sm bg-primary px-8 py-3 text-base font-medium text-white"
      >
        Reload page
      </button>
    </section>
  )
}
