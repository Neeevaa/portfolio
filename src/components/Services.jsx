import { resumeData } from '../data/resumeData'

function Services() {
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">VOLUNTEERING EXPERIENCES</h2>
        
        <div className="space-y-10">
          {resumeData.volunteering.map((exp, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{exp.org}</h3>
                  {exp.title && <p className="text-lg text-blue-500 font-semibold">{exp.title}</p>}
                  {exp.location && <p className="text-gray-600">{exp.location}</p>}
                </div>
                <span className="text-gray-500 whitespace-nowrap ml-4 font-semibold">{exp.duration}</span>
              </div>
              
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <div className="mb-4">
                  <ul className="list-disc list-inside text-gray-700">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.keyResponsibilities && exp.keyResponsibilities.length > 0 && (
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Key Responsibilities</p>
                  <ul className="list-disc list-inside text-gray-700">
                    {exp.keyResponsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;