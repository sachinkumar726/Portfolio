import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX } from "react-icons/fi";

const phoneNumber = "918877363719";
const message = "Hello Sachin, I'd like to connect with you!";
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const Bot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[998] flex flex-col items-end gap-3">
      {/* Tooltip card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card rounded-2xl p-5 w-60"
          >
            <p className="text-sm font-semibold text-white mb-1">Hey there! 👋</p>
            <p className="text-xs text-gray-400 mb-4">
              Want to collaborate or just chat? Hit me up on WhatsApp!
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
              >
                Open WhatsApp
              </motion.button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-2xl relative"
        style={{
          background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
          boxShadow: "0 4px 24px rgba(6,182,212,0.4)",
        }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageSquare size={22} />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Ping ring */}
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "rgba(6,182,212,0.3)",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default Bot;
