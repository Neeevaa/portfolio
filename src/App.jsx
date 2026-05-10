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