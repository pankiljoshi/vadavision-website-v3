"use client";
import AiServises from "@/Components/Servises/AiServises";
import React, { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Link from "next/link";

const RedBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="43"
    className="top-0 absolute"
    viewBox="0 0 56 43"
    fill="none"
  >
    <rect width="56" height="5" fill="#DE090A" />
    <rect y="5" width="56" height="38" fill="url(#paint0_linear_73_324)" />
    <defs>
      <linearGradient
        id="paint0_linear_73_324"
        x1="28"
        y1="5"
        x2="28"
        y2="36.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE090A" stopOpacity="0.49" />
        <stop offset="1" stopColor="#DD4243" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handelOpenDropDown = () => {
    setIsDropDownOpen(true);
  };
  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };
  const [showSVG, setShowSVG] = useState(true);

  const handleToggle = () => {
    setShowSVG(!showSVG);
  };
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState("home");
  return (
    <>
      <div className="NavigationWeb w-full px-20 relative  padding-none pt-2 pb-2 bg-white bg-opacity-5 border border-neutral-900 ">
        <div className="responsive-navbar ">
          <div className="flex justify-between items-center h-[60px]">
            <div className="Frame2 cursor-pointer   justify-start items-center gap-2 inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="30"
                viewBox="0 0 50 30"
                fill="none"
              >
                <path
                  id="Union"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M27.1027 3.68923L40.9164 18.8531L49.9564 18.8443L49.9633 25.8165L37.8388 25.8284L24.0226 10.6615H13.5232C12.2975 12.8927 9.92484 14.4088 7.2044 14.4088C3.23197 14.4088 0 11.1769 0 7.2044C0 3.23186 3.23186 -0.000116197 7.2044 3.13326e-09C9.9009 3.13326e-09 12.2547 1.48996 13.4896 3.68923H27.1027ZM4.64826 7.2044C4.64826 8.61406 5.79496 9.76064 7.20451 9.76064C8.61395 9.76064 9.76076 8.61395 9.76076 7.2044C9.76076 5.79496 8.61406 4.64815 7.20451 4.64815C5.79496 4.64815 4.64826 5.79496 4.64826 7.2044ZM37.0445 5.28726L34.4741 8.35504L39.2129 13.5563L40.3006 12.2595H49.9641V5.28726H37.0445ZM25.6569 18.8825H21.5207C20.2903 16.6672 17.9272 15.1642 15.2187 15.1642C11.2462 15.1642 8.01434 18.3961 8.01434 22.3686C8.01434 26.3412 11.2463 29.573 15.2187 29.573C17.9273 29.573 20.2905 28.0698 21.5207 25.8548H28.9118L31.6831 22.5459L26.945 17.3446L25.6569 18.8825ZM15.2186 24.9249C13.8091 24.9249 12.6624 23.7781 12.6624 22.3686C12.6624 20.959 13.8091 19.8124 15.2186 19.8124C16.6282 19.8124 17.7749 20.959 17.7749 22.3686C17.7749 23.7781 16.6282 24.9249 15.2186 24.9249Z"
                  fill="url(#paint0_linear_312_21)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_312_21"
                    x1="0"
                    y1="0"
                    x2="52.0709"
                    y2="9.89367"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E12223" />
                    <stop offset="1" stopColor="#FB5F60" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="Vadavision text-white text-2xl font-bold font-prompt leading-7">
                VadaVision!
              </div>
            </div>
            <div className="">
              <div className="Frame  justify-start items-center gap-8 inline-flex">
                <Link href="/">
                  <div
                    className={`Home text-white cursor-pointer  text-base font-semibold font-urbaninst ${
                      (activeTab === "home" || hoveredTab === "home") &&
                      "active"
                    }`}
                    onMouseEnter={() => setHoveredTab("home")}
                    onMouseLeave={() => setHoveredTab("")}
                    onClick={() => setActiveTab("home")}
                  >
                    {(activeTab === "home" || hoveredTab === "home") && (
                      <RedBar />
                    )}
                    <span
                      className=" font-urbaninst ml-2 font-light "
                      onClick={() => setActiveTab("home")}
                    >
                      Home
                    </span>
                  </div>
                </Link>

                <div
                  className={`About text-neutral-400 cursor-pointer text-base font-medium font-urbaninst ${
                    (activeTab === "about" || hoveredTab === "about") &&
                    "active"
                  }`}
                  onMouseEnter={() => setHoveredTab("about")}
                  onMouseLeave={() => setHoveredTab("")}
                  onClick={() => setActiveTab("about")}
                >
                  {(activeTab === "about" || hoveredTab === "about") && (
                    <RedBar />
                  )}{" "}
                  <span className="ml-1 font-urbanist text-[#8E8E8E] font-light">
                    About
                  </span>
                </div>

                <div className="Frame3 justify-start items-center gap-1 flex">
                  <div
                    className={`Services text-neutral-400   cursor-pointer text-base font-medium font-urbaninst ${
                      activeTab === "services" ? "active" : ""
                    }`}
                    onMouseEnter={() => {
                      setActiveTab("services");
                      handleOpenPopup();
                    }}
                    onClick={() => setActiveTab("services")}
                  >
                    <div
                      onMouseLeave={() => {
                        setActiveTab("home");
                        handleClosePopup();
                      }}
                    >
                      {isPopupOpen && <AiServises />}
                    </div>

                    {activeTab === "services" && <RedBar />}
                    <span className=" text-[#8E8E8E] font-light font-urbanist">
                      Services
                    </span>
                  </div>
                </div>

                <div className="Frame4 justify-start items-center gap-1 flex">
                  <div
                    className={`Product text-neutral-400 cursor-pointer text-base font-medium font-urbaninst ${
                      (activeTab === "product" || hoveredTab === "product") &&
                      "active"
                    }`}
                    onMouseEnter={() => setHoveredTab("product")}
                    onMouseLeave={() => setHoveredTab("")}
                    onClick={() => setActiveTab("product")}
                  >
                    {(activeTab === "product" || hoveredTab === "product") && (
                      <RedBar />
                    )}{" "}
                    <span className=" text-[#8E8E8E] font-light font-urbanist">
                      Product
                    </span>
                  </div>
                  <div className="ArrowDown w-4 h-4 px-1 py-1.5 justify-center items-center flex" />
                </div>
              </div>
            </div>
            <div className="Frame7 right-[11px] top-[16px]  justify-start items-center gap-6 px-10 inline-flex ">
              <div className="Frame6 justify-start items-center gap-2 flex">
                <div className="UnitedKingdom11 w-4 h-4 relative">
                  <div className="Group w-4 h-4 left-[0.28px] top-[0.28px] "></div>
                  <div className="Group w-4 h-4 left-0 top-0 "></div>
                </div>
                <div className="Frame5 justify-start items-center gap-1 flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="mr-1"
                    >
                      <g id="united-kingdom(1) 1" clipPath="url(#clip0_312_31)">
                        <path
                          id="Vector"
                          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                          fill="#F0F0F0"
                        />
                        <g id="Group">
                          <path
                            id="Vector_2"
                            d="M1.65379 3.12943C1.02538 3.94702 0.551541 4.88936 0.275635 5.91308H4.43745L1.65379 3.12943Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_3"
                            d="M15.7245 5.9131C15.4486 4.88941 14.9747 3.94706 14.3463 3.12947L11.5627 5.9131H15.7245Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_4"
                            d="M0.275635 10.087C0.551572 11.1107 1.02542 12.053 1.65379 12.8706L4.43735 10.087H0.275635Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_5"
                            d="M12.8705 1.65378C12.0529 1.02537 11.1106 0.551526 10.0869 0.275589V4.43737L12.8705 1.65378Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_6"
                            d="M3.12939 14.3462C3.94699 14.9746 4.88933 15.4485 5.91302 15.7244V11.5627L3.12939 14.3462Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_7"
                            d="M5.91299 0.275589C4.8893 0.551526 3.94696 1.02537 3.12939 1.65375L5.91299 4.43734V0.275589Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_8"
                            d="M10.0869 15.7244C11.1106 15.4485 12.0529 14.9746 12.8705 14.3462L10.0869 11.5627V15.7244Z"
                            fill="#0052B4"
                          />
                          <path
                            id="Vector_9"
                            d="M11.5627 10.087L14.3463 12.8706C14.9747 12.0531 15.4486 11.1107 15.7245 10.087H11.5627Z"
                            fill="#0052B4"
                          />
                        </g>
                        <g id="Group_2">
                          <path
                            id="Vector_10"
                            d="M15.9323 6.95653H9.04353H9.0435V0.0677188C8.70191 0.02325 8.35366 0 8 0C7.64628 0 7.29809 0.02325 6.95653 0.0677188V6.95647V6.9565H0.0677188C0.02325 7.29809 0 7.64634 0 8C0 8.35372 0.02325 8.70191 0.0677188 9.04347H6.95647H6.9565V15.9323C7.29809 15.9768 7.64628 16 8 16C8.35366 16 8.70191 15.9768 9.04347 15.9323V9.04353V9.0435H15.9323C15.9768 8.70191 16 8.35372 16 8C16 7.64634 15.9768 7.29809 15.9323 6.95653Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_11"
                            d="M10.0869 10.087L13.6568 13.6569C13.821 13.4928 13.9776 13.3212 14.127 13.1433L11.0707 10.087H10.0869V10.087Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_12"
                            d="M5.91292 10.087H5.91286L2.34302 13.6568C2.50714 13.821 2.67874 13.9777 2.85661 14.1271L5.91292 11.0707V10.087Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_13"
                            d="M5.91293 5.91309V5.91303L2.34305 2.34312C2.17887 2.50725 2.02224 2.67884 1.8728 2.85672L4.92915 5.91306L5.91293 5.91309Z"
                            fill="#D80027"
                          />
                          <path
                            id="Vector_14"
                            d="M10.0869 5.9131L13.6568 2.34316C13.4927 2.17897 13.3211 2.02235 13.1432 1.87294L10.0869 4.92928V5.9131Z"
                            fill="#D80027"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_312_31">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="Eng text-[16px] text-[#8E8E8E] cursor-pointer font-light font-urbanist">
                    ENG
                  </div>
                  <div className="ArrowDown w-4 h-4 px-1  cursor-pointer justify-center items-center flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                    >
                      <g id="16">
                        <path
                          id="Vector"
                          d="M4.99996 5.66667C4.91222 5.66718 4.82525 5.65036 4.74402 5.61719C4.6628 5.58401 4.58892 5.53513 4.52663 5.47334L0.526628 1.47334C0.401092 1.3478 0.330566 1.17754 0.330566 1.00001C0.330566 0.822472 0.401092 0.652209 0.526628 0.526673C0.652163 0.401138 0.822426 0.330612 0.999961 0.330612C1.1775 0.330612 1.34776 0.401138 1.47329 0.526673L4.99996 4.06001L8.52663 0.53334C8.65416 0.424123 8.81821 0.367052 8.986 0.373532C9.15378 0.380013 9.31294 0.449568 9.43167 0.568298C9.5504 0.687028 9.61995 0.846187 9.62643 1.01397C9.63292 1.18176 9.57585 1.34581 9.46663 1.47334L5.46663 5.47334C5.34245 5.5965 5.17485 5.66594 4.99996 5.66667Z"
                          fill="#8E8E8E"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger-icon  w-full relative  cursor-pointer hidden">
          <div className="Frame2 cursor-pointer pb-4  justify-start items-center gap-2 inline-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="17"
              viewBox="0 0 28 17"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.6634 2.496L22.1371 10.7002L27.0281 10.6954L27.0318 14.4676L20.4721 14.474L12.997 6.2682H7.3165C6.65335 7.47537 5.36967 8.29564 3.89782 8.29564C1.74861 8.29564 0 6.54709 0 4.39782C0 2.24854 1.74854 0.499937 3.89782 0.5C5.35672 0.5 6.63021 1.30612 7.29834 2.496H14.6634ZM2.51487 4.39782C2.51487 5.16049 3.13527 5.78083 3.89788 5.78083C4.66043 5.78083 5.2809 5.16043 5.2809 4.39782C5.2809 3.63527 4.6605 3.0148 3.89788 3.0148C3.13527 3.0148 2.51487 3.63527 2.51487 4.39782ZM20.0423 3.36068L18.6517 5.02045L21.2155 7.83451L21.804 7.13288H27.0322V3.36068H20.0423ZM13.8812 10.7161H11.6434C10.9777 9.51759 9.69922 8.70443 8.23385 8.70443C6.08457 8.70443 4.33603 10.453 4.33603 12.6022C4.33603 14.7515 6.08463 16.5001 8.23385 16.5001C9.69929 16.5001 10.9778 15.6868 11.6434 14.4883H15.6423L17.1416 12.6981L14.5781 9.88406L13.8812 10.7161ZM8.23378 13.9853C7.47117 13.9853 6.85077 13.3648 6.85077 12.6022C6.85077 11.8396 7.47117 11.2192 8.23378 11.2192C8.9964 11.2192 9.6168 11.8396 9.6168 12.6022C9.6168 13.3648 8.9964 13.9853 8.23378 13.9853Z"
                fill="url(#paint0_linear_581_454)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_581_454"
                  x1="0"
                  y1="0.5"
                  x2="28.1721"
                  y2="5.85281"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E12223" />
                  <stop offset="1" stopColor="#FB5F60" />
                </linearGradient>
              </defs>
            </svg>
            <div className="Vadavision text-white text-2xl font-bold font-prompt leading-7">
              VadaVision!
            </div>
          </div>
          <div className="float-end mt-2 px-4" onClick={handleToggle}>
            {showSVG ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                onClick={handelOpenDropDown}
                viewBox="0 0 28 28"
                fill="none"
              >
                <g id="menu(1) 1">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 7.00001C3.5 6.35568 4.02234 5.83334 4.66667 5.83334H23.3333C23.9777 5.83334 24.5 6.35568 24.5 7.00001C24.5 7.64434 23.9777 8.16668 23.3333 8.16668H4.66667C4.02234 8.16668 3.5 7.64434 3.5 7.00001ZM3.5 14C3.5 13.3557 4.02234 12.8333 4.66667 12.8333H16.3333C16.9777 12.8333 17.5 13.3557 17.5 14C17.5 14.6444 16.9777 15.1667 16.3333 15.1667H4.66667C4.02234 15.1667 3.5 14.6444 3.5 14ZM3.5 21C3.5 20.3557 4.02234 19.8333 4.66667 19.8333H10.5C11.1443 19.8333 11.6667 20.3557 11.6667 21C11.6667 21.6444 11.1443 22.1667 10.5 22.1667H4.66667C4.02234 22.1667 3.5 21.6444 3.5 21Z"
                    fill="white"
                  />
                </g>
              </svg>
            ) : (
              <span className="text-white" onClick={closeDropDown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g id="02 User">
                    <path
                      id="Vector"
                      d="M1.37535 21.6667C1.1693 21.6667 0.96787 21.6056 0.796534 21.4912C0.625198 21.3767 0.491656 21.214 0.412799 21.0237C0.333942 20.8333 0.313314 20.6238 0.353522 20.4217C0.393731 20.2197 0.492971 20.034 0.638689 19.8884L19.8886 0.638479C20.0839 0.443104 20.3489 0.333344 20.6252 0.333344C20.9015 0.333344 21.1665 0.443104 21.3619 0.638479C21.5573 0.833854 21.667 1.09884 21.667 1.37514C21.667 1.65144 21.5573 1.91643 21.3619 2.1118L2.11201 21.3617C2.01536 21.4585 1.90053 21.5353 1.77411 21.5877C1.64769 21.64 1.51218 21.6669 1.37535 21.6667Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M20.6257 21.6667C20.4888 21.6669 20.3533 21.64 20.2269 21.5877C20.1005 21.5353 19.9856 21.4585 19.889 21.3617L0.63912 2.1118C0.443745 1.91643 0.333984 1.65144 0.333984 1.37514C0.333984 1.09884 0.443745 0.833854 0.63912 0.638479C0.834495 0.443104 1.09948 0.333344 1.37578 0.333344C1.65208 0.333344 1.91707 0.443104 2.11244 0.638479L21.3623 19.8884C21.508 20.034 21.6073 20.2197 21.6475 20.4217C21.6877 20.6238 21.6671 20.8333 21.5882 21.0237C21.5094 21.214 21.3758 21.3767 21.2045 21.4912C21.0331 21.6056 20.8317 21.6667 20.6257 21.6667Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
            )}
          </div>
          <div className="top-10 absolute  w-full z-50">
            {isDropDownOpen && <ResponsiveNavbar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
