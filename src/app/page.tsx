import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toy Locker, LLC | 16 Foot Storage Units in NH",
  description:
    "Toy Locker, LLC in Ossipee, NH. Our 16 foot tall storage units, ideal for RVs and boats, are conveniently located on Route 16. Contact us at 978-375-7001 ",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Pricing />
      <Testimonials />
      <AboutSectionTwo />
      {/* 
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Blog />
      */}
      <Contact />
    </>
  );
}
