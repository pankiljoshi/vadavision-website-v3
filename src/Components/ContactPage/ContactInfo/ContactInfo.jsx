/* eslint-disable no-irregular-whitespace */
"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const ContactInfo = () => {
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
        data-aos="zoom-in"
        className="w-full  contact-info-content flex justify-between bg-[#0D0D0D]   py-10 "
      >
        <div className="flex flex-col w-[33%] contact-info  justify-start border-style-milestone  padding-between  ">
          <div className="flex-col mx-auto">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <g id="phone-call 1">
                  <path
                    id="Vector"
                    d="M34.9707 27.04C34.8832 26.9707 28.5333 22.3936 26.7904 22.7221C25.9584 22.8693 25.4827 23.4368 24.528 24.5728C24.3744 24.7563 24.0053 25.1957 23.7184 25.5083C23.1151 25.3115 22.5266 25.0719 21.9573 24.7915C19.0192 23.3611 16.6453 20.9872 15.2149 18.0491C14.9343 17.4799 14.6947 16.8914 14.4981 16.288C14.8117 16 15.2512 15.6309 15.4389 15.4731C16.5696 14.5237 17.1381 14.048 17.2853 13.2139C17.5872 11.4859 13.0133 5.09227 12.9653 5.03467C12.7578 4.73821 12.487 4.49159 12.1725 4.31264C11.8579 4.1337 11.5075 4.02691 11.1467 4C9.2928 4 4 10.8661 4 12.0224C4 12.0896 4.09707 18.9205 12.5205 27.4891C21.0805 35.9029 27.9104 36 27.9776 36C29.1349 36 36 30.7072 36 28.8533C35.9734 28.4937 35.8672 28.1445 35.6892 27.8309C35.5112 27.5173 35.2658 27.2472 34.9707 27.04Z"
                    fill="#DD4243"
                  />
                </g>
              </svg>
            </span>{" "}
            <p className="text-white font-light text-[24px] text-size  urbanist">
              +91 62 8000 7001{" "}
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col w-[33%] contact-info    border-style-milestone1  padding-between   ">
          <div className="flex-col mx-auto">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                viewBox="0 0 40 41"
                fill="none"
              >
                <g id="email(2) 1">
                  <g id="Group 4">
                    <path
                      id="Vector"
                      d="M22.7002 23.6108C21.903 24.1423 20.9769 24.4233 20.0222 24.4233C19.0675 24.4233 18.1414 24.1423 17.3442 23.6108L4.21336 14.8567C4.14051 14.8081 4.06953 14.7575 4 14.7054V29.0501C4 30.6947 5.33466 31.9999 6.9499 31.9999H33.0944C34.739 31.9999 36.0443 30.6653 36.0443 29.0501V14.7053C35.9746 14.7575 35.9035 14.8083 35.8305 14.8569L22.7002 23.6108Z"
                      fill="#DD4243"
                    />
                    <path
                      id="Vector_2"
                      d="M5.25486 13.2943L18.3857 22.0486C18.8828 22.38 19.4524 22.5456 20.0221 22.5456C20.5918 22.5456 21.1616 22.3799 21.6586 22.0486L34.7895 13.2943C35.5753 12.7708 36.0444 11.8946 36.0444 10.9489C36.0444 9.32283 34.7215 8 33.0955 8H6.94889C5.32289 8.00006 4 9.32289 4 10.9505C4 11.8946 4.46915 12.7708 5.25486 13.2943Z"
                      fill="#DD4243"
                    />
                  </g>
                </g>
              </svg>
            </span>{" "}
            <p className="text-white font-light text-size  text-[24px] urbanist">
              info@vadavision.ca{" "}
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col w-[33%] contact-info-address   ">
          <div className="flex-col mx-auto">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g id="map 1">
                  <path
                    id="Vector"
                    d="M20.2317 4C17.1202 4 14.1362 5.23601 11.9361 7.43613C9.73601 9.63625 8.5 12.6202 8.5 15.7317C8.5 21.9281 18.9519 35.0356 19.3998 35.6009C19.4997 35.7255 19.6264 35.826 19.7703 35.8951C19.9143 35.9641 20.072 36 20.2317 36C20.3914 36 20.549 35.9641 20.693 35.8951C20.837 35.826 20.9636 35.7255 21.0636 35.6009C21.5115 35.0356 31.9634 21.9281 31.9634 15.7317C31.9634 12.6202 30.7274 9.63625 28.5272 7.43613C26.3271 5.23601 23.3431 4 20.2317 4ZM20.2317 18.9312C19.3879 18.9312 18.5631 18.681 17.8616 18.2123C17.16 17.7435 16.6132 17.0772 16.2904 16.2977C15.9675 15.5182 15.883 14.6604 16.0476 13.8329C16.2122 13.0054 16.6185 12.2452 17.2151 11.6486C17.8117 11.052 18.5719 10.6457 19.3994 10.4811C20.227 10.3165 21.0847 10.4009 21.8642 10.7238C22.6438 11.0467 23.31 11.5935 23.7788 12.2951C24.2475 12.9966 24.4977 13.8214 24.4977 14.6652C24.4977 15.7966 24.0483 16.8817 23.2482 17.6817C22.4482 18.4818 21.3631 18.9312 20.2317 18.9312Z"
                    fill="#DD4243"
                  />
                </g>
              </svg>
            </span>{" "}
            <p className="text-white font-light text-[24px] text-size urbanist">
              Plot 337, Phase 2 Chandigarh,
              <br /> India - 160002{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
