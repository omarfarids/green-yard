import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="pragraph__difficulty flex flex-col gap-5 px-3 py-14 md:py-32 gap-5 bg-lightGray justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <img
          className="xs:w-2/5 md:h-72 object-cover rounded-2xl"
          src={require("../../assets/farm3.png")}
          alt="Green yard"
        />
        <div className="xs:w-2/5">
          <h2 className="text-xl pb-3">Our Services</h2>
          <p className="font-bold">
            Our company provides comprehensive livestock logistics throughout
            the United Arab Emirates. We deliver safe and efficient animal
            transportation, including the transfer of essential animal materials
            and nutrients. Our team ensures smooth and stress-free livestock
            relocation within farms and facilities, adhering to the highest
            standards of animal welfare. We are committed to your livestock's
            well-being and strive to exceed your service expectations.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Services;
