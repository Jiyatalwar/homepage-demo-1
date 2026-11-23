import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBrain,
  FaCloud,
  FaDatabase,
  FaGear,
  FaShieldHalved,
  FaWifi,
} from "react-icons/fa6";

const solutionData = [
  {
    id: "01",
    title: "Smart Infrastructure",
    description:
      "AI-ready networks engineered for secure, high-performance connectivity.",
    icon: <FaWifi />,
  },
  {
    id: "02",
    title: "Cyber Defense",
    description:
      "Zero trust protection that secures every endpoint, identity and workload.",
    icon: <FaShieldHalved />,
  },
  {
    id: "03",
    title: "Data Management",
    description:
      "Resilient storage, backup and recovery built for always-on operations.",
    icon: <FaDatabase />,
  },
  {
    id: "04",
    title: "Cloud Solutions",
    description:
      "Flexible hybrid and multi-cloud platforms designed for faster migration.",
    icon: <FaCloud />,
  },
  {
    id: "05",
    title: "Managed IT",
    description:
      "Proactive operations, monitoring and expert support with predictable SLAs.",
    icon: <FaGear />,
  },
  {
    id: "06",
    title: "Application Services",
    description:
      "Data, AI and automation solutions that create measurable business value.",
    icon: <FaBrain />,
  },
];

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-24">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#3565ad]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="Container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-Rajdhani text-lg font-bold uppercase tracking-[0.18em] text-[#3565ad]">
            Our Solutions
          </p>
          <h2 className="font-Rajdhani text-4xl font-bold leading-tight text-[#08132b] sm:text-5xl">
            Technology built around
            <span
              className="block"
              style={{
                background:
                  "linear-gradient(135deg, #355F91 0%, #5A90C9 50%, #8EC5FC 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
              }}
            >
              your business goals
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionData.map((solution) => (
            <Link
              to="/service_details"
              key={solution.id}
              className="group relative min-h-[270px] overflow-hidden rounded-2xl border border-white bg-white p-8 shadow-[0_18px_45px_rgba(33,75,120,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-[#3565ad]/20 hover:shadow-[0_24px_55px_rgba(33,75,120,0.18)]"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{
                  background:
                    "linear-gradient(135deg, #355F91 0%, #5A90C9 50%, #8EC5FC 100%)",
                }}
              />

              <div className="mb-8 flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf3fa] text-2xl text-[#3565ad] transition-all duration-500 group-hover:bg-[#3565ad] group-hover:text-white group-hover:rotate-3">
                  {solution.icon}
                </div>
                <span className="font-Rajdhani text-4xl font-bold text-[#dfe7f1] transition-colors duration-500 group-hover:text-[#b7cce4]">
                  {solution.id}
                </span>
              </div>

              <h3 className="mb-3 font-Rajdhani text-[26px] font-bold leading-tight text-[#08132b]">
                {solution.title}
              </h3>
              <p className="mb-6 font-Rajdhani text-lg leading-7 text-[#667085]">
                {solution.description}
              </p>

              <div className="absolute bottom-8 left-8 flex items-center gap-2 font-Rajdhani text-base font-bold text-[#3565ad]">
                <span>Explore solution</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
