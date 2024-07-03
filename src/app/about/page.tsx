import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Toy Locker LLC",
  description:
    "Toy Locker, LLC offers 16 foot tall storage units, perfect for storing Boats, RV's, etc. that you will have access to all year round. Don't miss out on your chance to reserve your unit today! Please contact us for further information.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Toy Locker LLC"
        description="Toy Locker, LLC offers 16 foot tall storage units, perfect for storing Boats, RV's, etc. that you will have access to all year round. Don't miss out on your chance to reserve your unit today! Please contact us for further information."
      />
      {/* 
      <AboutSectionOne />
      */}
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
