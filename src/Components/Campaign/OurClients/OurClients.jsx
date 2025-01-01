import React from "react";
import AlphaMdLogo from "../../../../public/Images/Alpha-md-Logo.svg";
import StellerVisionLogo from "../../../../public/Images/StellerVisionLogo.svg";
import PretunedAiLogo from "../../../../public/Images/pretunedLogo.svg";

import Image from "next/image";
const OurClients = () => {
  return (
    <>
      <div className="w-full md:px-20 px-8  flex justify-between py-4 md:py-10 bg-[#0A0A0A] items-center gap-4 md:gap-10">
        <div>
          <Image src={PretunedAiLogo} className="mix-blend-luminosity" alt="Pretuned logo" width={220} />
        </div>
        <div>
          <Image src={AlphaMdLogo} className="mix-blend-luminosity" alt="alphamd logo" width={220} />
        </div><div>
          <Image src={StellerVisionLogo} className="mix-blend-luminosity" alt="StellerVision logo" width={220} />
        </div><div>
          <Image src={StellerVisionLogo} className="mix-blend-luminosity" alt="StellerVision logo" width={220} />
        </div>
      </div>
    </>
  );
};

export default OurClients;
