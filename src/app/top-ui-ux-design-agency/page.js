import Head from "next/head";
import React from "react";
import UiUx from "../../Components/UiUxPage/UiUx";
export const metadata = {
  title: "Where Innovation Meets Intuitive Design",
  description:
    "Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality.",
  keywords:
    "Vadavision, Software Company, Startup Studio, Staff Augmentation, AI Development, Web Automation, Mobile App Development, UI/UX Design, Skilled Developers, Fast Turnaround, Cost-Efficiency, India-Based Company, Software Solutions, Innovation, Efficiency, Flutter, React Native, Hybrid Mobile Apps, OpenAI API, Chatgpt, Sales agent AI bot",
  openGraph: {
    title:
      "Vadavision | Transforming Ideas into Reality | AI, Web Automation, Mobile Apps",
    siteName: "Vadavision",
    url: "http://www.vadavision.com/",

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
      <Head>
        <title>Vadavision: Where Innovation Meets Intuitive Design</title>
        <meta
          name="description"
          content="Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality."
        />
        <meta
          name="keywords"
          content="Vadavision, Software Company, Startup Studio, Staff Augmentation, AI Development, Web Automation, Mobile App Development, UI/UX Design, Skilled Developers, Fast Turnaround, Cost-Efficiency, India-Based Company, Software Solutions, Innovation, Efficiency, Flutter, React Native, Hybrid Mobile Apps, OpenAI API, Chatgpt, Sales agent AI bot"
        />
        <meta
          property="og:title"
          content="Vadavision | Transforming Ideas into Reality | AI, Web Automation, Mobile Apps"
        />
        <meta property="og:site_name" content="Vadavision" />
        <meta property="og:url" content="http://www.vadavision.com/" />
        <meta
          property="og:description"
          content="Vadavision is a leading software company and startup studio based in India, specializing in staff/resource augmentation, AI, web automation applications, mobile apps, and cutting-edge UI/UX design. Our dedicated team of skilled developers ensures swift project delivery and cost-efficiency. Let us turn your ideas into reality."
        />
        <meta property="og:type" content="business.business" />
        <meta
          property="og:image"
          content="http://vadavision.com/images/vadavision-homepage-screenshot.png"
        />
      </Head>
      <UiUx />
    </div>
  );
};

export default page;
