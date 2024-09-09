import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import projectOne from "../assets/images/Project1.png";
import projectTwo from "../assets/images/Project2.png";

import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: projectTwo,
      name: "Movie Streaming Web",
      github_link: "https://github.com/sachinkumar726/THE_BIG_SHOW",
      live_link: "https://the-big-show.vercel.app/",
    },
    {
      img: projectOne,
      name: "Todo_List",
      github_link: "https://todo-list-dun-psi.vercel.app/",
      live_link: "https://github.com/sachinkumar726/Todo_List",
    },
    //    {
    //   img: projectThree,
    //   name: "Currency converter",
    //   github_link: "",
    //  // live_link: "https://highking01.netlify.app",
    // },
    // {
    //   img: projectFour,
    //   name: "Quizzify",
    //   github_link:
    //     "https://github.com/aryyan0701/Quizzify",
    //   live_link: "https://quizzad.netlify.app/",
    // },
    // {
    //   img: projectSix,
    //   name: "Bloggify",
    //   github_link: "https://github.com/aryyan0701/Bloggify",
    //   live_link: "https://aryyan0701.github.io/Bloggify/",
    // },
    // {
    //   img: projectSeven,
    //   name: "Sandbox Clone",
    //   github_link: "https://github.com/aryyan0701/sandbox_clone",
    //  live_link: "https://aryyan0701.github.io/sandbox_clone/",
    // },
  ];
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-12/13 w-full h-full ">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
