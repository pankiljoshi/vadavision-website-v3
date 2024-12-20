"use client"
import React, { useState } from "react";
import VadavisionLogo from "../../Common/Icons/VadavisionLogo";
import { Lato } from "next/font/google";
import LineIcon from "../../Common/Icons/LineIcon";
import SpringIcon from "../../Common/Icons/SpringIcon";
import DesignAuditPopup from '../DesignAuditPopup/DesignAuditPopup'
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const CampaignHerosection = () => {
  const [isAuditPopupOpen,setAuditPopupOpen]=useState(false)
  const handelOpenAuditPopup = () => {
    setAuditPopupOpen(true)
  }
  const handelCloseAuditPopup = () => {
    setAuditPopupOpen(false)
  }
  return (
    <div
      className={`w-full campaign-herosection-light-bg bg-black flex pt-6 flex-col justify-center items-center ${lato.className} px-4 sm:px-6 lg:px-16`}
    >
      <div className="">
        <VadavisionLogo />
      </div>

      <div className="text-[16px] sm:text-[20px] md:text-[22px] py-6 sm:py-8 font-medium dark:text-[#000000]  text-[#8E8E8E] text-center">
        Does your user often dropout from your app or website?
      </div>

      <div className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[56px] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] text-center leading-normal dark:text-black text-white font-extrabold">
        65% OF OUR CLIENTS <span className="text-[#6CE9B9] dark:text-[#D53033]">INCREASED</span>{" "}
        THEIR <span className="text-[#6CE9B9] dark:text-[#D53033]">USER RETENTION</span>WITH OUR
        DESIGN AUDIT
      </div>

      <div className="py-6 sm:py-7">
        <div className="text-[18px] sm:text-[20px] md:text-[24px] dark:text-[#000000] font-medium text-[#E1E1E1] text-center">
          Get your{" "}
          <span className=" dark:text-[#000000] text-[#F5F5F5] font-normal">
            UI/ UX Design Audit
          </span>{" "}
          report delivered within 24 hours.
        </div>
        <div className="mt-2  md:block hidden px-4 sm:px-10 md:px-24">
          <LineIcon />
        </div>
      </div>
      <div className="md:pl-40  flex gap-10">
        <div className="flex flex-col sm:flex-row items-center justify-center pb-6 sm:pb-10 gap-4 sm:gap-8 mx-auto">
          <button onClick={handelOpenAuditPopup} className="text-[16px] sm:text-[20px] md:text-[24px] font-bold text-white bg-[#DD4243] py-3 sm:py-3.5 px-8 sm:px-10 rounded-md">
            GET FREE DESIGN AUDIT
          </button>
        </div>
        <div className="pl-0 md:block hidden sm:pl-4">
          <SpringIcon />
        </div>
      </div>
      {isAuditPopupOpen && <DesignAuditPopup onClose={handelCloseAuditPopup}/>}
    </div>
  );
};

export default CampaignHerosection;
