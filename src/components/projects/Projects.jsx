import React from "react";
import AnimatedPage from '../AnimatedPage';
import { motion } from "framer-motion";
import "./Project.css";

const Projects = () => {
  const projects = [
    {
      title: "Swiper BWCAIMT",
      description: "The interface displays a prominent image of Captain America with his name displayed in bold text. There are navigation tabs at the bottom for switching between characters like 'Black Widow,' 'Captain America,' 'Iron Man' and 'Thor'",
      image: "https://i.ibb.co/7Kq4TrS/2025-01-19-162309.png" ,
      technologies: ["HTML", "JavaScript", "CSS"],
      demoLink: "https://mrdiasab.github.io/Swiper/",
      githubLink: "https://github.com/Mrdiasab/Swiper"
    },
    {
      title: "WebSlider",
      description: "This is another Swiper.js design example featuring a visually striking presentation. The slide showcases an Asiatic Lion, with a focus on simplicity and storytelling. Key elements include Main Content: Species Name: 'Asiatic Lion' is prominently.",
      image: "https://i.ibb.co/gg5Dq3b/2025-01-19-162952.png",
      technologies: ["HTML", "JavaScript", "CSS"],
      demoLink: "https://mrdiasab.github.io/WebSlider/",
      githubLink: "https://github.com/Mrdiasab/WebSlider"
    },
    {
      title: "Climate",
      description: "This interface represents a modern, circular smart home control system with a visually appealing winter-themed display. The top section features an animated winter landscape under a night sky, likely reflecting the outdoor conditions.",
      image: "https://i.ibb.co/4S54V9M/2025-01-19-163833.png",
      technologies: ["HTML", "JavaScript", "CSS"],
      demoLink: "https://mrdiasab.github.io/Climate/",
      githubLink: "https://github.com/Mrdiasab/Climate"
    },
    {
      title: "Cylinders Animation",
      description: "An interactive and modern Animation featuring a sleek, user-friendly interface. The design includes dynamic elements, such as smooth transitions. Users can swiping the screen and enjoying the animation, view detailed descriptions, and interact with the platform seamlessly.",
      image: "https://i.ibb.co/g39nqV1/2025-01-17-210452.png",
      technologies: ["HTML", "JavaScript", "CSS"],
      demoLink: "https://mrdiasab.github.io/Store/",
      githubLink: "https://github.com/Mrdiasab/Store"
    },
    {
      title: "Animated Buttons",
      description: "interactive UI element that responds to user actions with dynamic visual effects such as smooth transitions, hover animations, or click feedback. Common animations include color changes, scaling, shadow effects, or icon motion, making the button visually appealing and improving user experience.",
      image: "https://i.ibb.co/gvWMRTH/2025-01-18-145222.png",
      technologies: ["HTML", "JavaScript", "CSS"],
      demoLink: "https://mrdiasab.github.io/animatedocto/",
      githubLink: "https://github.com/Mrdiasab/animatedocto"
    },
    {
      title: "Registration",
    description: "This is a visually appealing login page with a dynamic background. The page features a gradient color scheme that transitions smoothly, adding a modern and engaging feel.The circular outline surrounding the form is animated with flowing line effects, creating a subtle but captivating special effect.",
    image: "https://i.ibb.co/F50h0kC/2025-01-18-163903.png",
    technologies: ["HTML", "JavaScript", "CSS"],
    demoLink: "https://mrdiasab.github.io/MySite/",
    githubLink: "https://github.com/Mrdiasab/MySite"
    }
  ];

  return (
    <AnimatedPage>
      <section className="projects-section" id="projects">
        <div className="projects-content">
          <motion.h1
            className="projects-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="highlight">Projects</span>
          </motion.h1>
          <motion.p
            className="projects-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of my recent works that showcase my skills and experience
          </motion.p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="project-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.demoLink}
                    className="project-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="project-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
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

export default Projects;