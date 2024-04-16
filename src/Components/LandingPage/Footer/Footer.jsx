import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Container w-full my-10 px-20 flex-wrap padding-full-website footer-responsive padding-industies  justify-between items-center inline-flex ">
        <div className=" text-[#8E8E8E] text-[16px] font-medium urbanist TermsOfService">
          © 2024 - VadaVision! All Rights Reserved.
        </div>
        <div className="Links justify-start items-start footer-links-responsive gap-10 flex">
          <div className="TermsOfService cursor-pointer text-[#8E8E8E] text-[16px] font-normal urbanist">
            Terms of Service
          </div>
          <div className="TermsOfService cursor-pointer text-[#8E8E8E] text-[16px] font-normal urbanist">
            Privacy Policy
          </div>
          <div className="TermsOfService cursor-pointer text-[#8E8E8E] text-[16px] font-normal urbanist">
            Cookies
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
