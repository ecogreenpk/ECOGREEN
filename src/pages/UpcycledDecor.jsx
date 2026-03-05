import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function UpcycledDecor() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Upcycled Garden Decor</h1>
        <p>Planting, gardening, and decor using recycling processes</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section">
            <h2>Green Craftsmanship</h2>
            <p>
              We create sustainable garden decor and planting solutions by upcycling materials.
              From planters and garden beds to trellises and pathways, each piece combines durability
              with eco-conscious design.
            </p>
          </div>

          <div className="content-section">
            <h2>Collections</h2>
            <div className="values-grid">
              <div className="value-item leaf-card">
                <h3>Planters & Pots</h3>
                <p>Upcycled containers turned into stylish planters suitable for indoor and outdoor use.</p>
              </div>
              <div className="value-item leaf-card">
                <h3>Garden Beds</h3>
                <p>Raised beds built from reclaimed materials for efficient, healthy plant growth.</p>
              </div>
              <div className="value-item leaf-card">
                <h3>Trellises & Supports</h3>
                <p>Elegant vertical structures for vines and climbers, crafted from recycled metals and wood.</p>
              </div>
              <div className="value-item leaf-card">
                <h3>Pathways & Borders</h3>
                <p>Decorative borders and stepping paths using repurposed components for a natural look.</p>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Gallery</h2>
            <p>Explore our beautiful upcycled garden creations and sustainable planting solutions.</p>
            <div className="gallery-grid">
              <div className="gallery-item">
                <img 
                  src="/images/pictures/garden/garden.jfif" 
                  alt="Upcycled Garden Showcase"
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span>Upcycled</span>
                  <h4>Garden Showcase</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/pictures/garden/floral.jfif" 
                  alt="Floral Arrangements"
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span>Plants</span>
                  <h4>Floral Arrangements</h4>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/pictures/garden/lawn.jfif" 
                  alt="Natural Lawn Spaces"
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span>Grass</span>
                  <h4>Natural Lawn Spaces</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Start Your Upcycled Garden Project</h3>
            <Link to="/get-quote" className="btn-primary">Request a Design</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UpcycledDecor
