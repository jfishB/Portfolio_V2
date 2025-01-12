import "./App.css";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
