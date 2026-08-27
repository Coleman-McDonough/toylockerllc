import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Units Page | Toy Locker LLC",
  description:
    "Toy Locker LLC has the tallest and cheapest storage units in New Hampshire!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      {/*
      <Breadcrumb
        pageName="Storage Units"
        description="New Hampshire's Tallest, Most Affordable Storage Units - Secure Your Space Today!"
      />
       */}
      <Pricing />
    </>
  );
};

export default ContactPage;
