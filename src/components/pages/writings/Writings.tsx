import './writings.css'


interface DocumentProps {
  title: string
  content: string
}

const Document: React.FC<DocumentProps> = ({ title, content }) => {
  return (
    <div className="document_container">
      <h2>{title}</h2>
      <div className="content_container">
        <p>{content}</p>
      </div>
      <p className="keep_reading">
        Seguir leyendo
      </p>
    </div>
  )
}

const Writings = () => {
  const DOCUMENT = {
    title: 'Mi separación de la religión',
    content: 'Hace mucho tiempo dejé de creer en Dios, no sin reemplazar las cosas que ofrece tener una religión. Aquí comparto las respuestas que he encontrado a través de la razón, la ciencia y el propósito de mejorar como individuo a los problemas que la religión intenta resolver como son el sentido de la vida y la explicación del origen de las cosas'
  }

  return (
    <div className="writings_container">
      <Document title={DOCUMENT.title} content={DOCUMENT.content} />
      <Document title={DOCUMENT.title} content={DOCUMENT.content} />
    </div>
  )
}

export default Writings