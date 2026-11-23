/* eslint-disable no-unused-vars */
import { useState } from "react";
import serviceIcon from "/images/service-1.png";
import serviceIcon2 from "/images/service-2.png";
import serviceIcon3 from "/images/service-3.png";
import serviceIcon4 from "/images/service-4.png";
import serviceIcon5 from "/images/service-5.png";
import serviceIcon6 from "/images/service-6.png";
import ServiceCard from "./ServiceCard";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const ServiceData = [
  {
    id: 1,
    serviceIcon: serviceIcon,
    serviceNumber: "01",
    serviceTitle: "Smart Infrastructure",
    serviceDesc:
      "Campus, branch and WAN networking that is AI-driven, secure and ready for scale.",
    serviceDetails: [
      "Enterprise Wi-Fi 6E / Wi-Fi 7 & SD-WAN",
      "Network as a Service (NaaS)",
      "Data center & hybrid infrastructure build",
      "Unified communications & collaboration",
      "Industrial & enterprise IoT",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Smart Infrastructure",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 2,
    serviceIcon: serviceIcon2,
    serviceNumber: "02",
    serviceTitle: "Cyber Defense",
    serviceDesc:
      "Zero trust security from endpoint to cloud, monitored around the clock.",
    serviceDetails: [
      "Next-gen firewall (NGFW) & network security",
      "Endpoint security: EDR, XDR and MDR",
      "SASE, SSE & zero trust network access",
      "Data loss prevention (DLP) & encryption",
      "Application & API security, 24×7 SOC",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Cyber Defense",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 3,
    serviceIcon: serviceIcon3,
    serviceNumber: "03",
    serviceTitle: "Data Management",
    serviceDesc:
      "Resilient storage and compute for AI-ready, always-on workloads.",
    serviceDetails: [
      "Enterprise storage & compute",
      "Hyper-converged infrastructure (HCI)",
      "Private & hybrid cloud platforms",
      "Data backup, cyber recovery & ransomware protection",
      "AI infrastructure",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Data Management",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 4,
    serviceIcon: serviceIcon4,
    serviceNumber: "04",
    serviceTitle: "Cloud Solutions",
    serviceDesc:
      "Public, private, hybrid and multi-cloud: adopted, migrated and optimised.",
    serviceDetails: [
      "Cloud consulting & migration assessment",
      "Cloud cost optimisation & FinOps",
      "Cloud adoption lifecycle & DevOps",
      "Cloud data protection",
      "Cloud managed services",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Cloud Solutions",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 5,
    serviceIcon: serviceIcon5,
    serviceNumber: "05",
    serviceTitle: "Managed IT Services",
    serviceDesc:
      "Predictable operations with uptime SLAs, named engineers and monthly reporting.",
    serviceDetails: [
      "Managed NOC & managed SOC",
      "Device as a Service (DaaS)",
      "Enterprise maintenance, AMC & TAC support",
      "Technology staffing",
      "Observability & proactive monitoring",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Managed Services",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
  {
    id: 6,
    serviceIcon: serviceIcon6,
    serviceNumber: "06",
    serviceTitle: "Application Services",
    serviceDesc:
      "Data, AI and automation that turn infrastructure into business outcomes.",
    serviceDetails: [
      "Data analytics",
      "AI solutions & automated machine learning",
      "Robotic process automation (RPA)",
      "Application advisory & modernisation",
    ],
    serviceUrl: "/service_details",
    serviceButton: "Explore Application Services",
    serviceBtnIcon: <HiMiniArrowLongRight />,
  },
];

/* 3D Interactive Tilt & Specular Glare Wrapper */
const Card3DWrapper = ({ children }) => {
  const [transformStyle, setTransformStyle] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8; // Max 8deg tilt
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) scale3d(1.03, 1.03, 1.03)`
    );
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full rounded-2xl transition-transform duration-200 ease-out will-change-transform group"
    >
      {/* 3D Outer Neon Rim Glow */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(53,101,173,0.8), rgba(56,189,248,0.4), rgba(53,101,173,0.1))",
          filter: "blur(6px)",
        }}
      />

      {/* Dynamic Mouse-Following Specular Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-30 transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.16), transparent 60%)`,
        }}
      />

      {/* Elevated 3D Card Content */}
      <div
        style={{ transform: "translateZ(20px)" }}
        className="relative z-10 h-full rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] backdrop-blur-md"
      >
        {children}
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section
      className="relative isolate pt-24 pb-24 overflow-hidden"
      style={{ perspective: "1400px" }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source
          src="/binary-video/15254965_1920_1080_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Deep 3D Atmospheric Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-[#060d1a]/90 z-10" />

      {/* Subtle 3D Perspective Grid Floor */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] z-10 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(53,101,173,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(53,101,173,0.35) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "rotateX(65deg) scale(1.6)",
          transformOrigin: "bottom center",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1), transparent)",
        }}
      />

      {/* Ambient 3D Glowing Orbs */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-[#3565ad]/25 rounded-full blur-[120px] z-10 animate-pulse" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-[130px] z-10" />

      <div className="Container relative z-20">
        {/* 3D Floating Header */}
        <div className="text-center">
          <h3 className=" inline-block font-Rajdhani text-lg font-semibold text-[#ffffff]">
            SOLUTIONS
          </h3>
          <h1
            className="font-Rajdhani font-bold text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] leading-[1.08] tracking-[-0.025em] text-white mt-[18px]"
            style={{
              textShadow: "0 10px 30px rgba(0, 0, 0, 0.75)",
            }}
          >
            Six practices. One converged, secure IT stack. <br />
            secure IT stack.
          </h1>
        </div>

        {/* 3D Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[54px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {ServiceData.map(
            ({
              id,
              serviceIcon,
              serviceNumber,
              serviceTitle,
              serviceDesc,
              serviceDetails,
              serviceUrl,
              serviceButton,
              serviceBtnIcon,
            }) => {
              return (
                <Card3DWrapper key={id}>
                  <ServiceCard
                    serviceIcon={serviceIcon}
                    serviceNumber={serviceNumber}
                    serviceTitle={serviceTitle}
                    serviceDesc={serviceDesc}
                    serviceDetails={serviceDetails}
                    serviceUrl={serviceUrl}
                    serviceButton={serviceButton}
                    serviceBtnIcon={serviceBtnIcon}
                  />
                </Card3DWrapper>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;