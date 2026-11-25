import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt, FaYoutube, FaInstagram } from "react-icons/fa";

const footerGradientStyle = {
  background: "linear-gradient(135deg, #020344 0%, #3565ad 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
};

const footerColumns = [
  {
    title: "Solutions",
    links: [
      "Smart Infrastructure",
      "Cyber Defence",
      "Data Management",
      "Cloud Solutions",
      "Artificial Intelligence",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Leadership",
      "Business Resiliency",
      "Career",
      "Customer Success",
      "Partners",
      "Contact Us",
    ],
  },
  {
    title: "Services",
    links: [
      "Professional Services",
      "Managed Services",
      "Strategic Technology",
      "Staffing",
      "Support Services",
      "Assessments",
      "Training Services",
      "Cloud Consulting Services",
      "Security Services",
    ],
  },
  {
    title: "Industries",
    links: [
      "IT/ITES Industry",
      "Manufacturing Industry",
      "Media & Entertainment Industry",
      "OIL and GAS Industry",
      "Service Providers Industry",
      "E-Commerce & Financial Services Industry",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blogs",
      "Press Release",
      "Case Studies",
      "Whitepapers",
      "Customer Experience",
      "CSR",
      "Whistleblower Policy",
      "Sales Terms & Conditions",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#08142f] bg-[url('https://www.shutterstock.com/image-vector/dark-blue-abstract-horizontal-banner-260nw-2633273589.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-20 lg:pt-24 overflow-hidden">
      <div className="Container">
        <div className="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.55fr_repeat(5,1fr)]">
          <div>
            <Link to={"/"}>
              <img
                src="/binary-img/Binary Logo White.png"
                alt="Binary Global Limited"
                draggable={false}
                className="h-auto w-[190px]"
              />
            </Link>
            <div className="mt-7 space-y-4">
              <a href="tel:+911140140000" className="flex items-center gap-3 font-Nunito text-white text-[15px] hover:text-PrimaryColor-0 transition-colors">
                <span className="size-10 rounded-full bg-white text-SecondaryColor-0 flex items-center justify-center">
                  <FaPhoneAlt size={15} />
                </span>
                <span>+91 11 40140000<br />1800 102 3579</span>
              </a>
              <a href="mailto:contact@binaryglobal.com" className="flex items-center gap-3 font-Nunito text-white text-[15px] hover:text-PrimaryColor-0 transition-colors">
                <span className="size-10 rounded-full bg-white text-SecondaryColor-0 flex items-center justify-center">
                  <HiOutlineMail size={19} />
                </span>
                contact@binaryglobal.com
              </a>
            </div>
            <address className="font-Nunito text-white text-[15px] leading-6 not-italic mt-8">
              <strong className="block mb-1">Corporate Head Office</strong>
              C-145, Okhla Phase-1,<br />
              New Delhi-110020
            </address>
            <div className="flex items-center gap-2 mt-7">
              <img src="/binary-flag/flags-1.webp" alt="India" className="h-7 w-10" />
              <img src="/binary-flag/flags-2.jpg" alt="Singapore" className="h-7 w-10" />
              <img src="/binary-flag/flags-3.jpg" alt="United Kingdom" className="h-7 w-10" />
              <img src="/binary-flag/flags-4.jpg" alt="United States" className="h-7 w-10 opacity-90" />
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="YouTube" className="size-9 rounded-full bg-white flex items-center justify-center text-[#06162f] hover:bg-PrimaryColor-0 hover:text-white transition-colors"><FaYoutube /></a>
              <a href="#" aria-label="LinkedIn" className="size-9 rounded-full bg-white flex items-center justify-center text-[#06162f] hover:bg-PrimaryColor-0 hover:text-white transition-colors"><FaLinkedinIn /></a>
              <a href="#" aria-label="X" className="size-9 rounded-full bg-white flex items-center justify-center text-[#06162f] hover:bg-PrimaryColor-0 hover:text-white transition-colors"><FaXTwitter /></a>
              <a href="#" aria-label="Instagram" className="size-9 rounded-full bg-white flex items-center justify-center text-[#06162f] hover:bg-PrimaryColor-0 hover:text-white transition-colors"><FaInstagram /></a>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="font-Rajdhani text-[18px] text-white font-semibold mb-7">
                {column.title}
              </h4>
              <ul className="space-y-[14px]">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      to="/"
                      className="font-Nunito text-[14px] leading-5 text-white transition-colors duration-300 hover:text-PrimaryColor-0"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 py-6 mt-16 border-t border-white/40">
          <p className="font-Nunito text-white text-sm">
            ©2026 Binary Global Limited. All Rights Reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap gap-x-5 gap-y-2 font-Nunito text-sm text-white">
            <Link to="/" className="hover:text-PrimaryColor-0">Legal Disclaimer</Link>
            <Link to="/" className="hover:text-PrimaryColor-0">Privacy Policy</Link>
            <Link to="/" className="hover:text-PrimaryColor-0">Term of Conditions</Link>
            <Link to="/" className="hover:text-PrimaryColor-0">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
