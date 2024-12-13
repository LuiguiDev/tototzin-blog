import './proyects.css'

const Project = () => {
  return (
    <section className="project">
      <div className="project_cover">
        <img src="" alt="" />
      </div>

      <div className="project_details">
        <h3 className="project_title">Nahua Vision</h3>
        <p className="project_description">Una guía para explorar el mundo a través de los ojos de los antiiguos mexicanos</p>

        <div className="project_details_buttons">
          <button>🐈‍⬛</button>
          <button>Visitar sitio</button>
        </div>
      </div>
    </section>
  )
}

const Projects = () => {
  return (
    <main className="projects_container">
      <Project />
      <Project />
    </main>
  )
}

export default Projects