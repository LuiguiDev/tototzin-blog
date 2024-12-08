// Header.tsx
import { useState } from 'react';
import './header.css'

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Inicio', path: '/' },
  { label: 'Galería', path: '/galeria' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Blog', path: '/blog' },
  { label: 'Sobre Mí', path: '/about' },
  { label: 'Contacto', path: '/contacto' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          Luis Rodríguez
        </a>

        {/* Botón de menú móvil */}
        <button 
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        {/* Navegación */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;