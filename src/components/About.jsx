import { resumeData } from '../data/resumeData'

function About() {
  return (
    <section id="education" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-slate-900">EDUCATION</h2>
        
        <div className="space-y-8">
          {resumeData.education.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-6 py-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{edu.school}</h3>
                  {edu.college && <p className="text-gray-600">{edu.college}</p>}
                  {edu.institution && <p className="text-gray-600">{edu.institution}</p>}
                </div>
                <span className="text-gray-500 whitespace-nowrap ml-4">{edu.duration}</span>
              </div>
              {edu.degree && <p className="text-gray-700 font-semibold">{edu.degree}</p>}
              {edu.cgpa && <p className="text-gray-600">CGPA: {edu.cgpa}</p>}
              {edu.grade && <p className="text-gray-700">{edu.grade}</p>}
              {edu.percentile && <p className="text-gray-600">{edu.percentile}</p>}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">ADDITIONAL CERTIFICATIONS</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {resumeData.certifications.map((cert, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-500 font-bold mr-3">•</span>
                <span className="text-gray-700">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;