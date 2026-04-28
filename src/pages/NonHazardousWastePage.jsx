import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function NonHazardousWastePage() {
  return (
    <div className="page-container">
      <div className="page-header non-hazardous-header">
        <h1>Non-Hazardous Waste Management</h1>
        <p>Sustainable Solutions for General Waste and Recyclables</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section">
            <h2>What We Handle</h2>
            <p>We provide comprehensive non-hazardous waste solutions focused on sustainability and maximum resource recovery.</p>
            <div className="waste-categories" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div className="waste-item" style={{ borderLeftColor: 'var(--secondary-green)', padding: 0 }}>
                <img src="/images/pictures/NON hazarduous/godown.webp" alt="National Collection" className="card-img-top" />
                <div className="card-content">
                  <h3>National & Multinational Collection</h3>
                  <p>Comprehensive collection, transportation, storage, and handling/disposal of Non-Hazardous Waste Material from various National and Multinational Companies working in Pakistan.</p>
                </div>
              </div>
              <div className="waste-item" style={{ borderLeftColor: 'var(--secondary-green)', padding: 0 }}>
                <img src="/images/pictures/NON hazarduous/scrap tin.webp" alt="3R System" className="card-img-top" />
                <div className="card-content">
                  <h3>3R System Disposal</h3>
                  <p>Professional disposal of Non-Hazardous Waste Material strictly based on the 3R system of <strong>Waste Reduce, Reuse, and Recycle</strong>.</p>
                </div>
              </div>
              <div className="waste-item" style={{ borderLeftColor: 'var(--secondary-green)', padding: 0 }}>
                <img src="/images/pictures/NON hazarduous/shreded.webp" alt="Aerobic Composting" className="card-img-top" />
                <div className="card-content">
                  <h3>Aerobic Composting</h3>
                  <p>Conversion of food waste to high-quality compost. Our composting process involves returning essential nutrients back into the environment by aerobically decomposing food waste material emerging from any food processing industries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section featured-highlight">
            <div className="highlight-card">
              <div className="highlight-content">
                <h2>Upcycled Garden Decor</h2>
                <div className="badge">Featured Innovation</div>
                <p>
                  Turning non-hazardous waste into beautiful, functional garden art.
                  Our upcycling initiative breathes new life into scrap materials,
                  creating unique planters, sculptures, and garden furniture.
                </p>
                <ul className="highlight-features">
                  <li><span className="material-symbols-outlined">eco</span> 100% Recycled Materials</li>
                  <li><span className="material-symbols-outlined">palette</span> Handcrafted Designs</li>
                  <li><span className="material-symbols-outlined">yard</span> Weather-Resistant & Sustainable</li>
                </ul>
                <Link to="/upcycled-decor" className="btn-highlight">Explore Decor Collection</Link>
              </div>
              <div className="highlight-image">
                <Link to="/upcycled-decor" aria-label="View Upcycled Decor Collection">
                  <img src="/images/pictures/NON hazarduous/download.webp" alt="Upcycled Garden Decor example" />
                </Link>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Recycling Solutions</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">delete_sweep</span>
                </div>
                <h3>Collection</h3>
                <p>Scheduled collection from your location</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">category</span>
                </div>
                <h3>Segregation</h3>
                <p>Proper sorting and classification</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">factory</span>
                </div>
                <h3>Processing</h3>
                <p>Recycling facility processing</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">autorenew</span>
                </div>
                <h3>Recycling</h3>
                <p>Conversion into new products</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <h3>Reporting</h3>
                <p>Documentation and environmental impact reports</p>
              </div>
            </div>
          </div>

          <div className="content-section benefits-section">
            <h2>Benefits of Our Service</h2>
            <ul className="benefits-list">
              <li>Reduces landfill waste by up to 80%</li>
              <li>Sustainable circular economy practices</li>
              <li>Cost-effective waste management</li>
              <li>Environmental impact reporting</li>
              <li>Regular monitoring and optimization</li>
              <li>Customized solutions for your needs</li>
            </ul>
          </div>

          <div className="cta-section">
            <h3>Start Your Waste Management Journey</h3>
            <Link to="/get-quote" className="btn-primary">Get Started Today</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default NonHazardousWastePage
