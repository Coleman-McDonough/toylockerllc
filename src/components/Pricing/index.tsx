"use client"
import { useState } from "react"
import SectionTitle from "../Common/SectionTitle"
import OfferList from "./OfferList"
import PricingBox from "./PricingBox"

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true)

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Storage Units"
          paragraph="We provide various storage unit sizes to accommodate your needs, whether you're looking for RV storage, boat storage, camper storage, or general self-storage. Our units are 16 feet tall, providing ample space for all your storage requirements."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "dark:text-white text-dark"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "dark:text-white text-dark"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Building A"
            price={isMonthly ? "40" : "120"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="12' x 12' Doors"
          >
            <OfferList
              text="10' x 10'"
              status="active"
              price={isMonthly ? "115" : "1,380"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="12' x 20'"
              status="active"
              price={isMonthly ? "180" : "2,160"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="12' x 25'"
              status="active"
              price={isMonthly ? "225" : "2,700"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="12' x 30'"
              status="active"
              price={isMonthly ? "270" : "3,240"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="12' x 35'"
              status="inactive"
              price={isMonthly ? "315" : "3,780"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="12' x 40'"
              status="inactive"
              price={isMonthly ? "360" : "4,320"}
              isMonthly={isMonthly}
            />
          </PricingBox>
          <PricingBox
            packageName="Building B"
            price={isMonthly ? "399" : "789"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="14' x 14' Doors"
          >
            <OfferList
              text="10' x 10'"
              status="active"
              price={isMonthly ? "115" : "1,380"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="14' x 24.4'"
              status="active"
              price={isMonthly ? "220" : "2,640"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="14' x 29'"
              status="active"
              price={isMonthly ? "261" : "3,132"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="14' x 33.5'"
              status="active"
              price={isMonthly ? "302" : "3,624"}
              isMonthly={isMonthly}
            />
          </PricingBox>
          <PricingBox
            packageName="Building C"
            price={isMonthly ? "589" : "999"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="14' x 14' Doors"
          >
            <OfferList
              text="14' x 19'"
              status="active"
              price={isMonthly ? "171" : "2,052"}
              isMonthly={isMonthly}
            />
            <OfferList
              text="14' x 38.6'"
              status="active"
              price={isMonthly ? "347" : "4,164"}
              isMonthly={isMonthly}
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#063646" />
              <stop offset="1" stopColor="#063646" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#063646" />
              <stop offset="1" stopColor="#063646" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default Pricing
