"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@vadavision.ca";
  };
  return (
    <>
      <div className="Container w-full my-10 px-20 flex-wrap padding-full-website footer-responsive padding-industies  justify-between items-center inline-flex ">
        <div className=" text-[#8E8E8E] text-[16px] font-medium urbanist TermsOfService">
          © 2024 - VadaVision! All Rights Reserved.
        </div>
        <div className="Links justify-start items-start footer-links-responsive gap-10 flex">
          <div
            href="mailto:info@vadavision.ca"
            className="TermsOfService cursor-pointer text-[#8E8E8E] text-[16px] font-normal urbanist"
            onClick={handleEmailClick}
          >
            info@vadavision.ca
          </div>
          <a href="tel:+916280007001">
            <div className="TermsOfService cursor-pointer   text-[#8E8E8E] text-[16px] font-normal urbanist">
              +91 62 8000 7001
            </div>
          </a>
          <Link href="/cookies">
            <div className="TermsOfService cursor-pointer text-[#8E8E8E] text-[16px] font-normal urbanist">
              Cookies
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
