import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-2/5 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl lg:text-5xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-neutralGrey mb-6">
            Stay updated with the latest news, features, and announcements.
          </p>
          <div className="flex items-center justify-center gap-8">
            <button className="btn-primary">
              Subscribe
              <FaArrowRight className="ml-2 inline-block" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
