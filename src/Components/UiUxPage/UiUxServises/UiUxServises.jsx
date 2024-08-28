/* eslint-disable react/no-unescaped-entities */
"use client";

import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import UiUxServise from "../../../../public/Images/uiux-servises.png";
import UiUxDesign from "../../../../public/Images/design-uiux.png";
import VisualDesign from "../../../../public/Images/visualdesign.png";
import BrandIdentity from "../../../../public/Images/brandidentity.png";

const UiUxServises = () => {
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
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const [isChatGPTIntegration, setChatGPTIntegration] = useState(true);
  const ChatGPTIntegration = () => {
    setChatGPTIntegration(true);
    setOpenSourceModel(false);
    setFineTuningServises(false);
    setIsDataServise(false);
  };
  const [isOpenSourceModel, setOpenSourceModel] = useState(false);
  const showOpenSourceModel = () => {
    setChatGPTIntegration(false);
    setOpenSourceModel(true);
    setFineTuningServises(false);
    setIsDataServise(false);
  };
  const [isFineTuningServises, setFineTuningServises] = useState(false);
  const showFineTuningServises = () => {
    setChatGPTIntegration(false);
    setOpenSourceModel(false);
    setFineTuningServises(true);
    setIsDataServise(false);
  };

  const [isDataServises, setIsDataServise] = useState(false);
  const showDataServises = () => {
    setChatGPTIntegration(false);
    setOpenSourceModel(false);
    setFineTuningServises(false);
    setIsDataServise(true);
  };
  return (
    <>
      <div className="w-full  py-14 px-20  overflow-hidden padding-full-website bg-zinc-950 padding-industies bg-opacity-90 bg-ai-bot-servises">
        <div
          data-aos="fade-right"
          className="flex-col justify-start items-start gap-14 inline-flex"
        >
          <div className="">
            <span className="text-neutral-400 text-[40px] font-change-1 font-medium urbanist">
              Our amazing <br />
            </span>
            <span className="text-pink-600 text-[56px] gradient-heading-automation-domain font-change-2 font-bold urbanist">
              UI/ UX Services{" "}
            </span>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="max-w-screen overflow-x-auto hide-scrollbar"
        >
          <div className=" justify-between aibot-servises-width items-start gap-14  relative  mt-10 inline-flex whitespace-nowrap">
            <div
              className={`h-[29px] w-[260px] cursor-pointer justify-center  items-center gap-2 flex ${
                activeTab === 0 ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              {activeTab === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="27"
                  viewBox="0 0 29 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.6579 0.5C7.6579 0.5 7.95991 3.31891 9.13629 4.49529C10.3127 5.67167 13.1316 5.97368 13.1316 5.97368C13.1316 5.97368 10.3127 6.2757 9.13629 7.45208C7.95991 8.62846 7.6579 11.4474 7.6579 11.4474C7.6579 11.4474 7.35589 8.62846 6.17951 7.45208C5.00313 6.2757 2.18422 5.97368 2.18422 5.97368C2.18422 5.97368 5.00313 5.67167 6.17951 4.49529C7.35589 3.31891 7.6579 0.5 7.6579 0.5ZM19.9737 4.60526C19.9737 4.60526 20.4267 8.83363 22.1913 10.5982C23.9558 12.3628 28.1842 12.8158 28.1842 12.8158C28.1842 12.8158 23.9558 13.2688 22.1913 15.0334C20.4267 16.7979 19.9737 21.0263 19.9737 21.0263C19.9737 21.0263 19.5207 16.7979 17.7561 15.0334C15.9915 13.2688 11.7632 12.8158 11.7632 12.8158C11.7632 12.8158 15.9915 12.3628 17.7561 10.5982C19.5207 8.83363 19.9737 4.60526 19.9737 4.60526ZM9.50589 17.8099C8.03542 16.3394 7.6579 12.8158 7.6579 12.8158C7.6579 12.8158 7.28039 16.3394 5.80991 17.8099C4.33944 19.2804 0.815796 19.6579 0.815796 19.6579C0.815796 19.6579 4.33944 20.0354 5.80991 21.5059C7.28039 22.9764 7.6579 26.5 7.6579 26.5C7.6579 26.5 8.03542 22.9764 9.50589 21.5059C10.9764 20.0354 14.5 19.6579 14.5 19.6579C14.5 19.6579 10.9764 19.2804 9.50589 17.8099Z"
                    fill="url(#paint0_linear_896_15821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_896_15821"
                      x1="0.815796"
                      y1="0.5"
                      x2="29.9596"
                      y2="3.95003"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF2B48" />
                      <stop offset="1" stopColor="#FF7C2B" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.1579 0.5C7.1579 0.5 7.45991 3.31891 8.63629 4.49529C9.81267 5.67167 12.6316 5.97368 12.6316 5.97368C12.6316 5.97368 9.81267 6.2757 8.63629 7.45208C7.45991 8.62846 7.1579 11.4474 7.1579 11.4474C7.1579 11.4474 6.85589 8.62846 5.67951 7.45208C4.50313 6.2757 1.68422 5.97368 1.68422 5.97368C1.68422 5.97368 4.50313 5.67167 5.67951 4.49529C6.85589 3.31891 7.1579 0.5 7.1579 0.5ZM19.4737 4.60526C19.4737 4.60526 19.9267 8.83363 21.6913 10.5982C23.4558 12.3628 27.6842 12.8158 27.6842 12.8158C27.6842 12.8158 23.4558 13.2688 21.6913 15.0334C19.9267 16.7979 19.4737 21.0263 19.4737 21.0263C19.4737 21.0263 19.0207 16.7979 17.2561 15.0334C15.4915 13.2688 11.2632 12.8158 11.2632 12.8158C11.2632 12.8158 15.4915 12.3628 17.2561 10.5982C19.0207 8.83363 19.4737 4.60526 19.4737 4.60526ZM9.00589 17.8099C7.53542 16.3394 7.1579 12.8158 7.1579 12.8158C7.1579 12.8158 6.78039 16.3394 5.30991 17.8099C3.83944 19.2804 0.315796 19.6579 0.315796 19.6579C0.315796 19.6579 3.83944 20.0354 5.30991 21.5059C6.78039 22.9764 7.1579 26.5 7.1579 26.5C7.1579 26.5 7.53542 22.9764 9.00589 21.5059C10.4764 20.0354 14 19.6579 14 19.6579C14 19.6579 10.4764 19.2804 9.00589 17.8099Z"
                    fill="#CACACA"
                  />
                </svg>
              )}
              <div
                onClick={ChatGPTIntegration}
                className="text-neutral-400 text-[24px]  font-medium urbanist"
              >
                UX Consulting{" "}
              </div>
              {activeTab === 0 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] w-[260px] cursor-pointer justify-center items-center gap-2 flex ${
                activeTab === 1 ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              {" "}
              {activeTab === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="27"
                  viewBox="0 0 29 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.6579 0.5C7.6579 0.5 7.95991 3.31891 9.13629 4.49529C10.3127 5.67167 13.1316 5.97368 13.1316 5.97368C13.1316 5.97368 10.3127 6.2757 9.13629 7.45208C7.95991 8.62846 7.6579 11.4474 7.6579 11.4474C7.6579 11.4474 7.35589 8.62846 6.17951 7.45208C5.00313 6.2757 2.18422 5.97368 2.18422 5.97368C2.18422 5.97368 5.00313 5.67167 6.17951 4.49529C7.35589 3.31891 7.6579 0.5 7.6579 0.5ZM19.9737 4.60526C19.9737 4.60526 20.4267 8.83363 22.1913 10.5982C23.9558 12.3628 28.1842 12.8158 28.1842 12.8158C28.1842 12.8158 23.9558 13.2688 22.1913 15.0334C20.4267 16.7979 19.9737 21.0263 19.9737 21.0263C19.9737 21.0263 19.5207 16.7979 17.7561 15.0334C15.9915 13.2688 11.7632 12.8158 11.7632 12.8158C11.7632 12.8158 15.9915 12.3628 17.7561 10.5982C19.5207 8.83363 19.9737 4.60526 19.9737 4.60526ZM9.50589 17.8099C8.03542 16.3394 7.6579 12.8158 7.6579 12.8158C7.6579 12.8158 7.28039 16.3394 5.80991 17.8099C4.33944 19.2804 0.815796 19.6579 0.815796 19.6579C0.815796 19.6579 4.33944 20.0354 5.80991 21.5059C7.28039 22.9764 7.6579 26.5 7.6579 26.5C7.6579 26.5 8.03542 22.9764 9.50589 21.5059C10.9764 20.0354 14.5 19.6579 14.5 19.6579C14.5 19.6579 10.9764 19.2804 9.50589 17.8099Z"
                    fill="url(#paint0_linear_896_15821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_896_15821"
                      x1="0.815796"
                      y1="0.5"
                      x2="29.9596"
                      y2="3.95003"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF2B48" />
                      <stop offset="1" stopColor="#FF7C2B" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.1579 0.5C7.1579 0.5 7.45991 3.31891 8.63629 4.49529C9.81267 5.67167 12.6316 5.97368 12.6316 5.97368C12.6316 5.97368 9.81267 6.2757 8.63629 7.45208C7.45991 8.62846 7.1579 11.4474 7.1579 11.4474C7.1579 11.4474 6.85589 8.62846 5.67951 7.45208C4.50313 6.2757 1.68422 5.97368 1.68422 5.97368C1.68422 5.97368 4.50313 5.67167 5.67951 4.49529C6.85589 3.31891 7.1579 0.5 7.1579 0.5ZM19.4737 4.60526C19.4737 4.60526 19.9267 8.83363 21.6913 10.5982C23.4558 12.3628 27.6842 12.8158 27.6842 12.8158C27.6842 12.8158 23.4558 13.2688 21.6913 15.0334C19.9267 16.7979 19.4737 21.0263 19.4737 21.0263C19.4737 21.0263 19.0207 16.7979 17.2561 15.0334C15.4915 13.2688 11.2632 12.8158 11.2632 12.8158C11.2632 12.8158 15.4915 12.3628 17.2561 10.5982C19.0207 8.83363 19.4737 4.60526 19.4737 4.60526ZM9.00589 17.8099C7.53542 16.3394 7.1579 12.8158 7.1579 12.8158C7.1579 12.8158 6.78039 16.3394 5.30991 17.8099C3.83944 19.2804 0.315796 19.6579 0.315796 19.6579C0.315796 19.6579 3.83944 20.0354 5.30991 21.5059C6.78039 22.9764 7.1579 26.5 7.1579 26.5C7.1579 26.5 7.53542 22.9764 9.00589 21.5059C10.4764 20.0354 14 19.6579 14 19.6579C14 19.6579 10.4764 19.2804 9.00589 17.8099Z"
                    fill="#CACACA"
                  />
                </svg>
              )}
              <div
                onClick={showOpenSourceModel}
                className="text-neutral-400 text-[24px] font-medium urbanist"
              >
                UI/ UX Design{" "}
              </div>
              {activeTab === 1 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] w-[260px] cursor-pointer justify-center items-center gap-2 flex ${
                activeTab === 2 ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              {" "}
              {activeTab === 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="27"
                  viewBox="0 0 29 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.6579 0.5C7.6579 0.5 7.95991 3.31891 9.13629 4.49529C10.3127 5.67167 13.1316 5.97368 13.1316 5.97368C13.1316 5.97368 10.3127 6.2757 9.13629 7.45208C7.95991 8.62846 7.6579 11.4474 7.6579 11.4474C7.6579 11.4474 7.35589 8.62846 6.17951 7.45208C5.00313 6.2757 2.18422 5.97368 2.18422 5.97368C2.18422 5.97368 5.00313 5.67167 6.17951 4.49529C7.35589 3.31891 7.6579 0.5 7.6579 0.5ZM19.9737 4.60526C19.9737 4.60526 20.4267 8.83363 22.1913 10.5982C23.9558 12.3628 28.1842 12.8158 28.1842 12.8158C28.1842 12.8158 23.9558 13.2688 22.1913 15.0334C20.4267 16.7979 19.9737 21.0263 19.9737 21.0263C19.9737 21.0263 19.5207 16.7979 17.7561 15.0334C15.9915 13.2688 11.7632 12.8158 11.7632 12.8158C11.7632 12.8158 15.9915 12.3628 17.7561 10.5982C19.5207 8.83363 19.9737 4.60526 19.9737 4.60526ZM9.50589 17.8099C8.03542 16.3394 7.6579 12.8158 7.6579 12.8158C7.6579 12.8158 7.28039 16.3394 5.80991 17.8099C4.33944 19.2804 0.815796 19.6579 0.815796 19.6579C0.815796 19.6579 4.33944 20.0354 5.80991 21.5059C7.28039 22.9764 7.6579 26.5 7.6579 26.5C7.6579 26.5 8.03542 22.9764 9.50589 21.5059C10.9764 20.0354 14.5 19.6579 14.5 19.6579C14.5 19.6579 10.9764 19.2804 9.50589 17.8099Z"
                    fill="url(#paint0_linear_896_15821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_896_15821"
                      x1="0.815796"
                      y1="0.5"
                      x2="29.9596"
                      y2="3.95003"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF2B48" />
                      <stop offset="1" stopColor="#FF7C2B" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.1579 0.5C7.1579 0.5 7.45991 3.31891 8.63629 4.49529C9.81267 5.67167 12.6316 5.97368 12.6316 5.97368C12.6316 5.97368 9.81267 6.2757 8.63629 7.45208C7.45991 8.62846 7.1579 11.4474 7.1579 11.4474C7.1579 11.4474 6.85589 8.62846 5.67951 7.45208C4.50313 6.2757 1.68422 5.97368 1.68422 5.97368C1.68422 5.97368 4.50313 5.67167 5.67951 4.49529C6.85589 3.31891 7.1579 0.5 7.1579 0.5ZM19.4737 4.60526C19.4737 4.60526 19.9267 8.83363 21.6913 10.5982C23.4558 12.3628 27.6842 12.8158 27.6842 12.8158C27.6842 12.8158 23.4558 13.2688 21.6913 15.0334C19.9267 16.7979 19.4737 21.0263 19.4737 21.0263C19.4737 21.0263 19.0207 16.7979 17.2561 15.0334C15.4915 13.2688 11.2632 12.8158 11.2632 12.8158C11.2632 12.8158 15.4915 12.3628 17.2561 10.5982C19.0207 8.83363 19.4737 4.60526 19.4737 4.60526ZM9.00589 17.8099C7.53542 16.3394 7.1579 12.8158 7.1579 12.8158C7.1579 12.8158 6.78039 16.3394 5.30991 17.8099C3.83944 19.2804 0.315796 19.6579 0.315796 19.6579C0.315796 19.6579 3.83944 20.0354 5.30991 21.5059C6.78039 22.9764 7.1579 26.5 7.1579 26.5C7.1579 26.5 7.53542 22.9764 9.00589 21.5059C10.4764 20.0354 14 19.6579 14 19.6579C14 19.6579 10.4764 19.2804 9.00589 17.8099Z"
                    fill="#CACACA"
                  />
                </svg>
              )}
              <div
                onClick={showFineTuningServises}
                className="text-neutral-400 text-[24px] font-medium urbanist"
              >
                Visual Design{" "}
              </div>
              {activeTab === 2 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] w-[260px] cursor-pointer justify-center items-center gap-2 flex ${
                activeTab === 3 ? "active-tab" : ""
              }`}
              onClick={() => handleTabClick(3)}
            >
              {" "}
              {activeTab === 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="27"
                  viewBox="0 0 29 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.6579 0.5C7.6579 0.5 7.95991 3.31891 9.13629 4.49529C10.3127 5.67167 13.1316 5.97368 13.1316 5.97368C13.1316 5.97368 10.3127 6.2757 9.13629 7.45208C7.95991 8.62846 7.6579 11.4474 7.6579 11.4474C7.6579 11.4474 7.35589 8.62846 6.17951 7.45208C5.00313 6.2757 2.18422 5.97368 2.18422 5.97368C2.18422 5.97368 5.00313 5.67167 6.17951 4.49529C7.35589 3.31891 7.6579 0.5 7.6579 0.5ZM19.9737 4.60526C19.9737 4.60526 20.4267 8.83363 22.1913 10.5982C23.9558 12.3628 28.1842 12.8158 28.1842 12.8158C28.1842 12.8158 23.9558 13.2688 22.1913 15.0334C20.4267 16.7979 19.9737 21.0263 19.9737 21.0263C19.9737 21.0263 19.5207 16.7979 17.7561 15.0334C15.9915 13.2688 11.7632 12.8158 11.7632 12.8158C11.7632 12.8158 15.9915 12.3628 17.7561 10.5982C19.5207 8.83363 19.9737 4.60526 19.9737 4.60526ZM9.50589 17.8099C8.03542 16.3394 7.6579 12.8158 7.6579 12.8158C7.6579 12.8158 7.28039 16.3394 5.80991 17.8099C4.33944 19.2804 0.815796 19.6579 0.815796 19.6579C0.815796 19.6579 4.33944 20.0354 5.80991 21.5059C7.28039 22.9764 7.6579 26.5 7.6579 26.5C7.6579 26.5 8.03542 22.9764 9.50589 21.5059C10.9764 20.0354 14.5 19.6579 14.5 19.6579C14.5 19.6579 10.9764 19.2804 9.50589 17.8099Z"
                    fill="url(#paint0_linear_896_15821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_896_15821"
                      x1="0.815796"
                      y1="0.5"
                      x2="29.9596"
                      y2="3.95003"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF2B48" />
                      <stop offset="1" stopColor="#FF7C2B" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="27"
                  viewBox="0 0 28 27"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.1579 0.5C7.1579 0.5 7.45991 3.31891 8.63629 4.49529C9.81267 5.67167 12.6316 5.97368 12.6316 5.97368C12.6316 5.97368 9.81267 6.2757 8.63629 7.45208C7.45991 8.62846 7.1579 11.4474 7.1579 11.4474C7.1579 11.4474 6.85589 8.62846 5.67951 7.45208C4.50313 6.2757 1.68422 5.97368 1.68422 5.97368C1.68422 5.97368 4.50313 5.67167 5.67951 4.49529C6.85589 3.31891 7.1579 0.5 7.1579 0.5ZM19.4737 4.60526C19.4737 4.60526 19.9267 8.83363 21.6913 10.5982C23.4558 12.3628 27.6842 12.8158 27.6842 12.8158C27.6842 12.8158 23.4558 13.2688 21.6913 15.0334C19.9267 16.7979 19.4737 21.0263 19.4737 21.0263C19.4737 21.0263 19.0207 16.7979 17.2561 15.0334C15.4915 13.2688 11.2632 12.8158 11.2632 12.8158C11.2632 12.8158 15.4915 12.3628 17.2561 10.5982C19.0207 8.83363 19.4737 4.60526 19.4737 4.60526ZM9.00589 17.8099C7.53542 16.3394 7.1579 12.8158 7.1579 12.8158C7.1579 12.8158 6.78039 16.3394 5.30991 17.8099C3.83944 19.2804 0.315796 19.6579 0.315796 19.6579C0.315796 19.6579 3.83944 20.0354 5.30991 21.5059C6.78039 22.9764 7.1579 26.5 7.1579 26.5C7.1579 26.5 7.53542 22.9764 9.00589 21.5059C10.4764 20.0354 14 19.6579 14 19.6579C14 19.6579 10.4764 19.2804 9.00589 17.8099Z"
                    fill="#CACACA"
                  />
                </svg>
              )}
              <div
                onClick={showDataServises}
                className="text-neutral-400 text-[24px] font-medium urbanist"
              >
                Brand Identity{" "}
              </div>
              {activeTab === 3 ? (
                <div className="w-[320px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
          </div>
          <div
            className="w-[1252px] h-1 bg-zinc-600 border-width-servises
           justify-start items-center inline-flex"
          ></div>
        </div>
        {isChatGPTIntegration && (
          <div
            data-aos="fade-up"
            className="flex flex-row gap-32 chapgpt-content responsiveServises mt-16"
          >
            <div className="flex flex-col padding-manage">
              <div className=" flex-col w-[800px] responsive-content-aiservises justify-start items-start gap-8 inline-flex">
                <div className="flex-col w-[580px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Don’t miss the best UX Consulting with us{" "}
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Our goal is to enhance the overall user experience of your
                    digital platform. Through a meticulous process of research,
                    design, testing, and delivery, we aim to understand your
                    target audiences needs, behaviors, and pain points to craft
                    intuitive and user-centric solutions.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why do we need a good UX?{" "}
                  </div>
                  <div
                    style={{ gap: "19px" }}
                    className="flex-col justify-start responsive-wrap  chapgpt-servises-gap items-start gap-8 flex"
                  >
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Customer Satisfaction{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Increased User Engagement{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className="justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white text-base ai-servise-data font-medium urbanist">
                          Increased Conversion Rates{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base  ai-servise-data font-medium urbanist">
                          Competitive Advantage{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Brand Loyalty{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Cost Savings{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="consult-us-button">
                  <Link href="/contact-us">
                    <div className="h-12 w-[232px] px-10 mt-8 consult-us-button  bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 inline-flex">
                      <div className="text-white text-xl font-light urbanist">
                        Get in Touch
                      </div>
                      <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.52861 3.52858C5.78896 3.26823 6.21107 3.26823 6.47141 3.52858L10.4714 7.52858C10.7318 7.78892 10.7318 8.21103 10.4714 8.47138L6.47141 12.4714C6.21107 12.7317 5.78896 12.7317 5.52861 12.4714C5.26826 12.211 5.26826 11.7889 5.52861 11.5286L9.0572 7.99998L5.52861 4.47138C5.26826 4.21103 5.26826 3.78892 5.52861 3.52858Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col justify-center   items-center gap-10 inline-flex">
              <Image src={UiUxServise} className="" alt="UX Consulting image" />
            </div>
          </div>
        )}

        {isOpenSourceModel && (
          <div
            data-aos="fade-up"
            className="flex flex-row gap-32 chapgpt-content responsiveServises mt-16"
          >
            <div className="flex flex-col padding-manage">
              <div className=" flex-col w-[800px] responsive-content-aiservises justify-start items-start gap-8 inline-flex">
                <div className="flex-col w-[580px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Get the engaging UI/ UX design{" "}
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    We create an engaging UI/UX design that captivates users and
                    enhances their experience. By understanding your audience
                    and simplifying navigation, you ensure intuitive usability.
                    Implementing responsive design and visual hierarchy ensures
                    consistency across devices and prioritizes content
                    effectively.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why do we need a good UX?{" "}
                  </div>
                  <div
                    style={{ gap: "19px" }}
                    className="flex-col justify-start responsive-wrap  chapgpt-servises-gap items-start gap-8 flex"
                  >
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Better Customer Engagement{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Happy User Flow{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className="justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white text-base ai-servise-data font-medium urbanist">
                          Increased Conversion Rates{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base  ai-servise-data font-medium urbanist">
                          Better User Retention{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Customer Loyalty{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Cost Savings{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="consult-us-button">
                  <Link href="/contact-us">
                    <div className="h-12 w-[232px] px-10 mt-8 consult-us-button  bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 inline-flex">
                      <div className="text-white text-xl font-light urbanist">
                        Get in Touch
                      </div>
                      <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.52861 3.52858C5.78896 3.26823 6.21107 3.26823 6.47141 3.52858L10.4714 7.52858C10.7318 7.78892 10.7318 8.21103 10.4714 8.47138L6.47141 12.4714C6.21107 12.7317 5.78896 12.7317 5.52861 12.4714C5.26826 12.211 5.26826 11.7889 5.52861 11.5286L9.0572 7.99998L5.52861 4.47138C5.26826 4.21103 5.26826 3.78892 5.52861 3.52858Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col justify-center items-center gap-10 inline-flex">
              <Image src={UiUxDesign} alt="UI/ UX Design image" />
            </div>
          </div>
        )}

        {isFineTuningServises && (
          <div
            data-aos="fade-up"
            className="flex flex-row gap-32 chapgpt-content responsiveServises mt-16"
          >
            <div className="flex flex-col padding-manage">
              <div className=" flex-col w-[800px] responsive-content-aiservises justify-start items-start gap-8 inline-flex">
                <div className="flex-col w-[580px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Best visual design for your business needs{" "}
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Elevate your business with the best visual design tailored
                    to meet your specific needs. Our expertly crafted designs
                    blend creativity with functionality, ensuring a visually
                    stunning and impactful representation of your brand. From
                    captivating graphics to sleek interfaces, we tailor each
                    element to resonate with your target audience and elevate
                    your brand identity.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why do we need a good UX?{" "}
                  </div>
                  <div
                    style={{ gap: "19px" }}
                    className="flex-col justify-start responsive-wrap  chapgpt-servises-gap items-start gap-8 flex"
                  >
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Better First Impression{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Enhances the Look & Feel{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className="justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white text-base ai-servise-data font-medium urbanist">
                          Increased Conversion Rates{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base  ai-servise-data font-medium urbanist">
                          Competitive Advantage{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Brand Loyalty{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Brand Recognition{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="consult-us-button">
                  <Link href="/contact-us">
                    <div className="h-12 w-[232px] px-10 mt-8 consult-us-button  bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 inline-flex">
                      <div className="text-white text-xl font-light urbanist">
                        Get in Touch
                      </div>
                      <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.52861 3.52858C5.78896 3.26823 6.21107 3.26823 6.47141 3.52858L10.4714 7.52858C10.7318 7.78892 10.7318 8.21103 10.4714 8.47138L6.47141 12.4714C6.21107 12.7317 5.78896 12.7317 5.52861 12.4714C5.26826 12.211 5.26826 11.7889 5.52861 11.5286L9.0572 7.99998L5.52861 4.47138C5.26826 4.21103 5.26826 3.78892 5.52861 3.52858Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col justify-center items-center gap-10 inline-flex">
              <Image src={VisualDesign} alt="Visual Design image" />
            </div>
          </div>
        )}
        {isDataServises && (
          <div
            data-aos="fade-up"
            className="flex flex-row gap-32 chapgpt-content responsiveServises mt-16"
          >
            <div className="flex flex-col padding-manage">
              <div className=" flex-col w-[800px] responsive-content-aiservises justify-start items-start gap-8 inline-flex">
                <div className="flex-col w-[580px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Create a stronger brand identity with us{" "}
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Empower your brand with a stronger identity alongside us. We
                    specialize in crafting compelling visuals and strategic
                    messaging that resonate with your audience. Through
                    thoughtful design and cohesive branding elements, we help
                    you stand out in today's competitive landscape.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why do we need a good UX?{" "}
                  </div>
                  <div
                    style={{ gap: "19px" }}
                    className="flex-col justify-start responsive-wrap  chapgpt-servises-gap items-start gap-8 flex"
                  >
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Customer Trust & Credibility{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Consistency & Cohesion{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className="justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white text-base ai-servise-data font-medium urbanist">
                          Emotional Connection{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base  ai-servise-data font-medium urbanist">
                          Competitive Advantage{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ gap: "19px" }}
                      className=" justify-start flex-wrap items-start gap-8 inline-flex"
                    >
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="w-[286px] text-white ai-servise-data text-base font-medium urbanist">
                          Recognition & Recall{" "}
                        </div>
                      </div>
                      <div className="justify-start items-center gap-4 flex">
                        <div className="w-6 h-6 relative origin-top-left ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_896_15853)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 18.6264 18.6264 24 12 24C5.37364 24 0 18.6264 0 12C0 5.37364 5.37364 0 12 0C18.6264 0 24 5.37364 24 12ZM11.8991 8.0262L14.6555 10.7826H5.68252C5.33367 10.7826 5.04255 11.0737 5.04255 11.4226V12.5774C5.04255 12.9263 5.33008 13.2174 5.68252 13.2174H14.6555L11.8991 15.9737C11.6499 16.223 11.6499 16.6295 11.8991 16.8788L12.7157 17.6954C12.9649 17.9445 13.3745 17.9416 13.6208 17.6954L18.7727 12.5434C18.9185 12.3976 18.978 12.1934 18.951 12C18.978 11.8066 18.9185 11.6023 18.7727 11.4565L13.6208 6.30453C13.3745 6.0583 12.9649 6.05537 12.7157 6.30453L11.8991 7.1211C11.6499 7.37036 11.6499 7.77695 11.8991 8.0262Z"
                                fill="#FBBC05"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_896_15853">
                                <rect
                                  width="24"
                                  height="24"
                                  fill="white"
                                  transform="matrix(0 -1 1 0 0 24)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <div className="text-white text-base ai-servise-data font-medium urbanist">
                          Cost Savings{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="consult-us-button">
                  <Link href="/contact-us">
                    <div className="h-12 w-[232px] px-10 mt-8 consult-us-button  bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 inline-flex">
                      <div className="text-white text-xl font-light urbanist">
                        Get in Touch
                      </div>
                      <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 relative">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.52861 3.52858C5.78896 3.26823 6.21107 3.26823 6.47141 3.52858L10.4714 7.52858C10.7318 7.78892 10.7318 8.21103 10.4714 8.47138L6.47141 12.4714C6.21107 12.7317 5.78896 12.7317 5.52861 12.4714C5.26826 12.211 5.26826 11.7889 5.52861 11.5286L9.0572 7.99998L5.52861 4.47138C5.26826 4.21103 5.26826 3.78892 5.52861 3.52858Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col justify-center items-center gap-10 inline-flex">
              <Image src={BrandIdentity} alt="Brand Identity image" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UiUxServises;
