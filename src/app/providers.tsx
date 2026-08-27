"use client"

import { Analytics } from "@vercel/analytics/react"
import DeployGuard from "@/components/DeployGuard"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <DeployGuard />
      <Header />
      {children}
      <Analytics />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  )
}
