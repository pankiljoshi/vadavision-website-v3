import React, {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import ErrorIcon from "../../ContactPage/GetInTouch/ErrorIcon";

const CustomSelect = forwardRef(
  (
    { options, placeholder, register, className, name, error, onChange },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const dropdownRef = useRef(null);

    useImperativeHandle(ref, () => ({
      get value() {
        return selectedValue;
      },
    }));

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (value) => {
      setSelectedValue(value);
      onChange(value);
      setIsOpen(false);
    };

    return (
      <div className="relative w-full" ref={dropdownRef}>
        <button
          style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
          type="button"
          className={` ${className} w-full text-white py-[15px] px-4 text-[16px] h-[50px] flex items-center justify-between ${
            error ? "border border-[#DD4243]" : "border border-[#FFFFFF29]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          //   {...register(name)}
        >
          <span
            className={`${
              selectedValue ? "capitalize text-white" : "text-[#8E8E8E]"
            }`}
          >
            {selectedValue || placeholder}
          </span>
          <svg
            className={`w-4 h-4 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
              fill=""
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute w-full bg-neutral-900 border border border-[#FFFFFF29] text-white mt-1 rounded-sm shadow-lg z-10">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-[15px] hover:bg-[#6E6E6E] cursor-pointer"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
        {error && (
          <p className="mt-1 text-red-500 flex items-center gap-1">
            <span>
              <ErrorIcon />
            </span>{" "}
            {error.message}
          </p>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
