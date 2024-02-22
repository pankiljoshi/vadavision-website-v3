"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Image from "next/image";
import TweekendApp from "../../../../public/Images/TweekendApp.png";
import ReactImage from "../../../../public/Images/react.png";
import NodeImage from "../../../../public/Images/node.png";

const RecentProject = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="RecentProjects w-full   px-20  pt-20 padding-industies   ">
        <div data-aos="fade-down" className=" w-full flex justify-between    ">
          <div className="title-padding w-[700px]">
            <span className="text-neutral-400 text-4xl text-size-change1  font-medium font-urbanist">
              Check out our
              <br />
            </span>
            <span className="color-change text-6xl font-bold text-size-change2 leading-normal font-urbanist">
              Recent Projects
            </span>
          </div>
          <div className=" justify-start items-start gap-3.5 flex ">
            <div className=" left-arrow w-[70px] h-[36px] cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
              <div className="Frame w-6  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M19 12.5H5"
                      stroke="#8E8E8E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 19.5L5 12.5L12 5.5"
                      stroke="#8E8E8E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="right-arrow w-[70px] h-[36px] cursor-pointer  bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
              <div className="Frame ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <g id="Frame">
                    <path
                      id="Vector"
                      d="M5 12.5H19"
                      stroke="#DD4243"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 5.5L19 12.5L12 19.5"
                      stroke="#DD4243"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-row gap-10 responsive-project"
        >
          <div className="flex flex-col border-style-project">
            <div className=" flex flex-col min-w-[320px] px-10 mt-10 py-24 image-center bg-gradient-to-b from-zinc-950 via-stone-900 to-stone-950   justify-center items-center ">
              <Image src={TweekendApp} alt="" width={480} />
            </div>
          </div>

          <div className="Frame1171281455 mt-20  responsive-project-rightside  flex-col justify-start items-start gap-12 inline-flex">
            <div className="Frame1171281461 flex-col justify-start items-start gap-6 flex">
              <div className="Frame1171281454 flex-col justify-start items-start gap-4 flex">
                <div className="Frame1171281453 mt-16 flex-col justify-start items-start gap-2 flex">
                  <div className="Tweekend text-white text-5xl font-bold font-urbaninst">
                    Tweekend
                  </div>
                  <div className=" text-stone-300 text-xl font-normal mt-2 italic font-urbaninst">
                    A booking app for social events.
                  </div>
                </div>
                <div className=" text-[#8E8E8E] text-xl font-light flex-wrap flex font-urbaninst responsive-paragraph">
                  It makes planning and attending events simple, <br />
                  helping users find and join social gatherings effortlessly.
                </div>
              </div>
              <div className="Frame1171281460 flex-col justify-start items-start gap-4 flex">
                <div className="TechStack w-96 text-neutral-400 text-base font-semibold font-urbaninst">
                  Tech Stack:
                </div>
                <div className="Frame1171281459 justify-start items-start gap-4 inline-flex">
                  <Image src={NodeImage} alt="" />
                  <Image src={ReactImage} alt="" />
                </div>
              </div>
            </div>
            <div className="BookACall h-[46px] px-10 py-4 cursor-pointer bg-[#DD4243] hover:bg-[#D53033]  border border-white border-opacity-10 justify-center items-center gap-4 inline-flex">
              <div className="BookACall text-white text-lg font-light font-urbaninst">
                View Project
              </div>
              <div className="Div w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="ChevronRight w-4 h-4 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g id="chevron-right">
                      <path
                        id="Vector (Stroke)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.52851 3.52851C5.78886 3.26816 6.21097 3.26816 6.47132 3.52851L10.4713 7.52851C10.7317 7.78886 10.7317 8.21097 10.4713 8.47132L6.47132 12.4713C6.21097 12.7317 5.78886 12.7317 5.52851 12.4713C5.26816 12.211 5.26816 11.7889 5.52851 11.5285L9.05711 7.99992L5.52851 4.47132C5.26816 4.21097 5.26816 3.78886 5.52851 3.52851Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentProject;
