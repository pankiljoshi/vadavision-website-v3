"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const HeroSection = () => {
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
      <div className=" w-full pt-12 pb-14 flex  mobile-view-padding scrollbar flex-row gap-36 px-20 bg-gradient-to-br padding-herosection herosection-responsive  padding-industies bg-cover  from-black to-zinc-950 herosection-bg  bg-no-repeat ">
        <div
          data-aos="fade-right"
          className="LeftSide w-[50%]  responsive-left-side min-w-[600px] mt-16 flex-col justify-start items-start gap-6 inline-flex"
        >
          <div className="LeftLabel">
            <div className=" p-4 startupStudio-gradient rounded-full  flex-col justify-start items-start gap-2.5 flex">
              <div className=" text-emerald-400 text-sm font-light urbanist">
                🚀 <span className="StartupStudio">STARTUP STUDIO</span>
              </div>
            </div>
          </div>

          <div className=" w-[790px]  flex-col responsive-section  justify-start items-start gap-10 flex">
            <div className=" flex-col justify-start items-start gap-6   flex">
              <div
                className="  text-neutral-100 responsive-heading  leading-normal text-[64px] font-bold prompt
               text-color-gradient "
              >
                Crafting Digital Dreams <br />
                into Tangible Reality
              </div>
              <div className="  text-neutral-400  w-[670px] leading-tight paragraph-full-width mobile-view-paragraph  text-xl font-light  urbanist ">
                We build a solid foundation for your dream startup and fuel it
                for explosive growth. With innovative strategies and unwavering
                dedication, we have the path for success that exceeds.
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
                className="BookACall  herosection-Schedule-button cursor-pointer w-[198px] urbanist reponsive-button h-[48px] px-5 bg-[#DD4243] hover:bg-[#D53033] items-center gap-4 flex Schedule-button"
              >
                <div className="flex justify-center">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className=" w-[50%] right-side-herosection herosection-margin   padding-responsive mt-20 pt-20 "
        >
          <div className=" first-row-cards servises-card   ml-20 mt-6 justify-start  items-start gap-6 inline-flex">
            <div className="ai-servise-card  servises-cards1 mobile-view-gradient servises-cards  p-4 w-[148px] h-[120px] hover:border-yellow-50 hover:border-opacity-15  services-Card-hover border border-white border-opacity-10 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281402 flex-col justify-start ai-servise-padding items-start gap-4 flex">
                <div className="AiAssistant1 w-8 h-8 relative">
                  <div className="Group w-8 h-8 left-[0.81px] top-0 absolute">
                    <div className="Group w-7 h-7 left-[1.38px] top-[3.44px] absolute"></div>
                    <div className="Group w-8 h-8 svg-margin left-0 top-0 absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        className="servise-card-svg"
                        fill="none"
                      >
                        <g id="ai-assistant 1" clipPath="url(#clip0_46_837)">
                          <g id="Group">
                            <g id="Group_2">
                              <path
                                id="Vector"
                                d="M15.3125 3.43661H16.6875V6.18669H15.3125V3.43661Z"
                                fill="url(#paint0_linear_46_837)"
                              />
                              <path
                                id="Vector_2"
                                d="M24.8752 22.9997H27.7503V24.3748H24.8752V22.9997Z"
                                fill="url(#paint1_linear_46_837)"
                              />
                              <path
                                id="Vector_3"
                                d="M28.4377 25.0623V31.3125C28.4377 31.6922 28.7456 32 29.1253 32C29.505 32 29.8128 31.6922 29.8128 31.3125V25.0623H28.4377Z"
                                fill="url(#paint2_linear_46_837)"
                              />
                              <path
                                id="Vector_4"
                                d="M4.24951 22.9997H7.1246V24.3748H4.24951V22.9997Z"
                                fill="url(#paint3_linear_46_837)"
                              />
                              <path
                                id="Vector_5"
                                d="M2.18701 25.0623V31.3125C2.18701 31.6922 2.49483 32 2.87453 32C3.25423 32 3.56205 31.6922 3.56205 31.3125V25.0623H2.18701Z"
                                fill="url(#paint4_linear_46_837)"
                              />
                              <path
                                id="Vector_6"
                                d="M15.3909 9.20879C15.3885 9.20248 15.3861 9.19616 15.3835 9.18991C15.2576 8.88422 14.9629 8.68677 14.6324 8.68677C14.632 8.68677 14.6317 8.68677 14.6314 8.68677C14.3005 8.68715 14.0058 8.88528 13.8806 9.19154C13.8785 9.19666 13.8765 9.20185 13.8745 9.20704L11.8091 14.6298C11.674 14.9846 11.8521 15.3818 12.2069 15.517C12.5619 15.6521 12.959 15.474 13.0941 15.1192L13.4398 14.2114H15.809L16.1508 15.1172C16.2547 15.3925 16.5164 15.5622 16.7942 15.5622C16.8748 15.5622 16.9569 15.5479 17.0368 15.5177C17.3921 15.3837 17.5714 14.987 17.4373 14.6318L15.3909 9.20879ZM13.9636 12.8364L14.6299 11.0868L15.2902 12.8364H13.9636Z"
                                fill="url(#paint5_linear_46_837)"
                              />
                              <path
                                id="Vector_7"
                                d="M19.5484 8.68677C19.1687 8.68677 18.8608 8.99459 18.8608 9.37429V14.8745C18.8608 15.2542 19.1687 15.562 19.5484 15.562C19.9281 15.562 20.2359 15.2542 20.2359 14.8745V9.37429C20.2359 8.99459 19.9281 8.68677 19.5484 8.68677Z"
                                fill="url(#paint6_linear_46_837)"
                              />
                            </g>
                            <g id="Group_3">
                              <path
                                id="Vector_8"
                                d="M9.87478 29.2499H22.1252C22.5049 29.2499 22.8127 28.9421 22.8127 28.5624V23.6872C22.8127 23.3075 22.5049 22.9997 22.1252 22.9997H9.87478C9.49508 22.9997 9.18726 23.3075 9.18726 23.6872V28.5624C9.18726 28.9421 9.49508 29.2499 9.87478 29.2499ZM10.5623 24.3748H21.4376V27.8749H10.5623V24.3748Z"
                                fill="url(#paint7_linear_46_837)"
                              />
                              <path
                                id="Vector_9"
                                d="M25.4637 9.7493H24.3129V8.26975C24.3129 6.74208 23.0699 5.49917 21.5423 5.49917H10.4579C8.93025 5.49917 7.68733 6.74208 7.68733 8.26975V9.7493H6.53649C5.79253 9.7493 5.18726 10.3546 5.18726 11.0985V13.1502C5.18726 13.8942 5.79253 14.4994 6.53649 14.4994H7.68733V15.9789C7.68733 17.5066 8.93025 18.7495 10.4579 18.7495H11.6028V20.2496H7.12482C6.74512 20.2496 6.43729 20.5574 6.43729 20.9371V31.3124C6.43729 31.6921 6.74512 31.9999 7.12482 31.9999H24.8754C25.2551 31.9999 25.5629 31.6921 25.5629 31.3124V20.9371C25.5629 20.5574 25.2551 20.2496 24.8754 20.2496H20.3974V18.7495H21.5423C23.0699 18.7495 24.3129 17.5066 24.3129 15.9789V14.4994H25.4637C26.2077 14.4994 26.8129 13.8941 26.8129 13.1502V11.0985C26.8129 10.3546 26.2077 9.7493 25.4637 9.7493ZM6.5623 13.1244V11.1243H7.68733V13.1244H6.5623ZM24.1878 30.625H7.81234V21.6247H24.1878V30.625ZM19.0223 20.2496H12.9779V18.7496H19.0223V20.2496ZM22.9378 15.979C22.9378 16.7485 22.3117 17.3745 21.5423 17.3745H10.4579C9.6884 17.3745 9.06238 16.7485 9.06238 15.979V8.26975C9.06238 7.50023 9.68846 6.87421 10.4579 6.87421H21.5423C22.3118 6.87421 22.9378 7.50023 22.9378 8.26975V15.979ZM25.4379 13.1244H24.3129V11.1243H25.4379V13.1244Z"
                                fill="url(#paint8_linear_46_837)"
                              />
                              <path
                                id="Vector_10"
                                d="M16.0001 4.12319C16.5283 4.12319 17.0564 3.92212 17.4586 3.52005C18.2627 2.7159 18.2627 1.40735 17.4586 0.603205C16.6544 -0.200883 15.3459 -0.20107 14.5416 0.603205C13.7374 1.40735 13.7374 2.7159 14.5416 3.52005C14.9437 3.92212 15.4719 4.12319 16.0001 4.12319ZM15.5139 1.57542C15.648 1.44136 15.824 1.37435 16.0001 1.37435C16.1761 1.37435 16.3522 1.44136 16.4862 1.57536C16.7543 1.84343 16.7543 2.27963 16.4862 2.54764C16.2181 2.81571 15.7819 2.81577 15.5139 2.54764C15.2458 2.27951 15.2459 1.84349 15.5139 1.57542Z"
                                fill="url(#paint9_linear_46_837)"
                              />
                              <path
                                id="Vector_11"
                                d="M29.1253 21.6247C27.988 21.6247 27.0627 22.55 27.0627 23.6872C27.0627 24.8245 27.988 25.7498 29.1253 25.7498C30.2626 25.7498 31.1879 24.8245 31.1879 23.6872C31.1879 22.55 30.2626 21.6247 29.1253 21.6247ZM29.1253 24.3748C28.7462 24.3748 28.4378 24.0663 28.4378 23.6872C28.4378 23.3082 28.7462 22.9997 29.1253 22.9997C29.5044 22.9997 29.8128 23.3082 29.8128 23.6872C29.8128 24.0663 29.5044 24.3748 29.1253 24.3748Z"
                                fill="url(#paint10_linear_46_837)"
                              />
                              <path
                                id="Vector_12"
                                d="M2.87458 21.6247C1.73729 21.6247 0.812012 22.55 0.812012 23.6872C0.812012 24.8245 1.73729 25.7498 2.87458 25.7498C4.01186 25.7498 4.93714 24.8245 4.93714 23.6872C4.93714 22.55 4.01186 21.6247 2.87458 21.6247ZM2.87458 24.3748C2.4955 24.3748 2.18705 24.0663 2.18705 23.6872C2.18705 23.3082 2.4955 22.9997 2.87458 22.9997C3.25365 22.9997 3.5621 23.3082 3.5621 23.6872C3.5621 24.0663 3.25371 24.3748 2.87458 24.3748Z"
                                fill="url(#paint11_linear_46_837)"
                              />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_46_837"
                            x1="16"
                            y1="3.43661"
                            x2="16"
                            y2="6.18669"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_46_837"
                            x1="26.3128"
                            y1="22.9997"
                            x2="26.3128"
                            y2="24.3748"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint2_linear_46_837"
                            x1="29.1253"
                            y1="25.0623"
                            x2="29.1253"
                            y2="32"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint3_linear_46_837"
                            x1="5.68706"
                            y1="22.9997"
                            x2="5.68706"
                            y2="24.3748"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint4_linear_46_837"
                            x1="2.87453"
                            y1="25.0623"
                            x2="2.87453"
                            y2="32"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint5_linear_46_837"
                            x1="14.6229"
                            y1="8.68677"
                            x2="14.6229"
                            y2="15.5622"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint6_linear_46_837"
                            x1="19.5484"
                            y1="8.68677"
                            x2="19.5484"
                            y2="15.562"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint7_linear_46_837"
                            x1="16"
                            y1="22.9997"
                            x2="16"
                            y2="29.2499"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint8_linear_46_837"
                            x1="16.0001"
                            y1="5.49917"
                            x2="16.0001"
                            y2="31.9999"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint9_linear_46_837"
                            x1="16.0001"
                            y1="6.86646e-05"
                            x2="16.0001"
                            y2="4.12319"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint10_linear_46_837"
                            x1="29.1253"
                            y1="21.6247"
                            x2="29.1253"
                            y2="25.7498"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <linearGradient
                            id="paint11_linear_46_837"
                            x1="2.87458"
                            y1="21.6247"
                            x2="2.87458"
                            y2="25.7498"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#A8FF78" />
                            <stop offset="1" stopColor="#78FFD6" />
                          </linearGradient>
                          <clipPath id="clip0_46_837">
                            <rect width="32" height="32" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="AiServices text-neutral-400  text-lg font-normal responsive-font-size font-urbaninst">
                  AI Services
                </div>
              </div>
            </div>
            <div className="resource-card servises-cards2 w-[261px] h-[120px] mobile-view-gradient servises-cards  services-Card-hover hover:border-yellow-50 hover:border-opacity-15  p-6 border   border-white border-opacity-10  flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281402 flex-col app-delopment-padding justify-start items-start gap-4 flex">
                <div className="Resource1 w-8 h-8  svg-margin relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    className="servise-card-svg"
                    fill="none"
                  >
                    <g id="resource 1" clipPath="url(#clip0_46_856)">
                      <path
                        id="Vector"
                        d="M26 20.5C23.136 20.5 20.779 22.701 20.5255 25.5H12.242C12.094 24.9905 11.8815 24.5 11.61 24.038L12.733 22.6345C13.2275 22.016 13.5 21.2395 13.5 20.448V16.5H15.5255C15.779 19.299 18.136 21.5 21 21.5C24.0325 21.5 26.5 19.0325 26.5 16C26.5 12.9675 24.0325 10.5 21 10.5C18.136 10.5 15.779 12.701 15.5255 15.5H13.5V15.281C13.5 14.5915 13.0325 13.993 12.364 13.826L11.5 13.61L9.5 13.1095L8.5 12.8595L7.5 12.6095V9.5H13C13.827 9.5 14.5 8.827 14.5 8V6.5H20.5255C20.779 9.299 23.136 11.5 26 11.5C29.0325 11.5 31.5 9.0325 31.5 6C31.5 2.9675 29.0325 0.5 26 0.5C23.136 0.5 20.779 2.701 20.5255 5.5H14.5V4C14.5 3.173 13.827 2.5 13 2.5H2C1.173 2.5 0.5 3.173 0.5 4V8C0.5 8.827 1.173 9.5 2 9.5H4.5V14.615C4.0365 14.2365 3.453 14 2.809 14C2.087 14 1.5 14.5875 1.5 15.309C1.5 15.511 1.548 15.714 1.638 15.8945L2.236 17.0905C2.4085 17.4355 2.5 17.8225 2.5 18.208V20.4475C2.5 21.2395 2.7725 22.016 3.267 22.634L4.39 24.0375C3.8085 25.028 3.5 26.1485 3.5 27.3025V31.5H12.5V27.3025C12.5 27.0325 12.4795 26.765 12.4465 26.5H20.5255C20.779 29.299 23.136 31.5 26 31.5C29.0325 31.5 31.5 29.0325 31.5 26C31.5 22.9675 29.0325 20.5 26 20.5ZM18.184 19.5045C18.6025 18.314 19.7165 17.5 21 17.5C22.2835 17.5 23.3975 18.314 23.816 19.5045C23.044 20.126 22.0655 20.5 21 20.5C19.9345 20.5 18.956 20.126 18.184 19.5045ZM19.5 15C19.5 14.173 20.173 13.5 21 13.5C21.827 13.5 22.5 14.173 22.5 15C22.5 15.827 21.827 16.5 21 16.5C20.173 16.5 19.5 15.827 19.5 15ZM21 11.5C23.481 11.5 25.5 13.5185 25.5 16C25.5 17.0225 25.153 17.9635 24.5765 18.72C24.1655 17.8895 23.4845 17.235 22.656 16.8585C23.1695 16.4005 23.5 15.741 23.5 15C23.5 13.6215 22.3785 12.5 21 12.5C19.6215 12.5 18.5 13.6215 18.5 15C18.5 15.741 18.8305 16.4005 19.344 16.8585C18.5155 17.235 17.8345 17.8895 17.4235 18.72C16.847 17.9635 16.5 17.0225 16.5 16C16.5 13.5185 18.519 11.5 21 11.5ZM23.184 9.5045C23.6025 8.314 24.7165 7.5 26 7.5C27.2835 7.5 28.3975 8.314 28.816 9.5045C28.044 10.126 27.0655 10.5 26 10.5C24.9345 10.5 23.956 10.126 23.184 9.5045ZM24.5 5C24.5 4.173 25.173 3.5 26 3.5C26.827 3.5 27.5 4.173 27.5 5C27.5 5.827 26.827 6.5 26 6.5C25.173 6.5 24.5 5.827 24.5 5ZM26 1.5C28.481 1.5 30.5 3.5185 30.5 6C30.5 7.0225 30.153 7.9635 29.5765 8.72C29.1655 7.8895 28.4845 7.235 27.656 6.8585C28.1695 6.4005 28.5 5.741 28.5 5C28.5 3.6215 27.3785 2.5 26 2.5C24.6215 2.5 23.5 3.6215 23.5 5C23.5 5.741 23.8305 6.4005 24.344 6.8585C23.5155 7.235 22.8345 7.8895 22.4235 8.72C21.847 7.9635 21.5 7.0225 21.5 6C21.5 3.5185 23.519 1.5 26 1.5ZM2 8.5C1.7245 8.5 1.5 8.276 1.5 8V4C1.5 3.724 1.7245 3.5 2 3.5H13C13.2755 3.5 13.5 3.724 13.5 4V8C13.5 8.276 13.2755 8.5 13 8.5H7.5V8C7.5 7.173 6.827 6.5 6 6.5C5.173 6.5 4.5 7.173 4.5 8V8.5H2ZM3.5 20.448V18.2085C3.5 17.668 3.3725 17.127 3.1305 16.6435L2.5325 15.4475C2.511 15.405 2.5 15.357 2.5 15.309C2.5 15.1385 2.6385 15 2.809 15C3.7415 15 4.5 15.759 4.5 16.691V17.5V19H5.5V17.5V16.691V8C5.5 7.724 5.7245 7.5 6 7.5C6.2755 7.5 6.5 7.724 6.5 8V12.3595V19H7.5V13.6405L8.5 13.8905V19H9.5V14.1405L10.5 14.3905V19H11.5V14.64L12.121 14.7955C12.344 14.8515 12.5 15.051 12.5 15.281V20.448C12.5 21.0135 12.3055 21.568 11.952 22.0095L10.7595 23.5H5.2405L4.048 22.0095C3.6945 21.568 3.5 21.013 3.5 20.448ZM11.5 30.5H4.5V27.3025C4.5 26.3105 4.767 25.3465 5.275 24.5H10.725C11.233 25.3465 11.5 26.3105 11.5 27.3025V30.5ZM23.184 29.5045C23.6025 28.314 24.7165 27.5 26 27.5C27.2835 27.5 28.3975 28.314 28.816 29.5045C28.044 30.126 27.0655 30.5 26 30.5C24.9345 30.5 23.956 30.126 23.184 29.5045ZM24.5 25C24.5 24.173 25.173 23.5 26 23.5C26.827 23.5 27.5 24.173 27.5 25C27.5 25.827 26.827 26.5 26 26.5C25.173 26.5 24.5 25.827 24.5 25ZM29.5765 28.72C29.1655 27.8895 28.4845 27.235 27.656 26.8585C28.1695 26.4005 28.5 25.741 28.5 25C28.5 23.6215 27.3785 22.5 26 22.5C24.6215 22.5 23.5 23.6215 23.5 25C23.5 25.741 23.8305 26.4005 24.344 26.8585C23.5155 27.235 22.8345 27.8895 22.4235 28.72C21.847 27.9635 21.5 27.0225 21.5 26C21.5 23.5185 23.519 21.5 26 21.5C28.481 21.5 30.5 23.5185 30.5 26C30.5 27.0225 30.153 27.9635 29.5765 28.72Z"
                        fill="url(#paint0_linear_46_856)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_46_856"
                        x1="16"
                        y1="0.5"
                        x2="16"
                        y2="31.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E1EEC3" />
                        <stop offset="1" stopColor="#F05053" />
                      </linearGradient>
                      <clipPath id="clip0_46_856">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="ResourceAugmentation text-neutral-400 leading-tight font-normal responsive-font-size font-urbaninst text-lg">
                  Resource Augmentation
                </div>
              </div>
            </div>
          </div>
          <div className="second-row-cards  mt-6 justify-start items-start gap-6 inline-flex pb-20">
            <div className="mobile-development-card servises-cards2 w-[275px] h-[120px] mobile-view-gradient servises-cards   p-5 hover:border-yellow-50 hover:border-opacity-15   services-Card-hover border border-white border-opacity-10 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281402 app-delopment-padding flex-col justify-start items-start gap-4 flex">
                <div className="MobileDevelopment1 w-8 h-8 svg-margin relative">
                  <div className="Group w-7 h-7 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      className="servise-card-svg"
                      fill="none"
                    >
                      <g id="mobile-development 1">
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M27.4374 6.66666H21.3334V3.40799C21.3334 2.26399 20.4027 1.33333 19.2587 1.33333H4.74141C3.59741 1.33333 2.66675 2.26399 2.66675 3.40799V28.592C2.66675 29.736 3.59741 30.6667 4.74141 30.6667H19.2587C20.4027 30.6667 21.3334 29.736 21.3334 28.592V25.3333H27.4374C28.4827 25.3333 29.3334 24.4827 29.3334 23.4373V8.56266C29.3334 7.51733 28.4827 6.66666 27.4374 6.66666ZM28.0001 8.56266V9.33333H21.3707C21.1894 9.33333 21.0281 9.23333 20.9481 9.07199L20.4121 8H27.4374C27.7481 8 28.0001 8.252 28.0001 8.56266ZM15.5881 2.66666L14.9214 3.99999H9.07875L8.41208 2.66666H15.5881ZM19.2587 29.3333H4.74141C4.33341 29.3333 4.00008 29 4.00008 28.592V28H20.0001V28.592C20.0001 29 19.6681 29.3333 19.2587 29.3333ZM20.0001 26.6667H4.00008V3.40799C4.00008 2.99999 4.33341 2.66666 4.74141 2.66666H6.92141L8.07075 4.96533C8.18408 5.19066 8.41475 5.33333 8.66675 5.33333H15.3334C15.5854 5.33333 15.8161 5.19066 15.9294 4.96533L17.0787 2.66666H19.2587C19.6681 2.66666 20.0001 2.99999 20.0001 3.40799V6.66666H11.2294C10.1841 6.66666 9.33341 7.51733 9.33341 8.56266V23.4373C9.33341 24.4827 10.1841 25.3333 11.2294 25.3333H20.0001V26.6667ZM27.4374 24H11.2294C10.9187 24 10.6667 23.748 10.6667 23.4373V8.56266C10.6667 8.252 10.9187 8 11.2294 8H18.9214L19.7547 9.66666C20.0627 10.284 20.6827 10.6667 21.3707 10.6667H28.0001V23.4373C28.0001 23.748 27.7481 24 27.4374 24Z"
                            fill="url(#paint0_linear_46_816)"
                          />
                          <path
                            id="Vector_2"
                            d="M13.5281 15.8053C13.7868 16.064 14.2121 16.064 14.4708 15.8053C14.7294 15.5467 14.7294 15.1213 14.4708 14.8627L13.6094 14L14.4708 13.1387C14.7308 12.8787 14.7308 12.456 14.4708 12.196C14.2108 11.936 13.7881 11.936 13.5281 12.196L12.1948 13.5293C11.9348 13.7893 11.9348 14.212 12.1948 14.472L13.5281 15.8053Z"
                            fill="url(#paint1_linear_46_816)"
                          />
                          <path
                            id="Vector_3"
                            d="M16.368 15.9293C16.6947 16.0933 17.0987 15.9587 17.2627 15.6307L18.596 12.964C18.76 12.6373 18.6253 12.2333 18.2973 12.0693C17.9693 11.9053 17.5667 12.04 17.4027 12.368L16.0693 15.0347C15.9067 15.3627 16.0413 15.7667 16.368 15.9293Z"
                            fill="url(#paint2_linear_46_816)"
                          />
                          <path
                            id="Vector_4"
                            d="M20.1948 15.8053C20.4534 16.064 20.8788 16.064 21.1374 15.8053L22.4708 14.472C22.7308 14.212 22.7308 13.7893 22.4708 13.5293L21.1374 12.196C20.8774 11.936 20.4548 11.936 20.1948 12.196C19.9348 12.456 19.9348 12.8787 20.1948 13.1387L21.0561 14L20.1948 14.8613C19.9374 15.12 19.9374 15.5467 20.1948 15.8053Z"
                            fill="url(#paint3_linear_46_816)"
                          />
                          <path
                            id="Vector_5"
                            d="M12.6667 20H19.3333C19.7013 20 20 19.7013 20 19.3333C20 18.9653 19.7013 18.6667 19.3333 18.6667H12.6667C12.2987 18.6667 12 18.9653 12 19.3333C12 19.7013 12.2987 20 12.6667 20Z"
                            fill="url(#paint4_linear_46_816)"
                          />
                          <path
                            id="Vector_6"
                            d="M24.6667 21.3333H12.6667C12.2987 21.3333 12 21.632 12 22C12 22.368 12.2987 22.6667 12.6667 22.6667H24.6667C25.0347 22.6667 25.3333 22.368 25.3333 22C25.3333 21.632 25.0347 21.3333 24.6667 21.3333Z"
                            fill="url(#paint5_linear_46_816)"
                          />
                          <path
                            id="Vector_7"
                            d="M16.6667 10.6667C17.0349 10.6667 17.3333 10.3682 17.3333 9.99999C17.3333 9.63181 17.0349 9.33333 16.6667 9.33333C16.2985 9.33333 16 9.63181 16 9.99999C16 10.3682 16.2985 10.6667 16.6667 10.6667Z"
                            fill="url(#paint6_linear_46_816)"
                          />
                          <path
                            id="Vector_8"
                            d="M14.0002 10.6667C14.3684 10.6667 14.6668 10.3682 14.6668 9.99999C14.6668 9.63181 14.3684 9.33333 14.0002 9.33333C13.632 9.33333 13.3335 9.63181 13.3335 9.99999C13.3335 10.3682 13.632 10.6667 14.0002 10.6667Z"
                            fill="url(#paint7_linear_46_816)"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_46_816"
                          x1="16.0001"
                          y1="1.33333"
                          x2="16.0001"
                          y2="30.6667"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_46_816"
                          x1="13.3328"
                          y1="12.001"
                          x2="13.3328"
                          y2="15.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_46_816"
                          x1="17.3331"
                          y1="11.9994"
                          x2="17.3331"
                          y2="15.9992"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_46_816"
                          x1="21.3328"
                          y1="12.001"
                          x2="21.3328"
                          y2="15.9993"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint4_linear_46_816"
                          x1="16"
                          y1="18.6667"
                          x2="16"
                          y2="20"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint5_linear_46_816"
                          x1="18.6667"
                          y1="21.3333"
                          x2="18.6667"
                          y2="22.6667"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint6_linear_46_816"
                          x1="16.6667"
                          y1="9.33333"
                          x2="16.6667"
                          y2="10.6667"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                        <linearGradient
                          id="paint7_linear_46_816"
                          x1="14.0002"
                          y1="9.33333"
                          x2="14.0002"
                          y2="10.6667"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8C0FF" />
                          <stop offset="1" stopColor="#8F7BE8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="MobileAppDevelopment text-neutral-400 responsive-font-size text-xl font-normal font-urbaninst">
                  App Development
                </div>
              </div>
            </div>
            <div className="ui-ux-card servises-cards1  servises-cards mobile-view-gradient  p-4 w-[172px] h-[120px] hover:border-yellow-50 hover:border-opacity-15  services-Card-hover border border-white border-opacity-10 flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="Frame1171281402 flex-col justify-start items-start ai-servise-padding gap-4 flex">
                <div className="UxDesign1 w-8 h-8 relative">
                  <div className="VectorIllustration w-7 h-7 svg-margin left-[1.88px] top-[1.60px] absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      className="servise-card-svg"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g id="ux-design 1">
                        <g id="Vector_Illustration">
                          <path
                            id="Vector"
                            d="M27.0558 25.6997C28.7472 25.6997 30.1233 24.3282 30.1233 22.6369V4.47466C30.1233 2.88828 28.8342 1.59921 27.2479 1.59921H4.75191C3.16553 1.59921 1.87646 2.88828 1.87646 4.47466V22.6369C1.87646 24.3282 3.25236 25.6997 4.94388 25.6997H11.9594V27.4581H11.1356C10.3832 27.4581 9.77022 28.0657 9.77022 28.8182V29.8434C9.77022 30.1501 10.021 30.4008 10.3276 30.4008H21.6742C21.9808 30.4008 22.2316 30.1501 22.2316 29.8434V28.8182C22.2316 28.0657 21.6187 27.4581 20.8662 27.4581H20.0403V25.6997H27.0558ZM16.0021 24.2139C15.5679 24.2139 15.2159 23.8666 15.2159 23.4322C15.2159 22.9934 15.5679 22.6414 16.0021 22.6414C16.4318 22.6414 16.7838 22.9934 16.7838 23.4322C16.7838 23.8666 16.4318 24.2139 16.0021 24.2139ZM2.79075 21.1695V4.47466C2.79075 3.39586 3.673 2.5135 4.75191 2.5135H27.2479C28.3267 2.5135 29.2091 3.39586 29.2091 4.47466V21.1695H2.79075Z"
                            fill="url(#paint0_linear_46_829)"
                          />
                          <path
                            id="Vector_2"
                            d="M24.1987 6.12488C23.6272 6.12488 23.1472 6.48157 22.9598 6.98894H17.3552C17.1679 6.48157 16.6833 6.12488 16.1164 6.12488C15.5496 6.12488 15.0695 6.48157 14.8821 6.98894H9.03984C8.85234 6.48157 8.37243 6.12488 7.801 6.12488C7.07411 6.12488 6.48438 6.71461 6.48438 7.44608C6.48438 8.17287 7.07411 8.7626 7.801 8.7626C8.37243 8.7626 8.85234 8.40613 9.03984 7.90323H12.3129C9.9221 9.16952 8.25815 11.6334 8.12098 14.4952H7.82846C7.56786 14.4952 7.35301 14.7055 7.35301 14.9706V16.4517C7.35301 16.7124 7.56786 16.9271 7.82846 16.9271H9.31417C9.57467 16.9271 9.78962 16.7124 9.78962 16.4517V14.9706C9.78962 14.7055 9.57467 14.4952 9.31417 14.4952H9.03527C9.2135 11.1901 11.7095 8.48827 14.9142 7.99006C15.0558 8.29184 15.2981 8.52934 15.6044 8.66193C15.5999 8.67108 15.5952 8.67577 15.5907 8.68492L12.2215 15.4231C12.1439 15.5831 12.1622 15.7798 12.2809 15.9168C12.3952 16.0586 12.5827 16.118 12.7564 16.0677L16.0021 15.1443L19.2433 16.0677C19.4575 16.1155 19.6158 16.047 19.7186 15.9168C19.8376 15.7798 19.8604 15.5831 19.7781 15.4231L16.4272 8.72153C16.8113 8.6347 17.1313 8.37399 17.3004 8.02666C20.4044 8.6164 22.7862 11.2633 22.9598 14.4952H22.6856C22.425 14.4952 22.2102 14.7055 22.2102 14.9706V16.4517C22.2102 16.7124 22.425 16.9271 22.6856 16.9271H24.1713C24.4318 16.9271 24.6468 16.7124 24.6468 16.4517V14.9706C24.6468 14.7055 24.4318 14.4952 24.1713 14.4952H23.8741C23.7369 11.6334 22.073 9.16952 19.6821 7.90323H22.9598C23.1472 8.40613 23.6272 8.7626 24.1987 8.7626C24.9256 8.7626 25.5153 8.17287 25.5153 7.44608C25.5153 6.71461 24.9256 6.12488 24.1987 6.12488Z"
                            fill="url(#paint1_linear_46_829)"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_46_829"
                          x1="15.9999"
                          y1="1.59921"
                          x2="15.9999"
                          y2="30.4008"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00B4DB" />
                          <stop offset="1" stopColor="#0083B0" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_46_829"
                          x1="15.9998"
                          y1="6.12488"
                          x2="15.9998"
                          y2="16.9271"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00B4DB" />
                          <stop offset="1" stopColor="#0083B0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="UiUxDesign text-neutral-400 mt-4 responsive-font-size text-lg font-normal font-urbaninst">
                  UI/ UX Design
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
