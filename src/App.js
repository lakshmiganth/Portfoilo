import About from "./components/About";
import Interest from "./components/Interest";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Project from "./components/Project";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Interest />
      <Experience />

      <SocialLinks />
    </div>
  );
}

export default App;
