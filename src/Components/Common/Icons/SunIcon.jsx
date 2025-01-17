import React from "react";

const SunIcon = ({themeMode}) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <g clip-path="url(#clip0_570_23)">
          <path
            d="M6 1.83281C6.19416 1.83281 6.35156 1.67541 6.35156 1.48125V0.351563C6.35156 0.157406 6.19416 0 6 0C5.80584 0 5.64844 0.157406 5.64844 0.351563V1.48125C5.64844 1.67541 5.80584 1.83281 6 1.83281Z"
            fill={themeMode === "light" ? "red" : "white"}
            />
          <path
            d="M6 10.1672C5.80584 10.1672 5.64844 10.3246 5.64844 10.5187V11.6484C5.64844 11.8426 5.80584 12 6 12C6.19416 12 6.35156 11.8426 6.35156 11.6484V10.5187C6.35156 10.3246 6.19416 10.1672 6 10.1672Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M11.6482 5.64844H10.5186C10.3244 5.64844 10.167 5.80584 10.167 6C10.167 6.19416 10.3244 6.35156 10.5186 6.35156H11.6482C11.8424 6.35156 11.9998 6.19416 11.9998 6C11.9998 5.80584 11.8424 5.64844 11.6482 5.64844Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M1.83281 6C1.83281 5.80584 1.67541 5.64844 1.48125 5.64844H0.351563C0.157406 5.64844 0 5.80584 0 6C0 6.19416 0.157406 6.35156 0.351563 6.35156H1.48125C1.67541 6.35156 1.83281 6.19416 1.83281 6Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M9.4439 3.05325L10.2426 2.25457C10.3799 2.11727 10.3799 1.89469 10.2426 1.75739C10.1053 1.62009 9.8827 1.62009 9.7454 1.75739L8.94672 2.55607C8.80943 2.69337 8.80943 2.91595 8.94672 3.05325C9.08397 3.19052 9.30661 3.19059 9.4439 3.05325Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M2.55595 8.94675L1.75727 9.74543C1.61997 9.88272 1.61997 10.1053 1.75727 10.2426C1.89452 10.3799 2.11715 10.3799 2.25445 10.2426L3.05313 9.44393C3.19043 9.30663 3.19043 9.08404 3.05313 8.94675C2.91583 8.80943 2.69322 8.80943 2.55595 8.94675Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M9.4439 8.94675C9.30663 8.80945 9.08402 8.80945 8.94672 8.94675C8.80943 9.08405 8.80943 9.30663 8.94672 9.44393L9.7454 10.2426C9.88265 10.3799 10.1053 10.3799 10.2426 10.2426C10.3799 10.1053 10.3799 9.88273 10.2426 9.74543L9.4439 8.94675Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M2.55597 3.05325C2.69322 3.19052 2.91586 3.19057 3.05315 3.05325C3.19045 2.91595 3.19045 2.69337 3.05315 2.55607L2.25445 1.75739C2.11718 1.62009 1.89457 1.62009 1.75727 1.75739C1.61997 1.89469 1.61997 2.11727 1.75727 2.25457L2.55597 3.05325Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
          <path
            d="M6.0002 3.01249C4.3529 3.01249 3.0127 4.3527 3.0127 6C3.0127 7.64731 4.3529 8.98751 6.0002 8.98751C7.64751 8.98751 8.98771 7.64731 8.98771 6C8.98771 4.3527 7.64751 3.01249 6.0002 3.01249ZM6.0002 8.28438C4.7406 8.28438 3.71582 7.2596 3.71582 6C3.71582 4.7404 4.7406 3.71562 6.0002 3.71562C7.2598 3.71562 8.28459 4.7404 8.28459 6C8.28459 7.2596 7.2598 8.28438 6.0002 8.28438Z"
            fill={themeMode === "light" ? "red" : "white"}
          />
        </g>
        <defs>
          <clipPath id="clip0_570_23">
            <rect width="12" height="12" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default SunIcon;
