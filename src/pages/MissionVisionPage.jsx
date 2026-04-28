import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function MissionVisionPage() {
  return (
    <div className="page-container">
      <div className="page-header reveal">
        <h1>Mission & Vision</h1>
        <p>Our Commitment to Environmental Excellence</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="mission-vision-grid">
            <div className="mv-card reveal">
              <h2>Our Mission</h2>
              <p>
                To provide safe, compliant, and sustainable waste management solutions that protect
                the environment and support the circular economy. We aim to be the trusted partner
                for businesses seeking responsible waste disposal and recycling services.
              </p>
            </div>

            <div className="mv-card reveal">
              <h2>Our Vision</h2>
              <p>
                To become the leading sustainable waste management company, driving positive
                environmental change through innovation, technology, and unwavering commitment
                to environmental stewardship and social responsibility.
              </p>
            </div>
          </div>

          <div className="content-section values-section reveal">
            <h2>Core Values</h2>
            <div className="values-grid">
              <div className="value-item reveal">
                <div className="value-icon"></div>
                <h3>Sustainability</h3>
                <p>Environmental protection in every action</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon"></div>
                <h3>Integrity</h3>
                <p>Honest and transparent operations</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon"></div>
                <h3>Innovation</h3>
                <p>Continuous improvement and technology</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon"></div>
                <h3>Excellence</h3>
                <p>Superior service delivery always</p>
              </div>
            </div>
          </div>

          <div className="cta-section reveal">
            <h3>Join Us on Our Sustainability Journey</h3>
            <Link to="/get-quote" className="btn-primary">Partner with EcoGreen</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MissionVisionPage
