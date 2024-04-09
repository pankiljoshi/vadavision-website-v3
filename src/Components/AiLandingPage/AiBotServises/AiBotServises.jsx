"use client";

import Aos from "aos";
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import Link from "next/link";
const AiBotServises = () => {
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
      <div className="w-full  py-14 px-20  overflow-x-hidden bg-zinc-950 padding-industies bg-opacity-90 bg-ai-bot-servises">
        <div
          data-aos="fade-right"
          className="flex-col justify-start items-start gap-14 inline-flex"
        >
          <div className="">
            <span className="text-neutral-400 text-[40px] font-change-1 font-medium urbanist">
              Our amazing
              <br />
            </span>
            <span className="text-pink-600 text-[56px] gradient-heading font-change-2 font-bold urbanist">
              AI Bot Services
            </span>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="max-w-screen overflow-x-auto hide-scrollbar"
        >
          <div className="  justify-start items-start gap-14  relative  mt-10 inline-flex whitespace-nowrap">
            <div
              className={`h-[29px] cursor-pointer justify-center  items-center gap-2 flex ${
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
                ChatGPT Integration
              </div>
              {activeTab === 0 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] cursor-pointer justify-center items-center gap-2 flex ${
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
                Open Source Models
              </div>
              {activeTab === 1 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] cursor-pointer justify-center items-center gap-2 flex ${
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
                Fine-Tuning Services
              </div>
              {activeTab === 2 ? (
                <div className="w-[300px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
            <div
              className={`h-[29px] cursor-pointer justify-center items-center gap-2 flex ${
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
                Data Preparation Services
              </div>
              {activeTab === 3 ? (
                <div className="w-[320px] absolute top-12 bg-gradient-to-r from-red-500 to-orange-500 h-[4px]"></div>
              ) : (
                <div className="w-[300px] absolute top-12 bg-zinc-600 h-[4px]"></div>
              )}{" "}
            </div>
          </div>
          <div className="w-[1252px] h-1 bg-zinc-600  justify-start items-center inline-flex"></div>
        </div>
        {isChatGPTIntegration && (
          <div
            data-aos="fade-up"
            className="flex flex-row gap-32 chapgpt-content responsiveServises mt-16"
          >
            <div className="flex flex-col padding-manage">
              <div className=" flex-col w-[800px] responsive-content-aiservises justify-start items-start gap-8 inline-flex">
                <div className="flex-col w-[550px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Integrate ChatGPT to your application
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Integrating ChatGPT for natural language understanding (NLU)
                    and conversation generation involves leveraging its powerful
                    language processing capabilities to comprehend user inputs
                    and generate meaningful responses. However, the quality of
                    the data used during integration is crucial for ensuring the
                    effectiveness and accuracy of these processes.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why we need Quality Data?
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
                          Training the Model
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
                          Conversation Generation
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
                          Error Correction and Handling
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
                          Avoiding Bias and Misinformation
                        </div>
                      </div>
                    </div>
                    <div className="justify-start flex-wrap items-start gap-ai-servise  gap-7 inline-flex">
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
                          Natural Language Understanding (NLU)
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
                          User Experience and Satisfaction
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
              <div className="w-[150px] h-[150px] relative bg-teal-600 rounded-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="150"
                  viewBox="0 0 151 150"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="150"
                    height="150"
                    rx="30"
                    fill="#10A37F"
                  />
                  <path
                    d="M118.908 65.9268C120.044 62.5603 120.438 58.9935 120.064 55.4648C119.689 51.936 118.555 48.5269 116.738 45.4656C114.043 40.8351 109.928 37.169 104.985 34.9963C100.042 32.8235 94.5266 32.2565 89.2354 33.377C86.8489 30.7233 83.9156 28.6031 80.6314 27.1585C77.3472 25.7139 73.7883 24.9782 70.1927 25.0005C64.7832 24.9876 59.5092 26.6701 55.1312 29.8054C50.7532 32.9406 47.4974 37.3667 45.8332 42.4454C42.3092 43.1572 38.9799 44.6035 36.0682 46.6876C33.1565 48.7718 30.7297 51.4455 28.9502 54.53C26.2342 59.1478 25.0749 64.497 25.6394 69.807C26.2039 75.1168 28.463 80.1123 32.091 84.0733C30.955 87.4398 30.561 91.0065 30.9352 94.5353C31.3094 98.064 32.4432 101.473 34.2608 104.535C36.9555 109.165 41.0713 112.831 46.0144 115.003C50.9574 117.176 56.4723 117.743 61.7632 116.623C64.1497 119.277 67.0833 121.397 70.3673 122.842C73.6515 124.286 77.2104 125.022 80.806 125C86.2183 125.014 91.495 123.33 95.8745 120.193C100.254 117.056 103.511 112.627 105.174 107.545C108.697 106.833 112.027 105.387 114.939 103.303C117.85 101.219 120.277 98.5445 122.057 95.46C124.769 90.8428 125.926 85.4948 125.36 80.187C124.794 74.8793 122.535 69.886 118.908 65.9268ZM80.8141 118.462C76.3712 118.469 72.0679 116.933 68.6562 114.125C68.81 114.043 69.0799 113.897 69.2557 113.79L89.4353 102.289C89.9418 102.005 90.3624 101.593 90.6538 101.095C90.9454 100.597 91.0972 100.031 91.0937 99.4563V71.3855L99.6232 76.245C99.6678 76.267 99.7063 76.2995 99.7354 76.3398C99.7643 76.38 99.7826 76.4268 99.7889 76.4755V99.7223C99.7826 104.688 97.7819 109.448 94.2253 112.96C90.6687 116.473 85.8461 118.452 80.8141 118.462ZM40.0071 101.266C37.7817 97.472 36.9796 93.0268 37.7413 88.708C37.8912 88.7968 38.1529 88.9545 38.3407 89.061L58.5203 100.562C59.0233 100.852 59.5954 101.005 60.1779 101.005C60.7601 101.005 61.3322 100.852 61.8352 100.562L86.4724 86.5258V96.2448C86.4752 96.2943 86.4655 96.344 86.4443 96.389C86.423 96.434 86.3908 96.4733 86.3505 96.503L65.951 108.124C61.5876 110.604 56.4054 111.274 51.5417 109.989C46.6778 108.703 42.5296 105.566 40.0071 101.266ZM34.6984 57.7985C36.9141 53.9995 40.4138 51.091 44.5844 49.5818C44.5844 49.7533 44.5745 50.057 44.5745 50.2678V73.27C44.5709 73.8445 44.7225 74.4095 45.0136 74.9073C45.3047 75.4048 45.7248 75.8168 46.2308 76.101L70.8679 90.1355L62.3386 94.9948C62.2966 95.0223 62.2482 95.0388 62.198 95.0433C62.1479 95.0478 62.0972 95.04 62.0508 95.0205L41.6494 83.3893C37.2936 80.9003 34.1159 76.8088 32.8128 72.0115C31.5098 67.2145 32.1879 62.1033 34.6984 57.7985ZM104.776 73.889L80.1386 59.8528L88.6681 54.9953C88.7102 54.968 88.7586 54.9513 88.8087 54.9468C88.8589 54.9423 88.9093 54.9503 88.9557 54.9698L109.357 66.591C112.483 68.3725 115.029 70.9955 116.699 74.1533C118.368 77.311 119.091 80.8725 118.783 84.421C118.475 87.9695 117.149 91.358 114.96 94.1898C112.771 97.0215 109.809 99.1793 106.422 100.41C106.422 100.237 106.422 99.9333 106.422 99.7223V76.72C106.427 76.1465 106.277 75.582 105.988 75.0845C105.698 74.587 105.28 74.1745 104.776 73.889ZM113.265 61.282C113.116 61.1913 112.854 61.0355 112.666 60.9293L92.4862 49.428C91.9832 49.1385 91.4114 48.9858 90.8289 48.9858C90.2466 48.9858 89.6745 49.1385 89.1716 49.428L64.5344 63.4645V53.7455C64.5316 53.6958 64.5412 53.6463 64.5625 53.6013C64.5838 53.5563 64.616 53.517 64.6562 53.4873L85.0558 41.8756C88.1809 40.0976 91.7547 39.2344 95.3589 39.3871C98.9632 39.5397 102.449 40.7019 105.408 42.7377C108.367 44.7735 110.678 47.5986 112.069 50.8828C113.461 54.1668 113.876 57.7738 113.265 61.282ZM59.8971 78.6048L51.3656 73.7453C51.321 73.7233 51.2822 73.6908 51.2533 73.6505C51.2245 73.6103 51.206 73.5635 51.1999 73.5145V50.2678C51.2022 46.7074 52.2324 43.2212 54.1697 40.2174C56.1072 37.2136 58.8717 34.8165 62.1397 33.3066C65.4077 31.7967 69.0439 31.2366 72.6228 31.6918C76.2019 32.1469 79.5753 33.5985 82.3485 35.8767C82.1947 35.9595 81.9269 36.1054 81.749 36.2118L61.5694 47.7129C61.0629 47.997 60.6426 48.4089 60.3509 48.9065C60.0596 49.404 59.9078 49.9693 59.9111 50.5438L59.8971 78.6048ZM64.5303 68.7478L75.5034 62.4945L86.4762 68.7438V81.2463L75.5034 87.4958L64.5303 81.2463V68.7478Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white text-[40px] font-bold chatgpt raleway">
                ChatGPT
              </div>
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
                <div className="flex-col w-[550px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Integrate ChatGPT to your application
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Integrating ChatGPT for natural language understanding (NLU)
                    and conversation generation involves leveraging its powerful
                    language processing capabilities to comprehend user inputs
                    and generate meaningful responses. However, the quality of
                    the data used during integration is crucial for ensuring the
                    effectiveness and accuracy of these processes.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why we need Quality Data?
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
                          Training the Model
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
                          Conversation Generation
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
                          Error Correction and Handling
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
                          Avoiding Bias and Misinformation
                        </div>
                      </div>
                    </div>
                    <div className="justify-start flex-wrap items-start gap-ai-servise  gap-7 inline-flex">
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
                          Natural Language Understanding (NLU)
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
                          User Experience and Satisfaction
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
              <div className="w-[150px] h-[150px] relative bg-teal-600 rounded-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="150"
                  viewBox="0 0 151 150"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="150"
                    height="150"
                    rx="30"
                    fill="#10A37F"
                  />
                  <path
                    d="M118.908 65.9268C120.044 62.5603 120.438 58.9935 120.064 55.4648C119.689 51.936 118.555 48.5269 116.738 45.4656C114.043 40.8351 109.928 37.169 104.985 34.9963C100.042 32.8235 94.5266 32.2565 89.2354 33.377C86.8489 30.7233 83.9156 28.6031 80.6314 27.1585C77.3472 25.7139 73.7883 24.9782 70.1927 25.0005C64.7832 24.9876 59.5092 26.6701 55.1312 29.8054C50.7532 32.9406 47.4974 37.3667 45.8332 42.4454C42.3092 43.1572 38.9799 44.6035 36.0682 46.6876C33.1565 48.7718 30.7297 51.4455 28.9502 54.53C26.2342 59.1478 25.0749 64.497 25.6394 69.807C26.2039 75.1168 28.463 80.1123 32.091 84.0733C30.955 87.4398 30.561 91.0065 30.9352 94.5353C31.3094 98.064 32.4432 101.473 34.2608 104.535C36.9555 109.165 41.0713 112.831 46.0144 115.003C50.9574 117.176 56.4723 117.743 61.7632 116.623C64.1497 119.277 67.0833 121.397 70.3673 122.842C73.6515 124.286 77.2104 125.022 80.806 125C86.2183 125.014 91.495 123.33 95.8745 120.193C100.254 117.056 103.511 112.627 105.174 107.545C108.697 106.833 112.027 105.387 114.939 103.303C117.85 101.219 120.277 98.5445 122.057 95.46C124.769 90.8428 125.926 85.4948 125.36 80.187C124.794 74.8793 122.535 69.886 118.908 65.9268ZM80.8141 118.462C76.3712 118.469 72.0679 116.933 68.6562 114.125C68.81 114.043 69.0799 113.897 69.2557 113.79L89.4353 102.289C89.9418 102.005 90.3624 101.593 90.6538 101.095C90.9454 100.597 91.0972 100.031 91.0937 99.4563V71.3855L99.6232 76.245C99.6678 76.267 99.7063 76.2995 99.7354 76.3398C99.7643 76.38 99.7826 76.4268 99.7889 76.4755V99.7223C99.7826 104.688 97.7819 109.448 94.2253 112.96C90.6687 116.473 85.8461 118.452 80.8141 118.462ZM40.0071 101.266C37.7817 97.472 36.9796 93.0268 37.7413 88.708C37.8912 88.7968 38.1529 88.9545 38.3407 89.061L58.5203 100.562C59.0233 100.852 59.5954 101.005 60.1779 101.005C60.7601 101.005 61.3322 100.852 61.8352 100.562L86.4724 86.5258V96.2448C86.4752 96.2943 86.4655 96.344 86.4443 96.389C86.423 96.434 86.3908 96.4733 86.3505 96.503L65.951 108.124C61.5876 110.604 56.4054 111.274 51.5417 109.989C46.6778 108.703 42.5296 105.566 40.0071 101.266ZM34.6984 57.7985C36.9141 53.9995 40.4138 51.091 44.5844 49.5818C44.5844 49.7533 44.5745 50.057 44.5745 50.2678V73.27C44.5709 73.8445 44.7225 74.4095 45.0136 74.9073C45.3047 75.4048 45.7248 75.8168 46.2308 76.101L70.8679 90.1355L62.3386 94.9948C62.2966 95.0223 62.2482 95.0388 62.198 95.0433C62.1479 95.0478 62.0972 95.04 62.0508 95.0205L41.6494 83.3893C37.2936 80.9003 34.1159 76.8088 32.8128 72.0115C31.5098 67.2145 32.1879 62.1033 34.6984 57.7985ZM104.776 73.889L80.1386 59.8528L88.6681 54.9953C88.7102 54.968 88.7586 54.9513 88.8087 54.9468C88.8589 54.9423 88.9093 54.9503 88.9557 54.9698L109.357 66.591C112.483 68.3725 115.029 70.9955 116.699 74.1533C118.368 77.311 119.091 80.8725 118.783 84.421C118.475 87.9695 117.149 91.358 114.96 94.1898C112.771 97.0215 109.809 99.1793 106.422 100.41C106.422 100.237 106.422 99.9333 106.422 99.7223V76.72C106.427 76.1465 106.277 75.582 105.988 75.0845C105.698 74.587 105.28 74.1745 104.776 73.889ZM113.265 61.282C113.116 61.1913 112.854 61.0355 112.666 60.9293L92.4862 49.428C91.9832 49.1385 91.4114 48.9858 90.8289 48.9858C90.2466 48.9858 89.6745 49.1385 89.1716 49.428L64.5344 63.4645V53.7455C64.5316 53.6958 64.5412 53.6463 64.5625 53.6013C64.5838 53.5563 64.616 53.517 64.6562 53.4873L85.0558 41.8756C88.1809 40.0976 91.7547 39.2344 95.3589 39.3871C98.9632 39.5397 102.449 40.7019 105.408 42.7377C108.367 44.7735 110.678 47.5986 112.069 50.8828C113.461 54.1668 113.876 57.7738 113.265 61.282ZM59.8971 78.6048L51.3656 73.7453C51.321 73.7233 51.2822 73.6908 51.2533 73.6505C51.2245 73.6103 51.206 73.5635 51.1999 73.5145V50.2678C51.2022 46.7074 52.2324 43.2212 54.1697 40.2174C56.1072 37.2136 58.8717 34.8165 62.1397 33.3066C65.4077 31.7967 69.0439 31.2366 72.6228 31.6918C76.2019 32.1469 79.5753 33.5985 82.3485 35.8767C82.1947 35.9595 81.9269 36.1054 81.749 36.2118L61.5694 47.7129C61.0629 47.997 60.6426 48.4089 60.3509 48.9065C60.0596 49.404 59.9078 49.9693 59.9111 50.5438L59.8971 78.6048ZM64.5303 68.7478L75.5034 62.4945L86.4762 68.7438V81.2463L75.5034 87.4958L64.5303 81.2463V68.7478Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white text-[40px] font-bold chatgpt raleway">
                ChatGPT
              </div>
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
                <div className="flex-col w-[550px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Integrate ChatGPT to your application
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Integrating ChatGPT for natural language understanding (NLU)
                    and conversation generation involves leveraging its powerful
                    language processing capabilities to comprehend user inputs
                    and generate meaningful responses. However, the quality of
                    the data used during integration is crucial for ensuring the
                    effectiveness and accuracy of these processes.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why we need Quality Data?
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
                          Training the Model
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
                          Conversation Generation
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
                          Error Correction and Handling
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
                          Avoiding Bias and Misinformation
                        </div>
                      </div>
                    </div>
                    <div className="justify-start flex-wrap items-start gap-ai-servise  gap-7 inline-flex">
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
                          Natural Language Understanding (NLU)
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
                          User Experience and Satisfaction
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
              <div className="w-[150px] h-[150px] relative bg-teal-600 rounded-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="150"
                  viewBox="0 0 151 150"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="150"
                    height="150"
                    rx="30"
                    fill="#10A37F"
                  />
                  <path
                    d="M118.908 65.9268C120.044 62.5603 120.438 58.9935 120.064 55.4648C119.689 51.936 118.555 48.5269 116.738 45.4656C114.043 40.8351 109.928 37.169 104.985 34.9963C100.042 32.8235 94.5266 32.2565 89.2354 33.377C86.8489 30.7233 83.9156 28.6031 80.6314 27.1585C77.3472 25.7139 73.7883 24.9782 70.1927 25.0005C64.7832 24.9876 59.5092 26.6701 55.1312 29.8054C50.7532 32.9406 47.4974 37.3667 45.8332 42.4454C42.3092 43.1572 38.9799 44.6035 36.0682 46.6876C33.1565 48.7718 30.7297 51.4455 28.9502 54.53C26.2342 59.1478 25.0749 64.497 25.6394 69.807C26.2039 75.1168 28.463 80.1123 32.091 84.0733C30.955 87.4398 30.561 91.0065 30.9352 94.5353C31.3094 98.064 32.4432 101.473 34.2608 104.535C36.9555 109.165 41.0713 112.831 46.0144 115.003C50.9574 117.176 56.4723 117.743 61.7632 116.623C64.1497 119.277 67.0833 121.397 70.3673 122.842C73.6515 124.286 77.2104 125.022 80.806 125C86.2183 125.014 91.495 123.33 95.8745 120.193C100.254 117.056 103.511 112.627 105.174 107.545C108.697 106.833 112.027 105.387 114.939 103.303C117.85 101.219 120.277 98.5445 122.057 95.46C124.769 90.8428 125.926 85.4948 125.36 80.187C124.794 74.8793 122.535 69.886 118.908 65.9268ZM80.8141 118.462C76.3712 118.469 72.0679 116.933 68.6562 114.125C68.81 114.043 69.0799 113.897 69.2557 113.79L89.4353 102.289C89.9418 102.005 90.3624 101.593 90.6538 101.095C90.9454 100.597 91.0972 100.031 91.0937 99.4563V71.3855L99.6232 76.245C99.6678 76.267 99.7063 76.2995 99.7354 76.3398C99.7643 76.38 99.7826 76.4268 99.7889 76.4755V99.7223C99.7826 104.688 97.7819 109.448 94.2253 112.96C90.6687 116.473 85.8461 118.452 80.8141 118.462ZM40.0071 101.266C37.7817 97.472 36.9796 93.0268 37.7413 88.708C37.8912 88.7968 38.1529 88.9545 38.3407 89.061L58.5203 100.562C59.0233 100.852 59.5954 101.005 60.1779 101.005C60.7601 101.005 61.3322 100.852 61.8352 100.562L86.4724 86.5258V96.2448C86.4752 96.2943 86.4655 96.344 86.4443 96.389C86.423 96.434 86.3908 96.4733 86.3505 96.503L65.951 108.124C61.5876 110.604 56.4054 111.274 51.5417 109.989C46.6778 108.703 42.5296 105.566 40.0071 101.266ZM34.6984 57.7985C36.9141 53.9995 40.4138 51.091 44.5844 49.5818C44.5844 49.7533 44.5745 50.057 44.5745 50.2678V73.27C44.5709 73.8445 44.7225 74.4095 45.0136 74.9073C45.3047 75.4048 45.7248 75.8168 46.2308 76.101L70.8679 90.1355L62.3386 94.9948C62.2966 95.0223 62.2482 95.0388 62.198 95.0433C62.1479 95.0478 62.0972 95.04 62.0508 95.0205L41.6494 83.3893C37.2936 80.9003 34.1159 76.8088 32.8128 72.0115C31.5098 67.2145 32.1879 62.1033 34.6984 57.7985ZM104.776 73.889L80.1386 59.8528L88.6681 54.9953C88.7102 54.968 88.7586 54.9513 88.8087 54.9468C88.8589 54.9423 88.9093 54.9503 88.9557 54.9698L109.357 66.591C112.483 68.3725 115.029 70.9955 116.699 74.1533C118.368 77.311 119.091 80.8725 118.783 84.421C118.475 87.9695 117.149 91.358 114.96 94.1898C112.771 97.0215 109.809 99.1793 106.422 100.41C106.422 100.237 106.422 99.9333 106.422 99.7223V76.72C106.427 76.1465 106.277 75.582 105.988 75.0845C105.698 74.587 105.28 74.1745 104.776 73.889ZM113.265 61.282C113.116 61.1913 112.854 61.0355 112.666 60.9293L92.4862 49.428C91.9832 49.1385 91.4114 48.9858 90.8289 48.9858C90.2466 48.9858 89.6745 49.1385 89.1716 49.428L64.5344 63.4645V53.7455C64.5316 53.6958 64.5412 53.6463 64.5625 53.6013C64.5838 53.5563 64.616 53.517 64.6562 53.4873L85.0558 41.8756C88.1809 40.0976 91.7547 39.2344 95.3589 39.3871C98.9632 39.5397 102.449 40.7019 105.408 42.7377C108.367 44.7735 110.678 47.5986 112.069 50.8828C113.461 54.1668 113.876 57.7738 113.265 61.282ZM59.8971 78.6048L51.3656 73.7453C51.321 73.7233 51.2822 73.6908 51.2533 73.6505C51.2245 73.6103 51.206 73.5635 51.1999 73.5145V50.2678C51.2022 46.7074 52.2324 43.2212 54.1697 40.2174C56.1072 37.2136 58.8717 34.8165 62.1397 33.3066C65.4077 31.7967 69.0439 31.2366 72.6228 31.6918C76.2019 32.1469 79.5753 33.5985 82.3485 35.8767C82.1947 35.9595 81.9269 36.1054 81.749 36.2118L61.5694 47.7129C61.0629 47.997 60.6426 48.4089 60.3509 48.9065C60.0596 49.404 59.9078 49.9693 59.9111 50.5438L59.8971 78.6048ZM64.5303 68.7478L75.5034 62.4945L86.4762 68.7438V81.2463L75.5034 87.4958L64.5303 81.2463V68.7478Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white text-[40px] font-bold chatgpt raleway">
                ChatGPT
              </div>
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
                <div className="flex-col w-[550px]  servises-paragraph justify-start items-start gap-6 flex">
                  <div className="text-white text-[32px] ai-bot-servise-heading  font-normal urbanist">
                    Integrate ChatGPT to your application
                  </div>
                  <div className=" text-neutral-400 ai-servise-paragraph  leading-snug text-base font-light urbanist">
                    Integrating ChatGPT for natural language understanding (NLU)
                    and conversation generation involves leveraging its powerful
                    language processing capabilities to comprehend user inputs
                    and generate meaningful responses. However, the quality of
                    the data used during integration is crucial for ensuring the
                    effectiveness and accuracy of these processes.
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className=" text-stone-300 ai-servise-subheading text-xl font-medium urbanist">
                    Why we need Quality Data?
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
                          Training the Model
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
                          Conversation Generation
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
                          Error Correction and Handling
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
                          Avoiding Bias and Misinformation
                        </div>
                      </div>
                    </div>
                    <div className="justify-start flex-wrap items-start gap-ai-servise  gap-7 inline-flex">
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
                          Natural Language Understanding (NLU)
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
                          User Experience and Satisfaction
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
              <div className="w-[150px] h-[150px] relative bg-teal-600 rounded-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="151"
                  height="150"
                  viewBox="0 0 151 150"
                  fill="none"
                >
                  <rect
                    x="0.5"
                    width="150"
                    height="150"
                    rx="30"
                    fill="#10A37F"
                  />
                  <path
                    d="M118.908 65.9268C120.044 62.5603 120.438 58.9935 120.064 55.4648C119.689 51.936 118.555 48.5269 116.738 45.4656C114.043 40.8351 109.928 37.169 104.985 34.9963C100.042 32.8235 94.5266 32.2565 89.2354 33.377C86.8489 30.7233 83.9156 28.6031 80.6314 27.1585C77.3472 25.7139 73.7883 24.9782 70.1927 25.0005C64.7832 24.9876 59.5092 26.6701 55.1312 29.8054C50.7532 32.9406 47.4974 37.3667 45.8332 42.4454C42.3092 43.1572 38.9799 44.6035 36.0682 46.6876C33.1565 48.7718 30.7297 51.4455 28.9502 54.53C26.2342 59.1478 25.0749 64.497 25.6394 69.807C26.2039 75.1168 28.463 80.1123 32.091 84.0733C30.955 87.4398 30.561 91.0065 30.9352 94.5353C31.3094 98.064 32.4432 101.473 34.2608 104.535C36.9555 109.165 41.0713 112.831 46.0144 115.003C50.9574 117.176 56.4723 117.743 61.7632 116.623C64.1497 119.277 67.0833 121.397 70.3673 122.842C73.6515 124.286 77.2104 125.022 80.806 125C86.2183 125.014 91.495 123.33 95.8745 120.193C100.254 117.056 103.511 112.627 105.174 107.545C108.697 106.833 112.027 105.387 114.939 103.303C117.85 101.219 120.277 98.5445 122.057 95.46C124.769 90.8428 125.926 85.4948 125.36 80.187C124.794 74.8793 122.535 69.886 118.908 65.9268ZM80.8141 118.462C76.3712 118.469 72.0679 116.933 68.6562 114.125C68.81 114.043 69.0799 113.897 69.2557 113.79L89.4353 102.289C89.9418 102.005 90.3624 101.593 90.6538 101.095C90.9454 100.597 91.0972 100.031 91.0937 99.4563V71.3855L99.6232 76.245C99.6678 76.267 99.7063 76.2995 99.7354 76.3398C99.7643 76.38 99.7826 76.4268 99.7889 76.4755V99.7223C99.7826 104.688 97.7819 109.448 94.2253 112.96C90.6687 116.473 85.8461 118.452 80.8141 118.462ZM40.0071 101.266C37.7817 97.472 36.9796 93.0268 37.7413 88.708C37.8912 88.7968 38.1529 88.9545 38.3407 89.061L58.5203 100.562C59.0233 100.852 59.5954 101.005 60.1779 101.005C60.7601 101.005 61.3322 100.852 61.8352 100.562L86.4724 86.5258V96.2448C86.4752 96.2943 86.4655 96.344 86.4443 96.389C86.423 96.434 86.3908 96.4733 86.3505 96.503L65.951 108.124C61.5876 110.604 56.4054 111.274 51.5417 109.989C46.6778 108.703 42.5296 105.566 40.0071 101.266ZM34.6984 57.7985C36.9141 53.9995 40.4138 51.091 44.5844 49.5818C44.5844 49.7533 44.5745 50.057 44.5745 50.2678V73.27C44.5709 73.8445 44.7225 74.4095 45.0136 74.9073C45.3047 75.4048 45.7248 75.8168 46.2308 76.101L70.8679 90.1355L62.3386 94.9948C62.2966 95.0223 62.2482 95.0388 62.198 95.0433C62.1479 95.0478 62.0972 95.04 62.0508 95.0205L41.6494 83.3893C37.2936 80.9003 34.1159 76.8088 32.8128 72.0115C31.5098 67.2145 32.1879 62.1033 34.6984 57.7985ZM104.776 73.889L80.1386 59.8528L88.6681 54.9953C88.7102 54.968 88.7586 54.9513 88.8087 54.9468C88.8589 54.9423 88.9093 54.9503 88.9557 54.9698L109.357 66.591C112.483 68.3725 115.029 70.9955 116.699 74.1533C118.368 77.311 119.091 80.8725 118.783 84.421C118.475 87.9695 117.149 91.358 114.96 94.1898C112.771 97.0215 109.809 99.1793 106.422 100.41C106.422 100.237 106.422 99.9333 106.422 99.7223V76.72C106.427 76.1465 106.277 75.582 105.988 75.0845C105.698 74.587 105.28 74.1745 104.776 73.889ZM113.265 61.282C113.116 61.1913 112.854 61.0355 112.666 60.9293L92.4862 49.428C91.9832 49.1385 91.4114 48.9858 90.8289 48.9858C90.2466 48.9858 89.6745 49.1385 89.1716 49.428L64.5344 63.4645V53.7455C64.5316 53.6958 64.5412 53.6463 64.5625 53.6013C64.5838 53.5563 64.616 53.517 64.6562 53.4873L85.0558 41.8756C88.1809 40.0976 91.7547 39.2344 95.3589 39.3871C98.9632 39.5397 102.449 40.7019 105.408 42.7377C108.367 44.7735 110.678 47.5986 112.069 50.8828C113.461 54.1668 113.876 57.7738 113.265 61.282ZM59.8971 78.6048L51.3656 73.7453C51.321 73.7233 51.2822 73.6908 51.2533 73.6505C51.2245 73.6103 51.206 73.5635 51.1999 73.5145V50.2678C51.2022 46.7074 52.2324 43.2212 54.1697 40.2174C56.1072 37.2136 58.8717 34.8165 62.1397 33.3066C65.4077 31.7967 69.0439 31.2366 72.6228 31.6918C76.2019 32.1469 79.5753 33.5985 82.3485 35.8767C82.1947 35.9595 81.9269 36.1054 81.749 36.2118L61.5694 47.7129C61.0629 47.997 60.6426 48.4089 60.3509 48.9065C60.0596 49.404 59.9078 49.9693 59.9111 50.5438L59.8971 78.6048ZM64.5303 68.7478L75.5034 62.4945L86.4762 68.7438V81.2463L75.5034 87.4958L64.5303 81.2463V68.7478Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text-white text-[40px] font-bold chatgpt raleway">
                ChatGPT
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AiBotServises;
