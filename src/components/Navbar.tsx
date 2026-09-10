import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { LinkButton } from './Button'
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

  return (
    <header className="nav">
      <div className="container nav-inner">
        <NavLink to="/" className="nav-brand" aria-label="Coinstep home">
          <span className="nav-mark" aria-hidden="true" />
          Coinstep
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <LinkButton href="#download" size="sm">
            Get Coinstep
          </LinkButton>
        </div>
      </div>
    </header>
  )
}
