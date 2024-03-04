"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";

const Speciality = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="unique-gradient-background">
        <div className=" w-full Unique bg-cover   px-20 py-10 bg-right-top  pt-10 bg-no-repeat  padding-industies ">
          <div className="">
            <div data-aos="fade-down" className="title-padding   mt-10    ">
              <span className="text-neutral-400 text-4xl font-medium font-change-1 urbanist">
                What makes
                <br />
              </span>
              <span className="text-pink-600 text-color-change text-6xl font-bold leading-normal font-change-2 urbanist mt-4">
                VadaVision! unique
              </span>
            </div>
            <div
              data-aos="fade-up"
              className=" justify-between items-start  w-full flex-wrap gap-11  inline-flex  pt-10"
            >
              <div className="unique-cards px-4 py-6 w-[390px] bg-no-repeat  border-gradient-bottom border-gradient-top border-gradient-right border-t border-b border-r border-zinc-800  background-gradient  flex-col justify-start items-start gap-6 inline-flex">
                <div className="Frame1171281468  self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="HighQuality1 w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g id="high-quality 1" clipPath="url(#clip0_177_535)">
                        <path
                          id="Vector"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.4213 1.36588L14.8503 2.43557C15.2412 2.72812 15.6526 2.87784 16.14 2.90498L17.9223 3.00412C18.9895 3.06346 19.8562 3.79073 20.1 4.83145L20.5071 6.56943C20.6185 7.04474 20.8374 7.42387 21.1933 7.75795L22.4949 8.97956C23.2743 9.71099 23.4707 10.8253 22.9886 11.7792L22.1833 13.3722C21.9631 13.8079 21.887 14.239 21.945 14.7238L22.1568 16.4962C22.2837 17.5575 21.718 18.5373 20.7355 18.9581L19.0945 19.6609C18.6458 19.8531 18.3104 20.1344 18.0432 20.543L17.0662 22.0369C16.4812 22.9314 15.418 23.3184 14.3949 23.0092L12.6862 22.4928C12.2189 22.3516 11.7812 22.3516 11.3138 22.4928L9.60513 23.0092C8.58203 23.3184 7.51882 22.9314 6.93382 22.0369L5.9568 20.543C5.68956 20.1344 5.35422 19.8531 4.90549 19.6609L3.26449 18.958C2.28199 18.5372 1.71625 17.5574 1.8431 16.4961L2.05497 14.7237C2.11291 14.2389 2.03688 13.8078 1.81666 13.3721L1.01139 11.7791C0.529236 10.8252 0.72569 9.71095 1.50503 8.97946L2.80661 7.75785C3.16258 7.42378 3.38144 7.04465 3.49277 6.56934L3.89992 4.83135C4.14367 3.79068 5.01044 3.06342 6.07764 3.00403L7.85988 2.90488C8.34733 2.87779 8.75871 2.72803 9.14955 2.43548L10.5786 1.36579C11.4342 0.725385 12.5657 0.725385 13.4213 1.36588ZM11.0883 12.6121L9.53753 11.0613C9.13558 10.6593 8.4836 10.6593 8.08169 11.0613C7.67974 11.4632 7.67974 12.1152 8.08169 12.5171L10.3627 14.7981C10.7646 15.2 11.4166 15.2 11.8185 14.7981C13.1934 13.4232 14.5526 12.0329 15.9212 10.6517C16.3202 10.2489 16.3189 9.59906 15.9167 9.19907C15.5144 8.79899 14.8627 8.80012 14.4632 9.20357L11.0883 12.6121ZM11.9999 4.33368C9.883 4.33368 7.96642 5.19178 6.57911 6.57909C5.1918 7.96645 4.33371 9.88298 4.33371 11.9999C4.33371 14.1168 5.1918 16.0334 6.57911 17.4207C7.96642 18.808 9.883 19.6661 11.9999 19.6661C14.1168 19.6661 16.0334 18.808 17.4207 17.4207C18.8081 16.0334 19.6661 14.1168 19.6661 11.9999C19.6661 9.88298 18.8081 7.9664 17.4207 6.57909C16.0334 5.19178 14.1168 4.33368 11.9999 4.33368ZM16.8904 7.10939C15.6389 5.85782 13.9098 5.08368 11.9999 5.08368C10.09 5.08368 8.36097 5.85782 7.10941 7.10939C5.85785 8.36095 5.0837 10.09 5.0837 11.9999C5.0837 13.9098 5.85785 15.6389 7.10941 16.8904C8.36097 18.142 10.09 18.9161 11.9999 18.9161C13.9098 18.9161 15.6389 18.142 16.8904 16.8905C18.142 15.6389 18.9161 13.9098 18.9161 11.9999C18.9161 10.09 18.142 8.36095 16.8904 7.10939Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_177_535">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Quality text-white text-xl font-normal urbanist">
                    Quality
                  </div>
                </div>
                <div className=" self-stretch text-neutral-400 leading-tight text-base font-light urbanist">
                  What makes us different is our strong commitment to quality.
                  We use our expertise and innovative solutions to enhance your
                  business uniquely.
                </div>
              </div>
              <div className="unique-cards px-5 py-4 w-[390px] bg-no-repeat  border-gradient-bottom border-gradient-top border-gradient-right border-t border-b border-r border-zinc-800  background-gradient  flex-col justify-start items-start gap-6 inline-flex">
                <div className="Frame1171281468  self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="HighQuality1 w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11.1273 21.1273H10.5818V20.0728H6.29091V21.1273H5.7091C5.52728 21.1273 5.34546 21.3091 5.34546 21.4909C5.34546 21.7091 5.52728 21.8546 5.7091 21.8546H6.29091V22.2182C6.29091 23.0182 6.94546 23.6364 7.7091 23.6364H9.12728C9.92728 23.6364 10.5455 22.9818 10.5455 22.2182V21.8546H11.0909C11.3091 21.8546 11.4545 21.7091 11.4545 21.4909C11.4909 21.3091 11.3455 21.1273 11.1273 21.1273Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M12.9455 9.09086L9.81827 8.18177C8.32736 9.52722 5.81827 8.10904 6.43645 6.03631C6.72736 5.16359 7.52736 4.5454 8.43645 4.5454C9.20009 4.5454 9.89099 4.94541 10.2546 5.63631C10.3274 5.78177 10.4001 5.92722 10.4364 6.07268L13.491 6.98177C14.2546 6.2545 15.0546 6.47268 15.2728 6.43631C15.091 3.59995 12.5455 0.763586 9.23645 0.39995C7.23645 0.181768 5.30918 0.79995 3.85463 2.10904C2.40008 3.41813 1.56372 5.30904 1.56372 7.23631C1.56372 9.4545 2.65463 11.5636 4.43645 12.8363C5.01827 13.2727 5.52736 14.2909 5.7819 15.2727H8.10918V10.4727H7.41827C7.23645 10.4727 7.05463 10.3272 7.05463 10.109C7.05463 9.92722 7.23645 9.74541 7.41827 9.74541H9.52736C9.70918 9.74541 9.89099 9.92722 9.89099 10.109C9.89099 10.3272 9.70918 10.4727 9.52736 10.4727H8.83645V15.309H11.1637C11.4183 14.3272 11.9274 13.2727 12.5455 12.8363C13.3819 12.2181 14.0728 11.4545 14.5455 10.5454C13.7819 10.4 13.1637 9.81813 12.9455 9.09086Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M22.0729 7.52716C21.5275 6.98171 20.6911 6.98171 20.1457 7.52716C19.9638 7.70898 19.8547 7.92716 19.782 8.14534H16.182C16.1457 8.03625 16.1093 7.92716 16.0366 7.81807L18.2547 4.90898C19.1638 5.34534 20.2184 4.6908 20.2184 3.70898C20.2184 2.94534 19.6002 2.36353 18.8729 2.36353C18.1093 2.36353 17.5275 2.98171 17.5275 3.70898C17.5275 3.96353 17.6002 4.21807 17.7457 4.43625L15.5275 7.34534C15.3457 7.23625 15.1275 7.19989 14.9093 7.16353C14.4002 7.16353 13.9638 7.41807 13.7457 7.81807L9.78202 6.61807C9.78202 6.39989 9.74565 6.14534 9.63656 5.96353C9.05474 4.90898 7.49111 5.05443 7.16383 6.21807C6.72747 7.70898 8.76383 8.65443 9.6002 7.34534L13.6002 8.54534C13.6366 9.52716 14.6547 10.1817 15.5638 9.74534L17.782 12.6181C17.6729 12.7999 17.6002 13.0544 17.6002 13.2726C17.6002 15.0544 20.2911 15.0544 20.2911 13.2726C20.2911 12.5453 19.6729 11.9272 18.9457 11.9272C18.7275 11.9272 18.4729 11.9999 18.2911 12.109L16.1093 9.23625C16.182 9.12716 16.2184 9.01807 16.2547 8.87262H19.8547C19.9275 9.0908 20.0366 9.27262 20.182 9.41807C20.6911 9.96353 21.5638 9.96353 22.1093 9.41807C22.6184 8.90898 22.6184 8.07262 22.0729 7.52716Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M4.4729 18.9818C4.4729 19.2 4.61835 19.3455 4.83654 19.3455H12.0365C12.2547 19.3455 12.4002 19.2 12.4002 18.9818V18.0728H4.4729V18.9818Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M12.0365 16.0364H4.83654C4.61835 16.0364 4.4729 16.1818 4.4729 16.4V17.3091H12.4002V16.4C12.4002 16.2182 12.2184 16.0364 12.0365 16.0364Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                  <div className="Quality text-white text-xl font-normal urbanist">
                    Research & Development
                  </div>
                </div>
                <div className=" self-stretch text-neutral-400 leading-tight text-base font-light urbanist">
                  Our proficiency in research and development drives inventive
                  business solutions, making us unique with unmatched service
                  excellence & strategic capabilities.
                </div>
              </div>{" "}
              <div className="unique-cards px-4 py-4 w-[390px] bg-no-repeat  border-gradient-bottom border-gradient-top border-gradient-right border-t border-b border-r border-zinc-800  background-gradient  flex-col justify-start items-start gap-6 inline-flex">
                <div className="Frame1171281468  self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="HighQuality1 w-6 h-6 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.4794 1.21875C18.083 2.62411 20.1106 3.45267 22.2395 3.57267C22.5899 8.18259 20.3765 12.0392 16.4794 14.5265C12.5823 12.0392 10.369 8.18259 10.7193 3.57267C12.8482 3.45267 14.8758 2.62411 16.4794 1.21875ZM7.62643 21.0949L8.7864 20.4126L14.2432 21.3147L21.7139 18.1482C22.1608 17.8185 22.4189 17.1205 22.1915 16.4276C19.6396 17.1665 17.0878 17.9054 14.5359 18.6442L11.4855 17.8897C11.2849 17.8403 11.1623 17.6377 11.2116 17.4371C11.2609 17.2365 11.4636 17.1138 11.6642 17.1631L14.5224 17.8702L15.1776 17.6805C15.4478 17.1169 15.376 16.3667 14.6623 15.9856L8.94165 14.4855C8.94165 14.4855 7.61697 15.2983 5.15429 16.5028L7.62643 21.0949ZM4.06895 16.0656L7.3922 22.2388L6.38457 22.7812L1.72412 17.3279L4.06895 16.0656ZM15.8965 8.58033L14.0942 6.77695L13.0333 7.83731L15.8711 10.6763L20.9144 5.87119L19.8797 4.78523L15.8965 8.58033Z"
                        fill="#DD4243"
                      />
                    </svg>
                  </div>
                  <div className="Quality text-white text-xl font-normal urbanist">
                    Accountability
                  </div>
                </div>
                <div className=" self-stretch text-neutral-400 leading-tight text-base font-light urbanist">
                  We stand out for our accountability, emphasizing trust and
                  reliability in each service. We aim to enhance your business
                  experience, making it exceptional and unique.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Speciality;
