import React from "react";
import my2 from "../assets/images/MyImage.jpg";
import Type from "./Type";
import { Link } from "react-router-dom";

// Updated social media links
const socialMediaLinks = [
  "https://github.com/sachinkumar726",
  "https://www.linkedin.com/in/sachin-kumar-63799a271/",
  "https://www.instagram.com/sachin.m726/?next=%2F",
  "https://twitter.com/", // Add your Twitter URL
];

const Hero = () => {
  const socialMediaIcons = [
    "logo-github",
    "logo-linkedin",
    "logo-instagram",
    "logo-twitter",
  ];

  const googleDriveLink = "https://drive.google.com/file/d/1c_65juJuuz6qaQy-rdqbNR3eraP9RG58/view?usp=sharing";

  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center bg-gray-900 text-white mt-16 md:mt-0"
    >
      {/* Left side - Image */}
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={my2}
          alt="Sachin Kumar"
          className="w-3/4 sm:w-1/2 md:w-2/3 max-w-sm h-auto object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Right side - Text and Buttons */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="md:text-5xl text-4xl font-bold text-white">
          Hello, This is{" "}
          <span className="text-cyan-500">Sachin Kumar</span>
        </h1>
        <h2 className="text-2xl font-bold text-gray-200 mt-2">
          I'm a Professional Software Developer
        </h2>

        {/* Typewriter effect */}
        <h4 className="text-lg md:text-2xl text-gray-400 mt-4 font-semibold">
          <Type />
        </h4>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
          <Link to="/contact">
            <button className="btn-primary mb-4 md:mb-0">
              Contact Me
            </button>
          </Link>
          <button className="btn-primary" onClick={navigateToResume}>
            <ion-icon name="cloud-download-outline" size="small" className="text-white"></ion-icon>
            Get Resume
          </button>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex gap-6 justify-center md:justify-start">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={icon}
              href={socialMediaLinks[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl transition duration-300"
            >
              <ion-icon name={icon}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
