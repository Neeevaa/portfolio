import { resumeData } from '../data/resumeData'

function Work() {
  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">PROJECTS</h2>
        
        <div className="space-y-6">
          {resumeData.projects.map((project, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{project.name}</h3>
              {project.tech && (
                <p className="text-sm text-blue-600 font-semibold mb-2">Tech: {project.tech}</p>
              )}
              {project.description && (
                <p className="text-gray-700">{project.description}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-8">SKILLS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Languages</h4>
              <p className="text-gray-700">{resumeData.skills.languages.join(' • ')}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Frameworks & Tools</h4>
              <p className="text-gray-700">{resumeData.skills.frameworks.join(' • ')}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Frontend</h4>
              <p className="text-gray-700">{resumeData.skills.frontend.join(' • ')}</p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-3">Backend & Tools</h4>
              <p className="text-gray-700">{resumeData.skills.backend.join(' • ')}</p>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="font-bold text-slate-900 mb-3">Additional Tools</h4>
            <p className="text-gray-700">{resumeData.skills.tools.join(' • ')}</p>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">DECLARATION</h3>
          <p className="text-gray-700">{resumeData.declaration}</p>
        </div>
      </div>
    </section>
  );
}

export default Work;