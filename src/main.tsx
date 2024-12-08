import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/layout/header/Header.tsx'
import Home from './components/home/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
