"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Contact from "../../../../public/Images/contact.png";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import useContact from "../../../apiHooks/constants/useContact";
import ErrorIcon from "./ErrorIcon";
import { errorToast, successToast } from "../../../utils/toast";
import Select from "../../Common/CustomSelect/CustomSelect";
import ButtonLoader from "../../Common/ButtonLoader";

const options = [
  { value: "sales", label: "Sales" },
  { value: "partnership", label: "Partnership" },
  { value: "hiring", label: "Hiring" },
  { value: "other", label: "Other" },
];

const GetInTouch = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectChange = (value) => {
    setSelectedValue(value);
  };
  const { sendContactForm } = useContact();
  const [number, setNumber] = useState("in");
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  useEffect(() => {
    if (typeof document !== "undefined") {
      Aos.init({
        offset: 100,
        duration: 1000,
        once: true,
        easing: "ease",
      });
    }
  }, []);

  const validateEnquiryType = () => {
    if (!selectedValue) {
      setError("enquiry_type", {
        type: "manual",
        message: "Enquiry type is required",
      });
      return false;
    }
    clearErrors("enquiry_type");
    return true;
  };

  const validatePhoneNumber = () => {
    if (!number) {
      setError("phone_number", {
        type: "manual",
        message: "Phone number is required",
      });
      return false;
    }
    clearErrors("phone_number");
    return true;
  };

  const onSubmit = async (data) => {
    if (!validateEnquiryType() || !validatePhoneNumber()) {
      return;
    }
    setIsLoading(true);
    data.phone_number = number;
    const result = await sendContactForm(data);

    if (result.success) {
      successToast("Message sent successfully!");
    } else {
      errorToast(result.message || "Failed to send message. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full px-4 md:px-20 lg:px-20 pt-6 pb-[67px]  flex-col getintouch-padding justify-start items-start gap-8 inline-flex getintouch-bg">
        <div
          data-aos="fade-right"
          className=" justify-start items-center gap-2 inline-flex"
        >
          <Link href="/">
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <g
                  id="house-black-silhouette-without-door 1"
                  clipPath="url(#clip0_1668_4821)"
                >
                  <g id="Group">
                    <path
                      id="Vector"
                      d="M15.7996 8.31271C16.0896 7.99372 16.0616 7.50481 15.737 7.22098L8.58642 0.964157C8.26186 0.680325 7.7415 0.686271 7.42377 0.977561L0.248846 7.55457C-0.0688876 7.84586 -0.0844821 8.33414 0.214319 8.64473L0.394204 8.83207C0.69264 9.14266 1.17503 9.17969 1.47096 8.91453L2.00717 8.43433V15.4645C2.00717 15.8959 2.35667 16.245 2.78769 16.245H5.58449C6.01551 16.245 6.365 15.8959 6.365 15.4645V10.5462H9.93236V15.4645C9.92615 15.8955 10.2345 16.2447 10.6656 16.2447H13.6295C14.0605 16.2447 14.41 15.8955 14.41 15.4642V8.53332C14.41 8.53332 14.5581 8.66309 14.7408 8.82368C14.9232 8.98395 15.3063 8.85544 15.5963 8.53614L15.7996 8.31271Z"
                      fill="#DD4243"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1668_4821">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </Link>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              className="cursor-pointer"
              viewBox="0 0 16 17"
              fill="none"
            >
              <g id="down(1) 1">
                <g id="16">
                  <path
                    id="Vector"
                    d="M10.6666 8.50004C10.6671 8.58778 10.6503 8.67475 10.6171 8.75598C10.584 8.8372 10.5351 8.91108 10.4733 8.97337L6.47329 12.9734C6.34776 13.0989 6.1775 13.1694 5.99996 13.1694C5.82243 13.1694 5.65216 13.0989 5.52663 12.9734C5.40109 12.8478 5.33057 12.6776 5.33057 12.5C5.33057 12.3225 5.40109 12.1522 5.52663 12.0267L9.05996 8.50004L5.53329 4.97337C5.42408 4.84584 5.36701 4.68179 5.37349 4.514C5.37997 4.34622 5.44952 4.18706 5.56825 4.06833C5.68698 3.9496 5.84614 3.88005 6.01392 3.87357C6.18171 3.86708 6.34576 3.92415 6.47329 4.03337L10.4733 8.03337C10.5965 8.15755 10.6659 8.32515 10.6666 8.50004Z"
                    fill="#4B4B4B"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-white text-sm font-normal urbanist">
            Contact Us
          </div>
        </div>
        <div
          data-aos="fade-right"
          className=" flex-col justify-start items-start gap-4 inline-flex"
        >
          <div className="text-emerald-500 text-[56px] font-bold getintouch-gradient urbanist">
            Get in Touch
          </div>
          <div className="w-[386px] text-[#8E8E8E] text-base font-normal getintouch-paragraph urbanist">
            Having some doubt, or just want to know something? Drop us a message
            and we’ll connect back super soon.
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="fade-up"
          className="w-full flex flex-wrap"
        >
          <div className="w-[60%] min-w-[550px] max-md:min-w-full max-md:w-full p-6 bg-neutral-900 flex-col justify-start items-start flex">
            <div className="flex flex-row max-md:flex-wrap items-center gap-10 w-full">
              <div className="w-[50%] max-md:w-full">
                <h1 className="text-[#CACACA] font-light urbanist">
                  Full Name
                </h1>
                <div className="mt-4">
                  <input
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                    type="text"
                    placeholder="Your full name"
                    className={`h-[50px] outline-none urbanist font-normal w-full py-3 text-white placeholder-[#8E8E8E] text-[16px] pl-4  ${
                      errors.full_name
                        ? "border border-[#DD4243]"
                        : "border border-[#FFFFFF29]"
                    }`}
                    {...register("full_name", {
                      required: "Full name is required",
                    })}
                  />
                </div>
                <div
                  className={`mx-2 ${
                    errors.full_name ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  {errors.full_name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span>
                        {" "}
                        <ErrorIcon />
                      </span>
                      {errors.full_name.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-[50%] max-md:w-full">
                <h1 className="text-[#CACACA] font-light urbanist">Email</h1>
                <div className="mt-4">
                  <input
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                    type="email"
                    placeholder="Your email"
                    className={`h-[50px] outline-none urbanist font-normal w-full py-3 text-white placeholder-[#8E8E8E] text-[16px] pl-4  ${
                      errors.email
                        ? "border border-[#DD4243]"
                        : "border border-[#FFFFFF29]"
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                </div>
                <div
                  className={`mx-2 ${
                    errors.email ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span>
                        <ErrorIcon />
                      </span>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row max-md:flex-wrap items-center gap-10 mt-4 w-[100%]">
              <div className="w-[50%] max-md:w-full">
                <h1 className="text-[#CACACA] font-light urbanist">
                  Phone Number
                </h1>
                <div className="flex w-full gap-6">
                  <div
                    className={`h-[50px] mt-4 w-[100%]  ${
                      errors.phone_number
                        ? "border border-[#DD4243]"
                        : "border border-[#FFFFFF29]"
                    }`}
                  >
                    <PhoneInput
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.04)",
                        width: "100%",
                      }}
                      country={"in"}
                      placeholder="Your phone number"
                      value={number}
                      onChange={(value) => {
                        setNumber(value);
                        setValue("phone_number", value);
                        clearErrors("phone_number");
                      }}
                      onBlur={validatePhoneNumber}
                    />
                  </div>
                </div>
                <div
                  className={`mx-2 ${
                    errors.phone_number ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-300`}
                >
                  {errors.phone_number && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span>
                        <ErrorIcon />
                      </span>
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="w-[50%] max-md:w-full">
                <h1 className="text-[#CACACA] font-light urbanist">
                  Enquiry Type
                </h1>
                <div className="mt-4 w-[100%]">
                  <Select
                    value={selectedValue}
                    onChange={(newValue) => {
                      setSelectedValue(newValue);
                      setValue("enquiry_type", newValue);
                      clearErrors("enquiry_type");
                    }}
                    className=""
                    placeholder="Select Enquiry Type"
                    options={options}
                  />

                  {errors.enquiry_type && (
                    <div className="text-red-500 text-sm flex items-center gap-2">
                      <ErrorIcon />
                      <span>{errors.enquiry_type.message}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 w-full flex-wrap">
              <div className="text-[#CACACA] font-light urbanist">
                Your Message
              </div>
              <textarea
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                }}
                cols="84"
                rows="7"
                placeholder="Enter your message"
                className={`mt-4 flex-wrap w-full pl-4 resize-none placeholder-[#8E8E8E] urbanist text-[16px] font-light text-white pt-3 outline-none  ${
                  errors.message
                    ? "border border-[#DD4243]"
                    : "border border-[#FFFFFF29]"
                }`}
                {...register("message", {
                  required: "Message is required",
                })}
              />
              <div
                className={`mx-2 ${
                  errors.message ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
              >
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span>
                      <ErrorIcon />
                    </span>
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-full flex justify-end mt-4 cursor-pointer">
              {!isLoading ? (
                <button
                  onClick={() => validateEnquiryType()}
                  type="submit"
                  className="w-[211px] px-10 py-3 bg-[#DD4243] hover:bg-[#D53033] text-white text-xl font-light urbanist"
                >
                  Send Message
                </button>
              ) : (
                <div>
                  <ButtonLoader
                    text={"Loading"}
                    backgroundColor={"#DD4243"}
                    textColor={"white"}
                    // padding={"2px 0px 2px"}
                    // margin={"1px 0px 0px 0px"}
                    // fontSize={"10px"}
                    className="flex items-center gap-2 w-[211px] px-10 py-3 bg-[#DD4243] hover:bg-[#D53033] text-white text-xl font-light urbanist"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="w-[40%] min-w-[380px] max-md:min-w-full max-md:w-full flex justify-center items-center">
            <div
              className="w-[550px] h-[550px] max-md:w-full max-md:mt-5 mx-auto"
              style={{ mixBlendMode: "luminosity" }}
            >
              <Image
                src={Contact}
                alt="Contact image"
                className="w-full h-full bg-gray-50"
                style={{ mixBlendMode: "luminosity" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetInTouch;
