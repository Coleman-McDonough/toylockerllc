import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Units Page | Toy Locker LLC",
  description:
    "Toy Locker LLC has the tallest and cheapest storage units in New Hampshire!",
  // other metadata
};

export default function UnitsPage() {
  return (
    <div className="pt-20 md:pt-24">
      <Pricing />
    </div>
  )
}
