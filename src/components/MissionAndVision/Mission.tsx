import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Mission = (props: Props) => {
  return (
    <section className="pragraph__difficulty flex flex-col gap-5 px-3 py-14 md:py-32 gap-5 bg-lightGray justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="xs:w-3/5 mx-1">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-20">
            Mission
          </h2>
          <p className="font-bold text-justify">
            Our mission is to revolutionize the agricultural sector by
            pioneering the use of electric vehicles for livestock
            transportation. We aim to create a healthier and more efficient
            environment for both individuals and animals. By harnessing the
            power of sustainable technology, we seek to reduce carbon emissions
            and contribute to a greener future, while ensuring the utmost care
            for the animals in transit. Our commitment extends beyond mere
            transportation - we strive to drive innovation, promote animal
            welfare, and foster a sustainable future for the agricultural
            industry.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Mission;
