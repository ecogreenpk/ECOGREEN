import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'
import '../pages/styles/UpcycledDecor.css'

const galleryItems = [
  {
    src: '/images/pictures/garden/garden.webp',
    alt: 'Upcycled Garden Showcase',
    tag: 'Upcycled',
    title: 'Garden Showcase'
  },
  {
    src: '/images/pictures/garden/floral.webp',
    alt: 'Floral Arrangements',
    tag: 'Plants',
    title: 'Floral Arrangements'
  },
  {
    src: '/images/pictures/garden/lawn.webp',
    alt: 'Natural Lawn Spaces',
    tag: 'Grass',
    title: 'Natural Lawn Spaces'
  },
  {
    src: '/images/pictures/NON hazarduous/download.webp',
    alt: 'Recycled Decor',
    tag: 'Decor',
    title: 'Recycled Art'
  }
]

function UpcycledDecor() {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="upcycled-hero">
        <h1>Upcycled Garden Decor</h1>
        <p>Turning waste into beautiful, functional, and sustainable garden art.</p>
      </div>

      <div className="container">
        <section className="page-content">
          {/* Introduction */}
          <div className="content-section text-center">
            <h2>Green Craftsmanship</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
              We create sustainable garden decor and planting solutions by upcycling materials.
              From planters and garden beds to trellises and pathways, each piece combines durability
              with eco-conscious design. Our mission is to reduce waste while beautifying your outdoor spaces.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="content-section why-choose-section">
            <h2 className="text-center">Why Choose Upcycled?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="material-symbols-outlined benefit-icon">eco</span>
                <h3>Sustainability</h3>
                <p>Reduce landfill waste by giving materials a second life.</p>
              </div>
              <div className="benefit-card">
                <span className="material-symbols-outlined benefit-icon">style</span>
                <h3>Unique Design</h3>
                <p>One-of-a-kind pieces with rustic charm and character.</p>
              </div>
              <div className="benefit-card">
                <span className="material-symbols-outlined benefit-icon">shield</span>
                <h3>Durability</h3>
                <p>Weather-resistant materials built to last outdoors.</p>
              </div>
            </div>
          </div>

          {/* Collections Section */}
          <div className="content-section">
            <h2 className="text-center">Our Collections</h2>
            <div className="values-grid">
              <div className="collection-card">
                <div className="collection-icon-wrapper">
                  <span className="material-symbols-outlined collection-icon">potted_plant</span>
                </div>
                <div className="collection-content">
                  <h3>Planters & Pots</h3>
                  <p>Upcycled containers turned into stylish planters suitable for indoor and outdoor use.</p>
                </div>
              </div>
              <div className="collection-card">
                <div className="collection-icon-wrapper">
                  <span className="material-symbols-outlined collection-icon">grass</span>
                </div>
                <div className="collection-content">
                  <h3>Garden Beds</h3>
                  <p>Raised beds built from reclaimed materials for efficient, healthy plant growth.</p>
                </div>
              </div>
              <div className="collection-card">
                <div className="collection-icon-wrapper">
                  <span className="material-symbols-outlined collection-icon">fence</span>
                </div>
                <div className="collection-content">
                  <h3>Trellises & Supports</h3>
                  <p>Elegant vertical structures for vines and climbers, crafted from recycled metals and wood.</p>
                </div>
              </div>
              <div className="collection-card">
                <div className="collection-icon-wrapper">
                  <span className="material-symbols-outlined collection-icon">timeline</span>
                </div>
                <div className="collection-content">
                  <h3>Pathways & Borders</h3>
                  <p>Decorative borders and stepping paths using repurposed components for a natural look.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="content-section">
            <h2 className="text-center">Gallery Showcase</h2>
            <p className="text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              Explore our beautiful upcycled garden creations and sustainable planting solutions.
            </p>
            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <article className="gallery-item" key={item.src}>
                  <div className="gallery-image-wrap">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="gallery-image"
                      loading="eager"
                    />
                  </div>
                  <div className="gallery-overlay">
                    <span>{item.tag}</span>
                    <h4>{item.title}</h4>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="cta-section-enhanced">
            <h3>Start Your Upcycled Garden Project</h3>
            <p>Ready to transform your garden with sustainable decor? Contact us today for a custom design.</p>
            <Link
              to="/get-quote"
              state={{ prefilledWasteType: 'upcycled-decor' }}
              className="btn-cta"
            >
              Request a Design
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UpcycledDecor
