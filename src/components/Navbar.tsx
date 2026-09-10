import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import { useTheme } from '../context/ThemeContext'

import { LinkButton } from './Button'

import walletLogo from '../assets/wallet-logo.png'
import walletLogoWhite from '../assets/coinstep white logo.png'

import './Navbar.css'

const LINKS = [
  { to: '/platform', label: 'Platform' },
  { to: '/features', label: 'Features' },
  { to: '/build', label: 'Build' },
  { to: '/support', label: 'Support' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const { theme, toggleTheme } = useTheme()

  const [menuOpen, setMenuOpen] = useState(false)

  // Close mobile menu when screen becomes desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Prevent page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="nav">
      <div className="container nav-inner">

        {/* LOGO */}
        <NavLink
          to="/"
          className="nav-brand"
          aria-label="Coinstep home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={theme === 'dark' ? walletLogoWhite : walletLogo}
            alt="Coinstep"
            className="nav-logo-image"
          />

          <span>Coinstep</span>
        </NavLink>

        {/* NAVIGATION */}
        <nav
          className="nav-links"
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                'nav-link' +
                (isActive ? ' nav-link-active' : '')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="nav-actions">

          {/* THEME BUTTON */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
            title={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>

          {/* GET COINSTEP */}
          <LinkButton
            href="#download"
            size="sm"
          >
            Get Coinstep
          </LinkButton>

        </div>

        {/* ============================================================
            MOBILE ACTIONS
            ============================================================ */}
        <div className="mobile-actions">

          {/* MOBILE THEME BUTTON */}
          <button
            type="button"
            className="mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
            title={`Switch to ${
              theme === 'light' ? 'dark' : 'light'
            } theme`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? '×' : '☰'}
          </button>

        </div>
      </div>

      {/* ============================================================
          MOBILE NAVIGATION
          ============================================================ */}
      <nav
        className={`mobile-nav ${
          menuOpen ? 'mobile-nav-open' : ''
        }`}
        aria-label="Mobile navigation"
      >

        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              'mobile-nav-link' +
              (isActive ? ' mobile-nav-link-active' : '')
            }
            onClick={() => setMenuOpen(false)}
          >
            <span>{link.label}</span>

            {/* CHEVRON RIGHT */}
            <ChevronRightIcon className="mobile-nav-arrow" />
          </NavLink>
        ))}

      </nav>
    </header>
  )
}