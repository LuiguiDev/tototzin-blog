import { useState } from 'react'
import './canvas_vista.css'

interface CanvasVistaProps {
  img: string
}

interface BtnPoinerProps {
  manageShowWindow: (newState: boolean) => void 
}

export const BtnPoiner: React.FC<BtnPoinerProps> = ({ manageShowWindow }) => {
  return (
    <button className="btn_pointer">
      ⚫
    </button>
  )
}

interface AboutSectionProps {
  hided: boolean
}

const AboutSection: React.FC<AboutSectionProps> = ({ hided }) => {
  if (hided) return


  return (
    <div className="about_section">
      <p>Esta ventana se mostrará al dar click al botón de arriba</p>
    </div>
  )
}

export const CanvasVista: React.FC<CanvasVistaProps> = ({ img }) => {
  const [showWindow, setShowWindow] = useState(false)

  function manageShowWindow (newState: boolean) {
    setShowWindow(newState)
  }

  return (
    <main className="canvas_vista">
      <div className="canvas_image">
        <img src={img} alt="" />
      </div>
      <BtnPoiner />
      <AboutSection hided={false} />
    </main>
  )
}
