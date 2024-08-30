import { useState } from "react";

const useContact = () => {
  const baseURL = "https://n8n.vadavision.com";
  const endpoint = "/webhook/vadavision-website-contact-form";

  const sendContactForm = async (data) => {
    try {
      const response = await fetch(`${baseURL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        return { success: true };
      } else {
        return {
          success: false,
          message: "Failed to send message. Please try again.",
        };
      }
    } catch (error) {
      console.error("Error:", error);
      return {
        success: false,
        message: "An error occurred. Please try again.",
      };
    }
  };

  return {
    sendContactForm,
  };
};

export default useContact;
