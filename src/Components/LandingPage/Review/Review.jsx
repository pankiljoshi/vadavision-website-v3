"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const Review = () => {
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
      <div className=" w-full  py-20 justify-between padding-industies responsive-review flex px-20">
        <div data-aos="fade-right" className="title ">
          <span className="text-neutral-400 text-4xl font-medium  font-change-1 font-urbaninst">
            We are
            <br />
          </span>
          <span className=" text-color text-6xl font-bold font-change-2 leading-normal font-urbaninst">
            Top Rated
          </span>
        </div>
        <div className="  gap-14 review-rating  inline-flex  ">
          <div
            data-aos="fade-down"
            className=" pl-6 pr-12 w-[340px] h-[128px] py-3 bg-[#111111] upwork  justify-start items-center flex "
          >
            <div className=" self-stretch justify-center items-center gap-6 inline-flex">
              <div className=" w-20 h-20 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  className="upwork-svg"
                  fill="none"
                >
                  <g
                    id="upwork-roundedsquare-1 1"
                    clipPath="url(#clip0_151_1382)"
                  >
                    <path
                      id="Vector"
                      d="M60.661 44.7146C54.5915 44.7146 50.5764 40.0302 49.4526 38.208C50.8885 26.6953 55.0968 23.0665 60.661 23.0665C66.1589 23.0665 70.4413 27.462 70.4413 33.8905C70.4413 40.319 66.1589 44.7146 60.661 44.7146ZM60.661 16C50.7676 16 45.2229 22.4519 43.6387 29.095C41.836 25.712 40.5093 21.1857 39.4636 16.9794H25.7892V33.9998C25.7892 40.1844 22.9837 44.7438 17.4799 44.7438C11.9762 44.7438 8.82344 40.1844 8.82344 34.0017L8.88196 16.9794H1V33.9998C1 38.9689 2.61151 43.4737 5.53798 46.6889C8.5581 50.0017 12.6864 51.7517 17.476 51.7517C26.9929 51.7517 33.6321 44.4531 33.6321 34.0056V22.569C34.6349 26.3324 36.9878 33.5705 41.516 39.9171L37.2863 64H45.3009L48.0928 46.925C49.0098 47.6839 49.9813 48.3707 50.9998 48.9833C53.6714 50.6812 56.7499 51.6306 59.9138 51.7322H59.9294C60.1655 51.7322 60.4054 51.7459 60.6493 51.7459C70.4608 51.7459 78.2745 44.1488 78.2745 33.9081C78.2764 23.6615 70.4706 16 60.661 16Z"
                      fill="#14A800"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_151_1382">
                      <rect width="79.936" height="80" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="Frame20 flex-col justify-center items-start gap-4 inline-flex">
                <div className="Text text-white text-[24px] font-medium urbanist">
                  Upwork Rating
                </div>
                <div className="Frame4 justify-center items-center gap-1 inline-flex">
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className=" pl-6 pr-12 py-6 w-[340px] h-[128px]  bg-[#111111] google  justify-start items-center flex "
          >
            <div className="Frame1171281462 self-stretch justify-start items-center gap-6 inline-flex">
              <div className="GoogleGLogo1 w-20 h-20 relative flex-col justify-start items-start inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                >
                  <g id="Google__G__Logo 1">
                    <path
                      id="Vector"
                      d="M75.2 40.8333C75.2 38.2333 74.9667 35.7333 74.5333 33.3333H40V47.5333H59.7333C58.8667 52.0999 56.2667 55.9666 52.3667 58.5666V67.7999H64.2667C71.2 61.3999 75.2 51.9999 75.2 40.8333Z"
                      fill="#4285F4"
                    />
                    <path
                      id="Vector_2"
                      d="M39.9999 76.6667C49.8999 76.6667 58.1999 73.4 64.2666 67.8L52.3666 58.5667C49.0999 60.7667 44.9333 62.1 39.9999 62.1C30.4666 62.1 22.3666 55.6667 19.4666 47H7.2666V56.4667C13.2999 68.4333 25.6666 76.6667 39.9999 76.6667Z"
                      fill="#34A853"
                    />
                    <path
                      id="Vector_3"
                      d="M19.4666 46.9667C18.7333 44.7666 18.2999 42.4333 18.2999 40C18.2999 37.5666 18.7333 35.2333 19.4666 33.0333V23.5667H7.26659C4.76659 28.5 3.33325 34.0666 3.33325 40C3.33325 45.9333 4.76659 51.5 7.26659 56.4333L16.7666 49.0333L19.4666 46.9667Z"
                      fill="#FBBC05"
                    />
                    <path
                      id="Vector_4"
                      d="M39.9999 17.9333C45.3999 17.9333 50.1999 19.7999 54.0333 23.3999L64.5333 12.8999C58.1666 6.96659 49.8999 3.33325 39.9999 3.33325C25.6666 3.33325 13.2999 11.5666 7.2666 23.5666L19.4666 33.0333C22.3666 24.3666 30.4666 17.9333 39.9999 17.9333Z"
                      fill="#EA4335"
                    />
                  </g>
                </svg>
              </div>
              <div className="Frame20 flex-col justify-center items-start gap-4 inline-flex">
                <div className="Text text-white text-[24px] font-medium urbanist">
                  Google Rating
                </div>
                <div className="Frame4 justify-center items-center gap-1 inline-flex">
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>{" "}
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 1"
                          d="M16.936 0.5L21.6571 10.002L32.1529 11.5557L24.5749 18.982L26.3406 29.4443L16.936 24.532L7.53147 29.4443L9.29715 18.982L1.71913 11.5557L12.2149 10.002L16.936 0.5Z"
                          fill="#FEA500"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="Star w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <g id="Star">
                        <path
                          id="Star 2"
                          d="M16 0.5L20.9092 9.74309L31.2169 11.5557L23.9432 19.0809L25.4046 29.4443L16 24.852L6.59544 29.4443L8.05678 19.0809L0.783095 11.5557L11.0908 9.74309L16 0.5Z"
                          fill="#4B4B4B"
                        />
                        <mask
                          id="mask0_151_1372"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="16"
                          height="33"
                        >
                          <rect
                            id="Rectangle 1"
                            y="0.5"
                            width="16"
                            height="32"
                            fill="#D9D9D9"
                          />
                        </mask>
                        <g mask="url(#mask0_151_1372)">
                          <path
                            id="Star 1"
                            d="M16 0.5L20.9092 9.74309L31.2169 11.5557L23.9432 19.0809L25.4046 29.4443L16 24.852L6.59544 29.4443L8.05678 19.0809L0.783095 11.5557L11.0908 9.74309L16 0.5Z"
                            fill="#FEA500"
                          />
                        </g>
                      </g>
                    </svg>
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

export default Review;
