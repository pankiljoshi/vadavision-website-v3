import React from "react";
import CampaignHerosection from "./CampaignHerosection/CampaignHerosection";
import OurClients from "../../Components/Campaign/OurClients/OurClients";
import TopRatedReview from "./TopRatedReview/TopRatedReview";
import Footer from "./Footer/Footer";
import DesignAuditReport from "./DesignAuditReport/DesignAuditReport";
import LeadDesigner from "./LeadDesigner/LeadDesigner";
import CopyRightRoadMap from "./CopywriterRoadmap/CopywriterRoadmap";
const Campaign = () => {
  return (
    <>
      <CampaignHerosection />

      <OurClients />

      <DesignAuditReport />

      <LeadDesigner />

      <TopRatedReview />

      <CopyRightRoadMap />

      <Footer />
    </>
  );
};

export default Campaign;
