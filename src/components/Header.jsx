import { resumeData } from '../data/resumeData'

function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold mb-2">{resumeData.personal.name}</h1>
        <p className="text-2xl text-blue-400 mb-8">{resumeData.personal.title}</p>
        
        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          <a href={`mailto:${resumeData.personal.email}`} className="hover:text-blue-400 transition">
            📧 {resumeData.personal.email}
          </a>
          <a href={`tel:${resumeData.personal.phone}`} className="hover:text-blue-400 transition">
            📱 {resumeData.personal.phone}
          </a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            🔗 LinkedIn
          </a>
          <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            🐙 GitHub
          </a>
        </div>

        <p className="text-gray-300">{resumeData.personal.address}</p>
      </div>
    </header>
  );
}

export default Header;