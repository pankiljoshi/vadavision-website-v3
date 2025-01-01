import { Lato } from "next/font/google";
import React from "react";
import { RxCross1 } from "react-icons/rx";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const DesignAuditPopup = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 popup-bg z-40 flex justify-center items-center">
        <div
          className={`w-[90%] max-w-[560px] h-auto max-h-[600px] p-6 bg-[#111]  shadow flex-col justify-start items-start gap-2.5 inline-flex ${lato.className}`}
        >
          <div className="w-full flex justify-end">
            <RxCross1
              color="grey"
              className="cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="text-[24px] md:text-[40px] w-full md:w-[80%] mx-auto flex-col font-bold leading-normal text-white text-center">
            GET YOUR DESIGN AUDIT REPORT{" "} <br />
            <span className="text-[#6CE9B9] font-bold">FREE</span>
          </div>
          <div className="w-full md:w-[80%] mx-auto text-center text-[14px] md:text-[18px] font-medium text-[#8E8E8E]">
            You’re just there! Provide us your website or your app link & get
            your report in 24 hours
          </div>
          <div className="w-full space-y-5 pt-6 px-4 md:px-14">
            <div className="space-y-2.5">
              <div className="text-[12px] md:text-[14px] font-medium text-[#CACACA]">
                Your Email
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="youremail@example.com"
                  className="p-2 text-white w-full border-none audit-input-border outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="space-y-2.5">
              <div className="text-[12px] md:text-[14px] font-medium text-[#CACACA]">
                Your Website/App Link
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="www.example.com"
                  className="p-2 text-white w-full border-none audit-input-border outline-none bg-transparent"
                />
              </div>
            </div>
          </div>
          <button className="md:text-[24px] text-[18px] font-semibold w-full md:w-[80%] mx-auto text-white bg-[#D53033] mt-4 p-2 ">
            GET FREE DESIGN AUDIT
          </button>
        </div>
      </div>
    </>
  );
};

export default DesignAuditPopup;
