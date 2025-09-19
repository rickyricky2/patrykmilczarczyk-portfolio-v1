import "./index.css";
import HeroComponent from "./components/Hero.tsx";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates.tsx";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import Footer from "./components/Footer";
export default function App() {

  return (
      <div className={"w-full min-h-screen text-xl hero-bg text-light-text dark:text-dark-text scroll-smooth pb-20"}>
          <div className={"max-w-screen-3xl min-h-screen mx-auto px-5 lg:px-20 flex gap-10"}>
              <div className={"flex flex-col justify-between items-center "}>
                  <HeroComponent />
                  <About/>
                  <Technologies/>
                  <Skills/>
                  <Certificates/>
                  <Education/>
                  <Experience/>
                  <Projects/>
                  <Footer/>
                  <NavMobile/>
              </div>
              <Nav/>
          </div>
      </div>
  );
}
