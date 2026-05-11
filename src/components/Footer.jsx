import { resumeData } from '../data/resumeData'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} {resumeData.personal.name}</div>
        <div className="footer-links" aria-label="Footer links">
          <a href={`mailto:${resumeData.personal.email}`}>Email</a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={resumeData.personal.labex} target="_blank" rel="noopener noreferrer"> LabEx</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;