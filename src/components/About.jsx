import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode, FiServer, FiLayers, FiAward, FiExternalLink, FiCpu, FiGitBranch,
} from "react-icons/fi";
import { SiSpringboot, SiPostgresql, SiDocker, SiJenkins } from "react-icons/si";
import { fadeUp, fadeLeft, staggerContainer, staggerItem } from "../utils/animations";
import myImage2 from "../assets/images/MyImage2.jpg";

const stats = [
  { icon: FiServer,    label: "Backend Focus",  value: "Java",  color: "#06b6d4" },
  { icon: FiLayers,    label: "Technologies",   value: "15+",   color: "#8b5cf6" },
  { icon: FiCpu,       label: "Domain",         value: "OSS",   color: "#ec4899" },
  { icon: FiAward,     label: "CGPA (MCA)",     value: "8.5",   color: "#f59e0b" },
];

const highlights = [
  {
    label: "Enterprise Backend",
    desc: "Designing and maintaining scalable microservices with Spring Boot & JDK 21 at BT Group.",
  },
  {
    label: "Polyglot Data",
    desc: "PostgreSQL for relational workloads and Neo4j graph database for complex network topology data.",
  },
  {
    label: "Observability & CI/CD",
    desc: "Dynatrace for APM, Jenkins & Spinnaker for pipelines, Docker & Headlamp for containerised deployments.",
  },
];

const techStack = [
  { icon: SiSpringboot, label: "Spring Boot", color: "#6db33f" },
  { icon: SiPostgresql, label: "PostgreSQL",  color: "#4479a1" },
  { icon: SiDocker,     label: "Docker",      color: "#2496ed" },
  { icon: SiJenkins,    label: "Jenkins",     color: "#d24939" },
  { icon: FiGitBranch,  label: "Git",         color: "#f05032" },
  { icon: FiCode,       label: "Neo4j",       color: "#008cc1" },
];

const googleDriveLink =
  "https://drive.google.com/file/d/1c_65juJuuz6qaQy-rdqbNR3eraP9RG58/view?usp=sharing";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="relative py-24 overflow-hidden aurora-bg">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-72 h-72 opacity-10"
          style={{ background: "#8b5cf6", bottom: "5%", right: "10%", animationDelay: "2s" }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── Section header ──────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4 inline-block">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Profile image ───────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative flex justify-center"
          >
            <div className="relative w-72 md:w-96">
              {/* Rotating conic glow */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl opacity-20"
                style={{
                  background:
                    "conic-gradient(from 0deg, #06b6d4, transparent 60%, #8b5cf6, transparent)",
                  filter: "blur(8px)",
                }}
              />

              <div className="glass-card rounded-3xl p-3 relative z-10">
                <img
                  src={myImage2}
                  alt="Sachin Kumar"
                  className="w-full rounded-2xl object-cover object-top"
                  style={{ maxHeight: "380px" }}
                />
              </div>

              {/* Experience badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute -bottom-5 -right-5 glass-card rounded-2xl p-4 text-center"
                style={{ minWidth: "130px" }}
              >
                <div className="text-xl font-bold gradient-text-cyan">BT Group</div>
                <div className="text-xs text-gray-400 mt-0.5">Assoc. SWE</div>
              </motion.div>

              {/* Location / status badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.7, type: "spring" }}
                className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-2 flex items-center gap-2"
              >
                <div className="available-dot" />
                <span className="text-xs text-gray-300">Bangalore, India</span>
              </motion.div>

              {/* Tech mini-pills row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2"
              >
                {techStack.map(({ icon: Icon, label, color }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4, scale: 1.05 }}
                    className="glass flex items-center gap-2 rounded-xl px-3 py-1.5"
                  >
                    <Icon size={13} style={{ color }} />
                    <span className="text-xs text-gray-300">{label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ── Right: Bio text ───────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Role title */}
            <motion.div variants={staggerItem} className="mb-2">
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.2)",
                  color: "#06b6d4",
                }}
              >
                Associate Software Engineer · BT Group
              </span>
            </motion.div>

            <motion.h3
              variants={staggerItem}
              className="text-2xl md:text-3xl font-bold text-white mt-3 mb-5"
            >
              Java Backend Developer &amp;{" "}
              <span className="gradient-text">Networking OSS Specialist</span>
            </motion.h3>

            {/* Main bio — 200-word ATS-friendly paragraph */}
            <motion.p
              variants={staggerItem}
              className="text-gray-400 leading-relaxed mb-4 text-[0.95rem]"
            >
              I'm <span className="text-white font-medium">Sachin Kumar</span>, a Java Backend
              Developer and MCA graduate from Dayananda Sagar College of Engineering. I currently
              work as an <span className="text-cyan-400 font-medium">Associate Software Engineer
              at BT Group</span> in the Networking OSS domain, where I design, develop, and
              maintain production-grade backend services using{" "}
              <span className="text-white">Java, Spring Boot, and JDK 21</span>.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-gray-400 leading-relaxed mb-6 text-[0.95rem]"
            >
              My work involves building reliable microservices with RESTful APIs, integrating{" "}
              <span className="text-white">PostgreSQL</span> and{" "}
              <span className="text-white">Neo4j graph databases</span> for complex network data,
              and improving application performance through{" "}
              <span className="text-white">Dynatrace</span> observability. I support end-to-end
              delivery using <span className="text-white">Jenkins, Spinnaker, Docker,</span> and{" "}
              <span className="text-white">Headlamp</span> within Agile teams — from development
              and testing through to deployment and monitoring.
            </motion.p>

            {/* Highlight cards */}
            <motion.div variants={staggerContainer} className="space-y-3 mb-8">
              {highlights.map(({ label, desc }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  className="flex items-start gap-3 glass-card rounded-xl p-3"
                >
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-white">{label} — </span>
                    <span className="text-sm text-gray-400">{desc}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(googleDriveLink, "_blank")}
              className="btn-primary"
            >
              <FiExternalLink size={16} />
              <span>View Resume</span>
            </motion.button>
          </motion.div>
        </div>

        {/* ── Stats row ─────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20"
        >
          {stats.map(({ icon: Icon, label, value, color }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div
                className="text-2xl font-bold mb-1 leading-tight"
                style={{ color }}
              >
                {value}
              </div>
              <div className="text-sm text-gray-400">{label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;
