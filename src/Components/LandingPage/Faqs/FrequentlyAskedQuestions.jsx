"use client";
import React, { useState } from "react";
import Accordion from "./Faqs";

const FrequentlyAksedQuestions = () => {
  return (
    <div className="py-6 px-20 padding-industies   ">
      <div className="">
        <h1 className="capitalize font-montserrat text-[#8E8E8E] text-4xl font-bold leading-[110%] heading">
          some <br />{" "}
          <span className="faq-gradient text-5xl">
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
