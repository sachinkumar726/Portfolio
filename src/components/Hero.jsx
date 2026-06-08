import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiGithub, FiLinkedin, FiInstagram, FiTwitter,
  FiArrowDown, FiDownload, FiMail,
} from "react-icons/fi";
import { SiReact, SiSpringboot, SiAngular, SiJavascript, SiMysql } from "react-icons/si";
import myImage from "../assets/images/MyImage.jpg";
import Type from "./Type";

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sachinkumar726", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sachin-kumar-63799a271/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/sachin.m726/", label: "Instagram" },
  { icon: FiTwitter, href: "https://twitter.com/", label: "Twitter" },
];

const floatingTech = [
  { icon: SiReact, color: "#61dafb", label: "React", pos: { top: "10%", right: "5%" }, delay: 0 },
  { icon: SiSpringboot, color: "#6db33f", label: "Spring", pos: { top: "55%", right: "-2%" }, delay: 0.4 },
  { icon: SiAngular, color: "#dd0031", label: "Angular", pos: { bottom: "15%", right: "10%" }, delay: 0.8 },
  { icon: SiJavascript, color: "#f7df1e", label: "JS", pos: { top: "20%", left: "5%" }, delay: 0.2 },
  { icon: SiMysql, color: "#4479a1", label: "MySQL", pos: { bottom: "25%", left: "2%" }, delay: 0.6 },
];

// 3-D tilt card
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 10);
    rotateX.set(-dy * 10);
  };
  const handleLeave = () => { rotateX.set(0); rotateY.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gradX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const gradY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const googleDriveLink =
    "https://drive.google.com/file/d/1c_65juJuuz6qaQy-rdqbNR3eraP9RG58/view?usp=sharing";

  useEffect(() => {
    const move = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden aurora-bg"
      style={{ paddingTop: "80px" }}
    >
      {/* Mouse-following gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useTransform(
            [gradX, gradY],
            ([x, y]) =>
              `radial-gradient(600px at ${x}% ${y}%, rgba(6,182,212,0.07), transparent 60%)`
          ),
        }}
      />

      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-96 h-96 opacity-20"
          style={{ background: "#06b6d4", top: "-10%", left: "-5%", animationDelay: "0s" }}
        />
        <div
          className="blob absolute w-80 h-80 opacity-15"
          style={{ background: "#8b5cf6", bottom: "10%", right: "-5%", animationDelay: "3s" }}
        />
        <div
          className="blob absolute w-64 h-64 opacity-10"
          style={{ background: "#ec4899", top: "50%", left: "40%", animationDelay: "6s" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col-reverse md:flex-row items-center gap-12 py-12">
        {/* ── Left: Text ────────────────────────────── */}
        <div className="flex-1 text-center md:text-left">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="available-dot" />
            <span className="section-badge">Available for work</span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg font-medium mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-white">Sachin </span>
            <span className="gradient-text">Kumar</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-xl md:text-2xl text-gray-400 font-medium mb-6 h-8"
          >
            <Type />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-gray-400 max-w-lg text-base leading-relaxed mb-8"
          >
            Java Backend Developer building scalable microservices in the Networking OSS domain.
            Currently an{" "}
            <span className="text-cyan-400">Associate Software Engineer at BT Group</span>{" "}
            — Spring Boot · Neo4j · Dynatrace · Docker.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-10"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary"
              >
                <FiMail size={16} />
                <span>Contact Me</span>
              </motion.button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(googleDriveLink, "_blank")}
              className="btn-outline"
            >
              <FiDownload size={16} />
              <span>Get Resume</span>
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex gap-4 justify-center md:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors duration-200"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Profile Card ───────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="flex-1 flex items-center justify-center relative"
        >
          {/* Floating tech icons */}
          {floatingTech.map(({ icon: Icon, color, label, pos, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: delay + 0.8, type: "spring" }}
              className="absolute z-20 hidden lg:flex items-center gap-1.5 glass rounded-xl px-3 py-2"
              style={pos}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
              >
                <Icon size={18} color={color} />
              </motion.div>
              <span className="text-xs text-gray-300">{label}</span>
            </motion.div>
          ))}

          <TiltCard>
            {/* Glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-3xl opacity-40 z-0"
              style={{
                background: "conic-gradient(from 0deg, #06b6d4, #8b5cf6, #ec4899, #06b6d4)",
                filter: "blur(16px)",
              }}
            />

            {/* Glass card */}
            <div className="relative z-10 glass-card rounded-3xl p-3 w-64 md:w-80">
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={myImage}
                  alt="Sachin Kumar"
                  className="w-full h-full object-cover object-top"
                  style={{ transform: "translateZ(20px)" }}
                />
                {/* Overlay shimmer */}
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(6,182,212,0.08) 0%, transparent 50%, rgba(139,92,246,0.08) 100%)",
                  }}
                />
              </div>

              {/* Stats row inside card */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  { label: "Projects", value: "5+" },
                  { label: "Experience", value: "1 yr" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="text-center py-2 rounded-xl"
                    style={{
                      background: "rgba(6,182,212,0.06)",
                      border: "1px solid rgba(6,182,212,0.12)",
                    }}
                  >
                    <div className="text-lg font-bold gradient-text-cyan">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs"
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-gray-700 flex items-center justify-center"
        >
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
