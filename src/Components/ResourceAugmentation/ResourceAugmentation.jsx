import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import MileStone from "../LandingPage/MileStone/MileStone";
import Industries from "../LandingPage/Industries/Industries";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import Review from "../LandingPage/Review/Review";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import ResourceServises from "./ResourceServises/ResourceServises";
import BenefitResourceAugmentation from "./BenefitResourceAugmentation/BenefitResourceAugmentation";
import HowItsWork from "./HowItsWork/HowItsWork";
import ResourceAugmentationHerosection from "./ResourceAugmentationHerosection/ResourceAugmentationHerosection";

const ResourceAugmentation = () => {
  return (
    <>
      <div>
        <ResourceAugmentationHerosection />
      </div>
      <div>
        <MileStone />
      </div>
      <div>
        <ResourceServises />
      </div>
      <div>
        <BenefitResourceAugmentation />
      </div>
      <div>
        <Industries />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div>
        <HowItsWork />
      </div>
      <div>
        <Review />
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

export default ResourceAugmentation;
