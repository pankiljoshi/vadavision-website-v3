"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import WorldMap from "../../../../public/Images/world-map.png";
const Map = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 100,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="w-full px-20 py-20 padding-industies padding-full-website bg-zinc-950">
        <div data-aos="fade-down" className=" leading-tight pb-10">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold urbanist">
            We work
            <br />
          </span>
          <span className="text-cyan-600 text-[56px]  font-change-2 map-text-gradient font-bold urbanist">
            Across the Globe
          </span>
        </div>
        <Image src={WorldMap} data-aos="fade-up" />
      </div>
    </>
  );
};

export default Map;
