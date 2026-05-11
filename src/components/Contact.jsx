import { resumeData } from '../data/resumeData'

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email?.value || "";
    const subject = form.elements.subject?.value || "";
    const message = form.elements.message?.value || "";
    const body = `From: ${email}\n\n${message}`.trim();

    const mailto = `mailto:${resumeData.personal.email}?subject=${encodeURIComponent(
      subject || "Portfolio message"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="connect-grid">
          <div>
            <h2 className="section-title" style={{ marginBottom: "0.75rem" }}>
              Let’s Connect
            </h2>
            <p className="section-lead" style={{ marginBottom: "1.1rem" }}>
              I’m currently looking for new opportunities, and my inbox is always open. Whether you have a question or
              just want to say hi, I’ll try my best to get back to you.
            </p>

            <div className="connect-actions">
              <a className="btn btn-primary glow-pulse" href={`mailto:${resumeData.personal.email}`}>
                Email me
              </a>
              <a className="btn btn-ghost" href={resumeData.personal.resumeUrl || "/resume.pdf"} download>
                Download resume
              </a>
            </div>

            <div className="connect-links" aria-label="Quick links">
              <a className="meta-pill glass" href={resumeData.personal.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="meta-pill glass" href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="meta-pill glass" href={resumeData.personal.labex} target="_blank" rel="noopener noreferrer">
              LabEx
            </a>
              {resumeData.personal.leetcode ? (
                <a className="meta-pill glass" href={resumeData.personal.leetcode} target="_blank" rel="noopener noreferrer">
                  LeetCode
                </a>
              ) : null}
            </div>
          </div>

          <form className="connect-form glass" onSubmit={onSubmit}>
            <div className="field">
              <label className="label" htmlFor="email">
                Your email
              </label>
              <input className="input" id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="field">
              <label className="label" htmlFor="subject">
                Subject
              </label>
              <input className="input" id="subject" name="subject" type="text" placeholder="Just saying hi" required />
            </div>

            <div className="field">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea className="textarea" id="message" name="message" rows={6} placeholder="Message" required />
            </div>

            <button className="btn btn-primary glow-pulse" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;