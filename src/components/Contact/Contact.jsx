import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { fadeUp, fadeLeft, fadeRight } from "../../utils/animations";

const contactDetails = [
  {
    icon: FiMail,
    label: "Email",
    value: "sachinmandal726@gmail.com",
    href: "mailto:sachinmandal726@gmail.com",
    color: "#06b6d4",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 88773 63719",
    href: "tel:+918877363719",
    color: "#8b5cf6",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "#",
    color: "#ec4899",
  },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/sachinkumar726", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/sachin-kumar-63799a271/", label: "LinkedIn" },
];

const FloatingLabel = ({ id, label, type = "text", isTextarea = false }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  const Tag = isTextarea ? "textarea" : "input";

  return (
    <div className="relative">
      <Tag
        id={id}
        type={!isTextarea ? type : undefined}
        rows={isTextarea ? 5 : undefined}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full pt-6 pb-3 px-4 rounded-xl text-sm text-white resize-none"
        style={{
          background: active ? "rgba(6,182,212,0.04)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${active ? "rgba(6,182,212,0.5)" : "rgba(255,255,255,0.07)"}`,
          outline: "none",
          transition: "all 0.3s ease",
          boxShadow: focused ? "0 0 0 3px rgba(6,182,212,0.08)" : "none",
        }}
      />
      <label
        htmlFor={id}
        className="absolute pointer-events-none transition-all duration-200 text-sm"
        style={{
          left: "16px",
          top: isTextarea
            ? active ? "8px" : "16px"
            : active ? "8px" : "50%",
          transform: (!isTextarea && !active) ? "translateY(-50%)" : "none",
          fontSize: active ? "10px" : "14px",
          color: active ? "rgba(6,182,212,0.8)" : "rgba(148,163,184,0.7)",
          fontWeight: active ? "600" : "400",
          letterSpacing: active ? "0.08em" : "0",
          textTransform: active ? "uppercase" : "none",
        }}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden aurora-bg">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="blob absolute w-96 h-96 opacity-10"
          style={{ background: "#8b5cf6", bottom: "0%", left: "-10%", animationDelay: "2s" }}
        />
        <div
          className="blob absolute w-72 h-72 opacity-10"
          style={{ background: "#06b6d4", top: "10%", right: "5%", animationDelay: "6s" }}
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
          <span className="section-badge mb-4 inline-block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have an opportunity or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left info panel */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-gray-200 group-hover:text-white transition-colors">
                    {value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-3xl p-8">
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.4)" }}
                    >
                      <FiCheckCircle size={32} className="text-cyan-400" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm">I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FloatingLabel id="name" label="Your Name" />
                      <FloatingLabel id="email" label="Email Address" type="email" />
                    </div>
                    <FloatingLabel id="subject" label="Subject" />
                    <FloatingLabel id="message" label="Your Message" isTextarea />

                    <motion.button
                      type="submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-primary w-full justify-center py-4 text-base"
                    >
                      {sending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          />
                          <span>Sending…</span>
                        </>
                      ) : (
                        <>
                          <FiSend size={16} />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
