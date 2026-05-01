import styles from "./contacto.module.css";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contacto() {
  return (
    <section id="contact" className={styles.contacto}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>¿Hablamos de tecnología?</h2>
        <p className={styles.description}>
          Disponible para Gestión de Proyectos TI, Desarrollo Web y Procesos Tecnológicos.
        </p>

        <div className={styles.grid}>
          {/* Email */}
          <a href="mailto:lmejias@ejemplo.com" className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <span>Email</span>
            <p>luiggimc2112@gmail.com</p>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/luiggi-mejias" target="_blank" rel="noreferrer" className={styles.card}>
            <FaLinkedin className={styles.icon} />
            <span>LinkedIn</span>
            <p>Luiggi Mejias C.</p>
          </a>

          {/* GitHub */}
          <a href="https://github.com/LuiggiMejias-dev" target="_blank" rel="noreferrer" className={styles.card}>
            <FaGithub className={styles.icon} />
            <span>GitHub</span>
            <p>Proyectos y Código</p>
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/+51982889726" target="_blank" rel="noreferrer" className={styles.card}>
            <FaWhatsapp className={styles.icon} />
            <span>WhatsApp</span>
            <p>Chat Directo</p>
          </a>
        </div>
      </motion.div>
    </section>
  );
}