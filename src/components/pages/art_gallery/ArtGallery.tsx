import './art_gallery.css'

interface project {
  img: string
  title: string
  description: string
}

const projects: project[] = [
  {
    img: './images/Xipetotec framed.png',
    title: 'Xipetotec',
    description: 'Primer dibujo que hice relacionado con la cultura del México prehispánico'
  },
  {
    img: './images/dioses.jpg',
    title: 'Dioses de la lluvia',
    description: 'Primera composición'
  },
  {
    img: './images/Huitzilopochtli.jpg',
    title: 'El nacimiento de Huitzilopochtli',
    description: 'Narración gráfica de un mito'
  }
]

const GalleryElement: React.FC<project> = ( {img, title, description} ) => {
  return (
    <div className="gallery_element">
      <div className="gallery_element_cover">
        <img src={img}/>
      </div>
      <div className="info overley">
        <h3>{title}</h3>
        <h3><a href="">Ir ➡️</a></h3>
      </div>
    </div>
  )
}

const ArtGallery = () => {
  return (
    <div className="art_gallery_container">
      {
        projects.map(p => (
          <GalleryElement
            img={p.img}
            title={p.title}
            description={p.description}
            key={p.title}
          />
        ))
      }
    </div>
  )
}

export default ArtGallery