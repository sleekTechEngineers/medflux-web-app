"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import { useState, useEffect } from "react";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="pt-16 pb-8 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-8 left-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 
                         dark:from-white dark:to-gray-300 bg-clip-text text-transparent
                         hover:from-indigo-600 hover:to-purple-600 transition-all duration-700">
            Trusted by Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full
                          transform scale-x-0 animate-scale-x delay-500"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Join thousands of pharmacies and suppliers who trust our platform
          </p>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            {/* Desktop Grid View */}
            <div className="hidden md:block">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 
                              dark:border-gray-700/50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl 
                              transform hover:-translate-y-2 transition-all duration-700 relative overflow-hidden">
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 
                                dark:from-indigo-900/10 dark:to-purple-900/5 opacity-0 hover:opacity-100 
                                transition-opacity duration-1000"></div>
                
                {/* Grid of logos */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center relative z-10">
                  {brandsData.map((brand, index) => (
                    <SingleBrand key={brand.id} brand={brand} index={index} />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Infinite Slider */}
            <div className="md:hidden">
              <InfiniteSlider brands={brandsData} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-40"></div>
      <div className="absolute top-3/4 right-16 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-1000 opacity-30"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-ping delay-500 opacity-50"></div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        @keyframes float-brand {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
        
        .animate-scale-x {
          animation: scale-x 1s ease-out forwards;
        }
        
        .animate-slide {
          animation: slide 30s linear infinite;
        }
        
        .animate-float-brand {
          animation: float-brand 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

// Enhanced Single Brand Component
const SingleBrand = ({ brand, index }: { brand: Brand; index: number }) => {
  const { href, image, name } = brand;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group transform transition-all duration-700 hover:-translate-y-3`}
      style={{ animationDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="block relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                        rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Logo container */}
        <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 
                        shadow-lg hover:shadow-xl hover:shadow-indigo-500/10 border border-gray-200/50 
                        dark:border-gray-700/50 transform hover:scale-110 transition-all duration-500
                        group-hover:bg-white dark:group-hover:bg-gray-800">
          
          {/* Image container with animations */}
          <div className="relative h-12 w-full flex items-center justify-center overflow-hidden">
            <Image 
              src={image} 
              alt={name} 
              width={120}
              height={48}
              className={`object-contain max-h-full max-w-full transition-all duration-700
                         ${isHovered ? 'opacity-100 grayscale-0 brightness-110' : 'opacity-70 grayscale hover:opacity-100 hover:grayscale-0'}
                         dark:opacity-60 dark:hover:opacity-100 filter group-hover:drop-shadow-lg`}
            />
          </div>
          
          {/* Hover tooltip */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white 
                          text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          whitespace-nowrap pointer-events-none z-20">
            {name}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                            border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      </a>
    </div>
  );
};

// Infinite Slider Component for Mobile
const InfiniteSlider = ({ brands }: { brands: Brand[] }) => {
  const duplicatedBrands = [...brands, ...brands, ...brands]; // Triple for smooth infinite scroll

  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 
                    dark:border-gray-700/50 rounded-3xl p-6 shadow-xl overflow-hidden relative">
      
      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/80 to-transparent 
                      dark:from-gray-900/80 z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/80 to-transparent 
                      dark:from-gray-900/80 z-10"></div>
      
      {/* Sliding container */}
      <div className="flex animate-slide" style={{ width: `${duplicatedBrands.length * 120}px` }}>
        {duplicatedBrands.map((brand, index) => (
          <div key={`${brand.id}-${index}`} className="flex-shrink-0 w-28 mx-4 flex items-center justify-center">
            <div className="relative bg-white/90 dark:bg-gray-800/90 rounded-xl p-4 shadow-md 
                            border border-gray-200/30 dark:border-gray-700/30 hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-8 w-full flex items-center justify-center">
                <Image 
                  src={brand.image} 
                  alt={brand.name} 
                  width={80}
                  height={32}
                  className="object-contain max-h-full max-w-full opacity-70 grayscale 
                           hover:opacity-100 hover:grayscale-0 transition-all duration-500
                           dark:opacity-60 dark:hover:opacity-100"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;