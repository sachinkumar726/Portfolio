import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiInstagram, FiArrowUp, FiCode } from "react-icons/fi";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sachinkumar726", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sachin-kumar-63799a271/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/sachin.m726/", label: "Instagram" },
];

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Education", to: "/education" },
  { name: "Contact", to: "/contact" },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden">
      {/* top border glow */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), rgba(139,92,246,0.4), transparent)",
        }}
      />

      <div
        className="relative"
        style={{ background: "rgba(5,5,16,0.9)", backdropFilter: "blur(20px)" }}
      >
        {/* blob */}
        <div
          className="pointer-events-none absolute w-64 h-64 rounded-full opacity-5"
          style={{
            background: "#06b6d4",
            filter: "blur(80px)",
            top: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <Link to="/">
                <span className="text-2xl font-bold">
                  <span className="gradient-text-cyan">S</span>
                  <span className="text-white">achin</span>
                  <span className="gradient-text-cyan">.</span>
                </span>
              </Link>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed max-w-xs">
                Frontend Developer & Software Engineer crafting modern web experiences.
              </p>
              {/* Social */}
              <div className="flex gap-3 mt-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-500 hover:text-cyan-400 text-sm transition-colors duration-200 animated-underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote */}
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
                Philosophy
              </h4>
              <blockquote className="text-gray-500 text-sm leading-relaxed italic border-l-2 border-cyan-500/30 pl-4">
                "First, solve the problem. Then, write the code."
                <footer className="mt-2 text-gray-600 not-italic">— John Johnson</footer>
              </blockquote>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FiCode size={14} />
              <span>
                Built by{" "}
                <span className="text-cyan-500 font-medium">Sachin Kumar</span> · © {new Date().getFullYear()}
              </span>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Back to top"
            >
              <FiArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
