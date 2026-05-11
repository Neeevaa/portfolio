import { resumeData } from '../data/resumeData'

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <div className="container nav-inner">
        <a className="brand" href="#top" aria-label="Go to top">
          <span className="brand-badge" aria-hidden="true" />
          <span>{resumeData.personal.name.split(' ')[0]}</span>
        </a>

        <div className="nav-links" role="navigation" aria-label="Sections">
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#experience">Experience</a>
          <a className="nav-link" href="#contact">Contact</a>
        
        <a className="btn btn-primary" href={resumeData.personal.resumeUrl || "/resume.pdf"} download>
                Download resume
              </a> </div>
      </div>
    </nav>
  );
}

export default Navbar;