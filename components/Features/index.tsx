import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="max-w-[665px] mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-white mb-6">
              Pharmacy System Features
            </h1>
            <p className="text-lg leading-relaxed text-black dark:text-white/95">
              Explore the core features of our pharmacy management system,
              including advanced geolocation services to track nearby pharmacies
              and optimize deliveries.
            </p>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuresData.map((feature, index) => (
              <SingleFeature
                key={feature.id || `feature-${index}`}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
