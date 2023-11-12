import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const statements = [
  "Green Paths, Happy Farms: Sustainably Transporting Life and Livelihoods.",
  "Moving Agriculture Forward.",
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

  // ------------ functions ------------

  const toggleText = () => {
    setTransitioning(true);
    setTimeout(() => {
      setStatementToggler((prevToggler) => (prevToggler === 0 ? 1 : 0));
      setTransitioning(false);
    }, 300);
  };

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
      <div className="header relative flex flex-col items-center justify-start gap-24 text-white">
        <nav className="flex flex-row justify-end md:justify-evenly items-start md:gap-72 md:py-16 z-10">
          <div className="absolute top-7 left-5 md:relative md:top-0 md:right-0 z-10">
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
          <img
            className="w-20 md:w-32 mt-2 border-4 border-primaryDarkHovered rounded-full"
            src={require("../../assets/logo2.jpg")}
            alt="logo"
          />
        </nav>
        <p
          className={`font-semibold text-center text-3xl p-20 w-3/4 relative z-5 transition-all duration-300 ease-in-out ${
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
