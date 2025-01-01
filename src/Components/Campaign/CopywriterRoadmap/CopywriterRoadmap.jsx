"use client"
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../../public/Images/NameLogo.svg";
import SpiralLoop from "../../../../public/Images/LooperGroup.svg";
import { Lato } from "next/font/google";
import DesignAuditPopup from "../DesignAuditPopup/DesignAuditPopup";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const CopywriterRoadmap = () => {
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
        className={`w-full campaign-herosection-light-bg bg-black py-10 px-6 sm:px-8 lg:px-20 xl:px-40 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-20 ${lato.className}`}
      >
        <div className="w-full lg:w-[46%] text-center lg:text-left">
          <div className="text-white dark:text-black text-center text-[28px]  lg:text-[40px] font-bold leading-snug">
            Get <span className="text-[#6CE9B9] dark:text-[#DD4243] font-extrabold">FREE</span>  Instant Access To Your Expert Design Audit Now
          </div>
          <div className="text-[18px] sm:text-[20px] text-center lg:text-[22px] font-normal pt-8 dark:text-black text-white">
            It will be delivered within 24 hours.
          </div>
          <button onClick={handelOpenAuditPopup} className="text-[18px] sm:text-[20px] lg:text-[24px] mx-auto mt-10 flex justify-center items-center font-bold text-white bg-[#DD4243] py-3.5 px-8 lg:px-10">
            GET FREE DESIGN AUDIT
          </button>
        </div>

        <div className="lg:w-[266px] h-[340px] w-full  bg-[#0E0E0E] pl-4 py-4">
          <Image src={Logo} alt="logo" />

          <div className="text-[26px] font-bold relative pt-8 text-white leading-tight">
            DESIGN AUDIT REPORT
            <div className="w-[100px] lg:block hidden h-[4px] absolute right-0 bottom-4 bg-[#DD4243]"></div>
          </div>
          <div className="flex  relative justify-end">
            <Image src={SpiralLoop} alt="SpiralLoop" height={210} />
            <div className=" absolute bottom-3 left-0">
              <div className="text-[14px] font-semibold text-[#8E8E8E]">
                Report by -
              </div>
              <div className="text-[16px] font-semibold text-white">
                Design Team - Vadavision
              </div>
            </div>
          </div>
        </div>
        {isAuditPopupOpen && <DesignAuditPopup onClose={handelCloseAuditPopup}/>}

      </div>

    </>
  );
};

export default CopywriterRoadmap;
