/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TechStach from "../../../../public/Images/tech-stack.png";
import ReactNative from "../../../../public/Images/react-native.png";
import Flutter from "../../../../public/Images/flutter.png";
import Hybrid from "../../../../public/Images/hybrid.png";
import Image from "next/image";
const TechStack = () => {
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
      <div className="w-full px-20 padding-industies  py-20 bg-gradient-to-r from-zinc-950 to-zinc-950">
        <div data-aos="fade-up" className=" ">
          <span className="text-neutral-400 text-[40px] leading-tight font-semibold urbanist">
            Our <br />
          </span>
          <span className="text-cyan-600 text-[56px] tech-stack-gradient font-bold urbanist">
            Tech Stack
          </span>
        </div>
        <div className=" flex-col justify-start  pt-10 items-start gap-14 inline-flex">
          <div
            data-aos="zoom-in"
            className="w-full justify-center items-center inline-flex"
          >
            <Image src={TechStach} width={1320} />
          </div>
          <div
            data-aos="fade-right"
            className="flex-col justify-start items-start gap-14 flex"
          >
            <div className="w-full tech-stack-wrap justify-start items-start gap-14 inline-flex">
              <div className="w-[50%] pt-4 px-4 background-gradient h-[243px] tech-stack-height tech-stack-gap tech-stack-columm   border-gradient-bottom flex flex-row items-center gap-10  bg-gradient-to-bl ">
                <Image
                  src={ReactNative}
                  width={160}
                  className="react-native-image"
                />
                <div className=" flex-col justify-start items-start gap-4 inline-flex">
                  <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                    React Native
                  </div>
                  <div className=" text-neutral-400 text-xl tech-stack-card-font-size   font-normal urbanist">
                    We specialize in creating user-friendly mobile apps with
                    creative ideas. Join us to improve your app's  performance
                    on different devices for a great user experience. Let's make
                    your app stand out!
                  </div>
                </div>
              </div>
              <div className="w-[50%] background-gradient h-[243px] tech-stack-height px-4 tech-stack-columm tech-stack-gap border-gradient-bottom flex flex-row items-center gap-10  bg-gradient-to-bl ">
                <Image src={Flutter} className="react-native-image" />
                <div className=" flex-col justify-start items-start gap-4 inline-flex">
                  <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                    Flutter
                  </div>
                  <div className=" text-neutral-400 text-xl tech-stack-card-font-size font-normal urbanist">
                    Our experts seamlessly blend creativity & functionality,
                    crafting visually appealing, high-quality apps. Experience
                    innovation & exceptional mobile journeys with us.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="px-4 h-[223px]  tech-stack-hybrid  background-gradient tech-stack-columm pt-8 pb-[62px] tech-stack-gap border-gradient-bottom bg-gradient-to-bl  items-center justify-start  gap-[38px] inline-flex"
          >
            <Image src={Hybrid} className="react-native-image" />
            <div className="self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[292px] text-white text-[32px] font-medium urbanist">
                Hybrid Apps
              </div>
              <div className=" text-neutral-400 text-xl tech-stack-card-font-size font-normal urbanist">
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
