"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    /* eslint-disable react/no-unescaped-entities */

    <section id="pricing" className="relative z-10 py-16 mb-56 md:py-20 lg:py-28">
      <div className="container">
        

        <div className="w-full">
        <div data-aos="fade-left"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine" className="text-center max-w-[665px] mx-auto my-11">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-indigo-600 mb-4">
    Simple and Affordable Pricing
  </h1>
  <p className="text-lg text-gray-600 dark:text-white">
  Our pricing is designed to be simple and accessible for all users, ensuring affordability without compromising on quality. Whether you&apos;re an individual or a business, our plans cater to diverse needs.
  </p>
</div>

          <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-indigo-600"
                  : "text-dark dark:text-white"
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
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-indigo-600"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
  <PricingBox
    packageName="Lite"
    price={isMonthly ? "20" : "250"}
    duration={isMonthly ? "mo" : "yr"}
    subtitle="Perfect for small-scale businesses looking to explore key features."
  >
    <OfferList text="Inventory Management" status="active" />
    <OfferList text="Prescription Handling" status="active" />
    <OfferList text="AI Health Assistant" status="active" />
    <OfferList text="Basic Analytics" status="active" />
    <OfferList text="Chat Support" status="inactive" />
    <OfferList text="Delivery Management" status="inactive" />
  </PricingBox>
  <PricingBox
    packageName="Basic"
    price={isMonthly ? "35" : "450"}
    duration={isMonthly ? "mo" : "yr"}
    subtitle="Designed for growing businesses with moderate usage."
  >
    <OfferList text="Inventory Management" status="active" />
    <OfferList text="Prescription Handling" status="active" />
    <OfferList text="AI Health Assistant" status="active" />
    <OfferList text="Advanced Analytics" status="active" />
    <OfferList text="Chat Support" status="active" />
    <OfferList text="Delivery Management" status="active" />
  </PricingBox>
  <PricingBox
    packageName="Plus"
    price={isMonthly ? "45" : "550"}
    duration={isMonthly ? "mo" : "yr"}
    subtitle="Best for enterprises requiring full-scale integration and premium features."
  >
    <OfferList text="Inventory Management & Invoice " status="active" />
    <OfferList text="Prescription Handling" status="active" />
    <OfferList text="AI Health Assistant" status="active" />
    <OfferList text="Advanced Analytics & Reports" status="active" />
    <OfferList text="Chat & Delivery Management" status="active" />
    <OfferList text="Rapid Test Integration" status="active" />
    
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
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
