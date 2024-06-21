import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Toy Locker, LLC",
  description:
    "Get in touch with Toy Locker in Ossipee, NH. Our storage units, ideal for RVs and boats, stand 16 feet tall and are conveniently located on Route 16. Contact us at 978-375-7001 for more information.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <div>
        <Breadcrumb
          pageName="Contact Page"
          description="Get in touch with Toy Locker in Ossipee, NH. Our storage units, ideal for RVs and boats, stand 16 feet tall and are conveniently located on Route 16. Contact us at 978-375-7001 for more information. "
        />
      </div>
      <Contact />
    </>
  );
};

export default ContactPage;
