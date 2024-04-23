/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import TeamPic from "../../../../public/Images/team-photo.png";

const CareerHerosection = () => {
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
      <div className="w-full   about-us-bg flex padding-full-left-side  carrer-herosection flex-row gap-44 padding-industies py-20 bg-gradient-to-br from-black to-zinc-950">
        <div
          data-aos="fade-right"
          className="w-[50%] carrer-left-section  justify-start items-start gap-[190px] inline-flex"
        >
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="LeftLabel">
              <div className=" p-4 startupStudio-gradient rounded-full  flex-col justify-start items-start gap-2.5 flex">
                <div className=" text-emerald-400 text-sm font-light urbanist">
                  🚀 <span className="StartupStudio">STARTUP STUDIO</span>
                </div>
              </div>
            </div>
            <div className="w-[622px] text-neutral-100 text-color-gradient carrer-page-herosection  leading-tight text-[64px] font-bold  prompt">
              Join us in building <br />
              remarkable stuffs
            </div>
            <div className="self-stretch text-[#8E8E8E] text-xl font-normal career-paragraph  leading-tight urbanist">
              At VadaVision, we chose the word'Vada'to represent trust,
              reliability, and integrity in our services. It signifies the
              strong foundation of trust we build with our
              clients. 'Vision' embodies innovation, creativity, and
              forward-thinking.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className=" w-[50%] mobile-min-width min-w-[350px]  about-us-image image-bg py-10"
        >
          <Image src={TeamPic} className="mx-auto" />
        </div>
      </div>
    </>
  );
};

export default CareerHerosection;
