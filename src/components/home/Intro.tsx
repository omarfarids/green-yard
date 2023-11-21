import React from "react";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <>
      <section className=" flex flex-col-reverse px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
        <Fade bottom>
          <div className="md:w-2/5">
            <h1 className="text-xl md:text-3xl font-bold text-primaryDark pb-10">
              Welcome to Green Yard, Your Partner in Sustainable Agriculture
              Transport!
            </h1>
            <p className="font-bold">
              At Green Yard, we redefine farm animal transportation with a focus
              on sustainability and animal well-being. Our eco-friendly fleet
              ensures timely deliveries while minimizing our environmental
              impact. We prioritize the comfort and safety of every animal,
              combining industry expertise with a commitment to green energy.
              Join us in creating a greener future for agriculture with reliable
              and conscientious transportation. Welcome to a new era of
              sustainable farming at Green Yard.
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
          Organic Ethanol Fuel, Biodiesel, Biochar & Biocoal are at the Center
          of Our Activities!
        </p>
      </div>
    </>
  );
};

export default Intro;
