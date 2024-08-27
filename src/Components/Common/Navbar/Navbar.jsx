"use client";
import React, { useState } from "react";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Link from "next/link";
import Image from "next/image";
import UiuxServise from "../../../../public/Images/webp/uiux.webp";
import AiFace from "../../../../public/Images/webp/ai-bot.webp";
import AppServise from "../../../../public/Images/webp/app-dev.webp";
import Automation from "../../../../public/Images/webp/automation.webp";
import Resource from "../../../../public/Images/webp/resource.webp";
import VadavisionLogo from "./NavIcons/VadavisionLogo";
import AIService from "./NavIcons/AIService";
import ActiveLogo from "./NavIcons/ActiveLogo";
import AppDevLogo from "./NavIcons/AppDevLogo";
import AutomationLogo from "./NavIcons/AutomationLogo";
import LinkLogo from "./NavIcons/LinkLogo";
import ResourceLogo from "./NavIcons/ResourceLogo";
import UiUxLogo from "./NavIcons/UiUxLogo";
import Check from "./NavIcons/Check";
import AppDevIcon from "./NavIcons/AppDevIcon";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const [isAiServisesVisible, setIsAiServiseVisible] = useState(true);
  const showAiServises = () => {
    setIsAiServiseVisible(true);
    setUiUxVisible(false);
    setAutomationVisible(false);

    setAppVisible(false);
    setResourceVisible(false);
  };
  const [isUiUXVisible, setUiUxVisible] = useState(false);
  const showUiUx = () => {
    setUiUxVisible(true);
    setIsAiServiseVisible(false);
    setAppVisible(false);
    setAutomationVisible(false);

    setResourceVisible(false);
  };
  const [isAppisible, setAppVisible] = useState(false);
  const showApp = () => {
    setUiUxVisible(false);
    setIsAiServiseVisible(false);
    setAppVisible(true);
    setAutomationVisible(false);

    setResourceVisible(false);
  };
  const [isAutomationisible, setAutomationVisible] = useState(false);
  const showAutomation = () => {
    setUiUxVisible(false);
    setAutomationVisible(true);
    setIsAiServiseVisible(false);
    setAppVisible(false);
    setResourceVisible(false);
  };
  const [isResourceVisible, setResourceVisible] = useState(false);
  const showResource = () => {
    setUiUxVisible(false);
    setResourceVisible(true);
    setAutomationVisible(false);

    setIsAiServiseVisible(false);
    setAppVisible(false);
  };
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handelOpenDropDown = () => {
    setIsDropDownOpen(true);
  };
  const closeDropDown = () => {
    setIsDropDownOpen(false);
  };
  const [showSVG, setShowSVG] = useState(true);

  const handleToggle = () => {
    setShowSVG(!showSVG);
  };
  const pathname = usePathname();
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isServiceHovered, setIsServiceHovered] = useState(false);

  return (
    <>
      <div className="NavigationWeb w-full px-20 overflow-x-hidden padding-full-website  padding-none bg-white bg-opacity-5 border border-neutral-900 ">
        <div className="responsive-navbar ">
          <div className="h-[60px] flex justify-between items-center">
            <Link href="/">
              <div className="Frame2 cursor-pointer py-2 justify-start items-center gap-2 inline-flex">
                <span>
                  <VadavisionLogo />
                </span>
                <div className="Vadavision text-white text-2xl font-bold prompt leading-7">
                  VadaVision!
                </div>
              </div>
            </Link>
            <div className="">
              <div className="Frame  justify-start items-center gap-8 inline-flex">
                <Link href="/">
                  <div
                    className="Home text-white cursor-pointer text-base py-4 font-semibold font-urbaninst relative"
                    onMouseEnter={() => setIsHomeHovered(true)}
                    onMouseLeave={() => setIsHomeHovered(false)}
                  >
                    <span className="font-urbaninst ml-2 font-light">Home</span>
                    <span
                      className={`absolute top-[-2px] left-0 transform transition-opacity duration-300 ease-in-out
            ${pathname === "/" || isHomeHovered ? "opacity-100" : "opacity-0"}
          `}
                    >
                      <ActiveLogo width={"56px"} />
                    </span>
                  </div>
                </Link>
                <Link href="/about-us">
                  <div
                    className="About text-neutral-400 cursor-pointer py-4 text-base font-medium font-urbaninst relative"
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                  >
                    <span className="ml-1 urbanist text-[#8E8E8E] font-light">
                      About
                    </span>
                    <span
                      className={`absolute top-[-2px] left-[-4px] transform transition-opacity duration-300 ease-in-out
            ${
              pathname === "/about-us" || isAboutHovered
                ? "opacity-100"
                : "opacity-0"
            }
          `}
                    >
                      <ActiveLogo width={"56px"} />
                    </span>
                  </div>
                </Link>
                <div className="Frame3 justify-start items-center gap-1 flex">
                  <div
                    onMouseEnter={() => {
                      handleOpenPopup();
                    }}
                    className="Services text-neutral-400   cursor-pointer text-base font-medium font-urbaninst"
                  >
                    <div>
                      {isPopupOpen && (
                        <div className="fixed inset-0 backdrop-blur-[8px] responsive-servise-dropdown mt-[56px] flex z-10    ">
                          <div className="flex w-full   ">
                            <div
                              className="  w-full px-16 h-[484px] bg-black  "
                              onMouseLeave={() => {
                                handleClosePopup();
                              }}
                            >
                              <div className="w-full flex flex-row gap-6">
                                <div className="flex flex-col">
                                  <div className="flex flex-row gap-6 cards-gap  mt-10">
                                    <Link href="/ai-bot-landing">
                                      <div
                                        onMouseEnter={showAiServises}
                                        className="servises-dropdown-card cursor-pointer w-[288px] h-[192px] p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950  border border-black group hover:border hover:border-neutral-400 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 h-36 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 h-24 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap justify-start items-center gap-4 inline-flex">
                                              <div className="Frame1171281402 flex-col justify-start items-start gap-4 inline-flex">
                                                <div className="AiAssistant1 w-8 h-8 relative">
                                                  <div className="Group w-8 h-8 left-[0.81px] top-0 absolute">
                                                    <div className="Group w-7 h-7 left-[1.38px] top-[3.44px] absolute"></div>
                                                    <div className="Group w-8 h-8 left-0 top-0 absolute">
                                                      <AIService />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="AiServices AppDevelopment text-white text-2xl font-normal urbanist">
                                                AI Services
                                              </div>
                                            </div>
                                            <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                                <div className=" ai-servise-text leading-tight self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                  Get the powerful AI services
                                                  built by the experts.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="Frame1171281437 servise-dropdown-ai-servise justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <LinkLogo />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link href="/top-ui-ux-design-agency">
                                      <div
                                        onMouseEnter={showUiUx}
                                        className="servises-dropdown-card cursor-pointer w-[288px] h-[192px] p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 group border border-black hover:border  hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 w-60 h-24 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap justify-start items-center gap-4 inline-flex">
                                              <div className="VectorIllustration w-6 h-6 relative">
                                                <UiUxLogo />
                                              </div>
                                              <div className="UiUxDesign AppDevelopment text-white text-2xl font-normal urbanist">
                                                UI UX Design
                                              </div>
                                            </div>
                                            <div className="Frame1171281436  flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch flex-col justify-start items-start gap-2 flex">
                                                <div className="app-development-text self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                  Best in class UI and UX
                                                  Designs.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="uiux-servise-dropdown justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <LinkLogo />
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                    <Link href="/mobile-hybrid-app-development-agency">
                                      <div
                                        onMouseEnter={showApp}
                                        className="servises-dropdown-card cursor-pointer w-[288px] h-[192px] p-6 border border-black bg-gradient-to-b  from-stone-950 via-neutral-900 to-stone-950 group hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 w-60 h-24 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-4 inline-flex">
                                              <div className="MobileDevelopment2 w-6 h-6 relative">
                                                <div className="Group w-5 h-5 left-[2px] top-[1px] absolute">
                                                  <AppDevLogo />
                                                </div>
                                              </div>
                                              <div className="AppDevelopment grow shrink basis-0 text-white text-2xl font-normal urbanist">
                                                App Development
                                              </div>
                                            </div>
                                            <div className=" app-development-text flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                                                <div className=" text-[#8E8E8E] text-base font-extralight urbanist">
                                                  iOS, Android SDK or Hybrid -
                                                  we build it all.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="uiux-servise-dropdown justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <LinkLogo />
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                  <div className="flex flex-row gap-6  workflow-margin   mt-10">
                                    <Link href="/resource-augmentation">
                                      <div
                                        onMouseEnter={showResource}
                                        className="work-flow-automation-card cursor-pointer w-[443px] h-[176px] p-6 border border-black group bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-6 inline-flex">
                                              <div className="Resource1 w-6 h-6 relative">
                                                <ResourceLogo />
                                              </div>
                                              <div className="ResourceAugmentation  leading-tight AppDevelopment grow shrink basis-0 text-white text-2xl font-normal urbanist">
                                                Resource Augmentation
                                              </div>
                                            </div>
                                            <div className="Frame1171281436 resource-argumentation  flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                                <div className="TheIntuitiveResourcesAugmentation self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                  The intuitive resources
                                                  augmentation.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="resource-learn-more-margin justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <LinkLogo />
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>

                                    <Link href="/automation">
                                      <div
                                        onMouseEnter={showAutomation}
                                        className="work-flow-automation-card cursor-pointer w-[443px] border border-black h-44 group p-6 bg-gradient-to-b from-stone-950 via-neutral-900 to-stone-950 hover:border hover:border-neutral-400 border-opacity-0 flex-col justify-start items-start gap-2.5 inline-flex"
                                      >
                                        <div className="Frame1171281439 w-64 h-28 flex-col justify-start items-start gap-6 flex">
                                          <div className="Frame1171281438 flex-col justify-start items-start gap-6 flex">
                                            <div className="ai-servise-dropdown-gap self-stretch justify-start items-center gap-6 inline-flex">
                                              <div className="Workflow1 w-6 h-6 relative">
                                                <AutomationLogo />
                                              </div>
                                              <div className="WorkflowAutomation AppDevelopment w-64 text-white text-2xl font-normal urbanist">
                                                Workflow Automation
                                              </div>
                                            </div>
                                            <div className="app-development-text  flex-col justify-start items-start gap-4 flex">
                                              <div className="Frame1171281435 self-stretch  flex-col justify-start items-start gap-2 flex">
                                                <div className=" self-stretch text-[#8E8E8E] text-base font-extralight urbanist">
                                                  Workflow automation like never
                                                  before.
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="Frame1171281437 justify-start items-center gap-2 inline-flex">
                                            <div className="LearnMore text-[#8E8E8E] group-hover:text-[#E1E1E1] text-sm font-light urbanist">
                                              Learn more
                                            </div>
                                            <div className="LeftUp1 w-4 h-4 relative origin-top-left  flex-col justify-start items-start inline-flex">
                                              <LinkLogo />
                                            </div>{" "}
                                          </div>
                                        </div>
                                      </div>
                                    </Link>
                                  </div>
                                </div>
                                {isAiServisesVisible && (
                                  <div className="ai-servises-card  w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image priority src={AiFace} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your AI Projects with us
                                      </div>
                                      <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {isUiUXVisible && (
                                  <div className="ai-servises-card w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image priority src={UiuxServise} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your UI and UX projects with us{" "}
                                      </div>
                                      <div className="Frame1171281490 flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight  urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                                {isAppisible && (
                                  <div className="ai-servises-card w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <span>
                                      <Image priority src={AppServise} alt="" />
                                    </span>
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your UI and UX projects with us{" "}
                                      </div>
                                      <div className="Frame1171281490 flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight  urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}{" "}
                                {isAutomationisible && (
                                  <div className="ai-servises-card w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image priority src={Automation} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your UI and UX projects with us{" "}
                                      </div>
                                      <div className="Frame1171281490 flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight  urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}{" "}
                                {isResourceVisible && (
                                  <div className="ai-servises-card w-96 h-96  mt-10 p-4 pb-10 border border-neutral-600 flex-col justify-start items-start  inline-flex">
                                    <Image priority src={Resource} alt="" />
                                    <div className="Frame1171281498 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                                      <div className="DiscussYourAiProjectsWithUs w-96 pt-4 text-neutral-400 text-base font-light urbanist">
                                        Discuss your UI and UX projects with us{" "}
                                      </div>
                                      <div className="Frame1171281490 flex-col justify-start items-start gap-4 flex">
                                        <div className="Frame1171281465 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="PersonalisedSolutions text-neutral-200 text-sm font-extralight urbanist">
                                            Personalised Solutions
                                          </div>
                                        </div>
                                        <div className="Frame1171281489 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="EmbarkingOnAJourney text-neutral-200 text-sm font-extralight urbanist">
                                            Embarking on a Journey
                                          </div>
                                        </div>
                                        <div className="Frame1171281488 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="InitiatingActionWithACall text-neutral-200 text-sm font-extralight urbanist">
                                            Initiating Action with a Call
                                          </div>
                                        </div>
                                        <div className="Frame1171281490 justify-center items-center gap-2 inline-flex">
                                          <div className="Correct1 w-4 h-4 relative">
                                            <div className="Group w-4 h-4 left-0 top-0 absolute">
                                              <Check />
                                            </div>
                                          </div>
                                          <div className="RobustAiEngine text-neutral-200 text-sm font-extralight  urbanist">
                                            Robust AI Engine
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      onMouseEnter={() => setIsServiceHovered(true)}
                      onMouseLeave={() => setIsServiceHovered(false)}
                      onClick={handleOpenPopup}
                      className="relative flex gap-2 py-4"
                    >
                      <span className=" text-[#8E8E8E] font-light urbanist">
                        Services
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        className="mt-2.5"
                      >
                        <path
                          d="M4.99996 6.16667C4.91222 6.16718 4.82525 6.15036 4.74402 6.11719C4.6628 6.08401 4.58892 6.03513 4.52663 5.97334L0.526628 1.97334C0.401092 1.8478 0.330566 1.67754 0.330566 1.50001C0.330566 1.32247 0.401092 1.15221 0.526628 1.02667C0.652163 0.901138 0.822426 0.830612 0.999961 0.830612C1.1775 0.830612 1.34776 0.901138 1.47329 1.02667L4.99996 4.56001L8.52663 1.03334C8.65416 0.924123 8.81821 0.867052 8.986 0.873532C9.15378 0.880013 9.31294 0.949568 9.43167 1.0683C9.5504 1.18703 9.61995 1.34619 9.62643 1.51397C9.63292 1.68176 9.57585 1.84581 9.46663 1.97334L5.46663 5.97334C5.34245 6.0965 5.17485 6.16594 4.99996 6.16667Z"
                          fill="#8E8E8E"
                        />
                      </svg>
                      {isServiceHovered && (
                        <span
                          className={`absolute top-[-2px] left-[-38px] transform transition-opacity duration-300 ease-in-out ${
                            isServiceHovered ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <ActiveLogo width={"120px"} />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Frame7 right-[11px] top-[16px]  justify-start items-center gap-6 px-10 inline-flex ">
              <div className="Frame6 justify-start items-center gap-2 flex">
                <div className="UnitedKingdom11 w-4 h-4 relative">
                  <div className="Group w-4 h-4 left-[0.28px] top-[0.28px] "></div>
                  <div className="Group w-4 h-4 left-0 top-0 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger-icon  w-full relative  cursor-pointer hidden">
          <Link href="/">
            <div className="Frame2 cursor-pointer py-4  pl-5 justify-start items-center gap-2 inline-flex">
              <VadavisionLogo />
              <div className="Vadavision text-white text-xl font-bold prompt  leading-7">
                VadaVision!
              </div>
            </div>
          </Link>

          <div className="float-end mt-4 px-4" onClick={handleToggle}>
            {showSVG ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                onClick={handelOpenDropDown}
                viewBox="0 0 28 28"
                fill="none"
              >
                <g id="menu(1) 1">
                  <path
                    id="Vector"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 7.00001C3.5 6.35568 4.02234 5.83334 4.66667 5.83334H23.3333C23.9777 5.83334 24.5 6.35568 24.5 7.00001C24.5 7.64434 23.9777 8.16668 23.3333 8.16668H4.66667C4.02234 8.16668 3.5 7.64434 3.5 7.00001ZM3.5 14C3.5 13.3557 4.02234 12.8333 4.66667 12.8333H16.3333C16.9777 12.8333 17.5 13.3557 17.5 14C17.5 14.6444 16.9777 15.1667 16.3333 15.1667H4.66667C4.02234 15.1667 3.5 14.6444 3.5 14ZM3.5 21C3.5 20.3557 4.02234 19.8333 4.66667 19.8333H10.5C11.1443 19.8333 11.6667 20.3557 11.6667 21C11.6667 21.6444 11.1443 22.1667 10.5 22.1667H4.66667C4.02234 22.1667 3.5 21.6444 3.5 21Z"
                    fill="white"
                  />
                </g>
              </svg>
            ) : (
              <span className="text-white" onClick={closeDropDown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <g id="02 User">
                    <path
                      id="Vector"
                      d="M1.37535 21.6667C1.1693 21.6667 0.96787 21.6056 0.796534 21.4912C0.625198 21.3767 0.491656 21.214 0.412799 21.0237C0.333942 20.8333 0.313314 20.6238 0.353522 20.4217C0.393731 20.2197 0.492971 20.034 0.638689 19.8884L19.8886 0.638479C20.0839 0.443104 20.3489 0.333344 20.6252 0.333344C20.9015 0.333344 21.1665 0.443104 21.3619 0.638479C21.5573 0.833854 21.667 1.09884 21.667 1.37514C21.667 1.65144 21.5573 1.91643 21.3619 2.1118L2.11201 21.3617C2.01536 21.4585 1.90053 21.5353 1.77411 21.5877C1.64769 21.64 1.51218 21.6669 1.37535 21.6667Z"
                      fill="white"
                    />
                    <path
                      id="Vector_2"
                      d="M20.6257 21.6667C20.4888 21.6669 20.3533 21.64 20.2269 21.5877C20.1005 21.5353 19.9856 21.4585 19.889 21.3617L0.63912 2.1118C0.443745 1.91643 0.333984 1.65144 0.333984 1.37514C0.333984 1.09884 0.443745 0.833854 0.63912 0.638479C0.834495 0.443104 1.09948 0.333344 1.37578 0.333344C1.65208 0.333344 1.91707 0.443104 2.11244 0.638479L21.3623 19.8884C21.508 20.034 21.6073 20.2197 21.6475 20.4217C21.6877 20.6238 21.6671 20.8333 21.5882 21.0237C21.5094 21.214 21.3758 21.3767 21.2045 21.4912C21.0331 21.6056 20.8317 21.6667 20.6257 21.6667Z"
                      fill="white"
                    />
                  </g>
                </svg>
              </span>
            )}
          </div>
          <div className="top-10 absolute  w-full z-50">
            {isDropDownOpen && <ResponsiveNavbar />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
