import { resumeData } from '../data/resumeData'

function About() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-lead">
          Formal education + certifications that back my cloud and full-stack work.
        </p>

        <div className="timeline" aria-label="Education timeline">
          {resumeData.education.map((edu) => (
            <div className="timeline-item" key={`${edu.school}-${edu.duration}`}>
              <article className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{edu.school}</h3>
                    <p className="timeline-org">
                      {edu.college || edu.institution || ""}
                    </p>
                  </div>
                  <div className="timeline-duration">{edu.duration}</div>
                </div>

                <ul className="timeline-list">
                  {edu.degree ? <li>{edu.degree}</li> : null}
                  {edu.cgpa ? <li>CGPA: {edu.cgpa}</li> : null}
                  {edu.grade ? <li>{edu.grade}</li> : null}
                  {edu.percentile ? <li>{edu.percentile}</li> : null}
                </ul>
              </article>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <h3 className="section-title" style={{ fontSize: "1.4rem", marginBottom: "1rem" }}>
            Certifications
          </h3>
          <div className="projects-grid" aria-label="Certifications">
            {resumeData.certifications.map((cert) => (
              <div key={cert} className="project-card">
                <div className="project-body">
                  <div className="project-title">{cert}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;