"use client";
import React from 'react'

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import {  useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet" />
      </head>

      <body className="bg-[#FCFCFC] dark:bg-black font-manrope w-full">
        <Providers>
          <Header />
          {children}
          <Footer />
    
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
