import { useMemo, useState } from "react";
import { resumeData } from "../data/resumeData";

export default function GithubContributions() {
  const githubUrl = resumeData.personal.github || "";
  const username = githubUrl
    .replace("https://github.com/", "")
    .replace("http://github.com/", "")
    .replace("github.com/", "")
    .split("/")
    .filter(Boolean)
    .pop()
    ?.trim();

  const currentYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: 5 }, (_, i) => currentYear - i),
    [currentYear]
  );
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const chartUrl = username
    ? `https://github-contributions-api.deno.dev/${encodeURIComponent(username)}.svg?from=${selectedYear}-01-01&to=${selectedYear}-12-31&no-legend=true&font-color=ffffff`
    : null;

  return (
    <section className="section" aria-label="GitHub activity">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GitHub Activity</h2>
          <div className="gh-filter">
            <label>
              Year
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(Number(event.target.value))}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <p className="section-lead">
          Consistency over intensity — here’s my yearly GitHub contribution summary.
        </p>

        <div className="glass gh-wrap">
          <div className="gh-inner">
            {chartUrl ? (
              <img
                className="gh-chart"
                src={chartUrl}
                alt={`GitHub contributions chart for ${username} in ${selectedYear}`}
                loading="lazy"
              />
            ) : (
              <div style={{ color: "var(--text-muted)" }}>
                Add your GitHub URL in `resumeData.personal.github` to show the contributions chart.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

