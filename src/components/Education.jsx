import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCalendar, FiAward, FiBook } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../utils/animations";

const educationData = [
  {
    degree: "Master of Computer Application",
    institution: "Dayananda Sagar College of Engineering",
    location: "Bangalore, India",
    grade: "CGPA: 8.5",
    year: "2022 – 2024",
    icon: FiAward,
    color: "#06b6d4",
    desc: "Completed 4 semesters with a focus on software engineering, data structures, and full-stack development. Graduated with distinction.",
    highlights: ["Full-Stack Development", "Software Engineering", "Data Structures & Algorithms"],
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "St. Columba's College",
    location: "Hazaribagh, India",
    grade: "CGPA: 7.63",
    year: "2019 – 2022",
    icon: FiBook,
    color: "#8b5cf6",
    desc: "Completed 6 semesters covering core computer science fundamentals, programming, databases, and web technologies.",
    highlights: ["Core CS Fundamentals", "Web Technologies", "Database Management"],
  },
];

const TimelineItem = ({ edu, index, inView }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="md:w-5/12 w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02, y: -4 }}
          className="glass-card rounded-2xl p-6 relative"
          style={{ borderColor: `${edu.color}30` }}
        >
          {/* Color accent bar */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
            style={{ background: `linear-gradient(180deg, ${edu.color}, transparent)` }}
          />

          <div className="flex items-start justify-between gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${edu.color}15`, border: `1px solid ${edu.color}30` }}
            >
              <edu.icon size={18} style={{ color: edu.color }} />
            </div>
            <div
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{ background: `${edu.color}10`, color: edu.color, border: `1px solid ${edu.color}20` }}
            >
              <FiCalendar size={11} />
              {edu.year}
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
          <p className="text-sm text-gray-400 mb-1">{edu.institution}</p>
          <p className="text-xs text-gray-500 mb-3">{edu.location}</p>

          <div
            className="inline-block text-sm font-semibold px-3 py-1 rounded-lg mb-3"
            style={{ background: `${edu.color}12`, color: edu.color }}
          >
            {edu.grade}
          </div>

          <p className="text-sm text-gray-400 leading-relaxed mb-4">{edu.desc}</p>

          <div className="flex flex-wrap gap-2">
            {edu.highlights.map((h) => (
              <span
                key={h}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#94a3b8",
                }}
              >
                {h}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Center dot — hidden on mobile */}
      <div className="hidden md:flex md:w-2/12 flex-col items-center relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 300 }}
          className="w-5 h-5 rounded-full z-10 relative"
          style={{
            background: edu.color,
            boxShadow: `0 0 20px ${edu.color}80`,
          }}
        />
        {index < educationData.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.6, ease: "easeOut" }}
            className="absolute top-5 w-0.5 h-full origin-top"
            style={{
              background: `linear-gradient(180deg, ${edu.color}, ${educationData[index + 1]?.color || "transparent"})`,
              opacity: 0.4,
            }}
          />
        )}
      </div>

      {/* Empty spacer on opposite side */}
      <div className="hidden md:block md:w-5/12" />
    </div>
  );
};

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="education" className="relative py-24 overflow-hidden aurora-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-80 h-80 opacity-10"
          style={{ background: "#06b6d4", top: "10%", right: "-5%", animationDelay: "0s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">Academic Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            The academic foundation that shaped my technical expertise.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <TimelineItem key={edu.degree} edu={edu} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
