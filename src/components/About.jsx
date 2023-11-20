/* eslint-disable react/no-unescaped-entities */
import React from "react";
import aboutImg from "../assets/about.png";

const About = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="max-w-md md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <img src={aboutImg} alt="" />
        </div>
        <div className="md:w-3/5 mx-auto">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
            Discovering the Unseen: Three Years at Pixelgrade
          </h2>
          <p className="md:w-3/4 text-sm text-neutralgrey mb-8">
            Embark on a journey with Pixelgrade, where every day is a testament
            to our unwavering commitment to innovation. Over the past three
            years, we've delved deep into the realms of creativity and
            technology, reshaping the digital landscape and pushing boundaries.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Empowering local businesses to <br />
              <span className="text-brandPrimary">Reinvent And Succeed</span>
            </h2>
            <p>
              Through hard work and unwavering dedication, we've helped
              businesses reinvent themselves, creating success stories that
              resonate within our community.
            </p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
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
                  className="w-8 h-8 sm:w-10, sm:h-10"
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
                  className="w-8 h-8 sm:w-10 sm:h-10"
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
                  className="w-8 h-8 sm:w-10 sm:h-10"
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
