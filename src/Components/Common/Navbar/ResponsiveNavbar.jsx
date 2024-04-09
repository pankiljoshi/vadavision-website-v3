"use client";
import Link from "next/link";
import React, { useState } from "react";

const RedBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="79"
    height="39"
    viewBox="0 0 79 39"
    fill="none"
  >
    <rect
      y="39"
      width="39"
      height="4"
      transform="rotate(-90 0 39)"
      fill="#DE090A"
    />
    <rect
      x="4"
      y="39"
      width="39"
      height="74.2326"
      transform="rotate(-90 4 39)"
      fill="url(#paint0_linear_702_13862)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_702_13862"
        x1="23.5"
        y1="39"
        x2="23.5"
        y2="100.535"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE090A" stopOpacity="0.49" />
        <stop offset="1" stopColor="#DD4243" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
const ResponsiveNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenModal = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <div className="Hero w-full relative bg-gradient-to-br from-black to-zinc-950 flex-col  padding-none  justify-start items-start inline-flex">
        <div className="MenuItems w-full flex-col justify-start items-start  inline-flex">
          <div className="Frame1000003590 w-full  py-3 border-b border-stone-900 justify-start items-center inline-flex">
            <Link href="/">
              <div
                className={`Home text-white cursor-pointer  text-[18px] font-light font-urbaninst ${
                  activeTab === "home" ? "active" : ""
                }`}
                onClick={() => setActiveTab("home")}
              >
                <div className="flex relative">
                  {activeTab === "home" && (
                    <RedBar className="top-2 absolute " />
                  )}
                  <span className="top-2 absolute right-0"> Home</span>
                </div>
              </div>
            </Link>
          </div>

          <Link href="/about-us">
            <div className="Frame1000003591 w-full pl-10 py-3 border-b border-stone-900 justify-start items-center inline-flex">
              <div className="About text-stone-300 text-[18px] font-light font-urbaninst">
                About
              </div>
            </div>
          </Link>

          <div
            onClick={handleOpenModal}
            className="Frame1000003592 servise-gap w-full py-3 pl-10 border-b border-stone-900 justify-between items-end gap-32 inline-flex"
          >
            <div className="Services text-stone-300 text-[18px] font-lightfont-urbaninst">
              Services
            </div>
            <div className="ArrowDown w-8 h-8 px-1 py-1.5 justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 10 6"
                fill="none"
              >
                <g id="16">
                  <path
                    id="Vector"
                    d="M4.99996 5.66667C4.91222 5.66717 4.82525 5.65036 4.74402 5.61718C4.6628 5.584 4.58892 5.53512 4.52663 5.47333L0.526628 1.47333C0.401092 1.3478 0.330566 1.17753 0.330566 0.999999C0.330566 0.822465 0.401092 0.652201 0.526628 0.526666C0.652163 0.40113 0.822426 0.330605 0.999961 0.330605C1.1775 0.330605 1.34776 0.40113 1.47329 0.526666L4.99996 4.06L8.52663 0.533332C8.65416 0.424115 8.81821 0.367044 8.986 0.373525C9.15378 0.380005 9.31294 0.449561 9.43167 0.56829C9.5504 0.68702 9.61995 0.846179 9.62643 1.01396C9.63292 1.18175 9.57585 1.3458 9.46663 1.47333L5.46663 5.47333C5.34245 5.59649 5.17485 5.66593 4.99996 5.66667Z"
                    fill="#CACACA"
                  />
                </g>
              </svg>
            </div>
          </div>
          {isPopupOpen && (
            <div className="w-full">
              <div className="flex w-full flex-col flex-wrap">
                <Link href="/app-development">
                  <div className="Card w-full px-4  py-4  bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 border border-stone-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Frame1171281439 self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                      <div className="Frame1171281438 self-stretch h-10 flex-col justify-start items-start gap-2 flex">
                        <div className="Frame1171281491 justify-start items-center gap-2 inline-flex">
                          <div className="MobileDevelopment2 w-4 h-4 relative">
                            <div className="Group w-3.5 h-3.5 left-[1.33px] top-[0.67px] absolute">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g id="mobile-development 2">
                                  <g id="Group">
                                    <path
                                      id="Vector"
                                      d="M13.7188 3.83333H10.6668V2.204C10.6668 1.632 10.2015 1.16667 9.6295 1.16667H2.37083C1.79883 1.16667 1.3335 1.632 1.3335 2.204V14.796C1.3335 15.368 1.79883 15.8333 2.37083 15.8333H9.6295C10.2015 15.8333 10.6668 15.368 10.6668 14.796V13.1667H13.7188C14.2415 13.1667 14.6668 12.7413 14.6668 12.2187V4.78133C14.6668 4.25867 14.2415 3.83333 13.7188 3.83333ZM14.0002 4.78133V5.16667H10.6855C10.5948 5.16667 10.5142 5.11667 10.4742 5.036L10.2062 4.5H13.7188C13.8742 4.5 14.0002 4.626 14.0002 4.78133ZM7.79416 1.83333L7.46083 2.5H4.5395L4.20616 1.83333H7.79416ZM9.6295 15.1667H2.37083C2.16683 15.1667 2.00016 15 2.00016 14.796V14.5H10.0002V14.796C10.0002 15 9.83416 15.1667 9.6295 15.1667ZM10.0002 13.8333H2.00016V2.204C2.00016 2 2.16683 1.83333 2.37083 1.83333H3.46083L4.0355 2.98267C4.09216 3.09533 4.2075 3.16667 4.3335 3.16667H7.66683C7.79283 3.16667 7.90816 3.09533 7.96483 2.98267L8.5395 1.83333H9.6295C9.83416 1.83333 10.0002 2 10.0002 2.204V3.83333H5.61483C5.09216 3.83333 4.66683 4.25867 4.66683 4.78133V12.2187C4.66683 12.7413 5.09216 13.1667 5.61483 13.1667H10.0002V13.8333ZM13.7188 12.5H5.61483C5.4595 12.5 5.3335 12.374 5.3335 12.2187V4.78133C5.3335 4.626 5.4595 4.5 5.61483 4.5H9.46083L9.8775 5.33333C10.0315 5.642 10.3415 5.83333 10.6855 5.83333H14.0002V12.2187C14.0002 12.374 13.8742 12.5 13.7188 12.5Z"
                                      fill="url(#paint0_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_2"
                                      d="M6.76417 8.40267C6.8935 8.532 7.10617 8.532 7.2355 8.40267C7.36483 8.27333 7.36483 8.06067 7.2355 7.93133L6.80483 7.5L7.2355 7.06933C7.3655 6.93933 7.3655 6.728 7.2355 6.598C7.1055 6.468 6.89417 6.468 6.76417 6.598L6.0975 7.26467C5.9675 7.39467 5.9675 7.606 6.0975 7.736L6.76417 8.40267Z"
                                      fill="url(#paint1_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_3"
                                      d="M8.18436 8.46467C8.34769 8.54667 8.54969 8.47933 8.63169 8.31533L9.29836 6.982C9.38036 6.81867 9.31303 6.61667 9.14903 6.53467C8.98503 6.45267 8.78369 6.52 8.70169 6.684L8.03503 8.01733C7.95369 8.18133 8.02103 8.38333 8.18436 8.46467Z"
                                      fill="url(#paint2_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_4"
                                      d="M10.0975 8.40267C10.2268 8.532 10.4395 8.532 10.5688 8.40267L11.2355 7.736C11.3655 7.606 11.3655 7.39467 11.2355 7.26467L10.5688 6.598C10.4388 6.468 10.2275 6.468 10.0975 6.598C9.9675 6.728 9.9675 6.93933 10.0975 7.06933L10.5282 7.5L10.0975 7.93067C9.96883 8.06 9.96883 8.27333 10.0975 8.40267Z"
                                      fill="url(#paint3_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_5"
                                      d="M6.33333 10.5H9.66667C9.85067 10.5 10 10.3507 10 10.1667C10 9.98267 9.85067 9.83333 9.66667 9.83333H6.33333C6.14933 9.83333 6 9.98267 6 10.1667C6 10.3507 6.14933 10.5 6.33333 10.5Z"
                                      fill="url(#paint4_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_6"
                                      d="M12.3333 11.1667H6.33333C6.14933 11.1667 6 11.316 6 11.5C6 11.684 6.14933 11.8333 6.33333 11.8333H12.3333C12.5173 11.8333 12.6667 11.684 12.6667 11.5C12.6667 11.316 12.5173 11.1667 12.3333 11.1667Z"
                                      fill="url(#paint5_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_7"
                                      d="M8.33333 5.83333C8.51743 5.83333 8.66667 5.68409 8.66667 5.5C8.66667 5.3159 8.51743 5.16667 8.33333 5.16667C8.14924 5.16667 8 5.3159 8 5.5C8 5.68409 8.14924 5.83333 8.33333 5.83333Z"
                                      fill="url(#paint6_linear_702_13705)"
                                    />
                                    <path
                                      id="Vector_8"
                                      d="M7.00033 5.83333C7.18442 5.83333 7.33366 5.68409 7.33366 5.5C7.33366 5.3159 7.18442 5.16667 7.00033 5.16667C6.81623 5.16667 6.66699 5.3159 6.66699 5.5C6.66699 5.68409 6.81623 5.83333 7.00033 5.83333Z"
                                      fill="url(#paint7_linear_702_13705)"
                                    />
                                  </g>
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_702_13705"
                                    x1="8.00016"
                                    y1="1.16667"
                                    x2="8.00016"
                                    y2="15.8333"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_702_13705"
                                    x1="6.6665"
                                    y1="6.5005"
                                    x2="6.6665"
                                    y2="8.49967"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint2_linear_702_13705"
                                    x1="8.6669"
                                    y1="6.49972"
                                    x2="8.6669"
                                    y2="8.49961"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint3_linear_702_13705"
                                    x1="10.6665"
                                    y1="6.5005"
                                    x2="10.6665"
                                    y2="8.49967"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint4_linear_702_13705"
                                    x1="8"
                                    y1="9.83333"
                                    x2="8"
                                    y2="10.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint5_linear_702_13705"
                                    x1="9.33333"
                                    y1="11.1667"
                                    x2="9.33333"
                                    y2="11.8333"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint6_linear_702_13705"
                                    x1="8.33333"
                                    y1="5.16667"
                                    x2="8.33333"
                                    y2="5.83333"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint7_linear_702_13705"
                                    x1="7.00033"
                                    y1="5.16667"
                                    x2="7.00033"
                                    y2="5.83333"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#A8C0FF" />
                                    <stop offset="1" stopColor="#8F7BE8" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="AppDevelopment text-white text-base font-semibold font-urbaninst">
                            App Development
                          </div>
                        </div>
                        <div className="Frame1171281436 w-80 h-11 flex-col justify-start items-start gap-4 flex">
                          <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                            <div className="GetThePowerfulAiServicesBuiltByTheExperts self-stretch text-neutral-400 text-xs font-light font-urbaninst">
                              Get the powerful AI services built by the experts.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                        <div className="LearnMore text-neutral-200 text-xs font-normal font-urbaninst">
                          Learn more
                        </div>
                        <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g id="left-up 1">
                              <g id="Group">
                                <g id="Group_2">
                                  <path
                                    id="Vector"
                                    d="M3.04029 13.9024L12.6667 4.27604L12.6667 9.66667C12.6667 9.85092 12.8157 10 13 10L13.6667 10C13.8509 10 14 9.85092 14 9.66667L14 2.33334C14 2.14909 13.8509 2 13.6667 2L6.3333 2C6.14908 2 5.99998 2.14909 5.99998 2.33334L5.99998 3C5.99998 3.18425 6.14908 3.33335 6.33333 3.33335L11.724 3.33335L2.0976 12.9597C2.03379 13.0235 2.00129 13.1068 2.00004 13.1904C1.99873 13.2774 2.03129 13.3647 2.0976 13.4311L2.56891 13.9024C2.6317 13.9652 2.71332 13.9977 2.79563 13.9999C2.88388 14.0023 2.97295 13.9697 3.04029 13.9024Z"
                                    fill="#DD4243"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-row  mobile-view-direction gap-5 mt-4  ">
                  <div className="Card w-[50%] min-w-[190px] mobile-ai-servises-cards p-4 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 border border-stone-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <Link href="/ai-bot-landing">
                      <div className="Frame1171281439 self-stretch h-24 flex-col justify-start items-start gap-4 flex">
                        <div className="Frame1171281438 h-16 flex-col justify-start items-start gap-2 flex">
                          <div className="Frame1171281491 justify-start items-center gap-2 inline-flex">
                            <div className="Frame1171281402 flex-col justify-start items-start gap-4 inline-flex">
                              <div className="AiAssistant1 w-4 h-4 relative">
                                <div className="Group w-4 h-4 left-[0.41px] top-0 absolute">
                                  <div className="Group w-3.5 h-3.5 left-[0.69px] top-[1.72px] absolute">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                    >
                                      <g
                                        id="ai-assistant 1"
                                        clipPath="url(#clip0_702_13733)"
                                      >
                                        <g id="Group">
                                          <g id="Group_2">
                                            <path
                                              id="Vector"
                                              d="M7.65625 2.21831H8.34377V3.59335H7.65625V2.21831Z"
                                              fill="url(#paint0_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_2"
                                              d="M12.438 11.9999H13.8755V12.6874H12.438V11.9999Z"
                                              fill="url(#paint1_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_3"
                                              d="M14.2192 13.0311V16.1562C14.2192 16.3461 14.3731 16.5 14.563 16.5C14.7528 16.5 14.9068 16.3461 14.9068 16.1562V13.0311H14.2192Z"
                                              fill="url(#paint2_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_4"
                                              d="M2.125 11.9999H3.56254V12.6874H2.125V11.9999Z"
                                              fill="url(#paint3_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_5"
                                              d="M1.09375 13.0311V16.1562C1.09375 16.3461 1.24766 16.5 1.43751 16.5C1.62736 16.5 1.78127 16.3461 1.78127 16.1562V13.0311H1.09375Z"
                                              fill="url(#paint4_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_6"
                                              d="M7.69584 5.1044C7.69462 5.10124 7.6934 5.09809 7.69212 5.09496C7.62918 4.94211 7.48183 4.84339 7.31654 4.84339C7.31639 4.84339 7.31623 4.84339 7.31608 4.84339C7.15063 4.84358 7.00325 4.94264 6.94066 5.09577C6.9396 5.09834 6.9386 5.10093 6.9376 5.10352L5.90494 7.81489C5.83734 7.9923 5.92641 8.1909 6.10382 8.2585C6.28133 8.32606 6.47986 8.23703 6.5474 8.05959L6.72025 7.60573H7.90484L8.07576 8.05862C8.12773 8.19628 8.25854 8.28112 8.39745 8.28109C8.43777 8.28109 8.47883 8.27394 8.51877 8.25887C8.6964 8.19184 8.78606 7.99349 8.71903 7.81589L7.69584 5.1044ZM6.98216 6.91821L7.31533 6.04343L7.64546 6.91821H6.98216Z"
                                              fill="url(#paint5_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_7"
                                              d="M9.77442 4.84339C9.58458 4.84339 9.43066 4.9973 9.43066 5.18715V7.93724C9.43066 8.12709 9.58458 8.281 9.77442 8.281C9.96427 8.281 10.1182 8.12709 10.1182 7.93724V5.18715C10.1182 4.9973 9.96427 4.84339 9.77442 4.84339Z"
                                              fill="url(#paint6_linear_702_13733)"
                                            />
                                          </g>
                                          <g id="Group_3">
                                            <path
                                              id="Vector_8"
                                              d="M4.93751 15.125H11.0627C11.2526 15.125 11.4065 14.971 11.4065 14.7812V12.3436C11.4065 12.1538 11.2526 11.9999 11.0627 11.9999H4.93751C4.74766 11.9999 4.59375 12.1538 4.59375 12.3436V14.7812C4.59375 14.971 4.74766 15.125 4.93751 15.125ZM5.28127 12.6874H10.7189V14.4374H5.28127V12.6874Z"
                                              fill="url(#paint7_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_9"
                                              d="M12.732 5.37465H12.1565V4.63488C12.1565 3.87104 11.5351 3.24959 10.7713 3.24959H5.22908C4.46525 3.24959 3.84379 3.87104 3.84379 4.63488V5.37465H3.26837C2.89638 5.37465 2.59375 5.67729 2.59375 6.04924V7.07511C2.59375 7.44709 2.89638 7.7497 3.26837 7.7497H3.84379V8.48947C3.84379 9.25331 4.46525 9.87476 5.22908 9.87476H5.80154V10.6248H3.56253C3.37268 10.6248 3.21877 10.7787 3.21877 10.9685V16.1562C3.21877 16.3461 3.37268 16.5 3.56253 16.5H12.4378C12.6277 16.5 12.7816 16.3461 12.7816 16.1562V10.9685C12.7816 10.7787 12.6277 10.6248 12.4378 10.6248H10.1988V9.87476H10.7713C11.5351 9.87476 12.1565 9.25331 12.1565 8.48947V7.7497H12.732C13.104 7.7497 13.4066 7.44706 13.4066 7.07511V6.04924C13.4066 5.67729 13.104 5.37465 12.732 5.37465ZM3.28127 7.06221V6.06218H3.84379V7.06221H3.28127ZM12.094 15.8125H3.90629V11.3123H12.094V15.8125ZM9.51128 10.6248H6.48909V9.87479H9.51128V10.6248ZM11.469 8.4895C11.469 8.87426 11.156 9.18727 10.7713 9.18727H5.22908C4.84432 9.18727 4.53131 8.87426 4.53131 8.4895V4.63488C4.53131 4.25012 4.84435 3.93711 5.22908 3.93711H10.7713C11.156 3.93711 11.469 4.25012 11.469 4.63488V8.4895ZM12.7191 7.06221H12.1565V6.06218H12.7191V7.06221Z"
                                              fill="url(#paint8_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_10"
                                              d="M8.00004 2.5616C8.26414 2.5616 8.52821 2.46106 8.72928 2.26003C9.13135 1.85795 9.13135 1.20368 8.72928 0.801606C8.3272 0.399562 7.67293 0.399469 7.27079 0.801606C6.86872 1.20368 6.86872 1.85795 7.27079 2.26003C7.47186 2.46106 7.73593 2.5616 8.00004 2.5616ZM7.75697 1.28772C7.824 1.22068 7.912 1.18718 8.00004 1.18718C8.08804 1.18718 8.1761 1.22068 8.24311 1.28768C8.37714 1.42172 8.37714 1.63982 8.24311 1.77382C8.10907 1.90786 7.89097 1.90789 7.75693 1.77382C7.6229 1.63976 7.62293 1.42175 7.75697 1.28772Z"
                                              fill="url(#paint9_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_11"
                                              d="M14.563 11.3123C13.9944 11.3123 13.5317 11.775 13.5317 12.3436C13.5317 12.9123 13.9944 13.3749 14.563 13.3749C15.1317 13.3749 15.5943 12.9123 15.5943 12.3436C15.5943 11.775 15.1317 11.3123 14.563 11.3123ZM14.563 12.6874C14.3735 12.6874 14.2193 12.5332 14.2193 12.3436C14.2193 12.1541 14.3735 11.9999 14.563 11.9999C14.7526 11.9999 14.9068 12.1541 14.9068 12.3436C14.9068 12.5332 14.7526 12.6874 14.563 12.6874Z"
                                              fill="url(#paint10_linear_702_13733)"
                                            />
                                            <path
                                              id="Vector_12"
                                              d="M1.43753 11.3123C0.868889 11.3123 0.40625 11.775 0.40625 12.3436C0.40625 12.9123 0.868889 13.3749 1.43753 13.3749C2.00617 13.3749 2.46881 12.9123 2.46881 12.3436C2.46881 11.775 2.00617 11.3123 1.43753 11.3123ZM1.43753 12.6874C1.248 12.6874 1.09377 12.5332 1.09377 12.3436C1.09377 12.1541 1.248 11.9999 1.43753 11.9999C1.62707 11.9999 1.78129 12.1541 1.78129 12.3436C1.78129 12.5332 1.6271 12.6874 1.43753 12.6874Z"
                                              fill="url(#paint11_linear_702_13733)"
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <defs>
                                        <linearGradient
                                          id="paint0_linear_702_13733"
                                          x1="8.00001"
                                          y1="2.21831"
                                          x2="8.00001"
                                          y2="3.59335"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint1_linear_702_13733"
                                          x1="13.1568"
                                          y1="11.9999"
                                          x2="13.1568"
                                          y2="12.6874"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint2_linear_702_13733"
                                          x1="14.563"
                                          y1="13.0311"
                                          x2="14.563"
                                          y2="16.5"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint3_linear_702_13733"
                                          x1="2.84377"
                                          y1="11.9999"
                                          x2="2.84377"
                                          y2="12.6874"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint4_linear_702_13733"
                                          x1="1.43751"
                                          y1="13.0311"
                                          x2="1.43751"
                                          y2="16.5"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint5_linear_702_13733"
                                          x1="7.31179"
                                          y1="4.84339"
                                          x2="7.31179"
                                          y2="8.2811"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint6_linear_702_13733"
                                          x1="9.77442"
                                          y1="4.84339"
                                          x2="9.77442"
                                          y2="8.281"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint7_linear_702_13733"
                                          x1="8.00011"
                                          y1="11.9999"
                                          x2="8.00011"
                                          y2="15.125"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint8_linear_702_13733"
                                          x1="8.00017"
                                          y1="3.24959"
                                          x2="8.00017"
                                          y2="16.5"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint9_linear_702_13733"
                                          x1="8.00004"
                                          y1="0.500038"
                                          x2="8.00004"
                                          y2="2.5616"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint10_linear_702_13733"
                                          x1="14.563"
                                          y1="11.3123"
                                          x2="14.563"
                                          y2="13.3749"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <linearGradient
                                          id="paint11_linear_702_13733"
                                          x1="1.43753"
                                          y1="11.3123"
                                          x2="1.43753"
                                          y2="13.3749"
                                          gradientUnits="userSpaceOnUse"
                                        >
                                          <stop stopColor="#A8FF78" />
                                          <stop
                                            offset="1"
                                            stopColor="#78FFD6"
                                          />
                                        </linearGradient>
                                        <clipPath id="clip0_702_13733">
                                          <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                            transform="translate(0 0.5)"
                                          />
                                        </clipPath>
                                      </defs>
                                    </svg>
                                  </div>
                                  <div className="Group w-4 h-4 left-0 top-0 absolute"></div>
                                </div>
                              </div>
                            </div>
                            <div className="AiServices text-white text-base font-semibold font-urbaninst">
                              AI Services
                            </div>
                          </div>
                          <div className="Frame1171281436 self-stretch h-11 flex-col justify-start items-start gap-4 flex">
                            <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                              <div className="GetThePowerfulAiServicesBuiltByTheExperts self-stretch text-neutral-400 text-xs font-light font-urbaninst">
                                Get the powerful AI services built by the
                                experts.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                          <div className="LearnMore text-neutral-200 text-xs font-medium font-urbaninst">
                            Learn more
                          </div>
                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <g id="left-up 1">
                                <g id="Group">
                                  <g id="Group_2">
                                    <path
                                      id="Vector"
                                      d="M3.04029 13.9024L12.6667 4.27604L12.6667 9.66667C12.6667 9.85092 12.8157 10 13 10L13.6667 10C13.8509 10 14 9.85092 14 9.66667L14 2.33334C14 2.14909 13.8509 2 13.6667 2L6.3333 2C6.14908 2 5.99998 2.14909 5.99998 2.33334L5.99998 3C5.99998 3.18425 6.14908 3.33335 6.33333 3.33335L11.724 3.33335L2.0976 12.9597C2.03379 13.0235 2.00129 13.1068 2.00004 13.1904C1.99873 13.2774 2.03129 13.3647 2.0976 13.4311L2.56891 13.9024C2.6317 13.9652 2.71332 13.9977 2.79563 13.9999C2.88388 14.0023 2.97295 13.9697 3.04029 13.9024Z"
                                      fill="#DD4243"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <Link href="/ui-ux">
                    <div className="Card w-[50%] min-w-[190px] mobile-ai-servises-cards p-4 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 border border-stone-900 flex-col justify-start items-start gap-2.5 inline-flex">
                      <div className="Frame1171281439 self-stretch h-24 flex-col justify-start items-start gap-4 flex">
                        <div className="Frame1171281438 flex-col justify-start items-start gap-2 flex">
                          <div className="Frame1171281491 justify-start items-center gap-2 inline-flex">
                            <div className="VectorIllustration w-4 h-4 relative">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                              >
                                <g id="Vector_Illustration">
                                  <path
                                    id="Vector"
                                    d="M13.9878 13.8884C14.9274 13.8884 15.6919 13.1265 15.6919 12.187V2.09738C15.6919 1.21611 14.9757 0.5 14.0945 0.5H1.59738C0.716107 0.5 0 1.21611 0 2.09738V12.187C0 13.1265 0.764343 13.8884 1.70402 13.8884H5.60132V14.8653H5.14369C4.72569 14.8653 4.38518 15.2028 4.38518 15.6208V16.1904C4.38518 16.3607 4.52449 16.5 4.69481 16.5H10.9982C11.1685 16.5 11.3078 16.3607 11.3078 16.1904V15.6208C11.3078 15.2028 10.9673 14.8653 10.5493 14.8653H10.0905V13.8884H13.9878ZM7.84717 13.0631C7.60592 13.0631 7.41037 12.8701 7.41037 12.6288C7.41037 12.385 7.60592 12.1895 7.84717 12.1895C8.08587 12.1895 8.28142 12.385 8.28142 12.6288C8.28142 12.8701 8.08587 13.0631 7.84717 13.0631ZM0.507909 11.3718V2.09738C0.507909 1.49809 0.998024 1.00791 1.59738 1.00791H14.0945C14.6938 1.00791 15.1839 1.49809 15.1839 2.09738V11.3718H0.507909Z"
                                    fill="url(#paint0_linear_702_13765)"
                                  />
                                  <path
                                    id="Vector_2"
                                    d="M12.4008 3.01416C12.0834 3.01416 11.8167 3.21231 11.7126 3.49417H8.5991C8.49501 3.21231 8.2258 3.01416 7.9109 3.01416C7.596 3.01416 7.32933 3.21231 7.22523 3.49417H3.97969C3.87553 3.21231 3.60892 3.01416 3.29148 3.01416C2.88767 3.01416 2.56006 3.34177 2.56006 3.74812C2.56006 4.15187 2.88767 4.47948 3.29148 4.47948C3.60892 4.47948 3.87553 4.28145 3.97969 4.00208H5.79798C4.4698 4.70554 3.54543 6.07426 3.46924 7.66408H3.30673C3.16196 7.66408 3.04261 7.78089 3.04261 7.9282V8.75095C3.04261 8.89579 3.16196 9.01507 3.30673 9.01507H4.13208C4.27679 9.01507 4.39621 8.89579 4.39621 8.75095V7.9282C4.39621 7.78089 4.27679 7.66408 4.13208 7.66408H3.97714C4.07616 5.828 5.46274 4.32708 7.24303 4.05031C7.32171 4.21796 7.45631 4.3499 7.62644 4.42356C7.62396 4.42864 7.62135 4.43125 7.61887 4.43633L5.7472 8.17955C5.70405 8.26846 5.71422 8.37771 5.78018 8.45385C5.84367 8.53259 5.94783 8.56557 6.04431 8.53767L7.84741 8.02468L9.64797 8.53767C9.76699 8.56419 9.85487 8.52614 9.91203 8.45385C9.97812 8.37771 9.99077 8.26846 9.94508 8.17955L8.08357 4.45667C8.29691 4.40843 8.47467 4.2636 8.56866 4.07065C10.293 4.39826 11.6161 5.86867 11.7126 7.66408H11.5603C11.4155 7.66408 11.2961 7.78089 11.2961 7.9282V8.75095C11.2961 8.89579 11.4155 9.01507 11.5603 9.01507H12.3856C12.5303 9.01507 12.6497 8.89579 12.6497 8.75095V7.9282C12.6497 7.78089 12.5303 7.66408 12.3856 7.66408H12.2205C12.1443 6.07426 11.2199 4.70554 9.89175 4.00208H11.7126C11.8167 4.28145 12.0834 4.47948 12.4008 4.47948C12.8046 4.47948 13.1322 4.15187 13.1322 3.74812C13.1322 3.34177 12.8046 3.01416 12.4008 3.01416Z"
                                    fill="url(#paint1_linear_702_13765)"
                                  />
                                </g>
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_702_13765"
                                    x1="7.84593"
                                    y1="0.5"
                                    x2="7.84593"
                                    y2="16.5"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00B4DB" />
                                    <stop offset="1" stopColor="#0083B0" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_702_13765"
                                    x1="7.84614"
                                    y1="3.01416"
                                    x2="7.84614"
                                    y2="9.01507"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#00B4DB" />
                                    <stop offset="1" stopColor="#0083B0" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                            <div className="UiUxDesign text-white text-base font-semibold font-urbaninst">
                              UI/ UX Design
                            </div>
                          </div>
                          <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                            <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                              <div className="BestInClassUiAndUxDesigns self-stretch text-neutral-400 text-xs font-light font-urbaninst">
                                Best in class UI and UX Designs.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                          <div className="LearnMore text-neutral-200 text-xs font-medium font-urbaninst">
                            Learn more
                          </div>
                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                            >
                              <g id="left-up 1">
                                <g id="Group">
                                  <g id="Group_2">
                                    <path
                                      id="Vector"
                                      d="M3.04029 13.9024L12.6667 4.27604L12.6667 9.66667C12.6667 9.85092 12.8157 10 13 10L13.6667 10C13.8509 10 14 9.85092 14 9.66667L14 2.33334C14 2.14909 13.8509 2 13.6667 2L6.3333 2C6.14908 2 5.99998 2.14909 5.99998 2.33334L5.99998 3C5.99998 3.18425 6.14908 3.33335 6.33333 3.33335L11.724 3.33335L2.0976 12.9597C2.03379 13.0235 2.00129 13.1068 2.00004 13.1904C1.99873 13.2774 2.03129 13.3647 2.0976 13.4311L2.56891 13.9024C2.6317 13.9652 2.71332 13.9977 2.79563 13.9999C2.88388 14.0023 2.97295 13.9697 3.04029 13.9024Z"
                                      fill="#DD4243"
                                    />
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <Link href="/automation">
                  <div className="Card w-full px-4 py-4 mt-4 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 border border-stone-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Frame1171281439 self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                      <div className="Frame1171281438 self-stretch h-10 flex-col justify-start items-start gap-2 flex">
                        <div className="Frame1171281491 justify-start items-center gap-2 inline-flex">
                          <div className="Workflow1 w-4 h-4 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <g
                                id="workflow 1"
                                clipPath="url(#clip0_702_13785)"
                              >
                                <g id="Group">
                                  <g id="Group_2">
                                    <path
                                      id="Vector"
                                      d="M11.3125 11.8125V16.5H16V11.8125H11.3125ZM15.0625 15.5625H12.25V12.75H15.0625V15.5625Z"
                                      fill="url(#paint0_linear_702_13785)"
                                    />
                                  </g>
                                </g>
                                <g id="Group_3">
                                  <g id="Group_4">
                                    <path
                                      id="Vector_2"
                                      d="M15.0625 2.375H4.6875V0.5H0V5.1875H4.6875V3.3125H15.0625V8.03125H12.3919V7.07634L10.9688 8.49991L12.3919 9.92378V8.96875H15.0625C15.5794 8.96875 16 8.54819 16 8.03125V3.3125C16 2.79556 15.5794 2.375 15.0625 2.375ZM3.75 4.25H0.9375V1.4375H3.75V4.25Z"
                                      fill="url(#paint1_linear_702_13785)"
                                    />
                                  </g>
                                </g>
                                <g id="Group_5">
                                  <g id="Group_6">
                                    <path
                                      id="Vector_3"
                                      d="M10.6875 14.1562L9.26431 12.7326V13.6875H0.96875V8.96875H5.65625V10.8438H10.3438V6.15625H5.65625V8.03125H0.96875C0.451813 8.03125 0.03125 8.45181 0.03125 8.96875V13.6875C0.03125 14.2044 0.451813 14.625 0.96875 14.625H9.26431V15.58L10.6875 14.1562ZM6.59375 7.09375H9.40625V9.90625H6.59375V7.09375Z"
                                      fill="url(#paint2_linear_702_13785)"
                                    />
                                  </g>
                                </g>
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_702_13785"
                                  x1="13.6562"
                                  y1="11.8125"
                                  x2="13.6562"
                                  y2="16.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#DAFB7E" />
                                  <stop offset="1" stopColor="#8BFF88" />
                                </linearGradient>
                                <linearGradient
                                  id="paint1_linear_702_13785"
                                  x1="8"
                                  y1="0.5"
                                  x2="8"
                                  y2="9.92378"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#DAFB7E" />
                                  <stop offset="1" stopColor="#8BFF88" />
                                </linearGradient>
                                <linearGradient
                                  id="paint2_linear_702_13785"
                                  x1="5.35938"
                                  y1="6.15625"
                                  x2="5.35938"
                                  y2="15.58"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#DAFB7E" />
                                  <stop offset="1" stopColor="#8BFF88" />
                                </linearGradient>
                                <clipPath id="clip0_702_13785">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="WorkflowAutomation text-white text-base font-semibold font-urbaninst">
                            Workflow Automation
                          </div>
                        </div>
                        <div className="Frame1171281436 w-80 h-11 flex-col justify-start items-start gap-4 flex">
                          <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                            <div className="WorkflowAutomationLikeNeverBefore self-stretch text-neutral-400 text-xs font-light font-urbaninst">
                              Workflow automation like never before
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                        <div className="LearnMore text-neutral-200 text-xs font-medium font-urbaninst">
                          Learn more
                        </div>
                        <div className="LeftUp1 w-4 h-4 relative origin-top-left flex-col justify-start items-start inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g id="left-up 1">
                              <g id="Group">
                                <g id="Group_2">
                                  <path
                                    id="Vector"
                                    d="M3.04029 13.9024L12.6667 4.27604L12.6667 9.66667C12.6667 9.85092 12.8157 10 13 10L13.6667 10C13.8509 10 14 9.85092 14 9.66667L14 2.33334C14 2.14909 13.8509 2 13.6667 2L6.3333 2C6.14908 2 5.99998 2.14909 5.99998 2.33334L5.99998 3C5.99998 3.18425 6.14908 3.33335 6.33333 3.33335L11.724 3.33335L2.0976 12.9597C2.03379 13.0235 2.00129 13.1068 2.00004 13.1904C1.99873 13.2774 2.03129 13.3647 2.0976 13.4311L2.56891 13.9024C2.6317 13.9652 2.71332 13.9977 2.79563 13.9999C2.88388 14.0023 2.97295 13.9697 3.04029 13.9024Z"
                                    fill="#DD4243"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/resource-augmentation">
                  <div className="Card w-full px-4 py-4 mt-4 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 border border-stone-900 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Frame1171281439 self-stretch h-20 flex-col justify-start items-start gap-4 flex">
                      <div className="Frame1171281438 self-stretch h-10 flex-col justify-start items-start gap-2 flex">
                        <div className="Frame1171281491 justify-start items-center gap-2 inline-flex">
                          <div className="Resource1 w-4 h-4 relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="17"
                              viewBox="0 0 16 17"
                              fill="none"
                            >
                              <g
                                id="resource 1"
                                clipPath="url(#clip0_702_13812)"
                              >
                                <path
                                  id="Vector"
                                  d="M13 10.75C11.568 10.75 10.3895 11.8505 10.2627 13.25H6.121C6.047 12.9952 5.94075 12.75 5.805 12.519L6.3665 11.8173C6.61375 11.508 6.75 11.1198 6.75 10.724V8.75H7.76275C7.8895 10.1495 9.068 11.25 10.5 11.25C12.0162 11.25 13.25 10.0162 13.25 8.5C13.25 6.98375 12.0162 5.75 10.5 5.75C9.068 5.75 7.8895 6.8505 7.76275 8.25H6.75V8.1405C6.75 7.79575 6.51625 7.4965 6.182 7.413L5.75 7.305L4.75 7.05475L4.25 6.92975L3.75 6.80475V5.25H6.5C6.9135 5.25 7.25 4.9135 7.25 4.5V3.75H10.2627C10.3895 5.1495 11.568 6.25 13 6.25C14.5162 6.25 15.75 5.01625 15.75 3.5C15.75 1.98375 14.5162 0.75 13 0.75C11.568 0.75 10.3895 1.8505 10.2627 3.25H7.25V2.5C7.25 2.0865 6.9135 1.75 6.5 1.75H1C0.5865 1.75 0.25 2.0865 0.25 2.5V4.5C0.25 4.9135 0.5865 5.25 1 5.25H2.25V7.8075C2.01825 7.61825 1.7265 7.5 1.4045 7.5C1.0435 7.5 0.75 7.79375 0.75 8.1545C0.75 8.2555 0.774 8.357 0.819 8.44725L1.118 9.04525C1.20425 9.21775 1.25 9.41125 1.25 9.604V10.7238C1.25 11.1198 1.38625 11.508 1.6335 11.817L2.195 12.5188C1.90425 13.014 1.75 13.5743 1.75 14.1512V16.25H6.25V14.1512C6.25 14.0162 6.23975 13.8825 6.22325 13.75H10.2627C10.3895 15.1495 11.568 16.25 13 16.25C14.5162 16.25 15.75 15.0162 15.75 13.5C15.75 11.9838 14.5162 10.75 13 10.75ZM9.092 10.2522C9.30125 9.657 9.85825 9.25 10.5 9.25C11.1418 9.25 11.6987 9.657 11.908 10.2522C11.522 10.563 11.0328 10.75 10.5 10.75C9.96725 10.75 9.478 10.563 9.092 10.2522ZM9.75 8C9.75 7.5865 10.0865 7.25 10.5 7.25C10.9135 7.25 11.25 7.5865 11.25 8C11.25 8.4135 10.9135 8.75 10.5 8.75C10.0865 8.75 9.75 8.4135 9.75 8ZM10.5 6.25C11.7405 6.25 12.75 7.25925 12.75 8.5C12.75 9.01125 12.5765 9.48175 12.2882 9.86C12.0828 9.44475 11.7423 9.1175 11.328 8.92925C11.5848 8.70025 11.75 8.3705 11.75 8C11.75 7.31075 11.1892 6.75 10.5 6.75C9.81075 6.75 9.25 7.31075 9.25 8C9.25 8.3705 9.41525 8.70025 9.672 8.92925C9.25775 9.1175 8.91725 9.44475 8.71175 9.86C8.4235 9.48175 8.25 9.01125 8.25 8.5C8.25 7.25925 9.2595 6.25 10.5 6.25ZM11.592 5.25225C11.8013 4.657 12.3582 4.25 13 4.25C13.6418 4.25 14.1987 4.657 14.408 5.25225C14.022 5.563 13.5328 5.75 13 5.75C12.4672 5.75 11.978 5.563 11.592 5.25225ZM12.25 3C12.25 2.5865 12.5865 2.25 13 2.25C13.4135 2.25 13.75 2.5865 13.75 3C13.75 3.4135 13.4135 3.75 13 3.75C12.5865 3.75 12.25 3.4135 12.25 3ZM13 1.25C14.2405 1.25 15.25 2.25925 15.25 3.5C15.25 4.01125 15.0765 4.48175 14.7882 4.86C14.5828 4.44475 14.2423 4.1175 13.828 3.92925C14.0848 3.70025 14.25 3.3705 14.25 3C14.25 2.31075 13.6892 1.75 13 1.75C12.3108 1.75 11.75 2.31075 11.75 3C11.75 3.3705 11.9152 3.70025 12.172 3.92925C11.7577 4.1175 11.4172 4.44475 11.2118 4.86C10.9235 4.48175 10.75 4.01125 10.75 3.5C10.75 2.25925 11.7595 1.25 13 1.25ZM1 4.75C0.86225 4.75 0.75 4.638 0.75 4.5V2.5C0.75 2.362 0.86225 2.25 1 2.25H6.5C6.63775 2.25 6.75 2.362 6.75 2.5V4.5C6.75 4.638 6.63775 4.75 6.5 4.75H3.75V4.5C3.75 4.0865 3.4135 3.75 3 3.75C2.5865 3.75 2.25 4.0865 2.25 4.5V4.75H1ZM1.75 10.724V9.60425C1.75 9.334 1.68625 9.0635 1.56525 8.82175L1.26625 8.22375C1.2555 8.2025 1.25 8.1785 1.25 8.1545C1.25 8.06925 1.31925 8 1.4045 8C1.87075 8 2.25 8.3795 2.25 8.8455V9.25V10H2.75V9.25V8.8455V4.5C2.75 4.362 2.86225 4.25 3 4.25C3.13775 4.25 3.25 4.362 3.25 4.5V6.67975V10H3.75V7.32025L4.25 7.44525V10H4.75V7.57025L5.25 7.69525V10H5.75V7.82L6.0605 7.89775C6.172 7.92575 6.25 8.0255 6.25 8.1405V10.724C6.25 11.0068 6.15275 11.284 5.976 11.5048L5.37975 12.25H2.62025L2.024 11.5048C1.84725 11.284 1.75 11.0065 1.75 10.724ZM5.75 15.75H2.25V14.1512C2.25 13.6552 2.3835 13.1733 2.6375 12.75H5.3625C5.6165 13.1733 5.75 13.6552 5.75 14.1512V15.75ZM11.592 15.2522C11.8013 14.657 12.3582 14.25 13 14.25C13.6418 14.25 14.1987 14.657 14.408 15.2522C14.022 15.563 13.5328 15.75 13 15.75C12.4672 15.75 11.978 15.563 11.592 15.2522ZM12.25 13C12.25 12.5865 12.5865 12.25 13 12.25C13.4135 12.25 13.75 12.5865 13.75 13C13.75 13.4135 13.4135 13.75 13 13.75C12.5865 13.75 12.25 13.4135 12.25 13ZM14.7882 14.86C14.5828 14.4447 14.2423 14.1175 13.828 13.9292C14.0848 13.7002 14.25 13.3705 14.25 13C14.25 12.3108 13.6892 11.75 13 11.75C12.3108 11.75 11.75 12.3108 11.75 13C11.75 13.3705 11.9152 13.7002 12.172 13.9292C11.7577 14.1175 11.4172 14.4447 11.2118 14.86C10.9235 14.4817 10.75 14.0112 10.75 13.5C10.75 12.2592 11.7595 11.25 13 11.25C14.2405 11.25 15.25 12.2592 15.25 13.5C15.25 14.0112 15.0765 14.4817 14.7882 14.86Z"
                                  fill="url(#paint0_linear_702_13812)"
                                />
                              </g>
                              <defs>
                                <linearGradient
                                  id="paint0_linear_702_13812"
                                  x1="8"
                                  y1="0.75"
                                  x2="8"
                                  y2="16.25"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stopColor="#E1EEC3" />
                                  <stop offset="1" stopColor="#F05053" />
                                </linearGradient>
                                <clipPath id="clip0_702_13812">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="translate(0 0.5)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="ResourceAugmentation text-white text-base font-semibold font-urbaninst">
                            Resource Augmentation
                          </div>
                        </div>
                        <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                          <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                            <div className=" self-stretch text-neutral-400 text-xs font-light font-urbaninst">
                              The intuitive resources augmentation
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                        <div className="LearnMore text-neutral-200 text-xs font-medium font-urbaninst">
                          Learn more
                        </div>
                        <div className="LeftUp1 w-4 h-4 relative origin-top-left flex-col justify-start items-start inline-flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g id="left-up 1">
                              <g id="Group">
                                <g id="Group_2">
                                  <path
                                    id="Vector"
                                    d="M3.04029 13.9024L12.6667 4.27604L12.6667 9.66667C12.6667 9.85092 12.8157 10 13 10L13.6667 10C13.8509 10 14 9.85092 14 9.66667L14 2.33334C14 2.14909 13.8509 2 13.6667 2L6.3333 2C6.14908 2 5.99998 2.14909 5.99998 2.33334L5.99998 3C5.99998 3.18425 6.14908 3.33335 6.33333 3.33335L11.724 3.33335L2.0976 12.9597C2.03379 13.0235 2.00129 13.1068 2.00004 13.1904C1.99873 13.2774 2.03129 13.3647 2.0976 13.4311L2.56891 13.9024C2.6317 13.9652 2.71332 13.9977 2.79563 13.9999C2.88388 14.0023 2.97295 13.9697 3.04029 13.9024Z"
                                    fill="#DD4243"
                                  />
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}

          <div className="Frame1000003593 py-3 pl-10 w-full  border-b border-stone-900 justify-between items-end gap-32 inline-flex">
            <div className="Products text-stone-300 text-[18px] font-light font-urbaninst">
              Products
            </div>
            <div className="ArrowDown w-8 h-8 px-1 py-1.5 justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 10 6"
                fill="none"
              >
                <g id="16">
                  <path
                    id="Vector"
                    d="M4.99996 5.66667C4.91222 5.66717 4.82525 5.65036 4.74402 5.61718C4.6628 5.584 4.58892 5.53512 4.52663 5.47333L0.526628 1.47333C0.401092 1.3478 0.330566 1.17753 0.330566 0.999999C0.330566 0.822465 0.401092 0.652201 0.526628 0.526666C0.652163 0.40113 0.822426 0.330605 0.999961 0.330605C1.1775 0.330605 1.34776 0.40113 1.47329 0.526666L4.99996 4.06L8.52663 0.533332C8.65416 0.424115 8.81821 0.367044 8.986 0.373525C9.15378 0.380005 9.31294 0.449561 9.43167 0.56829C9.5504 0.68702 9.61995 0.846179 9.62643 1.01396C9.63292 1.18175 9.57585 1.3458 9.46663 1.47333L5.46663 5.47333C5.34245 5.59649 5.17485 5.66593 4.99996 5.66667Z"
                    fill="#CACACA"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
