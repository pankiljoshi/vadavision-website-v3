import Image from "next/image";
import React from "react";
import TeamWork from "../../../../public/Images/team-work.png";
const HowItsWork = () => {
  return (
    <>
      <div className="w-full   px-20  bg-gradient-to-r from-zinc-950 to-zinc-950">
        <div className=" ">
          <span className="text-neutral-400 text-[40px] font-semibold urbanist">
            It’s so simple - <br />
          </span>
          <span className="text-cyan-600 hows-work-gradient leading-tight text-[56px] font-bold urbanist">
            How it Works
          </span>
        </div>
        <div className=" flex-col justify-start items-start gap-14 inline-flex">
          <div className="justify-start items-center pt-16 inline-flex">
            <Image src={TeamWork} />
          </div>
          <div className="flex-col justify-start items-start gap-[49px] flex">
            <div className="justify-start items-start gap-12 inline-flex">
              <div className="w-[50%] pl-4 h-[157px] bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6  bg-red-500 rounded-full">
                    <span className="text-white pl-2">1</span>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Discovery
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We meet with you to learn about your business, your goals, and
                  your target audience.
                </div>
              </div>
              <div className="w-[50%] pl-4 h-[157px] bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6  bg-red-500 rounded-full">
                    <span className="text-white pl-2">2</span>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Handpicked resources
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We develop a customized marketing strategy that is based on
                  your unique needs and goals.
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-12 inline-flex">
              <div className="w-[50%] pl-4 h-[157px] bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6  bg-red-500 rounded-full">
                    <span className="text-white pl-2">3</span>
                  </div>
                  <div className=" text-white text-2xl font-semibold urbanist">
                    Select your favorite resource
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We execute our strategy using the latest digital marketing
                  tools and techniques.
                </div>
              </div>
              <div className="w-[50%] pl-4 h-[157px] bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6  bg-red-500 rounded-full">
                    <span className="text-white pl-2">4</span>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Onboard resource
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We track the results of our campaigns so that we can make
                  adjustments as needed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItsWork;
