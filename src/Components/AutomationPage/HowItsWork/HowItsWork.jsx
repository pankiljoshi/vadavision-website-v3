"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import FlowChat from "../../../../public/Images/automation-work.png";

const HowItsWork = () => {
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
      <div className="w-full px-20 py-20 padding-industies bg-gradient-to-r how-is-work-bg from-zinc-950 to-zinc-950">
        <div data-aos="fade-right" className=" ">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold furbanist">
            As easy as it can be
            <br />
          </span>
          <span className="text-teal-500 how-its-work-gradient font-change-2 text-[56px] font-bold urbanist">
            How it Works
          </span>
        </div>
        <div className="flex flex-row gap-8 responsive-section-automation pt-10">
          <div
            data-aos="fade-right"
            className="flex-col w-[55%] automation-cards-leftside  justify-start items-start gap-10 inline-flex"
          >
            <div className="w-[635px] h-[130px] aumtomation-cards flex gap-11 items-center px-10  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 cards-border-style">
              <div className=" text-red-500 text-[56px] font-bold urbanist">
                01
              </div>
              <div className=" flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-white text-[32px] font-bold urbanist">
                  Connect
                </div>
                <div className="w-[441px] automation-cards-width text-[#8E8E8E] text-base font-light urbanist">
                  Set up triggers for actions or a particular time to get the
                  data.
                </div>
              </div>
            </div>
            <div className="w-[635px] h-[130px]  aumtomation-cards flex items-center gap-11 px-10  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 custom-border-style">
              <div className=" text-zinc-600 text-[56px] font-bold urbanist">
                02
              </div>
              <div className="  flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-stone-300 text-[32px] font-bold urbanist">
                  Customise
                </div>
                <div className="w-[452px] automation-cards-width text-neutral-400 text-base font-light furbanist">
                  Customise your automation, activate integrations of your
                  choice.
                </div>
              </div>
            </div>
            <div className="w-[635px] h-[130px] aumtomation-cards flex items-center px-10 gap-11  bg-gradient-to-r from-stone-950 via-zinc-900 to-neutral-900 custom-border-style">
              <div className=" text-zinc-600 text-[56px] font-bold urbanist]">
                03
              </div>
              <div className="h-[73px]  flex-col justify-start items-start gap-4 inline-flex">
                <div className="text-stone-300 text-[32px] font-bold urbanist]">
                  You’re ready!
                </div>
                <div className="w-[441px] automation-cards-width text-neutral-400 text-base font-light urbanist">
                  Automation is ready. You’ll save a lot of time - everyday.
                </div>
              </div>
            </div>
          </div>
          <Image
            src={FlowChat}
            data-aos="zoom-in "
            width={490}
            className="flowchat-image "
          />
        </div>
      </div>
    </>
  );
};

export default HowItsWork;
