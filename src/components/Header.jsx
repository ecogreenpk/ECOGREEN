import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/mission-vision', label: 'Mission & Vision' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/upcycled-decor', label: 'Upcycled Decor' },
  { to: '/blog', label: 'Blog' },
  { to: '/feedback', label: 'Feedback' },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrolledRef = useRef(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY || window.pageYOffset
        const shouldBeScrolled = y > 20

        if (shouldBeScrolled !== scrolledRef.current) {
          scrolledRef.current = shouldBeScrolled
          setIsScrolled(shouldBeScrolled)
        }
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logonew.webp" alt="EcoGreen Logo" className="logo-image" width="50" height="50" loading="eager" />
            <div className="logo-text">
              <h1>
                <span className="logo-eco">Eco</span>
                <span className="logo-green">Green</span>
              </h1>
              <p className="tagline"><i>Hazard Free - Eco Friendly</i></p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`} role="navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${isActive(to) ? 'active' : ''}`}
              >
                {label}
                <span className="nav-link-underline" />
              </Link>
            ))}
            <Link to="/get-quote" className="mobile-quote-link">Get a Quote</Link>
          </nav>

          <div className="header-right">
            <div className="header-cta">
              <Link className="btn btn-quote" to="/get-quote">Get a Quote</Link>
            </div>

            <button
              className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger">
                <span className="line line-1" />
                <span className="line line-2" />
                <span className="line line-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
