import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className=" max-w-md md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <img src={aboutImg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="md:w-3/4 text-sm text-neutralgrey mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dicta
            nemo enim accusantium vero, doloremque rerum at harum deleniti
            similique quis amet, neque maiores iusto, esse officia distinctio
            quae illo. Necessitatibus atque praesentium, culpa rem maiores sequi
            fugiat enim esse similique tempora minus natus possimus mollitia.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
