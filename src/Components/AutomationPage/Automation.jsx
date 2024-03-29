import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import AutomationHerosection from "./AutomationHerosection/AutomationHerosection";
import AutomationDomain from "./AutomationDomain/AutomationDomain";
import HowItsWork from "./HowItsWork/HowItsWork";
import AutomationTemplate from "./AutomationTemplate/AutomationTemplate";
import OurPromises from "./OurPromises/OurPromises";
import MassiveIntegration from "./MassiveIntegration/MassiveIntegration";

const Automation = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <AutomationHerosection />
      </div>
      <div>
        <AutomationDomain />
      </div>
      <div>
        <HowItsWork />
      </div>
      <div>
        <AutomationTemplate />
      </div>
      <div>
        <MassiveIntegration />
      </div>
      <div>
        <OurPromises />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
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

export default Automation;
