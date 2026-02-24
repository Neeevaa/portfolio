import { resumeData } from '../data/resumeData'

function Footer() {
  return (
    <footer className="bg-slate-800 text-white text-center py-8">
      <div className="max-w-6xl mx-auto px-6">
        <p className="mb-4">© 2026 {resumeData.personal.name}. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href={`mailto:${resumeData.personal.email}`} className="hover:text-blue-400 transition">Email</a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">LinkedIn</a>
          <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;