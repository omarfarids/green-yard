import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="bg-white border-t border-t-lightGray flex items-center md:items-start justify-between flex-col md:flex-row md:p-10 gap-10">
        <div className="flex flex-col w-4/5 py-2 md:w-1/4 items-center md:items-start">
          <img
            className="w-40 mb-5"
            src={require("../../assets/logo.webp")}
            alt=""
          />
          <p className="text-sm font-medium hover:cursor-pointer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            similique? At tempore quo quia qui.
          </p>
        </div>
        <div className="flex flex-col md:w-1/5 items-center md:items-start">
          <h1 className="text-xl font-semibold">Contact us</h1>
          <p className="text-lg font-medium hover:cursor-pointer">
            <IoMdMail className="inline-block" /> test@test.com
          </p>
          <p className="text-lg font-medium hover:cursor-pointer">
            <FaPhoneAlt className="inline-block" /> 123456789
          </p>
          <p className="text-lg font-medium hover:cursor-pointer">
            <FaLocationDot className="inline-block" /> Canada
          </p>
        </div>
        <div className="flex flex-col md:w-1/5 items-center md:items-start">
          <p className="text-lg font-medium hover:cursor-pointer">Home</p>
          <p className="text-lg font-medium hover:cursor-pointer">
            Mission & Vision
          </p>
          <p className="text-lg font-medium hover:cursor-pointer">About us</p>
          <p className="text-lg font-medium hover:cursor-pointer">Contact us</p>
        </div>
        <div className="md:w-1/5 items-center md:items-start">
          <h1 className="text-xl font-semibold">Follow us</h1>
          <div className=" flex flex-row gap-2 py-3">
            <BsFacebook className="text-blue hover:cursor-pointer" />
            <BsTwitter className="text-DodgerBlue hover:cursor-pointer" />
            <BsInstagram className="text-yellowDark hover:cursor-pointer" />
            <BsLinkedin className="text-blue hover:cursor-pointer" />
            <BsYoutube className="text-red hover:cursor-pointer" />
            <BsPinterest className="text-red hover:cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="bg-lightGray flex flex-col md:flex-row justify-between py-2 px-10">
        <p>copyright &#169; 2023 Allo Promo</p>
        <p>Terms of Service</p>
      </div>
    </>
  );
};

export default Footer;
