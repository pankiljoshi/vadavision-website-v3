import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Error from "../../../public/Images/errorImage.png";
import Image from "next/image";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <>
      <div className="h-[100vh]">
        <Navbar />

        <div className="flex flex-col justify-center error-bg bg-no-repeat h-[90%]">
          <div className="w-full flex flex-row  px-20 gap-44 justify-center   items-center  ">
            <div className="w-[50%] flex-col justify-start items-center gap-6 inline-flex">
              <div className="text-red-500 text-8xl font-bold urbanist">
                ERROR 404!
              </div>
              <div className="w-[396px] text-white text-[56px] font-bold urbanist">
                Page not found!
              </div>
              <div className="w-[415px] text-center text-neutral-400 text-xl font-medium urbanist">
                The page you’re looking for couldn’t be found or, it might have
                been removed.{" "}
              </div>
              <Link href="/">
                <div className="h-12 px-6 py-4 bg-red-500 cursor-pointer justify-center items-center gap-4 inline-flex">
                  <div className="text-white text-base font-medium urbanist">
                    Back to Home
                  </div>
                  <div className="w-6 h-6 p-2 bg-white bg-opacity-10 border border-white border-opacity-10 justify-center items-center gap-2.5 flex">
                    <div className="w-4 h-4 ">
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
                          d="M5.52864 3.52859C5.78899 3.26824 6.2111 3.26824 6.47145 3.52859L10.4714 7.52859C10.7318 7.78894 10.7318 8.21105 10.4714 8.4714L6.47145 12.4714C6.2111 12.7318 5.78899 12.7318 5.52864 12.4714C5.26829 12.2111 5.26829 11.7889 5.52864 11.5286L9.05723 8L5.52864 4.4714C5.26829 4.21105 5.26829 3.78894 5.52864 3.52859Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-[50%]">
              <Image src={Error} width={450} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
