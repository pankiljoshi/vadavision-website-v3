"use client";
import React, { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Link from "next/link";
import Image from "next/image";
import UiuxServise from "../../../../public/Images/uiuxDesignServise.png";
import AiFace from "../../../../public/Images/aiRobotFace.png";
import Usflag from "../../../../public/Images/usFlag.png";
import spainFlag from "../../../../public/Images/spainFlag.png";
import franceFlag from "../../../../public/Images/franceFlag.png";
const RedBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="43"
    className="top-0 absolute"
    viewBox="0 0 56 43"
    fill="none"
  >
    <rect width="56" height="5" fill="#DE090A" />
    <rect y="5" width="56" height="38" fill="url(#paint0_linear_73_324)" />
    <defs>
      <linearGradient
        id="paint0_linear_73_324"
        x1="28"
        y1="5"
        x2="28"
        y2="36.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE090A" stopOpacity="0.49" />
        <stop offset="1" stopColor="#DD4243" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const [isAiServisesVisible, setIsAiServiseVisible] = useState(true);
  const showAiServises = () => {
    setIsAiServiseVisible(true);
    setUiUxVisible(false);
  };
  const [isUiUXVisible, setUiUxVisible] = useState(false);
  const showUiUx = () => {
    setUiUxVisible(true);
    setIsAiServiseVisible(false);
  };
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handelOpenDropDown = () => {
    setIsDropDownOpen(true);
  };
  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };
  const [showSVG, setShowSVG] = useState(true);

  const handleToggle = () => {
    setShowSVG(!showSVG);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState("home");
  return (
    <>
      <div className="NavigationWeb w-full px-20 relative  padding-none pt-2 pb-2 bg-white bg-opacity-5 border border-neutral-900 ">
        <div className="responsive-navbar ">
          <div className="flex justify-between items-center h-[60px]">
            <div className="Frame2 cursor-pointer   justify-start items-center gap-2 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
              >
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.1027 3.68923L40.9164 18.8531L49.9564 18.8443L49.9633 25.8165L37.8388 25.8284L24.0226 10.6615H13.5232C12.2975 12.8927 9.92484 14.4088 7.2044 14.4088C3.23197 14.4088 0 11.1769 0 7.2044C0 3.23186 3.23186 -0.000116197 7.2044 3.13326e-09C9.9009 3.13326e-09 12.2547 1.48996 13.4896 3.68923H27.1027ZM4.64826 7.2044C4.64826 8.61406 5.79496 9.76064 7.20451 9.76064C8.61395 9.76064 9.76076 8.61395 9.76076 7.2044C9.76076 5.79496 8.61406 4.64815 7.20451 4.64815C5.79496 4.64815 4.64826 5.79496 4.64826 7.2044ZM37.0445 5.28726L34.4741 8.35504L39.2129 13.5563L40.3006 12.2595H49.9641V5.28726H37.0445ZM25.6569 18.8825H21.5207C20.2903 16.6672 17.9272 15.1642 15.2187 15.1642C11.2462 15.1642 8.01434 18.3961 8.01434 22.3686C8.01434 26.3412 11.2463 29.573 15.2187 29.573C17.9273 29.573 20.2905 28.0698 21.5207 25.8548H28.9118L31.6831 22.5459L26.945 17.3446L25.6569 18.8825ZM15.2186 24.9249C13.8091 24.9249 12.6624 23.7781 12.6624 22.3686C12.6624 20.959 13.8091 19.8124 15.2186 19.8124C16.6282 19.8124 17.7749 20.959 17.7749 22.3686C17.7749 23.7781 16.6282 24.9249 15.2186 24.9249Z"
                  fill="url(#paint0_linear_312_21)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_312_21"
                    x1="0"
                    y1="0"
                    x2="52.0709"
                    y2="9.89367"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E12223" />
                    <stop offset="1" stopColor="#FB5F60" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="Vadavision text-white text-2xl font-bold prompt leading-7">
                VadaVision!
              </div>
            </div>
            <div className="">
              <div className="Frame  justify-start items-center gap-8 inline-flex">
                <Link href="/">
                  <div
                    className={`Home text-white cursor-pointer  text-base font-semibold font-urbaninst ${
                      (activeTab === "home" || hoveredTab === "home") &&
                      "active"
                    }`}
                    onMouseEnter={() => setHoveredTab("home")}
                    onMouseLeave={() => setHoveredTab("")}
                    onClick={() => setActiveTab("home")}
                  >
                    {(activeTab === "home" || hoveredTab === "home") && (
                      <RedBar />
                    )}
                    <span
                      className=" font-urbaninst ml-2 font-light "
                      onClick={() => setActiveTab("home")}
                    >
                      Home
                    </span>
                  </div>
                </Link>

                <div
                  className={`About text-neutral-400 cursor-pointer text-base font-medium font-urbaninst ${
                    (activeTab === "about" || hoveredTab === "about") &&
                    "active"
                  }`}
                  onMouseEnter={() => setHoveredTab("about")}
                  onMouseLeave={() => setHoveredTab("")}
                  onClick={() => setActiveTab("about")}
                >
                  {(activeTab === "about" || hoveredTab === "about") && (
                    <RedBar />
                  )}{" "}
                  <span className="ml-1 urbanist text-[#8E8E8E] font-light">
                    About
                  </span>
                </div>

                <div className="Frame3 justify-start items-center gap-1 flex">
                  <div
                    className={`Services text-neutral-400   cursor-pointer text-base font-medium font-urbaninst ${
                      activeTab === "services" ? "active" : ""
                    }`}
                    onMouseEnter={() => {
                      setActiveTab("services");
                      handleOpenPopup();
                    }}
                    onClick={() => setActiveTab("services")}
                  >
                    <div>
                      {isPopupOpen && (
                        <div className="fixed inset-0 backdrop-blur-[8px] responsive-servise-dropdown  mt-20  flex z-10  px-10  ">
                          <div className="flex   ">
                            <div
                              className="w-full px-4  h-[484px] bg-black  "
                              onMouseLeave={() => {
                                setActiveTab("home");
                                handleClosePopup();
                              }}
                            >
                              <div className="flex flex-row gap-6">
                                <div className="flex flex-col">
                                  <div className="flex flex-row gap-6 cards-gap  mt-10">
                                    <Link href="/ai-bot-landing">
                                      <div
                                        onMouseEnter={showAiServises}
                                        className="servises-dropdown-card w-[288px] h-[192px] p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950  border border-black group hover:border hover:border-neutral-400 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 h-36 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 h-24 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap justify-start items-center gap-4 inline-flex">
                                              <div className="Frame1171281402 flex-col justify-start items-start gap-4 inline-flex">
                                                <div className="AiAssistant1 w-8 h-8 relative">
                                                  <div className="Group w-8 h-8 left-[0.81px] top-0 absolute">
                                                    <div className="Group w-7 h-7 left-[1.38px] top-[3.44px] absolute"></div>
                                                    <div className="Group w-8 h-8 left-0 top-0 absolute">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="32"
                                                        height="32"
                                                        viewBox="0 0 32 32"
                                                        className="servise-dropdown-svg"
                                                        fill="none"
                                                      >
                                                        <g
                                                          id="ai-assistant 1"
                                                          clipPath="url(#clip0_478_5227)"
                                                        >
                                                          <g id="Group">
                                                            <g id="Group_2">
                                                              <path
                                                                id="Vector"
                                                                d="M15.3125 3.43661H16.6875V6.1867H15.3125V3.43661Z"
                                                                fill="url(#paint0_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_2"
                                                                d="M24.8753 22.9997H27.7504V24.3748H24.8753V22.9997Z"
                                                                fill="url(#paint1_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_3"
                                                                d="M28.4379 25.0623V31.3125C28.4379 31.6922 28.7457 32 29.1254 32C29.5051 32 29.8129 31.6922 29.8129 31.3125V25.0623H28.4379Z"
                                                                fill="url(#paint2_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_4"
                                                                d="M4.24963 22.9997H7.12472V24.3748H4.24963V22.9997Z"
                                                                fill="url(#paint3_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_5"
                                                                d="M2.18707 25.0623V31.3125C2.18707 31.6922 2.49489 32 2.87459 32C3.25429 32 3.56212 31.6922 3.56212 31.3125V25.0623H2.18707Z"
                                                                fill="url(#paint4_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_6"
                                                                d="M15.391 9.2088C15.3886 9.20249 15.3861 9.19617 15.3836 9.18992C15.2577 8.88423 14.963 8.68678 14.6324 8.68678C14.6321 8.68678 14.6318 8.68678 14.6315 8.68678C14.3006 8.68716 14.0058 8.88529 13.8806 9.19155C13.8785 9.19667 13.8765 9.20186 13.8745 9.20705L11.8092 14.6298C11.674 14.9846 11.8521 15.3818 12.207 15.517C12.562 15.6521 12.9591 15.4741 13.0941 15.1192L13.4398 14.2115H15.809L16.1508 15.1172C16.2548 15.3926 16.5164 15.5622 16.7942 15.5622C16.8749 15.5622 16.957 15.5479 17.0369 15.5177C17.3921 15.3837 17.5714 14.987 17.4374 14.6318L15.391 9.2088ZM13.9636 12.8364L14.63 11.0869L15.2903 12.8364H13.9636Z"
                                                                fill="url(#paint5_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_7"
                                                                d="M19.5483 8.68678C19.1686 8.68678 18.8608 8.9946 18.8608 9.3743V14.8745C18.8608 15.2542 19.1686 15.562 19.5483 15.562C19.928 15.562 20.2358 15.2542 20.2358 14.8745V9.3743C20.2358 8.9946 19.928 8.68678 19.5483 8.68678Z"
                                                                fill="url(#paint6_linear_478_5227)"
                                                              />
                                                            </g>
                                                            <g id="Group_3">
                                                              <path
                                                                id="Vector_8"
                                                                d="M9.87478 29.2499H22.1252C22.5049 29.2499 22.8127 28.9421 22.8127 28.5624V23.6872C22.8127 23.3075 22.5049 22.9997 22.1252 22.9997H9.87478C9.49508 22.9997 9.18726 23.3075 9.18726 23.6872V28.5624C9.18726 28.9421 9.49508 29.2499 9.87478 29.2499ZM10.5623 24.3748H21.4376V27.8749H10.5623V24.3748Z"
                                                                fill="url(#paint7_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_9"
                                                                d="M25.4636 9.74931H24.3127V8.26976C24.3127 6.74209 23.0698 5.49918 21.5421 5.49918H10.4578C8.93013 5.49918 7.68721 6.74209 7.68721 8.26976V9.74931H6.53636C5.7924 9.74931 5.18713 10.3546 5.18713 11.0985V13.1502C5.18713 13.8942 5.7924 14.4994 6.53636 14.4994H7.68721V15.9789C7.68721 17.5066 8.93013 18.7495 10.4578 18.7495H11.6027V20.2496H7.12469C6.74499 20.2496 6.43717 20.5574 6.43717 20.9371V31.3124C6.43717 31.6921 6.74499 31.9999 7.12469 31.9999H24.8752C25.2549 31.9999 25.5628 31.6921 25.5628 31.3124V20.9371C25.5628 20.5574 25.2549 20.2496 24.8752 20.2496H20.3972V18.7495H21.5421C23.0698 18.7495 24.3127 17.5066 24.3127 15.9789V14.4994H25.4636C26.2075 14.4994 26.8128 13.8941 26.8128 13.1502V11.0985C26.8128 10.3546 26.2076 9.74931 25.4636 9.74931ZM6.56218 13.1244V11.1244H7.68721V13.1244H6.56218ZM24.1877 30.625H7.81222V21.6247H24.1877V30.625ZM19.0222 20.2496H12.9778V18.7496H19.0222V20.2496ZM22.9377 15.979C22.9377 16.7485 22.3116 17.3745 21.5421 17.3745H10.4578C9.68827 17.3745 9.06226 16.7485 9.06226 15.979V8.26976C9.06226 7.50024 9.68834 6.87422 10.4578 6.87422H21.5421C22.3117 6.87422 22.9377 7.50024 22.9377 8.26976V15.979ZM25.4378 13.1244H24.3127V11.1244H25.4378V13.1244Z"
                                                                fill="url(#paint8_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_10"
                                                                d="M16 4.1232C16.5282 4.1232 17.0564 3.92213 17.4585 3.52005C18.2626 2.7159 18.2626 1.40736 17.4585 0.603212C16.6543 -0.200875 15.3458 -0.201063 14.5415 0.603212C13.7374 1.40736 13.7374 2.7159 14.5415 3.52005C14.9437 3.92213 15.4718 4.1232 16 4.1232ZM15.5139 1.57543C15.6479 1.44136 15.8239 1.37436 16 1.37436C16.176 1.37436 16.3521 1.44136 16.4862 1.57537C16.7542 1.84344 16.7542 2.27964 16.4862 2.54765C16.2181 2.81572 15.7819 2.81578 15.5138 2.54765C15.2457 2.27951 15.2458 1.8435 15.5139 1.57543Z"
                                                                fill="url(#paint9_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_11"
                                                                d="M29.1254 21.6247C27.9881 21.6247 27.0628 22.55 27.0628 23.6872C27.0628 24.8245 27.9881 25.7498 29.1254 25.7498C30.2627 25.7498 31.1879 24.8245 31.1879 23.6872C31.1879 22.55 30.2627 21.6247 29.1254 21.6247ZM29.1254 24.3748C28.7463 24.3748 28.4378 24.0663 28.4378 23.6872C28.4378 23.3082 28.7463 22.9997 29.1254 22.9997C29.5044 22.9997 29.8129 23.3082 29.8129 23.6872C29.8129 24.0663 29.5045 24.3748 29.1254 24.3748Z"
                                                                fill="url(#paint10_linear_478_5227)"
                                                              />
                                                              <path
                                                                id="Vector_12"
                                                                d="M2.87458 21.6247C1.73729 21.6247 0.812012 22.55 0.812012 23.6872C0.812012 24.8245 1.73729 25.7498 2.87458 25.7498C4.01186 25.7498 4.93714 24.8245 4.93714 23.6872C4.93714 22.55 4.01186 21.6247 2.87458 21.6247ZM2.87458 24.3748C2.4955 24.3748 2.18705 24.0663 2.18705 23.6872C2.18705 23.3082 2.4955 22.9997 2.87458 22.9997C3.25365 22.9997 3.5621 23.3082 3.5621 23.6872C3.5621 24.0663 3.25371 24.3748 2.87458 24.3748Z"
                                                                fill="url(#paint11_linear_478_5227)"
                                                              />
                                                            </g>
                                                          </g>
                                                        </g>
                                                        <defs>
                                                          <linearGradient
                                                            id="paint0_linear_478_5227"
                                                            x1="16"
                                                            y1="3.43661"
                                                            x2="16"
                                                            y2="6.1867"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint1_linear_478_5227"
                                                            x1="26.3129"
                                                            y1="22.9997"
                                                            x2="26.3129"
                                                            y2="24.3748"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint2_linear_478_5227"
                                                            x1="29.1254"
                                                            y1="25.0623"
                                                            x2="29.1254"
                                                            y2="32"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint3_linear_478_5227"
                                                            x1="5.68718"
                                                            y1="22.9997"
                                                            x2="5.68718"
                                                            y2="24.3748"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint4_linear_478_5227"
                                                            x1="2.87459"
                                                            y1="25.0623"
                                                            x2="2.87459"
                                                            y2="32"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint5_linear_478_5227"
                                                            x1="14.6229"
                                                            y1="8.68678"
                                                            x2="14.6229"
                                                            y2="15.5622"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint6_linear_478_5227"
                                                            x1="19.5483"
                                                            y1="8.68678"
                                                            x2="19.5483"
                                                            y2="15.562"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint7_linear_478_5227"
                                                            x1="16"
                                                            y1="22.9997"
                                                            x2="16"
                                                            y2="29.2499"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint8_linear_478_5227"
                                                            x1="16"
                                                            y1="5.49918"
                                                            x2="16"
                                                            y2="31.9999"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint9_linear_478_5227"
                                                            x1="16"
                                                            y1="7.62939e-05"
                                                            x2="16"
                                                            y2="4.1232"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint10_linear_478_5227"
                                                            x1="29.1254"
                                                            y1="21.6247"
                                                            x2="29.1254"
                                                            y2="25.7498"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <linearGradient
                                                            id="paint11_linear_478_5227"
                                                            x1="2.87458"
                                                            y1="21.6247"
                                                            x2="2.87458"
                                                            y2="25.7498"
                                                            gradientUnits="userSpaceOnUse"
                                                          >
                                                            <stop stopColor="#A8FF78" />
                                                            <stop
                                                              offset="1"
                                                              stopColor="#78FFD6"
                                                            />
                                                          </linearGradient>
                                                          <clipPath id="clip0_478_5227">
                                                            <rect
                                                              width="32"
                                                              height="32"
                                                              fill="white"
                                                            />
                                                          </clipPath>
                                                        </defs>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="AiServices AppDevelopment text-white text-2xl font-normal urbanist">
                                                AI Services
                                              </div>
                                            </div>
                                            <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                                <div className=" ai-servise-text leading-tight self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                  Get the powerful AI services
                                                  built by the experts.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="Frame1171281437 servise-dropdown-ai-servise justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                fill="none"
                                              >
                                                <g id="left-up 1">
                                                  <g id="Group">
                                                    <g id="Group_2">
                                                      <path
                                                        id="Vector"
                                                        d="M3.70692 14.4024L13.3333 4.77604L13.3333 10.1667C13.3333 10.3509 13.4824 10.5 13.6666 10.5L14.3333 10.5C14.5175 10.5 14.6666 10.3509 14.6666 10.1667L14.6666 2.83334C14.6666 2.64909 14.5175 2.5 14.3333 2.5L6.99992 2.5C6.8157 2.5 6.66661 2.64909 6.66661 2.83334L6.66661 3.5C6.66661 3.68425 6.8157 3.83335 6.99995 3.83335L12.3906 3.83335L2.76423 13.4597C2.70041 13.5235 2.66791 13.6068 2.66666 13.6904C2.66535 13.7774 2.69791 13.8647 2.76423 13.9311L3.23554 14.4024C3.29832 14.4652 3.37995 14.4977 3.46226 14.4999C3.55051 14.5023 3.63957 14.4697 3.70692 14.4024Z"
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

                                    <div
                                      onMouseEnter={showUiUx}
                                      className="servises-dropdown-card w-[288px] h-[192px] p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 group border border-black hover:border  hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex"
                                    >
                                      <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                        <div className="Frame1171281438 w-60 h-24 flex-col justify-start items-start gap-6 flex">
                                          <div className="ai-servise-dropdown-gap justify-start items-center gap-4 inline-flex">
                                            <div className="VectorIllustration w-6 h-6 relative">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                className="servise-dropdown-svg"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                              >
                                                <g id="Vector_Illustration">
                                                  <path
                                                    id="Vector"
                                                    d="M21.315 20.5826C22.7245 20.5826 23.8712 19.4398 23.8712 18.0305V2.89608C23.8712 1.57416 22.7969 0.5 21.4751 0.5H2.72945C1.40753 0.5 0.333374 1.57416 0.333374 2.89608V18.0305C0.333374 19.4398 1.47989 20.5826 2.88941 20.5826H8.73536V22.0479H8.04892C7.4219 22.0479 6.91114 22.5542 6.91114 23.1812V24.0356C6.91114 24.2911 7.12012 24.5 7.37559 24.5H16.8306C17.0861 24.5 17.2951 24.2911 17.2951 24.0356V23.1812C17.2951 22.5542 16.7843 22.0479 16.1573 22.0479H15.4691V20.5826H21.315ZM12.1041 19.3446C11.7423 19.3446 11.4489 19.0552 11.4489 18.6932C11.4489 18.3275 11.7423 18.0342 12.1041 18.0342C12.4622 18.0342 12.7555 18.3275 12.7555 18.6932C12.7555 19.0552 12.4622 19.3446 12.1041 19.3446ZM1.09524 16.8077V2.89608C1.09524 1.99713 1.83041 1.26186 2.72945 1.26186H21.4751C22.374 1.26186 23.1093 1.99713 23.1093 2.89608V16.8077H1.09524Z"
                                                    fill="url(#paint0_linear_478_5259)"
                                                  />
                                                  <path
                                                    id="Vector_2"
                                                    d="M18.9342 4.27124C18.458 4.27124 18.058 4.56847 17.9019 4.99125H13.2317C13.0755 4.56847 12.6717 4.27124 12.1994 4.27124C11.727 4.27124 11.327 4.56847 11.1709 4.99125H6.30254C6.1463 4.56847 5.74639 4.27124 5.27023 4.27124C4.66451 4.27124 4.1731 4.76266 4.1731 5.37218C4.1731 5.97781 4.66451 6.46922 5.27023 6.46922C5.74639 6.46922 6.1463 6.17218 6.30254 5.75312H9.02998C7.03771 6.80831 5.65116 8.86139 5.53686 11.2461H5.29311C5.07595 11.2461 4.89692 11.4213 4.89692 11.6423V12.8764C4.89692 13.0937 5.07595 13.2726 5.29311 13.2726H6.53113C6.7482 13.2726 6.92732 13.0937 6.92732 12.8764V11.6423C6.92732 11.4213 6.7482 11.2461 6.53113 11.2461H6.29872C6.44725 8.49199 8.52712 6.24063 11.1975 5.82547C11.3156 6.07695 11.5175 6.27485 11.7727 6.38534C11.7689 6.39296 11.765 6.39687 11.7613 6.4045L8.95381 12.0193C8.88908 12.1527 8.90433 12.3166 9.00328 12.4308C9.09852 12.5489 9.25476 12.5984 9.39947 12.5565L12.1041 11.787L14.805 12.5565C14.9835 12.5963 15.1153 12.5392 15.2011 12.4308C15.3002 12.3166 15.3192 12.1527 15.2506 12.0193L12.4584 6.435C12.7784 6.36264 13.045 6.14539 13.186 5.85598C15.7724 6.34739 17.7572 8.553 17.9019 11.2461H17.6734C17.4562 11.2461 17.2772 11.4213 17.2772 11.6423V12.8764C17.2772 13.0937 17.4562 13.2726 17.6734 13.2726H18.9114C19.1285 13.2726 19.3076 13.0937 19.3076 12.8764V11.6423C19.3076 11.4213 19.1285 11.2461 18.9114 11.2461H18.6638C18.5495 8.86139 17.1629 6.80831 15.1706 5.75312H17.9019C18.058 6.17218 18.458 6.46922 18.9342 6.46922C19.5399 6.46922 20.0313 5.97781 20.0313 5.37218C20.0313 4.76266 19.5399 4.27124 18.9342 4.27124Z"
                                                    fill="url(#paint1_linear_478_5259)"
                                                  />
                                                </g>
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_478_5259"
                                                    x1="12.1023"
                                                    y1="0.5"
                                                    x2="12.1023"
                                                    y2="24.5"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#00B4DB" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#0083B0"
                                                    />
                                                  </linearGradient>
                                                  <linearGradient
                                                    id="paint1_linear_478_5259"
                                                    x1="12.1022"
                                                    y1="4.27124"
                                                    x2="12.1022"
                                                    y2="13.2726"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#00B4DB" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#0083B0"
                                                    />
                                                  </linearGradient>
                                                </defs>
                                              </svg>
                                            </div>
                                            <div className="UiUxDesign AppDevelopment text-white text-2xl font-normal urbanist">
                                              UI UX Design
                                            </div>
                                          </div>
                                          <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                                            <div className="Frame1171281435 self-stretch flex-col justify-start items-start gap-2 flex">
                                              <div className="app-development-text self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                Best in class UI and UX Designs.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="uiux-servise-dropdown justify-start items-center gap-2 inline-flex">
                                          <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                            Learn more
                                          </div>
                                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="17"
                                              height="17"
                                              viewBox="0 0 17 17"
                                              fill="none"
                                            >
                                              <g id="left-up 1">
                                                <g id="Group">
                                                  <g id="Group_2">
                                                    <path
                                                      id="Vector"
                                                      d="M3.70692 14.4024L13.3333 4.77604L13.3333 10.1667C13.3333 10.3509 13.4824 10.5 13.6666 10.5L14.3333 10.5C14.5175 10.5 14.6666 10.3509 14.6666 10.1667L14.6666 2.83334C14.6666 2.64909 14.5175 2.5 14.3333 2.5L6.99992 2.5C6.8157 2.5 6.66661 2.64909 6.66661 2.83334L6.66661 3.5C6.66661 3.68425 6.8157 3.83335 6.99995 3.83335L12.3906 3.83335L2.76423 13.4597C2.70041 13.5235 2.66791 13.6068 2.66666 13.6904C2.66535 13.7774 2.69791 13.8647 2.76423 13.9311L3.23554 14.4024C3.29832 14.4652 3.37995 14.4977 3.46226 14.4999C3.55051 14.5023 3.63957 14.4697 3.70692 14.4024Z"
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

                                    <div className="servises-dropdown-card w-[288px] h-[192px] p-6 border border-black bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950 group hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex">
                                      <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                        <div className="Frame1171281438 w-60 h-24 flex-col justify-start items-start gap-6 flex">
                                          <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-4 inline-flex">
                                            <div className="MobileDevelopment2 w-6 h-6 relative">
                                              <div className="Group w-5 h-5 left-[2px] top-[1px] absolute">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="25"
                                                  className="servise-dropdown-svg"
                                                  height="25"
                                                  viewBox="0 0 25 25"
                                                  fill="none"
                                                >
                                                  <g id="mobile-development 2">
                                                    <g id="Group">
                                                      <path
                                                        id="Vector"
                                                        d="M21.2446 5.5H16.6666V3.056C16.6666 2.198 15.9686 1.5 15.1106 1.5H4.22263C3.36463 1.5 2.66663 2.198 2.66663 3.056V21.944C2.66663 22.802 3.36463 23.5 4.22263 23.5H15.1106C15.9686 23.5 16.6666 22.802 16.6666 21.944V19.5H21.2446C22.0286 19.5 22.6666 18.862 22.6666 18.078V6.922C22.6666 6.138 22.0286 5.5 21.2446 5.5ZM21.6666 6.922V7.5H16.6946C16.5586 7.5 16.4376 7.425 16.3776 7.304L15.9756 6.5H21.2446C21.4776 6.5 21.6666 6.689 21.6666 6.922ZM12.3576 2.5L11.8576 3.5H7.47563L6.97563 2.5H12.3576ZM15.1106 22.5H4.22263C3.91663 22.5 3.66663 22.25 3.66663 21.944V21.5H15.6666V21.944C15.6666 22.25 15.4176 22.5 15.1106 22.5ZM15.6666 20.5H3.66663V3.056C3.66663 2.75 3.91663 2.5 4.22263 2.5H5.85763L6.71963 4.224C6.80463 4.393 6.97763 4.5 7.16663 4.5H12.1666C12.3556 4.5 12.5286 4.393 12.6136 4.224L13.4756 2.5H15.1106C15.4176 2.5 15.6666 2.75 15.6666 3.056V5.5H9.08863C8.30463 5.5 7.66663 6.138 7.66663 6.922V18.078C7.66663 18.862 8.30463 19.5 9.08863 19.5H15.6666V20.5ZM21.2446 18.5H9.08863C8.85563 18.5 8.66663 18.311 8.66663 18.078V6.922C8.66663 6.689 8.85563 6.5 9.08863 6.5H14.8576L15.4826 7.75C15.7136 8.213 16.1786 8.5 16.6946 8.5H21.6666V18.078C21.6666 18.311 21.4776 18.5 21.2446 18.5Z"
                                                        fill="url(#paint0_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_2"
                                                        d="M10.8126 12.354C11.0066 12.548 11.3256 12.548 11.5196 12.354C11.7136 12.16 11.7136 11.841 11.5196 11.647L10.8736 11L11.5196 10.354C11.7146 10.159 11.7146 9.842 11.5196 9.647C11.3246 9.452 11.0076 9.452 10.8126 9.647L9.81263 10.647C9.61763 10.842 9.61763 11.159 9.81263 11.354L10.8126 12.354Z"
                                                        fill="url(#paint1_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_3"
                                                        d="M12.9426 12.447C13.1876 12.57 13.4906 12.469 13.6136 12.223L14.6136 10.223C14.7366 9.97799 14.6356 9.67499 14.3896 9.55199C14.1436 9.42899 13.8416 9.52999 13.7186 9.77599L12.7186 11.776C12.5966 12.022 12.6976 12.325 12.9426 12.447Z"
                                                        fill="url(#paint2_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_4"
                                                        d="M15.8126 12.354C16.0066 12.548 16.3256 12.548 16.5196 12.354L17.5196 11.354C17.7146 11.159 17.7146 10.842 17.5196 10.647L16.5196 9.647C16.3246 9.452 16.0076 9.452 15.8126 9.647C15.6176 9.842 15.6176 10.159 15.8126 10.354L16.4586 11L15.8126 11.646C15.6196 11.84 15.6196 12.16 15.8126 12.354Z"
                                                        fill="url(#paint3_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_5"
                                                        d="M10.1666 15.5H15.1666C15.4426 15.5 15.6666 15.276 15.6666 15C15.6666 14.724 15.4426 14.5 15.1666 14.5H10.1666C9.89063 14.5 9.66663 14.724 9.66663 15C9.66663 15.276 9.89063 15.5 10.1666 15.5Z"
                                                        fill="url(#paint4_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_6"
                                                        d="M19.1666 16.5H10.1666C9.89063 16.5 9.66663 16.724 9.66663 17C9.66663 17.276 9.89063 17.5 10.1666 17.5H19.1666C19.4426 17.5 19.6666 17.276 19.6666 17C19.6666 16.724 19.4426 16.5 19.1666 16.5Z"
                                                        fill="url(#paint5_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_7"
                                                        d="M13.1666 8.5C13.4428 8.5 13.6666 8.27614 13.6666 8C13.6666 7.72386 13.4428 7.5 13.1666 7.5C12.8905 7.5 12.6666 7.72386 12.6666 8C12.6666 8.27614 12.8905 8.5 13.1666 8.5Z"
                                                        fill="url(#paint6_linear_478_5278)"
                                                      />
                                                      <path
                                                        id="Vector_8"
                                                        d="M11.1666 8.5C11.4428 8.5 11.6666 8.27614 11.6666 8C11.6666 7.72386 11.4428 7.5 11.1666 7.5C10.8905 7.5 10.6666 7.72386 10.6666 8C10.6666 8.27614 10.8905 8.5 11.1666 8.5Z"
                                                        fill="url(#paint7_linear_478_5278)"
                                                      />
                                                    </g>
                                                  </g>
                                                  <defs>
                                                    <linearGradient
                                                      id="paint0_linear_478_5278"
                                                      x1="12.6666"
                                                      y1="1.5"
                                                      x2="12.6666"
                                                      y2="23.5"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint1_linear_478_5278"
                                                      x1="10.6661"
                                                      y1="9.50075"
                                                      x2="10.6661"
                                                      y2="12.4995"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint2_linear_478_5278"
                                                      x1="13.6664"
                                                      y1="9.49957"
                                                      x2="13.6664"
                                                      y2="12.4994"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint3_linear_478_5278"
                                                      x1="16.6661"
                                                      y1="9.50075"
                                                      x2="16.6661"
                                                      y2="12.4995"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint4_linear_478_5278"
                                                      x1="12.6666"
                                                      y1="14.5"
                                                      x2="12.6666"
                                                      y2="15.5"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint5_linear_478_5278"
                                                      x1="14.6666"
                                                      y1="16.5"
                                                      x2="14.6666"
                                                      y2="17.5"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint6_linear_478_5278"
                                                      x1="13.1666"
                                                      y1="7.5"
                                                      x2="13.1666"
                                                      y2="8.5"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                    <linearGradient
                                                      id="paint7_linear_478_5278"
                                                      x1="11.1666"
                                                      y1="7.5"
                                                      x2="11.1666"
                                                      y2="8.5"
                                                      gradientUnits="userSpaceOnUse"
                                                    >
                                                      <stop stopColor="#A8C0FF" />
                                                      <stop
                                                        offset="1"
                                                        stopColor="#8F7BE8"
                                                      />
                                                    </linearGradient>
                                                  </defs>
                                                </svg>
                                              </div>
                                            </div>
                                            <div className="AppDevelopment grow shrink basis-0 text-white text-2xl font-normal urbanist">
                                              App Development
                                            </div>
                                          </div>
                                          <div className=" app-development-text flex-col justify-start items-start gap-4 flex">
                                            <div className="Frame1171281435 self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                                              <div className=" text-[#8E8E8E] text-base font-extralight urbanist">
                                                iOS, Android SDK or Hybrid - we
                                                build it all.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="uiux-servise-dropdown justify-start items-center gap-2 inline-flex">
                                          <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                            Learn more
                                          </div>
                                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="17"
                                              height="17"
                                              viewBox="0 0 17 17"
                                              fill="none"
                                            >
                                              <g id="left-up 1">
                                                <g id="Group">
                                                  <g id="Group_2">
                                                    <path
                                                      id="Vector"
                                                      d="M3.70692 14.4024L13.3333 4.77604L13.3333 10.1667C13.3333 10.3509 13.4824 10.5 13.6666 10.5L14.3333 10.5C14.5175 10.5 14.6666 10.3509 14.6666 10.1667L14.6666 2.83334C14.6666 2.64909 14.5175 2.5 14.3333 2.5L6.99992 2.5C6.8157 2.5 6.66661 2.64909 6.66661 2.83334L6.66661 3.5C6.66661 3.68425 6.8157 3.83335 6.99995 3.83335L12.3906 3.83335L2.76423 13.4597C2.70041 13.5235 2.66791 13.6068 2.66666 13.6904C2.66535 13.7774 2.69791 13.8647 2.76423 13.9311L3.23554 14.4024C3.29832 14.4652 3.37995 14.4977 3.46226 14.4999C3.55051 14.5023 3.63957 14.4697 3.70692 14.4024Z"
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
                                  </div>
                                  <div className="flex flex-row gap-6 workflow-margin   mt-10">
                                    <div className="work-flow-automation-card w-[443px] h-[176px] p-6 border border-black group bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex">
                                      <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                        <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                                          <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-6 inline-flex">
                                            <div className="Resource1 w-6 h-6 relative">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                fill="none"
                                                className="servise-dropdown-svg"
                                              >
                                                <g
                                                  id="resource 1"
                                                  clipPath="url(#clip0_478_5306)"
                                                >
                                                  <path
                                                    id="Vector"
                                                    d="M19.5 15.875C17.352 15.875 15.5842 17.5257 15.3941 19.625H9.1815C9.0705 19.2429 8.91113 18.875 8.7075 18.5285L9.54975 17.4759C9.92062 17.012 10.125 16.4296 10.125 15.836V12.875H11.6441C11.8343 14.9742 13.602 16.625 15.75 16.625C18.0244 16.625 19.875 14.7744 19.875 12.5C19.875 10.2256 18.0244 8.375 15.75 8.375C13.602 8.375 11.8343 10.0258 11.6441 12.125H10.125V11.9608C10.125 11.4436 9.77437 10.9948 9.273 10.8695L8.625 10.7075L7.125 10.3321L6.375 10.1446L5.625 9.95712V7.625H9.75C10.3702 7.625 10.875 7.12025 10.875 6.5V5.375H15.3941C15.5842 7.47425 17.352 9.125 19.5 9.125C21.7744 9.125 23.625 7.27437 23.625 5C23.625 2.72563 21.7744 0.875 19.5 0.875C17.352 0.875 15.5842 2.52575 15.3941 4.625H10.875V3.5C10.875 2.87975 10.3702 2.375 9.75 2.375H1.5C0.87975 2.375 0.375 2.87975 0.375 3.5V6.5C0.375 7.12025 0.87975 7.625 1.5 7.625H3.375V11.4613C3.02737 11.1774 2.58975 11 2.10675 11C1.56525 11 1.125 11.4406 1.125 11.9818C1.125 12.1333 1.161 12.2855 1.2285 12.4209L1.677 13.3179C1.80638 13.5766 1.875 13.8669 1.875 14.156V15.8356C1.875 16.4296 2.07937 17.012 2.45025 17.4755L3.2925 18.5281C2.85637 19.271 2.625 20.1114 2.625 20.9769V24.125H9.375V20.9769C9.375 20.7744 9.35962 20.5737 9.33488 20.375H15.3941C15.5842 22.4743 17.352 24.125 19.5 24.125C21.7744 24.125 23.625 22.2744 23.625 20C23.625 17.7256 21.7744 15.875 19.5 15.875ZM13.638 15.1284C13.9519 14.2355 14.7874 13.625 15.75 13.625C16.7126 13.625 17.5481 14.2355 17.862 15.1284C17.283 15.5945 16.5491 15.875 15.75 15.875C14.9509 15.875 14.217 15.5945 13.638 15.1284ZM14.625 11.75C14.625 11.1298 15.1298 10.625 15.75 10.625C16.3702 10.625 16.875 11.1298 16.875 11.75C16.875 12.3702 16.3702 12.875 15.75 12.875C15.1298 12.875 14.625 12.3702 14.625 11.75ZM15.75 9.125C17.6108 9.125 19.125 10.6389 19.125 12.5C19.125 13.2669 18.8647 13.9726 18.4324 14.54C18.1241 13.9171 17.6134 13.4262 16.992 13.1439C17.3771 12.8004 17.625 12.3057 17.625 11.75C17.625 10.7161 16.7839 9.875 15.75 9.875C14.7161 9.875 13.875 10.7161 13.875 11.75C13.875 12.3057 14.1229 12.8004 14.508 13.1439C13.8866 13.4262 13.3759 13.9171 13.0676 14.54C12.6353 13.9726 12.375 13.2669 12.375 12.5C12.375 10.6389 13.8892 9.125 15.75 9.125ZM17.388 7.62838C17.7019 6.7355 18.5374 6.125 19.5 6.125C20.4626 6.125 21.2981 6.7355 21.612 7.62838C21.033 8.0945 20.2991 8.375 19.5 8.375C18.7009 8.375 17.967 8.0945 17.388 7.62838ZM18.375 4.25C18.375 3.62975 18.8797 3.125 19.5 3.125C20.1203 3.125 20.625 3.62975 20.625 4.25C20.625 4.87025 20.1203 5.375 19.5 5.375C18.8797 5.375 18.375 4.87025 18.375 4.25ZM19.5 1.625C21.3608 1.625 22.875 3.13888 22.875 5C22.875 5.76688 22.6147 6.47263 22.1824 7.04C21.8741 6.41713 21.3634 5.92625 20.742 5.64388C21.1271 5.30037 21.375 4.80575 21.375 4.25C21.375 3.21613 20.5339 2.375 19.5 2.375C18.4661 2.375 17.625 3.21613 17.625 4.25C17.625 4.80575 17.8729 5.30037 18.258 5.64388C17.6366 5.92625 17.1259 6.41713 16.8176 7.04C16.3853 6.47263 16.125 5.76688 16.125 5C16.125 3.13888 17.6392 1.625 19.5 1.625ZM1.5 6.875C1.29338 6.875 1.125 6.707 1.125 6.5V3.5C1.125 3.293 1.29338 3.125 1.5 3.125H9.75C9.95662 3.125 10.125 3.293 10.125 3.5V6.5C10.125 6.707 9.95662 6.875 9.75 6.875H5.625V6.5C5.625 5.87975 5.12025 5.375 4.5 5.375C3.87975 5.375 3.375 5.87975 3.375 6.5V6.875H1.5ZM2.625 15.836V14.1564C2.625 13.751 2.52938 13.3452 2.34788 12.9826L1.89937 12.0856C1.88325 12.0538 1.875 12.0177 1.875 11.9818C1.875 11.8539 1.97888 11.75 2.10675 11.75C2.80612 11.75 3.375 12.3193 3.375 13.0182V13.625V14.75H4.125V13.625V13.0182V6.5C4.125 6.293 4.29338 6.125 4.5 6.125C4.70662 6.125 4.875 6.293 4.875 6.5V9.76962V14.75H5.625V10.7304L6.375 10.9179V14.75H7.125V11.1054L7.875 11.2929V14.75H8.625V11.48L9.09075 11.5966C9.258 11.6386 9.375 11.7882 9.375 11.9608V15.836C9.375 16.2601 9.22913 16.676 8.964 17.0071L8.06962 18.125H3.93038L3.036 17.0071C2.77087 16.676 2.625 16.2598 2.625 15.836ZM8.625 23.375H3.375V20.9769C3.375 20.2329 3.57525 19.5099 3.95625 18.875H8.04375C8.42475 19.5099 8.625 20.2329 8.625 20.9769V23.375ZM17.388 22.6284C17.7019 21.7355 18.5374 21.125 19.5 21.125C20.4626 21.125 21.2981 21.7355 21.612 22.6284C21.033 23.0945 20.2991 23.375 19.5 23.375C18.7009 23.375 17.967 23.0945 17.388 22.6284ZM18.375 19.25C18.375 18.6297 18.8797 18.125 19.5 18.125C20.1203 18.125 20.625 18.6297 20.625 19.25C20.625 19.8703 20.1203 20.375 19.5 20.375C18.8797 20.375 18.375 19.8703 18.375 19.25ZM22.1824 22.04C21.8741 21.4171 21.3634 20.9263 20.742 20.6439C21.1271 20.3004 21.375 19.8057 21.375 19.25C21.375 18.2161 20.5339 17.375 19.5 17.375C18.4661 17.375 17.625 18.2161 17.625 19.25C17.625 19.8057 17.8729 20.3004 18.258 20.6439C17.6366 20.9263 17.1259 21.4171 16.8176 22.04C16.3853 21.4726 16.125 20.7669 16.125 20C16.125 18.1389 17.6392 16.625 19.5 16.625C21.3608 16.625 22.875 18.1389 22.875 20C22.875 20.7669 22.6147 21.4726 22.1824 22.04Z"
                                                    fill="url(#paint0_linear_478_5306)"
                                                  />
                                                </g>
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_478_5306"
                                                    x1="12"
                                                    y1="0.875"
                                                    x2="12"
                                                    y2="24.125"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#E1EEC3" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#F05053"
                                                    />
                                                  </linearGradient>
                                                  <clipPath id="clip0_478_5306">
                                                    <rect
                                                      width="24"
                                                      height="24"
                                                      fill="white"
                                                      transform="translate(0 0.5)"
                                                    />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                            <div className="ResourceAugmentation  leading-tight AppDevelopment grow shrink basis-0 text-white text-2xl font-normal urbanist">
                                              Resource Augmentation
                                            </div>
                                          </div>
                                          <div className="Frame1171281436 resource-argumentation  flex-col justify-start items-start gap-4 flex">
                                            <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                              <div className="TheIntuitiveResourcesAugmentation self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                The intuitive resources
                                                augmentation.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="resource-learn-more-margin justify-start items-center gap-2 inline-flex">
                                          <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                            Learn more
                                          </div>
                                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="17"
                                              height="17"
                                              viewBox="0 0 17 17"
                                              fill="none"
                                            >
                                              <g id="left-up 1">
                                                <g id="Group">
                                                  <g id="Group_2">
                                                    <path
                                                      id="Vector"
                                                      d="M3.70692 14.4024L13.3333 4.77604L13.3333 10.1667C13.3333 10.3509 13.4824 10.5 13.6666 10.5L14.3333 10.5C14.5175 10.5 14.6666 10.3509 14.6666 10.1667L14.6666 2.83334C14.6666 2.64909 14.5175 2.5 14.3333 2.5L6.99992 2.5C6.8157 2.5 6.66661 2.64909 6.66661 2.83334L6.66661 3.5C6.66661 3.68425 6.8157 3.83335 6.99995 3.83335L12.3906 3.83335L2.76423 13.4597C2.70041 13.5235 2.66791 13.6068 2.66666 13.6904C2.66535 13.7774 2.69791 13.8647 2.76423 13.9311L3.23554 14.4024C3.29832 14.4652 3.37995 14.4977 3.46226 14.4999C3.55051 14.5023 3.63957 14.4697 3.70692 14.4024Z"
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
                                    <div className="work-flow-automation-card w-[443px] border border-black h-44 group p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex">
                                      <div className="Frame1171281439 w-64 h-28 flex-col justify-start items-start gap-6 flex">
                                        <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                                          <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-6 inline-flex">
                                            <div className="Workflow1 w-6 h-6 relative">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="25"
                                                viewBox="0 0 24 25"
                                                className="servise-dropdown-svg"
                                                fill="none"
                                              >
                                                <g
                                                  id="workflow 1"
                                                  clipPath="url(#clip0_478_5324)"
                                                >
                                                  <g id="Group">
                                                    <g id="Group_2">
                                                      <path
                                                        id="Vector"
                                                        d="M16.9688 17.4688V24.5H24V17.4688H16.9688ZM22.5938 23.0938H18.375V18.875H22.5938V23.0938Z"
                                                        fill="url(#paint0_linear_478_5324)"
                                                      />
                                                    </g>
                                                  </g>
                                                  <g id="Group_3">
                                                    <g id="Group_4">
                                                      <path
                                                        id="Vector_2"
                                                        d="M22.5938 3.3125H7.03125V0.5H0V7.53125H7.03125V4.71875H22.5938V11.7969H18.5879V10.3645L16.4531 12.4999L18.5879 14.6357V13.2031H22.5938C23.3692 13.2031 24 12.5723 24 11.7969V4.71875C24 3.94334 23.3692 3.3125 22.5938 3.3125ZM5.625 6.125H1.40625V1.90625H5.625V6.125Z"
                                                        fill="url(#paint1_linear_478_5324)"
                                                      />
                                                    </g>
                                                  </g>
                                                  <g id="Group_5">
                                                    <g id="Group_6">
                                                      <path
                                                        id="Vector_3"
                                                        d="M16.0312 20.9842L13.8965 18.8489V20.2812H1.45312V13.2031H8.48438V16.0156H15.5156V8.98438H8.48438V11.7969H1.45312C0.677719 11.7969 0.046875 12.4277 0.046875 13.2031V20.2812C0.046875 21.0567 0.677719 21.6875 1.45312 21.6875H13.8965V23.12L16.0312 20.9842ZM9.89062 10.3906H14.1094V14.6094H9.89062V10.3906Z"
                                                        fill="url(#paint2_linear_478_5324)"
                                                      />
                                                    </g>
                                                  </g>
                                                </g>
                                                <defs>
                                                  <linearGradient
                                                    id="paint0_linear_478_5324"
                                                    x1="20.4844"
                                                    y1="17.4688"
                                                    x2="20.4844"
                                                    y2="24.5"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#DAFB7E" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#8BFF88"
                                                    />
                                                  </linearGradient>
                                                  <linearGradient
                                                    id="paint1_linear_478_5324"
                                                    x1="12"
                                                    y1="0.5"
                                                    x2="12"
                                                    y2="14.6357"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#DAFB7E" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#8BFF88"
                                                    />
                                                  </linearGradient>
                                                  <linearGradient
                                                    id="paint2_linear_478_5324"
                                                    x1="8.03906"
                                                    y1="8.98438"
                                                    x2="8.03906"
                                                    y2="23.12"
                                                    gradientUnits="userSpaceOnUse"
                                                  >
                                                    <stop stopColor="#DAFB7E" />
                                                    <stop
                                                      offset="1"
                                                      stopColor="#8BFF88"
                                                    />
                                                  </linearGradient>
                                                  <clipPath id="clip0_478_5324">
                                                    <rect
                                                      width="24"
                                                      height="24"
                                                      fill="white"
                                                      transform="translate(0 0.5)"
                                                    />
                                                  </clipPath>
                                                </defs>
                                              </svg>
                                            </div>
                                            <div className="WorkflowAutomation AppDevelopment w-64 text-white text-2xl font-normal urbanist">
                                              Workflow Automation
                                            </div>
                                          </div>
                                          <div className="app-development-text  flex-col justify-start items-start gap-4 flex">
                                            <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                              <div className=" self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                Workflow automation like never
                                                before.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                                          <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                            Learn more
                                          </div>
                                          <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="17"
                                              height="17"
                                              viewBox="0 0 17 17"
                                              fill="none"
                                            >
                                              <g id="left-up 1">
                                                <g id="Group">
                                                  <g id="Group_2">
                                                    <path
                                                      id="Vector"
                                                      d="M3.70692 14.4024L13.3333 4.77604L13.3333 10.1667C13.3333 10.3509 13.4824 10.5 13.6666 10.5L14.3333 10.5C14.5175 10.5 14.6666 10.3509 14.6666 10.1667L14.6666 2.83334C14.6666 2.64909 14.5175 2.5 14.3333 2.5L6.99992 2.5C6.8157 2.5 6.66661 2.64909 6.66661 2.83334L6.66661 3.5C6.66661 3.68425 6.8157 3.83335 6.99995 3.83335L12.3906 3.83335L2.76423 13.4597C2.70041 13.5235 2.66791 13.6068 2.66666 13.6904C2.66535 13.7774 2.69791 13.8647 2.76423 13.9311L3.23554 14.4024C3.29832 14.4652 3.37995 14.4977 3.46226 14.4999C3.55051 14.5023 3.63957 14.4697 3.70692 14.4024Z"
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
                                  </div>
                                </div>
                                {isAiServisesVisible && (
                                  <div className="ai-servises-card  w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image src={AiFace} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your AI Projects with us
                                      </div>
                                      <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {isUiUXVisible && (
                                  <div className="ai-servises-card w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image src={UiuxServise} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your UI and UX projects with us{" "}
                                      </div>
                                      <div className="Frame1171281490 flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="17"
                                                viewBox="0 0 16 17"
                                                fill="none"
                                              >
                                                <g
                                                  id="correct 1"
                                                  clipPath="url(#clip0_478_5197)"
                                                >
                                                  <g id="Group">
                                                    <path
                                                      id="Vector"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M8 0.5C3.5875 0.5 0 4.0875 0 8.5C0 12.9125 3.5875 16.5 8 16.5C12.4125 16.5 16 12.9125 16 8.5C16 4.0875 12.4125 0.5 8 0.5Z"
                                                      fill="#4BAE4F"
                                                    />
                                                    <path
                                                      id="Vector_2"
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M11.8687 5.80313C12.0625 5.99688 12.0625 6.31563 11.8687 6.50938L7.18124 11.1969C7.08437 11.2938 6.95624 11.3438 6.82812 11.3438C6.69999 11.3438 6.57187 11.2938 6.47499 11.1969L4.13124 8.85313C3.93749 8.65938 3.93749 8.34063 4.13124 8.14688C4.32499 7.95313 4.64374 7.95313 4.83749 8.14688L6.82812 10.1375L11.1625 5.80313C11.3562 5.60625 11.675 5.60625 11.8687 5.80313Z"
                                                      fill="white"
                                                    />
                                                  </g>
                                                </g>
                                                <defs>
                                                  <clipPath id="clip0_478_5197">
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
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight  urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {activeTab === "services" && <RedBar />}
                    <div className="flex gap-2">
                      <span className=" text-[#8E8E8E] font-light urbanist">
                        Services
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        className="mt-2.5"
                      >
                        <path
                          d="M4.99996 6.16667C4.91222 6.16718 4.82525 6.15036 4.74402 6.11719C4.6628 6.08401 4.58892 6.03513 4.52663 5.97334L0.526628 1.97334C0.401092 1.8478 0.330566 1.67754 0.330566 1.50001C0.330566 1.32247 0.401092 1.15221 0.526628 1.02667C0.652163 0.901138 0.822426 0.830612 0.999961 0.830612C1.1775 0.830612 1.34776 0.901138 1.47329 1.02667L4.99996 4.56001L8.52663 1.03334C8.65416 0.924123 8.81821 0.867052 8.986 0.873532C9.15378 0.880013 9.31294 0.949568 9.43167 1.0683C9.5504 1.18703 9.61995 1.34619 9.62643 1.51397C9.63292 1.68176 9.57585 1.84581 9.46663 1.97334L5.46663 5.97334C5.34245 6.0965 5.17485 6.16594 4.99996 6.16667Z"
                          fill="#8E8E8E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="Frame4 justify-start items-center gap-1 flex">
                  <div
                    className={`Product text-neutral-400 cursor-pointer text-base font-medium font-urbaninst ${
                      (activeTab === "product" || hoveredTab === "product") &&
                      "active"
                    }`}
                    onMouseEnter={() => setHoveredTab("product")}
                    onMouseLeave={() => setHoveredTab("")}
                    onClick={() => setActiveTab("product")}
                  >
                    {(activeTab === "product" || hoveredTab === "product") && (
                      <RedBar />
                    )}{" "}
                    <div className="flex gap-2">
                      <span className=" text-[#8E8E8E] font-light urbanist">
                        Product
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        className="mt-2.5"
                        fill="none"
                      >
                        <path
                          d="M4.99996 6.16667C4.91222 6.16718 4.82525 6.15036 4.74402 6.11719C4.6628 6.08401 4.58892 6.03513 4.52663 5.97334L0.526628 1.97334C0.401092 1.8478 0.330566 1.67754 0.330566 1.50001C0.330566 1.32247 0.401092 1.15221 0.526628 1.02667C0.652163 0.901138 0.822426 0.830612 0.999961 0.830612C1.1775 0.830612 1.34776 0.901138 1.47329 1.02667L4.99996 4.56001L8.52663 1.03334C8.65416 0.924123 8.81821 0.867052 8.986 0.873532C9.15378 0.880013 9.31294 0.949568 9.43167 1.0683C9.5504 1.18703 9.61995 1.34619 9.62643 1.51397C9.63292 1.68176 9.57585 1.84581 9.46663 1.97334L5.46663 5.97334C5.34245 6.0965 5.17485 6.16594 4.99996 6.16667Z"
                          fill="#8E8E8E"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ArrowDown w-4 h-4 px-1 py-1.5 justify-center items-center flex" />
                </div>
              </div>
            </div>
            <div className="Frame7 right-[11px] top-[16px]  justify-start items-center gap-6 px-10 inline-flex ">
              <div className="Frame6 justify-start items-center gap-2 flex">
                <div className="UnitedKingdom11 w-4 h-4 relative">
                  <div className="Group w-4 h-4 left-[0.28px] top-[0.28px] "></div>
                  <div className="Group w-4 h-4 left-0 top-0 "></div>
                </div>
                <div
                  className="Frame5 justify-start items-center gap-1 flex"
                  onClick={toggleDropdown}
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mr-1"
                    >
                      <g id="united-kingdom(1) 1" clipPath="url(#clip0_312_31)">
                        <path
                          id="Vector"
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="#F0F0F0"
                        />
                        <g id="Group">
                          <path
                            id="Vector_2"
                            d="M1.65379 3.12943C1.02538 3.94702 0.551541 4.88936 0.275635 5.91308H4.43745L1.65379 3.12943Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_3"
                            d="M15.7245 5.9131C15.4486 4.88941 14.9747 3.94706 14.3463 3.12947L11.5627 5.9131H15.7245Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_4"
                            d="M0.275635 10.087C0.551572 11.1107 1.02542 12.053 1.65379 12.8706L4.43735 10.087H0.275635Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_5"
                            d="M12.8705 1.65378C12.0529 1.02537 11.1106 0.551526 10.0869 0.275589V4.43737L12.8705 1.65378Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_6"
                            d="M3.12939 14.3462C3.94699 14.9746 4.88933 15.4485 5.91302 15.7244V11.5627L3.12939 14.3462Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_7"
                            d="M5.91299 0.275589C4.8893 0.551526 3.94696 1.02537 3.12939 1.65375L5.91299 4.43734V0.275589Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_8"
                            d="M10.0869 15.7244C11.1106 15.4485 12.0529 14.9746 12.8705 14.3462L10.0869 11.5627V15.7244Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_9"
                            d="M11.5627 10.087L14.3463 12.8706C14.9747 12.0531 15.4486 11.1107 15.7245 10.087H11.5627Z"
                            fill="#0052B4"
                          />
                        </g>
                        <g id="Group_2">
                          <path
                            id="Vector_10"
                            d="M15.9323 6.95653H9.04353H9.0435V0.0677188C8.70191 0.02325 8.35366 0 8 0C7.64628 0 7.29809 0.02325 6.95653 0.0677188V6.95647V6.9565H0.0677188C0.02325 7.29809 0 7.64634 0 8C0 8.35372 0.02325 8.70191 0.0677188 9.04347H6.95647H6.9565V15.9323C7.29809 15.9768 7.64628 16 8 16C8.35366 16 8.70191 15.9768 9.04347 15.9323V9.04353V9.0435H15.9323C15.9768 8.70191 16 8.35372 16 8C16 7.64634 15.9768 7.29809 15.9323 6.95653Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_11"
                            d="M10.0869 10.087L13.6568 13.6569C13.821 13.4928 13.9776 13.3212 14.127 13.1433L11.0707 10.087H10.0869V10.087Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_12"
                            d="M5.91292 10.087H5.91286L2.34302 13.6568C2.50714 13.821 2.67874 13.9777 2.85661 14.1271L5.91292 11.0707V10.087Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_13"
                            d="M5.91293 5.91309V5.91303L2.34305 2.34312C2.17887 2.50725 2.02224 2.67884 1.8728 2.85672L4.92915 5.91306L5.91293 5.91309Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_14"
                            d="M10.0869 5.9131L13.6568 2.34316C13.4927 2.17897 13.3211 2.02235 13.1432 1.87294L10.0869 4.92928V5.9131Z"
                            fill="#D80027"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_312_31">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Eng text-[16px] text-[#8E8E8E] cursor-pointer font-light urbanist">
                    ENG
                  </div>
                  <div className="ArrowDown w-4 h-4 px-1  cursor-pointer justify-center items-center flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <g id="16">
                        <path
                          id="Vector"
                          d="M4.99996 5.66667C4.91222 5.66718 4.82525 5.65036 4.74402 5.61719C4.6628 5.58401 4.58892 5.53513 4.52663 5.47334L0.526628 1.47334C0.401092 1.3478 0.330566 1.17754 0.330566 1.00001C0.330566 0.822472 0.401092 0.652209 0.526628 0.526673C0.652163 0.401138 0.822426 0.330612 0.999961 0.330612C1.1775 0.330612 1.34776 0.401138 1.47329 0.526673L4.99996 4.06001L8.52663 0.53334C8.65416 0.424123 8.81821 0.367052 8.986 0.373532C9.15378 0.380013 9.31294 0.449568 9.43167 0.568298C9.5504 0.687028 9.61995 0.846187 9.62643 1.01397C9.63292 1.18176 9.57585 1.34581 9.46663 1.47334L5.46663 5.47334C5.34245 5.5965 5.17485 5.66594 4.99996 5.66667Z"
                          fill="#8E8E8E"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute top-full right-20 w-[153px] h-[200px]  bg-stone-900 justify-start items-start gap-4 inline-flex">
                    <div className=" p-4 justify-start items-start gap-4 inline-flex">
                      <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-center gap-2 inline-flex">
                            <div className="w-4 h-4 relative">
                              <div className="w-[15.45px] h-[15.45px] left-[0.28px] top-[0.28px] absolute">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="17"
                                  viewBox="0 0 16 17"
                                  fill="none"
                                >
                                  <g clipPath="url(#clip0_1608_4784)">
                                    <path
                                      d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z"
                                      fill="#F0F0F0"
                                    />
                                    <path
                                      d="M1.65379 3.62946C1.02538 4.44705 0.551541 5.38939 0.275635 6.41311H4.43745L1.65379 3.62946Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M15.7245 6.41311C15.4486 5.38942 14.9747 4.44708 14.3463 3.62949L11.5627 6.41311H15.7245Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M0.275635 10.587C0.551572 11.6107 1.02542 12.553 1.65379 13.3706L4.43735 10.587H0.275635Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M12.8705 2.15379C12.0529 1.52539 11.1106 1.05154 10.0869 0.775604V4.93739L12.8705 2.15379Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M3.12939 14.8462C3.94699 15.4746 4.88933 15.9485 5.91302 16.2244V12.0627L3.12939 14.8462Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M5.91299 0.775604C4.8893 1.05154 3.94696 1.52539 3.12939 2.15376L5.91299 4.93735V0.775604Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M10.0869 16.2244C11.1106 15.9485 12.0529 15.4746 12.8705 14.8463L10.0869 12.0627V16.2244Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M11.5627 10.587L14.3463 13.3706C14.9747 12.5531 15.4486 11.6107 15.7245 10.587H11.5627Z"
                                      fill="#0052B4"
                                    />
                                    <path
                                      d="M15.9323 7.45653H9.04353H9.0435V0.567719C8.70191 0.52325 8.35366 0.5 8 0.5C7.64628 0.5 7.29809 0.52325 6.95653 0.567719V7.45647V7.4565H0.0677188C0.02325 7.79809 0 8.14634 0 8.5C0 8.85372 0.02325 9.20191 0.0677188 9.54347H6.95647H6.9565V16.4323C7.29809 16.4768 7.64628 16.5 8 16.5C8.35366 16.5 8.70191 16.4768 9.04347 16.4323V9.54353V9.5435H15.9323C15.9768 9.20191 16 8.85372 16 8.5C16 8.14634 15.9768 7.79809 15.9323 7.45653Z"
                                      fill="#D80027"
                                    />
                                    <path
                                      d="M10.0869 10.587L13.6568 14.1569C13.821 13.9928 13.9776 13.8212 14.127 13.6433L11.0707 10.587H10.0869V10.587Z"
                                      fill="#D80027"
                                    />
                                    <path
                                      d="M5.91292 10.587H5.91286L2.34302 14.1568C2.50714 14.321 2.67874 14.4777 2.85661 14.6271L5.91292 11.5707V10.587Z"
                                      fill="#D80027"
                                    />
                                    <path
                                      d="M5.91293 6.41311V6.41305L2.34305 2.84314C2.17887 3.00726 2.02224 3.17886 1.8728 3.35673L4.92915 6.41308L5.91293 6.41311Z"
                                      fill="#D80027"
                                    />
                                    <path
                                      d="M10.0869 6.41308L13.6568 2.84314C13.4927 2.67896 13.3211 2.52233 13.1432 2.37292L10.0869 5.42927V6.41308Z"
                                      fill="#D80027"
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_1608_4784">
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
                              <div className="w-4 h-4 left-0 top-0 absolute"></div>
                            </div>
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-neutral-50 text-base font-medium urbanist">
                                ENG (UK)
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[0px] border-[0.5px] border-neutral-600"></div>
                        </div>
                        <div className="self-stretch h-[27px] flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-center gap-2 inline-flex">
                            <Image src={Usflag} width={18} />
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-neutral-400 text-base font-medium  urbanist">
                                ENG (US)
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[0px] border-[0.5px] border-neutral-600"></div>
                        </div>
                        <div className="self-stretch h-[27px] flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-center gap-2 inline-flex">
                            <Image src={spainFlag} width={20} />
                            <div className="justify-start items-center gap-1 flex">
                              <div className="text-neutral-400 text-base font-medium urbanist">
                                Spanish
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[0px] border-[0.5px] border-neutral-600"></div>
                        </div>
                        <div className="self-stretch h-[27px] cursor-pointer flex-col justify-start items-start gap-2 flex">
                          <div className="justify-start items-center cursor-pointer gap-2 inline-flex">
                            <Image src={franceFlag} width={20} />
                            <div className="justify-start  items-center gap-1 flex">
                              <div className="text-neutral-400 text-base font-medium urbanist">
                                French
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-[0px] border-[0.5px] border-neutral-600"></div>
                        </div>
                      </div>
                      <div className="w-1 h-[156px] relative bg-neutral-600">
                        <div className="w-1 h-[69px] left-0 top-0 absolute bg-red-500" />
                      </div>
                    </div>{" "}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger-icon  w-full relative  cursor-pointer hidden">
          <Link href="/">
            <div className="Frame2 cursor-pointer py-4  pl-5 justify-start items-center gap-2 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="24"
                viewBox="0 0 28 17"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.6634 2.496L22.1371 10.7002L27.0281 10.6954L27.0318 14.4676L20.4721 14.474L12.997 6.2682H7.3165C6.65335 7.47537 5.36967 8.29564 3.89782 8.29564C1.74861 8.29564 0 6.54709 0 4.39782C0 2.24854 1.74854 0.499937 3.89782 0.5C5.35672 0.5 6.63021 1.30612 7.29834 2.496H14.6634ZM2.51487 4.39782C2.51487 5.16049 3.13527 5.78083 3.89788 5.78083C4.66043 5.78083 5.2809 5.16043 5.2809 4.39782C5.2809 3.63527 4.6605 3.0148 3.89788 3.0148C3.13527 3.0148 2.51487 3.63527 2.51487 4.39782ZM20.0423 3.36068L18.6517 5.02045L21.2155 7.83451L21.804 7.13288H27.0322V3.36068H20.0423ZM13.8812 10.7161H11.6434C10.9777 9.51759 9.69922 8.70443 8.23385 8.70443C6.08457 8.70443 4.33603 10.453 4.33603 12.6022C4.33603 14.7515 6.08463 16.5001 8.23385 16.5001C9.69929 16.5001 10.9778 15.6868 11.6434 14.4883H15.6423L17.1416 12.6981L14.5781 9.88406L13.8812 10.7161ZM8.23378 13.9853C7.47117 13.9853 6.85077 13.3648 6.85077 12.6022C6.85077 11.8396 7.47117 11.2192 8.23378 11.2192C8.9964 11.2192 9.6168 11.8396 9.6168 12.6022C9.6168 13.3648 8.9964 13.9853 8.23378 13.9853Z"
                  fill="url(#paint0_linear_581_454)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_581_454"
                    x1="0"
                    y1="0.5"
                    x2="28.1721"
                    y2="5.85281"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E12223" />
                    <stop offset="1" stopColor="#FB5F60" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="Vadavision text-white text-xl font-bold prompt  leading-7">
                VadaVision!
              </div>
            </div>
          </Link>

          <div className="float-end mt-4 px-4" onClick={handleToggle}>
            {showSVG ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                onClick={handelOpenDropDown}
                viewBox="0 0 28 28"
                fill="none"
              >
                <g id="menu(1) 1">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 7.00001C3.5 6.35568 4.02234 5.83334 4.66667 5.83334H23.3333C23.9777 5.83334 24.5 6.35568 24.5 7.00001C24.5 7.64434 23.9777 8.16668 23.3333 8.16668H4.66667C4.02234 8.16668 3.5 7.64434 3.5 7.00001ZM3.5 14C3.5 13.3557 4.02234 12.8333 4.66667 12.8333H16.3333C16.9777 12.8333 17.5 13.3557 17.5 14C17.5 14.6444 16.9777 15.1667 16.3333 15.1667H4.66667C4.02234 15.1667 3.5 14.6444 3.5 14ZM3.5 21C3.5 20.3557 4.02234 19.8333 4.66667 19.8333H10.5C11.1443 19.8333 11.6667 20.3557 11.6667 21C11.6667 21.6444 11.1443 22.1667 10.5 22.1667H4.66667C4.02234 22.1667 3.5 21.6444 3.5 21Z"
                    fill="white"
                  />
                </g>
              </svg>
            ) : (
              <span className="text-white" onClick={closeDropDown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g id="02 User">
                    <path
                      id="Vector"
                      d="M1.37535 21.6667C1.1693 21.6667 0.96787 21.6056 0.796534 21.4912C0.625198 21.3767 0.491656 21.214 0.412799 21.0237C0.333942 20.8333 0.313314 20.6238 0.353522 20.4217C0.393731 20.2197 0.492971 20.034 0.638689 19.8884L19.8886 0.638479C20.0839 0.443104 20.3489 0.333344 20.6252 0.333344C20.9015 0.333344 21.1665 0.443104 21.3619 0.638479C21.5573 0.833854 21.667 1.09884 21.667 1.37514C21.667 1.65144 21.5573 1.91643 21.3619 2.1118L2.11201 21.3617C2.01536 21.4585 1.90053 21.5353 1.77411 21.5877C1.64769 21.64 1.51218 21.6669 1.37535 21.6667Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M20.6257 21.6667C20.4888 21.6669 20.3533 21.64 20.2269 21.5877C20.1005 21.5353 19.9856 21.4585 19.889 21.3617L0.63912 2.1118C0.443745 1.91643 0.333984 1.65144 0.333984 1.37514C0.333984 1.09884 0.443745 0.833854 0.63912 0.638479C0.834495 0.443104 1.09948 0.333344 1.37578 0.333344C1.65208 0.333344 1.91707 0.443104 2.11244 0.638479L21.3623 19.8884C21.508 20.034 21.6073 20.2197 21.6475 20.4217C21.6877 20.6238 21.6671 20.8333 21.5882 21.0237C21.5094 21.214 21.3758 21.3767 21.2045 21.4912C21.0331 21.6056 20.8317 21.6667 20.6257 21.6667Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
            )}
          </div>
          <div className="top-10 absolute  w-full z-50">
            {isDropDownOpen && <ResponsiveNavbar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
