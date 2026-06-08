import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";
import { SiReact, SiJavascript, SiHtml5 } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import projectOne from "../assets/images/Project1.png";
import projectTwo from "../assets/images/Project2.png";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

const projects = [
  {
    img: projectOne,
    name: "The Big Show",
    subtitle: "Movie Streaming Platform",
    description:
      "A full-featured movie streaming web application with search, categories, and dynamic content loading. Designed with a sleek dark UI and smooth UX.",
    github: "https://github.com/sachinkumar726/THE_BIG_SHOW",
    live: "https://the-big-show.vercel.app/",
    tech: [
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
    ],
    gradient: "from-cyan-500/20 to-blue-600/20",
    accentColor: "#06b6d4",
  },
  {
    img: projectTwo,
    name: "Todo List",
    subtitle: "Productivity App",
    description:
      "A clean, minimal Todo application featuring task creation, completion tracking, and local persistence. Built with a responsive design for any device.",
    github: "https://github.com/sachinkumar726/Todo_List",
    live: "https://todo-list-dun-psi.vercel.app/",
    tech: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    ],
    gradient: "from-purple-500/20 to-pink-600/20",
    accentColor: "#8b5cf6",
  },
];

// Tilt card with 3D mouse tracking
const TiltProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 25 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rotateY.set(((e.clientX - cx) / (rect.width / 2)) * 8);
    rotateX.set(-((e.clientY - cy) / (rect.height / 2)) * 8);
  };

  const handleLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
      className="relative group"
    >
      <div
        className="relative overflow-hidden rounded-2xl transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: `1px solid ${hovered ? project.accentColor + "50" : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${project.accentColor}20`
            : "0 8px 32px rgba(0,0,0,0.4)",
          backdropFilter: "blur(20px)",
          transform: "translateZ(0)",
          transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Image area */}
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={project.img}
            alt={project.name}
            animate={{ scale: hovered ? 1.07 : 1 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full object-cover"
          />
          {/* gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background: `linear-gradient(180deg, transparent 40%, rgba(5,5,16,0.9) 100%)`,
              opacity: hovered ? 0.9 : 0.6,
            }}
          />
          {/* Hover action buttons */}
          <div
            className="absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300"
            style={{ opacity: hovered ? 1 : 0 }}
          >
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center text-white"
              style={{ background: "rgba(0,0,0,0.6)", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
              style={{ background: project.accentColor, boxShadow: `0 4px 16px ${project.accentColor}60` }}
            >
              <FiExternalLink size={20} />
            </motion.a>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6">
          {/* Category */}
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-2 block"
            style={{ color: project.accentColor }}
          >
            {project.subtitle}
          </span>

          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: `${color}12`,
                  border: `1px solid ${color}25`,
                  color: color,
                }}
              >
                <Icon size={12} />
                {name}
              </div>
            ))}
          </div>

          {/* Bottom links */}
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              <FiGithub size={14} /> Code
            </a>
            <div className="w-1 h-1 rounded-full bg-gray-600" />
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: project.accentColor }}
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" className="relative py-24 overflow-hidden aurora-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-96 h-96 opacity-10"
          style={{ background: "#ec4899", top: "5%", left: "-5%", animationDelay: "1s" }}
        />
        <div
          className="blob absolute w-72 h-72 opacity-10"
          style={{ background: "#06b6d4", bottom: "15%", right: "-5%", animationDelay: "5s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">What I've Built</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Real-world applications built with modern technologies and attention to detail.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={staggerItem}>
              <TiltProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sachinkumar726"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline inline-flex"
            >
              <FiGithub size={16} />
              <span>More on GitHub</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
