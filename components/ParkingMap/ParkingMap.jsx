import React from "react";
import Image from "next/image";
import ParkingImg from "../../public/assets/Maps/AKAparking.png";

const ParkingMap = () => {
  return (
    <div>
      <Image src={ParkingImg} />
    </div>
  );
};

export default ParkingMap;
