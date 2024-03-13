"use client";
import Image from "next/image";
import Aos from "aos";
import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import CLient from "../../../../public/Images/client.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./testimonial.css";
const Testimonials = () => {
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
  const splideRef = useRef();
  const handlePrevClick = () => {
    if (splideRef.current) {
      splideRef.current.go("-1");
    }
  };

  const handleNextClick = () => {
    if (splideRef.current) {
      splideRef.current.go("+1");
    }
  };
  return (
    <>
      <div className="bg-[#060606]">
        <div className="w-full pl-20  h-[600px] mb-20 testimonial-padding   testimonial-background">
          <div
            data-aos="fade-right"
            className="Frame1171281456  w-full  pt-20 justify-between  inline-flex"
          >
            <div className="Title  ">
              <span className="text-neutral-400 text-4xl font-medium font-change-1 urbanist">
                Hear why our <br />
              </span>
              <span className="testimonial-gradient text-6xl font-bold font-change-2 leading-normal urbanist">
                Client Loves Us{" "}
              </span>
            </div>
          </div>

          <div data-aos="fade-right" className="mt-10   testimonial relative ">
            <div className="testimonial-arrow justify-end   items-start gap-3.5 flex ">
              <div
                onClick={handlePrevClick}
                className="left-arrow w-[70px] h-[36px]   z-10 absolute -top-32  right-64 cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex"
              >
                <div className="Frame w-6  relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g id="Frame">
                      <path
                        id="Vector"
                        d="M19 12.5H5"
                        stroke="#8E8E8E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M12 19.5L5 12.5L12 5.5"
                        stroke="#8E8E8E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div
                onClick={handleNextClick}
                className="right-arrow w-[70px] h-[36px] z-10 absolute -top-32 cursor-pointer  right-40 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex"
              >
                <div className="Frame relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <g id="Frame">
                      <path
                        id="Vector"
                        d="M5 12.5H19"
                        stroke="#DD4243"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Vector_2"
                        d="M12 5.5L19 12.5L12 19.5"
                        stroke="#DD4243"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <Splide
              options={{
                type: "loop",
                perPage: 3,
                gap: "1rem",
                fixedWidth: "500px",
                mediaQuery: "max",
                pagination: false,

                breakpoints: {
                  1000: {
                    perPage: 2,
                    fixedWidth: "420px",
                  },
                  720: {
                    perPage: 1,
                  },
                  560: {
                    perPage: 1,
                    fixedWidth: "420px",
                  },
                  480: {
                    perPage: 1,
                    fixedWidth: "390px",
                  },
                  440: {
                    perPage: 1,
                    fixedWidth: "360px",
                  },
                  400: {
                    perPage: 1,
                    fixedWidth: "330px",
                  },
                  380: {
                    perPage: 1,
                    fixedWidth: "300px",
                  },
                  360: {
                    perPage: 1,
                    fixedWidth: "280px",
                  },
                },
              }}
              ref={splideRef}
            >
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 ml-4 w-20 h-20 relative">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Kevin O’Brian
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Business Director -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              Alphabet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        It was great to work with Kevin on a UI redesign of our
                        product from A to Z. He is fast, accurate and expert on
                        SaaS topics. <br />I recommend him!
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative ml-4">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Lindsey Koelpin MD{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Founder -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              AB Infotech
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        It was great to work with Kevin on a UI redesign of our
                        product from A to Z. He is fast, accurate and expert on
                        SaaS topics. <br />I recommend him!
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative ml-4">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Santiago Hoeger III{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Engineer -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              Orange Tech.{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        It was great to work with Kevin on a UI redesign of our
                        product from A to Z. He is fast, accurate and expert on
                        SaaS topics. <br />I recommend him!
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
