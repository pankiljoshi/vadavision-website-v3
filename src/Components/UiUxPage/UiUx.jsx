import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import Industries from "../LandingPage/Industries/Industries";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import RecentProject from "../LandingPage/RecentProject/RecentProject";
import Testimonials from "../LandingPage/Testimonials/Testimonials";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import UiUxQuality from "./UiUxQuality/UiUxQuality";
import UiUxServises from "./UiUxServises/UiUxServises";
import HowItsWork from "./HowItsWork/HowItsWork";
import RecentClient from "./RecentClient/RecentClient";
import Design from "./Design/Design";
import UiUxHerosection from "./UiUxHerosection/UiUxHerosection";

const UiUx = () => {
  return (
    <>
      <div>
        <UiUxHerosection />
      </div>
      <div>
        <UiUxQuality />
      </div>
      <div>
        <UiUxServises />
      </div>
      <div>
        <Design />
      </div>
      <div>
        <HowItsWork />
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

export default UiUx;
