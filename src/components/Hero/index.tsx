import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="/images/hero/tl_drone_2.png" // Adjust the path to your image
            alt="Arial view of Toy Locker, LLC storage facility"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100} // Optional: Adjust quality as needed
          />
        </div>
        <div className="relative z-10">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto my-auto max-w-[800px] rounded-md bg-gray-900 bg-opacity-80 p-6 text-center">
                  <h1 className="dark:text-white mb-1 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                    <span className="rounded-md bg-white bg-opacity-70 px-1 text-primary">
                      Tallest
                    </span>{" "}
                    Storage Units in New Hampshire
                  </h1>
                  <p className="text-base!leading-relaxed dark:text-body-color-dark mb-12 font-bold text-white sm:text-xl md:text-2xl">
                    At 16-feet tall, Toy Locker, LLC offers the tallest personal
                    storage units in New Hampshire. These storage units are
                    perfect for RVs and boats. Contact us for leasing and
                    availability.
                  </p>
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <Link
                      // Link to a phone number
                      href="tel:978-375-7001"
                      className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                      Call Now!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
