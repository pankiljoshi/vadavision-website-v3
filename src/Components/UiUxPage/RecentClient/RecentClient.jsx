import Image from "next/image";
import React from "react";
import Otgc from "../../../../public/Images/otgc.png";
import Rotation360 from "../../../../public/Images/360rotation.png";
const RecentClient = () => {
  return (
    <>
      <div className="w-full py-20 px-20  justify-center items-start gap-56 inline-flex">
        <div className="">
          <span className="text-neutral-400 text-[40px] font-semibold font-['Urbanist']">
            Our most
            <br />
          </span>
          <span className="text-yellow-300 text-[56px] recent-client-gradient font-bold font-['Urbanist']">
            Recent Clients
          </span>
        </div>
        <div className="self-stretch justify-start items-start gap-14 inline-flex">
          <div className="w-[187px] h-32 pl-6 pr-[23.58px] py-5 bg-neutral-900  justify-center items-center flex">
            <Image src={Rotation360} />
          </div>
          <div className="w-[187px] h-32 pl-[29px] pr-[28.59px] py-5 bg-neutral-900  justify-center items-center flex">
            <Image src={Otgc} />
          </div>
          <div className="w-[187px] h-32 px-4 py-[43px] bg-neutral-900  justify-center items-center flex">
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
