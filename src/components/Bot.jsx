import React from "react";

const Bot = () => {
  // Your WhatsApp phone number with country code
  const phoneNumber = "918877363719"; // +91 8877363719 without the '+' sign
  const message = "Hello, I need help!";

  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
    >
      <ion-icon name="chatbubble-ellipses"></ion-icon>
    </a>
  );
};

export default Bot;
