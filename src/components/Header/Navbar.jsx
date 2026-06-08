import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuLinks = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Education", link: "/education" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed w-full left-0 top-0 z-[999] transition-all duration-500 ${
          scrolled
            ? "py-2"
            : "py-4"
        }`}
      >
        {/* Glass pill */}
        <div
          className={`mx-auto max-w-6xl px-4 flex items-center justify-between transition-all duration-500 ${
            scrolled
              ? "glass rounded-2xl mx-4 md:mx-8 py-3 shadow-2xl"
              : "py-1"
          }`}
        >
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold select-none"
            >
              <span className="gradient-text-cyan">S</span>
              <span className="text-white">achin</span>
              <span className="gradient-text-cyan">.</span>
            </motion.div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {menuLinks.map((menu) => {
              const isActive = location.pathname === menu.link;
              return (
                <li key={menu.name}>
                  <Link to={menu.link}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 animated-underline ${
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {menu.name}
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-xl"
                          style={{
                            background: "rgba(6,182,212,0.1)",
                            border: "1px solid rgba(6,182,212,0.3)",
                          }}
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hire me CTA */}
          <div className="hidden md:block">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-sm py-2 px-5"
              >
                <span>Hire Me</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-[1001]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[997] md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-72 z-[998] md:hidden flex flex-col"
              style={{
                background: "rgba(10,10,20,0.95)",
                backdropFilter: "blur(24px)",
                borderLeft: "1px solid rgba(6,182,212,0.15)",
              }}
            >
              <div className="p-8 pt-20">
                <ul className="flex flex-col gap-2">
                  {menuLinks.map((menu, i) => {
                    const isActive = location.pathname === menu.link;
                    return (
                      <motion.li
                        key={menu.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                      >
                        <Link
                          to={menu.link}
                          className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ${
                            isActive
                              ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                              : "text-gray-300 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {menu.name}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
                <div className="mt-8">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    <button className="btn-primary w-full justify-center">
                      <span>Hire Me</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
