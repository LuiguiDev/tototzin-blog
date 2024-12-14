import { BtnPoiner, CanvasVista } from "../pages/art_gallery/canvas_vista/CanvasVista";
import Projects from "../pages/proyects/Proyects";
import Card from "./Card";

import './home.css'

// FeaturedProjects.tsx
const FeaturedProjects: React.FC = () => {
  const projects = [
    {
      title: "ArtGallery",
      image: {
        imgSrc: "./images/Xipetotec framed.png",
        imgAlt: "Arte prehispánico destacado"
      },
      description: "Explora mi colección de arte inspirada en la cultura prehispánica",
      url: "/galeria",
      category: "art" as const
    },
    {
      title: "Proyectos",
      image: {
        imgSrc: "./images/nahua_vision_screenshot.jpg",
        imgAlt: "Proyecto web destacado"
      },
      description: "Descubre mis desarrollos web y aplicaciones",
      url: "/proyectos",
      category: "projects" as const
    },
    {
      title: "Escritos",
      image: {
        imgSrc: "/path-to-blog-image.jpg",
        imgAlt: "Artículo destacado del blog"
      },
      description: "Lee mis reflexiones sobre ciencia, tecnología y cultura",
      url: "/blog",
      category: "blog" as const
    }
  ];

  return (
    <main className="featured">
      <section>
        <h2 className="featured__title">Proyectos Destacados</h2>
        <div className="featured__grid">
          {projects.map((project) => (
            <Card key={project.title} {...project} />
          ))}
        </div>

      </section>

      <CanvasVista img=""/>
    </main>
  );
};

export default FeaturedProjects;