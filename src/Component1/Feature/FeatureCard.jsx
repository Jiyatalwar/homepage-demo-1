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
    const x = e.clientX - rect.left; // x position within card
    const y = e.clientY - rect.top;  // y position within card

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles (-10deg to 10deg)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  // Reset tilt when mouse leaves
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="text-center shadow-shade overflow-hidden group px-10 pt-[60px] pb-8 rounded-lg bg-white relative z-10 transition-transform duration-200 ease-out will-change-transform before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-[linear-gradient(to_right,#2b5876_0%,#182848_51%,#182848_100%)] before:transition-all before:duration-500 before:-z-10 hover:before:h-full hover:before:top-0"
    >
      {/* 3D Floating Icon Layer */}
      <div className="relative text-center z-10 [transform:translateZ(40px)] transition-transform duration-500">
        <img src={featureIcon} draggable="false" className="m-auto drop-shadow-lg" />
        <img
          src={featureshape}
          draggable="false"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 group-hover:opacity-0"
        />
        <img
          src={featureshape2}
          draggable="false"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 transition-all duration-500 opacity-0 group-hover:opacity-100"
        />
      </div>

      {/* 3D Floating Title Layer */}
      <h4 className="font-Rajdhani font-bold text-2xl sm:text-[26px] lg:text-2xl xl:text-[26px] text-HeadingColor-0 transition-all duration-500 group-hover:text-white mt-11 mb-2 [transform:translateZ(30px)]">
        {featureTitle}
      </h4>

      {/* Description */}
      <p className="font-Nunito text-TextColor2-0 transition-all duration-500 group-hover:text-white mb-[18px] [transform:translateZ(20px)]">
        {featureDesc}
      </p>

      {/* Button Link */}
      <Link
        to={featureUrl}
        className="inline-block relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:w-8 before:h-[2px] before:-translate-x-1/2 before:bg-PrimaryColor-0 before:transition-all before:duration-500 group-hover:before:w-4 group-hover:before:bg-white group-hover:before:-left-6 group-hover:before:-translate-x-0 [transform:translateZ(25px)]"
      >
        <button className="font-Nunito font-medium text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
          {featureBtn}
        </button>
      </Link> 
    </div>
  );
};

export default FeatureCard;