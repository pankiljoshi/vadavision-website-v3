/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Office from "../../../../public/Images/office.png";
import Image from "next/image";

const AboutUsHerosection = () => {
  return (
    <>
      <div className="w-full px-20 py-20 about-us-bg about-us-padding  bg-gradient-to-br from-black to-zinc-950">
        <div className="  justify-start gap-about-us-herosection about-us-herosection  items-start gap-32 inline-flex">
          <div className="flex-col w-[50%] min-w-[625px] about-us-leftside justify-start items-start gap-6 inline-flex">
            <div className="LeftLabel">
              <div className=" p-4 startupStudio-gradient rounded-full  flex-col justify-start items-start gap-2.5 flex">
                <div className=" text-emerald-400 text-sm font-light urbanist">
                  🚀{" "}
                  <span className="StartupStudio urbanist">STARTUP STUDIO</span>
                </div>
              </div>
            </div>
            <div className=" text-neutral-100 text-color-gradient about-us-heading  leading-tight text-[64px] font-bold prompt">
              We’re here to make things simpler
            </div>
            <div className="self-stretch text-[#8E8E8E] text-xl herosection-paragraph  leading-tight font-normal urbanist ">
              At Vadavision, we chose the word'Vada'to represent trust,
              reliability, and integrity in our services. It signifies the
              strong foundation of trust we build with our
              clients.'Vision'embodies innovation, creativity, and
              forward-thinking.
            </div>
          </div>
          <div className=" w-[50%] min-w-[350px]  about-us-image image-bg py-10">
            <Image
              src={Office}
              width={580}
              height={580}
              className="about-us-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsHerosection;
