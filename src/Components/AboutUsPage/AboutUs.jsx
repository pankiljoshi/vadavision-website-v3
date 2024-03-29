import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import MileStone from "../LandingPage/MileStone/MileStone";
import Speciality from "../LandingPage/Speciality/Speciality";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import FrequentlyAksedQuestions from "../LandingPage/Faqs/FrequentlyAskedQuestions";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import WorkCulture from "./WorkCulture/WorkCulture";
import AboutUsHerosection from "./AboutUsHerosection/AboutUsHerosection";
import OurStory from "./OurStory/OurStory";
import MissionVision from "./MissionVision/MissionVision";
import OurTeam from "./OurTeam/OurTeam";

const AboutUs = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <AboutUsHerosection />
      </div>
      <div>
        <MileStone />
      </div>
      <div>
        <OurStory />
      </div>
      <div>
        <MissionVision />
      </div>
      <div>
        <WorkCulture />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <Speciality />
      </div>
      <div>
        <Review />
      </div>
      <div>
        <ConsultWithUs />
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

export default AboutUs;
