import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import MileStone from "../LandingPage/MileStone/MileStone";
import RecentClient from "../UiUxPage/RecentClient/RecentClient";
import Industries from "../LandingPage/Industries/Industries";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import RecentProject from "../LandingPage/RecentProject/RecentProject";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import AppDevelopmentHerosection from "./AppDevelopmentHersection/AppDevelopmentHerosection";
import AppDevelopmentServises from "./AppDevelopmentServises/AppDevelopmentServises";
import DevelopmentDesign from "./DevelopmentDesign/DevelopmentDesign";
import TechStack from "./TechStack/TechStack";

const AppDevelopment = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <AppDevelopmentHerosection />
      </div>
      <div>
        <MileStone />
      </div>
      <div>
        <AppDevelopmentServises />
      </div>
      <div>
        <DevelopmentDesign />
      </div>
      <div>
        <TechStack />
      </div>
      <div>
        <RecentClient />
      </div>
      <div>
        <Industries />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      <div>
        <RecentProject />
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

export default AppDevelopment;
