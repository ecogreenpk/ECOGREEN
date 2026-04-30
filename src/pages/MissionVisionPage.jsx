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
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                </div>
                <h3>Sustainability</h3>
                <p>Environmental protection in every action</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                </div>
                <h3>Integrity</h3>
                <p>Honest and transparent operations</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                </div>
                <h3>Innovation</h3>
                <p>Continuous improvement and technology</p>
              </div>
              <div className="value-item reveal">
                <div className="value-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
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
