import React from "react";
import logo from "../assets/logo.png";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className="space-y-4 mb-8">
            <a
              href=""
              className="text-2xl font-semibold flex items-center space-x-1"
            >
              <img
                src={logo}
                alt=""
                className="w-10 inline-block  items-center"
              />
              <span className="text-[#263238]">NEXCENT</span>
            </a>
            <div>
              <p className="mb-1">Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                <div className="text-neutralGrey text-xs opacity-20">
                  Image by{" "}
                  <a href="https://pixabay.com/users/davidzydd-985081/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2724481">
                    David Zydd
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2724481">
                    Pixabay
                  </a>
                  <a href="https://storyset.com/mobile">
                    Mobile illustrations by Storyset
                  </a>
                  <a
                    href="https://www.flaticon.com/free-icons/adobe"
                    title="adobe icons"
                  >
                    Adobe icon created by Pixel perfect - Flaticon
                  </a>
                  <a
                    href="https://www.flaticon.com/authors/freepik"
                    title="icons"
                  >
                    Icons created by Freepik - Flaticon
                  </a>
                  <a
                    href="https://www.flaticon.com/free-icons/hands-and-gestures"
                    title="hands and gestures icons"
                  >
                    Hands and gestures icons created by heisenberg_jr - Flaticon
                  </a>
                  <a
                    href="https://www.flaticon.com/free-icons/members"
                    title="members icons"
                  >
                    Members icons created by Bombasticon Studio - Flaticon
                  </a>
                  Image by{" "}
                  <a href="https://pixabay.com/users/skitterphoto-324082/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2982270">
                    Rudy and Peter Skitterians
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2982270">
                    Pixabay
                  </a>
                  Image by{" "}
                  <a href="https://pixabay.com/users/deeezy-15467098/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4906312">
                    Peter Olexa
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=4906312">
                    Pixabay
                  </a>
                  Image by{" "}
                  <a href="https://pixabay.com/users/kaboompics-1013994/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=791049">
                    Karolina Grabowska
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=791049">
                    Pixabay
                  </a>
                  <a
                    href="https://www.flaticon.com/free-icons/msn"
                    title="msn icons"
                  >
                    Msn icons created by Pixel perfect - Flaticon
                  </a>
                </div>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
