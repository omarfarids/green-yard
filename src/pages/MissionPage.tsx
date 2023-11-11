import React from "react";
import Mission from "../components/MissionAndVision/Mission";
import Vision from "../components/MissionAndVision/Vision";

type Props = {};

const MissionPage = (props: Props) => {
  return (
    <div>
      <Mission />
      <Vision />
    </div>
  );
};

export default MissionPage;
