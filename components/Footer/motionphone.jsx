import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";
import Image from "next/image";

const Example = () => {
  return (
    <section className="grid place-content-center bg-transparent p-12">
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-black "
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative   h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-indigo-600 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900 dark:bg-white"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600 dark:text-white" />
        <FiBatteryCharging className="text-neutral-600 dark:text-white" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white dark:bg-gray-900">
      {/* Example logo from logoispum */}
      <div className="  w-[140px] h-[150px] relative">
                        <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full dark:hidden !important"
                  />
                  <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden w-full dark:block !important"
                  />
                 </div>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white dark:text-white dark:bg-gray-900 py-2 text-sm font-medium text-indigo-600 backdrop-blur">
        Get Started
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-black dark:bg-white" />
    </div>
  );
};

export default Example;