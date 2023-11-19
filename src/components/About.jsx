import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div>
      {/* about text */}
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

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-8, h-8, sm:w-10, sm:h-10"
                  src="/src/assets/group.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  className="w-8, h-8, sm:w-10, sm:h-10"
                  src="/src/assets/teamwork.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    45,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-8, h-8, sm:w-10, sm:h-10"
                  src="/src/assets/click.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  className="w-8, h-8, sm:w-10, sm:h-10"
                  src="/src/assets/credit-card.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
