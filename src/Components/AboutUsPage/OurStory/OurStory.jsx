"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Logo from "../../../../public/Images/logo.png";

const OurStory = () => {
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
      <div className="w-full px-20 py-20 padding-full-website justify-start our-story-bg padding-industies items-center inline-flex">
        <div className="self-stretch justify-between w-full our-story-gap items-center gap-56 inline-flex">
          <div
            data-aos="fade-right"
            className="flex-col justify-start items-start gap-6 inline-flex"
          >
            <div className="w-[246px] text-teal-500 our-story-gradient our-story-heading text-[56px] font-bold urbanist">
              Our Story
            </div>
            <div className="w-[793px] text-[#8E8E8E] our-story-paragraph leading-tight text-[20px] font-normal urbanist">
              Vadavision was born from a shared vision and unwavering passion.
              Over the past 1.5 years, we transformed challenges into
              opportunities, guided by our clients support and our team
              sdedication. Today, Vadavision stands as a testament to our
              journey of creativity and growth. With each passing day, our
              commitment to excellence propels us forward, showcasing
              dedication, innovation, and unwavering commitment in every step.
            </div>
          </div>
          <div className="w-[246px] h-[246px] image-our-story">
            <div
              data-aos="fade-left"
              className=" min-w-[300px] responsive-logo1"
            >
              <Image src={Logo} alt="" width={340} className="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
