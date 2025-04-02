/* eslint-disable no-unused-vars */
import React from "react";
import tlmedic from "../assets/tlmedic.png";
import travel from "../assets/travel.png";
import tlshop from "../assets/rlshop.png";
import fccamp from "../assets/freecodecamp-certifies.png";
import jsbasic from "../assets/Javascript basic - hackerrank.png";
import reacthkr from "../assets/react-hackerrank.png";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
};

const Section = ({ id, title, children }) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeInVariants}
      className="w-full max-w-4xl mb-10"
    >
      <h2 className="text-3xl font-semibold text-center mb-4">{title}</h2>
      {children}
    </motion.section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-cyan-400 animate-pulse">
          Huynh Vo Tuan Linh
        </h1>
        <p className="text-gray-300 mt-2 text-lg">Frontend Developer</p>
      </header>

      {/* About Section */}
      <Section
        id="about"
        title="About Me"
        className="w-full max-w-4xl text-center mb-10"
      >
        <p className="text-gray-400 mt-2">
          I am a recent Information Technology graduate with a strong foundation
          in software development. I am eager to apply my knowledge in a
          practical environment, enhance my technical skills, and gain hands-on
          experience. My goal is to become a proficient software developer, and
          I am looking for an internship opportunity where I can contribute to a
          development team while continuously learning and improving. I am
          highly motivated, detail-oriented, and passionate about building
          efficient and user-friendly applications.
        </p>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <FaHtml5 size={40} className="text-orange-500 mb-2" />,
              title: "HTML",
            },
            {
              icon: <FaCss3Alt size={40} className="text-blue-500 mb-2" />,
              title: "CSS",
            },
            {
              icon: <FaJs size={40} className="text-yellow-500 mb-2" />,
              title: "JavaScript",
            },
            {
              icon: <FaReact size={40} className="text-blue-400 mb-2" />,
              title: "ReactJS",
            },
            {
              icon: <FaNodeJs size={40} className="text-green-500 mb-2" />,
              title: "NodeJS",
            },
            {
              icon: <FaDatabase size={40} className="text-yellow-600 mb-2" />,
              title: "Databases",
            },
            {
              icon: <FaGitAlt size={40} className="text-orange-400 mb-2" />,
              title: "Git/GitHub",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill.icon}
              <h3 className="text-xl font-semibold">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              img: tlmedic,
              title: "Medical Appointment Booking",
              description: [
                "Register/login",
                "Make an appointment",
                "Manage doctor appointment time",
                "Manage users",
                "Manage specialties",
              ],
              techStack: "ReactJS, Scss, NodeJS, Bootstrap, MySQL",
              github: "https://github.com/TuanLinh54/TL-Medic",
              live: "https://github.com/TuanLinh54/TL-Medic",
            },
            {
              img: travel,
              title: "Travel Booking - Landing Page",
              description: [
                "This is a mini project with a landing page.",
                "Responsive for other devices",
                "Animations",
              ],
              techStack: "ReactJS, CSS",
              github: "https://github.com/TuanLinh54/Travels-booking",
              live: "https://travels-booking-kappa.vercel.app/",
            },
            {
              img: tlshop,
              title: "TL Shop - E-commerce Web",
              description: [
                "Register/login",
                "Shop home",
                "Filter product by type and brand",
                "Shop features: cart, order, etc.",
                "Manage users",
                "Manage products",
                "Manage orders",
              ],
              techStack:
                "ReactJS, Vite, Tailwind CSS, NodeJS, MongoDB, Redux Toolkit, Shadcn UI",
              github: "https://github.com/TuanLinh54/TL-Shop",
              live: "https://tl-shop-fe.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={project.img}
                alt={`Project ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-400 mt-2">
                I can do the main functions such as:
                <ul className="list-disc list-inside">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </p>
              <p className="mt-2">Tech stack: {project.techStack}</p>
              <div className="flex items-center justify-center mt-4">
                <a
                  className="p-3 hover:text-cyan-400"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="p-3 hover:text-cyan-400"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Certificate Section */}
      <Section
        id="certificates"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          Certificates
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              img: fccamp,
              title: "Front End Development Libraries (Freecodecamp)",
              link: "https://www.freecodecamp.org/certification/HuynhVoTuanLinh/front-end-development-libraries",
            },
            {
              img: jsbasic,
              title: "Javascript Basic (HackerRank)",
              link: "https://www.hackerrank.com/certificates/242c2ef8accb",
            },
            {
              img: reacthkr,
              title: "Front End Developer - React (HackerRank)",
              link: "https://www.hackerrank.com/certificates/ff2564315adc",
            },
          ].map((certificate, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={certificate.img}
                alt={`Certificate ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <a
                className="text-gray-400 mt-2 text-lg font-semibold"
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {certificate.title}
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mb-10"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Contact</h2>
        <div className="flex flex-col items-center">
          <p className="text-gray-400 mb-2">Feel free to reach out to me!</p>
          <div className="flex space-x-6">
            <a
              href="mailto:tlinh020405@gmail.com"
              className="text-gray-400 hover:text-cyan-400"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tu%E1%BA%A5n-linh-hu%E1%BB%B3nh-v%C3%B5-726647290/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/huynhvo.tuanlinh.542/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://github.com/TuanLinh54"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-10 text-center text-gray-500">
        <p>&copy; 2025 Huynh Vo Tuan Linh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
