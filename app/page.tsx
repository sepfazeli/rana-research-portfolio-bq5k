"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const projects = [
    { title: "Predictive Modeling for ICU Patient Outcomes", desc: "Developed machine learning models to predict sepsis onset in critical care patients using temporal clinical data from 12,000+ admissions", tags: ["Python", "TensorFlow", "SQL"] },
    { title: "EHR Data Quality Assessment Framework", desc: "Created automated validation pipeline for electronic health records across three hospital systems, improving data completeness by 34%", tags: ["R", "PostgreSQL", "ETL"] },
    { title: "Natural Language Processing for Clinical Notes", desc: "Built NLP system to extract structured information from unstructured physician notes, achieving 91% accuracy in diagnosis coding", tags: ["spaCy", "BERT", "FastAPI"] },
    { title: "COVID-19 Resource Allocation Optimization", desc: "Designed simulation model for ventilator and bed allocation during pandemic surges, informing policy across Ontario health networks", tags: ["Simulation", "Optimization", "Tableau"] }
  ];

  const publications = [
    { title: "Machine Learning Approaches to Early Sepsis Detection: A Systematic Review", venue: "Journal of Medical Informatics", year: "2024" },
    { title: "Addressing Bias in Healthcare Predictive Models: A Framework", venue: "AMIA Annual Symposium Proceedings", year: "2023" },
    { title: "Temporal Pattern Mining in Electronic Health Records", venue: "IEEE EMBS International Conference", year: "2023" },
    { title: "Data Quality Metrics for Real-World Clinical Databases", venue: "Health Data Science Journal", year: "2022" }
  ];

  const skills = [
    { cat: "Data Science", items: ["Python", "R", "Machine Learning", "Deep Learning", "Statistical Modeling"] },
    { cat: "Health Informatics", items: ["HL7/FHIR", "ICD-10", "SNOMED CT", "Clinical Workflows", "HIPAA Compliance"] },
    { cat: "Data Engineering", items: ["SQL", "PostgreSQL", "Apache Spark", "ETL Pipelines", "Data Warehousing"] },
    { cat: "Visualization", items: ["Tableau", "Power BI", "matplotlib", "ggplot2", "D3.js"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2d1b3d] via-[#3d2550] to-[#2d1b3d] text-white">
      <nav className="fixed top-0 w-full bg-[#2d1b3d]/90 backdrop-blur-md z-50 border-b border-violet-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-300 to-pink-300 bg-clip-text text-transparent">Rana Research</div>
          <div className="flex gap-6 text-sm">
            {["Projects", "Publications", "About", "Skills", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-300 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-violet-400 to-pink-400"></div>
            <span className="text-violet-300 text-sm uppercase tracking-wider">Health Informatics Researcher</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-violet-200 via-pink-200 to-violet-300 bg-clip-text text-transparent">Transforming Healthcare</span><br />
            <span className="text-white">Through Data Science</span>
          </h1>
          <p className="text-xl text-violet-200 max-w-3xl mb-8 leading-relaxed">
            PhD Candidate at University of Waterloo specializing in clinical predictive modeling, health informatics, and machine learning applications in critical care settings.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full font-semibold hover:scale-105 transition-transform">View Research</a>
            <a href="#contact" className="px-8 py-3 border-2 border-violet-400 rounded-full font-semibold hover:bg-violet-400/10 transition-colors">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Research Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div key={i} className="bg-gradient-to-br from-violet-900/30 to-pink-900/20 border border-violet-500/30 rounded-xl p-6 hover:scale-[1.02] transition-transform">
                <h3 className="text-xl font-bold mb-3 text-violet-200">{proj.title}</h3>
                <p className="text-violet-100/80 mb-4 leading-relaxed">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-violet-500/20 border border-violet-400/30 rounded-full text-xs text-violet-200">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Publications</h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div key={i} className="bg-violet-900/20 border-l-4 border-pink-400 p-6 rounded-r-lg hover:bg-violet-900/30 transition-colors">
                <h3 className="text-lg font-semibold text-violet-200 mb-2">{pub.title}</h3>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-violet-300">{pub.venue}</span>
                  <span className="text-pink-300 font-semibold">{pub.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-violet-100 leading-relaxed mb-4">
              I am a PhD candidate in Health Informatics at the University of Waterloo, working at the intersection of machine learning, clinical data science, and healthcare delivery optimization.
            </p>
            <p className="text-violet-100 leading-relaxed mb-4">
              My research focuses on developing interpretable predictive models that can be effectively integrated into clinical workflows, with particular emphasis on critical care settings and addressing algorithmic bias in healthcare AI.
            </p>
            <p className="text-violet-100 leading-relaxed">
              I collaborate with hospital systems across Ontario and have published work in leading health informatics venues. My goal is to bridge the gap between advanced analytics and practical clinical decision support.
            </p>
          </div>
          <div className="bg-gradient-to-br from-violet-500/20 to-pink-500/20 rounded-2xl p-8 border border-violet-400/30">
            <h3 className="text-2xl font-bold mb-6 text-violet-200">Research Interests</h3>
            <ul className="space-y-3">
              {["Clinical Predictive Modeling", "Electronic Health Records", "Machine Learning in Healthcare", "Health Data Quality", "Critical Care Analytics", "Medical NLP"].map(interest => (
                <li key={interest} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                  <span className="text-violet-100">{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-gradient-to-b from-violet-900/30 to-transparent border border-violet-500/30 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-pink-300">{skill.cat}</h3>
                <ul className="space-y-2">
                  {skill.items.map(item => (
                    <li key={item} className="text-sm text-violet-200">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-semibold mb-2 text-violet-200">Name</label>
              <input type="text" className="w-full px-4 py-3 bg-violet-900/20 border border-violet-500/30 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-white" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-violet-200">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-violet-900/20 border border-violet-500/30 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-white" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-violet-200">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 bg-violet-900/20 border border-violet-500/30 rounded-lg focus:outline-none focus:border-pink-400 transition-colors text-white resize-none" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg font-semibold hover:scale-[1.02] transition-transform">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-violet-500/20">
        <div className="max-w-6xl mx-auto text-center text-violet-300 text-sm">
          © 2024 Rana Research Portfolio • University of Waterloo
        </div>
      </footer>
    </div>
  );
}