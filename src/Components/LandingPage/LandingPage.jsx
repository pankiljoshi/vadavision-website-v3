import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import HeroSection from "./Herosection/HeroSection";
import Servise from "./Servise";
import MileStone from "./MileStone/MileStone";
import Industries from "./Industries/Industries";
import RecentProject from "./RecentProject/RecentProject";
import Review from "./Review/Review";
import ConsultWithUs from "./ConsultWithUs/ConsultWithUs";
import Speciality from "./Speciality/Speciality";
import NewsLetter from "./NewsLetter/NewsLetter";
import FooterLinks from "./FooterLinks/FooterLinks";
import Footer from "./Footer/Footer";
import Accordion from "./Faqs/Faqs";
import FrequentlyAksedQuestions from "./Faqs/FrequentlyAskedQuestions";
import Testimonials from "./Testimonials/Testimonials";

const LandingPage = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <HeroSection />
      </div>
      {/* <div className="mt-20 pt-20">
        <MileStone />
      </div> */}
      <div className="">
        <Servise />
      </div>

      <div>
        <Industries />
      </div>
      <div>
        <Speciality />
      </div>
      <div>
        <RecentProject />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
      </div>
      {/* <div>
        <Testimonials />
      </div> */}
      <div>
        <FrequentlyAksedQuestions />
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

export default LandingPage;
