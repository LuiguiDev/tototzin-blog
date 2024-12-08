// types.ts
interface ImageProps {
  imgSrc: string;
  imgAlt: string;
}

interface CardProps {
  title: string;
  image: ImageProps;
  description: string;  // Añadido para dar más contexto
  url: string;         // Añadido para hacer el enlace dinámico
  category: 'art' | 'projects' | 'blog';  // Para estilos específicos por categoría
}

// Card.tsx
import { Link } from 'react-router-dom';

const Card: React.FC<CardProps> = ({
  title,
  image,
  description,
  url,
  category
}) => {
  const { imgSrc, imgAlt } = image;

  return (
    <article className={`card ${category}`}>
      <div className="img_container">
        <img 
          className="card__image" 
          src={imgSrc} 
          alt={imgAlt} 
          loading="lazy"  // Mejora de performance
        />
        <div className="card__overlay">
        </div>
      </div>
      
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

  {/*     <Link 
          to={url} 
          className="card__button"
          aria-label={`Ver más sobre ${title}`}
        >
          {category === 'art' && 'Ver Galería'}
          {category === 'projects' && 'Ver Proyectos'}
          {category === 'blog' && 'Leer Más'}
        </Link>
  */}      

      </div>
    </article>
  );
};

export default Card
