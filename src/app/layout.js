import { Inter, Urbanist, Montserrat, Prompt } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

const urbaninst = Urbanist({ subsets: ["latin"], variable: "--urbaninst" });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});

const prompt = Prompt({
  subsets: ["latin"],
  variable: "--prompt",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          (inter.variable,
          urbaninst.variable,
          montserrat.variable,
          prompt.variable)
        }
      >
        {children}
      </body>
    </html>
  );
}
