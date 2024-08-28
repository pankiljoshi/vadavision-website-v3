/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import Aos from "aos";
import React, { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import Florian from "../../../../public/Images/florian.png";
import Ivan from "../../../../public/Images/ivan.jpeg";
import Reeza from "../../../../public/Images/reeza.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./testimonial.css";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const Testimonials = () => {
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
                <div className="Frame text-[#8E8E8E] hover:text-[#DD4243]">
                  <IoMdArrowBack size={24} />
                </div>
              </div>
              <div
                onClick={handleNextClick}
                className="right-arrow w-[70px] h-[36px] z-10 absolute -top-32 cursor-pointer  right-40 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex"
              >
                <div className="Frame  text-[#8E8E8E] hover:text-[#DD4243]">
                  <IoMdArrowForward size={24} />
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
                  <div className=" h-72 testimonuial-cards-height  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative ml-4">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image
                              src={Florian}
                              alt="florian profile picture"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Florian{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Founder -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              Standard Insights.{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        Collaborating with Vadavision team on intricate projects
                        has consistently been rewarding. Their work on our web
                        app greatly improved its usability and functionality.
                        We're excited about future partnerships.
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72 testimonuial-cards-height testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative ml-4">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image
                              src={Ivan}
                              alt="Ivan profile picture"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Ivan{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Founder -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              360 Rotation Booth.{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        The Vadavision team excelled in understanding our needs
                        and timely delivery, creating a user-friendly mobile
                        app. We're definitely considering them for our next
                        project.
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72 testimonuial-cards-height  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative ml-4">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image
                              src={Reeza}
                              alt="Reza profile picture"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Momd Reza{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Founder -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              Stellar Vision
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        Working with VadaVision was fantastic; they simplified
                        our web app, enhancing user experience. I look forward
                        to future projects. Their expertise and approach are
                        commendable and highly recommendable.
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>

              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" h-72 testimonuial-cards-height  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6  items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 ml-4 w-20 h-20 relative">
                          <div className="Ellipse309 w-20 h-20 left-0  top-0 bottom-4 absolute bg-white rounded-full shadow-inner">
                            <h1 className="bottom-0 absolute right-6 text-[55px] ">
                              R
                            </h1>
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian  text-white text-2xl font-bold urbanist">
                            Rick{" "}
                          </div>
                          <div className="BusinessDirectorAlphabet ">
                            <span className="text-stone-300 text-base font-normal urbanist">
                              Founder -{" "}
                            </span>
                            <span className="text-[#DD4243] text-base font-bold urbanist">
                              On The Go Cleaners
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className=" px-4 text-center text-neutral-200 text-xl font-normal urbanist">
                        I'm highly satisfied with VadaVision's detailed,
                        responsive, and flexible work on my site and app,
                        setting them apart. Excited for future projects and
                        grateful to Kaushal, and Shivendra.
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
