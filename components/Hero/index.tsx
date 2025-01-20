import Link from "next/link";
import Image from 'next/image'
import Hero1 from '../Hero/hero1'

const Hero = () => {
  return (
    <>
    
   <Hero1 />
    
      <div className="container">
          <div className="-mx-4 flex flex-wrap">
            
            <div className="w-full space-x-8 md:space-x- px-4 flex items-center flex-col  md:flex-row justify-center mobile">
            
              <div className="flex items-center justify-center md:hidden">
             
<div className="w-[320px] h-[320px] bg-indigo-600 rounded-md ">
<div data-aos="fade-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=" w-[320px] h-[320px] relative bg-black mt-5  ml-6 rounded-md dark:bg-white border-none">
              <Image 
  src="/images/hero/2.png" 
  alt="Android icon" 
  fill
  style={{ objectFit: "contain" }}
/>
</div>
              </div>
              </div>
              

              <div className="lg:col-span-5 md:w-full flex flex-col items-center justify-center layout">
  <div className="mb-16 lg:mb-0 xl:mt-16 md:space-y-16 space-y-10">
    <h2 className="mb-6 font-extrabold text-2xl md:text-3xl leading-snug text-indigo-600">Get your meds from your favorite pharmacy!</h2>
    <ul className="list mb-6 space-y-12">
      <li className="flex space-x-2">
      <i
          
          className=""
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Add-Circle-Bold--Streamline-Ultimate" height="24" width="24"><desc>Add Circle Bold Streamline Icon: https://streamlinehq.com</desc><path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z" stroke-width="1.5"></path><path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75h-3v-3c0 -0.39782 -0.158 -0.77936 -0.4393 -1.06066 -0.2813 -0.2813 -0.6629 -0.43934 -1.0607 -0.43934h-1.5c-0.3978 0 -0.7794 0.15804 -1.0607 0.43934 -0.28126 0.2813 -0.4393 0.66284 -0.4393 1.06066v3h-3c-0.39782 0 -0.77936 0.15804 -1.06066 0.4393 -0.2813 0.2813 -0.43934 0.6629 -0.43934 1.0607v1.5c0 0.3978 0.15804 0.7794 0.43934 1.0607s0.66284 0.4393 1.06066 0.4393h3v3c0 0.3978 0.15804 0.7794 0.4393 1.0607 0.2813 0.2813 0.6629 0.4393 1.0607 0.4393h1.5c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-3h3c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-1.5c0 -0.3978 -0.158 -0.7794 -0.4393 -1.0607 -0.2813 -0.28126 -0.6629 -0.4393 -1.0607 -0.4393Z" stroke-width="1.5"></path></svg>
        </i>
        <div className="dark:text-white">
        With our extensive range of eateries, which range from your preferred neighbourhood venue <br /> to a hidden gem, taste the tastes of the globe.

        </div>
      </li>
      <li className="flex space-x-2">
        <i
          
          className=""
        ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Add-Circle-Bold--Streamline-Ultimate" height="24" width="24"><desc>Add Circle Bold Streamline Icon: https://streamlinehq.com</desc><path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z" stroke-width="1.5"></path><path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75h-3v-3c0 -0.39782 -0.158 -0.77936 -0.4393 -1.06066 -0.2813 -0.2813 -0.6629 -0.43934 -1.0607 -0.43934h-1.5c-0.3978 0 -0.7794 0.15804 -1.0607 0.43934 -0.28126 0.2813 -0.4393 0.66284 -0.4393 1.06066v3h-3c-0.39782 0 -0.77936 0.15804 -1.06066 0.4393 -0.2813 0.2813 -0.43934 0.6629 -0.43934 1.0607v1.5c0 0.3978 0.15804 0.7794 0.43934 1.0607s0.66284 0.4393 1.06066 0.4393h3v3c0 0.3978 0.15804 0.7794 0.4393 1.0607 0.2813 0.2813 0.6629 0.4393 1.0607 0.4393h1.5c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-3h3c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-1.5c0 -0.3978 -0.158 -0.7794 -0.4393 -1.0607 -0.2813 -0.28126 -0.6629 -0.4393 -1.0607 -0.4393Z" stroke-width="1.5"></path></svg>
        </i>
        <div className="dark:text-white">
        Press, press, done! Just a few clicks will place the order and allow you to pay with either 
        cash, card, or Bolt balance.

        </div>
      </li>
      
    
    </ul>
  </div>
</div>


        <div className="">
        <div className="bg-indigo-600  md:w-[340px] hidden md:block w-[300px] h-[300px] rounded-md md:h-[340px]">
                <div className="md:-ml-6 rounded-xl w-[340px] h-[350px] dark:bg-white bg-black mt-8 md:absolute">
                <Image 
  src="/images/hero/2.png" 
  alt="Android icon" 
  fill
        style={{ objectFit: "contain" }}
  
/>

                </div>
              </div>
          </div>     
            </div>
           
          </div>
        </div>
     

<div className="flex container md:space-x-7 md:my-44 my-5 items-center justify-center flex-col md:flex-row">
  
<div data-aos="fade-top"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">
      <video 
        autoPlay 
        muted  
        loop 
        playsInline 
        className="w-full h-full object-cover"
      >
        <source src="/images/video/motor1 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>



        <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="mb-16   space-y-2 md:w-[750px] w-[350px] my-16 md:my-0 ">
    <h2 className="mb-6 font-extrabold text-2xl md:text-3xl leading-snug text-indigo-600">Medication Delivery
    Assistance</h2>
    <ul className="list mb-6 space-y-8">
  <li className="flex space-x-2">
    <i className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Add-Circle-Bold--Streamline-Ultimate" height="24" width="24">
        <desc>Add Circle Bold Streamline Icon: https://streamlinehq.com</desc>
        <path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z" stroke-width="1.5"></path>
        <path stroke="#3949AB" stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75h-3v-3c0 -0.39782 -0.158 -0.77936 -0.4393 -1.06066 -0.2813 -0.2813 -0.6629 -0.43934 -1.0607 -0.43934h-1.5c-0.3978 0 -0.7794 0.15804 -1.0607 0.43934 -0.28126 0.2813 -0.4393 0.66284 -0.4393 1.06066v3h-3c-0.39782 0 -0.77936 0.15804 -1.06066 0.4393 -0.2813 0.2813 -0.43934 0.6629 -0.43934 1.0607v1.5c0 0.3978 0.15804 0.7794 0.43934 1.0607s0.66284 0.4393 1.06066 0.4393h3v3c0 0.3978 0.15804 0.7794 0.4393 1.0607 0.2813 0.2813 0.6629 0.4393 1.0607 0.4393h1.5c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-3h3c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-1.5c0 -0.3978 -0.158 -0.7794 -0.4393 -1.0607 -0.2813 -0.28126 -0.6629 -0.4393 -1.0607 -0.4393Z" stroke-width="1.5"></path>
      </svg>
    </i>
    <div className="dark:text-white">
      Connect with trusted pharmacists from the comfort of your home. Get prescriptions delivered quickly and securely, along with expert advice tailored to your health.
    </div>
  </li>
  <li className="flex space-x-2">
    <i className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Chat-Icon" height="24" width="24">
        <desc>Chat Icon</desc>
        <circle cx="12" cy="12" r="10" stroke="#3949AB" stroke-width="1.5"></circle>
        <path d="M8 10h8M8 14h5" stroke="#3949AB" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </i>
    <div className="dark:text-white">
      Chat live with healthcare professionals to get instant answers to your questions, ensuring you receive the best care.
    </div>
  </li>
  <li className="flex space-x-2">
    <i className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Tracking-Icon" height="24" width="24">
        <desc>Tracking Icon</desc>
        <circle cx="12" cy="12" r="10" stroke="#3949AB" stroke-width="1.5"></circle>
        <path d="M12 6v6h4" stroke="#3949AB" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </i>
    <div className="dark:text-white">
      Track your order in real-time and stay updated with the status of your medication deliveries at every step.
    </div>
  </li>
  <li className="flex space-x-2">
    <i className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Walk-In-Icon" height="24" width="24">
        <desc>Walk-In Icon</desc>
        <path d="M6 21V6h12v15" stroke="#3949AB" stroke-width="1.5"></path>
        <path d="M12 10v4" stroke="#3949AB" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </i>
    <div className="dark:text-white">
      Prefer to visit in person? Walk into our stores and pick up your prescriptions with ease and personalized assistance.
    </div>
  </li>
  <li className="flex space-x-2">
    <i className="">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Pick-Up-Icon" height="24" width="24">
        <desc>Pick-Up Station Icon</desc>
        <circle cx="12" cy="12" r="10" stroke="#3949AB" stroke-width="1.5"></circle>
        <path d="M8 12h8" stroke="#3949AB" stroke-width="1.5" stroke-linecap="round"></path>
      </svg>
    </i>
    <div className="dark:text-white">
      Use our convenient pick-up stations to collect your orders at your own schedule, avoiding long waiting times.
    </div>
  </li>
</ul>

  </div>
     
</div>



<div className="container">
          <div className="-mx-4 flex flex-wrap">
            
            <div className="w-full space-x-8 md:space-x- px-4 flex items-center flex-col  md:flex-row justify-center mobile">
            
              <div className="flex items-center justify-center md:hidden">
             
<div className="w-[320px] h-[320px] bg-indigo-600 rounded-md dark:bg-white">
<div className="w-[320px] h-[320px] relative bg-black mt-5  ml-6 rounded-md dark:bg-white border-none">
<video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover rounded-md"
      >
        <source src="/images/video/Pharmacy Stock Footage- Royalty-Free Video Clips.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
</div>
              </div>
              </div>
              

              <div data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="lg:col-span-5 md:w-full flex flex-col items-center justify-center layout">
  <div className="mb-16 lg:mb-0 xl:mt-16 md:space-y-16 space-y-10">
    <h2 className="mb-6 font-extrabold text-2xl md:text-3xl leading-snug text-indigo-600">
      Searching for medication and get available pharmacies
    </h2>
    <ul className="list mb-6 space-y-12">
      <li className="flex space-x-2">
        <i className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Add-Circle-Bold--Streamline-Ultimate"
            height="24"
            width="24"
          >
            <desc>Add Circle Bold Streamline Icon: https://streamlinehq.com</desc>
            <path
              stroke="#3949AB"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
              stroke-width="1.5"
            ></path>
            <path
              stroke="#3949AB"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 9.75h-3v-3c0 -0.39782 -0.158 -0.77936 -0.4393 -1.06066 -0.2813 -0.2813 -0.6629 -0.43934 -1.0607 -0.43934h-1.5c-0.3978 0 -0.7794 0.15804 -1.0607 0.43934 -0.28126 0.2813 -0.4393 0.66284 -0.4393 1.06066v3h-3c-0.39782 0 -0.77936 0.15804 -1.06066 0.4393 -0.2813 0.2813 -0.43934 0.6629 -0.43934 1.0607v1.5c0 0.3978 0.15804 0.7794 0.43934 1.0607s0.66284 0.4393 1.06066 0.4393h3v3c0 0.3978 0.15804 0.7794 0.4393 1.0607 0.2813 0.2813 0.6629 0.4393 1.0607 0.4393h1.5c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-3h3c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-1.5c0 -0.3978 -0.158 -0.7794 -0.4393 -1.0607 -0.2813 -0.28126 -0.6629 -0.4393 -1.0607 -0.4393Z"
              stroke-width="1.5"
            ></path>
          </svg>
        </i>
        <div className="dark:text-white">
          With our extensive range of eateries, which range from your preferred neighbourhood venue
          <br /> to a hidden gem, taste the tastes of the globe.
        </div>
      </li>
      <li className="flex space-x-2">
        <i className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            id="Add-Circle-Bold--Streamline-Ultimate"
            height="24"
            width="24"
          >
            <desc>Add Circle Bold Streamline Icon: https://streamlinehq.com</desc>
            <path
              stroke="#3949AB"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M0.75 12c0 2.9837 1.18526 5.8452 3.29505 7.955C6.15483 22.0647 9.01631 23.25 12 23.25c2.9837 0 5.8452 -1.1853 7.955 -3.295 2.1097 -2.1098 3.295 -4.9713 3.295 -7.955 0 -2.98369 -1.1853 -5.84517 -3.295 -7.95495C17.8452 1.93526 14.9837 0.75 12 0.75c-2.98369 0 -5.84517 1.18526 -7.95495 3.29505C1.93526 6.15483 0.75 9.01631 0.75 12Z"
              stroke-width="1.5"
            ></path>
            <path
              stroke="#3949AB"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 9.75h-3v-3c0 -0.39782 -0.158 -0.77936 -0.4393 -1.06066 -0.2813 -0.2813 -0.6629 -0.43934 -1.0607 -0.43934h-1.5c-0.3978 0 -0.7794 0.15804 -1.0607 0.43934 -0.28126 0.2813 -0.4393 0.66284 -0.4393 1.06066v3h-3c-0.39782 0 -0.77936 0.15804 -1.06066 0.4393 -0.2813 0.2813 -0.43934 0.6629 -0.43934 1.0607v1.5c0 0.3978 0.15804 0.7794 0.43934 1.0607s0.66284 0.4393 1.06066 0.4393h3v3c0 0.3978 0.15804 0.7794 0.4393 1.0607 0.2813 0.2813 0.6629 0.4393 1.0607 0.4393h1.5c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-3h3c0.3978 0 0.7794 -0.158 1.0607 -0.4393s0.4393 -0.6629 0.4393 -1.0607v-1.5c0 -0.3978 -0.158 -0.7794 -0.4393 -1.0607 -0.2813 -0.28126 -0.6629 -0.4393 -1.0607 -0.4393Z"
              stroke-width="1.5"
            ></path>
          </svg>
        </i>
        <div className="dark:text-white">
          Press, press, done! Just a few clicks will place the order and allow you to pay with either
          cash, card, or Bolt balance.
        </div>
      </li>
    </ul>
  </div>
</div>



        <div data-aos="fade-top"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="">
        <div className="bg-indigo-600 dark:bg-white  md:w-[340px] hidden md:block w-[300px] h-[300px] rounded-md md:h-[340px]">
                <div className="md:-ml-6 rounded-xl w-[340px] h-[350px]  dark:bg-white bg-black mt-8 md:absolute">
                <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="w-full h-full object-cover rounded-md"
      >
        <source src="/images/video/Pharmacy Stock Footage- Royalty-Free Video Clips.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

                </div>
              </div>
          </div>     
            </div>
           
          </div>
        </div>

    

    </>
  );
};

export default Hero;
