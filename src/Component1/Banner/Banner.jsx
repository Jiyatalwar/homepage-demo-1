
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const slidesData = [
  {
    id: 1,
    bgImage:
      "/binary-banner/Engineering-Enterprise-Networks.jpg",
    subtitle: "",
    titleLine1: "Engineering Enterprise Networks",
    titleLine2: "for Wi-Fi 7, SD-WAN and NaaS",
    description:
      "Always Connected. Always Optimised.",
  },
  {
    id: 2,
    bgImage:
      "/binary-banner/Securing-Every-Endpoint-with-Zero-Trust-and-24×7-SOC.jpg",
    subtitle: "",
    titleLine1: "Securing Every Endpoint",
    titleLine2: "with Zero Trust and 24×7 SOC",
    description: "Detect Faster. Respond Smarter.",
  },
  {
    id: 3,
    bgImage:
      "/binary-banner/Building-AI-Ready-Data-Platforms-on-HCI-and-Hybrid-Storage.jpg",
    subtitle: "",
    titleLine1: "Building AI-Ready Data",
    titleLine2: "Platforms on HCI and Hybrid Storage",
    description: "Protected Data. Proven Performance.",
  },
  {
    id: 4,
    bgImage:
      "/binary-banner/Accelerating-Hybrid-Cloud-Migration-with-FinOps-and-DevOps.jpg",
    subtitle: "",
    titleLine1: "Accelerating Hybrid Cloud Migration",
    titleLine2: "with FinOps and DevOps",
    description: "Migrate Boldly. Spend Wisely.",
  },
  {
    id: 5,
    bgImage:
      "/binary-banner/elivering-End-to-End-IT-Infrastructure-and-Managed-Services-Across-India.jpg",
    subtitle: "",
    titleLine1: "Delivering End-to-End IT Infrastructure",
    titleLine2: "and Managed Services Across India",
    description: "One Partner. Every Layer.",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeData = slidesData[currentSlide];
  const line1 = activeData.titleLine1;
  const line2 = activeData.titleLine2;
  const desc = activeData.description;

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === slidesData.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
  };

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <section
      style={{
        backgroundImage: `url(${activeData.bgImage})`,
      }}
      className="relative z-10 flex h-[600px] items-center overflow-hidden bg-cover bg-[position:65%_center] bg-no-repeat transition-all duration-700 sm:h-[750px] sm:bg-center lg:h-[660px] xl:h-[800px]"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/45" />

      <div className="Container relative z-10 w-full">
        <div className="relative w-full">

          {/* Dynamic Changing Text */}
          <div key={currentSlide} className="transition-all duration-500">

            {/* Subtitle */}
            <h5 className="mb-4 flex items-center gap-2 font-['Rajdhani'] text-base font-semibold tracking-[0.12em] text-white sm:text-lg">
              {activeData.subtitle}
            </h5>

            {/* Main Heading */}
            <h1 className="font-['Rajdhani'] text-[clamp(2rem,4.6vw,4.5rem)] font-bold leading-[1.08] tracking-[-0.025em] text-white">
              <span className="block sm:whitespace-nowrap">
                {line1}
              </span>

              <span className="block sm:whitespace-nowrap">
                {line2}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-3 mb-2 min-h-[4rem] max-w-[750px] font-['Rajdhani'] text-lg font-medium leading-[1.6] tracking-[0.01em] text-white/90 sm:text-xl">
              {desc}
            </p>
          </div>

          {/* Read More Button */}
          <div className="flex flex-col gap-5 sm:flex-row">
            <Link to="/">
              <button
                type="button"
                className="group relative isolate inline-flex items-center gap-2 overflow-hidden rounded-md bg-white px-7 py-3 font-['Rajdhani'] text-lg font-bold tracking-wide text-[#5A90C9] transition-colors duration-300 hover:text-white"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#5A90C9] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />

                <span className="relative">Read More</span>
                <BiLinkExternal className="relative" size={19} />
              </button>
            </Link>
          </div>

          {/* Previous & Next Buttons */}
          <div className="mt-8 flex items-center gap-4">  
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 hover:bg-white hover:text-[#08132b]"
            >
              <HiArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 hover:bg-white hover:text-[#08132b]"
            >
              <HiArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
