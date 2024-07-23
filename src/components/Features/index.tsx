import SectionTitle from "../Common/SectionTitle"
import SingleFeature from "./SingleFeature"
import featuresData from "./featuresData"

const Features = () => {
  return (
    <>
      <section id="features" className="py-8 lg:py-16">
        <div className="container">
          <SectionTitle
            title="16 Foot Tall Storage Units"
            paragraph="Toy Locker, LLC offers premium 16-foot tall storage units, perfect for RV storage, boat storage, camper storage, and self-storage. Our units provide ample space and secure storage for all your needs, accessible all year round. Whether you need to store your RV, boat, camper, or other belongings, we have the ideal self storage solution for you. Don’t miss out on your chance to reserve your unit today! Contact us for further information on our RV storage, boat storage, camper storage, and self-storage options."
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
  )
}

export default Features
