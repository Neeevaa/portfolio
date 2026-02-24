import { resumeData } from '../data/resumeData'

function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">GET IN TOUCH</h2>
        <p className="text-xl text-gray-300 mb-12">Feel free to reach out for collaboration or just to say hello!</p>
        
        <div className="flex flex-col items-center md:flex-row justify-center gap-8 mb-8">
          <a
            href={resumeData.personal.resumeUrl || '/resume.pdf'}
            download
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow"
          >
            ⬇️ Download Resume
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <a href={`mailto:${resumeData.personal.email}`} className="text-blue-400 hover:text-blue-300 text-lg">
              {resumeData.personal.email}
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <a href={`tel:${resumeData.personal.phone}`} className="text-blue-400 hover:text-blue-300 text-lg">
              {resumeData.personal.phone}
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <div className="flex justify-center gap-4">
              <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                LinkedIn
              </a>
              <span>•</span>
              <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;