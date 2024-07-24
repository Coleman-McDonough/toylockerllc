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
      (function() {
        var gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-JPLT2S32BJ';
        document.head.appendChild(gtagScript);
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-JPLT2S32BJ');
      })();
    `,
          }}
        />

        <meta
          property="og:title"
          content="Self Storage for Your Boat or RV in Ossipee NH | Toy Locker LLC
"
        />
        <meta
          property="og:description"
          content="Toy Locker, LLC offers the tallest self storage units in NH, perfect for RV, boat, and camper storage. Call us for secure and affordable storage solutions."
        />
        <meta
          property="og:image"
          content="https://www.toylocker.llc/images/about/car_unit_2.jpg"
        />
        <meta property="og:url" content="https://www.toylocker.llc/" />
        <meta
          name="twitter:title"
          content="Self Storage for Your Boat or RV in Ossipee NH | Toy Locker LLC
"
        />
        <meta
          name="twitter:description"
          content="Toy Locker, LLC offers the tallest self storage units in NH, perfect for RV, boat, and camper storage. Call us for secure and affordable storage solutions."
        />
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
