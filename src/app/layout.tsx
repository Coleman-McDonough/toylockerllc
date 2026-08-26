import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Providers } from "./providers"
import "react-modal-video/css/modal-video.css"
import "../styles/index.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Self Storage for Your Boat or RV in Ossipee NH | Toy Locker LLC",
  description:
    "Toy Locker, LLC offers the tallest self storage units in NH, perfect for RV, boat, and camper storage. Call us for secure and affordable storage solutions.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Self Storage for Your Boat or RV in Ossipee NH | Toy Locker LLC",
    description:
      "Toy Locker, LLC offers the tallest self storage units in NH, perfect for RV, boat, and camper storage. Call us for secure and affordable storage solutions.",
    url: "https://www.toylocker.llc/",
    images: ["https://www.toylocker.llc/images/about/car_unit_2.jpg"],
  },
  twitter: {
    title: "Self Storage for Your Boat or RV in Ossipee NH | Toy Locker LLC",
    description:
      "Toy Locker, LLC offers the tallest self storage units in NH, perfect for RV, boat, and camper storage. Call us for secure and affordable storage solutions.",
    images: ["https://www.toylocker.llc/images/about/car_unit_2.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`dark:bg-black bg-[#FCFCFC] ${inter.className}`}>
        <Providers>{children}</Providers>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JPLT2S32BJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JPLT2S32BJ');
          `}
        </Script>
      </body>
    </html>
  )
}
