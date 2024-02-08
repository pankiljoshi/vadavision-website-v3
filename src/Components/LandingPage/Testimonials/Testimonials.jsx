"use client";
import Image from "next/image";
import React, { useRef } from "react";
import CLient from "../../../../public/Images/client.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Testimonials = () => {
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
      <div className="w-full px-20  h-[600px]   CardLinkedinReview">
        <div className="Frame1171281456  w-full mt-20 pt-20   justify-start items-center gap-96 inline-flex">
          <div className="Title w-[700px] ">
            <span className="text-neutral-400 text-4xl font-semibold font-urbaninst">
              Hear why our <br />
            </span>
            <span className="testimonial-gradient text-6xl font-bold font-urbaninst">
              Client Loves Us{" "}
            </span>
          </div>
        </div>
        <div>
          <div className="Frame7 justify-end items-start gap-3.5 flex ">
            <div className="Frame2 w-[70px] h-[36px] cursor-pointer bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
              <div className="Frame w-6  relative" onClick={handleNextClick}>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 19.5L5 12.5L12 5.5"
                      stroke="#8E8E8E"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div className="Frame3 w-[70px] h-[36px] cursor-pointer  bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
              <div className="Frame relative" onClick={handlePrevClick}>
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
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      id="Vector_2"
                      d="M12 5.5L19 12.5L12 19.5"
                      stroke="#DD4243"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <Splide
            options={{
              rewind: true,
              gap: "1rem",
              direction: "ltr",
              heightRatio: 0.4,
              isNavigation: true,
              speed: 900,
            }}
            ref={splideRef}
          >
            <div className="Frame117128144 self-stretch  justify-end items-start gap-10 inline-flex mt-20">
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className="w-[500px] h-72  testimonial-gradient-cards bg-gradient-color relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start mt-6 ml-6 items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="KevinOBrian w-64 text-white text-2xl font-bold font-urbaninst">
                            Kevin O’Brian
                          </div>
                          <div className="BusinessDirectorAlphabet w-56">
                            <span className="text-stone-300 text-base font-normal font-urbaninst">
                              Business Director -{" "}
                            </span>
                            <span className="text-red-500 text-base font-bold font-urbaninst">
                              Alphabet
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ItWasGreatToWorkWithKevinOnAUiRedesignOfOurProductFromAToZHeIsFastAccurateAndExpertOnSaasTopicsIRecommendHim w-96 text-center text-neutral-200 text-xl font-normal font-urbaninst">
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
                  <div className=" w-[500px] h-72 testimonial-gradient-cards  relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start ml-6 mt-6 items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute  rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="LindseyKoelpinMd w-64 text-white text-2xl font-bold font-urbaninst">
                            Lindsey Koelpin MD
                          </div>
                          <div className="FounderAbInfotech w-56">
                            <span className="text-stone-300 text-base font-light font-urbaninst">
                              Founder -{" "}
                            </span>
                            <span className="text-red-500 text-base font-bold font-urbaninst">
                              AB Infotech
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ItWasGreatToWorkWithLindseyOnAUiRedesignOfOurProductFromAToZHeIsFastAccurateAndExpertOnSaasTopicsIRecommendHim w-96 text-center text-neutral-200 text-xl font-normal font-urbaninst">
                        It was great to work with Lindsey on a UI redesign of
                        our product from A to Z. He is fast, accurate and expert
                        on SaaS topics. <br />I recommend him!
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className="testimonial-gradient-color-change">
                  <div className=" w-[500px] h-72 testimonial-gradient-cards  relative flex-col justify-start items-start flex">
                    <div className="Frame1171281448 flex-col justify-start ml-6 mt-6 items-start gap-8 inline-flex">
                      <div className="Frame1171281447 justify-start items-center gap-6 inline-flex">
                        <div className="Group7 w-20 h-20 relative">
                          <div className="Ellipse309 w-20 h-20 left-0 top-0 absolute  rounded-full shadow-inner">
                            <Image src={CLient} alt="" />
                          </div>
                        </div>
                        <div className="Frame1171281446 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="LindseyKoelpinMd w-64 text-white text-2xl font-bold font-urbaninst">
                            Lindsey Koelpin MD
                          </div>
                          <div className="FounderAbInfotech w-56">
                            <span className="text-stone-300 text-base font-light font-urbaninst">
                              Founder -{" "}
                            </span>
                            <span className="text-red-500 text-base font-bold font-urbaninst">
                              AB Infotech
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="ItWasGreatToWorkWithLindseyOnAUiRedesignOfOurProductFromAToZHeIsFastAccurateAndExpertOnSaasTopicsIRecommendHim w-96 text-center text-neutral-200 text-xl font-normal font-urbaninst">
                        It was great to work with Lindsey on a UI redesign of
                        our product from A to Z. He is fast, accurate and expert
                        on SaaS topics. <br />I recommend him!
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            </div>
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
