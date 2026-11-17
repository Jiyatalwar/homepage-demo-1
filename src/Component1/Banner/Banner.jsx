import { Link } from "react-router-dom";
import bannerImg from "/images/hero-thumb.png";
import bannerShape from "/images/hero-shape.png";
import { BiRightTopArrowCircle } from "react-icons/bi";

const Banner = () => {
  return (
    <section className="bg-[url('binary-img/modern-technology-circuit-board-close-up-abstract-2026-09-22-21-27-25-utc.jpg')] bg-cover bg-center bg-no-repeat h-[600px] sm:h-[1200px] lg:h-[660px] xl:h-[800px] flex items-center relative z-10 overflow-hidden">
      <div className="Container">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-0">
          {/* banner content hero  */}
          <div className="relative">
            <h5 className="font-Rajdhani text-white text-[19px] font-medium flex items-center gap-2 mb-4">
            
            </h5>
            <h1 className="font-Rajdhani font-extrabold text-white text-[30px] leading-[36px] sm:text-[56px] sm:leading-[60px] md:text-[68x] lg:text-[50px] xl:text-[58px] xl:leading-[68px] 2xl:text-[69px] 2xl:leading-[79px]">
              Transforming IT Infrastructure 
              <br />
             for Enterprise Growth
            </h1>
            <p className="font-Nunito sm:text-lg text-TextColor-0 mb-[46px] mt-1">
             Empower your organization with next-generation networking,<br className="hidden 2xl:block" /> 
             cloud-ready infrastructure, and secure connectivity solutions.
            </p>
<div className="flex flex-col sm:flex-row gap-5">
  <Link to={"/contact"}>
    <button className="primary-btn !bg-gradient-to-r !from-[#e3ffe7] !to-[#d9e7ff] hover:!from-[#efd5ff] hover:!to-[#515ada] !text-[#182848] hover:!text-white !border-none !outline-none transition-all duration-300">
      {`Let's Talk`}
      <BiRightTopArrowCircle size={"20"} />
    </button>
  </Link>
  <Link to={"/about"}>
    <button className="primary-btn !bg-gradient-to-r !from-[#e3ffe7] !to-[#d9e7ff] hover:!from-[#efd5ff] hover:!to-[#515ada] !text-[#182848] hover:!text-white !border-none !outline-none transition-all duration-300">
      {`Read More`}
    </button>
  </Link>
</div>
          </div>
          <div className="sm:flex justify-center lg:justify-end -mb-[132px] lg:-mb-12 relative hidden">
            <img src={bannerImg} draggable="false" className=":w-[inherit]" />
            <img
              src={bannerShape}
              draggable={false}
              className="absolute top-40 left-0 md:left-20 lg:left-0 xl:left-10 2xl:left-[7rem] animate-rotational hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
