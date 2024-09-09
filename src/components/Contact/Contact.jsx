import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "sachinmandal726@gmail.com" },
    { logo: "call-outline", text: "+91 8877363719" },
    { logo: "location", text: "Bangalore, India" },
  ];

  return (
    <section id="contact" className=" py-10 px-3 text-white bg-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold mb-3">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 text-lg">Get in touch</p>

        <div className="mt-16 flex flex-col md:flex-row gap-6 max-w-5xl bg-gray-800 md:p-8 p-4 rounded-lg mx-auto">
          <form className="flex flex-col flex-1 gap-5  p-6 rounded-lg bg-gray-900">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
            ></textarea>
            <button className="w-full py-3 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500 transition">
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-7">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
