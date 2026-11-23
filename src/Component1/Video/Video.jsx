import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { IoMdPlay } from "react-icons/io";

const Video = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <section className="relative isolate min-h-[460px] overflow-hidden pt-[144px] pb-[150px]">
      <iframe
        title="Watch Now background video"
        src="https://www.youtube.com/embed/jJYh8FoRYHw?autoplay=1&mute=1&loop=1&playlist=jJYh8FoRYHw&controls=0&rel=0&modestbranding=1&playsinline=1"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 border-0"
        style={{
          width: "max(100%, 177.78vh)",
          height: "max(100%, 56.25vw)",
        }}
      />
      <div className="absolute inset-0 -z-10 " />
      <div className="Container relative z-10">
        <div className="text-center">
          {/* <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Watch Now
          </h5> */}
          {/* <h1 className="font-Rajdhani font-bold text-lg leading-7 sm:text-[32px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-white mt-[18px]">
           Innovate with  <br />
          Binary Global
          </h1> */}
          {/* <div className="flex justify-center mt-10">
            <button
              type="button"
              aria-label="Watch video"
              onClick={() => setToggler(!toggler)}
              className="h-[80px] w-[80px] rounded-full bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-PrimaryColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
            >
              <IoMdPlay size={"30"} className="text-white" />
            </button>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://www.youtube.com/embed/jJYh8FoRYHw?autoplay=1&mute=1&loop=1&playlist=jJYh8FoRYHw&controls=1&rel=0&modestbranding=1&playsinline=1",
              ]}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Video;
