"use client";
import React, { useEffect, useState } from "react";
import CampaignHerosection from "../../../Components/Campaign/CampaignHerosection/CampaignHerosection";
import Footer from "../../../Components/Campaign/Footer/Footer";
import OurClients from "../../../Components/Campaign/OurClients/OurClients";
import DesignAuditReport from "../../../Components/Campaign/DesignAuditReport/DesignAuditReport";
import LeadDesigner from "../../../Components/Campaign/LeadDesigner/LeadDesigner";
import TopRatedReview from "../../../Components/Campaign/TopRatedReview/TopRatedReview";
import CopyRightRoadMap from "../../../Components/Campaign/CopywriterRoadmap/CopywriterRoadmap";
const CampaignLayout = () => {
  const [themeMode, setThemeMode] = useState("system");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (themeMode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    } else {
      setDarkMode(themeMode === "dark");
    }
  }, [themeMode]);
  const [systemPreference, setSystemPreference] = useState("light");

  useEffect(() => {
    const updateSystemPreference = () => {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setSystemPreference(prefersDark ? "dark" : "light");
    };

    updateSystemPreference();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateSystemPreference);

    return () => mediaQuery.removeEventListener("change", updateSystemPreference);
  }, []);

  return (
    <section className={`${darkMode ? "" : "dark"}`}>
      <CampaignHerosection />
      <OurClients />

      <DesignAuditReport
       themeMode={themeMode} systemPreference={systemPreference}
      />

      <LeadDesigner />

      <TopRatedReview />

      <CopyRightRoadMap />
      <Footer
        toggle={() => setDarkMode(!darkMode)}
        darkMode={darkMode}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />
    </section>
  );
};

export default CampaignLayout;
