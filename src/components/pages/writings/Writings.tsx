interface DocumentProps {
  title: string
  content: string
}

const Document: React.FC<DocumentProps> = ({ title, content }) => {
  return (
    <div className="document_container">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

const Writings = () => {
  const DOCUMENT = {
    title: 'Mi separación de la religión',
    content: 'Hace mucho tiempo dejé de creer en Dios, no sin reemplazar las cosas que ofrece tener una religión. Aquí comparto las respuestas que he encontrado a través de la razón a los problemas que la religión intenta resolver'
  }

  return (
    <div className="writings_container">
      <Document title={DOCUMENT.title} content={DOCUMENT.content} />
    </div>
  )
}

export default Writings