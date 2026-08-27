"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body>
        <section className="relative z-10 px-4 py-28 text-center">
          <h1 className="mb-4 text-2xl font-bold">Something went wrong</h1>
          <p className="mb-8">
            This page hit a client error. Try again, or call (978)-375-7001.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-sm bg-[#4A6CF7] px-8 py-3 text-base font-medium text-white"
          >
            Try again
          </button>
        </section>
      </body>
    </html>
  )
}
