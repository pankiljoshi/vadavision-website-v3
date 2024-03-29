import React from "react";

const MassiveIntegration = () => {
  return (
    <>
      <div className="px-20 flex flex-col w-full py-20">
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

        <div className="w-[380px] h-[48px]  py-4  justify-center  items-center bg-red-600 mx-auto  gap-4 inline-flex">
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
