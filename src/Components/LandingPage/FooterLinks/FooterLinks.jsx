"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
const FooterLinks = () => {
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
      <div
        data-aos="zoom-in"
        className="Container w-full flex-wrap px-20 border-style pb-16  justify-between items-center inline-flex padding-industies mt-20 "
      >
        <div className="LogoAndText w-72 flex-col justify-start items-start gap-4 inline-flex">
          <div className=" cursor-pointer  gap-2 flex flex-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="31"
              viewBox="0 0 50 31"
              fill="none"
            >
              <path
                id="Union"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.1027 4.40261L40.9164 19.5665L49.9564 19.5577L49.9633 26.5299L37.8388 26.5417L24.0226 11.3748H13.5232C12.2975 13.6061 9.92484 15.1222 7.2044 15.1222C3.23197 15.1222 0 11.8903 0 7.91777C0 3.94524 3.23186 0.713263 7.2044 0.713379C9.9009 0.713379 12.2547 2.20334 13.4896 4.40261H27.1027ZM4.64826 7.91777C4.64826 9.32744 5.79496 10.474 7.20451 10.474C8.61395 10.474 9.76076 9.32733 9.76076 7.91777C9.76076 6.50834 8.61406 5.36153 7.20451 5.36153C5.79496 5.36153 4.64826 6.50834 4.64826 7.91777ZM37.0445 6.00064L34.4741 9.06842L39.2129 14.2697L40.3006 12.9729H49.9641V6.00064H37.0445ZM25.6569 19.5959H21.5207C20.2903 17.3806 17.9272 15.8776 15.2187 15.8776C11.2462 15.8776 8.01434 19.1095 8.01434 23.082C8.01434 27.0546 11.2463 30.2864 15.2187 30.2864C17.9273 30.2864 20.2905 28.7832 21.5207 26.5681H28.9118L31.6831 23.2592L26.945 18.058L25.6569 19.5959ZM15.2186 25.6383C13.8091 25.6383 12.6624 24.4915 12.6624 23.082C12.6624 21.6724 13.8091 20.5258 15.2186 20.5258C16.6282 20.5258 17.7749 21.6724 17.7749 23.082C17.7749 24.4915 16.6282 25.6383 15.2186 25.6383Z"
                fill="url(#paint0_linear_128_428)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_128_428"
                  x1="0"
                  y1="0.713379"
                  x2="52.0709"
                  y2="10.6071"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E12223" />
                  <stop offset="1" stopColor="#FB5F60" />
                </linearGradient>
              </defs>
            </svg>
            <div className="Vadavision cursor-pointer text-white text-3xl font-bold font-prompt leading-10">
              VadaVision!
            </div>
          </div>

          <div className="TitleAndSubtitle flex-col justify-start items-start gap-2 flex">
            <div className="HelpingFoundersStartupsWithTechnologyAndDesign w-72 text-white text-opacity-80 text-base font-light font-urbaninst">
              Helping founders & startups with technology and design.
            </div>
          </div>
        </div>
        <div className="FooterLinks justify-start flex-wrap items-start gap-16 flex">
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="Services text-neutral-400 text-base font-normal font-urbaninst">
              Services
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <div className="MobileAppDevelopment cursor-pointer text-white text-xl font-normal font-urbaninst">
                Mobile App Development
              </div>
              <div className="UiUxDesign cursor-pointer text-white text-xl font-normal font-urbaninst">
                UI/ UX Design
              </div>
              <div className="AiServices cursor-pointer text-white text-xl font-normal font-urbaninst">
                AI Services
              </div>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="Company text-neutral-400 text-base font-normal font-urbaninst">
              Company
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <div className="Blog cursor-pointer text-white text-xl font-normal font-urbaninst">
                Blog
              </div>
              <div className="Careers cursor-pointer text-white text-xl font-normal font-urbaninst">
                Careers
              </div>
              <div className="ContactUs cursor-pointer text-white text-xl font-normal font-urbaninst">
                Contact Us
              </div>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="Resources text-neutral-400 text-base font-medium font-urbaninst">
              Resources
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <div className="Documentation cursor-pointer text-white text-xl font-normal font-urbaninst">
                Documentation
              </div>
              <div className="MediaCoverage cursor-pointer text-white text-xl font-normal font-urbaninst">
                Media Coverage
              </div>
              <div className="Faqs text-white cursor-pointer text-xl font-normal font-urbaninst">
                FAQs
              </div>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="FollowUsOn text-neutral-400 text-base font-light font-urbaninst">
              Follow us on
            </div>
            <div className="ButtonsContainer justify-start items-start gap-2.5 inline-flex">
              <div className="Button w-11 h-11 p-3 bg-gradient-to-b from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
                <div className="Icon cursor-pointer w-5 h-5 relative flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Icon" clipPath="url(#clip0_128_461)">
                      <path
                        id="Vector"
                        d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_128_461">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="Button cursor-pointer w-11 h-11 p-3 bg-gradient-to-b from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
                <div className="Icon w-5 h-5 relative flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Icon" clipPath="url(#clip0_128_464)">
                      <path
                        id="Vector"
                        d="M6.2918 18.1251C13.8371 18.1251 17.9652 11.8724 17.9652 6.45167C17.9652 6.27589 17.9613 6.0962 17.9535 5.92042C18.7566 5.33967 19.4496 4.62033 20 3.7962C19.2521 4.12896 18.458 4.34627 17.6449 4.44074C18.5011 3.92755 19.1421 3.12135 19.4492 2.17159C18.6438 2.64892 17.763 2.98563 16.8445 3.1673C16.2257 2.50976 15.4075 2.07439 14.5164 1.9285C13.6253 1.78261 12.711 1.93433 11.9148 2.3602C11.1186 2.78607 10.4848 3.46238 10.1115 4.28455C9.73825 5.10672 9.64619 6.02897 9.84961 6.9087C8.21874 6.82686 6.62328 6.40321 5.16665 5.6652C3.71002 4.9272 2.42474 3.89132 1.39414 2.62472C0.870333 3.52782 0.710047 4.59649 0.945859 5.61353C1.18167 6.63057 1.79589 7.51966 2.66367 8.10011C2.01219 8.07943 1.37498 7.90402 0.804688 7.58839V7.63917C0.804104 8.58691 1.13175 9.50561 1.73192 10.2391C2.3321 10.9726 3.16777 11.4756 4.09687 11.6626C3.49338 11.8277 2.85999 11.8518 2.2457 11.7329C2.50788 12.548 3.01798 13.2609 3.70481 13.7721C4.39164 14.2833 5.22093 14.5673 6.07695 14.5845C4.62369 15.726 2.82848 16.3452 0.980469 16.3423C0.652739 16.3418 0.325333 16.3217 0 16.2821C1.87738 17.4866 4.06128 18.1263 6.2918 18.1251Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_128_464">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="Button cursor-pointer w-11 h-11 p-3 bg-gradient-to-b from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
                <div className="Icon w-5 h-5 relative flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="Icon" clipPath="url(#clip0_128_467)">
                      <path
                        id="Vector"
                        d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_128_467">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
