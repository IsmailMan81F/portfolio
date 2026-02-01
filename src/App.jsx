import "./App.css";
import Nav from "./components/navigation/Nav";
import Hero from "./components/hero/Hero";
import RightSpotlight from "./components/spotlight/LeftSpotlight";
import LeftSpotlight from "./components/spotlight/RightSpotlight";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import BackgroundgridBottom from "./components/background/BackgroundgridBottom";
import BackgroundgridTop from "./components/background/BackgroundgridTop";
function App() {
  return (
    <div className="app">
      <BackgroundgridTop />
      <Nav />
      <Hero />
      <About />
      <RightSpotlight />
      <LeftSpotlight />
      <Projects />
      <Testimonials />
      <Experience />
      <Contact />
      <Footer />
      <BackgroundgridBottom />
    </div>
  );
}

export default App;
