import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const statements = [
  "Building Bridges, Crafting Solutions, Achieving Excellence: Where Connections Meet Results.",
  "Making Connections Delivering Results.",
];

const NAV_ITEMS = [
  { value: "Home", route: "/" },
  {
    value: "Mission & Vision",
    route: "/mission",
  },
  { value: "About us", route: "/about-us" },
  { value: "Contact us", route: "/contact-us" },
];

const Header = () => {
  // ------------ hooks ------------
  const [open, setOpen] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [active, setActive] = useState("Home");
  const [statementToggler, setStatementToggler] = useState(0);
  const [headerState, setHeaderState] = useState(statements[statementToggler]);
  const [navToggle, setNavToggle] = useState(false);
  const navigate = useNavigate();
  const videoRef: any = useRef(null);

  // ------------ functions ------------

  const toggleText = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStatementToggler((prevToggler) => (prevToggler === 0 ? 1 : 0));
      setTransitioning(false);
    }, 300);
  };

  const startVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    startVideo();
  }, []);

  // ------------ side effects ------------

  useEffect(() => {
    const interval = setInterval(toggleText, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setHeaderState(statements[statementToggler]);
  }, [statementToggler]);

  return (
    <>
      <nav className="relative flex flex-row justify-end md:justify-between items-center px-10 z-20 bg-primaryDark w-full shadow-lg">
        <img
          className="w-40 my-5"
          src={require("../../assets/logo.webp")}
          alt="logo"
        />
        <div className="absolute top-7 left-5 md:relative md:top-0 md:right-0 z-5">
          <span
            className="cursor-pointer md:hidden"
            onClick={() => {
              setNavToggle((prev) => !prev);
            }}
          >
            <GiHamburgerMenu />
          </span>
          <ul
            className={`md:flex flex-col md:flex-row gap-4 md:gap-10 my-3 md:my-0 ${
              navToggle ? "flex" : "hidden"
            }`}
          >
            {NAV_ITEMS.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    index === 1 ? setOpen(!open) : setOpen(false);
                    setActive(item.value);
                    item.route && navigate(item.route);
                  }}
                  className={`nav-item relative w-18 font-semibold text-lg text-white p-1 h-8 cursor-pointer flex flex-row items-center gap-1 ${
                    active === item?.value ? "active font-bold pl-3" : "ml-3"
                  }`}
                  key={index}
                >
                  {item.value}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex flex-row gap-4">
          <FaFacebookF className="text-white hover:cursor-pointer border border-white rounded-full w-10 h-10 p-2" />
          <BsTwitter className="text-white hover:cursor-pointer border border-white rounded-full w-10 h-10 p-2" />
          <FaInstagram className="text-white hover:cursor-pointer border border-white rounded-full w-10 h-10 p-2" />
        </div>
      </nav>
      <div className="header pt-20 md:pt-40 flex flex-col items-center justify-start gap-24 text-white">
        <video style={{ height: "100vh" }} ref={videoRef} loop muted>
          <source
            src={require("../../assets/background.mp4")}
            type="video/mp4"
          />
        </video>
        <p
          className={`md:h-40 font-semibold text-center z-20 text-3xl p-20 w-3/4 relative transition-all duration-300 ease-in-out ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {headerState}
        </p>
      </div>
    </>
  );
};

export default Header;
