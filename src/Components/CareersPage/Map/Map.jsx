import Image from "next/image";
import React from "react";
import WorldMap from "../../../../public/Images/world-map.png";
const Map = () => {
  return (
    <>
      <div className="w-full px-20 py-20 padding-industies  bg-zinc-950">
        <div className=" leading-tight pb-10">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold urbanist">
            We work
            <br />
          </span>
          <span className="text-cyan-600 text-[56px]  font-change-2 map-text-gradient font-bold urbanist">
            Across the Globe
          </span>
        </div>
        <Image src={WorldMap} />
      </div>
    </>
  );
};

export default Map;
