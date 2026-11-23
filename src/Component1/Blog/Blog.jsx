/* eslint-disable no-unused-vars */
import { FaRegCalendarCheck } from "react-icons/fa6";
import blogThumb from "/images/blog1.png";
import blogThumb2 from "/images/blog2.png";
import blogThumb3 from "/images/blog3.png";
import BlogCard from "./BlogCard";
import { GoArrowRight } from "react-icons/go";
import { PiUserCircleFill } from "react-icons/pi";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "Most Popular Chrome Extensionfor Business Promot",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "How to Secure your facebook Business Account",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <FaRegCalendarCheck />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <PiUserCircleFill />,
    blogTag: "Admin",
    blogUrl: "/blog_details",
    blogTitle: "Better Context Menus With Safe Triangles",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className="py-28 bg-BodyBg-0">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani text-lg font-semibold text-PrimaryColor-0">
            Success Stories
          </h5>
          <h1 className="mt-[18px] font-['Rajdhani'] font-bold text-[36px] sm:text-[48px] md:text-[52px] lg:text-[48px] xl:text-[54px] 2xl:text-[58px] leading-[1.12] tracking-[-0.025em] text-HeadingColor-0">
           Customer Success Stories
          </h1>
          <p className="text-lg text-BodyColor-0 mt-[18px]">
            Our clients' success is our greatest achievement - read their stories here!
          </p>
        </div>
        <div className="mt-[46px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogTagIcon,
                blogTag,
                blogUrl,
                blogTitle,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogTagIcon={blogTagIcon}
                      blogTag={blogTag}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtn={blogBtn}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
