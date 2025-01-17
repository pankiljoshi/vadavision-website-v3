import React from "react";
import ResourceAugmentation from "../../../Components/ResourceAugmentation/ResourceAugmentation";

export const metadata = {
  title: "Empowering Growth with Expert Resource Augmentation",
  description:
    "Discover the future of mobile innovation with Vadavision. As a leading software company, we specialize in crafting dynamic and efficient mobile apps. From AI integration to seamless UI/UX design, our skilled developers bring your ideas to life with speed and precision.",
  keywords:
    "Vadavision, Software Company, Startup Studio, Staff Augmentation, AI Development, Web Automation, Mobile App Development, UI/UX Design, Skilled Developers, Fast Turnaround, Cost-Efficiency, India-Based Company, Software Solutions, Innovation, Efficiency, Flutter, React Native, Hybrid Mobile Apps, OpenAI API, Chatgpt, Sales agent AI bot",
  openGraph: {
    title:
      "Vadavision | Transforming Ideas into Reality | AI, Web Automation, Mobile Apps",
    siteName: "Vadavision",
    url: "http://www.vadavision.com/",
    description:
      "Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality.",
    images: [
      {
        url: "http://vadavision.com/images/vadavision-homepage-screenshot.png",
      },
    ],
  },
};
const page = () => {
  return (
    <div>
      <ResourceAugmentation />
    </div>
  );
};

export default page;
