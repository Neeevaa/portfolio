import { useMemo, useState } from "react";
import { resumeData } from "../data/resumeData";

function TabButton({ id, active, controls, icon, children, onSelect }) {
  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={controls}
      tabIndex={active ? 0 : -1}
      className={`tab ${active ? "tab-active" : ""}`}
      onClick={onSelect}
    >
      <span className="tab-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </button>
  );
}

const BriefcaseIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v3H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2Zm4 4V4h-4v2h4ZM2 13h9v2H2v-2Zm11 0h9v2h-9v-2ZM2 17h20v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3Z"
    />
  </svg>
);

const CapIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3Zm-7.2 9.4V16c0 2.2 3.1 4 7.2 4s7.2-1.8 7.2-4v-3.6L12 16l-7.2-3.6Z"
    />
  </svg>
);

const HeartIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 21s-7.2-4.5-9.5-8.7C.8 8.8 3 6 6 6c1.7 0 3 .8 3.8 2 0 0 .9-2 3.2-2 3 0 5.2 2.8 3.5 6.3C19.2 16.5 12 21 12 21Z"
    />
  </svg>
);

const SparkIcon = (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2l1.4 5.1L18.5 9l-5.1 1.4L12 15.5l-1.4-5.1L5.5 9l5.1-1.9L12 2Zm7 9 1 3.6 3.6 1-3.6 1L19 20l-1-3.4-3.4-1 3.4-1L19 11ZM4 12l.9 3.1L8 16l-3.1.9L4 20l-.9-3.1L0 16l3.1-.9L4 12Z"
    />
  </svg>
);

function ExperienceTimeline({ items }) {
  return (
    <div className="timeline">
      {items.map((exp) => (
        <div className="timeline-item" key={`${exp.org || exp.company}-${exp.duration}`}>
          <article className="timeline-card">
            <div className="timeline-top">
              <div>
                <h3 className="timeline-role">{exp.title || exp.org || exp.company}</h3>
                <p className="timeline-org">
                  {exp.company || (exp.title ? exp.org : "")}
                  {exp.location ? ` • ${exp.location}` : ""}
                </p>
              </div>
              <div className="timeline-duration">{exp.duration}</div>
            </div>

            {(exp.responsibilities?.length || 0) > 0 ? (
              <ul className="timeline-list">
                {exp.responsibilities.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}

            {(exp.keyResponsibilities?.length || 0) > 0 ? (
              <ul className="timeline-list">
                {exp.keyResponsibilities.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ) : null}
          </article>
        </div>
      ))}
    </div>
  );
}

function EducationView() {
  return (
    <div className="pane glass">
      <div className="pane-inner">
        <div className="timeline" aria-label="Education timeline">
          {resumeData.education.map((edu) => (
            <div className="timeline-item" key={`${edu.school}-${edu.duration}`}>
              <article className="timeline-card">
                <div className="timeline-top">
                  <div>
                    <h3 className="timeline-role">{edu.school}</h3>
                    <p className="timeline-org">{edu.college || edu.institution || ""}</p>
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

        <div style={{ marginTop: "2.25rem" }}>
          <h3 className="pane-subtitle">Certifications</h3>
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
    </div>
  );
}

function ExperienceView() {
  const [experienceTab, setExperienceTab] = useState("volunteering");
  const volunteering = useMemo(() => resumeData.volunteering || [], []);
  const internships = useMemo(() => resumeData.internships || [], []);

  const showItems = experienceTab === "internship" ? internships : volunteering;

  return (
    <div>
      <div className="subtabs glass" role="tablist" aria-label="Experience categories">
        <button
          type="button"
          role="tab"
          aria-selected={experienceTab === "volunteering"}
          className={`subtab ${experienceTab === "volunteering" ? "subtab-active" : ""}`}
          onClick={() => setExperienceTab("volunteering")}
        >
          <span className="tab-icon" aria-hidden="true">
            {HeartIcon}
          </span>
          Volunteering
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={experienceTab === "internship"}
          className={`subtab ${experienceTab === "internship" ? "subtab-active" : ""}`}
          onClick={() => setExperienceTab("internship")}
        >
          <span className="tab-icon" aria-hidden="true">
            {SparkIcon}
          </span>
          Internship
        </button>
      </div>

      <div className="pane glass">
        <div className="pane-inner">
          {showItems.length === 0 ? (
            <p style={{ color: "var(--text-muted)", margin: 0 }}>
              Nothing here yet — add items in `resumeData`.
            </p>
          ) : (
            <ExperienceTimeline items={showItems} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceEducation() {
  const [tab, setTab] = useState("experience");

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="ee-title">
          <span className="ee-brackets">&lt;</span>
          <span> Experience &amp; Education </span>
          <span className="ee-brackets">/&gt;</span>
        </div>

        <div className="tabs glass" role="tablist" aria-label="Experience and Education switcher">
          <TabButton
            id="tab-experience"
            active={tab === "experience"}
            controls="panel-experience"
            icon={BriefcaseIcon}
            onSelect={() => setTab("experience")}
          >
            Work Experience
          </TabButton>
          <TabButton
            id="tab-education"
            active={tab === "education"}
            controls="panel-education"
            icon={CapIcon}
            onSelect={() => setTab("education")}
          >
            Education
          </TabButton>
        </div>

        <div
          id="panel-experience"
          role="tabpanel"
          aria-labelledby="tab-experience"
          hidden={tab !== "experience"}
        >
          <ExperienceView />
        </div>

        <div
          id="panel-education"
          role="tabpanel"
          aria-labelledby="tab-education"
          hidden={tab !== "education"}
        >
          <EducationView />
        </div>
      </div>
    </section>
  );
}

