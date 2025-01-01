import Image from "next/image";
import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
});

const LeadDesigner = () => {
  return (
    <>
      <div
        className={`w-full py-16 sm:py-20 px-6 sm:px-8 lg:px-20 xl:px-40 lead-designer-bg bg-[#111111] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 ${lato.className}`}
      >
        <div className="w-full lg:w-[38%] pb-20 sm:pb-20 text-center lg:text-left">
          <div className=" text-[#8E8E8E] text-[28px] sm:text-[32px] lg:text-[30px] leading-tight font-bold">
            Let’s know about our
            <br />
            <span className=" text-[40px] font-bold dark:text-black text-white">
              Lead Designer
            </span>
          </div>
          <div className="text-[#FAFAFA] dark:text-black text-[21px] font-medium pt-14">
            👋 Hi, I’m Sabahat, lead UI/UX Designer at{" "}
            <span className="text-[#DD4243]">Vadavision</span>. My journey as a
            designer began after meeting multiple business owners and witnessing
            the miss in user experience in their products & services. This got
            me curious to explore this field and help the businesses scale up
            their revenue and hold on their users in their website or app for a
            longer duration.
          </div>
          {/* <div className="text-[#FAFAFA] dark:text-black text-[21px] font-semibold pt-8">
            At Vadavision, I’ve helped redesign over 100 websites, resulting in
            happier users, fewer drop-offs, and a{" "}
            <span className="text-[#DD4243]">75% increase in sales</span> for
            our clients. It’s incredible how even small design tweaks can lead
            to big changes.
          </div> */}
          {/* <div className="text-[#FAFAFA] dark:text-black text-[21px] font-semibold pt-8">
            Every day your website is confusing, you’re losing potential
            customers. With just a few changes, we can transform your site into
            a powerful tool that engages visitors and keeps them coming back.
          </div> */}
        </div>

        <div className="w-full lg:w-[40%] flex items-center justify-center">
          <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[360px] h-auto">
            {/* <video
              className="w-full h-[500px] rounded-lg"
              width="360"
              height="500"
              controls
              autoPlay
              muted
              loop
            >
              <source src="videos/designer-vedio.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <Image src={"/Images/exampleVedio.png"} className=" cursor-pointer" width={360} height={506} alt="vedio"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeadDesigner;
