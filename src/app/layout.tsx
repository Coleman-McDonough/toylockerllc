"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import ScrollToTop from "@/components/ScrollToTop"
import { Inter } from "next/font/google"
import "node_modules/react-modal-video/css/modal-video.css"
import "../styles/index.css"
import { Analytics } from "@vercel/analytics/react"
import { Providers } from "./providers"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JPLT2S32BJ');
            `,
          }}
        />
        <meta
          property="og:title"
          content="Toy Locker, LLC | 16 Foot Storage Units in NH"
        />
        <meta
          property="og:description"
          content="Toy Locker, LLC in Ossipee, NH. Our 16 foot tall storage units, ideal for RVs and boats, are conveniently located on Route 16. Contact us at 978-375-7001"
        />
        <meta
          property="og:image"
          content="https://www.toylocker.llc/images/about/car_unit_2.jpg"
        />
        <meta property="og:url" content="https://www.toylocker.llc/" />
        <meta
          name="twitter:title"
          content="Toy Locker, LLC | 16 Foot Storage Units in NH"
        />
        <meta name="twitter:description" content="Add description here" />
        <meta
          name="twitter:url"
          content="https://www.toylocker.llc/images/about/car_unit_2.jpg"
        />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
      </head>

      <body className={`dark:bg-black bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
