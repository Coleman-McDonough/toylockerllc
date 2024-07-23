export const metadata: Metadata = {
  title:
    "RV Storage, Boat Storage, Camper Storage in New Hampshire | Toy Locker, LLC",
  description:
    "Toy Locker, LLC offers the tallest storage units in New Hampshire, perfect for RV, boat, and camper storage. Contact us for secure and affordable storage solutions.",
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
