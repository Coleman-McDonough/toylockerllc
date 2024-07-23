export const metadata: Metadata = {
  title: "Toy Locker, LLC | 16 Foot Storage Units in NH",
  description:
    "Toy Locker, LLC in Ossipee, NH. Our 16 foot tall storage units, ideal for RVs and boats, are conveniently located on Route 16. Contact us at 978-375-7001 ",
  // other metadata
}
import AboutSectionOne from "@/components/About/AboutSectionOne"
import AboutSectionTwo from "@/components/About/AboutSectionTwo"
import Blog from "@/components/Blog"
import Brands from "@/components/Brands"
import ScrollUp from "@/components/Common/ScrollUp"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Pricing from "@/components/Pricing"
import Testimonials from "@/components/Testimonials"
import Video from "@/components/Video"
import { Metadata } from "next"
import React from "react"
import axios from "axios"
import { ToyLockerUnit } from "./models/ToyLockerUnit"
import Location from "@/components/Location"

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Pricing />
      <Features />
      <Testimonials />
      <Location />
      <AboutSectionTwo />
      {/* 
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      */}
      <Contact />
    </>
  )
}
