import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './styles/HomePage.css'
import Hero from '../components/Hero'
import QuotesSlider from '../components/QuotesSlider'
import ServiceCard from '../components/ServiceCard'
import { services, galleryImages, infoLinks } from '../data/homeData'

function HomePage() {
  const [expandedId, setExpandedId] = useState(null)
  const [activeTab, setActiveTab] = useState('All')

  const toggleExpand = useCallback((id) => {
    setExpandedId(prev => (prev === id ? null : id))
  }, [])

  const galleryTabs = useMemo(() => {
    const categories = ['All', ...new Set(galleryImages.map(img => img.category))]
    return categories
  }, [galleryImages])

  const filteredImages = useMemo(() => {
    return activeTab === 'All'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeTab)
  }, [activeTab, galleryImages])

  return (
    <div className="home-page">
      <Hero />

      {/* Professional Services Section */}
      <section className="services-grid reveal">
        <div className="container">
          <h2 className="section-title">Comprehensive Waste Services</h2>
          <div className="grid-container">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedId === service.id}
                onToggle={toggleExpand}
                className={`reveal-d${Math.min(index + 1, 5)}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Operational Showcase Gallery */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Operational Discovery: System in Action</h2>
          <p className="section-subtitle">
            A visual showcase of our state-of-the-art facilities, specialized machinery, and commitment to safety.
          </p>

          <div className="gallery-tabs">
            {galleryTabs.map((tab) => (
              <button
                key={tab}
                className={`gallery-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <figure key={img.src} className="gallery-item">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                />
                <figcaption className="gallery-overlay">
                  <span>{img.category}</span>
                  <h4>{img.alt}</h4>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section reveal">
        <div className="container">
          <div className="info-grid">
            {infoLinks.map((link, index) => (
              <Link key={link.to} to={link.to} className={`info-card reveal reveal-d${Math.min(index + 1, 5)}`}>
                <h3>{link.title}</h3>
                <p>{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuotesSlider />
    </div>
  )
}

export default HomePage
