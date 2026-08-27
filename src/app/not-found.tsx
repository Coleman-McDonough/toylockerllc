import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Toy Locker, LLC | Page Not Found",
  description: "That page is not on the Toy Locker site.",
}

export default function NotFound() {
  return (
    <section className="relative z-10 px-4 pb-16 pt-36 text-center md:pb-20 lg:pb-28 lg:pt-[180px]">
      <h1 className="dark:text-white mb-4 text-3xl font-bold text-black sm:text-4xl">
        Page not found
      </h1>
      <p className="mx-auto mb-10 max-w-xl text-base text-body-color">
        That address is not a page on Toy Locker. Head back home, or call
        (978) 375-7001 and we will help you from there.
      </p>
      <a
        href="/"
        className="inline-block rounded-md bg-primary px-8 py-3 text-base font-bold text-white"
      >
        Back to Homepage
      </a>
    </section>
  )
}
