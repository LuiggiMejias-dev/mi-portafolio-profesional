import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./projects.module.css";
import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaPalette } from "react-icons/fa";
import { SiSpringboot, SiPostgresql, SiDocker, SiReact, SiBootstrap } from "react-icons/si";

// Componente pequeño para el Tooltip
const Tooltip = ({ text }) => (
  <motion.div 
    className={styles.tooltip}
    initial={{ opacity: 0, y: 10, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.8 }}
  >
    {text}
  </motion.div>
);

const projectsData = [
  {
    title: "Proyecto Ecommerce - AmericanRoss",
    description: "Solución integral de comercio electrónico que permite gestionar el catálogo y pedidos en un entorno seguro. Implementé interfaces dinámicas y responsivas, además de la lógica de negocio en el backend con Spring Boot.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "Bootstrap"],
    techIcons: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiDocker />, name: "Docker" }
    ],
    mainIcon: <FaShoppingCart />,
    link: "#" 
  },
  {
    title: "Practicante de Diseño Web (UI) - Devdatep",
    description: "Diseño y optimización de interfaces web aplicadas a soluciones digitales. Creación de componentes visuales, asegurando la consistencia en estilos, tipografías y colores bajo principios de usabilidad.",
    tags: ["UI/UX Design", "Component Management", "Usability"],
    techIcons: [
      { icon: <FaPalette />, name: "UI Design" },
      { icon: <SiReact />, name: "Componentes" },
      { icon: <SiBootstrap />, name: "Layouts" }
    ],
    mainIcon: <FaPalette />,
    link: "#"
  }
];

export default function Projects() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <section id="projects" className={styles.projectsSection}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Experiencia y Proyectos</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, pIndex) => (
            <motion.div 
              key={pIndex}
              className={styles.card}
              whileHover={{ y: -10 }}
            >
              <div className={styles.iconBox}>{project.mainIcon}</div>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              
              {/* Contenedor de Iconos con Tooltips */}
              <div className={styles.techIconRow}>
                {project.techIcons.map((item, iIndex) => (
                  <div 
                    key={iIndex} 
                    className={styles.iconWrapper}
                    onMouseEnter={() => setHoveredIcon(`${pIndex}-${iIndex}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    {item.icon}
                    <AnimatePresence>
                      {hoveredIcon === `${pIndex}-${iIndex}` && <Tooltip text={item.name} />}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <a href={project.link} className={styles.iconLink} title="GitHub"><FaGithub /></a>
                <a href={project.link} className={styles.iconLink} title="Demo"><FaExternalLinkAlt /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}