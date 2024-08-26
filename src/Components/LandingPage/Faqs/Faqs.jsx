"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaMinus } from "react-icons/fa6";
const questionsData = [
  {
    id: 1,
    questions: "What services does Vadavision Offer??",
    answer:
      "Vadavision offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.    ",
  },
  {
    id: 2,
    questions:
      "Is Vadavision open to collaborative project management tools preferred by the client?",
    answer:
      "We enjoy assisting startups in overcoming their challenges. Opting for Vadavision in your early stages can enhance your growth. We create user-friendly products, attracting more users and making your brand impressive.",
  },
  {
    id: 3,
    questions:
      "How does Vadavision create website content without knowing our Business plan?",
    answer:
      "Vadavision offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing. ",
  },

  {
    id: 4,
    questions:
      "How does Vadavision ensure effective communication with clients?",
    answer:
      "We use various communication channels including emails, video conferences, and project management tools to keep clients updated and ensure smooth communication.  ",
  },
  {
    id: 5,
    questions:
      "Does Vadavision provide services for both web and mobile app development?",
    answer:
      "Vadavision offers comprehensive services for both web and mobile app development. We create responsive websites and cross-platform mobile applications to cater to diverse user needs.  ",
  },

  {
    id: 6,
    questions: "What is Post-Service Support?",
    answer:
      "Post-Service Support refers to the assistance and solutions provided after the completion of a project. It includes maintenance, troubleshooting, updates, and technical assistance to ensure your software continues to function optimally.",
  },
];

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };
  const [showHiddenFaq, setShowHiddenfAQ] = useState(false);
  const [buttonText, setButtonText] = useState("Load More");

  const handleLoadMoreClick = () => {
    setShowHiddenfAQ(!showHiddenFaq);
    setButtonText(showHiddenFaq ? "Load More" : "Show Less");
  };

  return (
    <div className="pb-10 pt-5 mt-14 flex justify-between faq-gap gap-11 load-faq">
      <div data-aos="fade-up" className="w-[50%] display-full-faq">
        {questionsData
          .filter((a) => a.id < 4)
          .map((item) => (
            <div key={item.id} className="accordion-item border-style-faq">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex gap-2 justify-between accordion-title">
                  <div className="montserrat text-[#CFD3D7] cursor-pointer text-2xl faq-question-size pt-4 pb-6 leading-[24px] line-height-faq font-medium">
                    {item.questions}
                  </div>
                  <div className="accordion-icon mt-6 cursor-pointer">
                    {openAccordion === item.id ? (
                      <FaMinus size={24} color="#DD4242" />
                    ) : (
                      <AiOutlinePlus size={24} color="#DD4242" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === item.id ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="text-[15px] font-normal text-[#7e7f7f] pb-6 montserrat w-[80%] pt-2 accordion-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
      </div>

      <div data-aos="fade-up" className="w-[50%] hide-faq">
        {questionsData
          .filter((a) => a.id >= 4)
          .map((item) => (
            <div key={item.id} className="accordion-item border-style-faq">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex gap-2 justify-between accordion-title">
                  <div className="montserrat text-[#CFD3D7] cursor-pointer faq-question-size text-2xl pt-4 pb-6 leading-[24px] line-height-faq font-medium">
                    {item.questions}
                  </div>
                  <div className="accordion-icon mt-6 cursor-pointer">
                    {openAccordion === item.id ? (
                      <FaMinus size={24} color="#DD4242" />
                    ) : (
                      <AiOutlinePlus size={24} color="#DD4242" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openAccordion === item.id ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="text-[15px] font-normal text-[#7e7f7f] pb-6 montserrat w-[80%] pt-2 accordion-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
      </div>

      {showHiddenFaq && (
        <div className="w-[50%] display-full-faq">
          {questionsData.map((item) => (
            <div key={item.id} className="accordion-item border-style-faq">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex gap-2 justify-between accordion-title">
                  <div className="montserrat text-[#CFD3D7] cursor-pointer text-2xl pt-4 faq-question-size pb-6 leading-[24px] font-medium">
                    {item.questions}
                  </div>
                  <div className="accordion-icon mt-6 cursor-pointer">
                    {openAccordion === item.id ? (
                      <FaMinus size={24} color="#DD4242" />
                    ) : (
                      <AiOutlinePlus size={24} color="#DD4242" />
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openAccordion === item.id ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="text-[15px] font-normal text-[#7e7f7f] pb-6 montserrat w-[80%] pt-2 accordion-content">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="w-full hidden show-button" data-aos="fade-up">
        <button
          onClick={handleLoadMoreClick}
          className="flex justify-center items-center mx-auto py-3 bg-[#DD4243] text-white font-normal text-[17px] button-responsive w-[400px]"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Accordion;
