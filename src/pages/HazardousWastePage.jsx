import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function HazardousWastePage() {
  return (
    <div className="page-container">
      <div className="page-header hazardous-header">
        <h1>Hazardous Waste Management</h1>
        <p>Safe, Compliant, and Professional Hazardous Waste Disposal</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section">
            <h2>What We Handle</h2>
            <p>EcoGreen specializes in the safe disposal of hazardous materials with complete regulatory compliance and documentation.</p>
            <div className="waste-categories">
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/stp.webp" alt="Chemical Waste" className="card-img-top" />
                <div className="card-content">
                  <h3>Chemical Waste</h3>
                  <p>Industrial chemicals, solvents, and chemical compounds</p>
                </div>
              </div>
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/medicalwaste.webp" alt="Medical Waste" className="card-img-top" />
                <div className="card-content">
                  <h3>Medical Waste</h3>
                  <p>Hospital and healthcare facility waste</p>
                </div>
              </div>
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/incinetrating.webp" alt="Toxic Materials" className="card-img-top" />
                <div className="card-content">
                  <h3>Toxic Materials</h3>
                  <p>Pesticides, heavy metals, and hazardous substances</p>
                </div>
              </div>
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/electronic waste.webp" alt="Electronic Components" className="card-img-top" />
                <div className="card-content">
                  <h3>Electronic Components</h3>
                  <p>Circuit boards and electronic hazardous materials</p>
                </div>
              </div>
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/oil waste.webp" alt="Oil & Lubricants" className="card-img-top" />
                <div className="card-content">
                  <h3>Oil & Lubricants</h3>
                  <p>Used oils, lubricants, and fuel wastes</p>
                </div>
              </div>
              <div className="waste-item">
                <img src="/images/pictures/Hazarduous/abestos.webp" alt="Asbestos" className="card-img-top" />
                <div className="card-content">
                  <h3>Asbestos</h3>
                  <p>Asbestos-containing materials disposal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">assignment</span>
                </div>
                <h3>Assessment</h3>
                <p>Complete evaluation of hazardous materials</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <h3>Collection</h3>
                <p>Safe and secure collection services</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">move_up</span>
                </div>
                <h3>Transport</h3>
                <p>Compliant transportation with documentation</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">precision_manufacturing</span>
                </div>
                <h3>Treatment</h3>
                <p>Proper treatment and processing</p>
              </div>
              <div className="step">
                <div className="step-num">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <h3>Compliance</h3>
                <p>Full regulatory compliance and reporting</p>
              </div>
            </div>
          </div>

          <div className="content-section compliance-section">
            <h2>Compliance & Certifications</h2>
            <ul className="compliance-list">
              <li>Environmental Management Compliance</li>
              <li>Hazardous Waste Handler License</li>
              <li>Government Approved Facility</li>
              <li>Full Documentation & Reporting</li>
              <li>Transportation Permits</li>
            </ul>
          </div>

          <div className="cta-section">
            <h3>Need Hazardous Waste Disposal?</h3>
            <Link to="/get-quote" className="btn-primary">Get a Quote Today</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HazardousWastePage
