import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiHtml5, SiBootstrap, SiJavascript,
  SiAngular, SiMysql, SiSpringboot, SiReact, SiGithub, SiNodedotjs,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa";
import { staggerContainer, staggerItem, fadeUp } from "../utils/animations";

const skillCategories = [
  {
    title: "Frontend",
    color: "#06b6d4",
    skills: [
      { name: "Angular", icon: SiAngular, level: 85, color: "#dd0031" },
      { name: "React", icon: SiReact, level: 75, color: "#61dafb" },
      { name: "JavaScript", icon: SiJavascript, level: 88, color: "#f7df1e" },
      { name: "HTML5", icon: SiHtml5, level: 95, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572b6" },
      { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952b3" },
    ],
  },
  {
    title: "Backend & DB",
    color: "#8b5cf6",
    skills: [
      { name: "Spring Boot", icon: SiSpringboot, level: 70, color: "#6db33f" },
      { name: "Java", icon: FaJava, level: 80, color: "#f89820" },
      { name: "Node.js", icon: SiNodedotjs, level: 65, color: "#339933" },
      { name: "MySQL", icon: SiMysql, level: 78, color: "#4479a1" },
    ],
  },
  {
    title: "Tools",
    color: "#ec4899",
    skills: [
      { name: "GitHub", icon: SiGithub, level: 90, color: "#fff" },
    ],
  },
];

const SkillBar = ({ name, icon: Icon, level, color, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="glass-card rounded-2xl p-4 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon size={18} style={{ color }} />
          </div>
          <span className="text-sm font-medium text-gray-200">{name}</span>
        </div>
        <span className="text-xs font-semibold text-gray-400">{level}%</span>
      </div>

      {/* Progress bar track */}
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}, rgba(139,92,246,0.8))`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="relative py-24 overflow-hidden aurora-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-96 h-96 opacity-10"
          style={{ background: "#06b6d4", top: "20%", right: "-10%", animationDelay: "0s" }}
        />
        <div
          className="blob absolute w-72 h-72 opacity-10"
          style={{ background: "#8b5cf6", bottom: "10%", left: "-5%", animationDelay: "4s" }}
        />
      </div>

      <div ref={titleRef} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">What I Know</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Technologies I work with to build modern, scalable applications.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-12">
          {skillCategories.map(({ title, color, skills }) => (
            <div key={title}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-6"
              >
                <div
                  className="w-1.5 h-6 rounded-full"
                  style={{ background: color }}
                />
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <div
                  className="flex-1 h-px opacity-20"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating icon cloud — decorative */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[SiReact, SiAngular, SiJavascript, SiSpringboot, FaJava, SiMysql, SiHtml5, FaCss3Alt, SiNodedotjs].map(
            (Icon, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                whileHover={{ scale: 1.3 }}
                className="glass w-14 h-14 rounded-xl flex items-center justify-center"
              >
                <Icon size={22} className="text-gray-400" />
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
