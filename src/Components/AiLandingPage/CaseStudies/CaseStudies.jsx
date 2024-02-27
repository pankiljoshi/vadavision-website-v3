import Image from "next/image";
import React from "react";
import Women from "../../../../public/Images/caseStudyWomen.png";
const CaseStudies = () => {
  return (
    <>
      <div className="w-full px-20 py-10 bg-black flex-col justify-center padding-industies items-start gap-14 inline-flex">
        <div className="w-[380px]">
          <span className="text-neutral-400 text-[40px] case-study-heading1 font-semibold font-urbaninst">
            Some of our
            <br />
          </span>
          <span className="text-pink-600 text-[56px] case-study-heading2 gradient-case-study font-bold font-urbaninst">
            Case Studies
          </span>
        </div>
        <div className="w-full relative  flex-col justify-start items-start flex">
          <div className="justify-start responsive-casestudies  gap-16 inline-flex">
            <Image src={Women} width={540} alt="" />
            <div className="flex-col  justify-start responsive-heading-casestidies items-start gap-[72px] gap-responsive-casestudies-main inline-flex">
              <div className="flex-col justify-start items-start gap-14 gap-responsive-casestudies flex">
                <div className="flex-col justify-start responsive-heading-casestidies items-start gap-4 flex">
                  <div className="text-white text-xl font-light font-urbaninst">
                    Support AI Bot
                  </div>
                  <div className=" text-red-500 w-[340px] text-case-studies text-[40px] font-normal leading-tight font-urbaninst">
                    Espress Boutique CX Support AI Bot
                  </div>
                </div>
                <div className="flex-col w-[380px] justify-start items-start gap-6 flex">
                  <div className="justify-start items-start gap-12 inline-flex">
                    <div className="w-[105px] text-neutral-400 text-xl font-light font-urbaninst">
                      Industry
                    </div>
                    <div className="text-white text-xl font-light font-urbaninst">
                      Fashion & Apparel
                    </div>
                  </div>
                  <div className="justify-start items-start gap-12 inline-flex">
                    <div className="text-neutral-400 text-xl font-light font-urbaninst">
                      Live Version
                    </div>
                    <div className="text-white text-xl font-light font-urbaninst">
                      www.express.fashion
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-base font-case-study font-light font-urbaninst">
                  Read Case Study
                </div>
                <div className="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.2636 18.2364C6.61508 18.5879 7.18492 18.5879 7.5364 18.2364L16.2 9.57279V16.4C16.2 16.8971 16.6029 17.3 17.1 17.3C17.5971 17.3 18 16.8971 18 16.4V7.4C18 6.90294 17.5971 6.5 17.1 6.5H8.1C7.60294 6.5 7.2 6.90294 7.2 7.4C7.2 7.89706 7.60294 8.3 8.1 8.3H14.9272L6.2636 16.9636C5.91213 17.3151 5.91213 17.8849 6.2636 18.2364Z"
                      fill="#DD4243"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="justify-start responsive-casestudies1 gap-responsive-casestudies1-main gap-32 mt-20 inline-flex">
            <div className="flex-col  justify-start items-start gap-[72px] gap-responsive-casestudies-main  inline-flex">
              <div className="flex-col justify-start w-[380px] items-start gap-responsive-casestudies gap-14 flex">
                <div className="flex-col justify-start responsive-heading-casestidies items-start gap-4 flex">
                  <div className="text-white text-xl font-light font-urbaninst">
                    Support AI Bot
                  </div>
                  <div className=" text-red-500 text-[40px] text-case-studies font-medium leading-tight font-urbaninst">
                    Espress Boutique CX Support AI Bot
                  </div>
                </div>
                <div className="flex-col justify-start items-start gap-6 flex">
                  <div className="justify-start items-start gap-12 inline-flex">
                    <div className="w-[105px] text-neutral-400 text-xl font-light font-urbaninst">
                      Industry
                    </div>
                    <div className="text-white text-xl font-light font-urbaninst">
                      Fashion & Apparel
                    </div>
                  </div>
                  <div className="justify-start items-start gap-12 inline-flex">
                    <div className="text-neutral-400 text-xl font-light">
                      Live Version
                    </div>
                    <div className="text-white text-xl font-light font-urbaninst">
                      www.express.fashion
                    </div>
                  </div>
                </div>
              </div>
              <div className=" gap-2.5 inline-flex">
                <div className="text-white text-base font-case-study font-light font-urbaninst">
                  Read Case Study
                </div>
                <div className="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.2636 18.2364C6.61508 18.5879 7.18492 18.5879 7.5364 18.2364L16.2 9.57279V16.4C16.2 16.8971 16.6029 17.3 17.1 17.3C17.5971 17.3 18 16.8971 18 16.4V7.4C18 6.90294 17.5971 6.5 17.1 6.5H8.1C7.60294 6.5 7.2 6.90294 7.2 7.4C7.2 7.89706 7.60294 8.3 8.1 8.3H14.9272L6.2636 16.9636C5.91213 17.3151 5.91213 17.8849 6.2636 18.2364Z"
                      fill="#DD4243"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <Image src={Women} width={550} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
