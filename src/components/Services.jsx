import { resumeData } from '../data/resumeData'

function Services() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          Leadership and community work across developer groups, cloud programs, and campus initiatives.
        </p>

        <div className="timeline">
          {resumeData.volunteering.map((exp) => (
            <div className="timeline-item" key={`${exp.org}-${exp.duration}`}>
              <article className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{exp.title || exp.org}</h3>
                    <p className="timeline-org">
                      {exp.title ? exp.org : null}
                      {exp.location ? ` • ${exp.location}` : ""}
                    </p>
                  </div>
                  <div className="timeline-duration">{exp.duration}</div>
                </div>

                {(exp.responsibilities?.length || 0) > 0 ? (
                  <ul className="timeline-list">
                    {exp.responsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}

                {(exp.keyResponsibilities?.length || 0) > 0 ? (
                  <ul className="timeline-list">
                    {exp.keyResponsibilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;