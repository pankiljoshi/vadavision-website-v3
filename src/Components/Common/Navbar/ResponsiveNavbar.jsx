"use client";
import React, { useState } from "react";

const RedBar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="79"
    height="39"
    viewBox="0 0 79 39"
    fill="none"
  >
    <rect
      y="39"
      width="39"
      height="4"
      transform="rotate(-90 0 39)"
      fill="#DE090A"
    />
    <rect
      x="4"
      y="39"
      width="39"
      height="74.2326"
      transform="rotate(-90 4 39)"
      fill="url(#paint0_linear_702_13862)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_702_13862"
        x1="23.5"
        y1="39"
        x2="23.5"
        y2="100.535"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE090A" stopOpacity="0.49" />
        <stop offset="1" stopColor="#DD4243" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);
const ResponsiveNavbar = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <div className="Hero w-full relative bg-gradient-to-br from-black to-zinc-950 flex-col padding-none justify-start items-start inline-flex">
        <div className="MenuItems flex-col justify-start items-start  inline-flex">
          <div className="Frame1000003590 w-full  py-3  border-b border-stone-900 justify-start items-center inline-flex">
            <div
              className={`Home text-white cursor-pointer  text-[18px] font-light font-urbaninst ${
                activeTab === "home" ? "active" : ""
              }`}
              onClick={() => setActiveTab("home")}
            >
              <div className="flex relative">
                {activeTab === "home" && <RedBar className="top-2 absolute " />}
                <span className="top-2 absolute right-0"> Home</span>
              </div>
            </div>
          </div>
          <div className="Frame1000003591 w-full pl-10 py-3 border-b border-stone-900 justify-start items-center inline-flex">
            <div className="About text-stone-300 text-[18px] font-light font-urbaninst">
              About
            </div>
          </div>
          <div className="Frame1000003592 py-3 pl-10 border-b border-stone-900 justify-center items-end gap-64 inline-flex">
            <div className="Services text-stone-300 text-[18px] font-lightfont-urbaninst">
              Services
            </div>
            <div className="ArrowDown w-8 h-8 px-1 py-1.5 justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 10 6"
                fill="none"
              >
                <g id="16">
                  <path
                    id="Vector"
                    d="M4.99996 5.66667C4.91222 5.66717 4.82525 5.65036 4.74402 5.61718C4.6628 5.584 4.58892 5.53512 4.52663 5.47333L0.526628 1.47333C0.401092 1.3478 0.330566 1.17753 0.330566 0.999999C0.330566 0.822465 0.401092 0.652201 0.526628 0.526666C0.652163 0.40113 0.822426 0.330605 0.999961 0.330605C1.1775 0.330605 1.34776 0.40113 1.47329 0.526666L4.99996 4.06L8.52663 0.533332C8.65416 0.424115 8.81821 0.367044 8.986 0.373525C9.15378 0.380005 9.31294 0.449561 9.43167 0.56829C9.5504 0.68702 9.61995 0.846179 9.62643 1.01396C9.63292 1.18175 9.57585 1.3458 9.46663 1.47333L5.46663 5.47333C5.34245 5.59649 5.17485 5.66593 4.99996 5.66667Z"
                    fill="#CACACA"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="Frame1000003593 py-3 pl-10 border-b border-stone-900 justify-center items-end gap-64 inline-flex">
            <div className="Products text-stone-300 text-[18px] font-light font-urbaninst">
              Products
            </div>
            <div className="ArrowDown w-8 h-8 px-1 py-1.5 justify-center items-center inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="10"
                viewBox="0 0 10 6"
                fill="none"
              >
                <g id="16">
                  <path
                    id="Vector"
                    d="M4.99996 5.66667C4.91222 5.66717 4.82525 5.65036 4.74402 5.61718C4.6628 5.584 4.58892 5.53512 4.52663 5.47333L0.526628 1.47333C0.401092 1.3478 0.330566 1.17753 0.330566 0.999999C0.330566 0.822465 0.401092 0.652201 0.526628 0.526666C0.652163 0.40113 0.822426 0.330605 0.999961 0.330605C1.1775 0.330605 1.34776 0.40113 1.47329 0.526666L4.99996 4.06L8.52663 0.533332C8.65416 0.424115 8.81821 0.367044 8.986 0.373525C9.15378 0.380005 9.31294 0.449561 9.43167 0.56829C9.5504 0.68702 9.61995 0.846179 9.62643 1.01396C9.63292 1.18175 9.57585 1.3458 9.46663 1.47333L5.46663 5.47333C5.34245 5.59649 5.17485 5.66593 4.99996 5.66667Z"
                    fill="#CACACA"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveNavbar;
