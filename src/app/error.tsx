"use client"

import { useEffect } from "react"

export default function Error({
  error,
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
        This page did not finish loading
      </h1>
      <p className="mb-8 text-body-color">Reload it and try the menu again.</p>
      <button
        type="button"
        onClick={() => {
          window.location.assign(window.location.pathname)
        }}
        className="rounded-sm bg-primary px-8 py-3 text-base font-medium text-white"
      >
        Reload page
      </button>
    </section>
  )
}
