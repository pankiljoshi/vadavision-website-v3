import React from "react";

const Footer = () => {
  return (
    <>
      <div className="Container w-full my-10 px-20 flex-wrap footer-responsive padding-industies  justify-between items-center inline-flex ">
        <div className="2024VadavisionAllRightsReserved text-neutral-400 text-base font-light font-urbaninst">
          © 2024 - VadaVision! All Rights Reserved.
        </div>
        <div className="Links justify-start items-start footer-links-responsive gap-10 flex">
          <div className="TermsOfService cursor-pointer text-neutral-400 text-base font-light font-urbaninst">
            Terms of Service
          </div>
          <div className="PrivacyPolicy cursor-pointer text-neutral-400 text-base font-light font-urbaninst">
            Privacy Policy
          </div>
          <div className="Cookies cursor-pointer text-neutral-400 text-base font-light font-urbaninst">
            Cookies
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
