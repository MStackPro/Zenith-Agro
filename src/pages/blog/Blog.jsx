import React from "react";
import { IoEllipse } from "react-icons/io5";
import BlogImage1 from "../../assets/blog4.png";
import BlogImage2 from "../../assets/blog5.png";
import BlogImage3 from "../../assets/blog6.png";
import BlogImage4 from "../../assets/blog7.png";
import BlogImage5 from "../../assets/blog8.png";
import BlogImage6 from "../../assets/blog9.png";

const Blog = () => {
  return (
    <section className="mt-40 mb-12">
      <article className="container blog-container">
        <div className="blog-hero grid grid-cols-2 place-items-center gap-8 ">
          <div className="left-side flex flex-col gap-8 ">
            <h2 className="font-semibold text-4xl">Our Blog</h2>
            <p>
              We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
              and we realized 29 bags of soya beans.{" "}
              <span className="readmore">
                We made 10% profit from this project. The project lasted from
                July to November. We got 5 hectares of farm land in Kaduna,
                Nigeria. Cultivated it and we realized 29 bags of soya beans.
              </span>
            </p>
          </div>
          <div className="right-side">
            <img src={BlogImage1} alt="blog image" className="w-80" />
          </div>
        </div>
      </article>
      <article>
        <div className="latest-post bg-slate-200 py-10">
          <h2 className="font-semibold text-center mb-8">Latest Posts</h2>

          <div className="posts container grid grid-cols-2 gap-20 place-items-center py-8">
            <div className="post flex flex-col bg-black text-white space-y-4 pb-4">
              <img src={BlogImage2} alt="blog image" />
              <h4 className="font-semibold px-8">Best Practices</h4>
              <p className="px-8">
                We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
                and we realized 29 bags of soya beans.{" "}
                <span className="readmore">
                  We made 10% profit from this project. The project lasted from
                  July to November. We got 5 hectares of farm land in Kaduna,
                  Nigeria. Cultivated it and we realized 29 bags of soya beans.
                </span>
              </p>
              <a href="#" className="text-ColorPrimary px-8">
                Read More
              </a>
              <small className="px-8">29th Sept, 2024</small>
            </div>

            <div className="post flex flex-col bg-black text-white space-y-4 pb-4">
              <img src={BlogImage3} alt="blog image" />
              <h4 className="font-semibold px-8">Pros & Cons to farm</h4>
              <p className="px-8">
                We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated it
                and we realized 29 bags of soya beans.{" "}
                <span className="readmore">
                  We made 10% profit from this project. The project lasted from
                  July to November. We got 5 hectares of farm land in Kaduna,
                  Nigeria. Cultivated it and we realized 29 bags of soya beans.
                </span>
              </p>
              <a href="#" className="text-ColorPrimary px-8">
                Read More
              </a>
              <small className="px-8">29th Sept, 2024</small>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className="container viewed-posts-container flex flex-col space-y-8 py-10">
          <h2 className="text-center font-semibold">Most Viewed Posts</h2>

          <div className="viewed-posts mt-14 flex flex-col space-y-14">
            <div className="viewed-post flex gap-12">
              <img src={BlogImage4} alt="blog post" className="w-1/2" />
              <div className="right-side flex flex-col space-y-3">
                <h3 className="font-semibold w-60">
                  Prices of Rice are sykrocketing by the day
                </h3>
                <p className="w-80">
                  We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated
                  it, we realized 29 bags of rice.
                </p>
                <a href="#" className="text-ColorPrimary">Read More</a>
                <small>29 <sup>th</sup> Sept. 2024</small>
              </div>
            </div>

            <div className="viewed-post flex gap-12 flex-row-reverse">
              <img src={BlogImage5} alt="blog post" className="w-1/2"/>
              <div className="right-side flex flex-col space-y-3">
                <h3 className="font-semibold w-60">
                  Prices of Beans are sykrocketing by the day
                </h3>
                <p className="w-80">
                  We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated
                  it, we realized 29 bags of rice.
                </p>
                <a href="#" className="text-ColorPrimary">Read More</a>
                <small>29 <sup>th</sup> Sept. 2024</small>
              </div>
            </div>

            <div className="viewed-post flex gap-12">
              <img src={BlogImage6} alt="blog post" className="w-1/2"/>
              <div className="right-side flex flex-col space-y-3">
                <h3 className="font-semibold w-60">
                  Prices of Beans are sykrocketing by the day
                </h3>
                <p className="w-80">
                  We got 5 hectares of farm land in Kaduna, Nigeria. Cultivated
                  it, we realized 29 bags of rice.
                </p>
                <a href="#" className="text-ColorPrimary">Read More</a>
                <small>29 <sup>th</sup> Sept. 2024</small>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="bg-gray-200 py-16">
        <div className="old-posts-container container">
          <h2 className="font-semibold">Old Posts</h2>

          <div className="old-post flex items-center gap-8 mt-8">
            <IoEllipse className="text-ColorPrimary"/>
            <p>
              Prices of beans are sykrocketing by the day.
            </p>
          </div>
          <div className="old-post flex items-center gap-8 mt-8">
            <IoEllipse className="text-ColorPrimary"/>
            <p>
              Prices of maize are sykrocketing by the day.
            </p>
          </div>
          <div className="old-post flex items-center gap-8 mt-8">
            <IoEllipse className="text-ColorPrimary"/>
            <p>
              Prices of groundnut are sykrocketing by the day.
            </p>
          </div>
          <div className="old-post flex items-center gap-8 mt-8">
            <IoEllipse className="text-ColorPrimary"/>
            <p>
              Prices of rice are sykrocketing by the day.
            </p>
          </div>
          <div className="old-post flex items-center gap-8 mt-8">
            <IoEllipse className="text-ColorPrimary"/>
            <p>
              Prices of beans are sykrocketing by the day.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Blog;
