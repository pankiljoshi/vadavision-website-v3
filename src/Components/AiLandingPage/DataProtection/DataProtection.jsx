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
        className="w-full  px-20 py-10  inline-flex padding-industies data-protection-bg"
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
            <div className="flex flex-row flex-wrap gap-6 dataPtotection-paragraph ">
              <div className="px-3.5 py-3 bg-gradient-to-b servise-border-gradient bg-servise-gradient rounded-[100px] backdrop-blur-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_998_18665)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                            fill="#4BAE4F"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8031 7.9547C18.0937 8.24532 18.0937 8.72345 17.8031 9.01408L10.7719 16.0453C10.6265 16.1906 10.4344 16.2656 10.2422 16.2656C10.05 16.2656 9.85779 16.1906 9.71248 16.0453L6.19685 12.5297C5.90623 12.2391 5.90623 11.7609 6.19685 11.4703C6.48748 11.1797 6.9656 11.1797 7.25623 11.4703L10.2422 14.4563L16.7437 7.9547C17.0344 7.65939 17.5125 7.65939 17.8031 7.9547Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_998_18665">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-sm font-light urbanist">
                    Confidentiality
                  </div>
                </div>
              </div>
              <div className="px-3.5 py-3 bg-gradient-to-b servise-border-gradient bg-servise-gradient rounded-[100px]  backdrop-blur-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_998_18665)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                            fill="#4BAE4F"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8031 7.9547C18.0937 8.24532 18.0937 8.72345 17.8031 9.01408L10.7719 16.0453C10.6265 16.1906 10.4344 16.2656 10.2422 16.2656C10.05 16.2656 9.85779 16.1906 9.71248 16.0453L6.19685 12.5297C5.90623 12.2391 5.90623 11.7609 6.19685 11.4703C6.48748 11.1797 6.9656 11.1797 7.25623 11.4703L10.2422 14.4563L16.7437 7.9547C17.0344 7.65939 17.5125 7.65939 17.8031 7.9547Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_998_18665">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-sm font-light urbanist">
                    No Data Breach
                  </div>
                </div>
              </div>
              <div className="px-3.5 py-3 button-width bg-gradient-to-b servise-border-gradient bg-servise-gradient rounded-[100px] backdrop-blur-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_998_18665)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                            fill="#4BAE4F"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8031 7.9547C18.0937 8.24532 18.0937 8.72345 17.8031 9.01408L10.7719 16.0453C10.6265 16.1906 10.4344 16.2656 10.2422 16.2656C10.05 16.2656 9.85779 16.1906 9.71248 16.0453L6.19685 12.5297C5.90623 12.2391 5.90623 11.7609 6.19685 11.4703C6.48748 11.1797 6.9656 11.1797 7.25623 11.4703L10.2422 14.4563L16.7437 7.9547C17.0344 7.65939 17.5125 7.65939 17.8031 7.9547Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_998_18665">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-sm font-light urbanist">
                    Integrity
                  </div>
                </div>
              </div>
              <div className="px-3.5 py-3 bg-gradient-to-b  button-width responsive-button-dataprotection servise-border-gradient bg-servise-gradient rounded-[100px] backdrop-blur-[20px] flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_998_18665)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0C5.38125 0 0 5.38125 0 12C0 18.6187 5.38125 24 12 24C18.6187 24 24 18.6187 24 12C24 5.38125 18.6187 0 12 0Z"
                            fill="#4BAE4F"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.8031 7.9547C18.0937 8.24532 18.0937 8.72345 17.8031 9.01408L10.7719 16.0453C10.6265 16.1906 10.4344 16.2656 10.2422 16.2656C10.05 16.2656 9.85779 16.1906 9.71248 16.0453L6.19685 12.5297C5.90623 12.2391 5.90623 11.7609 6.19685 11.4703C6.48748 11.1797 6.9656 11.1797 7.25623 11.4703L10.2422 14.4563L16.7437 7.9547C17.0344 7.65939 17.5125 7.65939 17.8031 7.9547Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_998_18665">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="text-white text-sm font-light urbanist">
                    Secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataProtection;
