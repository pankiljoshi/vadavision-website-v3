"use client";

import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const DataProtection = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div
        data-aos="fade-right"
        className="w-full  px-20 py-10  inline-flex padding-industies data-protection-mobile-bg data-protection-bg"
      >
        <div className="  justify-start  inline-flex">
          <div className="self-stretch flex-col justify-start items-start gap-14 inline-flex">
            <div className=" flex-col justify-start items-start gap-4 flex">
              <div className="">
                <span className="text-neutral-400 text-[40px] dataprotection-heading font-normal urbanist">
                  Our top most priority is
                  <br />
                </span>
                <span className="text-rose-500 text-[56px] leading-tight dataprotection-gradient gradient-heading-text font-bold urbanist">
                  Data Protection
                </span>
              </div>
              <div className="w-[679px] leading-snug dataPtotection-paragraph  text-neutral-400 text-xl font-light urbanist">
                At VadaVision! we recognize the paramount importance of data
                security. We diligently implement industry-leading practices &
                technologies to ensure robust protection against unauthorized
                access, data breaches, and other security threats.{" "}
              </div>
            </div>
            <div className="flex flex-row flex-wrap gap-6 responsive-button-servise">
              <div className=" servises-button w-[150px] servise-button flex justify-start padding-button servise-border-gradient items-center px-2 py-3  bg-gradient-to-b bg-servise-gradient rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
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
                  Confidentiality{" "}
                </span>
              </div>
              <div className=" servises-button w-[157px] servise-button flex justify-start padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg  gap-2  mt-10 ">
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
                  No Data Breach{" "}
                </span>
              </div>
              <div className=" servises-button w-[112px] flex justify-start servise-button padding-button servise-border-gradient items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
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
                  Integrity{" "}
                </span>
              </div>{" "}
              <div className=" servises-button w-[103px] flex justify-start servise-button servise-border-gradient padding-button items-center px-2 py-3 bg-servise-gradient  bg-gradient-to-b from-white to-white rounded-full   backdrop-blur-lg   gap-2  mt-10 ">
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
                  Secure{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataProtection;
