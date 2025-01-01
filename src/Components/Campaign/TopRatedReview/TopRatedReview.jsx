import React from "react";
import UpworkLogo from "../../Common/Icons/UpWorkLogo";
import GoogleLogo from "../../Common/Icons/GoogleLogo";
import StarIcon from "../../Common/Icons/StarIcon";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const TopRatedReview = () => {
  return (
    <>
      <div
        className={`w-full py-10 px-4 sm:px-8 lg:px-20 xl:px-40 bg-[#0C0C0C] flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-16 ${lato.className}`}
      >
        <div className="text-center lg:text-left">
          <span className="text-[28px] sm:text-[28px] lg:text-[36px] font-semibold text-[#8E8E8E]">
            We are
          </span>
          <br />
          <span className="text-white text-[32px] sm:text-[36px] lg:text-[40px] font-bold">
            Top Rated
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          <div className="flex items-center bg-[#111111] p-5 gap-3 rounded-lg shadow-md">
            <UpworkLogo />
            <div>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white">
                Upwork Rating
              </div>
              <div className="flex items-center gap-1 pt-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>

          <div className="flex items-center bg-[#111111] p-5 gap-3 rounded-lg shadow-md">
            <GoogleLogo />
            <div>
              <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-semibold text-white">
                Google Rating
              </div>
              <div className="flex items-center gap-1 pt-2">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedReview;
