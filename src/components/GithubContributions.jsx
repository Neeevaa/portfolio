import { resumeData } from "../data/resumeData";

export default function GithubContributions() {
  const username = 'Neeevaa'
    .replace("https://github.com/", "")
    .replace("http://github.com/", "")
    .replace("github.com/", "")
    .replaceAll("/", "")
    .trim();

  const chartUrl = username
    ? `https://ghchart.rshah.org/${encodeURIComponent(username)}`
    : null;

  return (
    <section className="section" aria-label="GitHub activity">
      <div className="container">
        <h2 className="section-title">GitHub Activity</h2>
        <p className="section-lead">
          Consistency over intensity — here’s my recent contribution graph.
        </p>

        <div className="glass gh-wrap">
          <div className="gh-inner">
            {chartUrl ? (
              <img
                className="gh-chart"
                src={chartUrl}
                alt={`GitHub contributions chart for ${username}`}
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

