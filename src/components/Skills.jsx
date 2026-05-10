import { resumeData } from "../data/resumeData";

const ICONS = {
  "C/C++": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20c2.7 0 5.2-1.1 7.1-2.9l-1.4-1.4A7.97 7.97 0 0 1 12 20a8 8 0 1 1 5.7-13.6l1.4-1.4A9.95 9.95 0 0 0 12 2Z"
      />
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2c3.2 0 3 2.6 3 2.6V7H9.5C7.6 7 6 8.6 6 10.5V13h9c1.7 0 3 1.3 3 3v2.5C18 21 15.4 22 12 22c-3.4 0-6-1.2-6-3.5V16h6v-1H6c-1.7 0-3-1.3-3-3v-1.5C3 6.8 5.8 2 12 2Zm1.7 3.3a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0Z"
      />
    </svg>
  ),
  Java: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10.2 2.6c1.6 1.6.2 2.8-.8 3.8-1 1-.8 1.8.2 2.7-2.2-1-3.1-2.8-1.6-4.4 1-1 .9-1.6 2.2-2.1ZM7.3 14.1c-1 1 1.4 2.1 4.7 2.1 3.9 0 5.9-.8 5.9-.8l.5 2.2S16.4 18.6 12 18.6c-4.8 0-8.1-1.9-4.7-4.5ZM18.2 10.2c.8 1-.9 1.9-.9 1.9s2.3-.6 2.5-2c.1-1.3-2.2-2.9-2.2-2.9s.6 1.1.6 3ZM8.2 20.1s.6.4 1.7.7c2 .6 6.2.7 9.7-.9 0 0-.6 1.2-2.3 1.7-4.9 1.6-10.9.1-9.1-1.5ZM14.4 4.7s2.1 1.2 1.5 2.8c-.7 1.6-1.1 2.4 1.4 3.7 0 0-4.1-1.1-2.9-3.7 1-2.1 0-2.8 0-2.8Z"
      />
    </svg>
  ),
  "React.js": (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 1.5c0-.8-1-1.6-2.6-2.2.4-1.7.2-3-.6-3.5-.7-.4-1.9-.1-3.4.7C13.2 5.7 12.5 5 12 5c-.5 0-1.2.7-1.4 2-1.5-.8-2.7-1.1-3.4-.7-.8.5-1 1.8-.6 3.5C4 10.4 3 11.2 3 12s1 1.6 2.6 2.2c-.4 1.7-.2 3 .6 3.5.7.4 1.9.1 3.4-.7.2 1.3.9 2 1.4 2 .5 0 1.2-.7 1.4-2 1.5.8 2.7 1.1 3.4.7.8-.5 1-1.8.6-3.5C20 13.6 21 12.8 21 12Zm-9 7.3c-.3-.3-.6-1-.7-1.8.5-.3 1-.7 1.6-1.1.6.4 1.1.8 1.6 1.1-.1.8-.4 1.5-.7 1.8-.6.6-1.1.6-1.8 0Zm-3.8-2.2c-.4.2-.8.3-1 .2-.3-.2-.4-1-.1-2 .6.1 1.2.1 1.9 0 .2.6.5 1.2.8 1.7-.6.2-1.2.3-1.6.1Zm9.9-.1c.3-.5.6-1.1.8-1.7.7.1 1.3.1 1.9 0 .3 1 .2 1.8-.1 2-.2.1-.6 0-1-.2-.4.2-1 .1-1.6-.1Zm-6.1-1.9c-.5-.4-1-.8-1.4-1.2-.6-.6-1-1.1-1.2-1.4.2-.3.6-.8 1.2-1.4.4-.4.9-.8 1.4-1.2.5.4 1 .8 1.4 1.2.6.6 1 1.1 1.2 1.4-.2.3-.6.8-1.2 1.4-.4.4-.9.8-1.4 1.2Zm-4.4-3.4c-.6-.2-1.1-.4-1.4-.6.3-.2.8-.4 1.4-.6.2.4.5.8.8 1.2-.3.4-.6.8-.8 1.2Zm12.8 0c-.2-.4-.5-.8-.8-1.2.3-.4.6-.8.8-1.2.6.2 1.1.4 1.4.6-.3.2-.8.4-1.4.6Zm-12.5-3.3c-.3-1-.2-1.8.1-2 .2-.1.6 0 1 .2.4-.2 1-.1 1.6.1-.3.5-.6 1.1-.8 1.7-.7-.1-1.3-.1-1.9 0Zm9.6-.1c.6-.2 1.2-.3 1.6-.1.4-.2.8-.3 1-.2.3.2.4 1 .1 2-.6-.1-1.2-.1-1.9 0-.2-.6-.5-1.2-.8-1.7ZM12 6.7c.3.3.6 1 .7 1.8-.5.3-1 .7-1.6 1.1-.6-.4-1.1-.8-1.6-1.1.1-.8.4-1.5.7-1.8.6-.6 1.1-.6 1.8 0Z"
      />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 3h18v18H3V3Zm10.2 14.5c.4.7 1 1.2 2 1.2 1 0 1.6-.4 1.6-1.1 0-.8-.6-1-1.7-1.5l-.6-.2c-1.7-.7-2.8-1.5-2.8-3.3 0-1.6 1.2-2.8 3.1-2.8 1.3 0 2.3.5 3 1.7l-1.7 1.1c-.4-.7-.8-1-1.4-1-.7 0-1.1.4-1.1 1 0 .7.4 1 1.4 1.5l.6.2c2 .8 3.1 1.6 3.1 3.4 0 2-1.6 3-3.7 3-2.1 0-3.4-1-4.1-2.3l2.1-1.2ZM9.5 17.7c.3.6.6 1.1 1.3 1.1.6 0 1-.2 1-1.2V10h2.5v7.8c0 2.4-1.4 3.5-3.5 3.5-1.9 0-3-1-3.5-2.2l2.2-1.4Z"
      />
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 6h7.2c2.6 0 4.3 1.4 4.3 3.7 0 2.8-2.2 4.3-5.2 4.3H9.7L9 18H6.6L7 6Zm3.2 2.2-.3 3.6h3.2c1.5 0 2.7-.5 2.7-2 0-1.2-.9-1.6-2.1-1.6h-3.5Z"
      />
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 3c4.5 0 8 2.9 8 6.5 0 2.3-1.5 4.3-3.8 5.5.4 1.1 1.1 2.3 2.3 3.3-2.1.1-3.8-.7-5.1-2-0.5.1-1 .2-1.4.2-4.5 0-8-2.9-8-6.5S7.5 3 12 3Zm-4.2 6.2c.4-.9 1.3-1.7 2.6-2.2 2.2-.8 5.2-.4 6.8 1.1.8.7 1.2 1.7 1.1 2.6-.1 1.3-1.1 2.3-2.4 2.8-2 .9-4.8.7-6.5-.4-.9-.6-1.7-1.8-1.6-3.1Z"
      />
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-1.9 19.8L6.2 10.4c-.3-.8 0-1.7.8-2.1.8-.4 1.7 0 2 .8l2.6 7.3 1.6-5.1-1-2.8c-.3-.8.1-1.7.9-2 .8-.3 1.7.1 2 .9l3.2 9.2A10 10 0 0 0 12 2Zm.2 19.9 2.6-7.6.8 2.4c.2.5.6.9 1.1 1.1A8.9 8.9 0 0 1 12.2 21.9Z"
      />
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.3 19.7 7.9 4.4c.1-.6.8-.8 1.2-.4l3 3.7L10.3 19 6.9 21c-.4.2-.8-.1-.6-.6Zm3.9 1.9L12 2.8c.2-.5.9-.6 1.2-.1l3 5.4-5.9 13.5c-.1.3-.5.3-.7 0Zm4.2 0 3.3-1.9c.3-.2.4-.6.2-.9L16.2 8.1l-1.8 13.5Z"
      />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.6 13.2 13.2 20.6a2 2 0 0 1-2.8 0l-7-7a2 2 0 0 1 0-2.8l7.4-7.4a2 2 0 0 1 2.8 0l7 7a2 2 0 0 1 0 2.8ZM12.2 6.3a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8Zm0 3.4a2.8 2.8 0 0 1-1.3-.3v5a1.4 1.4 0 1 0 2.8 0v-3.1a2.8 2.8 0 1 1 1.7-2.6h-1.4a1.4 1.4 0 1 0-1.8 1.3v-4Z"
      />
    </svg>
  ),
  Linux: (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2c2.2 0 3.7 2.7 3.7 5.1 0 1.2-.3 2.1-.8 2.9.7 1.4 1.8 2.8 2.6 4.3.6 1.2.8 2.2.8 3.1 0 2.6-2 4.6-6.3 4.6S5.7 20 5.7 17.4c0-.9.2-1.9.8-3.1.8-1.5 1.9-2.9 2.6-4.3-.5-.8-.8-1.7-.8-2.9C8.3 4.7 9.8 2 12 2Zm-1.5 4.4a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Zm3 0a.7.7 0 1 0 0 1.4.7.7 0 0 0 0-1.4Z"
      />
    </svg>
  ),
};

function normalizeSkill(s) {
  const trimmed = String(s || "").trim();
  if (trimmed.toLowerCase().includes("firebase")) return "Firebase";
  if (trimmed.toLowerCase().includes("linux")) return "Linux";
  if (trimmed.toLowerCase().includes("react")) return "React.js";
  if (trimmed.toLowerCase() === "git") return "Git";
  return trimmed;
}

function SkillCard({ name, meta }) {
  const key = normalizeSkill(name);
  const icon = ICONS[key] ?? (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-2h2v2Zm0-4h-2V7h2v6Z"
      />
    </svg>
  );

  return (
    <div className="tech-card">
      <div className="tech-icon" aria-hidden="true">
        {icon}
      </div>
      <div className="tech-name">{name}</div>
      {meta ? <div className="tech-meta">{meta}</div> : null}
    </div>
  );
}

export default function Skills() {
  const skills = resumeData.skills || {};
  const groups = [
    {
      id: "languages",
      title: "Programming Languages",
      subtitle: "Languages I use daily",
      items: (skills.languages || []).map((s) => ({ name: s, meta: "Language" })),
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      subtitle: "UI + tooling I build with",
      items: (skills.frameworks || []).map((s) => ({ name: s, meta: "Framework/Library" })),
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      subtitle: "Workflow and platform tools",
      items: (skills.tools || []).map((s) => ({ name: s, meta: "Tool" })),
    },
    {
      id: "dbcloud",
      title: "Databases & Cloud",
      subtitle: "Backends and infra basics",
      items: (skills.backend || []).map((s) => ({ name: s, meta: "Backend/Cloud" })),
    },
    {
      id: "frontend",
      title: "Frontend Core",
      subtitle: "Web fundamentals",
      items: (skills.frontend || []).map((s) => ({ name: s, meta: "Frontend" })),
    },
  ];

  const normalize = (x) => String(x || "").trim();
  const dedupe = (arr) => {
    const seen = new Set();
    return arr
      .map((x) => ({ ...x, name: normalize(x.name) }))
      .filter((x) => x.name.length > 0)
      .filter((x) => {
        const k = x.name.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      });
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="ee-title" style={{ marginBottom: "0.4rem" }}>
          <span className="ee-brackets">&lt;</span>
          <span> Tech Stack </span>
          <span className="ee-brackets">/&gt;</span>
        </div>
        <p className="section-lead" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          Languages and tools I use daily
        </p>

        <div className="skill-groups">
          {groups.map((g) => {
            const items = dedupe(g.items);
            if (items.length === 0) return null;

            return (
              <section key={g.id} className="skill-group" aria-label={g.title}>
                <div className="group-head">
                  <div className="group-dot" aria-hidden="true" />
                  <div>
                    <div className="group-title">{g.title.toUpperCase()}</div>
                    <div className="group-subtitle">{g.subtitle}</div>
                  </div>
                </div>

                <div className="group-grid" role="list">
                  {items.map((skill) => (
                    <div role="listitem" key={`${g.id}-${skill.name}`}>
                      <SkillCard name={skill.name} meta={null} />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

