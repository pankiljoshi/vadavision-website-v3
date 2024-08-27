import React from "react";
import Navbar from "../Common/Navbar/Navbar";
import MileStone from "../LandingPage/MileStone/MileStone";
import Speciality from "../LandingPage/Speciality/Speciality";
import Review from "../LandingPage/Review/Review";
import NewsLetter from "../LandingPage/NewsLetter/NewsLetter";
import FooterLinks from "../LandingPage/FooterLinks/FooterLinks";
import Footer from "../LandingPage/Footer/Footer";
import PerksAndBenefit from "./PerksAndBenefit/PerksAndBenefit";
import CareerHerosection from "./CareerHerosection/CareerHerosection";
import OpenRoles from "./OpenRoles/OpenRoles";
import Map from "./Map/Map";
import AmbitiousTeam from "./AmbitiousTeam/AmbitiousTeam";

const Careers = () => {
  return (
    <>
      <div>
        <CareerHerosection />
      </div>
      <div>
        <MileStone />
      </div>
      <div>
        <AmbitiousTeam />
      </div>

      <div>
        <Map />
      </div>
      <div>
        <PerksAndBenefit />
      </div>
      <div>
        <OpenRoles />
      </div>
      <div>
        <Speciality />
      </div>
      <div>
        <Review />
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

export default Careers;
