import Image from "next/image";
import React from "react";
import LinkdinAutomation from "../../../../public/Images/linkdin-automation.png";
import Mailchimp from "../../../../public/Images/Mailchimp.png";
import GoogleSheet from "../../../../public/Images/googlesheet.png";
import DailyOperation from "../../../../public/Images/dailyoperation.png";
import Notionx from "../../../../public/Images/notionx.png";
import Trello from "../../../../public/Images/trello.png";
const AutomationTemplate = () => {
  return (
    <>
      <div className="w-full px-20  bg-gradient-to-r from-zinc-950 to-zinc-950 automation-domain-bg ">
        <div className="w-[604px] ">
          <span className="text-neutral-400 text-[40px] font-semibold  urbanist">
            We cover bunch of customisable
            <br />
          </span>
          <span className="text-red-400 text-[56px] automation-templated-gradient font-bold urbanist">
            Automation Templates
          </span>
        </div>
        <div className="w-full justify-center items-center gap-6 pt-10   inline-flex">
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-20 backdrop-blur-[80px] justify-center items-center gap-2.5 flex">
            <div className="w-[117px] text-zinc-100 text-xl font-semibold urbanist">
              All Template
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Marketing
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Sales
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Operations
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r  cursor-pointer from-stone-900 to-neutral-950 border border-white border-opacity-10 backdrop-blur-[80px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-400 text-xl font-medium urbanist">
              Support
            </div>
          </div>
        </div>
        <div className=" flex-col justify-start items-start gap-10 pt-16 inline-flex">
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={LinkdinAutomation} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[286px] text-zinc-100 pt-4 text-xl font-normal urbanist">
                  LinkedIn Marketing Automation
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6 cursor-pointer  bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={GoogleSheet} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className=" text-zinc-100 pt-4 text-xl font-normal urbanist">
                  Google Sheets x Sales Mango Integration{" "}
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6 cursor-pointer  bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={DailyOperation} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className=" text-zinc-100 pt-4 text-xl font-normal urbanist">
                  Automating Daily Operations{" "}
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6 cursor-pointer  bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-6 inline-flex">
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={Notionx} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className=" text-zinc-100 pt-4 text-xl font-normal urbanist">
                  Notion x Google Sheet Automation{" "}
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6  cursor-pointer bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={Trello} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className=" text-zinc-100 pt-4 text-xl font-normal urbanist">
                  Trello Card Automation via Google Sheets{" "}
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6 cursor-pointer  bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[405px] h-[455px] px-5  pt-6 bg-gradient-to-b from-zinc-900 to-neutral-900 custom-border-style">
              <Image src={Mailchimp} />
              <div className="  flex-col justify-start items-start gap-2 inline-flex">
                <div className=" text-zinc-100 pt-4 text-xl font-normal urbanist">
                  Mailchimp Marketing Automation{" "}
                </div>
                <div className="w-[379px] text-neutral-400 text-base font-light leading-tight urbanist">
                  Use this pre-defined template set to automate your linkedin
                  marketing. You can also customise it.
                </div>
              </div>
              <div className="px-4 py-2.5 mt-6 cursor-pointer  bg-white bg-opacity-5 border border-white border-opacity-25 flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-center gap-2 inline-flex">
                  <div className="text-white text-sm font-normal urbanist">
                    Use Template
                  </div>
                  <div className="w-4 h-4  origin-top-left  flex-col justify-start items-start inline-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M3.04029 14.4024L12.6667 4.77604L12.6667 10.1667C12.6667 10.3509 12.8157 10.5 13 10.5L13.6667 10.5C13.8509 10.5 14 10.3509 14 10.1667L14 2.83334C14 2.64909 13.8509 2.5 13.6667 2.5L6.3333 2.5C6.14908 2.5 5.99998 2.64909 5.99998 2.83334L5.99998 3.5C5.99998 3.68425 6.14908 3.83335 6.33333 3.83335L11.724 3.83335L2.0976 13.4597C2.03379 13.5235 2.00129 13.6068 2.00004 13.6904C1.99873 13.7774 2.03129 13.8647 2.0976 13.9311L2.56891 14.4024C2.6317 14.4652 2.71332 14.4977 2.79563 14.4999C2.88388 14.5023 2.97295 14.4697 3.04029 14.4024Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutomationTemplate;
