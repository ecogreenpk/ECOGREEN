import { Link } from 'react-router-dom'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="/images/pictures/facility/hero.jfif"
          alt="EcoGreen Facility"
          className="hero-banner"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">Hazard Free - Eco Friendly</div>
          <h2 className="hero-title">EcoGreen</h2>
          <p className="hero-subtitle">
            Waste Management - Pollution Control and Environmental Services
          </p>
          <div className="hero-buttons">
            <Link to="/get-quote" className="btn btn-primary">
              Get a Quote <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-features-compact">
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">monitoring</span>
          <h4>24/7 Monitoring</h4>
          <p>Complete transparency in all operations</p>
        </div>
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">description</span>
          <h4>Full Documentation</h4>
          <p>Disposal certificates included</p>
        </div>
        <div className="feature-item">
          <span className="material-symbols-outlined feature-icon">eco</span>
          <h4>Sustainable Methods</h4>
          <p>Reduce, Reuse, Recycle approach</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
