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
  {
    icon: aboutIcon,
    title: "100% Money Back Guarantee",
  },
  {
    icon: aboutIcon2,
    title: "Expert & Dedicated Team Members",
  },
  {
    icon: aboutIcon3,
    title: "24/7 Free Technical Supports",
  },
  {
    icon: aboutIcon4,
    title: "100% Customers Satisfaction",
  },
];

const customGradient =
  "linear-gradient(135deg, #020344 0%, #182848 100%)";

const About = () => {
  const cardRef = useRef(null);

  // Mouse tracking for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-[120px] bg-BodyBg-0 bg-no-repeat bg-center bg-cover relative overflow-hidden">
      {/* Subtle modern ambient glow using #71aadd and #6296ce */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-[#c6f8ff]/15 rounded-full blur-3xl -z-0" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-[#133a94]/15 rounded-full blur-3xl -z-0" />

      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[92px] lg:gap-10 2xl:gap-[92px] items-center">
          {/* Left Column: Interactive 3D Perspective Image Container */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{
              perspective: 1200,
            }}
            className="relative z-10 cursor-pointer"
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative transition-shadow duration-300"
            >
              {/* Main Image with custom gradient shadow */}
              <img
                src={aboutThumb}
                draggable="false"
                alt="About Us"
                className="rounded-2xl shadow-[0_20px_50px_rgba(36,55,72,0.22)] transition-transform duration-300"
              />

              {/* Floating 3D Experience Badge */}
              <motion.div
                style={{ transform: "translateZ(50px)" }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0"
              >
                <div
                  style={{ background: customGradient }}
                  className="shadow-[0_15px_35px_rgba(36,55,72,0.45)] border border-white/15 pb-6 pt-5 flex flex-col justify-between overflow-hidden rounded-xl h-[117px] sm:h-[208px] lg:h-[180px] xl:h-[208px] w-[92px] sm:w-[170px] lg:w-[140px] xl:w-[170px] items-center text-center relative z-10 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:w-0 sm:before:w-8 before:h-[2px] before:bg-white/80 after:absolute after:-top-14 after:-left-[2px] after:w-0 sm:after:w-[174px] after:h-[170px] after:bg-[#074170]/70 after:-z-10 after:rounded-full"
                >
                  <CountUp
                    start={-1}
                    end={26}
                    suffix="+"
                    enableScrollSpy
                    scrollSpyOnce
                    className="text-3xl sm:text-[56px] font-Rajdhani font-bold text-white drop-shadow-sm"
                  />
                  <h6 className="font-Rajdhani text-sm leading-4 sm:text-lg sm:leading-5 font-semibold text-white">
                    Years Of <br /> Experiences
                  </h6>
                </div>
              </motion.div>

              {/* Floating Decorative Shape with Z-depth */}
              <motion.img
                src={aboutShape}
                draggable="false"
                alt=""
                style={{ transform: "translateZ(25px)" }}
                className="absolute bottom-6 right-10 -z-10 animate-movebtn hidden sm:block drop-shadow-lg"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Modernized Content & Staggered 3D Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Modern pill badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4dc9e6]/10 border border-[#4B749F]/25 font-Rajdhani text-base sm:text-lg font-semibold text-[#0b3866]">
              <span className="w-2 h-2 rounded-full bg-[#242acf] animate-pulse" />
              IT Support For Business
            </span>

            <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[34px] sm:leading-[44px] md:text-[44px] md:leading-[54px] lg:text-[30px] lg:leading-[40px] xl:text-[36px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[52px] text-HeadingColor-0 mt-[18px] mb-3">
              Ensuring Your Success Trusted <br />
              <span
                style={{
                  backgroundImage: customGradient,
                }}
                className="bg-clip-text text-transparent"
              >
                IT Services Source
              </span>
            </h1>

            <p className="font-Nunito text-TextColor2-0 pb-9 border-b border-BorderColor2-0 relative before:absolute before:left-0 before:-bottom-[1px] before:w-[50px] before:h-[2px] before:bg-[#4B749F] before:animate-dance4">
              Monotonectally synergize granular markets and front markets.
              Collaboratively visualize strategic infomediaries after multimedia
              based models. Synergistically task state of the art
              infrastructures for
            </p>

            {/* 4 Feature Items with 3D Hover Lift & Custom Gradient Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-[30px] gap-x-4 my-10">
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
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  }}
                  className="group flex gap-5 items-center p-2.5 -m-2.5 rounded-xl transition-all duration-300 hover:bg-white/80 hover:backdrop-blur-md hover:shadow-[0_12px_30px_rgba(36,55,72,0.12)]"
                >
                  <div
                    style={{}}
                    className="w-[70px] h-[70px] shrink-0 rounded-xl bg-white shadow-[0_8px_20px_rgba(36,55,72,0.08)] border border-slate-100 flex justify-center items-center transition-all duration-300 group-hover:bg-[linear-gradient(135deg,#243748_0%,#4B749F_100%)] group-hover:shadow-[0_10px_25px_rgba(36,55,72,0.35)] group-hover:-rotate-6"
                  >
                    <img
                      src={item.icon}
                      draggable="false"
                      alt=""
                      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-Rajdhani font-semibold text-[22px] lg:text-base xl:text-xl 2xl:text-[22px] text-HeadingColor-0 transition-colors duration-300 group-hover:text-[#243748]">
                      {item.title}
                    </h5>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to={"/about"} className="inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ background: customGradient }}
                className="primary-btn text-white border-none shadow-[0_10px_25px_rgba(36,55,72,0.3)] hover:shadow-[0_15px_30px_rgba(75,116,159,0.45)] transition-shadow duration-300"
              >
                {`Discover More`}
                <GoArrowRight size={"22"} />
              </motion.button>
            </Link>

            <img
              src={aboutShape2}
              draggable="false"
              alt=""
              className="absolute -bottom-0 left-1/2 animate-swing hidden sm:block pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;