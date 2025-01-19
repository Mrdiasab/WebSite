import React from "react";
import "./About.css";
import AnimatedPage from '../AnimatedPage';
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "📜" },
    { name: "Node.js", icon: "🟢" },
    { name: "HTML/CSS", icon: "🎨" },
    { name: "Git", icon: "📚" }
  ];

  const experiences = [
    {
      year: "2022-Present",
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      description: "Building responsive web applications using React and modern JavaScript."
    },
    {
      year: "2021-2022",
      title: "Web Developer Intern",
      company: "Digital Agency",
      description: "Worked on various client projects and improved coding skills."
    }
  ];

  return (
    <AnimatedPage>
      <section className="about-section">
        <div className="about-content">
          <motion.div
            className="about-header"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="about-title">
              About <span className="highlight">Me</span>
            </h1>
            <div className="about-image-container">
              <motion.img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png"
                alt="Profile"
                className="about-image"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="glow-effect"></div>
              <div className="sparkle-effect"></div>
              <div className="neon-effect"></div>
              <div className="magic-effect"></div>
              <div className="fire-effect"></div>
            </div>
            <p className="about-description">
              I'm a passionate web developer with a strong focus on creating elegant and efficient solutions.
              My journey in web development started with curiosity and has evolved into a professional career
              built on continuous learning and problem-solving.
            </p>
          </motion.div>
          <motion.div
            className="skills-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">
              Technical <span className="highlight">Skills</span>
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  className="skill-card"
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="experience-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">
              Professional <span className="highlight">Journey</span>
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  className="timeline-item"
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                    <p className="timeline-year">{exp.year}</p>
                    <p className="timeline-description">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
      </section>
    </AnimatedPage>
  );
};

export default About;