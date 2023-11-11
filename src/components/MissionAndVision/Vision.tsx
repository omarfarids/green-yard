import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Vission = (props: Props) => {
  return (
    <section className="flex flex-col-reverse px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="md:w-3/5 mx-1">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-20">
            Vision
          </h2>
          <p className="font-bold text-lg text-justify">
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

export default Vission;
