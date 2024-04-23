/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const MissionVision = () => {
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
      <div className="w-full px-20 py-20 bg-zinc-950 padding-full-website justify-center padding-industies items-center inline-flex">
        <div className=" justify-start mission-vision-card items-start gap-14 inline-flex">
          <div
            data-aos="fade-up"
            className="w-[50%] mission-card min-w-[360px] border-gradient-style px-10 pt-10 pb-[80px] bg-gradient-to-b from-stone-950 to-stone-950  flex-col justify-start items-start gap-10 inline-flex"
          >
            <div className=" justify-start items-center gap-8 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g id="mission 1">
                    <path
                      id="Vector"
                      d="M44.7597 3.87674C44.7222 3.53954 44.4449 3.26222 44.1077 3.22475C41.23 2.88005 38.3672 2.96248 35.5944 3.46457C29.7983 4.45832 24.0681 7.60786 19.6245 11.903C19.214 12.2936 18.2352 13.2178 17.8408 13.5966C15.5017 16.3005 12.8058 19.8824 11.2386 22.9118C11.0125 23.3708 11.2355 23.7193 11.6208 24.0509C11.9805 24.4106 12.67 25.0925 13.5467 25.9694C16.8985 29.3294 20.5582 32.9876 23.9336 36.3637L24.1884 36.6185C24.544 36.9817 25.0505 36.8189 25.4174 36.5585C27.1635 35.5843 29.5541 34.1005 32.0722 32.0621C40.5679 25.4085 46.2615 14.8063 44.7597 3.87674ZM35.0099 21.4879C31.3092 25.2712 24.6742 22.5301 24.7355 17.2311C24.686 11.9257 31.287 9.18923 35.0099 12.9747C37.363 15.3202 37.363 19.1422 35.0099 21.4879Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_2"
                      d="M4.42646 24.9204C4.45642 24.9204 4.48637 24.9204 4.51638 24.9129L9.88965 24.2609C9.48954 23.5015 9.62828 22.5821 10.0995 21.8703C10.4742 21.1809 11.0887 20.1242 11.943 18.8277C13.3601 16.618 15.1079 14.5067 16.7842 12.5401C16.7842 12.5401 17.8634 11.5134 17.8634 11.5134C8.88197 11.4241 4.28464 19.319 3.69216 24.0587C3.60604 24.4916 3.97822 24.9348 4.42646 24.9204Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_3"
                      d="M33.0164 33.2235C30.8806 34.9547 28.5724 36.5135 26.1443 37.8699C25.4533 38.3439 24.4881 38.5104 23.7237 38.0947C23.7237 38.0947 23.0718 43.468 23.0718 43.468C23.0079 43.8955 23.3756 44.3179 23.8137 44.3073C25.2294 44.1002 31.6087 42.8199 34.8824 36.6859C35.9084 34.7612 36.5102 32.1784 36.4786 30.106C35.3874 31.198 34.2575 32.2201 33.0164 33.2235Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_4"
                      d="M19.8418 34.3928C17.6091 32.154 15.0381 29.5861 12.8423 27.3857L12.3327 28.4199C11.9055 29.2818 12.0704 30.3235 12.7524 31.0054L16.9791 35.2321C17.6664 35.9139 18.7085 36.0878 19.5645 35.6518L20.5987 35.1422C20.3485 34.893 20.104 34.6447 19.8418 34.3928Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_5"
                      d="M12.8348 35.1794C7.65656 30.5717 3.07785 39.6587 3.00265 44.1872C2.96356 44.6182 3.36373 45.0197 3.79692 44.9816C8.31241 44.9057 17.3773 40.352 12.8348 35.1794Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_6"
                      d="M30.7532 12.7124C24.7963 12.8675 24.7594 21.5787 30.7533 21.7503C36.749 21.5747 36.71 12.8672 30.7532 12.7124Z"
                      fill="#DD4243"
                    />
                  </g>
                </svg>
              </div>
              <div className="text-white text-5xl font-semibold urbanist">
                Mission
              </div>
            </div>
            <div className=" text-[#8E8E8E]  text-[20px] leading-tight font-normal  urbanist">
              At VadaVision, making clients happy and helping our team grow are
              like pieces of a story. We focus on what our clients need and aim
              to exceed their expectations, building strong relationships along
              the way. Our team flourishes too, learning and growing in a
              supportive environment. As our clients succeed, our team members
              do too, creating a story of shared successes and happiness at
              VadaVision.
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[50%] mission-card min-w-[360px] border-gradient-style  px-10 pt-10 pb-[78px] bg-gradient-to-b from-stone-950 to-stone-950  flex-col justify-start items-start gap-10 inline-flex"
          >
            <div className="justify-start items-center gap-8 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <g id="find 1" clipPath="url(#clip0_1824_26864)">
                    <path
                      id="Vector"
                      d="M47.296 29.128L39.558 8.55C39.556 8.546 39.556 8.542 39.554 8.538L39.552 8.536C38.532 5.822 35.898 4 33 4C30.102 4 27.468 5.822 26.446 8.538C26.15 9.326 26 10.156 26 11V20H22V11C22 7.14 18.86 4 15 4C12.102 4 9.468 5.822 8.446 8.538C8.444 8.542 8.444 8.546 8.442 8.55L0.704 29.122L0.702 29.124C0.236 30.366 0 31.668 0 33C0 39.066 4.936 44 11 44C17.064 44 22 39.066 22 33V32H26V33C26 39.066 30.936 44 37 44C43.064 44 48 39.066 48 33C48 31.668 47.764 30.366 47.296 29.128ZM11 40C7.14 40 4 36.86 4 33C4 32.152 4.15 31.322 4.446 30.536C5.466 27.824 8.1 26 11 26C14.86 26 18 29.14 18 33C18 36.86 14.86 40 11 40ZM37 40C33.14 40 30 36.86 30 33C30 29.14 33.14 26 37 26C39.9 26 42.534 27.824 43.554 30.536C43.85 31.322 44 32.152 44 33C44 36.86 40.86 40 37 40Z"
                      fill="#DD4243"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1824_26864">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="text-white text-5xl font-semibold urbanist">
                Vision
              </div>
            </div>
            <div className=" text-[#8E8E8E]  text-[20px] leading-tight font-normal  urbanist">
              At VadaVision, dreams are our starting point. It's a place where
              creativity and technology come together, and ideas become reality.
              Our dedicated team explores new horizons, creating innovative
              solutions that the market loves. Challenges make us grow, and our
              achievements write our story. VadaVision dreams of a limitless
              creative world, where every innovation leaves a lasting impact on
              the industry.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionVision;
