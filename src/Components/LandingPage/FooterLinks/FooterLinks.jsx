"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const FooterLinks = () => {
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
      <div
        data-aos="zoom-in"
        className="Container  w-full flex-wrap px-20 border-style pb-16 padding-full-website  justify-between items-center inline-flex padding-industies mt-20 "
      >
        <div className="LogoAndText w-72 flex-col   justify-start items-start gap-4 inline-flex">
          <Link href="/">
            <div className=" responsive-footer-link-logo cursor-pointer  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="31"
                viewBox="0 0 50 31"
                fill="none"
                className="footer-logo"
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
              <div className="Vadavision footer-logo-text cursor-pointer mt-3 text-white text-[32px] font-bold prompt leading-10">
                VadaVision!
              </div>
            </div>
          </Link>

          <div className="TitleAndSubtitle flex-col justify-start items-start gap-2 flex">
            <div className=" w-72 text-white text-opacity-80 text-[16px] leading-tight font-normal urbanist">
              Helping founders & startups with technology and design.
            </div>
          </div>
        </div>
        <div className="border-style-hidden mt-10 hidden "></div>
        <div className="FooterLinks responsive-footer justify-start flex-wrap items-start gap-16 flex">
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="Services footer-heading-text text-neutral-400 text-base font-normal urbanist">
              Services
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <Link href="/app-development">
                {" "}
                <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                  Mobile App Development
                </div>
              </Link>
              <Link href="/ui-ux">
                {" "}
                <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                  UI/ UX Design
                </div>
              </Link>
              <Link href="/ai-bot-landing">
                {" "}
                <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                  AI Services
                </div>
              </Link>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="footer-heading-text text-neutral-400 text-base font-normal urbanist">
              Company
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                Blog
              </div>
              <Link href="/careers">
                <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                  Careers
                </div>
              </Link>
              <Link href="/contact-us">
                <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className="Resources footer-heading-text text-neutral-400 text-base font-medium urbanist">
              Resources
            </div>
            <div className="Links flex-col justify-start items-start gap-4 flex">
              <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                Documentation
              </div>
              <div className="footer-link-font cursor-pointer text-white text-[19px] font-normal urbanist">
                Media Coverage
              </div>
              <div className="footer-link-font text-white cursor-pointer text-[19px] font-normal urbanist">
                FAQs
              </div>
            </div>
          </div>
          <div className="LinksColumn flex-col justify-start items-start gap-4 inline-flex">
            <div className=" footer-heading-text text-neutral-400 text-base font-light urbanist">
              Follow us on
            </div>
            <div className="ButtonsContainer  justify-start items-start gap-2.5 inline-flex">
              <Link
                target="_blank"
                href={
                  "https://www.facebook.com/profile.php?id=100090359760736&mibextid=ZbWKwL"
                }
              >
                <div className="Button w-11 h-11 p-3 bg-gradient-to-b social-media-hover-facebook from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
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
              </Link>
              <Link
                target="_blank"
                href={
                  "https://www.instagram.com/vadavision?igsh=ZDhjaHZmajFhaGVm"
                }
              >
                <div className="Button cursor-pointer social-media-hover-instagram  w-11 h-11 p-3 bg-gradient-to-b from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
                  <div className="Icon w-5 h-5 relative flex-col justify-start items-start flex">
                    <AiFillInstagram color="white" size={20} />
                  </div>
                </div>
              </Link>

              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A82602036&keywords=vadavision!%20consultancy%20inc.&origin=RICH_QUERY_SUGGESTION&position=9&searchId=7aaa9361-861c-44e4-a50d-58b34828f598&sid=sGe&spellCorrectionEnabled=false"
                }
              >
                {" "}
                <div className="Button cursor-pointer social-media-hover-linkdin w-11 h-11 p-3 bg-gradient-to-b from-neutral-900 via-zinc-800 to-stone-950 border border-stone-950 border-opacity-0 justify-center items-center flex">
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
