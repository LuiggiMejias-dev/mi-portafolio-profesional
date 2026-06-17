import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styles from "./projects.module.css";
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaShoppingCart, 
  FaPalette, 
  FaLeaf,
  FaChartBar,
  FaDumbbell,
  FaUtensils 
} from "react-icons/fa";
import { 
  SiSpringboot, 
  SiPostgresql, 
  SiDocker, 
  SiReact, 
  SiBootstrap, 
  SiTailwindcss, 
  SiVercel, 
  SiFigma,
  SiVite 
} from "react-icons/si";

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
    title: "FullSabor – App de Gestión Gastronómica",
    description: "Plataforma web enfocada en la experiencia del usuario para el sector gastronómico, diseñada con una estética limpia y minimalista. Desarrollé una interfaz interactiva optimizada para el rendimiento utilizando React 19 y Vite 8, integrando componentes modulares que facilitan la gestión de pedidos.",
    tags: ["React", "Tailwind CSS", "Vite", "Vercel"],
    techIcons: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiVercel />, name: "Vercel" }
    ],
    mainIcon: <FaUtensils />, 
    github: "https://github.com/LuiggiMejias-dev/FullSabor",
    demo: "https://full-sabor.vercel.app/"
  },
  {
    title: "FitZone – Nutrición y Rendimiento",
    description: "Plataforma web interactiva para un centro de entrenamiento y gimnasio premium. Diseñé una interfaz moderna con un módulo de productos integrado, el cual incluye un flujo de compra optimizado mediante modales, lógica de descuentos en tiempo real y pedidos directos por WhatsApp.",
    tags: ["React (Vite)", "CSS Modules", "Dynamic Logic", "Vercel"],
    techIcons: [
      { icon: <SiReact />, name: "React (Vite)" },
      { icon: <FaShoppingCart />, name: "CSS Modules" },
      { icon: <SiVercel />, name: "Vercel" }
    ],
    mainIcon: <FaDumbbell />, 
    github: "https://github.com/LuiggiMejias-dev/Gimnasio",
    demo: "https://gimnasio-fitzone.vercel.app/"
  },
  {
    title: "Sistema POS – MiniMarket",
    description: "Desarrollé un sistema POS (Punto de Venta) para la gestión automatizada de un minimarket. Implementé un motor de transacciones en tiempo real, control de inventarios con alertas inteligentes y un dashboard analítico para la toma de decisiones.",
    tags: ["React", "Tailwind CSS", "Recharts", "Vercel"],
    techIcons: [
      { icon: <SiReact />, name: "React.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <FaChartBar />, name: "Recharts" },
      { icon: <SiVercel />, name: "Vercel" }
    ],
    mainIcon: <FaChartBar />, 
    github: "https://github.com/LuiggiMejias-dev/Minimarket",
    demo: "https://minimarket-dev.vercel.app/" 
  },
  {
    title: "Vitta – Salud y Bienestar",
    description: "Ecosistema digital de salud desarrollado con un stack moderno enfocado en la escalabilidad. Implementé una lógica de componentes reutilizables y un módulo de reservas interactivo en tiempo real, logrando una interfaz tecnológica de baja latencia.",
    tags: ["React", "Tailwind CSS v4", "Vercel", "UX/UI"],
    techIcons: [
      { icon: <SiReact />, name: "React (Vite)" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS v4" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiFigma />, name: "Figma" }
    ],
    mainIcon: <FaLeaf />, 
    github: "https://github.com/LuiggiMejias-dev/Vitta", 
    demo: "https://vitta-salud-y-bienestar.vercel.app/" 
  },
  {
    title: "Ecommerce - AmericanRoss",
    description: "Solución integral de comercio electrónico para gestión de catálogos y pedidos. Implementé interfaces responsivas y la lógica de negocio en el backend, asegurando un entorno escalable y seguro.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "Bootstrap"],
    techIcons: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiDocker />, name: "Docker" }
    ],
    mainIcon: <FaShoppingCart />,
    github: "#", 
    demo: "#" 
  },
  {
    title: "Diseño Web (UI) - Devdatep",
    description: "Diseñé e implementé interfaces digitales enfocadas en usabilidad y consistencia visual. Estructuré sistemas de diseño mediante componentes reutilizables, transformando requerimientos complejos en soluciones funcionales dentro de entornos de colaboración remota.",
    tags: ["UI/UX Design", "Component Management", "Usability"],
    techIcons: [
      { icon: <FaPalette />, name: "UI Design" },
      { icon: <SiReact />, name: "Componentes" },
      { icon: <SiBootstrap />, name: "Layouts" }
    ],
    mainIcon: <FaPalette />,
    github: "#",
    demo: "#"
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
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.iconLink} 
                  title="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={styles.iconLink} 
                  title="Demo en Vivo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}