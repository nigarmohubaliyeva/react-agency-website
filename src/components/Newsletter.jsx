import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="lf:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary">
              Get a Demo
              <FaArrowRight className="ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
