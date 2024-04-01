import React from "react";

const ResourceAugmentationHerosection = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-l from-black to-zinc-950">
        <div className=" flex-col justify-start items-start gap-2 inline-flex">
          <div className="justify-start items-center gap-3 inline-flex">
            <img
              className="w-[27.37px] h-[26px]"
              src="https://via.placeholder.com/27x26"
            />
            <div className="text-red-500 text-base font-medium font-['Prompt'] uppercase leading-relaxed tracking-[6.40px]">
              PUSH YOUR BRAND POTENTIAL
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[844px] text-neutral-100 text-[64px] font-bold font-['Prompt']">
                Unlock hand-picked talent for your business
              </div>
              <div className="w-[844px] text-neutral-400 text-xl font-medium font-['Urbanist']">
                Get the top notch talent for your business. We provide
                hand-picked resources that will save cost related to hirings.
              </div>
            </div>
            <div className="justify-start items-start gap-10 inline-flex">
              <div className="w-[197px] px-10 py-4 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
                <div className="text-white text-xl font-medium font-['Urbanist']">
                  Explore More
                </div>
              </div>
              <div className="w-[257px] px-10 py-4 bg-red-600 justify-center items-center gap-4 flex">
                <div className="text-white text-xl font-medium font-['Urbanist']">
                  Schedule a Call
                </div>
                <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-[670px] h-[635px]  blur-[200px]"
          src="https://via.placeholder.com/670x635"
        />
        <img
          className="w-[465px] h-[484px] "
          src="https://via.placeholder.com/465x484"
        />
      </div>
    </>
  );
};

export default ResourceAugmentationHerosection;
