"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const NewsLetter = () => {
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
      <div className=" w-full  mt-6 justify-between newsletter-responsive  padding-industies px-20 items-center gap-10 inline-flex">
        <div
          data-aos="fade-right"
          className="JoinOurNewsletter w-[443px]  text-white text-4xl font-semibold font-urbaninst"
        >
          Join our newsletter to stay connected with us!
        </div>
        <div
          data-aos="fade-left"
          className=" justify-start flex-wrap email-subscribe items-start gap-6 flex"
        >
          <div className="email-responsive w-72 h-12 px-2 pt-4 pb-3.5 bg-white bg-opacity-5 border border-white border-opacity-20 justify-center items-center flex">
            <div className=" grow shrink basis-0 text-neutral-400 text-sm font-light font-urbaninst">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="text-neutral-400 border-none w-full outline-none bg-opacity-5 border border-white border-opacity-20 bg-black"
              />
            </div>
          </div>
          <div className="Schedulecall w-[180px] h-[48px] cursor-pointer px-10 py-4 bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 flex">
            <div className="BookACall text-white text-xl font-light font-urbaninst">
              Subscribe
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
