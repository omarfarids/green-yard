import React from "react";
import Fade from "react-reveal/Fade";
import { FaEnvira } from "react-icons/fa";
import { GiPlantWatering } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";
import { FaCow } from "react-icons/fa6";

type Props = {};

const MainPoints = (props: Props) => {
  return (
    <section className="px-3 py-14 md:py-32">
      <Fade bottom>
        <h2 className="text-center text-xl md:text-3xl font-bold text-primaryDark pb-10">
          Our Main Goals
        </h2>
        <div className="md:flex md:flex-row md:justify-center gap-10">
          <div className="md:p-10 flex flex-col md:grid grid-rows-3 grid-flow-col justify-center gap-20">
            <InfoSection
              title="Sustainable Transport Solutions"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={FaEnvira}
            />
            <InfoSection
              title="Animal Welfare Priority."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={GiPlantWatering}
            />
            <InfoSection
              title="Green Energy Innovation."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={GiFruitTree}
            />
            <InfoSection
              title="Expertise in Farm Logistics."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={FaRecycle}
            />
            <InfoSection
              title="Reliability and Punctuality."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={GiFarmTractor}
            />
            <InfoSection
              title="Environmental Impact Reduction."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={FaCow}
            />
          </div>
          <img
            className="hidden md:block md:w-60 rounded-2xl"
            src={require("../../assets/farm2.jpg")}
            alt="Green yard"
          />
        </div>
      </Fade>
    </section>
  );
};

export default MainPoints;

const InfoSection = ({ title, text, icon: Icon }: any) => {
  return (
    <div className="flex flex-row items-start gap-6 md:w-96">
      <Icon className="text-primaryDark" size={80} />
      <div>
        <h2 className="text-xl font-bold pb-1">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
