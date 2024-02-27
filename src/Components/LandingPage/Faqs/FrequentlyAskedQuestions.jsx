"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Accordion from "./Faqs";

const FrequentlyAksedQuestions = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 300,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);
  return (
    <div className=" px-20 mb-20 padding-industies   ">
      <div data-aos="fade-down" className="">
        <h1 className="capitalize font-montserrat text-[#8E8E8E] text-4xl font-semibold leading-[110%] heading">
          some <br />{" "}
          <span className="faq-gradient text-5xl leading-normal">
            Frequently Asked Questions
          </span>
        </h1>
      </div>
      <div className="accordion faq-accordian-width mx-auto">
        <Accordion />
      </div>
    </div>
  );
};

export default FrequentlyAksedQuestions;
