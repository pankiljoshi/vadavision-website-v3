import Image from "next/image";
import React from "react";
import AiBotRobot from "../../../../public/Images/aiBotRobot.png";

const Herosection = () => {
  return (
    <div className="w-full flex flex-row px-20 py-10  background-herosection gap-32 bg-gradient-to-br from-black to-zinc-950">
      <div className="  flex-col justify-start items-start gap-2 mt-20 pt-10 inline-flex">
        <div className="justify-start items-center gap-3 inline-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.84211 0C6.84211 0 7.14412 2.81891 8.3205 3.99529C9.49688 5.17167 12.3158 5.47368 12.3158 5.47368C12.3158 5.47368 9.49688 5.7757 8.3205 6.95208C7.14412 8.12846 6.84211 10.9474 6.84211 10.9474C6.84211 10.9474 6.54009 8.12846 5.36371 6.95208C4.18733 5.7757 1.36842 5.47368 1.36842 5.47368C1.36842 5.47368 4.18733 5.17167 5.36371 3.99529C6.54009 2.81891 6.84211 0 6.84211 0ZM19.1579 4.10526C19.1579 4.10526 19.6109 8.33363 21.3755 10.0982C23.1401 11.8628 27.3684 12.3158 27.3684 12.3158C27.3684 12.3158 23.1401 12.7688 21.3755 14.5334C19.6109 16.2979 19.1579 20.5263 19.1579 20.5263C19.1579 20.5263 18.7049 16.2979 16.9403 14.5334C15.1757 12.7688 10.9474 12.3158 10.9474 12.3158C10.9474 12.3158 15.1757 11.8628 16.9403 10.0982C18.7049 8.33363 19.1579 4.10526 19.1579 4.10526ZM8.69009 17.3099C7.21962 15.8394 6.84211 12.3158 6.84211 12.3158C6.84211 12.3158 6.46459 15.8394 4.99412 17.3099C3.52364 18.7804 0 19.1579 0 19.1579C0 19.1579 3.52364 19.5354 4.99412 21.0059C6.46459 22.4764 6.84211 26 6.84211 26C6.84211 26 7.21962 22.4764 8.69009 21.0059C10.1606 19.5354 13.6842 19.1579 13.6842 19.1579C13.6842 19.1579 10.1606 18.7804 8.69009 17.3099Z"
              fill="url(#paint0_linear_783_5986)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_783_5986"
                x1="0"
                y1="0"
                x2="29.1438"
                y2="3.45003"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF2B48" />
                <stop offset="1" stopColor="#FF7C2B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-red-500 text-base herosection-gradient font-medium font-prompt uppercase leading-relaxed tracking-[6.40px]">
            Upgrade your ai game
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-10 flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[690px] text-neutral-100 text-[64px] text-color-gradient font-bold font-prompt">
              Unleash the power of AI Chatbot
            </div>
            <div className="w-[671px] text-neutral-400 text-[20px] font-light font-urbaninst">
              Leverage advanced natural language processing (NLP) algorithms,
              machine learning techniques, & sophisticated dialogue management
              systems and create intelligent virtual assistants capable of
              understanding and responding to user queries in a human-like
              manner.
            </div>
          </div>
          <div className="justify-start items-start gap-10 inline-flex">
            <div className="w-[227px] px-10 py-3 bg-white hover:bg-[#FFFFFF3D] bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-4 flex">
              <div className="text-white text-xl font-light font-urbaninst">
                Explore More
              </div>
            </div>
            <div className="w-[287px] px-10 py-3 bg-[#DD4243] hover:bg-[#D53033] justify-center items-center gap-4 flex">
              <div className="text-white text-xl font-light font-urbaninst">
                Schedule a Call
              </div>
              <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                <div className="w-4 h-4 relative">
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
                      d="M5.52859 3.52851C5.78894 3.26816 6.21105 3.26816 6.4714 3.52851L10.4714 7.52851C10.7317 7.78886 10.7317 8.21097 10.4714 8.47132L6.4714 12.4713C6.21105 12.7317 5.78894 12.7317 5.52859 12.4713C5.26824 12.211 5.26824 11.7889 5.52859 11.5285L9.05719 7.99992L5.52859 4.47132C5.26824 4.21097 5.26824 3.78886 5.52859 3.52851Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image src={AiBotRobot} alt="" width={600} />
    </div>
  );
};

export default Herosection;
