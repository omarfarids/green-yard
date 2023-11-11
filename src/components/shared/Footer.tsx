import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="bg-lightGray flex justify-evenly flex-col md:flex-row items-center">
        <div className="px-3 md:w-2/5 md:p-10">
          <img
            className="w-16 border-2 border-black my-5 rounded-full"
            src={require("../../assets/logo2.jpg")}
            alt=""
          />
          <div className="flex flex-row gap-7 justify-between flex-wrap">
            <p className="text-lg font-medium hover:cursor-pointer">
              Product by Green yard
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Get Early Access
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Dubai, UAE
            </p>
            <p className="text-lg font-medium hover:cursor-pointer">
              Provide Feedback
            </p>
          </div>
        </div>
        <div className="pt-3 md:w-2/5">
          <p>Connect with Us</p>
          <div className=" flex flex-row gap-5 py-5">
            <BsFacebook className="text-blue hover:cursor-pointer" />
            <BsTwitter className="text-DodgerBlue hover:cursor-pointer" />
            <BsInstagram className="text-yellowDark hover:cursor-pointer" />
            <BsLinkedin className="text-blue hover:cursor-pointer" />
            <BsYoutube className="text-red hover:cursor-pointer" />
            <BsPinterest className="text-red hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-black flex flex-col md:flex-row justify-between py-5 px-10">
        <p className="text-white">copyright &#169; 2023 Green yard</p>
        <p className="text-white">Terms of Service</p>
      </div>
    </>
  );
};

export default Footer;
