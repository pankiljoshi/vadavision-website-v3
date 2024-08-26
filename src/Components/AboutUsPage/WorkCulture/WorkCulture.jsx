"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import VirtualOffice from "../../../../public/Images/webp/virtual-office.webp";
import Image from "next/image";
const WorkCulture = () => {
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
  return (
    <>
      <div className="w-full px-20 pt-10 padding-industies padding-full-website bg-zinc-950">
        <div data-aoa="fade-right" className="w-full leading-tight ">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold urbanist">
            VadaVision
            <br />
          </span>
          <span className="text-indigo-600 work-culture-gradient font-change-2 text-[56px] font-bold urbanist">
            Work Culture
          </span>
        </div>
        <div
          data-aos="zoom-in"
          className=" flex-col justify-start items-start mt-20 work-culture-container-margin  inline-flex"
        >
          <div>
            <Image priority src={VirtualOffice} />
          </div>
          <div className=" flex h-24 pt-10 gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              className="work-culture-svg"
              viewBox="0 0 48 49"
              fill="none"
            >
              <g id="right(1) 1">
                <g id="Page-1">
                  <g id="glyph">
                    <g id="quote-right-saying-speech">
                      <path
                        id="Combined-Shape"
                        d="M35 6.72607C41.0751 6.72607 46 11.6509 46 17.7261C46 22.2133 43.6641 26.5549 40.1777 27.3927C38.8329 27.7158 37.7619 29.4416 37.992 31.4117C38.3001 34.0487 40.6847 36.7129 45.4063 38.8123C46.4576 39.2798 46.0174 40.8613 44.8758 40.7183C32.5706 39.1777 24.041 31.1556 24.0001 19.8058C24 12.0002 28.6116 6.72607 35 6.72607Z"
                        fill="#4B4B4B"
                      />
                      <path
                        id="Combined-Shape_2"
                        d="M10.9999 6.72607C17.075 6.72607 21.9999 11.6509 21.9999 17.7261C21.9999 22.2133 19.664 26.5549 16.1776 27.3927C14.8328 27.7158 13.7618 29.4416 13.9919 31.4117C14.2999 34.0487 16.6846 36.7129 21.4062 38.8123C22.4574 39.2798 22.0173 40.8613 20.8756 40.7183C8.57049 39.1777 0.04092 31.1556 3.53245e-09 19.8058C-0.000147376 12.0002 4.61144 6.72607 10.9999 6.72607Z"
                        fill="#4B4B4B"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <div></div>
            <div className=" w-full  text-[#CACACA] leading-tight  text-xl font-normal urbanist">
              At VadaVision, work feels like crafting a story.characters shaping
              creativity and teamwork from our spaces. Ideas flow freely in our
              virtual world, unrestricted by office boundaries. Together, we
              tackle challenges, crafting a tale of adaptability and excellence.
              In this imaginative setting, our work culture flourishes, and
              boundaries vanish.
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="flex flex-row flex-wrap gap-6 justify-center mt-10 responsive-button-servise mobile-margin-top"
        >
          <div className=" servises-button w-[182px] h-[48px] servise-button flex justify-center padding-button servise-border-gradient items-center px-2 py-3  bg-gradient-to-b bg-servise-gradient rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="svg-responsive"
            >
              <g id="correct 1" clipPath="url(#clip0_160_5987)">
                <g id="Group">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                    fill="#4BAE4F"
                  />
                  <path
                    id="Vector_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8032 7.95464C18.0938 8.24526 18.0938 8.72339 17.8032 9.01401L10.772 16.0453C10.6267 16.1906 10.4345 16.2656 10.2423 16.2656C10.0501 16.2656 9.85791 16.1906 9.7126 16.0453L6.19697 12.5296C5.90635 12.239 5.90635 11.7609 6.19697 11.4703C6.4876 11.1796 6.96572 11.1796 7.25635 11.4703L10.2423 14.4562L16.7438 7.95464C17.0345 7.65933 17.5126 7.65933 17.8032 7.95464Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_160_5987">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-light text-white text-sm urbanist margin-reponsive">
              Collaborative Team{" "}
            </span>
          </div>
          <div className=" servises-button w-[147px] h-[48px] servise-button flex justify-center padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="svg-responsive"
            >
              <g id="correct 1" clipPath="url(#clip0_160_5987)">
                <g id="Group">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                    fill="#4BAE4F"
                  />
                  <path
                    id="Vector_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8032 7.95464C18.0938 8.24526 18.0938 8.72339 17.8032 9.01401L10.772 16.0453C10.6267 16.1906 10.4345 16.2656 10.2423 16.2656C10.0501 16.2656 9.85791 16.1906 9.7126 16.0453L6.19697 12.5296C5.90635 12.239 5.90635 11.7609 6.19697 11.4703C6.4876 11.1796 6.96572 11.1796 7.25635 11.4703L10.2423 14.4562L16.7438 7.95464C17.0345 7.65933 17.5126 7.65933 17.8032 7.95464Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_160_5987">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-light text-white text-sm urbanist margin-reponsive">
              Team Outings{" "}
            </span>
          </div>
          <div className=" servises-button w-[137px] h-[48px] flex justify-center servise-button padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="svg-responsive"
            >
              <g id="correct 1" clipPath="url(#clip0_160_5987)">
                <g id="Group">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                    fill="#4BAE4F"
                  />
                  <path
                    id="Vector_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8032 7.95464C18.0938 8.24526 18.0938 8.72339 17.8032 9.01401L10.772 16.0453C10.6267 16.1906 10.4345 16.2656 10.2423 16.2656C10.0501 16.2656 9.85791 16.1906 9.7126 16.0453L6.19697 12.5296C5.90635 12.239 5.90635 11.7609 6.19697 11.4703C6.4876 11.1796 6.96572 11.1796 7.25635 11.4703L10.2423 14.4562L16.7438 7.95464C17.0345 7.65933 17.5126 7.65933 17.8032 7.95464Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_160_5987">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-light text-white text-sm urbanist margin-reponsive">
              Remote First{" "}
            </span>
          </div>{" "}
          <div className=" servises-button w-[160px] h-[48px] flex justify-center servise-button servise-border-gradient padding-button items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="svg-responsive"
              fill="none"
            >
              <g id="correct 1" clipPath="url(#clip0_160_5987)">
                <g id="Group">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                    fill="#4BAE4F"
                  />
                  <path
                    id="Vector_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.8032 7.95464C18.0938 8.24526 18.0938 8.72339 17.8032 9.01401L10.772 16.0453C10.6267 16.1906 10.4345 16.2656 10.2423 16.2656C10.0501 16.2656 9.85791 16.1906 9.7126 16.0453L6.19697 12.5296C5.90635 12.239 5.90635 11.7609 6.19697 11.4703C6.4876 11.1796 6.96572 11.1796 7.25635 11.4703L10.2423 14.4562L16.7438 7.95464C17.0345 7.65933 17.5126 7.65933 17.8032 7.95464Z"
                    fill="white"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_160_5987">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="font-light text-white text-sm urbanist margin-reponsive">
              Flexible Working{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCulture;
