import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

const PARTNERS: any = [
  {
    name: "GUCCI",
    image: require("../../assets/brand1.png"),
  },
  {
    name: "MANGO",
    image: require("../../assets/brand2.png"),
  },
  {
    name: "COFFEE HOUSE",
    image: require("../../assets/brand3.jpeg"),
  },
  {
    name: "CHELL",
    image: require("../../assets/brand4.png"),
  },
  {
    name: "SAMSUNG",
    image: require("../../assets/brand5.png"),
  },
  {
    name: "MERCEDES",
    image: require("../../assets/brand6.jpg"),
  },
  {
    name: "CIB",
    image: require("../../assets/brand7.webp"),
  },
];

const Events = () => {
  // ----------- hooks ------------
  const [selectedPartner, setSelectedPartner] = React.useState(PARTNERS[0]);
  const [partnerList, setPartnerList] = React.useState(PARTNERS);

  // ----------- functions ------------
  const handlePartnerSpin = () => {
    let lastItem = partnerList[partnerList.length - 1];
    const tempList = [...partnerList.slice(0, partnerList.length - 1)];
    setPartnerList([lastItem, ...tempList]);
    setSelectedPartner(partnerList[0]);
  };

  // ----------- side effect ------------
  useEffect(() => {
    const intervalId = setInterval(() => {
      handlePartnerSpin();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [selectedPartner]);

  console.log(partnerList);

  return (
    <div className="bg-lightGray px-3 py-14 md:py-32 ">
      <h2 className="text-center text-xl font-bold md:text-3xl font-bold text-primaryDark pb-10">
        Our Services
      </h2>
      <div className="py-10 overflow-hidden md:block flex flex-col items-center gap-10  w-screen">
        <Fade bottom>
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 w-full">
            {partnerList.slice(0, 6)?.map((item: any, index: any) => {
              return (
                <div
                  key={item?.name}
                  onClick={() => setSelectedPartner(item)}
                  className={`w-60 h-60 p-5 flex items-center justify-center rounded-xl cursor-pointer bg-white shadow-lg `}
                >
                  <img
                    className="h-48 w-48 object-contain"
                    src={item?.image}
                    alt="branches"
                  />
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Events;
