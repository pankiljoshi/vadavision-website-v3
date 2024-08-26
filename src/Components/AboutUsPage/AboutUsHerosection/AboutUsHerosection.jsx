/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Office from "../../../../public/Images/office.png";
import Image from "next/image";

const AboutUsHerosection = () => {
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
      <div className="w-full px-20 pr-0 py-20 about-us-bg about-us-padding bg-gradient-to-br from-black to-zinc-950">
        <div className="  justify-start gap-about-us-herosection about-us-herosection  items-start inline-flex">
          <div
            data-aos="fade-right"
            className="flex-col w-[50%] min-w-[625px] about-us-leftside justify-start items-start gap-6 inline-flex"
          >
            <div className="LeftLabel">
              <div className=" p-4 startupStudio-gradient rounded-full  flex-col justify-start items-start gap-2.5 flex">
                <div className=" text-emerald-400 text-sm font-light urbanist">
                  🚀{" "}
                  <span className="StartupStudio urbanist">STARTUP STUDIO</span>
                </div>
              </div>
            </div>
            <div className=" text-neutral-100 text-color-gradient about-us-heading  leading-tight text-[64px] font-bold prompt">
              We’re here to make things simpler
            </div>
            <div className="self-stretch text-[#8E8E8E] text-xl herosection-paragraph  leading-tight font-normal urbanist ">
              At VadaVision, we chose the word 'Vada' to represent trust,
              reliability, and integrity in our services. It signifies the
              strong foundation of trust we build with our clients. 'Vision'
              embodies innovation, creativity, and forward-thinking.
            </div>
            <div className=" justify-start buttons-herosection items-center gap-10 inline-flex reponsive-button ">
              <div
                data-aos="zoom-in"
                className="BookACall explore-more cursor-pointer h-[48px] px-9 reponsive-button bg-white hover:bg-[#FFFFFF3D] bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex explore-button"
              >
                <div className="BookACall w-[120px] text-white text-[20px] font-light text-center urbanist   explore-button">
                  Explore More
                </div>
              </div>

              <div
                data-aos="zoom-in"
                className="BookACall  herosection-Schedule-button cursor-pointer w-[198px] urbanist reponsive-button h-[48px] px-5 bg-[#DD4243] hover:bg-[#D53033] items-center gap-4 flex Schedule-button"
              >
                <div className="BookACall   text-white text-[16px] font-light urbanist  Schedule-button">
                  Schedule a Call
                </div>
                <div className="consultUs-svg w-6 h-6 p-3 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="ChevronRight w-4 h-4 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className=""
                    >
                      <g id="chevron-right">
                        <path
                          id="Vector (Stroke)"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="flex justify-end w-[50%] min-w-[400px]  about-us-image image-bg py-10"
          >
            <span>
              <Image
                src={Office}
                width={580}
                height={580}
                className="about-us-image"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHerosection;
