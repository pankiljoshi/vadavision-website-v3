"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const OurPromises = () => {
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
      <div className="unique-gradient-background">
        <div className="w-full px-20  padding-industies Unique bg-cover py-20 ">
          <div data-aos="fade-right" className=" ">
            <span className="text-neutral-400 text-[40px] font-change-1 font-semibold urbanist">
              You have
              <br />
            </span>
            <span className="text-pink-600 our-promise-gradient font-change-2 text-[56px] font-bold urbanist">
              Our Promise
            </span>
          </div>
          <div className="w-full pt-10 promises-wrap  justify-start gap-10  inline-flex">
            <div
              data-aos="fade-right"
              className="w-[33%] promises-cards border-style-milestone30 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-1 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M37.3715 5.59823C37.2997 5.0825 36.9286 4.65827 36.427 4.51884L20.3503 0.0479042C20.1211 -0.0158867 19.8791 -0.0158867 19.6497 0.0479042L3.573 4.51884C3.07139 4.65827 2.70032 5.08233 2.62851 5.59823C2.53527 6.26873 0.408035 22.1112 5.86424 29.9923C11.314 37.864 19.3536 39.8813 19.6931 39.9634C19.794 39.9878 19.8968 39.9998 20 39.9998C20.1032 39.9998 20.206 39.9876 20.3069 39.9634C20.6466 39.8813 28.6862 37.864 34.1358 29.9923C39.592 22.1113 37.4648 6.26891 37.3715 5.59823ZM30.3674 14.8472L19.4015 25.8131C19.1463 26.0683 18.8117 26.1961 18.4772 26.1961C18.1428 26.1961 17.8081 26.0685 17.553 25.8131L10.7728 19.033C10.5276 18.7879 10.3899 18.4554 10.3899 18.1087C10.3899 17.7621 10.5278 17.4295 10.7728 17.1845L12.1191 15.8382C12.6296 15.3279 13.4573 15.3277 13.9676 15.8382L18.4772 20.3479L27.1727 11.6523C27.4177 11.407 27.7503 11.2693 28.0969 11.2693C28.4436 11.2693 28.7761 11.407 29.0212 11.6523L30.3674 12.9985C30.8779 13.509 30.8779 14.3367 30.3674 14.8472Z"
                    fill="#DD4243"
                  />
                </svg>
                <div className="text-center text-white text-[32px] font-bold urbanist">
                  Data Security
                </div>
                <div className="w-[157px] text-center text-neutral-400 text-xl font-medium urbanist">
                  Successful Clients
                </div>
              </div>
              <div className="w-full   border-style-milestone40 hidden show-promises-border "></div>
            </div>
            <div
              data-aos="fade-down"
              className="w-[33%] promises-cards border-style-milestone30 flex-col justify-start items-start gap-4 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-1 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M37.3715 5.59823C37.2997 5.0825 36.9286 4.65827 36.427 4.51884L20.3503 0.0479042C20.1211 -0.0158867 19.8791 -0.0158867 19.6497 0.0479042L3.573 4.51884C3.07139 4.65827 2.70032 5.08233 2.62851 5.59823C2.53527 6.26873 0.408035 22.1112 5.86424 29.9923C11.314 37.864 19.3536 39.8813 19.6931 39.9634C19.794 39.9878 19.8968 39.9998 20 39.9998C20.1032 39.9998 20.206 39.9876 20.3069 39.9634C20.6466 39.8813 28.6862 37.864 34.1358 29.9923C39.592 22.1113 37.4648 6.26891 37.3715 5.59823ZM30.3674 14.8472L19.4015 25.8131C19.1463 26.0683 18.8117 26.1961 18.4772 26.1961C18.1428 26.1961 17.8081 26.0685 17.553 25.8131L10.7728 19.033C10.5276 18.7879 10.3899 18.4554 10.3899 18.1087C10.3899 17.7621 10.5278 17.4295 10.7728 17.1845L12.1191 15.8382C12.6296 15.3279 13.4573 15.3277 13.9676 15.8382L18.4772 20.3479L27.1727 11.6523C27.4177 11.407 27.7503 11.2693 28.0969 11.2693C28.4436 11.2693 28.7761 11.407 29.0212 11.6523L30.3674 12.9985C30.8779 13.509 30.8779 14.3367 30.3674 14.8472Z"
                    fill="#DD4243"
                  />
                </svg>
                <div className="text-center text-white text-[32px] font-bold urbanist">
                  Data Security
                </div>
                <div className="w-[157px] text-center text-neutral-400 text-xl font-medium urbanist">
                  Successful Clients
                </div>
              </div>
              <div className="w-full   border-style-milestone40 hidden show-promises-border  "></div>
            </div>
            <div
              data-aos="fade-left"
              className="w-[33%] promises-cards flex-col justify-start items-start gap-4 inline-flex"
            >
              <div className="flex-col justify-start items-start gap-1 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M37.3715 5.59823C37.2997 5.0825 36.9286 4.65827 36.427 4.51884L20.3503 0.0479042C20.1211 -0.0158867 19.8791 -0.0158867 19.6497 0.0479042L3.573 4.51884C3.07139 4.65827 2.70032 5.08233 2.62851 5.59823C2.53527 6.26873 0.408035 22.1112 5.86424 29.9923C11.314 37.864 19.3536 39.8813 19.6931 39.9634C19.794 39.9878 19.8968 39.9998 20 39.9998C20.1032 39.9998 20.206 39.9876 20.3069 39.9634C20.6466 39.8813 28.6862 37.864 34.1358 29.9923C39.592 22.1113 37.4648 6.26891 37.3715 5.59823ZM30.3674 14.8472L19.4015 25.8131C19.1463 26.0683 18.8117 26.1961 18.4772 26.1961C18.1428 26.1961 17.8081 26.0685 17.553 25.8131L10.7728 19.033C10.5276 18.7879 10.3899 18.4554 10.3899 18.1087C10.3899 17.7621 10.5278 17.4295 10.7728 17.1845L12.1191 15.8382C12.6296 15.3279 13.4573 15.3277 13.9676 15.8382L18.4772 20.3479L27.1727 11.6523C27.4177 11.407 27.7503 11.2693 28.0969 11.2693C28.4436 11.2693 28.7761 11.407 29.0212 11.6523L30.3674 12.9985C30.8779 13.509 30.8779 14.3367 30.3674 14.8472Z"
                    fill="#DD4243"
                  />
                </svg>
                <div className="text-center text-white text-[32px] font-bold urbanist">
                  Data Security
                </div>
                <div className="w-[157px] text-center text-neutral-400 text-xl font-medium urbanist">
                  Successful Clients
                </div>
              </div>
              <div className="w-full   border-style-milestone40  hidden show-promises-border "></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPromises;
