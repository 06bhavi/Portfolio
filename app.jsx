const projects = [
  {
    title: "Project 1: Big Data Pipeline",
    description: "A project focused on building a scalable data pipeline using Apache Kafka and Spark.",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/your-username/project-1"
  },
  {
    title: "Project 2: Machine Learning Model",
    description: "Developed a predictive model for financial data using Python and scikit-learn.",
    techStack: ["Python", "scikit-learn", "Pandas"],
    link: "https://github.com/your-username/project-2"
  }
];

function App() {
  return (
    // ... other sections
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-secondary">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
    // ... other sections
  );
}

export default App;