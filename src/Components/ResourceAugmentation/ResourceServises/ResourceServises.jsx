"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Logo from "../../../../public/Images/logo.png";

const ResourceServises = () => {
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
      <div className="Content w-full justify-between padding-full-website py-20 px-16 gap-20 flex padding-industies responsive-content ">
        <div data-aos="fade-right" className="text-content w-[60%] mt-20">
          <div className="">
            <div className="">
              <span className="text-neutral-400 text-[40px] font-change-1 font-medium urbanist">
                Benefits you get from <br />
              </span>
              <span className="text-pink-600 text-[56px] gradient-change  font-change-2 font-bold urbanist">
                Resource Augmentation{" "}
              </span>
            </div>
            <p className="text-[#8E8E8E]   text-xl  font-light urbanist paragraph-responsive my-4">
              The process of using a third party to bring talent to your current
              team is known as resource augmentation. This might be anything
              from a single developer with specialized knowledge to ten
              engineers joining ten distinct teams.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-6 responsive-button-servise">
            <div className=" servises-button w-[176px] servise-button flex justify-center padding-button servise-border-gradient items-center px-2 py-3  bg-gradient-to-b bg-servise-gradient rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
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
                Reduce Hiring Cost{" "}
              </span>
            </div>
            <div className=" servises-button w-[126px] servise-button flex justify-center padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
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
                Save Time{" "}
              </span>
            </div>
            <div className=" servises-button w-[149px] flex justify-center servise-button padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
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
                Instant Access{" "}
              </span>
            </div>{" "}
            <div className=" servises-button w-[199px] flex justify-center servise-button servise-border-gradient padding-button items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
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
                Handpicked Resources{" "}
              </span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className=" min-w-[300px] responsive-logo">
          <Image
            priority
            src={Logo}
            alt=""
            width={340}
            className="vadavision logo"
          />
        </div>
      </div>
    </>
  );
};

export default ResourceServises;
