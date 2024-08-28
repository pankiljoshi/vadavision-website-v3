import { usePathname } from "next/navigation";
import React from "react";
import ActiveLogo from "../Navbar/NavIcons/ActiveLogo";

const ActiveShadow = () => {
  const pathname = usePathname();

  return (
    <div>
      <span
        className={`absolute top-[-2px] left-[-4px] transform transition-opacity duration-300 ease-in-out
            ${pathname === "/about-us" ? "opacity-100" : "opacity-0"}
          `}
      >
        <ActiveLogo width={"56px"} />
      </span>
    </div>
  );
};

export default ActiveShadow;
