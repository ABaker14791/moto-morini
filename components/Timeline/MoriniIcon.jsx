import React from "react";
import Image from "next/image";
import moriniLogo from "../../public/assets/favico-96.png";

const MoriniIcon = () => {
  return <Image src={moriniLogo} alt="" width="40px" height="40px" />;
};

export default MoriniIcon;
