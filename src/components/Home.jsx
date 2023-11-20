import { Carousel } from "flowbite-react";
import React from "react";
import "./Home.css";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full  mx-auto">
          {/* 1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-md">
              <img src={banner1} alt="Technology illustrations by Storyset" />
              <a
                href="https://storyset.com/technology"
                className="text-neutralGrey text-xs opacity-20"
              >
                Technology illustrations by Storyset
              </a>
            </div>

            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and Insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 w-full">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register now</button>
            </div>
          </div>

          {/* 2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-md">
              <img src={banner2} alt="Technology illustrations by Storyset" />
              <a
                className="text-neutralGrey text-xs opacity-20"
                href="https://storyset.com/design"
              >
                Design illustrations by Storyset
              </a>
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Learn Design and Illustration{" "}
                <span className="text-brandPrimary leading-snug">
                  in 4 Months
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 w-full">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="btn-primary">Register now</button>
            </div>
          </div>

          {/* 3 */}
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div className="max-w-md">
              <img src={banner3} alt="Technology illustrations by Storyset" />
              <a
                className="text-neutralGrey text-xs opacity-20"
                href="https://storyset.com/people"
              >
                People illustrations by Storyset
              </a>
            </div>
            {/* hero text*/}
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Grow Business Fast{" "}
                <span className="text-brandPrimary leading-snug">
                  for free of cost
                </span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8 w-full">
                Unlock the secrets of rapid business growth with our expert
                strategies.
              </p>
              <button className="btn-primary">Register now</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
