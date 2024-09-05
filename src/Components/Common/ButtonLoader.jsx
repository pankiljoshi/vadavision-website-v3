import React from "react";

const ButtonLoader = ({
  text,
  backgroundColor,
  padding,
  margin,
  color,
  width,
  borderRadius,
  fontSize,
  border,
  svgColor = "white",
  className = "flex items-center justify-center space-x-1 rounded-md w-full relative",
}) => {
  return (
    <>
      <div
        aria-label="Loading..."
        role="status"
        className={className}
        style={{
          backgroundColor: backgroundColor,
          margin: margin,
          padding: padding,
          fontSize: fontSize,
          width: width,
          borderRadius: borderRadius,
          border: border,
        }}
      >
        <svg className="h-5 w-5 animate-spin" viewBox="0 0 256 256">
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            stroke={svgColor}
          ></line>
        </svg>
        <span style={{ color: color }} className="font-medium text-white">
          {text}
        </span>
      </div>
    </>
  );
};

export default ButtonLoader;
