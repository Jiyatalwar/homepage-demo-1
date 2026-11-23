
/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Link } from "react-router-dom";

const FeatureCard = ({
  featureIcon,
  featureshape,
  featureshape2,
  featureTitle,
  featureDesc,
  featureUrl,
  featureBtn,
}) => {
  const cardRef = useRef(null);

  // Mouse move handler for interactive 3D perspective tilt
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="feature-card-gradient group relative z-10 overflow-hidden rounded-xl bg-white px-6 pb-8 pt-10 text-center shadow-shade transition-transform duration-200 ease-out will-change-transform before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-0 before:w-full before:transition-all before:duration-500 hover:before:top-0 hover:before:h-full sm:px-8 sm:pt-12 lg:px-6 lg:pt-[50px] xl:px-10 xl:pt-[60px]"
    >
      {/* 3D Floating Icon Layer */}
      <div className="relative z-10 [transform:translateZ(40px)]">
        <div className="relative mx-auto flex h-[85px] w-[85px] items-center justify-center sm:h-[95px] sm:w-[95px]">
          <img
            src={featureIcon}
            draggable="false"
            alt=""
            className="relative z-10 max-h-full max-w-full object-contain drop-shadow-lg"
          />

          <img
            src={featureshape}
            draggable="false"
            alt=""
            className="absolute left-1/2 top-1/2 -z-10 max-w-full -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-500 group-hover:opacity-0"
          />

          <img
            src={featureshape2}
            draggable="false"
            alt=""
            className="absolute left-1/2 top-1/2 -z-10 max-w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* 3D Floating Title Layer */}
      <h4 className="feature-card-text-gradient mt-8 mb-3 [transform:translateZ(30px)] font-['Rajdhani'] text-2xl font-bold leading-tight transition-all duration-500 sm:mt-10 sm:text-[26px]">
        {featureTitle}
      </h4>

      {/* Description */}
      <p className="mb-5 [transform:translateZ(20px)] font-['Rajdhani'] text-[17px] font-medium leading-[1.65] tracking-[0.01em] text-[#526078] transition-all duration-500 group-hover:text-white sm:text-lg">
        {featureDesc}
      </p>

      {/* Button Link */}
      <Link
        to={featureUrl}
        className="relative inline-block [transform:translateZ(25px)] before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-8 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:-left-6 group-hover:before:w-4 group-hover:before:translate-x-0 group-hover:before:bg-white"
      >
        <button
          type="button"
          className="font-['Rajdhani'] text-lg font-semibold tracking-wide text-white opacity-0 transition-all duration-500 group-hover:opacity-100"
        >
          {featureBtn}
        </button>
      </Link>
    </div>
  );
};

export default FeatureCard;
