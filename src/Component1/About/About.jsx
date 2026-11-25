import React from "react";
import { motion } from "framer-motion";
import {
  FaChartColumn,
  FaCircleCheck,
  FaCloud,
  FaServer,
  FaShieldHalved,
  FaTrophy,
  FaUsers,
} from "react-icons/fa6";

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20">
      {/* =====================================================================
          START: ANIMATED MODERN TECH BACKGROUND (White BG के ऊपर)
      ====================================================================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* 1. Subtle Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 45%, #000 40%, transparent 100%)",
          }}
        />

        {/* 2. Drifting Ambient Brand Glow Orbs */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[#176ed0]/[0.07] blur-[90px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-60px] top-1/3 h-[380px] w-[380px] rounded-full bg-[#38bdf8]/[0.08] blur-[90px]"
        />

        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-10 left-1/3 h-[300px] w-[300px] rounded-full bg-[#ef3d54]/[0.04] blur-[80px]"
        />

        {/* 3. Animated Cyber Data Beams (Horizontal & Vertical Light Streaks) */}
        <motion.div
          animate={{ x: ["-20%", "120%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[192px] left-0 h-[1.5px] w-44 bg-gradient-to-r from-transparent via-[#176ed0]/50 to-transparent"
        />

        <motion.div
          animate={{ x: ["120%", "-20%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute top-[432px] left-0 h-[1.5px] w-56 bg-gradient-to-r from-transparent via-[#38bdf8]/60 to-transparent"
        />

        <motion.div
          animate={{ y: ["-20%", "120%"] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute left-[240px] top-0 h-44 w-[1.5px] bg-gradient-to-b from-transparent via-[#176ed0]/45 to-transparent"
        />

        <motion.div
          animate={{ y: ["120%", "-20%"] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute right-[288px] top-0 h-52 w-[1.5px] bg-gradient-to-b from-transparent via-[#176ed0]/40 to-transparent"
        />

        {/* 4. Floating Micro Tech Particles */}
        {[
          { top: "18%", left: "12%", delay: 0, dur: 5 },
          { top: "28%", left: "48%", delay: 1.5, dur: 6 },
          { top: "65%", left: "8%", delay: 0.8, dur: 5.5 },
          { top: "75%", left: "88%", delay: 2, dur: 6.5 },
        ].map((dot, idx) => (
          <motion.span
            key={idx}
            animate={{
              y: [0, -18, 0],
              opacity: [0.25, 0.75, 0.25],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: dot.dur,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            style={{ top: dot.top, left: dot.left }}
            className="absolute h-2 w-2 rounded-full bg-[#176ed0]/40 shadow-[0_0_8px_rgba(23,110,208,0.4)]"
          />
        ))}
      </div>
      {/* =====================================================================
          END: ANIMATED MODERN TECH BACKGROUND
      ====================================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* TOP HERO GRID */}
        <div className="grid items-center gap-10 lg:grid-cols-[44%_56%] lg:gap-4">
          {/* =====================================================================
              3D VECTOR ILLUSTRATION STAGE (Auto-Moving)
              * भविष्य में अपनी Image लगाने के लिए इस block को बदल सकते हैं:
              * Recommended Image Size: 1040px x 700px (Aspect Ratio 3:2)
          ====================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            style={{ perspective: 1100 }}
            className="relative mx-auto h-[350px] w-full max-w-[520px] select-none"
          >
            {/* Pulsing Floor Contact Shadow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 0.96, 1],
                opacity: [0.16, 0.22, 0.14, 0.16],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-2 left-1/2 h-8 w-[75%] -translate-x-1/2 rounded-full bg-[#071642] blur-xl"
            />

            {/* Continuous 3D Tilting & Floating Assembly */}
            <motion.div
              animate={{
                rotateX: [4, -4, 3, 4],
                rotateY: [-7, 7, -4, -7],
                y: [0, -8, 2, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative h-full w-full"
            >
              {/* Back 3D Chassis Extrusion Plate */}
              <div
                style={{ transform: "translateZ(-16px)" }}
                className="absolute left-[6.5%] top-[14%] h-[58%] w-[80%] rounded-[20px] bg-[#061533]"
              />

              {/* Main 3D Monitor Screen */}
              <div
                style={{ transform: "translateZ(12px)" }}
                className="absolute left-[5%] top-[12%] h-[58%] w-[80%] overflow-hidden rounded-[18px] border-[8px] border-[#163c78] bg-gradient-to-br from-[#0d357a] via-[#09275a] to-[#051638] shadow-[0_25px_50px_-12px_rgba(7,22,66,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)]"
              >
                {/* Moving Glass Sheen */}
                <motion.div
                  animate={{ x: ["-100%", "150%"] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-0 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
                />

                {/* Browser Header */}
                <div className="flex h-8 items-center justify-between border-b border-white/10 bg-[#061b42]/60 px-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#eb5b67] shadow-[0_0_8px_#eb5b67]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
                  </div>
                  <div className="h-1.5 w-16 rounded-full bg-white/15" />
                </div>

                {/* Dashboard Body */}
                <div className="grid h-[calc(100%-32px)] grid-cols-[30%_70%]">
                  <div className="space-y-4 border-r border-white/10 bg-[#06193d]/40 px-4 pt-6">
                    {[68, 48, 76, 54].map((width, index) => (
                      <div
                        key={width}
                        className="h-2 rounded-full bg-gradient-to-r from-[#4b83d1] to-[#2b589c]"
                        style={{
                          width: `${width}%`,
                          opacity: index === 0 ? 1 : 0.65,
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative px-5 pt-5">
                    {[0, 1, 2].map((line) => (
                      <div
                        key={line}
                        className="mb-8 h-px w-full bg-white/[0.08]"
                      />
                    ))}
                    <svg
                      viewBox="0 0 320 120"
                      className="absolute bottom-3 left-5 h-[68%] w-[calc(100%-40px)] drop-shadow-[0_6px_10px_rgba(104,162,237,0.45)]"
                      fill="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="chartArea"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#68a2ed"
                            stopOpacity="0.35"
                          />
                          <stop
                            offset="100%"
                            stopColor="#68a2ed"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 96 L28 82 L55 88 L82 63 L110 69 L136 48 L168 52 L196 28 L224 39 L252 20 L280 28 L320 8 L320 120 L0 120 Z"
                        fill="url(#chartArea)"
                      />
                      <motion.path
                        d="M0 96 L28 82 L55 88 L82 63 L110 69 L136 48 L168 52 L196 28 L224 39 L252 20 L280 28 L320 8"
                        stroke="#7cb5ff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0.85, opacity: 0.8 }}
                        animate={{
                          pathLength: [0.85, 1, 0.85],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating 3D Cloud Card (Top Right - Independent Orbit) */}
              <motion.div
                animate={{
                  y: [-5, 7, -5],
                  x: [0, 4, 0],
                  rotateZ: [-1.5, 1.5, -1.5],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(48px)" }}
                className="absolute right-[1%] top-[1%] flex h-[68px] w-[172px] items-center justify-between rounded-[16px] border border-white bg-white/95 px-4 shadow-[0_20px_35px_rgba(13,38,76,0.18),0_4px_0_#dce5f2]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3b82f6] to-[#176ed0] text-white shadow-[0_6px_14px_rgba(23,110,208,0.35)]">
                  <FaCloud className="text-[22px]" />
                </div>
                <div className="space-y-2">
                  <div className="h-2.5 w-14 rounded-full bg-[#071642]" />
                  <div className="h-2.5 w-9 rounded-full bg-[#94a3b8]" />
                </div>
              </motion.div>

              {/* Floating 3D Security Check Card (Bottom Left - Counter-Orbit) */}
              <motion.div
                animate={{
                  y: [6, -7, 6],
                  x: [0, -4, 0],
                  rotateZ: [1.5, -1.5, 1.5],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(60px)" }}
                className="absolute bottom-[7%] left-0 flex h-[96px] w-[162px] items-center gap-3 rounded-[16px] border border-white bg-white/95 px-4 shadow-[0_22px_38px_rgba(13,38,76,0.2),0_4px_0_#dce5f2]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#176ed0]/10 text-[#176ed0] shadow-inner">
                  <FaCircleCheck className="text-[28px]" />
                </div>
                <div className="flex-1 space-y-2.5">
                  <div className="h-2.5 w-full rounded-full bg-[#071642]" />
                  <div className="h-2.5 w-11 rounded-full bg-[#176ed0]" />
                </div>
              </motion.div>

              {/* Floating 3D Server Rack Card (Bottom Right - Highest Z-Layer) */}
              <motion.div
                animate={{
                  y: [-4, 8, -4],
                  rotateZ: [1, -1.5, 1],
                }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(72px)" }}
                className="absolute bottom-0 right-[2%] h-[100px] w-[172px] rounded-[16px] border border-white bg-white p-2.5 shadow-[0_24px_42px_rgba(13,38,76,0.22),0_5px_0_#d5e0ef]"
              >
                <div className="flex h-full items-center justify-center rounded-[10px] border-[5px] border-[#071642] bg-gradient-to-b from-[#103d8c] to-[#071f4d] shadow-inner">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {[0, 1, 2, 3].map((item) => (
                      <FaServer
                        key={item}
                        className="text-[21px] text-[#8ec2ff] drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Typography Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:pl-6"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#e2e8f0] bg-white/90 px-4 py-1.5 shadow-[0_4px_12px_rgba(15,23,42,0.05)] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#ef3d54] shadow-[0_0_8px_#ef3d54]" />
              <span className="font-Rajdhani text-sm font-bold uppercase tracking-[0.2em] text-[#3565ad]">
                Our Expertise
              </span>
            </div>

            <h2 className="font-Rajdhani text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-[#08132b] sm:text-[48px] md:text-[52px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px]">
              <span className="block">
                Trusted for{" "}
                <span className="bg-gradient-to-r from-[#176ed0] to-[#2b8cff] bg-clip-text text-transparent">
                  Cybersecurity.
                </span>
              </span>
              <span className="block">
                Built for{" "}
                <span className="bg-gradient-to-r from-[#176ed0] to-[#2b8cff] bg-clip-text text-transparent">
                  Cloud.
                </span>
                <br />
                <span className="text-[#08132b]">Proven in IT </span>
                <span className="bg-gradient-to-r from-[#176ed0] to-[#2b8cff] bg-clip-text text-transparent">
                  Infrastructure.
                </span>
              </span>
            </h2>

            <p className="mt-5 max-w-[650px] font-Rajdhani text-[17px] font-medium leading-[1.65] tracking-[0.01em] text-[#526078] sm:text-lg">
              End-to-end IT solutions and managed services,
              <br className="hidden sm:block" /> delivered by one accountable
              partner.
            </p>
          </motion.div>
        </div>

        {/* 3D ELEVATED BENTO CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[22px] border border-[#dfe6ef] bg-white/95 shadow-[0_24px_60px_-15px_rgba(11,34,74,0.12),0_6px_0_#e6edf5] backdrop-blur-sm"
        >
          {/* Top Row */}
          <div className="grid border-b border-[#e8eef5] lg:grid-cols-[49%_51%]">
            {/* Global Footprint Card */}
            <div className="border-b border-[#e8eef5] px-7 py-8 lg:border-b-0 lg:border-r lg:px-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#176ed0]">
                Global Team, Certified Standards
              </p>
              <h3 className="mt-3 font-Rajdhani text-[34px] font-bold leading-[1.12] text-[#08132b] sm:text-[42px]">
                One team, <span className="text-[#176ed0]">5 countries.</span>
                <br /> Certified excellence.
              </h3>

              {/* 3D Tactile Country Nodes */}
              <div className="relative mt-8 flex items-start justify-between pt-5 text-sm font-semibold text-[#08132b]">
                <span className="absolute left-[8%] right-[8%] top-[14px] border-t-2 border-dashed border-[#90ace0]" />
                {["US", "UK", "UAE", "India", "Singapore"].map(
                  (country, index) => {
                    const isHub = index === 3;
                    return (
                      <div
                        key={country}
                        className="group relative flex flex-col items-center gap-2.5"
                      >
                        <span
                          className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover:-translate-y-1 ${
                            isHub
                              ? "bg-[#071642] shadow-[0_6px_14px_rgba(7,22,66,0.4),0_0_0_4px_rgba(23,110,208,0.18)]"
                              : "border-[3px] border-[#176ed0] bg-white shadow-[0_5px_12px_rgba(23,110,208,0.22)]"
                          }`}
                        >
                          {isHub && (
                            <span className="h-2 w-2 rounded-full bg-[#38bdf8]" />
                          )}
                        </span>
                        <span
                          className={
                            isHub ? "font-bold text-[#176ed0]" : "text-[#08132b]"
                          }
                        >
                          {isHub ? (
                            <>
                              {country}
                              <span className="mx-1 text-[#94a3b8]">|</span>
                              <span className="rounded-full bg-gray-600 px-2 py-0.5 text-[11px] uppercase tracking-wider text-white">
                                HQ
                              </span>
                            </>
                          ) : (
                            country
                          )}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* Partners & Cisco Award */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.3fr]">
              <div className="flex flex-col justify-center border-b border-[#e8eef5] px-7 py-8 transition-colors hover:bg-[#f8fbff] sm:border-b-0 sm:border-r">
                <p className="font-Rajdhani text-[44px] font-bold leading-none text-[#08132b] drop-shadow-[0_2px_0_rgba(23,110,208,0.15)]">
                  80+
                </p>
                <p className="mt-3 text-[16px] font-medium leading-[1.45] text-[#687895]">
                  Technology
                  <br />
                  partners
                </p>
              </div>

              <div className="flex flex-col justify-center px-7 py-8 transition-colors hover:bg-[#f8fbff]">
                <p className="font-Rajdhani text-[44px] font-bold leading-none text-[#08132b] drop-shadow-[0_2px_0_rgba(23,110,208,0.15)]">
                  2026
                </p>
                <p className="mt-3 text-[16px] font-medium leading-[1.45] text-[#687895]">
                  Cisco APJC Partner
                  <br />
                  Winners Circle
                </p>

                {/* 3D Extruded Dark Trophy Pill */}
                <div className="mt-5 flex items-center gap-3.5 rounded-[12px] border border-[#1e3a70] bg-gradient-to-r from-[#071642] via-[#0d276b] to-[#071642] px-4 py-3 text-white shadow-[0_12px_24px_-6px_rgba(7,22,66,0.45),inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 hover:-translate-y-0.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#176ed0]/30 text-[#fbbf24] shadow-inner">
                    <FaTrophy className="text-base" />
                  </div>
                  <p className="font-Rajdhani text-sm font-bold leading-tight tracking-wide">
                    Cisco Breakthrough Partner of the Year · FY25
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 3D Tactile Certification Tiles */}
          <div className="grid lg:grid-cols-[49%_24%_27%]">
            {/* ISO Certified */}
            <div className="flex items-start gap-5 px-7 py-8 transition-all duration-300 hover:bg-[#fafcff] lg:px-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#dbe7f7] bg-gradient-to-b from-white to-[#eef5ff] text-[#176ed0] shadow-[0_8px_16px_rgba(23,110,208,0.12),0_2px_0_#d0e0f5]">
                <FaShieldHalved className="text-[24px]" />
              </div>
              <div>
                <h3 className="font-Rajdhani text-[22px] font-bold leading-tight text-[#08132b]">
                  ISO certified
                </h3>
                <div className="mt-3.5 flex flex-wrap gap-2 text-xs font-semibold text-[#28559a] sm:text-sm">
                  {[
                    "27001 · Security",
                    "20000-1 · IT service",
                    "9001 · Quality",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#cddbef] bg-white px-3.5 py-1.5 shadow-[0_3px_8px_rgba(15,23,42,0.04),0_2px_0_#e2e8f0] transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CMMI Level 3 */}
            <div className="flex items-start gap-4 border-t border-[#e8eef5] px-7 py-8 transition-all duration-300 hover:bg-[#fafcff] lg:border-l lg:border-t-0 lg:px-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#dbe7f7] bg-gradient-to-b from-white to-[#eef5ff] text-[#176ed0] shadow-[0_8px_16px_rgba(23,110,208,0.12),0_2px_0_#d0e0f5]">
                <FaChartColumn className="text-[22px]" />
              </div>
              <div>
                <h3 className="font-Rajdhani text-[22px] font-bold leading-[1.1] text-[#08132b]">
                  CMMI
                  <br />
                  Level 3
                </h3>
                <p className="mt-2.5 text-[16px] leading-[1.45] text-[#687895]">
                  Process
                  <br />
                  maturity
                </p>
              </div>
            </div>

            {/* Great Place to Work */}
            <div className="flex items-start gap-4 border-t border-[#e8eef5] px-7 py-8 transition-all duration-300 hover:bg-[#fafcff] lg:border-l lg:border-t-0 lg:px-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#dbe7f7] bg-gradient-to-b from-white to-[#eef5ff] text-[#176ed0] shadow-[0_8px_16px_rgba(23,110,208,0.12),0_2px_0_#d0e0f5]">
                <FaUsers className="text-[22px]" />
              </div>
              <div>
                <h3 className="font-Rajdhani text-[22px] font-bold leading-[1.1] text-[#08132b]">
                  Great
                  <br />
                  Place to
                  <br />
                  Work®
                </h3>
                <p className="mt-2.5 text-[16px] leading-[1.45] text-[#687895]">
                  Certified ·
                  <br />
                  India 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;