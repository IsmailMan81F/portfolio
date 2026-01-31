import "./App.css";
import Nav from "./components/navigation/Nav";
import Hero from "./components/hero/Hero";
import Backgroundgrid from "./components/background/Backgroundgrid";
import RightSpotlight from "./components/spotlight/LeftSpotlight";
import LeftSpotlight from "./components/spotlight/RightSpotlight";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Backgroundgrid />
      <RightSpotlight />
      <LeftSpotlight />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
