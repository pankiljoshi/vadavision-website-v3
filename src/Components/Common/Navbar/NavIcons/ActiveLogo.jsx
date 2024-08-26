import React from "react";

const ActiveLogo = ({ width }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height="43"
        className="top-0 absolute"
        viewBox="0 0 56 43"
        fill="none"
      >
        <rect width={width} height="5" fill="#DE090A" />
        <rect
          y="5"
          width={width}
          height="38"
          fill="url(#paint0_linear_73_324)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_73_324"
            x1="28"
            y1="5"
            x2="28"
            y2="36.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#DE090A" stopOpacity="0.49" />
            <stop offset="1" stopColor="#DD4243" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ActiveLogo;
