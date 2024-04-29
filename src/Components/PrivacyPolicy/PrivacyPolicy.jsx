import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import PrivacyPolicyHerosection from "./PrivacyPocilyHerosection/PrivacyPolicyHerosection";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";

const PrivacyPolicy = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <PrivacyPolicyHerosection />
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

export default PrivacyPolicy;
