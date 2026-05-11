import { resumeData } from '../data/resumeData'

function Header() {
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-kicker glass">
            <span className="live-dot glow-pulse" aria-hidden="true" />
            <span>Actively exploring roles</span>
          </div>

          <h1 className="hero-title">
            Hi, I’m <span className="accent">{resumeData.personal.name}</span>
            <span className="wave-emoji" aria-hidden="true">
              {" "}👋
            </span>
          </h1>

          <p className="hero-subtitle">{resumeData.personal.title}</p>

          <div className="hero-actions">
            <a className="btn btn-primary glow-pulse" href="#projects">
              View Projects
            </a>
            <a className="btn btn-ghost" href={resumeData.personal.resumeUrl || "/resume.pdf"} download>
              Download Resume
            </a>
          </div>

          <div className="hero-meta" aria-label="Quick links">
            <a className="meta-pill glass" href={`mailto:${resumeData.personal.email}`}>
              Email
            </a>
            <a className="meta-pill glass" href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="meta-pill glass" href={resumeData.personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {resumeData.personal.leetcode && (
              <a className="meta-pill glass" href={resumeData.personal.leetcode} target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            )}
          </div>
        </div>

        <div className="model-stage" aria-hidden="true">
          <svg className="orbit-text" viewBox="0 0 220 220" role="img" aria-label="">
            <defs>
              <path id="orbitPath" d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0" />
            </defs>
            <text>
              <textPath href="#orbitPath" startOffset="0%">
                Actively exploring roles where I can leverage my skills.
              </textPath>
            </text>
          </svg>

        </div>
      </div>
    </header>
  );
}

export default Header;