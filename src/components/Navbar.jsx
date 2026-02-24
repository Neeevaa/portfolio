import { resumeData } from '../data/resumeData'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-blue-400">{resumeData.personal.name.split(' ')[0]}</h2>
        <div className="flex gap-8">
          <a href="#education" className="hover:text-blue-400 transition font-medium">Education</a>
          <a href="#experience" className="hover:text-blue-400 transition font-medium">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition font-medium">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;