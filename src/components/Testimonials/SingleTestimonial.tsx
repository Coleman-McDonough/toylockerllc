import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { image, url, alt } = testimonial;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={alt} width={500} height={300} className="object-cover" />
    </a>
  );
};

export default SingleTestimonial;
