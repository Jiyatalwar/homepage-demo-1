/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import featureIcon from "/images/feature-icon1.png";
import featureIcon2 from "/images/feature-icon2.png";
import featureIcon3 from "/images/feature-icon3.png";
import featureshape from "/images/feature-shape-1.png";
import featureshape2 from "/images/feature-shape-2.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureIcon: featureIcon,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "26+ Years in Enterprise IT",
    featureDesc: "",
    featureUrl: "/service",
    featureBtn: "Read More",
  },
  {
    id: 2,
    featureIcon: featureIcon2,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "2500+ Customers Served",
    featureDesc: "",
    featureUrl: "/service",
    featureBtn: "Read More",
  },
  {
    id: 3,
    featureIcon: featureIcon3,
    featureshape: featureshape,
    featureshape2: featureshape2,
    featureTitle: "220+ Certified Experts",
    featureDesc: "",
    featureUrl: "/service",
    featureBtn: "Read More",
  },
];

const Feature = () => {
  return (
    <section className="relative  pb-12 sm:pb-16">
      {/* =====================================================================
          START: ANIMATED MODERN TECH BACKGROUND (On bg-BodyBg-0)
      ====================================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Subtle Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 80% at 50% 50%, #000 35%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 80% at 50% 50%, #000 35%, transparent 100%)",
          }}
        />

        {/* 2. Drifting Ambient Brand Glow Orbs */}
        <motion.div
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 25, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-16 top-4 h-[340px] w-[340px] rounded-full bg-[#176ed0]/[0.08] blur-[85px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 35, 0],
            y: [0, 35, -25, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full  blur-[85px]"
        />

        {/* 3. Traveling Cyber Data Beams */}
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[96px] left-0 h-[1.5px] w-44 bg-gradient-to-r from-transparent via-[#176ed0]/55 to-transparent"
        />

        <motion.div
          animate={{ x: ["120%", "-20%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-[48px] left-0 h-[1.5px] w-52 bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent"
        />

        <motion.div
          animate={{ y: ["-20%", "120%"] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute left-[22%] top-0 h-36 w-[1.5px] bg-gradient-to-b from-transparent via-[#176ed0]/45 to-transparent"
        />

        <motion.div
          animate={{ y: ["120%", "-20%"] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute right-[22%] top-0 h-40 w-[1.5px] bg-gradient-to-b from-transparent via-[#176ed0]/40 to-transparent"
        />

        {/* 4. Floating Micro Tech Particles */}
        {[
          { top: "22%", left: "10%", delay: 0, dur: 5 },
          { top: "68%", left: "34%", delay: 1.4, dur: 6 },
          { top: "30%", left: "67%", delay: 0.8, dur: 5.5 },
          { top: "74%", left: "90%", delay: 2, dur: 6.5 },
        ].map((dot, idx) => (
          <motion.span
            key={idx}
            animate={{
              y: [0, -16, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: dot.dur,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            style={{ top: dot.top, left: dot.left }}
            className="absolute h-2 w-2 rounded-full bg-[#176ed0]/45 shadow-[0_0_8px_rgba(23,110,208,0.45)]"
          />
        ))}
      </div>
      {/* =====================================================================
          END: ANIMATED MODERN TECH BACKGROUND
      ====================================================================== */}

      {/* Cards Container (Preserves Hero Overlap -mt-[50px]) */}
      <div className="Container relative z-20">
        <div className="mt-10 grid grid-cols-1 gap-7 sm:-mt-[50px] md:grid-cols-2 lg:grid-cols-3">
          {processData.map(
            (
              {
                id,
                featureIcon,
                featureshape,
                featureshape2,
                featureTitle,
                featureDesc,
                featureUrl,
                featureBtn,
              },
              index
            ) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.14,
                  ease: "easeOut",
                }}
                className="h-full"
              >
                <FeatureCard
                  featureIcon={featureIcon}
                  featureshape={featureshape}
                  featureshape2={featureshape2}
                  featureTitle={featureTitle}
                  featureDesc={featureDesc}
                  featureUrl={featureUrl}
                  featureBtn={featureBtn}
                />
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Feature;