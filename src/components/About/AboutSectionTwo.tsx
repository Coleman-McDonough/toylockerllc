import Image from "next/image"

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/car_unit_2.jpg"
                alt="A Corvette in a Storage Unit"
                width={649} // Original width of the image
                height={487} // Original height of the image
                layout="responsive"
                className="dark:hidden dark:drop-shadow-none drop-shadow-three"
              />
              <Image
                src="/images/about/car_unit_2.jpg"
                alt="A Corvette in a Storage Unit"
                width={649} // Original width of the image
                height={487} // Original height of the image
                layout="responsive"
                className="dark:block dark:drop-shadow-none hidden drop-shadow-three"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="dark:text-white mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Tallest Storage Units
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Toy Locker, LLC, we have allocated ample space to ensure
                  ease of access with high bay commercial doors and the tallest
                  personal storage units in New Hampshire.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="dark:text-white mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Safe and Secure
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our facility allows for our tenant&apos;s equipment to remain
                  indoors and out of the weather. These sixteen foot tall
                  storage units are perfect for storing Boats, RV&apos;s, or any
                  other toy you need stored securely.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="dark:text-white mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Convenient and Customizable
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Located right off Route 16, we have various units of differing
                  lengths and widths. Call 978-375-7001 today for more
                  information!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionTwo
