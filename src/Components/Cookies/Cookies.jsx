import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import CookiesHerosection from "./CookiesHersection/CookiesHerosection";

const Cookies = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <CookiesHerosection />
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

export default Cookies;
