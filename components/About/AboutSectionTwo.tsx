import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 dark:mb-52">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Seamless Pharmacy Locator
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Find pharmacies near you instantly with our geolocation-based system, ensuring you always know where to get the medications you need.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Reliable Customer Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our dedicated support team is available to help you with queries about pharmacy locations, medicine availability, and more.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-black sm:text-2xl lg:text-xl xl:text-2xl">
                  Innovative Features
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our system integrates advanced technologies, including real-time data updates and a user-friendly interface, for a seamless experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
