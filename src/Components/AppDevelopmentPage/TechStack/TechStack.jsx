/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import TechStach from "../../../../public/Images/tech-stack.png";
import ReactNative from "../../../../public/Images/react-native.png";
import Flutter from "../../../../public/Images/flutter.png";
import Hybrid from "../../../../public/Images/hybrid.png";
import Image from "next/image";
const TechStack = () => {
  return (
    <>
      <div className="w-full px-20  py-20 bg-gradient-to-r from-zinc-950 to-zinc-950">
        <div className="w-[326px] ">
          <span className="text-neutral-400 text-[40px] leading-tight font-semibold urbanist">
            Our <br />
          </span>
          <span className="text-cyan-600 text-[56px] tech-stack-gradient font-bold urbanist">
            Tech Stack
          </span>
        </div>
        <div className=" flex-col justify-start  pt-10 items-start gap-14 inline-flex">
          <div className="w-full justify-center items-center inline-flex">
            <Image src={TechStach} width={1320} />
          </div>
          <div className="flex-col justify-start items-start gap-14 flex">
            <div className="w-full justify-start items-start gap-14 inline-flex">
              <div className="w-[50%] pt-4 px-4 background-gradient h-[213px]  border-gradient-bottom flex flex-row items-center gap-10  bg-gradient-to-bl ">
                <div>
                  <Image src={ReactNative} />
                </div>
                <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
                  <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                    React Native
                  </div>
                  <div className="w-[482px] text-neutral-400 text-xl font-normal urbanist">
                    We specialize in creating user-friendly mobile apps with
                    creative ideas. Join us to improve your app's  performance
                    on different devices for a great user experience. Let's make
                    your app stand out!
                  </div>
                </div>
              </div>
              <div className="w-[50%] background-gradient h-[213px] px-4  border-gradient-bottom flex flex-row items-center gap-10  bg-gradient-to-bl ">
                <div className="">
                  {" "}
                  <Image src={Flutter} />
                </div>
                <div className=" flex-col justify-start items-start gap-4 inline-flex">
                  <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                    Flutter
                  </div>
                  <div className="w-[482px] text-neutral-400 text-xl font-normal urbanist">
                    Our experts seamlessly blend creativity & functionality,
                    crafting visually appealing, high-quality apps. Experience
                    innovation & exceptional mobile journeys with us.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 h-[223px] items-center  background-gradient pt-8 pb-[62px] border-gradient-bottom bg-gradient-to-bl  justify-start  gap-[38px] inline-flex">
            <Image src={Hybrid} />
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                Hybrid Apps
              </div>
              <div className=" text-neutral-400 text-xl font-normal urbanist">
                Explore Vadavision 'Hybrid Development, where we mix different
                technologies to create apps. Our solutions are flexible,
                affordable, and work well on various devices. We make sure users
                get the same experience no matter what device they use. Try our
                versatile and user-friendly apps
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
