"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Otgc from "../../../../public/Images/otgc.png";
import Rotation360 from "../../../../public/Images/360rotation.png";
const RecentClient = () => {
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
      <div className="w-full py-20 px-20 padding-industies responsive-recent-client  justify-start items-start gap-60 inline-flex">
        <div data-aos="fade-right" className=" leading-tight">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold font-['Urbanist']">
            Our most
            <br />
          </span>
          <span className="text-yellow-300 text-[56px] font-change-2 recent-client-gradient font-bold font-['Urbanist']">
            Recent Clients
          </span>
        </div>
        <div className="self-stretch justify-start items-start gap-14 recent-client-cards inline-flex">
          <div
            data-aos="fade-right"
            className="w-[187px] h-32 pl-6 pr-[23.58px] py-5 bg-neutral-900 rotation360  justify-center items-center flex"
          >
            <Image src={Rotation360} width={190} />
          </div>
          <div
            data-aos="fade-down"
            className="w-[187px] h-32 pl-[29px] pr-[28.59px] py-5 bg-neutral-900  rotation360 justify-center items-center flex"
          >
            <Image src={Otgc} width={150} />
          </div>
          <div
            data-aos="fade-left"
            className="w-[187px] h-32 px-4 py-[43px] bg-neutral-900  justify-center  rotation360 items-center flex"
          >
            <div className="grow shrink basis-0 self-stretch pl-1.5 pr-[5px] pt-2.5 pb-[11px] border-2 border-white justify-center items-center inline-flex">
              <div className="text-white text-[11px] font-semibold font-['Poppins']">
                STANDARD INSIGHTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentClient;
