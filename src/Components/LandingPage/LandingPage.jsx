import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Servise from "../Servises/Servise";
import Industries from "./Industries/Industries";
import Review from "./Review/Review";
import ConsultWithUs from "./ConsultWithUs/ConsultWithUs";
import Speciality from "./Speciality/Speciality";
import NewsLetter from "./NewsLetter/NewsLetter";
import FooterLinks from "./FooterLinks/FooterLinks";
import Footer from "./Footer/Footer";
import FrequentlyAksedQuestions from "./Faqs/FrequentlyAskedQuestions";
import MileStone from "./MileStone/MileStone";
import HeroSection from "./Herosection/HeroSection";
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

      <div className="">
        <MileStone />
      </div>
      <div className="">
        <Servise />
      </div>

      <div>
        <Industries />
      </div>
      <div>
        <Speciality />
      </div>
      {/* <div>
        <RecentProject />
      </div> */}
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
