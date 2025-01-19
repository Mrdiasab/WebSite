import React from "react";
import "./Main.css";
import AnimatedPage from '../AnimatedPage';
import { motion } from "framer-motion";

const Main = () => {
  return (
    <AnimatedPage>
      <main className="main-section">
        <div className="main-content">
          <motion.div
            className="profile-container"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="image-wrapper">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png"
                alt=""
                className="main-img"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="glow-effect"></div>
              <div className="sparkle-effect"></div>
            </div>
          </motion.div>
          <motion.h1
            className="main-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I'm <motion.span
              className="highlight"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mrdiasab
            </motion.span>
          </motion.h1>
          <motion.p
            className="main-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A passionate <motion.span
              className="highlight"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Web Developer
            </motion.span> and
            <motion.span
              className="highlight"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Problem Solver
            </motion.span> crafting modern web experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.a
              href="/projects"
              className="main-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
              <span className="button-arrow">→</span>
            </motion.a>
          </motion.div>
          <div className="background-shapes">
            <motion.div
              className="shape shape-1"
              animate={{
                y: [0, 30, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="shape shape-2"
              animate={{
                x: [0, 30, 0],
                rotate: [0, -360]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="shape shape-3"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Main;