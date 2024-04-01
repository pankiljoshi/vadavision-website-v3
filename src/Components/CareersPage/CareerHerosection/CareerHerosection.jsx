/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import TeamPic from "../../../../public/Images/team-photo.png";

const CareerHerosection = () => {
  return (
    <>
      <div className="w-full px-20  flex flex-row gap-10 py-20 bg-gradient-to-br from-black to-zinc-950">
        <div className="w-[50%] justify-start items-start gap-[190px] inline-flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <div className="LeftLabel">
              <div className=" p-4 startupStudio-gradient rounded-full  flex-col justify-start items-start gap-2.5 flex">
                <div className=" text-emerald-400 text-sm font-light urbanist">
                  🚀 <span className="StartupStudio">STARTUP STUDIO</span>
                </div>
              </div>
            </div>
            <div className="w-[622px] text-neutral-100 text-color-gradient  leading-tight text-[64px] font-bold  prompt">
              Join us in building <br />
              remarkable stuffs
            </div>
            <div className="self-stretch text-[#8E8E8E] text-xl font-normal  leading-tight urbanist">
              At Vadavision, we chose the word'Vada'to represent trust,
              reliability, and integrity in our services. It signifies the
              strong foundation of trust we build with our
              clients. 'Vision' embodies innovation, creativity, and
              forward-thinking.
            </div>
          </div>
        </div>
        <Image src={TeamPic} />
      </div>
    </>
  );
};

export default CareerHerosection;