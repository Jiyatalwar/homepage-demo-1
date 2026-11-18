import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const slides = [
  {
    bgVideo:
      "/binary-video/futuristic-data-network-connections-on-corporate-l-2026-10-03-06-19-22-utc.mp4",
    titleLine1: "Engineering Enterprise Networks",
    titleLine2: "for Wi-Fi 7, SD-WAN and NaaS",
    descLine1: "Always Connected. Always Optimised. ",
    descLine2: "",
  },
  {
    bgVideo:
      "/binary-video/futuristic-digital-city-with-glowing-network-and-t-2026-10-03-08-53-47-utc.mp4",
    titleLine1: "Securing Every Endpoint with",
    titleLine2: "Zero Trust and 24×7 SOC",
    descLine1: "Detect Faster. Respond Smarter.",
    descLine2: "",
  },
  {
    bgVideo:
      "/binary-video/futuristic-digital-security-shield-intro-animation-2026-10-03-06-05-44-utc.mp4",
    titleLine1: "Building AI-Ready Data Platforms",
    titleLine2: "on HCI and Hybrid Storage",
    descLine1:
      "Protected Data. Proven Performance.",
    descLine2: "",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef([]);
  const activeSlideRef = useRef(0);
  const pendingSlideRef = useRef(null);
  const intervalRef = useRef(null);

  const goToSlide = useCallback((targetIndex) => {
    const normalizedIndex = (targetIndex + slides.length) % slides.length;
    const targetVideo = videoRefs.current[normalizedIndex];

    if (targetVideo?.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) {
      pendingSlideRef.current = null;
      activeSlideRef.current = normalizedIndex;
      setCurrentSlide(normalizedIndex);
    } else {
      pendingSlideRef.current = normalizedIndex;
    }
  }, []);

  const resetAutoSlide = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (pendingSlideRef.current !== null) return;
      goToSlide(activeSlideRef.current + 1);
    }, 6000);
  }, [goToSlide]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentSlide) {
        video.play().catch((error) => {
          console.error("Failed to play banner video:", error);
        });
      } else {
        video.pause();
      }
    });
  }, [currentSlide]);

  const handlePrevSlide = () => {
    goToSlide(activeSlideRef.current - 1);
    resetAutoSlide();
  };

  const handleNextSlide = () => {
    goToSlide(activeSlideRef.current + 1);
    resetAutoSlide();
  };

  const handleVideoCanPlay = (index) => {
    if (pendingSlideRef.current === index) {
      pendingSlideRef.current = null;
      activeSlideRef.current = index;
      setCurrentSlide(index);
    }
  };

  const handleVideoError = (index) => {
    if (pendingSlideRef.current === index) {
      pendingSlideRef.current = null;
    }
    console.error(`Failed to load banner video: ${slides[index].bgVideo}`);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section className="group h-[600px] sm:h-[1200px] lg:h-[660px] xl:h-[800px] flex items-center relative z-10 overflow-hidden isolate bg-[#111827]">
      {/* Custom Styles for Left-to-Right Animation & Progress Bar */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes progressFill {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-progress {
          animation: progressFill 6s linear forwards;
        }
      `}</style>

      {slides.map((slide, index) => (
        <video
          key={slide.bgVideo}
          ref={(element) => {
            videoRefs.current[index] = element;
          }}
          autoPlay={index === currentSlide}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onCanPlay={() => handleVideoCanPlay(index)}
          onError={() => handleVideoError(index)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={slide.bgVideo} type="video/mp4" />
        </video>
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="Container relative z-20 !w-full !max-w-[1320px] !px-6">
        <div className="w-full">
          {/* Keyed wrapper to re-trigger slide-in animation on every slide change */}
          <div key={currentSlide} className="relative animate-slide-in">
            <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4"></h5>
            <h1 className="font-Rajdhani font-extrabold text-white text-[clamp(1.75rem,5.5vw,4.25rem)] leading-[1.05]">
              <span className="block sm:whitespace-nowrap">
                {activeSlide.titleLine1}
              </span>
              <span className="block sm:whitespace-nowrap">
                {activeSlide.titleLine2}
              </span>
            </h1>
            <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[30px] mt-1">
              {activeSlide.descLine1}
              <br className="hidden 2xl:block" /> {activeSlide.descLine2}
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to={"/contact"}>
                <button className="inline-flex items-center gap-2 !bg-[#3565ad] !text-white font-bold hover:!bg-white hover:!text-[#3565ad] !border-none !outline-none !rounded-full !px-6 !py-3 transition-all duration-300">
                 {`Read More`}
                  <BiRightArrowAlt size={20} />
                </button>
              </Link>
              <Link to={"/about"}>
                {/* <button className="primary-btn !bg-[#3565ad] !text-white font-bold hover:!text-white !border-none !outline-none !rounded-full !px-6 !py-3 transition-all duration-300">
                  {`Read More`}
                  <BiRightArrowAlt size={20} />
                </button> */}
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrevSlide}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              >
                <HiChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={handleNextSlide}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/15 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              >
                <HiChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Duration Progress Bar Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
        <div
          key={currentSlide}
          className="h-full bg-gradient-to-r from-[#e3ffe7] to-[#d9e7ff] animate-progress"
        />
      </div>
    </section>
  );
};

export default Banner;