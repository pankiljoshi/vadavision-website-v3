"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Wireframing from "../../../../public/Images/wireframing.png";
const HowItsWork = () => {
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
      <div className="w-full   px-20  padding-industies bg-gradient-to-r from-zinc-950 to-zinc-950">
        <div data-aos="fade-right" className=" ">
          <span className="text-neutral-400 text-[40px] font-change-1 font-semibold urbanist">
            It’s so simple - <br />
          </span>
          <span className="text-cyan-600 hows-work-gradient font-change-2 leading-tight text-[56px] font-bold urbanist">
            How it Works
          </span>
        </div>
        <div className=" flex-col justify-start wireframing-content items-start gap-14 inline-flex">
          <div
            data-aos="zoom-in"
            className="justify-start items-center pt-16 inline-flex"
          >
            <Image src={Wireframing} />
          </div>
          <div
            data-aos="fade-right"
            className="flex-col justify-start ui-ux-howitswork-cards items-start gap-[49px] flex"
          >
            <div className="justify-start ui-ux-howitswork-cards howitswork-cards items-start gap-12 inline-flex">
              <div className="w-[50%] pl-4 py-8 bg-gradient-to-bl howitswork-cards-width background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2078_15195)">
                        <path
                          d="M9.66009 3.8916C6.20353 3.8916 3.39136 6.70377 3.39136 10.1603C3.39136 13.6169 6.20353 16.4291 9.66009 16.4291C13.1167 16.4291 15.9288 13.6169 15.9288 10.1603C15.9288 6.70373 13.1167 3.8916 9.66009 3.8916ZM13.4806 10.1603C13.4806 8.05373 11.7667 6.33984 9.66009 6.33984V4.91404C12.5529 4.91404 14.9064 7.26754 14.9064 10.1603H13.4806Z"
                          fill="#DD4243"
                        />
                        <path
                          d="M23.2797 20.3019L18.9063 15.9285L17.6715 17.1633L16.9732 16.465C18.435 14.7717 19.3203 12.5674 19.3203 10.1601C19.3203 4.83355 14.9867 0.5 9.66014 0.5C4.33355 0.5 0 4.83355 0 10.1601C0 15.4867 4.33355 19.8202 9.66009 19.8202C12.0674 19.8202 14.2717 18.935 15.965 17.4731L16.6633 18.1715L15.4285 19.4063L19.8019 23.7796C20.2664 24.2441 20.8839 24.5 21.5408 24.5C22.1977 24.5 22.8152 24.2442 23.2797 23.7797C23.7442 23.3152 24 22.6977 24 22.0408C24 21.3839 23.7442 20.7663 23.2797 20.3019ZM9.66009 17.8547C5.41734 17.8547 1.96556 14.4029 1.96556 10.1601C1.96556 5.91734 5.41734 2.46561 9.66009 2.46561C13.9028 2.46561 17.3546 5.91739 17.3546 10.1601C17.3546 14.4029 13.9029 17.8547 9.66009 17.8547Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2078_15195">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Discovery
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We meet with you to learn about your business, your goals, and
                  your target audience.
                </div>
              </div>
              <div className="w-[50%] howitswork-cards-width pl-4 py-8 bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2078_15221)">
                        <path
                          d="M21.0133 17.1982L23.9999 14.2118L21.0133 11.2251L21.4945 10.7439C22.3271 9.91137 22.3271 8.55676 21.4947 7.72418C21.0913 7.32098 20.555 7.09887 19.9846 7.09887C19.4144 7.09887 18.8781 7.32098 18.4749 7.72418L17.9937 8.20538L15.0071 5.21875L14.1258 6.10022V7.49328C15.6847 7.8648 16.8476 9.2694 16.8476 10.9404C16.8476 12.6116 15.6847 14.0162 14.1258 14.3876V18.7072H11.5403L11.0249 19.2226L15.0071 23.2046L17.9937 20.218L18.4084 20.6329C19.241 21.4655 20.5956 21.4655 21.4282 20.6329C22.2608 19.8003 22.2608 18.4457 21.4282 17.6131L21.0133 17.1982Z"
                          fill="#DD4243"
                        />
                        <path
                          d="M12.7179 17.2993V13.0757H13.3044C14.482 13.0757 15.4398 12.1178 15.4398 10.9403C15.4398 9.76292 14.482 8.8051 13.3044 8.8051H12.7179V4.58142H8.49425V3.901C8.49425 2.72345 7.53642 1.76562 6.35887 1.76562C5.18151 1.76562 4.22369 2.72345 4.22369 3.901V4.58142H0V8.8051H0.586669C1.61975 8.8051 2.48364 9.54247 2.67993 10.5186C2.76507 10.6376 2.81579 10.783 2.81579 10.9403C2.81579 11.0976 2.76507 11.243 2.67993 11.3622C2.48364 12.3381 1.61975 13.0757 0.586669 13.0757H0V17.2993H4.22369V16.6187C4.22369 15.4414 5.18151 14.4836 6.35887 14.4836C7.53642 14.4836 8.49425 15.4414 8.49425 16.6187V17.2993H12.7179Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2078_15221">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Strategy
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We develop a customized marketing strategy that is based on
                  your unique needs and goals.
                </div>
              </div>
            </div>
            <div className="justify-start howitswork-cards  ui-ux-howitswork-cards items-start gap-12 inline-flex">
              <div className="w-[50%] howitswork-cards-width ui-ux-howitswork-cards pl-4 py-8 bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_2078_15233)">
                        <path
                          d="M23.2724 10.4297H21.0688C20.8602 9.56744 20.5324 8.75171 20.1031 8.00147L21.8326 6.27193C22.1167 5.98778 22.1167 5.52712 21.8326 5.24297L19.5659 2.97623C19.2817 2.69208 18.8211 2.69208 18.5369 2.97623L16.8544 4.65879C16.1026 4.19949 15.2808 3.84396 14.4088 3.611V1.23587C14.4088 0.834048 14.083 0.508301 13.6812 0.508301H10.4755C10.0737 0.508301 9.74797 0.834048 9.74797 1.23587V3.56753C8.84736 3.78985 7.99842 4.14277 7.22204 4.6052L5.7232 3.10636C5.43905 2.82221 4.9784 2.82221 4.69425 3.10636L2.42751 5.3731C2.14336 5.65725 2.14336 6.11791 2.42751 6.40206L3.93637 7.91093C3.48101 8.68613 3.13395 9.5324 2.91688 10.4297H0.727568C0.325747 10.4297 0 10.7554 0 11.1573V14.363C0 14.7648 0.325747 15.0905 0.727568 15.0905H2.98232C3.21541 15.947 3.56687 16.7547 4.01882 17.4944L2.39504 19.1182C2.11089 19.4023 2.11089 19.863 2.39504 20.1472L4.66178 22.4139C4.94593 22.698 5.40659 22.698 5.69074 22.4139L7.3615 20.7431C8.07215 21.1498 8.84132 21.4659 9.65335 21.6755V23.7645C9.65335 24.1663 9.97909 24.492 10.3809 24.492H13.5866C13.9884 24.492 14.3141 24.1663 14.3141 23.7645V21.68C15.1679 21.4617 15.9741 21.1252 16.7153 20.6898L18.4556 22.4301C18.7398 22.7143 19.2004 22.7143 19.4846 22.4301L21.7513 20.1634C22.0355 19.8793 22.0355 19.4186 21.7513 19.1345L20.021 17.4041C20.4469 16.6891 20.7798 15.9124 21.0034 15.0905H23.2725C23.6743 15.0905 24 14.7648 24 14.363V11.1573C24 10.7554 23.6743 10.4297 23.2724 10.4297ZM5.62685 10.3959C5.40575 10.0473 5.50908 9.58552 5.85764 9.36447C6.184 9.15747 6.60938 9.2349 6.84379 9.53146C7.8889 7.74028 9.83313 6.57871 11.9765 6.57871C14.5652 6.57871 16.8366 8.23325 17.6287 10.6958C17.7551 11.0887 17.5391 11.5097 17.1461 11.636C16.753 11.7625 16.3322 11.5463 16.2059 11.1534C15.6133 9.31116 13.9137 8.07338 11.9765 8.07338C10.4693 8.07338 9.09427 8.84109 8.28506 10.0455C8.62476 10.0389 8.93678 10.2656 9.02359 10.6092C9.12467 11.0094 8.88226 11.4157 8.48208 11.5168L7.15838 11.8512C6.86697 11.9258 6.51677 11.8088 6.34425 11.5269L5.62685 10.3959ZM18.1423 15.6358C17.816 15.8428 17.3906 15.7654 17.1562 15.4688C16.111 17.26 14.1668 18.4216 12.0234 18.4216C9.43478 18.4216 7.16335 16.7671 6.37123 14.3045C6.24485 13.9116 6.46089 13.4906 6.85381 13.3643C7.24668 13.2377 7.66771 13.454 7.79409 13.8468C8.38671 15.6891 10.0863 16.9269 12.0234 16.9269C13.5305 16.9269 14.9054 16.1593 15.7147 14.9552C15.7099 14.9552 15.7052 14.9556 15.7004 14.9556C15.3662 14.9556 15.062 14.7299 14.9764 14.3911C14.8753 13.9909 15.1177 13.5846 15.5179 13.4835L16.8416 13.1492C17.1319 13.0762 17.4935 13.1918 17.6628 13.4846L18.3731 14.6044C18.5942 14.953 18.4909 15.4147 18.1423 15.6358Z"
                          fill="#DD4243"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2078_15233">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Execution
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We execute our strategy using the latest digital marketing
                  tools and techniques.
                </div>
              </div>
              <div className="w-[50%] howitswork-cards-width pl-4 py-8 bg-gradient-to-bl background-gradient  border-gradient-bottom flex-col justify-center items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="w-6 h-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11.2968 2.14795C8.58642 2.30353 6.04467 3.35676 4.01587 5.16487L7.15349 8.3025C8.33428 7.31948 9.76799 6.72543 11.2968 6.58575V2.14795Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M6.15883 9.29676L3.02125 6.15918C1.2116 8.18741 0.157051 10.7294 0.000488281 13.4404H4.43847C4.5791 11.9113 5.17441 10.4774 6.15883 9.29676Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M19.5614 13.4404H23.9994C23.8428 10.7294 22.7883 8.18741 20.9786 6.15918L17.8411 9.29676C18.8255 10.4774 19.4208 11.9113 19.5614 13.4404Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M19.5605 14.8462C19.462 15.9291 19.1529 16.8324 18.7874 17.557C19.144 18.1069 19.4412 18.5716 19.6376 18.8802C20.1725 19.7208 20.0541 20.7997 19.3496 21.5042C19.1786 21.6753 18.9832 21.8131 18.7715 21.9149L19.5022 22.6457C19.6397 22.7833 19.82 22.852 20.0003 22.852C20.1805 22.852 20.3608 22.7833 20.4983 22.6457C22.6041 20.5401 23.832 17.7926 24 14.8462H19.5605Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M4.43953 14.8462H0C0.168047 17.7926 1.39594 20.5401 3.5017 22.6458C3.63923 22.7833 3.81947 22.8521 3.9997 22.8521C4.17994 22.8521 4.36022 22.7833 4.49775 22.6458L6.63113 20.5123C6.90614 20.2372 6.90614 19.7912 6.63113 19.5162C6.07439 18.9594 4.67203 17.4007 4.43953 14.8462Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M19.9841 5.16487C17.9553 3.35671 15.4135 2.30353 12.7031 2.14795V6.58575C14.2319 6.72543 15.6657 7.31948 16.8465 8.3025L19.9841 5.16487Z"
                        fill="#DD4243"
                      />
                      <path
                        d="M13.5623 12.5928C12.7009 11.7314 11.2992 11.7314 10.4378 12.5928C9.57639 13.4543 9.57639 14.8559 10.4378 15.7173C11.5261 16.8056 16.8743 20.2204 17.4805 20.6062C17.7586 20.7832 18.1222 20.7432 18.3552 20.5102C18.5883 20.2772 18.6282 19.9136 18.4512 19.6355C18.0654 19.0293 14.6506 13.681 13.5623 12.5928Z"
                        fill="#DD4243"
                      />
                    </svg>{" "}
                  </div>
                  <div className="w-[292px] text-white text-2xl font-semibold urbanist">
                    Measurement
                  </div>
                </div>
                <div className="self-stretch text-neutral-400 text-xl font-light urbanist">
                  We track the results of our campaigns so that we can make
                  adjustments as needed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItsWork;
