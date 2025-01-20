import Link from "next/link";
import Image from 'next/image'

const Hero = () => {
  return (
    <>
     <div className="m-auto">
     <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            
            <div className="w-full px-4 flex items-center flex-col md:flex-row justify-center mobile">
            <div   className="bg-indigo-600 dark:bg-white md:w-[340px] hidden md:block w-[300px] h-[300px] rounded-md md:h-[340px]">
                <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"  className="md:left-32 rounded-xl mt-8 md:absolute">
                <Image 
  src="/images/hero/1.png" 
  alt="Android icon" 
  width={340} 
  height={340} 
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>

                </div>
              </div>
              <div className="flex items-center justify-center md:hidden">
              <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="w-[320px] h-[320px] absolute mt-9 ml-8">
              <Image 
  src="/images/hero/1.png" 
  alt="Android icon" 
  
  fill
        style={{ objectFit: "contain" }}
/>
</div>
<div className="w-[320px] h-[320px] bg-indigo-600 rounded-md ">

              </div>
              </div>
              

              <div
  className="wow fadeInUp md:border-b-2 md:pb-28 mx-auto max-w-[100vw] flex flex-col items-center justify-center text-center mt-16 border-indigo-600 space-y-4 md:space-y-9  md:max-w-[700px]"
  data-wow-delay=".2s" data-aos="fade-left"
  data-aos-offset="300"
  data-aos-easing="ease-in-sine"
>
  <h1 className="font-extrabold text-2xl text-black md:text-4xl leading-snug dark:text-indigo-600">
    Do everything at Healthcare online
  </h1>
  <p className="text-center text-gray-600 md:w-[530px] leading-relaxed dark:text-white">
    Experience the convenience of home rapid testing and prescription delivery with Sleek.
  </p>

  <div className="flex space-x-3 md:space-x-14 w-full  items-center justify-center">
    <Link href="">
      <button className="flex w-[140px] md:w-[200px] h-[40px] py-2 bg-indigo-600 items-center justify-center text-white font-medium hover:ring-2 hover:ring-indigo-600 hover:bg-black rounded-full hover:border-2 space-x-1.5 md:space-x-3">
        <Image
          src="/images/hero/png-apple-logo-9730 1.svg"
          alt="Apple icon"
          width={24}
          height={24}
        />
        <span className="tracking-wider">Download</span>
      </button>
    </Link>
    <Link href="">
      <button className="flex w-[140px] md:w-[200px] h-[40px] py-2 hover:bg-indigo-600 items-center justify-center text-white font-medium hover:ring-2 hover:ring-indigo-600 bg-black rounded-full hover:border-2 space-x-1.5 md:space-x-3">
        <Image
              src="/images/hero/google-play-png-logo-3781 1.svg"
          alt="Android icon"
          width={24}
          height={24}
        />
        <span className="tracking-wider">Download</span>
      </button>
    </Link>

    
  </div>
</div>

             
            </div>
           
          </div>
        </div>
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        
      </section>
    
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
  
<div className="mockup-phone border-primary">
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



        <div className="mb-16   space-y-2 md:w-[750px] w-[350px] my-16 md:my-0 ">
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
              

              <div className="lg:col-span-5 md:w-full flex flex-col items-center justify-center layout">
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



        <div className="">
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

     </div>

    </>
  );
};

export default Hero;
