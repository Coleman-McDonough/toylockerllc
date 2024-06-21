import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-8 lg:py-16">
        <div className="container">
          <SectionTitle
            title="16 Foot Tall Storage Units"
            paragraph="Toy Locker, LLC offers 16 foot tall storage units, perfect for storing Boats, RV's, etc. that you will have access to all year round. Don't miss out on your chance to reserve your unit today! Please contact us for further information."
            center
          />

          <div className="-mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:-mt-8 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
