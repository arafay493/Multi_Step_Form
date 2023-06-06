import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="flex justify-between gap-5">
      <div className="flex items-center">
        <Image
          src="/images/zimo-team-black.png"
          width={250}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div className="flex items-center">
        <Image
          src="/images/zimoInternship.png"
          width={100}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Footer;
