import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Features from "./Features/Features";
import Benefits from "./Benefits/Benefits";
import AiBotServises from "./AiBotServises/AiBotServises";
import Herosection from "./Herosection/Herosection";
import DataProtection from "./DataProtection/DataProtection";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import CaseStudies from "./CaseStudies/CaseStudies";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import UseCases from "./UseCases/UseCases";

const AiLanding = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Benefits />
      </div>
      <div>
        <AiBotServises />
      </div>
      <div>
        <UseCases />
      </div>
      <div>
        <DataProtection />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div>
        <CaseStudies />
      </div>
      <div>
        <Testimonials />
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

export default AiLanding;
