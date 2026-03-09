import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const scrolledRef = useRef(false)
  const throttleRef = useRef(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => {
      if (throttleRef.current) return

      const y = window.scrollY || window.pageYOffset
      const shouldBeScrolled = y > 40

      if (shouldBeScrolled !== scrolledRef.current) {
        scrolledRef.current = shouldBeScrolled
        setIsScrolled(shouldBeScrolled)
      }

      throttleRef.current = true
      setTimeout(() => {
        throttleRef.current = false
      }, 100)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      const y = window.scrollY || window.pageYOffset
      const newScrolled = y > 40
      if (newScrolled !== scrolledRef.current) {
        scrolledRef.current = newScrolled
        setIsScrolled(newScrolled)
      }
    }

    window.addEventListener('resize', onResize, { passive: true })
    window.addEventListener('orientationchange', onResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="/images/logonew.webp" alt="EcoGreen Logo" className="logo-image" width="50" height="50" loading="eager" />
            <div className="logo-text">
              <h1>
                <span style={{ color: '#0077B6' }}>Eco</span>
                <span style={{ color: '#2D6A4F' }}>Green</span>
              </h1>
              <p className="tagline"><i>Hazard Free - Eco Friendly</i></p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/mission-vision">Mission & Vision</Link>
            <Link to="/facilities">Facilities</Link>
            <Link to="/upcycled-decor">Upcycled Decor</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/feedback">Feedback</Link>
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
