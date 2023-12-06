import React from "react";
import Intro from "../components/home/Intro";
import MainPoints from "../components/home/MainPoints";
import Services from "../components/home/Services";
import NewsTap from "../components/home/NewsTap";
import Partners from "../components/home/Partners";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <NewsTap />
      <Intro />
      <Services />
      <MainPoints />
      <Partners />
    </div>
  );
};

export default Home;
