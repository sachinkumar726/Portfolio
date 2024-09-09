import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: 'Master of Computer Application',
      institution: 'Dayananda Sagar College of Engineering, Bangalore',
      grades: 'CGPA: 8.5',
      year: '2022-2024',
      desc: "I am currently pursuing a Master's Degree in Computer Application at Dayananda Sagar College of Engineering. I have completed 4 semesters and have a CGPA of 8.50.",
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'St. Columba\'s College Hazaribagh',
      grades: 'CGPA: 7.63',
      year: '2019-2022',
      desc: "I have successfully completed my Bachelor's Degree in Computer Application at St. Columba's College Hazaribagh. I have completed 6 semesters and have a CGPA of 7.63.",
    },
  ];

  return (
    <section id="education" className="py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-semibold">
            <span className="text-cyan-600">Education</span>
          </h3>
          <p className="text-gray-400 mt-3 text-lg">My academic journey</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationDetails.map((edu, index) => (
            <div
              key={index}
              className="border-2 border-cyan-600 p-6 rounded-lg bg-gray-900 relative mx-4"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center mr-4">
                  <ion-icon name="school-outline" size="large" class="text-white"></ion-icon>
                </div>
                <div className="text-left">
                  <p className="text-xl text-cyan-500 font-bold">{edu.degree}</p>
                  <p className="text-gray-400">{edu.institution}</p>
                  <p className="text-gray-400">{edu.grades}</p>
                  <p className="text-gray-400">{edu.year}</p>
                </div>
              </div>
              <p className="text-gray-300">{edu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
