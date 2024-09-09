import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "SKILLS", link: "/skills" },
    { name: "PROJECTS", link: "/projects" },
    { name: "EDUCATION", link: "/education" },
    { name: "CONTACT", link: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-shadow duration-300 ${sticky ? "bg-gray-800 shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-8 lg:px-12">
        <div className="text-3xl font-bold text-cyan-600">
          <Link to='/'>
            <h4>
              S<span className="text-white">ac</span>h
              <span className="text-white">in</span>
            </h4>
          </Link>
        </div>
        <div
          className={`hidden md:flex items-center gap-6 ${sticky ? "bg-gray-900/80" : "bg-gray-900"
            } text-gray-100 px-7 py-2 rounded-full`}
        >
          <ul className="flex items-center gap-6 text-lg">
            {menuLinks.map((menu, i) => (
              <li key={i} className="relative group">
                <Link to={menu.link} className="hover:text-cyan-300 transition-colors duration-300">
                  {menu.name}
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`text-3xl md:hidden cursor-pointer z-[1000] ${open ? "text-gray-900" : "text-gray-100"
            }`}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div
          className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-gray-800 text-gray-100 px-4 py-6 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="w-full text-center hover:text-cyan-300 transition-colors duration-300"
              >
                <Link to={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
