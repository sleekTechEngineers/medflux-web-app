"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-[-2]">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container">
        {/* Content Header with Enhanced Animations */}
        <div className="text-center my-16 max-w-4xl mx-auto">
          {/* Animated Title */}
          <div className="transform transition-all duration-1000 translate-y-0 opacity-100 mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 relative">
              {/* Main title with gradient and glow */}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent 
                             hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-700 transition-all duration-700
                             drop-shadow-sm animate-pulse hover:animate-none">
                We are ready to help
              </span>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-indigo-500 
                              rounded-full animate-bounce opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-indigo-400 to-indigo-600 
                              rounded-full animate-ping opacity-60"></div>
            </h1>
          </div>

          {/* Animated Description */}
          <div className="transform transition-all duration-1000 delay-300 translate-y-0 opacity-100">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto
                         hover:text-gray-900 dark:hover:text-white transition-colors duration-500
                         relative z-10">
              Our pharmacy system is designed to improve medication management, provide precise geolocation services, 
              and ensure customer satisfaction with every delivery.
              
              {/* Animated underline */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                              bg-gradient-to-r from-indigo-500 to-purple-500 
                              group-hover:w-full transition-all duration-1000 rounded-full"></div>
            </p>
          </div>

          {/* Floating Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-16 left-16 w-6 h-6 bg-indigo-400 rounded-full animate-float opacity-40"></div>
            <div className="absolute top-32 right-24 w-4 h-4 bg-purple-400 rounded-full animate-float delay-500 opacity-30"></div>
            <div className="absolute bottom-24 left-32 w-5 h-5 bg-black rounded-full animate-float delay-1000 opacity-35"></div>
          </div>
        </div>

        {/* Video Container with Advanced Animations */}
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="group mx-auto max-w-[770px] transform transition-all duration-1000 
                            translate-y-0 opacity-100 delay-500">
              
              {/* Video wrapper with multiple animation layers */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl 
                              hover:shadow-3xl hover:shadow-indigo-500/25 transition-all duration-700
                              transform hover:scale-105 hover:-rotate-1">
                
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 
                                rounded-2xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-1000
                                animate-gradient-x"></div>
                
                {/* Video container */}
                <div className="relative aspect-[77/40] items-center justify-center bg-black rounded-2xl overflow-hidden">
                  
                  {/* Animated overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 
                                  group-hover:opacity-100 transition-all duration-500">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center 
                                    shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 delay-200
                                    hover:bg-white hover:scale-110 cursor-pointer">
                      <div className="w-0 h-0 border-l-[16px] border-l-indigo-600 border-y-[12px] border-y-transparent ml-1
                                      transform hover:scale-110 transition-transform duration-300"></div>
                    </div>
                  </div>

                  {/* Main Video */}
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover transition-all duration-700 
                               group-hover:scale-110 group-hover:brightness-110 filter"
                  >
                    <source src="https://media.istockphoto.com/id/1699713173/video/male-pharmacist-talking-to-camera-in-pharmacy.mp4?s=mp4-480x480-is&k=20&c=rGGNVLchpjHQSSgPT3_d6ua_MOiqUKobRac-EaA11Zg=" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Corner decorations */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-yellow-400 to-indigo-600 
                                  rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100
                                  transition-all duration-500 delay-300 animate-pulse"></div>
                  
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-br from-indigo-400 to-indigo-600 
                                  rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100
                                  transition-all duration-500 delay-500 animate-ping"></div>
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-indigo-400/30 
                                scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-0
                                transition-all duration-1000 pointer-events-none"></div>
              </div>

              {/* Video Stats/Info Cards */}
              <div className="flex flex-wrap justify-center gap-4 mt-8 transform transition-all duration-1000 delay-700
                              translate-y-0 opacity-100">
                
                {/* Quality Badge */}
                <div className="group/badge bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3
                                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300
                                border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 
                                   group-hover/badge:text-indigo-700 dark:group-hover/badge:text-indigo-300 transition-colors">
                     Quality meds
                  </span>
                </div>

                {/* Duration Badge */}
                <div className="group/badge bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3
                                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 delay-100
                                border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 
                                   group-hover/badge:text-indigo-700 dark:group-hover/badge:text-purple-300 transition-colors">
                    Quick Search
                  </span>
                </div>

                {/* Feature Badge */}
                <div className="group/badge bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3
                                shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 delay-200
                                border border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 
                                   group-hover/badge:text-indigo-700 dark:group-hover/badge:text-indigo-300 transition-colors">
                    professional Pharmacies
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Video */}
      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

      {/* Enhanced Background Shape */}
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full 
                      bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat
                      opacity-50 dark:opacity-30 transition-opacity duration-500"></div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Video;