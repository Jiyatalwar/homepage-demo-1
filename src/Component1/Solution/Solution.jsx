import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const solutionData = [
  {
    title: "BFSI & E-Commerce",
    description:
      "Low-latency, RBI and SEBI-aligned security for banks, NBFCs, fintech and digital commerce.",
  },
  {
    title: "IT / ITES",
    description:
      "Secure hybrid workplaces, collaboration and scalable data center capacity.",
  },
  {
    title: "Global Capability Centers",
    description:
      "GCC IT infrastructure set-up, from network and security to managed operations.",
  },
  {
    title: "Manufacturing",
    description:
      "Industrial Wi-Fi, IoT and OT security for connected, always-on plants.",
  },
  {
    title: "Media & Entertainment",
    description:
      "High-throughput storage, HCI and secure cloud for content production and delivery.",
  },
  {
    title: "Oil & Gas",
    description:
      "Resilient connectivity, industrial IoT and real-time security monitoring for remote sites.",
  },
  {
    title: "Service Providers",
    description:
      "Carrier-grade networking, multi-cloud management and 24×7 security for ISPs, CDNs and telecom.",
  },
  {
    title: "Healthcare & Education",
    description:
      "Secure campus networks and data protection for patient, student and research records.",
  },
];

const Solution = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4f7fb] py-10 sm:py-12 lg:py-14">
      {/* Add a background image here when one is provided. */}
      <div className="Container relative z-10">
        <div className="relative mx-auto mb-10 max-w-[560px] text-center sm:mb-12">
          <p className="mb-3 flex items-center justify-center gap-2 font-Rajdhani text-xs font-bold uppercase tracking-[0.2em] text-[#3565ad] sm:text-sm">
            <span className="h-px w-6 bg-[#3565ad]" />
            Industries We Serve
          </p>
          <h2 className="font-Rajdhani text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-[#08132b] sm:text-[48px] md:text-[52px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px]">
            <span className="block">
              Domain{" "}
              <span className="bg-gradient-to-r from-[#176ed0] to-[#2b8cff] bg-clip-text text-transparent">
                Expertise.
              </span>
            </span>
            <span className="block">
              Built Into Every{" "}
              <span className="bg-gradient-to-r from-[#176ed0] to-[#2b8cff] bg-clip-text text-transparent">
                Solution.
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-[540px] text-center font-Nunito text-base leading-[1.55] text-[#66748b] sm:text-lg">
            Tailored solutions shaped around the regulations, risks and
            workloads of each sector, from infrastructure design to managed
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutionData.map((solution) => (
            <Link
              to="/service_details"
              key={solution.title}
              className="group flex min-h-[235px] flex-col rounded-xl border border-[#e1e8f1] bg-white p-6 shadow-[0_8px_20px_rgba(27,57,94,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#b8cdea] hover:shadow-[0_14px_28px_rgba(27,57,94,0.1)]"
            >
              <span className="mb-3 h-[2px] w-6 bg-[#3565ad] transition-all duration-300 group-hover:w-10" />
              <h3 className="font-Rajdhani text-lg font-bold leading-tight text-[#10234b] sm:text-xl">
                {solution.title}
              </h3>
              <p className="mt-2 flex-1 font-Nunito text-sm leading-[1.55] text-[#66748b]">
                {solution.description}
              </p>
              <span className="mt-4 flex items-center justify-between border-t border-[#edf1f6] pt-3 font-Nunito text-xs font-bold text-[#3565ad]">
                Explore solutions
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
