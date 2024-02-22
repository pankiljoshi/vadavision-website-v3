"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const ConsultWithUs = () => {
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
      <div className="px-10 ">
        <div
          data-aos="zoom-in"
          className=" w-full  justify-center items-center  padding-industies inline-flex consultus-bg"
        >
          <div className="  self-stretch  flex-col justify-start items-center gap-10 inline-flex">
            <div className="Frame1171281442 flex-col justify-start items-center gap-4 flex">
              <div className="ReadyToDiscussYourProject text-white text-5xl font-semibold font-urbaninst">
                Ready to discuss your project?
              </div>
              <div className="GetInTouch text-neutral-400 text-xl font-light font-urbaninst">
                Get in touch with us and get your project a dedicated team of
                professionals.
              </div>
            </div>
            <div className="Schedulecall h-12 px-10 py-4 bg-[#DD4243] hover:bg-[#D53033] cursor-pointer justify-center items-center gap-4 inline-flex">
              <div className="BookACall text-white text-xl font-light font-urbaninst">
                Schedule a Call
              </div>
              <div className="Div w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="ChevronRight w-4 h-4 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <g id="chevron-right">
                      <path
                        id="Vector (Stroke)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.02851 3.52876C6.28886 3.26841 6.71097 3.26841 6.97132 3.52876L10.9713 7.52876C11.2317 7.78911 11.2317 8.21122 10.9713 8.47157L6.97132 12.4716C6.71097 12.7319 6.28886 12.7319 6.02851 12.4716C5.76816 12.2112 5.76816 11.7891 6.02851 11.5288L9.55711 8.00016L6.02851 4.47157C5.76816 4.21122 5.76816 3.78911 6.02851 3.52876Z"
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
    </>
  );
};

export default ConsultWithUs;
