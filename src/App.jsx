import Navbar from "./components/Navbar/Navbar"; // Con 'N' mayúscula al finalimport Hero from "./components/Hero/Hero"; 
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contacto from "./components/Contacto/Contacto"; // Nueva importación
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import "./styles/global.css";

function App() {
  return (
    <main> 
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contacto /> {/* Sección añadida */}
      <Footer />
    </main>
  );
}

export default App;