import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const MainPoints = (props: Props) => {
  return (
    <section className="flex flex-col-reverse px-3 py-14 md:py-32 gap-5 justify-evenly items-center xs:flex-row">
      <Fade bottom>
        <div className="md:w-2/5">
          <h2 className="text-xl pb-3">Our Main Goals</h2>
          <ul className="font-bold list-disc">
            <li>Sustainable Transport Solutions.</li>
            <li>Animal Welfare Priority.</li>
            <li>Green Energy Innovation.</li>
            <li>Expertise in Farm Logistics.</li>
            <li>Reliability and Punctuality.</li>
            <li>Environmental Impact Reduction.</li>
          </ul>
        </div>
        <img
          className="xs:w-2/5 md:w-72 rounded-2xl"
          src={require("../../assets/farm2.jpg")}
          alt="Green yard"
        />
      </Fade>
    </section>
  );
};

export default MainPoints;
