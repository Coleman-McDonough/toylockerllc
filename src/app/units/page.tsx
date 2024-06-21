import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Units Page | Coming Soon!",
  description: "We are still working on this page!",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Coming Soon!"
        description="We are still working on this page!"
      />
    </>
  );
};

export default ContactPage;
