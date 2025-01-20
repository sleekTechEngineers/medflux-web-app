"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
       
 <div
  data-aos="fade-left"
  data-aos-offset="400"
  data-aos-easing="ease-in-sine"
  className="text-left my-16"
>
  <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-white mb-4">
  We are ready to help
  </h1>
  <p className="text-lg text-black dark:text-white leading-relaxed">
  Our pharmacy system is designed to improve medication management, provide precise geolocation services, and ensure customer satisfaction with every delivery.
  </p>
</div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                
                <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover rounded-md"
      >
        <source src="/images/video/28,587 Pharmacy Stock Videos and Royalty-Free Footage - iStock.mp4" />
        Your browser does not support the video tag.
      </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
