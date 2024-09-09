import React from "react";
const About = () => {
  const info = [
    // { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "05" },
    { text: "Companies Work", count: "01" }
  ];

 
  const googleDriveLink = "https://drive.google.com/file/d/1c_65juJuuz6qaQy-rdqbNR3eraP9RG58/view?usp=sharing";


  const navigateToResume = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
            <p className="text-justify leading-7 w-11/12 mx-auto">
  Hello, I'm Sachin Kumar, currently pursuing an MCA from Dayananda Sagar College of Engineering in Bangalore, India. I am a passionate web developer & Software Engineering with a strong foundation in crafting dynamic and user-friendly interfaces. My journey in web development has been enriched by hands-on experience in technologies like React, Angular, JavaScript, and Bootstrap, allowing me to blend creativity with technical expertise.
  <br />
  I am currently working as a Frontend Developer intern at Emerald City Technologies, where I've delved into  leveraged Bootstrap to create responsive and visually appealing designs. My experience also extends to server-side functionalities with Node.js, which has broadened my ability to contribute to full-stack projects.
  <br />
  In addition to Reactjs and Node.js, I am proficient in JavaScript, React.js, Bootstrap, and GitHub. My focus is on delivering exceptional user experiences through intuitive and scalable UI components, ensuring seamless navigation and optimal performance across various devices. I am dedicated to continuously improving my skills and adapting to diverse project requirements.
</p>

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <button className="btn-primary" onClick={navigateToResume}>Check Resume</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
