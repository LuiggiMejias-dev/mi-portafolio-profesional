import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaLayerGroup, FaChartBar, FaEdit, FaUserCheck } from "react-icons/fa";
import styles from "./skills.module.css";

export default function Skills() {
  const skillGroups = [
    { title: "Desarrollo Web", icon: <FaLayerGroup />, skills: ["React", "Spring Boot", "Bootstrap"], color: "#3a86ff" },
    { title: "Lenguajes de Programación", icon: <FaCode />, skills: ["Java", "JS", "PHP"], color: "#3a86ff" },
    { title: "Gestión de Datos", icon: <FaDatabase />, skills: ["SQL", "MySQL", "PostgreSQL"], color: "#3a86ff" },
    { title: "Diseño y Modelado", icon: <FaEdit />, skills: ["Adobe Photoshop", "Autocad", "Figma"], color: "#3a86ff" },
    { title: "Visualización de Datos", icon: <FaChartBar />, skills: ["PowerBI", "Excel"], color: "#3a86ff" },
    { title: "Habilidades Blandas", icon: <FaUserCheck />, skills: ["Liderazgo y trabajo en equipo", "Comunicación asertiva", "Resolución de problemas", "Adaptabilidad"], color: "#00e5ff" },
  ];

  return (
    // CORRECCIÓN: ID limpio para el Navbar y clase CSS Modules para los estilos
    <section id="skills" className={styles.skillsMainSection}>
      <div className={styles.techOverlay}></div>
      
      <h2 className={styles.glitchTitle}>HABILIDADES</h2>

      <div className={styles.panelGrid}>
        {skillGroups.map((group, idx) => (
          <motion.div 
            key={idx} 
            className={styles.skillPanel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // CORRECCIÓN: Ajuste de viewport para que la animación dispare correctamente
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            style={{ "--panel-color": group.color }}
          >
            <div className={styles.panelHeader}>
              <span className={styles.panelIcon}>{group.icon}</span>
              <h3>{group.title}</h3>
            </div>
            
            <div className={styles.panelBody}>
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className={styles.skillLine}>
                  <span className={styles.decor}>::</span>
                  <span className={styles.skillText}>{skill}</span>
                </div>
              ))}
            </div>

            <div className={styles.cornerDecor}></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}