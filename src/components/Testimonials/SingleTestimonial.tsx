import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import Link from "next/link";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { image, url } = testimonial;

  return (
    <Link href={url}>
      <Image src={image} alt="" width={500} height={300} objectFit="cover" />
    </Link>
  );
};

export default SingleTestimonial;
