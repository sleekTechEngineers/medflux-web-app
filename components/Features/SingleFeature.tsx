import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp w-full" data-wow-delay=".15s">
        <div className="flex items-start w-full space-x-4">
          {/* Icon Container */}
          <div className=" flex  items-center justify-center rounded-md bg-indigo-800 bg-opacity-10 text-indigo-600">
            {/* Ensuring consistent icon size */}
            <div className="w-14 text-indigo-600 animate-spin flex items-center justify-center h-14">{icon}</div>
          </div>

          {/* Title and Paragraph */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {title}
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
