"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import PankhilSir from "../../../../public/Images/pankil-sir.png";
import Image from "next/image";
import Neeraj from "../../../../public/Images/neerajsir.png";
import Sahil from "../../../../public/Images/sahil.png";
import Sabahat from "../../../../public/Images/sabahat.png";
import Shivendra from "../../../../public/Images/shivendra.png";
import Hritik from "../../../../public/Images/hritik.png";
import Prashant from "../../../../public/Images/prashant.png";
import Neesha from "../../../../public/Images/neesha.png";

const OurTeam = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 100,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <>
      <div className="w-full px-20 py-20 padding-full-website flex-col justify-start padding-industies our-team-bg items-start gap-14 inline-flex">
        <div
          data-aos="fade-right"
          className="text-emerald-500 our-team-gradient text-[56px] font-bold font-['Urbanist']"
        >
          Our Team
        </div>
        <div
          data-aos="fade-up"
          className=" flex-wrap teams-cards-mobile-width justify-center items-start gap-14 teams-cards-gap inline-flex"
        >
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={PankhilSir} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Pankil Joshi
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Chief Technology Officer
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4 cursor-pointer  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 cursor-pointer p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 cursor-pointer p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Neeraj} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Neeraj Sharma{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Web Developer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Sahil} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Sahil Mangukiya
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Senior MERN Stack Developer
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Sahil is an experienced MERN stack developer with 3+ years of
              expertise. He excels in creating robust applications across
              various industries
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8  cursor-pointer p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 cursor-pointer p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 cursor-pointer p-2 border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Sabahat} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Sabahat Hussain{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Senior UI/ UX Designer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Shivendra} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Shivendra Shukla{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Full-Stack Developer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Shivendra has over 3.5 years of experience in MERN stack
              development with many other js libraries.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Hritik} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Ritik Dwivedi{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Full-Stack Developer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Prashant} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Prashant Ranjan{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Frontend Developer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={PankhilSir} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Sandeep Salaria{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Senior Business Developer{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={PankhilSir} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Minal Thakur{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                Human Resources{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[260px] h-[448px] teams-cards px-4 bg-gradient-to-b from-stone-950 via-neutral-800 to-stone-950 border border-stone-950 border-opacity-0">
            <Image src={Neesha} />
            <div className=" flex-col justify-start mt-4 items-start gap-1 inline-flex">
              <div className="text-neutral-200 text-2xl font-semibold urbanist">
                Neesha{" "}
              </div>
              <div className="text-[#8E8E8E] text-sm font-normal urbanist">
                HR cum BDE - Intern{" "}
              </div>
            </div>

            <div className=" text-stone-300 text-[14px] font-light leading-tight mt-4 urbanist">
              Jonathan has over 8 years of experience in building robust
              tech-applications spanning across multiple verticals.
            </div>
            <div className="justify-start items-start gap-4 mt-8 inline-flex">
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16378)">
                      <path
                        d="M15.996 16L16 15.9993V10.1313C16 7.26065 15.382 5.04932 12.026 5.04932C10.4127 5.04932 9.33003 5.93465 8.88803 6.77398H8.84136V5.31732H5.65936V15.9993H8.9727V10.71C8.9727 9.31732 9.2367 7.97065 10.9614 7.97065C12.6607 7.97065 12.686 9.55998 12.686 10.7993V16H15.996Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.263977 5.31812H3.58131V16.0001H0.263977V5.31812Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M1.92133 0C0.860667 0 0 0.860667 0 1.92133C0 2.982 0.860667 3.86067 1.92133 3.86067C2.982 3.86067 3.84267 2.982 3.84267 1.92133C3.842 0.860667 2.98133 0 1.92133 0Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16378">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16387)">
                      <path
                        d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.79 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.25 5.899 2.122 6.482C1.595 6.472 1.078 6.319 0.64 6.078C0.64 6.088 0.64 6.101 0.64 6.114C0.64 7.708 1.777 9.032 3.268 9.337C3.001 9.41 2.71 9.445 2.408 9.445C2.198 9.445 1.986 9.433 1.787 9.389C2.212 10.688 3.418 11.643 4.852 11.674C3.736 12.547 2.319 13.073 0.785 13.073C0.516 13.073 0.258 13.061 0 13.028C1.453 13.965 3.175 14.5 5.032 14.5C11.068 14.5 14.368 9.5 14.368 5.166C14.368 5.021 14.363 4.881 14.356 4.742C15.007 4.28 15.554 3.703 16 3.039Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16387">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="w-8 h-8 p-2 cursor-pointer border border-zinc-900 justify-center items-center flex">
                <div className="w-4 h-4  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1800_16412)">
                      <path
                        d="M9.33716 9.80279C8.93909 10.0682 8.47672 10.2085 8 10.2085C7.52331 10.2085 7.06094 10.0682 6.66287 9.80279L0.106531 5.43176C0.0701562 5.40751 0.0347187 5.38223 0 5.35623V12.5186C0 13.3398 0.666406 13.9915 1.47291 13.9915H14.5271C15.3482 13.9915 16 13.3251 16 12.5186V5.3562C15.9652 5.38226 15.9297 5.40761 15.8932 5.43189L9.33716 9.80279Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M0.626562 4.6518L7.18291 9.02286C7.43109 9.18833 7.71553 9.27105 7.99997 9.27105C8.28444 9.27105 8.56891 9.1883 8.81709 9.02286L15.3734 4.6518C15.7658 4.39039 16 3.95289 16 3.48071C16 2.6688 15.3395 2.0083 14.5276 2.0083H1.47241C0.660531 2.00833 0 2.66883 0 3.48149C0 3.95289 0.23425 4.39039 0.626562 4.6518Z"
                        fill="#DD4243"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1800_16412">
                        <rect width="16" height="16" fill="white" />
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

export default OurTeam;
