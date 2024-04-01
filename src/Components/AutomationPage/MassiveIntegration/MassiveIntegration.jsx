import Image from "next/image";
import React from "react";
import Gmail from "../../../../public/Images/gamil.png";
import Zapier from "../../../../public/Images/zapier.png";
import Zoom from "../../../../public/Images/zoom.png";
import Discord from "../../../../public/Images/discord.png";
import Linkdin from "../../../../public/Images/linkdin.png";
import Monkey from "../../../../public/Images/monkey.png";
import Zoho from "../../../../public/Images/zoho.png";
import Nbox from "../../../../public/Images/nbox.png";
import OpenAi from "../../../../public/Images/openai.png";
import Asana from "../../../../public/Images/asana.png";
import Git from "../../../../public/Images/git.png";
import Github from "../../../../public/Images/github.png";
import GoogleMeet from "../../../../public/Images/googlemeet.png";
import Smile from "../../../../public/Images/smile.png";
import Slack from "../../../../public/Images/slack.png";
import Share from "../../../../public/Images/share.png";

const MassiveIntegration = () => {
  return (
    <>
      <div className="px-20 flex flex-col w-full py-20 automation-domain-bg">
        <div className=" justify-start items-center gap-[685px] inline-flex">
          <div className="w-[527px]">
            <span className="text-neutral-400 text-[40px] font-semibold urbanist">
              We cover all
              <br />
            </span>
            <span className="text-teal-500 massive-integration-gradient text-[56px] font-bold urbanist">
              Massive Integrations
            </span>
          </div>
        </div>
        <div className="flex gap-12 flex-row pt-16 ">
          <div className="w-[100px] h-[100px] pt-10">
            <Image src={Zapier} />
          </div>
          <div className="w-[130px] h-[130px] pt-12 ">
            <Image src={Gmail} />
          </div>
          <div className="w-[91px] h-[91px] ">
            <Image src={Discord} />
          </div>
          <div className="w-[80px] h-[80px pt-6 ">
            <Image src={Linkdin} />
          </div>{" "}
          <div className="w-[140px] h-[140px] pt-16 ">
            <Image src={Share} />
          </div>{" "}
          <div className="w-[91px] h-[91px] pt-20 ">
            <Image src={Nbox} />
          </div>
          <div className="w-[136px] h-[136px] ">
            <Image src={Monkey} />
          </div>{" "}
          <div className="w-[91px] h-[91px] pt-16 ">
            <Image src={Zoom} />
          </div>{" "}
          <div className="w-[91px] h-[91px] pt-12 ">
            <Image src={Zoho} />
          </div>
        </div>
        <div className="flex gap-16 mt-4 flex-row pb-16">
          <div className="w-[136px] h-[136px] pt-20 ">
            <Image src={OpenAi} />
          </div>
          <div className="w-[91px] h-[91px] pt-20 ">
            <Image src={Asana} />
          </div>{" "}
          <div className="w-[136px] h-[136px] ">
            <Image src={Github} />
          </div>{" "}
          <div className="w-[110px] h-[110px] pt-20 ">
            <Image src={Git} />
          </div>{" "}
          <div className="w-[91px] h-[91px] pt-20 ">
            <Image src={GoogleMeet} />
          </div>{" "}
          <div className="w-[116px] h-[116px] pt-10 ">
            <Image src={Smile} />
          </div>
          <div className="w-[140px] h-[140px] pt-14 ">
            <Image src={Slack} />
          </div>
        </div>

        <div className="w-[380px] h-[48px]  py-4 mt-20   justify-center  items-center bg-red-600 mx-auto  gap-4 inline-flex">
          <div className="text-white text-xl font-light  urbanist">
            View all Integrations
          </div>
          <div className=" p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.52858 3.52861C5.78892 3.26826 6.21103 3.26826 6.47138 3.52861L10.4714 7.52861C10.7317 7.78896 10.7317 8.21107 10.4714 8.47141L6.47138 12.4714C6.21103 12.7318 5.78892 12.7318 5.52858 12.4714C5.26823 12.2111 5.26823 11.789 5.52858 11.5286L9.05717 8.00001L5.52858 4.47141C5.26823 4.21107 5.26823 3.78896 5.52858 3.52861Z"
                fill="white"
              />
            </svg>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MassiveIntegration;