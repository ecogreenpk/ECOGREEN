import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import '../styles/Hero.css'

function Hero() {
  const heroRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const bg = bgRef.current
    if (!hero || !bg) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const heroH = hero.offsetHeight
        if (scrollY < heroH) {
          bg.style.transform = `translateY(${scrollY * 0.35}px) scale(1.08)`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Parallax background */}
      <div className="hero-background">
        <img
          ref={bgRef}
          src="/images/pictures/facility/hero.webp"
          alt="EcoGreen Facility"
          className="hero-banner"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
      </div>

      {/* Gradient overlays */}
      <div className="hero-overlay" />
      <div className="hero-overlay-bottom" />

      {/* Floating ambient particles */}
      <div className="hero-particles" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot" />
            Hazard Free &nbsp;·&nbsp; Eco Friendly
          </div>

          <h2 className="hero-title">
            <span className="title-word title-word-1">Eco</span>
            <span className="title-word title-word-2">Green</span>
          </h2>

          <p className="hero-subtitle">
            Waste Management · Pollution Control · Environmental Services
          </p>

          <div className="hero-buttons">
            <Link to="/get-quote" className="btn btn-primary hero-btn-primary">
              Get a Quote
              <span className="btn-arrow-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link to="/about" className="btn btn-outline hero-btn-outline">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Feature pills */}
      <div className="hero-features-compact">
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">monitoring</span>
          <div className="feature-text">
            <h4>24/7 Monitoring</h4>
            <p>Complete transparency in all operations</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">description</span>
          <div className="feature-text">
            <h4>Full Documentation</h4>
            <p>Disposal certificates included</p>
          </div>
        </div>
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">eco</span>
          <div className="feature-text">
            <h4>Sustainable Methods</h4>
            <p>Reduce, Reuse, Recycle approach</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" aria-hidden="true">
        <span className="scroll-cue-line" />
      </div>
    </section>
  )
}

export default Hero
