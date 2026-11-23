
import { useRef } from "react";
import aboutThumb from "/images/about-thumb.png";
import aboutIcon from "/images/about-icon1.png";
import aboutIcon2 from "/images/about-icon2.png";
import aboutIcon3 from "/images/about-icon3.png";
import aboutIcon4 from "/images/about-icon4.png";
import aboutShape from "/images/about-shape.png";
import aboutShape2 from "/images/about-shape2.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { GoArrowRight } from "react-icons/go";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const features = [
  { icon: aboutIcon3, title: "ISO 20000-1:2018" },
  { icon: aboutIcon, title: "CMMI Level 3" },
  { icon: aboutIcon, title: "ISO 14001:2015" },
  { icon: aboutIcon2, title: "ISO 27001" },
  { icon: aboutIcon4, title: "ISO 9001:2015" },
  { icon: aboutIcon4, title: "76+ Turnover (Million USD)" },
];

const customGradient =
  "linear-gradient(135deg, #020344 0%, #3565ad 100%)";

const About = () => {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const mouseYSpring = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10deg", "-10deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10deg", "10deg"]
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-BodyBg-0 bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-[110px]">

      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 z-0 h-96 w-96 rounded-full bg-[#c6f8ff]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 z-0 h-96 w-96 rounded-full bg-[#133a94]/15 blur-3xl" />

      <div className="Container relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 px-2 sm:px-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8 xl:gap-10 2xl:grid-cols-[minmax(0,560px)_minmax(0,1fr)] 2xl:gap-16">

          {/* Left Column: Image */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ perspective: 1200 }}
            className="relative z-10 mx-auto w-full max-w-[560px] cursor-pointer"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative transition-shadow duration-300"
            >
              <img
                src={aboutThumb}
                draggable="false"
                alt="About Us"
                className="block h-auto max-h-[580px] w-full rounded-2xl object-cover shadow-[0_20px_50px_rgba(36,55,72,0.22)]"
              />

              {/* Experience Badge */}
              <motion.div
                style={{ transform: "translateZ(50px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 top-0"
              >
                {/* <div
                  style={{ background: customGradient }}
                  className="relative z-10 flex h-[115px] w-[100px] flex-col items-center justify-between overflow-hidden rounded-xl border border-white/15 pb-4 pt-4 text-center shadow-[0_15px_35px_rgba(36,55,72,0.45)] sm:h-[180px] sm:w-[150px] sm:pb-6 sm:pt-5 lg:h-[170px] lg:w-[140px] xl:h-[190px] xl:w-[155px] before:absolute before:left-1/2 before:top-1/2 before:h-[2px] before:w-7 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-white/80 after:absolute after:-left-[2px] after:-top-14 after:-z-10 after:h-[170px] after:w-[174px] after:rounded-full after:bg-[#074170]/70"
                >
                  <CountUp
                    start={-1}
                    end={26}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyOnce
                    className="font-['Rajdhani'] text-4xl font-bold text-white drop-shadow-sm sm:text-[56px]"
                  />

                  <h6 className="font-['Rajdhani'] text-sm font-semibold leading-4 text-white sm:text-lg sm:leading-5">
                    Years Of <br /> Experiences
                  </h6>
                </div> */}
              </motion.div>

              <motion.img
                src={aboutShape}
                draggable="false"
                alt=""
                style={{ transform: "translateZ(25px)" }}
                className="absolute bottom-6 right-10 -z-10 hidden drop-shadow-lg sm:block"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative font-['Rajdhani',sans-serif]"
          >

            {/* HERO HEADING - UNCHANGED */}
            <div>
              <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#1769d2]">
                <span className="h-[2.5px] w-7 rounded-full bg-[#d81b60]" />
                WHO WE ARE
              </span>

              <h1 className="mt-4 mb-3 font-['Rajdhani'] font-bold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px] leading-[1.12] tracking-[-0.025em] text-[#08132b]">
                <span className="block">
                 26+Years. 2,500+ Customers
                </span>

                <span
                  className="block"
                  style={{
                    background: "linear-gradient(135deg, #020344 0%, #3565ad 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  One Accountable IT Partner
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="relative border-b border-BorderColor2-0 pb-8 text-[20px] font-medium  leading-[1.7] tracking-[0.01em] text-[#526078] sm:text-lg sm:pb-9 before:absolute before:-bottom-[1px] before:left-0 before:h-[2px] before:w-[50px] before:animate-dance4 before:bg-[#4B749F]">
              IT solutions and managed services across cybersecurity,
              cloud, data management, networking and digital infrastructure.
            </p>

            {/* Feature Items */}
            <div className="my-8 grid grid-cols-1 gap-x-5 gap-y-6 sm:grid-cols-2 sm:gap-y-7 lg:my-9">
              {features.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    },
                  }}
                  className="group -m-2.5 flex items-center gap-4 rounded-xl p-2.5 transition-all duration-300 hover:bg-white/80 hover:shadow-[0_12px_30px_rgba(36,55,72,0.12)] hover:backdrop-blur-md sm:gap-5"
                >
                  <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-[0_8px_20px_rgba(36,55,72,0.08)] transition-all duration-300 group-hover:-rotate-6 group-hover:bg-[linear-gradient(135deg,#243748_0%,#4B749F_100%)] group-hover:shadow-[0_10px_25px_rgba(36,55,72,0.35)] sm:h-[70px] sm:w-[70px]">
                    <img
                      src={item.icon}
                      draggable="false"
                      alt=""
                      className="max-h-9 max-w-9 object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h5 className="font-['Rajdhani'] text-lg font-semibold leading-tight text-[#08132b] transition-colors duration-300 group-hover:text-[#243748] sm:text-xl xl:text-[22px]">
                      {item.title}
                    </h5>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <Link to="/about" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative isolate inline-flex items-center gap-2 overflow-hidden rounded-md bg-white px-7 py-3 font-['Rajdhani'] text-lg font-bold tracking-wide text-[#5A90C9] shadow-[0_10px_25px_rgba(36,55,72,0.3)] transition-colors duration-300 hover:text-white hover:shadow-[0_15px_30px_rgba(75,116,159,0.45)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 origin-left scale-x-0 bg-[#5A90C9] transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
                <span className="relative">Talk to an Architect</span>
                <GoArrowRight className="relative" size={22} />
              </motion.button>
            </Link>

            <img
              src={aboutShape2}
              draggable="false"
              alt=""
              className="pointer-events-none absolute -bottom-0 left-1/2 hidden animate-swing sm:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
