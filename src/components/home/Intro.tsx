import React from "react";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <>
      <section className=" flex flex-col-reverse px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
        <Fade bottom>
          <div className="md:w-2/5">
            <h1 className="text-xl md:text-3xl font-bold text-primaryDark pb-10">
              Welcome to Allo Promo, Your Partner in in digital innovations
              across existing and emerging marketing communication!
            </h1>
            <p className="font-bold">
              We are a group of unstoppable thinkers and doers—a team connected
              by our culture. We have created a conducive space that we designed
              to accommodate innovative and wild ideas. Here, there are no
              unnecessary boundaries, hierarchies, and pointless meetings. Allo
              Promo started as a dream, as most companies do. It began as an
              entity we dreamt together over our pint-sized successes and
              failures over a decade ago!
            </p>
          </div>
          <img
            className="xs:w-2/5 md:w-96 rounded-2xl"
            src={require("../../assets/farm.jpg")}
            alt="Green yard"
          />
        </Fade>
      </section>
      <div className="intro-quote w-full h-72 flex justify-center items-center relative z-5">
        <p className="text-white text-lg md:text-3xl font-medium md:font-bold relative z-10 w-4/5 text-center">
          We don't just have mission and vision statements; we are on a mission,
          and each of us knows our vision.
        </p>
      </div>
    </>
  );
};

export default Intro;
