import React from "react";
import Fade from "react-reveal/Fade";

type Props = {};

const Services = (props: Props) => {
  return (
    <>
      <section className="pragraph__difficulty px-3 py-14 md:py-32 bg-lightGray">
        <Fade bottom>
          <h2 className="text-center text-xl font-bold md:text-3xl font-bold text-primaryDark pb-10">
            Our Services
          </h2>
          <div className="md:p-10 flex flex-col md:grid grid-cols-3 grid-flow-row justify-center gap-10">
            <div className="service-card1 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content1 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 1
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="service-card2 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content2 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 2
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="service-card3 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content3 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 3
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="service-card4 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content4 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 4
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="service-card5 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content5 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 5
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="service-card6 h-60 sm:w-96 rounded-2xl flex flex-col justify-end overflow-hidden">
              <div className="service-card__content6 text-white">
                <h1 className="text-xl font-bold md:text-3xl pb-3">
                  Services 6
                </h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
                  voluptatem?
                </p>
              </div>
            </div>
            {/* ---------------------------------------------------------- */}
          </div>
        </Fade>
      </section>
    </>
  );
};

export default Services;
