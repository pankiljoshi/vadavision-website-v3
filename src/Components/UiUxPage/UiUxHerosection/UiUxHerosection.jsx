"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import UiUxHerosectionImage from "../../../../public/Images/uiux-hersection.png";
import MobileUiUxHerosectionImage from "../../../../public/Images/uiux-mobile-herosection.png";
import Link from "next/link";

const UiUxHerosection = () => {
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
      <div className="w-full uiux-responsive mobile-view-bg-ui-ux padding-full-left-side   padding-industies flex flex-row ">
        <div
          data-aos="fade-right"
          className=" w-[60%] uiux-leftside py-20  flex-col justify-start items-start gap-2 inline-flex"
        >
          <div className="justify-start items-center gap-3 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="26"
              viewBox="0 0 28 26"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.84211 0C6.84211 0 7.14412 2.81891 8.3205 3.99529C9.49688 5.17167 12.3158 5.47368 12.3158 5.47368C12.3158 5.47368 9.49688 5.7757 8.3205 6.95208C7.14412 8.12846 6.84211 10.9474 6.84211 10.9474C6.84211 10.9474 6.54009 8.12846 5.36371 6.95208C4.18733 5.7757 1.36842 5.47368 1.36842 5.47368C1.36842 5.47368 4.18733 5.17167 5.36371 3.99529C6.54009 2.81891 6.84211 0 6.84211 0ZM19.1579 4.10526C19.1579 4.10526 19.6109 8.33363 21.3755 10.0982C23.1401 11.8628 27.3684 12.3158 27.3684 12.3158C27.3684 12.3158 23.1401 12.7688 21.3755 14.5334C19.6109 16.2979 19.1579 20.5263 19.1579 20.5263C19.1579 20.5263 18.7049 16.2979 16.9403 14.5334C15.1757 12.7688 10.9474 12.3158 10.9474 12.3158C10.9474 12.3158 15.1757 11.8628 16.9403 10.0982C18.7049 8.33363 19.1579 4.10526 19.1579 4.10526ZM8.69009 17.3099C7.21962 15.8394 6.84211 12.3158 6.84211 12.3158C6.84211 12.3158 6.46459 15.8394 4.99412 17.3099C3.52364 18.7804 0 19.1579 0 19.1579C0 19.1579 3.52364 19.5354 4.99412 21.0059C6.46459 22.4764 6.84211 26 6.84211 26C6.84211 26 7.21962 22.4764 8.69009 21.0059C10.1606 19.5354 13.6842 19.1579 13.6842 19.1579C13.6842 19.1579 10.1606 18.7804 8.69009 17.3099Z"
                fill="url(#paint0_linear_2017_29251)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_2017_29251"
                  x1="0"
                  y1="0"
                  x2="29.1438"
                  y2="3.45003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF2B48" />
                  <stop offset="1" stopColor="#FF7C2B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-red-500 text-base font-medium  prompt uppercase leading-relaxed ">
              PUSH YOUR BRAND POTENTIAL
            </div>
          </div>
          <div className="flex-col uiux-herosection-content justify-start items-start gap-10 flex">
            <div className="flex-col leftside-content-uiux justify-start items-start gap-6 flex">
              <div className="w-[850px] leading-tight uiuxhersection-heading text-neutral-100 text-[64px] text-color-gradient font-bold  prompt ">
                Uplift your Brand Potential with Creative Design
              </div>
              <div className="w-[760px] uiuxhersection-paragraph  text-neutral-400 text-xl font-medium urbanist">
                Maximize the potential of your brand by using UX design that
                puts the needs and happiness of the user first. Creating
                user-friendly interfaces and smooth interactions will help you
                increase client loyalty and engagement.{" "}
              </div>
            </div>
            <div className=" justify-start buttons-herosection items-center gap-10 inline-flex reponsive-button ">
              <div
                data-aos="zoom-in"
                className="BookACall explore-more cursor-pointer h-[48px] px-9 reponsive-button bg-white hover:bg-[#FFFFFF3D] bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex explore-button"
              >
                <div className="BookACall w-[120px] text-white text-[20px] font-light text-center urbanist   explore-button">
                  Explore More
                </div>
              </div>

              <div
                data-aos="zoom-in"
                className="BookACall  flex-row  herosection-Schedule-button cursor-pointer w-[198px] urbanist reponsive-button h-[48px] px-5 bg-[#DD4243] hover:bg-[#D53033] items-center gap-4 flex Schedule-button"
              >
                <Link
                  href="/contact-us"
                  className="flex gap-4 w-full justify-center"
                >
                  <div className="BookACall   text-white text-[16px] font-light urbanist  Schedule-button">
                    Schedule a Call
                  </div>
                  <div className="consultUs-svg w-6 h-6 p-3 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                    <div className="ChevronRight w-4 h-4 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className=""
                      >
                        <g id="chevron-right">
                          <path
                            id="Vector (Stroke)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in"
          className="w-[40%] flex h-[620px] justify-end hide-image-uiux"
        >
          <Image priority src={UiUxHerosectionImage} />
        </div>
        <div
          data-aos="fade-up"
          className="w-[40%] mobile-view-uiux-image  justify-center py-20 hidden show-image-uiux"
        >
          <Image
            priority
            src={MobileUiUxHerosectionImage}
            className="mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default UiUxHerosection;
