import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Mission = (props: Props) => {
  return (
    <section className="flex flex-col gap-5 px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="xs:w-3/5 mx-1">
          <h2 className="text-xl pb-1 mb-6 mx-auto text-center border-gray border-b-2 border-dashed w-44">
            WHO WE ARE
          </h2>
          <p className="font-bold text-justify">
            At Allo Promo, we are aware you're the type of one who needs to
            implement palmy digital selling campaigns. Thus, for us to meet your
            standard, you would like the optimum choice of promoting channels,
            correct metrics, and a nonstop flow of concepts that improve the
            performance your business. ​ We can help you improve every aspect of
            your digital marketing, local advertising, and content creation to
            guarantee a strict path towards a drastic increase in leads and
            sales, all while collaborating in a way that optimizes your time
            investment with the main goal of maximizing results.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Mission;
