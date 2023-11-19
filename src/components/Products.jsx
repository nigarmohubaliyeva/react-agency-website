import React from "react";
import aboutImg from "../assets/login.png";
import partnership from "../assets/partnership.png";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className=" max-w-md md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <img src={aboutImg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            How to design your site footer like we did
          </h2>
          <p className="md:w-3/4 text-sm text-neutralgrey mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            sunt, blanditiis itaque quisquam neque ex saepe harum autem
            voluptatem eius recusandae debitis vero ducimus atque amet dolor
            quod, deleniti corporis? Suscipit aspernatur quidem deserunt, ipsa
            pariatur assumenda labore, quisquam possimus voluptates esse autem,
            harum sapiente. Commodi eius unde iure assumenda necessitatibus
            repellat reprehenderit ad, non, quas placeat totam, quidem eaque.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/3">
            <img src={partnership} alt="" />
          </div>

          {/* stats */}
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, cumque? Dolores ratione vero, tempora non commodi
                voluptate ab eos, iusto nostrum a labore optio delectus
                architecto unde illum nemo animi. Dolorum sunt consectetur
                dolores facilis quidem porro facere. Reiciendis nostrum quaerat
                maxime ut officiis quidem unde repellat suscipit alias at nulla,
                iure quos esse, et tempore incidunt molestiae facilis.
              </p>
              <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                Tim Smith
              </h5>
              <p className="text-base text-neutralGrey mb-8">
                British Dragon Boat Racing Association
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap">
                  <img
                    src="/src/assets/company1.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <img
                    src="/src/assets/company2.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <img
                    src="/src/assets/company3.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <img
                    src="/src/assets/company4.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <img
                    src="/src/assets/company5.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <img
                    src="/src/assets/company6.png"
                    alt=""
                    className="cursor-pointer w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16"
                  />
                  <div className="flex items-center gap-8">
                    <a
                      href="/"
                      className="font-bold text-brandPrimary hover:text-neutral-700"
                    >
                      Meet all customers
                      <FaArrowRight className="ml-2 inline-block" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
