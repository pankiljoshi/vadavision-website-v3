"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Industries = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 100,
        duration: 2000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="industry-bg  w-full px-20 pb-10 padding-full-website  flex-col justify-start  items-start gap-14 padding-industies inline-flex">
        <div data-aos="fade-right" className="title-padding   pt-10">
          <span className="text-neutral-400 text-4xl font-semibold font-change-1 urbanist">
            We cover a <br />
          </span>
          <span className=" gradient-color-change font-change-2 text-6xl leading-normal font-bold urbanist">
            Good Range of Industries
          </span>
        </div>
        <div data-aos="zoom-in" className=" w-full">
          <div className=" gap-10 flex-wrap justify-between  flex-row  inline-flex cards">
            <div className="card-responsive  w-[400px] h-[257px] p-4  bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="ECommerce w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="E-Commerce" clipPath="url(#clip0_312_82)">
                        <path
                          id="Vector"
                          d="M1.33333 1.33337C0.596954 1.33337 0 1.93033 0 2.66671C0 3.40309 0.596954 4.00004 1.33333 4.00004H3.70573C3.89986 4.00004 4.08906 4.06112 4.24655 4.17464C4.40403 4.28815 4.5218 4.44834 4.58318 4.63251L8.97917 17.823C9.17438 18.4086 9.1992 19.0392 9.04948 19.6381L8.6875 21.0886C8.15637 23.2131 9.81011 25.3334 12 25.3334H28C28.7364 25.3334 29.3333 24.7364 29.3333 24C29.3333 23.2637 28.7364 22.6667 28 22.6667H12C11.4808 22.6667 11.1475 22.2407 11.2734 21.737L11.5464 20.6467C11.5927 20.462 11.6993 20.298 11.8495 20.1809C11.9996 20.0637 12.1846 20 12.375 20H26.6667C27.2408 20.0003 27.7506 19.6332 27.9323 19.0886L31.487 8.42192C31.7749 7.5582 31.1318 6.66629 30.2214 6.66671H8.73958C8.54545 6.66671 8.35624 6.60563 8.19876 6.49212C8.04127 6.37861 7.92349 6.21842 7.8621 6.03425L6.59896 2.24483C6.41727 1.70025 5.90743 1.33307 5.33333 1.33337H1.33333ZM10.6667 26.6667C9.19391 26.6667 8 27.8606 8 29.3334C8 30.8061 9.19391 32 10.6667 32C12.1394 32 13.3333 30.8061 13.3333 29.3334C13.3333 27.8606 12.1394 26.6667 10.6667 26.6667ZM26.6667 26.6667C25.1939 26.6667 24 27.8606 24 29.3334C24 30.8061 25.1939 32 26.6667 32C28.1394 32 29.3333 30.8061 29.3333 29.3334C29.3333 27.8606 28.1394 26.6667 26.6667 26.6667Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_312_82">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal urbanist">
                      E-Commerce
                    </div>
                    <div className="Frame1171281435 self-stretch h-16  flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-[#CACACA] text-[15px] font-medium italic  urbanist">
                        Increase your checkout count, more than before
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        With our expertise in Design & Development in the
                        segment,we will help you obtain a better ROI.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start items-center consult-us gap-2  inline-flex">
                  <div className="ScheduleACall text-neutral-400 cursor-pointer text-sm inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4   flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>{" "}
            <div className="card-responsive  w-[400px] h-[257px]  p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950   flex-col   justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="Finance w-8 h-8 px-0.5 py-0.5 justify-center items-center inline-flex">
                    <div className="X339 w-7 h-7 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="28"
                        viewBox="0 0 30 28"
                        fill="none"
                      >
                        <g id="_x33_9">
                          <path
                            id="Vector"
                            d="M27.0909 11.0879H18.0929C16.7649 11.0879 15.687 12.1657 15.687 13.4937V25.3085C15.687 26.6365 16.7649 27.7143 18.0929 27.7143H27.0909C28.4129 27.7143 29.4908 26.6365 29.4908 25.3085V13.4937C29.4908 12.1657 28.4129 11.0879 27.0909 11.0879ZM19.7375 25.3039H18.6936C18.3645 25.3039 18.0981 25.0373 18.0981 24.7084C18.0981 24.3796 18.3645 24.1129 18.6936 24.1129H19.7375C20.0667 24.1129 20.333 24.3796 20.333 24.7084C20.333 25.0373 20.0667 25.3039 19.7375 25.3039ZM19.7375 22.8984H18.6936C18.3645 22.8984 18.0981 22.6317 18.0981 22.3029C18.0981 21.974 18.3645 21.7074 18.6936 21.7074H19.7375C20.0667 21.7074 20.333 21.974 20.333 22.3029C20.333 22.6317 20.0667 22.8984 19.7375 22.8984ZM19.7375 20.4928H18.6936C18.3645 20.4928 18.0981 20.2262 18.0981 19.8973C18.0981 19.5685 18.3645 19.3018 18.6936 19.3018H19.7375C20.0667 19.3018 20.333 19.5685 20.333 19.8973C20.333 20.2262 20.0667 20.4928 19.7375 20.4928ZM23.1122 25.3039H22.0683C21.7392 25.3039 21.4728 25.0373 21.4728 24.7084C21.4728 24.3796 21.7392 24.1129 22.0683 24.1129H23.1122C23.4414 24.1129 23.7077 24.3796 23.7077 24.7084C23.7077 25.0373 23.4414 25.3039 23.1122 25.3039ZM23.1122 22.8984H22.0683C21.7392 22.8984 21.4728 22.6317 21.4728 22.3029C21.4728 21.974 21.7392 21.7074 22.0683 21.7074H23.1122C23.4414 21.7074 23.7077 21.974 23.7077 22.3029C23.7077 22.6317 23.4414 22.8984 23.1122 22.8984ZM23.1122 20.4928H22.0683C21.7392 20.4928 21.4728 20.2262 21.4728 19.8973C21.4728 19.5685 21.7392 19.3018 22.0683 19.3018H23.1122C23.4414 19.3018 23.7077 19.5685 23.7077 19.8973C23.7077 20.2262 23.4414 20.4928 23.1122 20.4928ZM26.4875 25.3039H25.4431C25.1139 25.3039 24.8476 25.0373 24.8476 24.7084C24.8476 24.3796 25.1139 24.1129 25.4431 24.1129H26.4875C26.8167 24.1129 27.083 24.3796 27.083 24.7084C27.083 25.0373 26.8167 25.3039 26.4875 25.3039ZM26.4875 22.8984H25.4431C25.1139 22.8984 24.8476 22.6317 24.8476 22.3029C24.8476 21.974 25.1139 21.7074 25.4431 21.7074H26.4875C26.8167 21.7074 27.083 21.974 27.083 22.3029C27.083 22.6317 26.8167 22.8984 26.4875 22.8984ZM26.4875 20.4928H25.4431C25.1139 20.4928 24.8476 20.2262 24.8476 19.8973C24.8476 19.5685 25.1139 19.3018 25.4431 19.3018H26.4875C26.8167 19.3018 27.083 19.5685 27.083 19.8973C27.083 20.2262 26.8167 20.4928 26.4875 20.4928ZM27.0849 17.4895C27.0849 17.823 26.817 18.085 26.4894 18.085H18.6943C18.3668 18.085 18.0988 17.823 18.0988 17.4895V14.0952C18.0988 13.7677 18.3668 13.4997 18.6943 13.4997H26.4894C26.817 13.4997 27.0849 13.7677 27.0849 14.0952V17.4895Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_2"
                            d="M14.4536 19.6751C14.4616 19.675 14.468 19.675 14.4743 19.675C14.38 19.6751 14.3303 19.6752 14.3145 19.6752C14.3236 19.6752 14.3442 19.6751 14.3699 19.6751C13.8596 19.6754 11.5079 19.6765 2.63547 19.681C2.06977 19.681 1.53977 19.9013 1.13483 20.3063C0.72989 20.7112 0.509521 21.2412 0.509521 21.801C0.509521 22.3727 0.729891 22.9086 1.13483 23.3076C1.5338 23.7066 2.06381 23.9269 2.63547 23.9269H4.47559V22.3965H2.71289C2.38537 22.3965 2.11739 22.1285 2.11739 21.801C2.11739 21.4735 2.38537 21.2055 2.71289 21.2055H12.3124C12.6399 21.2055 12.9079 21.4735 12.9079 21.801C12.9079 22.1285 12.6399 22.3965 12.3124 22.3965H9.62074V23.9269H14.4979V19.675C14.4956 19.675 14.4944 19.675 14.4921 19.675C14.4861 19.675 14.4723 19.6751 14.4536 19.6751Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_3"
                            d="M2.55928 0.323975C1.42342 0.365737 0.510498 1.29639 0.510498 2.44229V19.2629C1.01586 18.8391 1.79364 18.5113 2.55928 18.4929V0.323975Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_4"
                            d="M5.66772 25.7873L6.65286 24.9083C6.87967 24.7065 7.22045 24.7065 7.44609 24.9083L8.43065 25.787V22.3975H5.66772V25.7873Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_5"
                            d="M19.6728 9.89694V0.285522L3.74902 0.31529V18.4841H14.4979V13.4938C14.4979 11.5108 16.1117 9.89694 18.0947 9.89694H19.6728ZM8.79295 15.8282H12.3124C12.6399 15.8282 12.9079 16.0961 12.9079 16.4237C12.9079 16.7512 12.6399 17.0192 12.3124 17.0192H8.79295C7.94735 17.0192 7.25654 16.3343 7.25654 15.4887V14.3513C7.25654 13.5057 7.94735 12.8149 8.79295 12.8149H12.3124C12.6399 12.8149 12.9079 13.0829 12.9079 13.4104C12.9079 13.7379 12.6399 14.0059 12.3124 14.0059H8.79295C8.60238 14.0059 8.44755 14.1607 8.44755 14.3513V15.4887C8.44755 15.6733 8.60238 15.8282 8.79295 15.8282ZM12.3064 9.73018V9.94459C12.3064 10.2721 12.0384 10.5401 11.7109 10.5401C11.3834 10.5401 11.1154 10.2721 11.1154 9.94459V9.7421C10.4901 9.54558 9.98395 9.05726 9.78147 8.40222C9.6862 8.08663 9.86485 7.75311 10.1745 7.65785C10.4901 7.56258 10.8236 7.73526 10.9189 8.05086C11.0261 8.40222 11.3476 8.64044 11.7109 8.64044C12.1694 8.64044 12.5386 8.26527 12.5386 7.80672C12.5386 7.34817 12.1694 6.973 11.7109 6.973C10.5952 6.973 9.69216 6.06885 9.69216 4.95428C9.69216 4.0491 10.2936 3.28684 11.1154 3.03078V2.81641C11.1154 2.48293 11.3834 2.22091 11.7109 2.22091C12.0384 2.22091 12.3064 2.48293 12.3064 2.81641V3.01889C12.9377 3.20946 13.4438 3.7037 13.6403 4.35878C13.7356 4.67437 13.5629 5.00785 13.2473 5.10315C12.9317 5.19842 12.5982 5.01977 12.5029 4.70414C12.3957 4.35878 12.0801 4.12056 11.7168 4.12056C11.7109 4.12056 11.7109 4.12056 11.7109 4.12056C11.7109 4.12056 11.7109 4.12056 11.705 4.12056C11.2524 4.12056 10.8832 4.49573 10.8832 4.95428C10.8832 5.40396 11.2326 5.782 11.7109 5.782C12.8245 5.782 13.7297 6.69313 13.7297 7.80672C13.7297 8.7119 13.1282 9.47412 12.3064 9.73018Z"
                            fill="#DD4243"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal urbanist">
                      Fintech
                    </div>
                    <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-stone-300 text-[15px] font-medium italic urbanist">
                        Upgrade the finance experience with us
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        Experience secure data handling and efficient tools for
                        online business growth and client interactions.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start items-center consult-us   gap-2 inline-flex">
                  <div className="ScheduleACall text-neutral-400 text-sm  cursor-pointer inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>{" "}
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>{" "}
            <div className="card-responsive  w-[400px] h-[257px] p-4 bg-gradient-to-b from-stone-950  via-neutral-900 to-stone-950  flex-col   justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="Hr w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="HR" clipPath="url(#clip0_312_102)">
                        <path
                          id="Vector"
                          d="M20.8418 19.5513C20.6926 19.4006 20.4834 19.3145 20.2676 19.3145H18.9458V20.9539H20.2676C20.4834 20.9539 20.6926 20.8677 20.8418 20.717C20.8435 20.7153 20.8452 20.7136 20.8469 20.7119C21.002 20.5576 21.0874 20.3525 21.0874 20.134C21.0874 19.916 21.002 19.7107 20.8464 19.5559C20.845 19.5544 20.8433 19.553 20.8418 19.5513Z"
                          fill="#DD4243"
                        />
                        <path
                          id="Vector_2"
                          d="M31.0625 13.925H0.9375C0.419922 13.925 0 14.3445 0 14.8625V31.0625C0 31.5806 0.419922 32 0.9375 32C1.45508 32 1.875 31.5806 1.875 31.0625V28.8538H30.125V31.0625C30.125 31.5806 30.5449 32 31.0625 32C31.5801 32 32 31.5806 32 31.0625V14.8625C32 14.3445 31.5801 13.925 31.0625 13.925ZM14.9294 24.4019C14.9294 24.9194 14.5093 25.3394 13.9919 25.3394C13.4736 25.3394 13.0544 24.9194 13.0544 24.4019V22.3269H10.9126V24.4019C10.9126 24.9194 10.4924 25.3394 9.9751 25.3394C9.45752 25.3394 9.0376 24.9194 9.0376 24.4019V18.377C9.0376 17.8594 9.45752 17.4395 9.9751 17.4395C10.4924 17.4395 10.9126 17.8594 10.9126 18.377V20.4519H13.0544V18.377C13.0544 17.8594 13.4736 17.4395 13.9919 17.4395C14.5093 17.4395 14.9294 17.8594 14.9294 18.377V24.4019ZM22.7568 23.8162C23.0806 24.2207 23.0149 24.8105 22.6106 25.1338C22.4375 25.2725 22.2312 25.3394 22.0256 25.3394C21.7507 25.3394 21.478 25.2188 21.2932 24.9875L19.5662 22.8289H18.9456V24.4019C18.9456 24.9194 18.5264 25.3394 18.0081 25.3394C17.4907 25.3394 17.0706 24.9194 17.0706 24.4019V18.377C17.0706 17.8594 17.4907 17.4395 18.0081 17.4395H20.2676C20.9788 17.4395 21.6726 17.7275 22.1711 18.2295C22.6812 18.738 22.9624 19.4143 22.9624 20.1343C22.9624 20.8438 22.6743 21.5381 22.1711 22.0388C22.0168 22.1943 21.8438 22.3293 21.6575 22.4412L22.7568 23.8162Z"
                          fill="#DD4243"
                        />
                        <path
                          id="Vector_3"
                          d="M17.4902 12.05H5.64087C5.95654 9.05884 8.48584 6.72754 11.5603 6.72437C9.70605 6.72192 8.20337 5.21753 8.20337 3.36255C8.20337 1.50488 9.70898 0 11.5659 0C13.4229 0 14.9285 1.50488 14.9285 3.36255C14.9285 5.21753 13.426 6.72192 11.5715 6.72437C14.6453 6.72754 17.1748 9.05884 17.4902 12.05Z"
                          fill="#DD4243"
                        />
                        <path
                          id="Vector_4"
                          d="M30.511 8.31445L29.0171 12.05H20.9729L22.7454 7.61816C22.8877 7.26245 23.2322 7.02881 23.616 7.02881H29.6409C29.9517 7.02881 30.2429 7.18311 30.4172 7.44067C30.5916 7.69873 30.6265 8.02563 30.511 8.31445Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_312_102">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal urbanist">
                      Human Resources
                    </div>
                    <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-stone-300 text-[15px] font-medium italic urbanist">
                        Trust us to streamline your HR processes
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        We craft HR websites: intuitive design, secure platform,
                        and seamless communication tools.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start items-center consult-us  gap-2 inline-flex">
                  <div className="ScheduleACall text-neutral-400 cursor-pointer text-sm inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>{" "}
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>{" "}
            <div className="card-responsive w-[400px] h-[257px] p-4 bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950  flex-col  justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="Accounting w-8 h-8 px-px justify-center items-center inline-flex">
                    <div className="Group w-8 h-8 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M19.0881 15.8325C23.4531 15.8325 27.0037 12.2812 27.0037 7.91625C27.0037 3.55125 23.4531 0 19.0881 0C14.7231 0 11.1719 3.55125 11.1719 7.91625C11.1719 12.2812 14.7231 15.8325 19.0881 15.8325ZM18.1506 3.26312V3.04813C18.1506 2.53 18.57 2.11063 19.0881 2.11063C19.6056 2.11063 20.0256 2.53 20.0256 3.04813V3.26437C21.1413 3.50375 21.9806 4.4975 21.9806 5.68375C21.9806 6.20125 21.5606 6.62125 21.0431 6.62125C20.525 6.62125 20.1056 6.20125 20.1056 5.68375C20.1056 5.35313 19.8362 5.08375 19.5056 5.08375H18.665C18.3344 5.08375 18.065 5.35313 18.065 5.68375C18.065 5.87313 18.1556 6.05312 18.3081 6.16563L19.0881 6.74312L20.9831 8.14563C21.6056 8.60625 21.9806 9.34313 21.9856 10.1181V10.1269C21.99 10.7881 21.7369 11.4119 21.2719 11.8825C20.9269 12.2319 20.4956 12.4662 20.0256 12.565V12.7844C20.0256 13.3025 19.6056 13.7219 19.0881 13.7219C18.57 13.7219 18.1506 13.3025 18.1506 12.7844V12.5681C17.6931 12.4706 17.2725 12.2456 16.9325 11.9094C16.4619 11.445 16.2006 10.825 16.1969 10.1637C16.1937 9.64625 16.6106 9.22375 17.1281 9.22062H17.1344C17.6494 9.22062 18.0687 9.63688 18.0719 10.1525C18.0731 10.4761 18.3334 10.7487 18.675 10.7487C19.193 10.7456 19.0001 10.7467 19.5144 10.7437C19.8471 10.7411 20.1132 10.4711 20.1106 10.1394V10.1306C20.1094 9.94312 20.0188 9.76437 19.8675 9.6525L19.0881 9.07563L17.1925 7.67312C16.565 7.20812 16.19 6.46438 16.19 5.68375C16.19 4.495 17.0319 3.50062 18.1506 3.26312Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_2"
                            d="M6.26167 20.337C6.02136 19.9203 5.48754 19.7754 5.06836 20.0172L0.658481 22.5628C0.240918 22.8045 0.097668 23.3386 0.338731 23.7567L4.84586 31.5631C5.08711 31.9805 5.62086 32.1239 6.03917 31.8828L10.449 29.3366C10.8672 29.0955 11.0099 28.5614 10.7688 28.1433L6.26167 20.337Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_3"
                            d="M31.5297 18.7787C31.1054 18.1893 30.2841 18.0562 29.6954 18.4806C27.9091 19.7675 24.4791 22.2387 24.2066 22.4356C24.081 22.5425 23.9491 22.6393 23.8116 22.725C23.2722 23.0643 22.6466 23.2456 21.9935 23.2456H17.5029C16.9854 23.2456 16.5654 22.8262 16.5654 22.3081C16.5654 21.7893 16.986 21.3706 17.5029 21.3706H22.3054C23.011 21.3706 23.576 20.7831 23.5466 20.0762C23.5191 19.4056 22.9466 18.8856 22.2754 18.8856H18.6197C18.3722 18.6237 18.101 18.3837 17.8104 18.1693C16.811 17.4324 15.576 16.9968 14.2391 16.9968C11.8622 16.9968 9.49723 18.4943 8.5166 20.4931L12.3516 27.135H19.5454C20.9579 27.135 22.3491 26.7737 23.5735 26.0693C23.9979 25.8256 24.4522 25.5324 24.9447 25.1787C27.0085 23.6962 31.2279 20.6162 31.231 20.6143C31.821 20.1906 31.9547 19.3681 31.5297 18.7787Z"
                            fill="#DD4243"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal  urbanist">
                      Accounting
                    </div>
                    <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-stone-300 text-[15px] font-medium italic urbanist">
                        Level Up Your Accounting Online
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        Streamlined websites for accountants. Safe, efficient,
                        and business-enhancing. Elevate your online presence
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start items-center consult-us  gap-2 inline-flex">
                  <div className="ScheduleACall text-neutral-400 cursor-pointer text-sm inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>{" "}
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>{" "}
            <div className="card-responsive w-[400px] h-[257px] p-4 bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="Content w-8 h-8 p-0.5 justify-center items-center inline-flex">
                    <div className="Group6 w-6 h-6 relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <g id="Group 6">
                          <path
                            id="Vector"
                            d="M1.89583 16.25H10.0208C11.0663 16.25 11.9167 15.3996 11.9167 14.3542V10.0208C11.9167 8.97542 11.0663 8.125 10.0208 8.125H1.89583C0.850417 8.125 0 8.97542 0 10.0208V14.3542C0 15.3996 0.850417 16.25 1.89583 16.25Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_2"
                            d="M1.89583 26H10.0208C11.0663 26 11.9167 25.1496 11.9167 24.1042V19.7708C11.9167 18.7254 11.0663 17.875 10.0208 17.875H1.89583C0.850417 17.875 0 18.7254 0 19.7708V24.1042C0 25.1496 0.850417 26 1.89583 26Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_3"
                            d="M24.1042 0H1.89583C0.850417 0 0 0.850417 0 1.89583V4.60417C0 5.64958 0.850417 6.5 1.89583 6.5H24.1042C25.1496 6.5 26 5.64958 26 4.60417V1.89583C26 0.850417 25.1496 0 24.1042 0Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_4"
                            d="M25.1874 8.125H14.8958C14.4473 8.125 14.0833 8.489 14.0833 8.9375C14.0833 9.386 14.4473 9.75 14.8958 9.75H25.1874C25.6359 9.75 25.9999 9.386 25.9999 8.9375C25.9999 8.489 25.6359 8.125 25.1874 8.125Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_5"
                            d="M25.1874 11.375H14.8958C14.4473 11.375 14.0833 11.739 14.0833 12.1875C14.0833 12.636 14.4473 13 14.8958 13H25.1874C25.6359 13 25.9999 12.636 25.9999 12.1875C25.9999 11.739 25.6359 11.375 25.1874 11.375Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_6"
                            d="M25.1874 14.625H14.8958C14.4473 14.625 14.0833 14.989 14.0833 15.4375C14.0833 15.886 14.4473 16.25 14.8958 16.25H25.1874C25.6359 16.25 25.9999 15.886 25.9999 15.4375C25.9999 14.989 25.6359 14.625 25.1874 14.625Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_7"
                            d="M25.1874 17.875H14.8958C14.4473 17.875 14.0833 18.239 14.0833 18.6875C14.0833 19.136 14.4473 19.5 14.8958 19.5H25.1874C25.6359 19.5 25.9999 19.136 25.9999 18.6875C25.9999 18.239 25.6359 17.875 25.1874 17.875Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_8"
                            d="M25.1874 21.125H14.8958C14.4473 21.125 14.0833 21.489 14.0833 21.9375C14.0833 22.386 14.4473 22.75 14.8958 22.75H25.1874C25.6359 22.75 25.9999 22.386 25.9999 21.9375C25.9999 21.489 25.6359 21.125 25.1874 21.125Z"
                            fill="#DD4243"
                          />
                          <path
                            id="Vector_9"
                            d="M25.1874 24.375H14.8958C14.4473 24.375 14.0833 24.739 14.0833 25.1875C14.0833 25.636 14.4473 26 14.8958 26H25.1874C25.6359 26 25.9999 25.636 25.9999 25.1875C25.9999 24.739 25.6359 24.375 25.1874 24.375Z"
                            fill="#DD4243"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal urbanist">
                      Content Generation
                    </div>
                    <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-stone-300 text-[15px] font-medium italic urbanist">
                        Better the content, more the conversion ratio
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        We use AI and OpenAI API to create smart, engaging
                        content solutions tailored for your business.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start items-center consult-us  gap-2 inline-flex">
                  <div className="ScheduleACall text-neutral-400 text-sm cursor-pointer inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>{" "}
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>{" "}
            <div className="card-responsive  w-[400px] h-[257px] p-4 bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950  flex-col  justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281439 flex-col justify-start items-start gap-8 flex">
                <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                  <div className="Retail w-8 h-8 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="Retail" clipPath="url(#clip0_312_202)">
                        <path
                          id="Vector"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1286 24.2161V28.0024H7.50106C6.38325 28.0024 5.46875 28.7331 5.46875 29.6262V30.625C5.46875 30.9692 5.7495 31.25 6.09375 31.25H25.9062C26.2505 31.25 26.5312 30.9692 26.5312 30.625V29.6262C26.5312 28.7331 25.6168 28.0024 24.4989 28.0024H20.8714V24.2161H29.1169C30.4276 24.2161 31.5 23.1436 31.5 21.8329V5.43794C31.5 4.12719 30.4276 3.05475 29.1169 3.05475H24.0503L24.949 4.77825V4.90075C24.949 4.95006 24.9475 4.999 24.9448 5.04763H29.1766C29.3584 5.04763 29.5071 5.19638 29.5071 5.37813V20.2017H2.49288V5.37813C2.49288 5.19638 2.64162 5.04763 2.82337 5.04763H7.05525C7.05256 4.999 7.05106 4.95006 7.05106 4.90075V4.77825L7.94975 3.05475H2.88319C1.57244 3.05475 0.5 4.12719 0.5 5.43794V21.8329C0.5 23.1437 1.57244 24.2161 2.88319 24.2161H11.1286V24.2161ZM23.0113 7.42494V15.8732H24.4205C24.5159 15.8732 24.5938 15.951 24.5938 16.0464V17.2643C24.5938 17.3598 24.5159 17.4376 24.4205 17.4376H7.5795C7.48406 17.4376 7.40625 17.3598 7.40625 17.2643V16.0464C7.40625 15.951 7.48406 15.8732 7.5795 15.8732H8.98869V7.42494C9.2085 7.48356 9.43519 7.513 9.66325 7.513C10.5312 7.513 11.3004 7.0895 11.7755 6.43787C12.2506 7.0895 13.0197 7.513 13.8877 7.513C14.7557 7.513 15.5249 7.0895 16 6.43787C16.4751 7.0895 17.2442 7.513 18.1122 7.513C18.9802 7.513 19.7494 7.0895 20.2245 6.43787C20.6996 7.0895 21.4688 7.513 22.3368 7.513C22.5648 7.513 22.7915 7.4835 23.0113 7.42494ZM11.3902 4.40075H8.37562L10.2793 0.75H12.3524L11.3902 4.40075ZM19.5757 4.40075H16.5V0.75H18.6135L19.5757 4.40075ZM20.6098 4.40075L19.6476 0.75H21.7208L23.6244 4.40075H20.6098ZM12.4244 4.40075L13.3865 0.75H15.5V4.40075H12.4244ZM23.8696 5.40075C23.7145 5.87631 23.3428 6.26381 22.8517 6.42919C22.6857 6.48512 22.5119 6.51306 22.3368 6.51306C21.6207 6.51306 21.0139 6.04656 20.8035 5.40081L23.8696 5.40075ZM19.6455 5.40075C19.4351 6.0465 18.8283 6.513 18.1122 6.513C17.3962 6.513 16.7894 6.0465 16.579 5.40075H19.6455ZM15.421 5.40075C15.2106 6.0465 14.6038 6.513 13.8877 6.513C13.1717 6.513 12.5649 6.0465 12.3545 5.40075H15.421ZM11.1965 5.40075C10.9861 6.0465 10.3793 6.513 9.66325 6.513C9.48806 6.513 9.31431 6.48506 9.14825 6.42912C8.65719 6.26375 8.2855 5.87625 8.13037 5.40069L11.1965 5.40075ZM17.1556 12.7616H20.883C21.0739 12.7616 21.2295 12.9173 21.2295 13.1081V13.4882C21.2295 13.6791 21.0738 13.8348 20.883 13.8348H17.1556C16.9648 13.8348 16.8091 13.6791 16.8091 13.4882V13.1081C16.8091 12.9172 16.9648 12.7616 17.1556 12.7616ZM17.1556 8.75006H20.883C21.0739 8.75006 21.2295 8.90575 21.2295 9.09656V11.2142C21.2295 11.4051 21.0738 11.5607 20.883 11.5607H17.1556C16.9648 11.5607 16.8091 11.405 16.8091 11.2142V9.09656C16.8091 8.90569 16.9648 8.75006 17.1556 8.75006ZM11.2661 8.75006H14.4312C14.6221 8.75006 14.7778 8.90575 14.7778 9.09656V15.8732H10.9195V9.09656C10.9195 8.90569 11.0752 8.75006 11.2661 8.75006Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_312_202">
                          <rect width="32" height="32" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Frame1171281436 h-28 flex-col justify-start items-start gap-4 flex">
                    <div className="Fintech self-stretch text-white text-2xl font-normal urbanist">
                      Retail
                    </div>
                    <div className="Frame1171281435 self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                      <div className=" self-stretch text-stone-300 text-[15px] font-medium italic urbanist">
                        Simplify your retail experience
                      </div>
                      <div className=" self-stretch text-neutral-400 text-sm inudstries-paragraph font-light urbanist">
                        Our IT team creates easy, secure, and successful retail
                        websites, ensuring seamless shopping experiences.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="Frame1171281437 arrow-responsive justify-start cursor-pointer items-center consult-us  gap-2 inline-flex">
                  <div className="ScheduleACall text-neutral-400 cursor-pointer text-sm inudstries-paragraph font-light urbanist">
                    Learn More{" "}
                  </div>
                  <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <g id="left-up 1">
                        <g id="Group">
                          <g id="Group_2">
                            <path
                              id="Vector"
                              d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                              fill="#DD4243"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>{" "}
                </div> */}
              </div>
              <div className="hover-effect "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
