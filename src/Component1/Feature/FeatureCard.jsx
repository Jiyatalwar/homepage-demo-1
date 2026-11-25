/* eslint-disable react/prop-types */
import { useRef } from "react";
import { motion } from "framer-motion";
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

  // Interactive 3D perspective tilt on hover
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="feature-card-gradient group relative z-10 flex h-full flex-col items-center overflow-hidden rounded-[22px] border border-[#dfe6ef] bg-white px-6 pb-9 pt-10 text-center shadow-[0_20px_45px_-15px_rgba(11,34,74,0.12)] transition-all duration-300 ease-out will-change-transform before:absolute before:bottom-0 before:left-0 before:z-[-1] before:h-0 before:w-full before:transition-all before:duration-500 hover:border-[#1e3a70] hover:shadow-[0_28px_60px_-12px_rgba(7,22,66,0.32)] hover:before:top-0 hover:before:h-full sm:px-8 sm:pt-12 lg:px-6 lg:pt-[50px] xl:px-10 xl:pt-[56px]"
      >
        {/* Subtle Architectural Grid Overlay inside card */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] transition-opacity duration-500 group-hover:opacity-15"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Top Gloss Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80" />

        {/* Ambient Corner Glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#176ed0]/[0.07] blur-2xl transition-all duration-500 group-hover:bg-[#38bdf8]/20" />

        {/* 3D Continuously Floating Icon Stage */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(42px)" }}
          className="relative z-10"
        >
          {/* Soft floor shadow beneath icon */}
          <div className="absolute -bottom-2 left-1/2 h-3 w-14 -translate-x-1/2 rounded-full bg-[#071642]/15 blur-md transition-colors duration-500 group-hover:bg-black/30" />

          <div className="relative mx-auto flex h-[92px] w-[92px] items-center justify-center rounded-2xl border border-[#dbe7f7] bg-gradient-to-b from-white to-[#eef5ff] p-3 shadow-[0_12px_24px_rgba(23,110,208,0.14),0_4px_0_#d0e0f5] transition-all duration-500 group-hover:border-white/25 group-hover:bg-white/10 group-hover:from-white/15 group-hover:to-white/5 group-hover:shadow-[0_14px_28px_rgba(0,0,0,0.3)] sm:h-[100px] sm:w-[100px]">
            <img
              src={featureIcon}
              draggable="false"
              alt={featureTitle || ""}
              className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_6px_12px_rgba(7,22,66,0.18)] transition-transform duration-500 group-hover:scale-110"
            />

            {featureshape && (
              <img
                src={featureshape}
                draggable="false"
                alt=""
                className="absolute left-1/2 top-1/2 -z-10 max-w-full -translate-x-1/2 -translate-y-1/2 object-contain transition-all duration-500 group-hover:opacity-0"
              />
            )}

            {featureshape2 && (
              <img
                src={featureshape2}
                draggable="false"
                alt=""
                className="absolute left-1/2 top-1/2 -z-10 max-w-full -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
              />
            )}
          </div>
        </motion.div>

        {/* 3D Floating Title Layer */}
        <h4
          style={{ transform: "translateZ(30px)" }}
          className="feature-card-text-gradient relative z-10 mt-8 mb-3 font-['Rajdhani'] text-2xl font-bold leading-tight text-[#08132b] transition-all duration-500 group-hover:text-white sm:mt-9 sm:text-[26px]"
        >
          {featureTitle}
        </h4>

        {/* Description */}
        <p
          style={{ transform: "translateZ(22px)" }}
          className="relative z-10 mb-6 font-['Rajdhani'] text-[17px] font-medium leading-[1.65] tracking-[0.01em] text-[#526078] transition-all duration-500 group-hover:text-white/90 sm:text-lg"
        >
          {featureDesc}
        </p>

        {/* Bottom 3D Tactile Action Pill / Link */}
        <div
          style={{ transform: "translateZ(28px)" }}
          className="relative z-10 mt-auto pt-1"
        >
          <Link
            to={featureUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cddbef] bg-white px-5 py-2 font-['Rajdhani'] text-base font-bold tracking-wide text-[#176ed0] shadow-[0_4px_10px_rgba(15,23,42,0.05),0_2px_0_#e2e8f0] transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-[#355F91] group-hover:shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#176ed0] transition-colors duration-500 group-hover:bg-[#38bdf8]" />
            <span>{featureBtn}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;