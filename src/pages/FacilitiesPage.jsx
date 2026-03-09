import { Link } from 'react-router-dom'
import '../pages/styles/CommonPages.css'

function FacilitiesPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Our Facilities</h1>
        <p>State-of-the-Art Waste Management Infrastructure</p>
      </div>

      <div className="container">
        <section className="page-content">
          <div className="content-section">
            <h2>Advanced Facilities & Equipment</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <img src="/images/pictures/facility/machine cu.webp" alt="Treatment Plant" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Hazardous Waste Treatment Plant</h3>
                  <p>Equipped with incineration and chemical treatment capabilities producing zero waste to landfill</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/facility/shredders.webp" alt="Recycling Facility" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Recycling Facility</h3>
                  <p>Advanced sorting and processing equipment for maximum material recovery</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/facility/storage.webp" alt="Storage Warehouses" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Storage Warehouses</h3>
                  <p>Temperature controlled, secure facilities with 24/7 monitoring</p>
                </div> 
              </div>
              <div className="facility-card">
                <img src="/images/pictures/facility/machinery.webp" alt="Vehicle Fleet & Equipment" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Equipment Fleet</h3>
                  <p>Modern, heavy-duty processing machinery compliant with environmental standards</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/facility/laboratory.webp" alt="Laboratory Monitoring" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Laboratory</h3>
                  <p>On-site testing and quality assurance facilities</p>
                </div>
              </div>
              <div className="facility-card">
                <img src="/images/pictures/facility/processing.webp" alt="Administrative Hub" className="card-img-top" loading="lazy" width="800" height="450" />
                <div className="card-content">
                  <h3>Materials Processing</h3>
                  <p>Large scale professional dumping and organizing areas for raw materials</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content-section">
            <h2>Facility Specifications</h2>
            <div className="specs-table">
              <div className="spec-row">
                <span className="spec-label">Total Area</span>
                <span className="spec-value">15+ Acres</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Processing Capacity</span>
                <span className="spec-value">100+ Tons/Day</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Staff</span>
                <span className="spec-value">60+ Trained Professionals</span>
              </div>
              <div className="spec-row">
                <span className="spec-label">Operating Hours</span>
                <span className="spec-value">24/7</span>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Experience Our Excellence</h3>
            <Link to="/get-quote" className="btn-primary">Schedule a Visit</Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default FacilitiesPage
