import React from 'react';
import { Apple, Download, Play, ArrowRight } from "lucide-react";
import Image from 'next/image';


export default function Hero() {
  return (
    
    <>
    <section className="relative min-h-screen bg-white dark:bg-black  overflow-hidden">
      {/* Background Elements */}

      
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[600px]">
          
          {/* Content Section */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm">
                <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-black dark:text-white">Healthcare Reimagined</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Healthcare
                <span className="block bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                  At Home
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-900 dark:text-white leading-relaxed max-w-xl">
                Experience the future of healthcare with rapid testing, 
                instant consultations, and prescription delivery—all from the comfort of your home.
              </p>
            </div>
            
            {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      {/* iOS Button */}
      <button className="group relative flex items-center justify-center gap-3 overflow-hidden bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-xl font-medium text-base transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative flex items-center gap-3">
          <Apple className="w-5 h-5 text-white" />
          <span>Download for iOS</span>
      
        </div>
      </button>

      {/* Android Button */}
      <button className="group relative flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-6 py-2 rounded-xl font-medium text-base border-2 border-slate-200 hover:border-indigo-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
        <Play className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200" />
        <span>Download for Android</span>
      </button>
    </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-500 dark:text-white">50K+</div>
                <div className="text-sm text-white/10 dark:text-violet-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-500 dark:text-white">98%</div>
                <div className="text-sm text-white/10 dark:text-violet-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-500 dark:text-white">24/7</div>
                <div className="text-sm text-white/10 dark:text-violet-600">Support</div>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-700 dark:bg-black rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="bg-black dark:bg-white rounded-2xl p-6 shadow-inner">
                  <div className="aspect-square bg-gradient-to-br from-blue-50 to-indigo-50 dark:bg-indigo-600 rounded-xl flex items-center justify-center overflow-hidden">
  <img
    src="https://plus.unsplash.com/premium_photo-1661397081309-c98ead2f9e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBwaGFybWFjaXN0JTIwYXQlMjBwaGFybWFjeXxlbnwwfHwwfHx8MA%3D%3D"
    alt=""
    className="w-full h-full object-cover"
  />
</div>

                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full"></div>
                  <div className="space-y-1">
                    <div className="w-12 h-2 bg-slate-200 rounded"></div>
                    <div className="w-8 h-2 bg-slate-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
      <section className="bg-white dark:bg-black py-10 px-6 relative z-10 overflow-hidden">
  {/* Background decorations */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left side - Image and Dashboard */}
      <div className="relative group">
        <div className="relative transform transition-all duration-1000 hover:scale-105">
          {/* Floating animation wrapper */}
          <div className="animate-bounce-slow">
            <img 
              src="/manbb.svg" 
              alt="Hero SVG" 
              className="w-[800px] h-[800px] transform transition-all duration-700 hover:rotate-1 
                         drop-shadow-2xl hover:drop-shadow-3xl filter hover:brightness-110" 
            />
          </div>
          
          {/* Animated glow effect around image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 
                          rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          {/* Floating particles */}
          <div className="absolute top-10 right-10 w-4 h-4 bg-indigo-400 rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-20 left-16 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500 opacity-40"></div>
          <div className="absolute top-1/2 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping delay-1000 opacity-50"></div>
        </div>
      </div>

      {/* Right side - Content */}
      <div className="text-white space-y-8">
        {/* Title with gradient and slide-in animation */}
        <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 
                         bg-clip-text text-transparent mb-6 transform hover:scale-105 transition-transform duration-300">
            How It Works
          </h2>
        </div>

        {/* Description with fade-in */}
        <div className="transform transition-all duration-1000 delay-200 translate-y-0 opacity-100">
          <p className="text-lg text-gray-900 dark:text-gray-300 mb-10 leading-relaxed hover:text-gray-700 
                        dark:hover:text-gray-200 transition-colors duration-300">
            Our platform simplifies the entire supply chain process from listing to delivery
          </p>
        </div>

        {/* Steps with staggered animations */}
        <div className="space-y-8">
          {/* Step 01 */}
          <div className="group flex items-start space-x-4 transform transition-all duration-700 delay-300 
                          translate-x-0 opacity-100 hover:translate-x-2">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full 
                            flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/25
                            transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                            animate-pulse hover:animate-none">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">01</span>
            </div>
            <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 
                             group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                Suppliers List Inventory
              </h3>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 
                            dark:group-hover:text-gray-200 transition-colors duration-300">
                Suppliers upload their products to our comprehensive marketplace platform with detailed
                specifications and pricing.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="group flex items-start space-x-4 transform transition-all duration-700 delay-500 
                          translate-x-0 opacity-100 hover:translate-x-2">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full 
                            flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/25
                            transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                            animate-pulse hover:animate-none delay-200">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">02</span>
            </div>
            <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 
                             group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                Pharmacies Browse & Order
              </h3>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 
                            dark:group-hover:text-gray-200 transition-colors duration-300">
                Pharmacies easily search, compare, and order the products they need through our user-friendly
                interface.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="group flex items-start space-x-4 transform transition-all duration-700 delay-700 
                          translate-x-0 opacity-100 hover:translate-x-2">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full 
                            flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/25
                            transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                            animate-pulse hover:animate-none delay-500">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">03</span>
            </div>
            <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 
                             group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                AI-Powered Insights
              </h3>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 
                            dark:group-hover:text-gray-200 transition-colors duration-300">
                Our AI provides smart recommendations and market insights for better purchasing decisions.
              </p>
            </div>
          </div>

          {/* Step 04 */}
          <div className="group flex items-start space-x-4 transform transition-all duration-700 delay-1000 
                          translate-x-0 opacity-100 hover:translate-x-2">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full 
                            flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-indigo-500/25
                            transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500
                            animate-pulse hover:animate-none delay-700">
              <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">04</span>
            </div>
            <div className="flex-1 transform group-hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2 
                             group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">
                Fast & Reliable Delivery
              </h3>
              <p className="text-gray-900 dark:text-gray-300 leading-relaxed group-hover:text-gray-700 
                            dark:group-hover:text-gray-200 transition-colors duration-300">
                Get your orders delivered within 48 hours with our dependable logistics network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}