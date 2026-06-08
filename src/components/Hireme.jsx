import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import hireMe from "../assets/images/hireMe.png";

const Hireme = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="hireme" className="relative py-24 overflow-hidden aurora-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="glass-card rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden"
        >
          {/* bg accent */}
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              background: "radial-gradient(ellipse at top left, #06b6d4, transparent 60%)",
            }}
          />

          <div className="relative z-10 flex-1">
            <span className="section-badge mb-4 inline-block">Open to Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
              I'm open to full-time roles, freelance projects, and exciting collaborations.
              If you have a project in mind or a position that aligns with my skills, reach out —
              let's make it happen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary"
                >
                  <FiMail size={16} />
                  <span>Say Hello</span>
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1c_65juJuuz6qaQy-rdqbNR3eraP9RG58/view?usp=sharing",
                    "_blank"
                  )
                }
                className="btn-outline"
              >
                <span>View Resume</span>
                <FiArrowRight size={16} />
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex-shrink-0 hidden lg:block"
          >
            <img
              src={hireMe}
              alt="Hire me"
              className="h-64 object-contain"
              style={{ filter: "drop-shadow(0 8px 32px rgba(6,182,212,0.3))" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hireme;
