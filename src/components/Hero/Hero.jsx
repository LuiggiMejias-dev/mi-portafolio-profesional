import { useState, useEffect } from "react";
import styles from "./hero.module.css";
import { motion } from "framer-motion";
import { 
  SiReact, SiDotnet, SiPython, 
  SiOpenai, SiJavascript, SiTypescript,
  SiTailwindcss, SiFigma, SiVite
} from "react-icons/si";
import { FaBrain, FaDatabase, FaCode, FaServer } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

const roles = [
  "Ingeniero de Sistemas e Informática",
  "Front-End Developer",
  "Web Designer",
  "Gestión de Bases de Datos"
];
  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={styles.hero}>
      <div className={styles.networkBackground}>
        {/* LADO IZQUIERDO */}
        <motion.div className={styles.techNode} style={{ top: '10%', left: '8%' }} animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}><SiReact /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '35%', left: '15%' }} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 5, repeat: Infinity }}><FaBrain /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '60%', left: '10%' }} animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 6, repeat: Infinity }}><SiJavascript /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '85%', left: '20%' }} animate={{ x: [-10, 10, -10] }} transition={{ duration: 7, repeat: Infinity }}><SiDotnet /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '50%', left: '5%' }} animate={{ rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity }}><SiTailwindcss /></motion.div>

        {/* LADO DERECHO */}
        <motion.div className={styles.techNode} style={{ top: '15%', right: '10%' }} animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity }}><SiPython /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '40%', right: '18%' }} animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}><SiOpenai /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '65%', right: '12%' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}><FaDatabase /></motion.div>
        <motion.div className={styles.techNode} style={{ bottom: '10%', right: '20%' }} animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 6, repeat: Infinity }}><SiTypescript /></motion.div>
        <motion.div className={styles.techNode} style={{ top: '55%', right: '5%' }} animate={{ y: [-10, 10, -10] }} transition={{ duration: 7, repeat: Infinity }}><FaServer /></motion.div>
        
        {/* ICONOS EXTRA PARA RELLENAR ESPACIOS VERTICALES */}
        <motion.div className={styles.techNode} style={{ top: '5%', left: '50%' }} animate={{ opacity: [0.1, 0.2, 0.1] }}><FaCode /></motion.div>
        <motion.div className={styles.techNode} style={{ bottom: '5%', left: '45%' }} animate={{ scale: [0.8, 1, 0.8] }}><SiVite /></motion.div>
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span 
          className={styles.badge}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className={styles.dotPulse}></span> Disponible para nuevos proyectos
        </motion.span>

        <h1 className={styles.title}>
          Hola, soy <span className={styles.name}>Luiggi</span> 👋
        </h1>
        
        <div className={styles.typewriterContainer}>
          <p className={styles.subtitle}>
            {text}<span className={styles.cursor}>|</span>
          </p>
        </div>
        
        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.btnPrimary}>
            Explorar Proyectos
          </a>
        </div>
      </motion.div>
    </section>
  );
}