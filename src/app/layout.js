import { Prompt, Inter, Urbanist, Montserrat, Raleway } from "next/font/google";
import "./globals.css";
import React from "react";
import Head from "next/head";
import Navbar from "../Components/Common/Navbar/Navbar";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-prompt",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata = {
  title: {
    default: "vadavision",
    template: "Vadavision | %s  ",
  },
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-NVLS58QQ');`,
          }}
        ></script>
      </Head>
      <body
        className={`${prompt.variable} ${inter.variable} ${urbanist.variable} ${montserrat.variable} ${raleway.variable} `}
      >
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NVLS58QQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>

        <div>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
