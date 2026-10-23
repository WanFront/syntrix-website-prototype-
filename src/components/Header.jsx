import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Moon, Sun } from 'lucide-react'
import { getTheme, switchTheme } from '../theme.js'
import './Header.css'

// --- Theme Toggle ---
function ThemeToggle() {
  const buttonRef = useRef(null)
  // --- useState ---
  const [theme, setTheme] = useState(getTheme)
  const isDark = theme === 'dark'

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      onClick={() => switchTheme(isDark ? 'light' : 'dark', buttonRef.current, setTheme)}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

// --- Header (props) ---
export default function Header({ businessName, navLinks }) {
  // --- useState ---
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // --- close mobile menu on route change ---
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // --- close mobile menu on Escape / desktop resize ---
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    const onResize = () => window.innerWidth > 640 && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header${menuOpen ? ' menu-open' : ''}`}>
      <div className="logo-container">
        <div className="logo-circle"></div>
        <Link to="/" className="logo-name">{businessName}.</Link>
      </div>

      <nav className="navbar" id="primary-nav">
        {/* --- map --- */}
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={closeMenu}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="#contact" className="contact-link navbar-contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="header-actions">
        <ThemeToggle />
        <a href="#contact" className="contact-link">Contact</a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
