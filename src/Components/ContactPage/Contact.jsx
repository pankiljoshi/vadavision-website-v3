import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import Review from "../LandingPage/Review/Review";
import ConsultWithUs from "../LandingPage/ConsultWithUs/ConsultWithUs";
import FrequentlyAksedQuestions from "../LandingPage/Faqs/FrequentlyAskedQuestions";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import GetInTouch from "./GetInTouch/GetInTouch";
import ContactInfo from "./ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="">
        <GetInTouch />
      </div>
      <div>
        <ContactInfo />
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

export default Contact;
