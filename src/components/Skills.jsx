import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Skills = () => {
  const skills = [
    { name: "C++", logo: "logo-cplusplus" },
    { name: "Python", logo: "logo-python" },
    { name: "HTML", logo:"logo-html5"},
    { name: "CSS", logo: "logo-css3" },
    { name: "Bootstrap", logo: "logo-bootstrap"},
    { name: "JavaScript", logo: "logo-javascript" },
    { name: "React", logo: "logo-react" },
    { name: "Tailwind", logo: "logo-tailwindcss" },
    { name: "Node.js", logo: "logo-node" },
    { name: "MySQL", logo: "logo-mysql" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-gray-900 py-10 px-4">
      <div className="text-gray-100 text-center">
        <h3 className="text-4xl font-semibold mb-12">
          <span className="text-cyan-600">Skills</span>
        </h3>
        <div className="relative w-full max-w-6xl mx-auto">
          <Slider {...settings}>
            {skills.map((skill, i) => (
              <div
                key={i}
                className="border-2 group border-cyan-600 bg-gray-900 p-4 rounded-xl flex flex-col items-center justify-center"
              >
                <ion-icon name={skill.logo} size="large" className="text-4xl md:text-6xl text-cyan-600"></ion-icon>
                <p className="text-lg md:text-xl mt-4">{skill.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Skills;
