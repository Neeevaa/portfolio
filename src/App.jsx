import SplashCursor from "./components/SplashCursor";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
import GithubContributions from "./components/GithubContributions";
import ExperienceEducation from "./components/ExperienceEducation";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#d946ef"
        TRANSPARENT
        BACK_COLOR={{ r: 45 / 255, g: 30 / 255, b: 47 / 255 }}
        SHADING
        DYE_RESOLUTION={880}
      />
      <Navbar />
      <main id="content">
        <Header />
        <Skills />
        <Work />
        <GithubContributions />
        <ExperienceEducation />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;