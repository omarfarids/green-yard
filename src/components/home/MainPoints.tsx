import React from "react";
import Fade from "react-reveal/Fade";
import { FaEnvira } from "react-icons/fa";
import { GiPlantWatering } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import { MdLaptopChromebook } from "react-icons/md";

import { IoBookOutline } from "react-icons/io5";

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
              title="Lead Generation Mastery."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={FaEnvira}
            />
            <InfoSection
              title="Local Advertising Dominance."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={GiPlantWatering}
            />
            <InfoSection
              title="Content Creation Innovation."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={GiFruitTree}
            />
            <InfoSection
              title="Performance Metrics Precision."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={FaRecycle}
            />
            <InfoSection
              title="Time-Optimized Collaboration."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={MdLaptopChromebook}
            />
            <InfoSection
              title="Multichannel Marketing Excellence."
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, atque?"
              icon={IoBookOutline}
            />
          </div>
          <img
            className="hidden md:block md:w-60 rounded-2xl object-cover"
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
