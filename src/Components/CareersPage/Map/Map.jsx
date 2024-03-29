import Image from "next/image";
import React from "react";
import WorldMap from "../../../../public/Images/world-map.png";
const Map = () => {
  return (
    <>
      <div className="w-full px-20 py-20  bg-zinc-950">
        <div className="w-[430px] pb-10">
          <span className="text-neutral-400 text-[40px] font-semibold urbanist">
            We work
            <br />
          </span>
          <span className="text-cyan-600 text-[56px] map-text-gradient font-bold urbanist">
            Across the Globe
          </span>
        </div>
        <Image src={WorldMap} />
      </div>
    </>
  );
};

export default Map;
