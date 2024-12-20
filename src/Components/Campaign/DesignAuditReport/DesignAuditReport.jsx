"use client"
import { Lato, Prompt } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../../public/Images/NameLogo.svg";
import SpiralLoop from "../../../../public/Images/LooperGroup.svg";
import CheckIcon from "../../Common/Icons/CheckIcon";
import SprialDesign from "../../../../public/Images/audit-design.png";
import DesignAuditPopup from "../DesignAuditPopup/DesignAuditPopup";
import YellowArrow from '../../../Components/Common/Icons/YellowArrow'
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-prompt",
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const DesignAuditReport = ({darkMode}) => {
  const roadmapPoints = [
    {
      text: "Identify and fix 80% of usability problems on your website with expert analysis and guidance",
    },
    {
      text: "Use strategies to 2X or 4X your website conversion rates & maximize your online revenue",
    },
    {
      text: "Keep visitors stick around with 4x lower bounce rates using smart design elements",
    },
    {
      text: "See your website traffic grow 3x with methods that keep visitors coming back",
    },
    {
      text: "Attract new users with right marketing message, correct Call-To-Action placements and more",
    },
  ];
  const [isAuditPopupOpen,setAuditPopupOpen]=useState(false)
  const handelOpenAuditPopup = () => {
    setAuditPopupOpen(true)
  }
  const handelCloseAuditPopup = () => {
    setAuditPopupOpen(false)
  }
  
  return (
    <>
      <div
        className={`w-full bg-black  dark:bg-white relative px-4 py-16 sm:py-20 flex flex-col justify-center items-center ${lato.className}`}
      >
        <div
          className={`text-white dark:text-black text-[24px] sm:text-[32px] lg:text-[40px] w-full sm:w-[90%] md:w-[80%] lg:w-[65%] pt-8 leading-tight text-center font-extrabold ${lato.className}`}
        >
         Grow website traffic, 
          <span className="text-[#6CE9B9] dark:text-[#DD4243]"> convert more visitors</span>, and elevate your brand with our design audit
        </div>

        <div className="flex flex-col lg:flex-row items-center w-full justify-center py-10 gap-10 lg:gap-20 px-4 sm:px-8">
          <div className="w-full lg:w-[40%]">
            <div className="text-[18px] sm:text-[20px] lg:text-[22px] font-semibold dark:text-black text-white">
              What's inside your design audit report:
            </div>
            <ul className="space-y-4 pt-6">
              {roadmapPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-5">
                  <div className="w-[24px] h-[24px]">
                    {darkMode ? <CheckIcon/>: <YellowArrow/>}
                  </div>
                  <p className="text-[16px] sm:text-[18px] lg:text-[19px] font-semibold  dark:text-black text-white">
                    {point.text}
                  </p>
                </li>
              ))}
            </ul>
            <button onClick={handelOpenAuditPopup} className="text-[16px] sm:text-[20px] lg:text-[24px] flex justify-center items-center mx-auto mt-10 sm:mt-14  sm:mx-10 font-bold text-white bg-[#DD4243] py-3 px-6 sm:py-3.5 sm:px-10 rounded-md">
              GET FREE DESIGN AUDIT
            </button>
          </div>

          <div className="w-full lg:w-[380px] bg-[#0E0E0E] py-6 pl-6 ">
            <div className="flex relative">
              <Image src={Logo} alt="logo" />
              <div className="w-[244px] h-[62px] bg-[#D9D9D9] bg-opacity-30 md:block hidden absolute top-10 right-2 blur-3xl"></div>
            </div>
            <div className="text-[24px] sm:text-[32px] lg:text-[40px] font-bold relative pt-6 sm:pt-8 text-white leading-tight">
              DESIGN AUDIT REPORT
              <div className="w-[120px] md:block hidden sm:w-[160px] h-[3px] sm:h-[4px] absolute right-0 bottom-2 sm:bottom-4 bg-[#DD4243]"></div>
            </div>
            <div className="flex relative justify-end pt-6 sm:pt-8">
              <Image src={SpiralLoop} alt="SpiralLoop" height={390} />
              <div className="absolute bottom-2 sm:bottom-3 left-0">
                <div className="text-[14px] sm:text-[16px] font-semibold text-[#8E8E8E]">
                  Report by -
                </div>
                <div className="text-[16px] sm:text-[18px] font-semibold text-white">
                  Design Team - Vadavision
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-0 left-0 -z-10">
          <Image
            src={SprialDesign}
            alt="spiral design"
            width={600}
            height={220}
          />
        </div>
        {isAuditPopupOpen && <DesignAuditPopup onClose={handelCloseAuditPopup}/>}

      </div>
    </>
  );
};

export default DesignAuditReport;
