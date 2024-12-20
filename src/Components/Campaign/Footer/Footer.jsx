"use client";
import { Urbanist } from "next/font/google";
import React, { useEffect, useState } from "react";
import MoodIcon from "../../../Components/Common/Icons/MoonIcon";
import ComputerIcon from "../../../Components/Common/Icons/ComputerIcon";
import SunIcon from "../../../Components/Common/Icons/SunIcon";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "500", "600", "900"],
  variable: "--font-urbanist",
});

const Footer = ({ toggle, darkMode, themeMode, setThemeMode }) => {
  const [systemPreference, setSystemPreference] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setSystemPreference(prefersDark);
  }, []);

  const handleThemeChange = (mode) => {
    setThemeMode(mode);
  };
  return (
    <>
      <div
        className={`w-full flex flex-col sm:flex-row justify-center items-center py-6 gap-4 sm:gap-12 gradient-top-border-style ${urbanist.className}`}
      >
        <div className="text-[14px] sm:text-[16px] font-semibold text-[#EEEEEE] cursor-pointer text-center">
          © 2024 - VadaVision! All Rights Reserved.
        </div>

        <div className="text-[14px] sm:text-[16px] font-semibold text-[#EEEEEE] cursor-pointer text-center">
          Terms & Conditions
        </div>
        <div className="text-[14px] sm:text-[16px] font-semibold cursor-pointer text-[#EEEEEE] text-center">
          Privacy Policy
        </div>
        <div className="flex gap-2 bg-[#1F1F1F] px-1 py-1  rounded-full items-center">
          <div
            onClick={() => handleThemeChange("system")}
            className={`w-[16px] h-[16px] flex items-center justify-center rounded-full cursor-pointer ${
              themeMode === "system" ? "bg-white" : ""
            }`}
          >
            <ComputerIcon themeMode={themeMode} className=" w-5 h-5" />
          </div>
          <div
            onClick={() => handleThemeChange("dark")}
            className={`w-[16px] h-[16px] flex items-center justify-center rounded-full cursor-pointer ${
              themeMode === "dark" ? "bg-white" : ""
            }`}
          >
            <MoodIcon themeMode={themeMode} />
          </div>
          <div
            onClick={() => handleThemeChange("light")}
            className={`w-[16px] h-[16px] flex items-center justify-center rounded-full cursor-pointer ${
              themeMode === "light" ? "bg-white text-red-600" : ""
            }`}
          >
            <SunIcon
           themeMode={themeMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
