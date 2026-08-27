"use client"

import { useEffect } from "react"

const CLIENT_ID =
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
  process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT_ID ||
  ""

const RELOAD_FLAG = "tl-hard-reload"
const RECOVER_PREFIX = "tl-recover:"

function reloadOnce() {
  if (sessionStorage.getItem(RELOAD_FLAG) === "1") return
  sessionStorage.setItem(RELOAD_FLAG, "1")
  window.location.reload()
}

export default function DeployGuard() {
  useEffect(() => {
    const clearFlags = window.setTimeout(() => {
      sessionStorage.removeItem(RELOAD_FLAG)
      Object.keys(sessionStorage)
        .filter((key) => key.startsWith(RECOVER_PREFIX))
        .forEach((key) => sessionStorage.removeItem(key))
    }, 4000)

    const onError = (event: ErrorEvent) => {
      const message = String(event.error?.message || event.message || "")
      if (
        /is not a function|ChunkLoadError|Loading chunk|failed to load/i.test(
          message,
        )
      ) {
        console.error("Toy Locker recoverable client error:", message)
        reloadOnce()
      }
    }

    const onRejection = (event: PromiseRejectionEvent) => {
      const message = String(event.reason?.message || event.reason || "")
      if (
        /is not a function|ChunkLoadError|Loading chunk|failed to load/i.test(
          message,
        )
      ) {
        console.error("Toy Locker recoverable promise error:", message)
        reloadOnce()
      }
    }

    window.addEventListener("error", onError)
    window.addEventListener("unhandledrejection", onRejection)

    const checkDeploy = async () => {
      if (!CLIENT_ID || CLIENT_ID === "dev") return
      try {
        const response = await fetch("/api/deploy-id", { cache: "no-store" })
        if (!response.ok) return
        const data = (await response.json()) as { id?: string }
        if (data.id && data.id !== "dev" && data.id !== CLIENT_ID) {
          console.warn("Toy Locker deploy changed; reloading stale tab")
          window.location.reload()
        }
      } catch (error) {
        console.error("Toy Locker deploy check failed:", error)
      }
    }

    void checkDeploy()
    const onVisible = () => {
      if (document.visibilityState === "visible") void checkDeploy()
    }
    document.addEventListener("visibilitychange", onVisible)

    return () => {
      window.clearTimeout(clearFlags)
      window.removeEventListener("error", onError)
      window.removeEventListener("unhandledrejection", onRejection)
      document.removeEventListener("visibilitychange", onVisible)
    }
  }, [])

  return null
}
