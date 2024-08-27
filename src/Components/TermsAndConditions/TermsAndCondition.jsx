import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import TermsAndConditionsHerosection from "./TermsAndConditionsHerosection/TermsAndConditionsHerosection";

const TermsAndCondition = () => {
  return (
    <>
      <div>
        <TermsAndConditionsHerosection />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <FooterLinks />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default TermsAndCondition;
