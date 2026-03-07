// import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function AboutPage() {
  return (
    <div className="page-container">
      <div className="page-header reveal">
        <h1>About EcoGreen</h1>
        <p>Pioneering Waste Management Solutions for a Sustainable Future</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section reveal">
            <h2>Who We Are</h2>
            <p>
              EcoGreen is a leading waste management and recycling company committed to providing
              comprehensive, environmentally responsible solutions. With years of industry experience,
              we have established ourselves as a trusted partner for businesses and institutions seeking
              sustainable waste management practices.
            </p>
            <p>
              Our mission is to transform waste into resources, ensuring a cleaner environment for future generations.
            </p>
          </div>

          <div className="content-section reveal">
            <h2>Our Expertise</h2>
            <p>
              From industrial waste to electronic recycling, we cover the full spectrum of waste management needs.
              Our state-of-the-art facilities ensure maximum recovery and minimal environmental impact.
            </p>
            <div className="expertise-grid">
              <div className="expertise-item reveal">
                <span className="material-symbols-outlined expertise-icon">factory</span>
                <h3>Industrial Waste Management</h3>
                <p>Comprehensive handling of industrial waste streams</p>
              </div>
              <div className="expertise-item reveal">
                <span className="material-symbols-outlined expertise-icon">dangerous</span>
                <h3>Hazardous Materials</h3>
                <p>Safe disposal of hazardous and toxic substances</p>
              </div>
              <div className="expertise-item reveal">
                <span className="material-symbols-outlined expertise-icon">devices_other</span>
                <h3>E-waste Recycling</h3>
                <p>Proper recycling of electronic waste</p>
              </div>
              <div className="expertise-item reveal">
                <span className="material-symbols-outlined expertise-icon">handshake</span>
                <h3>Scrap Trading</h3>
                <p>Quality scrap materials and recycled products</p>
              </div>
            </div>
          </div>

          <div className="content-section reveal">
            <h2>Why Choose Us?</h2>
            <ul className="benefits-list">
              <li>Certified and Compliant - All necessary certifications and legal compliance</li>
              <li>Expert Team - Trained professionals with years of experience</li>
              <li>Advanced Technology - State-of-the-art waste processing facilities</li>
              <li>Environmental Responsibility - Committed to sustainable practices</li>
              <li>Reliable Service - Timely and professional waste management</li>
              <li>Cost Effective - Competitive pricing without compromising quality</li>
            </ul>
          </div>

          <div className="content-section reveal">
            <h2>Safety & Compliance</h2>
            <p>
              At EcoGreen, safety is our top priority. We maintain the highest standards of worker safety
              and environmental compliance through rigorous training and modern protective equipment.
            </p>
            <div className="expertise-grid">
              <div className="facility-card">
                <img src="/images/pictures/safety/safety1.png" alt="Safety Protocol" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Strict Protocols</h3>
                  <p>Comprehensive safety measures for every processing stage.</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/safety/safety2.png" alt="Protective Gear" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Personal Protection</h3>
                  <p>Ensuring our team is equipped with top-tier safety gear.</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/safety/safety3.png" alt="Safety Training" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Regular Training</h3>
                  <p>Continuous education on the latest safety and compliance standards.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section reveal">
            <h3>Ready to Partner with Us?</h3>
            <Link to="/get-quote" className="btn-primary">Get Started Today</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage
